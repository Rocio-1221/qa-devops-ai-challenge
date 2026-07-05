# Plan de Pruebas - QA DevOps AI Challenge

## Objetivo

Validar la calidad de la aplicación antes de integrar cambios a la rama principal (`main`), mediante pruebas automatizadas, controles de calidad y buenas prácticas DevSecOps.

## Alcance

Las validaciones incluyen:

- Pruebas funcionales UI.
- Pruebas de API.
- Pruebas de rendimiento (Performance).
- Validaciones de accesibilidad.
- Integración continua con GitHub Actions.
- Generación de evidencias y reportes.

## Herramientas

- Git y GitHub
- GitHub Actions
- Cypress (Pruebas UI)
- Postman / Newman (Pruebas API)
- k6 o Apache JMeter (Performance)
- axe DevTools (Accesibilidad)
- ChatGPT (Análisis y documentación)

---

# Quality Gates definidos

Para aprobar un Pull Request se deben cumplir los siguientes criterios:

## 1. Pruebas automatizadas

- Todas las pruebas automatizadas deben ejecutarse correctamente.
- No se permiten pruebas fallidas.

**Criterio de aprobación:** 100% de pruebas exitosas.

---

## 2. Performance

- El porcentaje de errores debe ser menor al 1%.
- El tiempo de respuesta promedio debe estar dentro del umbral definido para la aplicación.

**Criterios de aprobación:**

- Error Rate < 1%
- Tiempo de respuesta promedio ≤ 1000 ms

---

## 3. Seguridad (DevSecOps)

- No deben existir credenciales o secretos expuestos en el repositorio.
- El código debe mantenerse libre de información sensible.

**Criterio de aprobación:**

- 0 secretos detectados.

---

## 4. Evidencias

Cada ejecución del pipeline debe generar evidencias como:

- Reportes HTML
- Logs de ejecución
- Capturas de pantalla (si aplica)
- Resultados de pruebas de performance
- Resultados de accesibilidad

**Criterio de aprobación:**

Todos los artefactos deben publicarse correctamente en GitHub Actions.

---

## 5. Integración Continua

El pipeline de GitHub Actions debe ejecutarse automáticamente para cada Pull Request y Push hacia la rama `main`.

**Criterio de aprobación:**

Pipeline ejecutado sin errores.

---

## Resultado esperado

Solo se permitirá integrar cambios a la rama `main` cuando todos los Quality Gates se cumplan satisfactoriamente.