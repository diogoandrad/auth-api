# Auth API

The project is designed with an architecture that supports the development of future APIs. It is a RESTful API developed following the Domain-Driven Design (DDD) model, with a layered architecture and clean architecture principles. The project adheres to SOLID principles and clean code practices. It utilizes TypeORM and PostgreSQL for data management and storage.

## Technologies

* NodeJs
* TypeORM
* JWT
* Docker

## Functionalities

* Authentication
* Manage users
* Manage profiles

## Run Database

```bash
docker run --name postgres --memory=2048m -e POSTGRES_PASSWORD="ak&v4xbd" -e POSTGRES_USER="admin"
  -e POSTGRES_DB="auth_db" -p 5435:5432 -v postgres-data:/var/lib/postgresql/data -d postgres
```

## Run Api

Clone the project:
```bash
git clone https://github.com/diogoandrad/auth-api.git
```

Enter the project folder:
```bash
cd auth-api
```

Install dependencies:
```bash
npm install
```

Run migrations:
```bash
npm run typeorm migration:run
```

Run the application:
```bash
npm run start:dev
```

## Author

Built by [Diogo Andrade](https://github.com/diogoandrad).

## License

This project is on [MIT license](./LICENSE).
