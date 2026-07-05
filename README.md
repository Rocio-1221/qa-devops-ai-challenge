# QA DevOps AI Challenge

## Objetivo

Construir un flujo completo de calidad para una aplicación web o API aplicando buenas prácticas de control de versiones, automatización, integración continua (CI/CD), quality gates, pruebas de rendimiento, accesibilidad y análisis asistido con inteligencia artificial.

## Estructura del proyecto

```
qa-devops-ai-challenge/
│
├── tests/
│   ├── api/
│   └── ui/
│
├── performance/
│   ├── k6/
│   └── jmeter/
│
├── docs/
├── evidences/
├── .github/
│   └── workflows/
│
├── README.md
└── .gitignore
```

## Herramientas utilizadas

- Git
- GitHub
- GitHub Actions
- Cypress (UI)
- Postman/Newman (API)
- k6
- Apache JMeter
- axe DevTools
- ChatGPT

## Cómo ejecutar las pruebas

### Clonar el repositorio

```bash
git clone https://github.com/Rocio-1221/qa-devops-ai-challenge.git
```

### Entrar al proyecto

```bash
cd qa-devops-ai-challenge
```

### Instalar dependencias

```bash
npm install
```

### Ejecutar pruebas UI

```bash
npm run test
```

### Ejecutar pruebas de performance

```bash
k6 run performance/k6/load-test.js
```

## Autor

Rocío Gutiérrez