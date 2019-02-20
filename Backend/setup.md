# Backend Setup

## Prerequirements
- Docker and docker compose.
- possible elevated rights

## Setup

Navigate to the root of the backend (where the docker-compose.yml file can be found) and execute:
```sh
docker-compose build;
docker-compose up;
```

Default two endpoints are available:
- http://localhost:6060: Mongo Express UI to manage the Mongo database
- http://localhost:5001: The API it self.
