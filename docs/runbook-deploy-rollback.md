# Runbook: Deploy y Rollback

## Pre-requisitos
- Acceso a GitHub Actions
- Docker instalado
- Variables de entorno configuradas en GitHub Secrets

## Deploy Normal
1. Crear rama: `git checkout -b feature/mi-cambio`
2. Hacer cambios y commit
3. Push y abrir PR en GitHub
4. CI debe pasar (verde) antes del merge
5. Merge a main → deploy automático a stage
6. Validar stage: `curl http://STAGE_HOST/health`
7. Promover a prod: GitHub Actions → "Promote to Production" → Run workflow

## Rollback de Artefacto
### Cuándo hacer rollback
- Error rate > 5% en producción
- Health check fallando consecutivamente
- Comportamiento crítico inesperado

### Pasos
1. Identificar versión estable anterior:
   - GitHub → Releases → ver versión anterior
2. Ejecutar workflow de promoción con versión anterior:
   - GitHub Actions → Promote to Production → Run workflow
   - Version: versión anterior (ej: 0.1.0)
   - Confirm: escribir PROMOTE
3. Verificar restauración: `curl http://PROD_HOST/health`
4. Documentar incidente en docs/postmortem-XXX.md

## Rollback por Feature Flag (más rápido)
1. GitHub → Settings → Secrets
2. Cambiar `FEATURE_NEW_ITEMS_UI` a `false`
3. Redeploy del servicio
4. Verificar en `/api/items` que flag está desactivado

## Contactos de escalada
| Rol | Responsable |
|-----|-------------|
| Backend | Equipo Backend |
| Frontend | Equipo Frontend |
| Base de datos | Equipo DB |
| DevOps | Equipo DevOps |

## Verificaciones post-deploy
- [ ] `GET /health` responde 200
- [ ] `GET /metrics` muestra versión correcta
- [ ] Frontend carga correctamente
- [ ] Logs sin errores críticos
