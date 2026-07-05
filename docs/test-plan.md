# Plan de Pruebas — QA Store

## 1. Objetivo

Definir el flujo de aseguramiento de calidad para **QA Store**, una aplicación web de comercio electrónico utilizada para validar buenas prácticas de automatización, integración continua y DevSecOps.

Los objetivos son:

1. Garantizar que ningún cambio se integre a la rama `main` sin cumplir los Quality Gates.
2. Validar el correcto funcionamiento de la aplicación mediante pruebas automatizadas.
3. Generar evidencias y reportes de ejecución como soporte del proceso de QA.

---

# 2. Alcance

| Funcionalidad | Tipo de prueba |
|---------------|----------------|
| Inicio de sesión | Funcional |
| Catálogo de productos | Funcional |
| Visualización de productos | Funcional |
| Agregar productos al carrito | Funcional |
| Proceso de compra | Funcional |
| Performance | k6 / JMeter |
| Accesibilidad | axe DevTools |
| Pipeline CI/CD | GitHub Actions |

---

# 3. Reglas de negocio

Las validaciones se realizan sobre los siguientes criterios funcionales:

- El usuario debe poder iniciar sesión con credenciales válidas.
- Las credenciales inválidas deben mostrar un mensaje de error.
- El catálogo debe cargar correctamente.
- Los productos deben mostrar nombre, precio e imagen.
- El usuario puede agregar productos al carrito.
- El carrito debe actualizar la cantidad de productos.
- El proceso de compra debe finalizar correctamente.

---

# 4. Tipos de prueba

Se ejecutarán las siguientes pruebas:

- Pruebas funcionales UI (Cypress)
- Pruebas de API (si aplica)
- Pruebas de Performance (k6)
- Pruebas de Accesibilidad (axe DevTools)
- Integración Continua mediante GitHub Actions
- Validación de evidencias y reportes
- Revisión asistida con Inteligencia Artificial

---

# 5. Estrategia de Automatización

Cada Pull Request hacia la rama `main` ejecutará automáticamente el workflow **QA CI Pipeline**.

El pipeline realizará las siguientes actividades:

1. Checkout del repositorio.
2. Instalación de dependencias.
3. Ejecución de pruebas automatizadas.
4. Generación de reportes.
5. Publicación de artefactos.
6. Ejecución de pruebas de performance.
7. Validación de accesibilidad.
8. Verificación de Quality Gates.

---

# 6. Evidencias

Cada ejecución del pipeline generará:

- Reporte HTML
- Logs de ejecución
- Capturas de pantalla
- Videos de ejecución (cuando aplique)
- Resultados de Performance
- Resultados de Accesibilidad

Los artefactos serán publicados automáticamente mediante GitHub Actions.

---

# 7. Criterios de Entrada y Salida

## Entrada

- Rama `feature/*` creada.
- Pull Request abierto hacia `main`.
- Código actualizado en GitHub.

## Salida

El Pull Request podrá aprobarse únicamente cuando todos los Quality Gates se encuentren en estado satisfactorio.

---

# Quality Gates definidos

Para aprobar un Pull Request hacia la rama `main`, todos los siguientes criterios deben cumplirse.

| # | Quality Gate | Criterio de aceptación | Verificación |
|---|--------------|------------------------|--------------|
| 1 | Pruebas automatizadas | 100% de las pruebas exitosas | GitHub Actions |
| 2 | Performance | Error Rate menor al 1% | k6 / JMeter |
| 3 | Tiempo de respuesta | Tiempo promedio menor a 1000 ms | k6 |
| 4 | Accesibilidad | Sin errores críticos | axe DevTools |
| 5 | Seguridad | No existen secretos expuestos | Revisión del repositorio |
| 6 | Evidencias | Reportes y artefactos publicados | GitHub Actions |

---

## Justificación de los Quality Gates

### Pruebas automatizadas

Garantizan que las funcionalidades críticas continúan funcionando correctamente antes de integrar cambios.

### Performance

Permite verificar que la aplicación mantiene un rendimiento adecuado bajo carga.

### Accesibilidad

Asegura que la aplicación cumple criterios básicos de accesibilidad para todos los usuarios.

### Seguridad

Evita la publicación accidental de credenciales, claves o información sensible dentro del repositorio.

### Evidencias

Cada ejecución debe generar evidencia que permita analizar resultados y facilitar auditorías.

---

# Visión DevSecOps

Este proyecto adopta un enfoque DevSecOps incorporando controles de calidad durante todo el ciclo de desarrollo.

Las validaciones incluyen:

- Automatización de pruebas.
- Integración Continua.
- Generación automática de evidencias.
- Validaciones de rendimiento.
- Validaciones de accesibilidad.
- Control de versiones mediante Git.
- Uso de Inteligencia Artificial para análisis de resultados y documentación.

Solo cuando todos los controles anteriores sean satisfactorios se permitirá la integración del cambio hacia la rama `main`.