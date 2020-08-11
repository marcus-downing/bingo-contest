all: stylesheet javascript

stylesheet:
	npx node-sass src/scss/main.scss > public/app.css

javascript:
	cat node_modules/jquery/dist/jquery.slim.min.js node_modules/bootstrap/dist/js/bootstrap.min.js src/js/app.js > public/app.js

run:
	@nodejs src/nodejs/server.js

.PHONY: stylesheet javascript run