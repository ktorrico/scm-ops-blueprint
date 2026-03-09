# SCM Ops Blueprint

Sistema profesional de Configuración del Software con control de cambios, artefactos inmutables y release management end-to-end.

## 🏗️ Arquitectura
```
scm-ops-blueprint/
├── api/          # Backend Node.js + Express
├── web/          # Frontend React
├── db/           # Migraciones Flyway
├── ops/          # Docker Compose por entorno
├── docs/         # ADRs, Runbooks, Catálogo CIs
└── evidence/     # Capturas y evidencia del proyecto
```

## 🚀 Levantar el stack local (DEV)

### Pre-requisitos
- Docker Desktop instalado y corriendo
- Git Bash

### Pasos
```bash
# Clonar el repositorio
git clone https://github.com/ktorrico/scm-ops-blueprint.git
cd scm-ops-blueprint

# Crear archivo de variables de entorno
cp .env.example .env
# Editar .env con tus valores

# Levantar todos los servicios
docker compose up -d

# Verificar que todo está corriendo
docker compose ps

# Probar la API
curl http://localhost:3000/health
curl http://localhost:3000/metrics
curl http://localhost:3000/api/items

# Ver el frontend
# Abrir http://localhost en el navegador
```

## 🔄 Flujo de trabajo
```
Issue → Feature Branch → PR → CI Verde → Merge → Stage → Promote → Prod
```

1. Crear rama: `git checkout -b feature/TICKET-descripcion`
2. Hacer cambios y commit: `git commit -m "feat: descripcion"`
3. Push y abrir PR en GitHub
4. CI corre automáticamente (build + test + lint + secret scan)
5. PR aprobado y mergeado → deploy automático a stage
6. Validar stage → promover a prod via GitHub Actions

## 🧪 Correr tests localmente
```bash
cd api
npm test
npm run lint
```

## 📦 Artefactos Docker
```bash
# Construir imágenes localmente
docker build -t scm-api:0.1.0 ./api
docker build -t scm-web:0.1.0 ./web

# Imágenes publicadas en GHCR
ghcr.io/ktorrico/scm-api:1.0.0
ghcr.io/ktorrico/scm-web:1.0.0
```

## 🔐 Variables de entorno

Ver `.env.example` para la lista completa de variables requeridas.

| Variable | Descripción | Requerida |
|----------|-------------|-----------|
| DB_PASSWORD | Contraseña PostgreSQL | Sí |
| NODE_ENV | Entorno (development/staging/production) | Sí |
| DATABASE_URL | URL de conexión a la BD | Sí |
| APP_VERSION | Versión del artefacto | No |
| FEATURE_NEW_ITEMS_UI | Feature flag nueva UI | No |
| FEATURE_MAINTENANCE | Feature flag mantenimiento | No |

## 📚 Documentación

| Documento | Descripción |
|-----------|-------------|
| [ADR-001](docs/adr/ADR-001-branching-releases.md) | Estrategia de Branching y Releases |
| [ADR-002](docs/adr/ADR-002-config-por-entornos.md) | Configuración por Entornos |
| [ADR-003](docs/adr/ADR-003-artefactos-inmutables.md) | Artefactos Inmutables y Promoción |
| [Runbook](docs/runbook-deploy-rollback.md) | Deploy y Rollback |
| [Catálogo CIs](docs/ci-catalog.md) | Configuration Items |
| [Métricas DORA](docs/dora-metrics.md) | Métricas de rendimiento |
| [Postmortem](docs/postmortem-001.md) | Incidente #001 |

## 🔁 Workflows CI/CD

| Workflow | Trigger | Descripción |
|----------|---------|-------------|
| CI Pipeline | Push/PR | Build + Test + Lint + Secret Scan |
| Deploy to Stage | Push a main | Deploy automático a stage |
| Promote to Production | Manual | Promoción del artefacto a prod |
| Rollback Production | Manual | Rollback a versión anterior |

## 📊 Releases

| Versión | Descripción |
|---------|-------------|
| v0.1.0 | Fundaciones SCM |
| v0.2.0 | Entornos, Config y Feature Flags |
| v1.0.0 | Sistema SCM Completo |

## 👥 Equipo

| Rol | Responsable |
|-----|-------------|
| Backend Lead | ktorrico |
| Frontend Lead | ktorrico |
| DevOps | ktorrico |
| DB Lead | ktorrico |
