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

# nuxtの導入(ファイルの追記あり)
nuxt:
	docker network create docker-line-spa
	npx create-nuxt-app src
	cp .env.example .env
	docker-compose up -d --build
	docker-compose exec front npm install --save @nuxtjs/proxy @nuxtjs/dotenv
	docker-compose exec front touch .env
	docker-compose exec front npm install sass-loader@10.1.1 node-sass --save-dev

# typescriptの導入(ファイルの追記あり)
typescript:
	docker-compose exec front npm install --save-dev @nuxt/types
	docker-compose exec front touch shims-vue.d.ts

# composition-apiの導入(ファイルの追記あり)
composition-api:
	docker-compose exec front npm install @nuxtjs/composition-api --save

# storybookの起動
storybook:
	docker-compose exec front npx sb init
	docker-compose exec front npm run storybook

# storybookの再起動
re-storybook:
	docker-compose exec front npm run storybook