import http from 'k6/http';
import { check } from 'k6';

export const options = {
  vus: 10,               // Usuarios virtuales
  duration: '30s',       // Duración de la prueba

  thresholds: {
    http_req_failed: ['rate<0.01'],      // Menos del 1% de errores
    http_req_duration: ['p(95)<800'],    // 95% de las peticiones < 800 ms
  },
};

export default function () {
  const res = http.get('https://jsonplaceholder.typicode.com/posts');

  check(res, {
    'Status es 200': (r) => r.status === 200,
  });
}