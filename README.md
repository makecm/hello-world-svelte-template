# Make Hello World Starter Template (Svelte)

This project was bootstrapped with [Svelte CLI](https://svelte.dev).

## Looking for a different language?
- [React](https://github.com/makecm/make-hello-world-react-template)
- [Vue](https://github.com/makecm/hello-world-vue-template)
- [Angular](https://github.com/makecm/make-hello-world-angular-template)

<img src="https://files.outfit.io/media_library_items/236742/Screen%2520Shot%25202020-11-03%2520at%252010.35.52%2520am.png" style="width: 60%; margin: 0 auto; display: block;" alt="make starter template" />

## Development server

Install all necessary dependencies `npm install`

Run `npm run dev` for a dev server. Navigate to `http://localhost:5000/`.

## Building for Make

It's a good idea to run `npm run validate` to check for any Svelte specific and Typescript errors in your code.

Run `npm run build` to build the project with correct resource pathing for the sake of deploying to make.

The build artifacts will be stored in the `/public/build` directory.

## Importing into Make

When importing into Make be sure to import from the `/public` folder.

The following `data` inputs are available as well.

- `headline`: string
- `backgroundImage`: string (public URL)
- `showLogos`: boolean

## Support

Here are some helpful links to get you started
- [Docs](https://docs.make.cm): First point of call
- [Twitter](https://twitter.com/home): Drop us a message on twitter if you find a bug or have any feedback
- [Svelte documentation](https://svelte.dev/docs)
