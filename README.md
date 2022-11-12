# Project

## :page_facing_up:	Description

O projeto tem uma arquitetura para desenvolvimento de apis futuras. O projeto é uma API RESTFUL e foi desenvolvido em modelo DDD, com arquitetura em camadas, arquitetura limpa, usando principios SOLID, clean code. Uso TypeOrm e postgres para gerenciamento e armazenamento de dados em banco.

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
yarn add
```

Run migrations:
```bash
yarn typeorm migration:run
```

Run the application:
```bash
yarn dev
```

Access: http://localhost:3333/

## :closed_book: License

Built by [Diogo Andrade](https://github.com/diogoandrad).
This project is on [MIT license](./LICENSE).
