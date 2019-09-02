# Bell Senior Society

Website for Bell built in Gatsby with React and GraphQL. Use `yarn` as your package manager.

---

### Architecture

-   `fragments` generally single-use components used on just one page
-   `images` image files of any kind
-   `pages` each component defines a new page
-   `shared` constants used throughout the app
-   `components` reusable, flexible components
-   `gatsby-*.js` config files
-   `yarn*` package management files

---

### Getting started

Be sure that you are using Node version `10.x`. You can check this by running:

```bash
node -v
```

If your node version is not `10.x`, we recommend you use nvm to change your version.

Make sure you have an `env.sh` file in the root of your project of the form:

```
export GOOGLE_MEMBER_SPREADSHEET_ID="..."
```

To pull in member and news data, you need to get credentials from Google to use the API to pull in data from Google Sheets. Download a `credentials.json` file from [this site](https://developers.google.com/sheets/api/quickstart/nodejs) and place them in the root directory of this project. Follow the rest of the instructions on the site as well, being sure to authorize the application using the bellseniorsociety Google account. Then, run:

```
yarn pull-sheets-data
```

You may need to take some additional steps per the output of the program in your terminal.

To install dependencies and start the app, run:

```bash
$ yarn
$ yarn dev
```

If there are issues installing packages, which seem out of place (beyond global installs), try:

```bash
rm yarn.lock
yarn
```
