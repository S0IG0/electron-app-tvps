clone:
	if [ -d "price-analysis" ]; then \
		cd price-analysis && git pull; \
	else \
		git clone https://github.com/S0IG0/price-analysis; \
	fi
docker-up:
	cd price-analysis && docker-compose up -d

install:
	npm install

start:
	npm start

run: clone docker-up install start
