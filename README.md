# feathers-next

> 

## About

This project combines [Feathers](http://feathersjs.com) and [Next.js](https://nextjs.org/). **All credit for combining these two great tools goes to Albert Gao ([Blog Post](http://www.albertgao.xyz/2018/02/04/how-to-do-server-side-rendering-with-feathersjs-and-nextjs/), [Github Repo](https://github.com/Albert-Gao/feathers-next-example)).**

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/feathers-next; npm install
    ```

3. Start your app

    ```
    npm start
    ```

## Adding New Feathers Services

1. Generate a new Feathers service.

    ```
    feathers generate service
    ```

2. Add the service route to the `feathersServices` array in `nextApp.js`.

## License

Copyright (c) 2018

Licensed under the [MIT license](LICENSE).
