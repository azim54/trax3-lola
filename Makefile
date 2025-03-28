# set the ROOT_DIR var with an absolute path
ROOT_DIR:=$(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))

# The env file is shared between this Makefile and docker-compose
ENV_FILE=$(ROOT_DIR)/.env

# The envrc file is synced with the env file and is usable by direnv
ENVRC_FILE=$(ROOT_DIR)/.envrc

# Read the env file, and source it inside this Makefile
ifeq (,$(wildcard $(ENV_FILE)))
$(shell echo ROOT_DIR=${ROOT_DIR} > $(ENV_FILE))
$(shell cat .env.sample >> $(ENV_FILE))
$(info    )
$(info      an .env file has been generated for you; check its content)
$(info    )
endif


ifeq (,$(wildcard $(ENVRC_FILE)))
$(shell echo 'test -f $(ENV_FILE) && source <(sed -e "s/^[A-Z].*/export &/" $(ENV_FILE))' > $(ENVRC_FILE))
$(info      an .envrc file has been generated for you; leave it as it is)
endif

# Import the content of the env file within the execution context of this Makefile
include $(ENV_FILE)
export $(shell sed -e 's/=.*//' -e 's/^\#.*//' $(ENV_FILE))

.DEFAULT_GOAL := help
.PHONY: build help

OS=$(shell uname -s)

help: ## Display available commands in Makefile
	@grep -hE '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

## env file and direnv related goal ##
.envrc: .env # This target force a direnv allow if the .env file has changed
	@touch .envrc

##docker-compose commands ##
up: .envrc ## First start-up
	@docker-compose up -d

build: ## Build the instance
	@docker-compose build --pull

ps: ## Display the state of the container
	@docker-compose $@

start: ## Start the instance
	@docker-compose $@

stop: ## Stop the instance
	@docker-compose $@

restart: ## Restart the instance
	@docker-compose $@

logs: ## Access logs
	@docker-compose $@

bash: ## Bash access to the container
	@docker exec -it $(COMPOSE_PROJECT_NAME) bash

bashmysql: ## Connect to the the Mysql container
	@docker-compose exec $(COMPOSE_DB_NAME) bash

logsf: ## Access logs and follow them
	@docker-compose logs -f

remove_all: app_cleandb ## Reset the instance !! DELETE DATABASE !!
	@docker-compose down --rmi all --remove-orphans
	@docker-compose rm -sfv

remove_dangling: ## Remove Docker dangling images
	@docker image prune -f

trax_cacheclear: ## clear cache of the Trax application
	@docker-compose exec -w /var/www/trax3/ $(COMPOSE_PROJECT_NAME) php artisan cache:clear

trax_create_client: ## create a client
	@docker-compose exec -w /var/www/trax3/ $(COMPOSE_PROJECT_NAME) php artisan client:create

trax_initdb: ## init database
	@docker-compose exec -w /var/www/trax3/ trax php artisan migrate --force

trax_create_admin: ## create the admin user
	@docker-compose exec -w /var/www/html/traxlrs/ $(COMPOSE_PROJECT_NAME) php artisan user:create-admin

app_cleandb: ## delete databases files
	@rm -rf $(DB_DATA_DIR)/*

trax_list_db: ## List databases in Mysql server
	@docker-compose exec -u root:root db /usr/bin/mysql --password=${MYSQL_ROOT_PASSWORD} --execute "SHOW DATABASES"

env: ## Build .env
	@envsubst < .env > .env.tmp
	@mv .env.tmp .env
