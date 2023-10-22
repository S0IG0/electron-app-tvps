clone:
	git clone https://github.com/S0IG0/price-analysis

docker-up:
	cd price-analysis && docker-compose up -d

install:
	npm install

start:
	npm start

run: clone docker-up install start
