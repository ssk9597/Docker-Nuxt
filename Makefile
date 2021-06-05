# docker-composeコマンド
up:
	docker-compose up -d
build:
	docker-compose up -d --build
down:
	docker-compose down
restart:
	docker-compose down
	docker-compose up -d --build

# docker-all-delete
delete:
	docker network prune
	docker volume rm `docker volume ls -q -f dangling=true`

start:
	docker network create docker-line-spa
	cp .env.example .env
	docker-compose up -d --build
	docker-compose exec front cp .env.example .env
	docker-compose exec front npm install

# storybookの起動
storybook:
	docker-compose exec front npx sb init
	docker-compose exec front npm run storybook

# storybookの再起動
re-storybook:
	docker-compose exec front npm run storybook