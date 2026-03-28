const { app, server } = require('../src/index');
const request = require('supertest');

describe('Health endpoint', () => {
  afterAll(() => server.close());

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
