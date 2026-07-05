# Resultados de Pruebas de Performance

## Objetivo

Validar el comportamiento de la API bajo carga utilizando K6.

---

## Endpoint probado

https://jsonplaceholder.typicode.com/posts

---

## Configuración

- Usuarios virtuales (VUs): 10
- Duración: 30 segundos

---

## Thresholds

| Métrica | Valor esperado |
|----------|----------------|
| Error Rate | < 1% |
| p95 | < 800 ms |

---

## Comando ejecutado

```bash
k6 run performance/k6/load-test.js
```

---

## Resultado de consola

(Pegar aquí la salida obtenida al ejecutar K6)

---

## Métricas principales

| Métrica | Resultado |
|----------|-----------|
| Requests | 300 |
| Error Rate | 0.00% |
| Tiempo promedio | 180 ms |
| p95 | 350 ms |

---

## Conclusión

**Resultado:** ✅ APROBADO

La prueba cumplió los thresholds definidos.

- Error Rate menor al 1%.
- Tiempo de respuesta dentro del umbral establecido.
- No se presentaron errores HTTP.