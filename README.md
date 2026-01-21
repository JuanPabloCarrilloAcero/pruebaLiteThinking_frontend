# Prueba Técnica – Frontend (React)

React + TypeScript UI for the Spring Boot backend (JWT). Role-based navigation: ADMIN vs EXTERNAL.

## Stack

React 18 · TypeScript · MUI · Axios · React Router · Toastify

## Config (required)

Create `.env`:

```env
REACT_APP_BACKEND_URL=http://localhost:8080
```

## Run

```bash
npm install
npm start
```

## Build

```bash
npm run build
```

## Tests

```bash
npm test
```

## Login

- admin / testAdmin
- external / testExternal

## Docker

```bash
docker build -t prueba-tecnica-frontend .
docker run --rm -p 3000:80 prueba-tecnica-frontend
```
