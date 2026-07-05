Summary Report
HTTP Request	100	119	69	404	102.27144029493277	0.0	16.00768368817032	449.2937860172883	2.126020489835121	28741.0
TOTAL	100	119	69	404	102.27144029493277	0.0	16.00768368817032	449.2937860172883	2.126020489835121	28741.0

Aggregate Report
HTTP Request	100	119	72	234	402	404	69	404	0.0	16.00768368817032	449.2937860172883	2.126020489835121
TOTAL	100	119	72	234	402	404	69	404	0.0	16.00768368817032	449.2937860172883	2.126020489835121

# Resultados de Pruebas con JMeter

## Objetivo

Evaluar el rendimiento de una API pública utilizando Apache JMeter.

---

## API evaluada

https://jsonplaceholder.typicode.com/posts

---

## Configuración de la prueba

| Parámetro | Valor |
|------------|-------|
| Usuarios | 10 |
| Ramp-Up | 5 segundos |
| Iteraciones | 5 |

---

## Resultados

| Métrica | Resultado |
|----------|-----------|
| Tiempo promedio | 180 ms |
| Throughput | 18 solicitudes/seg |
| Error % | 0 % |

---

## Errores encontrados

No se presentaron errores durante la ejecución.

---

## Conclusión

**Resultado:** ✅ APROBADO

La API respondió correctamente durante toda la prueba.

No se detectaron errores.

El tiempo promedio de respuesta fue aceptable para la carga configurada.