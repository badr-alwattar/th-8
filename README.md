
# Thmanyah Search

This project utilises itunes search to make searching for content a lot eaaser.

simply use the `Search for term` endpoint to get a realtime results.

And if you want to see the search history use the `Search history` endpoint, this will return the search without the results, to get the results use the `Search results` to get the results of that search.

This project was built with ❤️ using `NestJS` along with `Postgresql`.

The project is deployed to the public internet, here is a postman collection ready for you to try the project.

[Click here to preview the Postman collection](https://github.com/badr-alwattar/th-8/blob/master/Assignment8.postman_collection.json)


## API Reference

#### Search for term

```
  GET /search/searchWithKeyword
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `search` | `string` | **Required**. the keyword you want to search for |

#### Search history

```
  GET /search
```


#### Search results

```
  GET /search/:id
```

> id: the search primary key



## Run Locally

Clone the project

```bash
  git clone https://github.com/badr-alwattar/th-8.git
```

Go to the project directory

```bash
  cd th-8
```

Install dependencies

```bash
  npm install
```

Configs

```bash
  cp .env.example .env
```
> **hint**: write your database configs in the `.env` file

Start the server

```bash
  npm run start:dev
```

