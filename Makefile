all:
	java -jar ../plovr.jar serve main.json
build:
	java -jar ../plovr.jar build main.json > www/index.js
lint:
	fixjsstyle --strict -r .
	gjslint --strict -r .
