import http from 'k6/http';
import { check, sleep } from 'k6';

// Modelagem de Carga Gradual (Rigor de Engenharia)
export const options = {
    stages: [
        { duration: '20s', target: 5 }, // Ramp-up: 5 usuários em 20s
        { duration: '30s', target: 5 }, // Plateau: Mantém 5 usuários por 30s
        { duration: '10s', target: 0 }, // Ramp-down: Finalização
    ],
    thresholds: {
        http_req_duration: ['p(95)<2500'], // SLA: 95% das reqs < 2.5s
        http_req_failed: ['rate<0.01'],    // Tolerância de erro < 1%
    },
};

export default function () {
    const res = http.get('https://blog.agibank.com.br/');
    
    check(res, {
        'status is 200': (r) => r.status === 200,
        'protocol is HTTPS': (r) => r.url.startsWith('https'),
    });

    sleep(1); // Think Time: Simula comportamento humano
}
