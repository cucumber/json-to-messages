LANGUAGES ?= ruby javacript-json java javascript
include default.mk

default-javacript-json:
	cd javascript-json && make

clean-javacript-json:
	cd javascript-json && make clean
