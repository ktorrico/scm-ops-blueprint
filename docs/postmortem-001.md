# Postmortem — Incidente #001

- **Fecha:** 2026-03-07
- **Duración:** 15 minutos
- **Severidad:** P2
- **Versión afectada:** v0.2.0
- **Autor:** Equipo SCM

## Resumen
La API respondía con error 503 en el endpoint `/api/items` en stage
debido a la activación accidental del flag MAINTENANCE_MODE.

## Línea de tiempo
| Hora | Evento |
|------|--------|
| 10:00 | Deploy de v0.2.0 a stage |
| 10:03 | Monitoreo detecta errores 503 |
| 10:05 | Identificado: FEATURE_MAINTENANCE=true activado por error |
| 10:08 | Feature flag desactivado (FEATURE_MAINTENANCE=false) |
| 10:10 | Servicio restaurado, health check verde |
| 10:15 | Postmortem iniciado |

## Causa raíz
Variable de entorno `FEATURE_MAINTENANCE` configurada como `true`
accidentalmente durante el deploy de stage.

## Impacto
- Endpoint `/api/items` devolvía 503 durante 8 minutos
- Usuarios de stage afectados: equipo de QA

## Acciones correctivas
- [x] Desactivar flag FEATURE_MAINTENANCE
- [x] Agregar validación de flags en pipeline de deploy
- [x] Documentar procedimiento de feature flags en runbook
- [x] Agregar alerta automática para errores 503

## Lecciones aprendidas
1. Los feature flags deben revisarse antes de cada deploy
2. El rollback por feature flag funcionó en menos de 5 minutos
3. Los logs estructurados facilitaron la identificación del problema
