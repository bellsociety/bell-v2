# Bell Senior Society

Website for Bell built in Gatsby with React and GraphQL. Use `yarn` as your package manager.

---

### Architecture

- `fragments` generally single-use components used on just one page
- `images` image files of any kind
- `pages` each component defines a new page
- `shared` constants used throughout the app
- `components` reusable, flexible components
- `gatsby-*.js` config files
- `yarn*` package management files

---

### Getting started

Clone the repository, then run:

```bash
$ yarn
$ yarn dev
```

If there are issues installing packages, which seem out of place (beyond global installs), try:

```bash
rm yarn.lock
yarn
```

For information on interacting with the Google API for downloading member information, go to [this link.](https://developers.google.com/sheets/api/quickstart/nodejs)
