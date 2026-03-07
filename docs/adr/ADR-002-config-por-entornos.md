# ADR-002: Configuración por Entornos

- **Estado:** Aceptado
- **Fecha:** 2026-03-07

## Contexto
La aplicación debe correr en dev, stage y prod con configuraciones distintas sin cambiar el código.

## Decisión
Variables de entorno por contexto:
- `dev`: docker-compose con `.env` local (gitignored)
- `stage/prod`: variables inyectadas desde GitHub Secrets

### Contrato de configuración
Variables OBLIGATORIAS definidas en `api/src/config.js`.
La aplicación falla al arrancar si faltan variables críticas.

### Variables requeridas
| Variable | Descripción | Requerida |
|----------|-------------|-----------|
| NODE_ENV | Entorno de ejecución | Sí |
| DATABASE_URL | Conexión a PostgreSQL | Sí |
| PORT | Puerto de la API | No (default: 3000) |
| APP_VERSION | Versión del artefacto | No (default: 0.0.0) |

## Consecuencias
✅ Sin secretos en el repositorio
✅ Configuración validada en arranque
✅ Mismo artefacto, diferente config por entorno
