.PHONY: setup

setup:
	cd docker && docker-compose up -d --build && docker-compose logs -f

destroy:
	cd docker && docker-compose down -v

inspect:
	docker inspect node-server | grep "IPAddress"