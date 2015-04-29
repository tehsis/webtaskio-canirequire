all: build

build:
	 @echo "Generating canirequire.js..."
	 @browserify -t reactify -t babelify -o canirequire.js

serve:
	@./node_modules/http-server/bin/http-server
