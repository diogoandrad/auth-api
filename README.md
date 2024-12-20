# Auth API

## :page_facing_up:	Description

The project is designed with an architecture that supports the development of future APIs. It is a RESTful API developed following the Domain-Driven Design (DDD) model, with a layered architecture and clean architecture principles. The project adheres to SOLID principles and clean code practices. It utilizes TypeORM and PostgreSQL for data management and storage.

## :computer: Technologies

:small_blue_diamond: [NodeJs](https://nodejs.org/docs/latest/api/)

## :pushpin: Functionalities

:heavy_check_mark: Authentication

:heavy_check_mark: Manage users

:heavy_check_mark: Manage profiles

## :arrow_forward: Run

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

Access: http://localhost:3333/

## :closed_book: License

Built by [Diogo Andrade](https://github.com/diogoandrad).
This project is on [MIT license](./LICENSE).
