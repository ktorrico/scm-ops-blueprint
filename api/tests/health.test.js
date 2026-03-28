process.env.NODE_ENV = 'test';
process.env.PORT = '3001';

const { app, server } = require('../src/index');
const request = require('supertest');

afterAll(() => server.close());

describe('Health endpoint', () => {
  test('GET /health returns 200', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });
});

describe('Version endpoint', () => {
  test('GET /version returns 200', async () => {
    const res = await request(app).get('/version');
    expect(res.statusCode).toBe(200);
    expect(res.body.version).toBeDefined();
  });
});

describe('Status endpoint', () => {
  test('GET /status returns 200', async () => {
    const res = await request(app).get('/status');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
    expect(res.body.version).toBeDefined();
    expect(res.body.uptime_seconds).toBeDefined();
  });
});

describe('Ping endpoint', () => {
  test('GET /ping returns pong', async () => {
    const res = await request(app).get('/ping');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('pong');
    expect(res.body.timestamp).toBeDefined();
  });
});
