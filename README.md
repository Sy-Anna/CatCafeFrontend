# Cat Cafe Frontend

This is the frontend for the Cat Cafe project, built with React, TypeScript, and Vite.

> For the full docker application check out the [cat-cafe-compose](https://github.com/energypatrikhu/cat-cafe-compose) repository

## Credentials

The credentials can be found [here](https://github.com/Sy-Anna/CatCafeFrontend/blob/main/CREDENTIALS.md).

## Prerequisites

Ensure you have the following installed on your system:

-   [Node.js](https://nodejs.org/) (LTS version recommended)
-   [npm](https://www.npmjs.com/) (comes with Node.js)
-   [Docker](https://www.docker.com/) (optional, for running the database)

## Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/Sy-Anna/CatCafeFrontend
    cd cat-cafe-frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

## Development

To start the development server:

```bash
npm run dev
```

This will start the Vite development server. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

To build the project for production:

-   Build the project in production mode:

    > This is the default mode<br>
    > In this mode, the application will use the public API URL, unless specified otherwise

    ```bash
    npm run build
    ```

-   Build the project in local mode:

    > In this mode, the application will use the local API URL (http://localhost:3000), unless specified otherwise

    ```bash
    npm run build:local
    ```

-   Build the project in docker mode:
    > In this mode, the application will use the docker API URL ({protocol}://{hostname}:5543), unless specified otherwise
    ```bash
    npm run build:docker
    ```

The build artifacts will be output to the `dist` directory.

## Preview

To preview the production build locally:

```bash
npm run preview
```

## Deployment

### Without Docker

1. Build the project:

    > This is the default mode

    ```bash
    npm run build
    ```

    or for local mode:

    > In this mode, the application will use the local API URL (http://localhost:3000), unless specified otherwise

    ```bash
    npm run build:local
    ```

2. Serve the `dist` directory using a static file server. For example, using `serve`:

    ```bash
    npm install -g serve
    serve -s dist
    ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Using Docker

1. Build the project in docker mode:

    > Build the project, refer to the build section above for more information

    ```bash
    npm run build
    ```

2. Build the Docker image:

    ```bash
    docker build -t cat-cafe-frontend .
    ```

3. Run the container:

    ```bash
    docker run -p 4173:4173 cat-cafe-frontend
    ```

4. Open [http://localhost:4173](http://localhost:4173) in your browser.

---

# Cat Cafe Frontend

Ez a Cat Cafe projekt frontendje, amely React, TypeScript és Vite segítségével készült.

> A teljes docker alkalmazásért nézd meg a [cat-cafe-compose](https://github.com/energypatrikhu/cat-cafe-compose) repót.

## Hitelesítő adatok

A hitelesítő adatokért [kattints ide](https://github.com/Sy-Anna/CatCafeFrontend/blob/main/CREDENTIALS.md).

## Előfeltételek

Győződj meg róla, hogy a következők telepítve vannak a rendszereden:

-   [Node.js](https://nodejs.org/) (ajánlott az LTS verzió)
-   [npm](https://www.npmjs.com/) (a Node.js része)
-   [Docker](https://www.docker.com/) (opcionális, az adatbázis futtatásához)

## Beállítás

1. Klónozd a repót:

```bash
git clone https://github.com/Sy-Anna/CatCafeFrontend
cd cat-cafe-frontend
```

2. Telepítsd a függőségeket:

```bash
npm install
```

## Fejlesztés

A fejlesztői szerver indításához:

```bash
npm run dev
```

Ez elindítja a Vite fejlesztői szervert. Nyisd meg a [http://localhost:5173](http://localhost:5173) címet a böngésződben.

## Build

A projekt buildelése produkciós környezethez:

-   Buildelés produkciós módban:

    > Ez az alapértelmezett mód<br>
    > Ebben a módban az alkalmazás a nyilvános API URL-t használja, hacsak másként nincs megadva.

    ```bash
    npm run build
    ```

-   Buildelés helyi módban:

    > Ebben a módban az alkalmazás a helyi API URL-t használja (http://localhost:3000), hacsak másként nincs megadva.

    ```bash
    npm run build:local
    ```

-   Buildelés docker módban:
    > Ebben a módban az alkalmazás a docker API URL-t használja ({protocol}://{hostname}:5543), hacsak másként nincs megadva.
    ```bash
    npm run build:docker
    ```

A buildelt fájlok a `dist` könyvtárba kerülnek.

## Előnézet

A produkciós build helyi előnézetéhez:

```bash
npm run preview
```

## Telepítés

### Docker nélkül

1. Buildeld a projektet:

    > Ez az alapértelmezett mód

    ```bash
    npm run build
    ```

    vagy helyi módban:

    > Ebben a módban az alkalmazás a helyi API URL-t használja (http://localhost:3000), hacsak másként nincs megadva.

    ```bash
    npm run build:local
    ```

2. Szolgáld ki a `dist` könyvtárat egy statikus fájlszerverrel. Például a `serve` használatával:

```bash
npm install -g serve
serve -s dist
```

3. Nyisd meg a [http://localhost:3000](http://localhost:3000) címet a böngésződben.

### Docker használatával

1. Buildeld a projektet docker módban:

    > Buildeld a projektet, további információért lásd a build szekciót fentebb.

    ```bash
    npm run build
    ```

2. Építsd meg a Docker képet:

    ```bash
    docker build -t cat-cafe-frontend .
    ```

3. Futtasd a konténert:

    ```bash
    docker run -p 4173:4173 cat-cafe-frontend
    ```

4. Nyisd meg a [http://localhost:4173](http://localhost:4173) címet a böngésződben.
