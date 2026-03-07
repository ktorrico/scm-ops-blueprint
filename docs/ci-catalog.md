# Catálogo de Configuration Items (CIs)

| ID | Nombre | Tipo | Versión | Entornos | Responsable |
|----|--------|------|---------|----------|-------------|
| CI-001 | scm-api | Imagen Docker | semver | dev/stage/prod | Backend Lead |
| CI-002 | scm-web | Imagen Docker | semver | dev/stage/prod | Frontend Lead |
| CI-003 | PostgreSQL | Base de datos | 16-alpine | dev/stage/prod | DB Lead |
| CI-004 | Flyway Migrations | Scripts SQL | semver | dev/stage/prod | DB Lead |
| CI-005 | docker-compose.yml | Config DEV | git sha | dev | DevOps |
| CI-006 | .github/workflows/ | CI/CD Pipeline | git sha | todos | DevOps |
| CI-007 | nginx.conf | Config Web Server | git sha | todos | DevOps |
| CI-008 | api/src/config.js | Config Contract | git sha | todos | Backend Lead |
