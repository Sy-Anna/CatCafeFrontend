# Cat Cafe Frontend

This is the frontend for the Cat Cafe project, built with React, TypeScript, and Vite.
> For the full docker application check out the [cat-cafe-compose](https://github.com/energypatrikhu/cat-cafe-compose) repository

## Prerequisites

Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Docker](https://www.docker.com/) (optional, for running the database)

## Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
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
```bash
npm run build
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
   ```bash
   npm run build
   ```

2. Serve the `dist` directory using a static file server. For example, using `serve`:
   ```bash
   npm install -g serve
   serve -s dist
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Using Docker

1. Build the Docker image:
   ```bash
   docker build -t cat-cafe-frontend .
   ```

2. Run the container:
   ```bash
   docker run -p 80:80 cat-cafe-frontend
   ```

3. Open [http://localhost](http://localhost) in your browser.

---

# Cat Cafe Frontend

Ez a Cat Cafe projekt frontendje, amely React, TypeScript és Vite segítségével készült.
> A teljes Docker alkalmazásért nézd meg a [cat-cafe-compose](https://github.com/energypatrikhu/cat-cafe-compose) repót

## Előfeltételek

Győződj meg róla, hogy a következők telepítve vannak a rendszereden:
- [Node.js](https://nodejs.org/) (ajánlott az LTS verzió)
- [npm](https://www.npmjs.com/) (a Node.js része)
- [Docker](https://www.docker.com/) (opcionális, az adatbázis futtatásához)

## Beállítás

1. Klónozd a repót:
  ```bash
  git clone <repository-url>
  cd cat-cafe-frontend
  ```

2. Telepítsd a függőségeket:
  ```bash
  npm install
  ```

3. Konfiguráld a környezetet:
  - Alapértelmezés szerint az API alap URL-je a `src/libs/api.ts` fájlban van beállítva. Szükség esetén frissítsd.

## Fejlesztés

A fejlesztői szerver indításához:
```bash
npm run dev
```
Ez elindítja a Vite fejlesztői szervert. Nyisd meg a [http://localhost:5173](http://localhost:5173) címet a böngésződben.

## Build

A projekt produkciós buildjének elkészítéséhez:
```bash
npm run build
```
A build fájlok a `dist` könyvtárba kerülnek.

## Előnézet

A produkciós build helyi előnézetéhez:
```bash
npm run preview
```

## Használat

### Docker nélkül

1. Készítsd el a buildet:
  ```bash
  npm run build
  ```

2. Szolgáld ki a `dist` könyvtárat egy statikus fájlszerverrel. Például a `serve` használatával:
  ```bash
  npm install -g serve
  serve -s dist
  ```

3. Nyisd meg a [http://localhost:3000](http://localhost:3000) címet a böngésződben.

### Docker használatával

1. Készítsd el a Docker képet:
  ```bash
  docker build -t cat-cafe-frontend .
  ```

2. Indítsd el a konténert:
  ```bash
  docker run -p 80:80 cat-cafe-frontend
  ```

3. Nyisd meg a [http://localhost](http://localhost) címet a böngésződben.
