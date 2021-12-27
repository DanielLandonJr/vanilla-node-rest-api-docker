# Vanilla JavaScript REST Api using NODEjs

[TOC]

REST api tutorial I followed from Traversy Media "[Vanilla Node.js REST API | No Framework](https://www.youtube.com/watch?v=_1xa8Bsho6A&t=2939s)".

For reference [HTML Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

I followed the tutorial to get this working then added the necessary stuff so that it would run in docker.

Will be using a MVC pattern without the V.

If you are not using the `REST Client` extension in VSCode then use the url's in the `api.http` file.

## Start

```
npm run dev
```

This will start the server listening on port `5000` or whatever port number is supplied for `process.env.PORT`.

Currently returns a `200` status code with the json from the products.json file.

## Route Table

Route table will check for `GET` or `POST`. It will then check the url itself to determine what is being requested.

Currently only returns if you use url of `http://localhost:5000/products/api` with a `GET` method.

## Whats Going On

-  `productModel.js`
   -  `findAll()`
      -  Reads the `products.json` file and returns all data.
-  `productController.js`
   -  `getProducts()`
      -  Takes the request from `server.js` and resolves the response by using `findAll()` from the `productModel.js` file.

---

**_NOTE_**

I will be updating README with additional information as the project progresses.
