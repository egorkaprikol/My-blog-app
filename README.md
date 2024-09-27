## frontend


## 💿 Install

Set up your project using your preferred package manager. Use the corresponding command to install the dependencies:

| Package Manager                                                | Command        |
|---------------------------------------------------------------|----------------|
| [yarn](https://yarnpkg.com/getting-started)                   | `yarn install` |
| [npm](https://docs.npmjs.com/cli/v7/commands/npm-install)     | `npm install`  |
| [pnpm](https://pnpm.io/installation)                          | `pnpm install` |
| [bun](https://bun.sh/#getting-started)                        | `bun install`  |

After completing the installation, your environment is ready for Vuetify development.

### Starting the Development Server

To start the development server with hot-reload, run the following command. The server will be accessible at [http://localhost:3000](http://localhost:3000):

```bash
yarn dev
```
```npm
npm run dev
```

(Repeat for npm, pnpm, and bun with respective commands.)

> Add NODE_OPTIONS='--no-warnings' to suppress the JSON import warnings that happen as part of the Vuetify import mapping. If you are on Node [v21.3.0](https://nodejs.org/en/blog/release/v21.3.0) or higher, you can change this to NODE_OPTIONS='--disable-warning=5401'. If you don't mind the warning, you can remove this from your package.json dev script.

### Building for Production

To build your project for production, use:

```bash
yarn build
```

```npm
npm run build
```
(Repeat for npm, pnpm, and bun with respective commands.)

Once the build process is completed, your application will be ready for deployment in a production environment.



## API Documentation

API документация доступна по [этой ссылке](https://documenter.getpostman.com/view/36739263/2sAXqy1e3E).



#  backend



## The node.js example app



## Requirements


## Common setup

Clone the repo and install the dependencies.

```bash
git clone https://github.com/contentful/the-example-app.nodejs.git
cd the-example-app.nodejs
```

```bash
npm install
```

## Steps for read-only access

To start the express server, run the following

```bash
npm run start:dev
```

Open [http://localhost:3000](http://localhost:3000) and take a look around.


## Use Docker
You can also run this app as a Docker container:

Step 1: Clone the repo

```bash
git clone https://github.com/egorkaprikol/my-blog-app.git
```
Step 2: Go to the project directory

```bash
cd myblogapp
```

Step 3: Build the Docker container:

```bash
docker build -t myblogapp . -f Dockerfile
```

Step 4: Run the Docker container:

```bash
docker run -d -p 3000:3000 myblogapp 
```


Step 5: Run the Docker container with database:

```bash
docker-compose up --build
```


Stop container:

```bash
docker-compose down
```
