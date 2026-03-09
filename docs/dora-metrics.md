# Métricas DORA — SCM Ops Blueprint

## Resumen ejecutivo
| Métrica | Valor | Nivel |
|---------|-------|-------|
| Deployment Frequency | 3 releases en 21 días | Medium |
| Lead Time for Changes | ~35 minutos | Elite |
| Change Failure Rate | 33% (1/3 simulado) | Low |
| MTTR | 15 minutos | Elite |

## Detalle

### 1. Deployment Frequency
- Semana 1: v0.1.0 (1 release)
- Semana 2: v0.2.0 (1 release)
- Semana 3: v1.0.0 (1 release)
- **Total: 3 releases en 21 días**

### 2. Lead Time for Changes
- Tiempo desde primer commit hasta prod
- Medición: tiempo de PR + CI (~5 min) + review (~10 min) + deploy (~20 min)
- **Estimación: ~35 minutos**

### 3. Change Failure Rate
- Total releases: 3
- Releases con incidente: 1 (simulado en postmortem-001)
- **CFR: 33% — objetivo futuro: < 15%**

### 4. Mean Time to Restore (MTTR)
- Incidente #001: resuelto en 15 minutos con feature flag
- **MTTR: 15 minutos**

## Evidencia
- Pipeline runs: GitHub Actions → CI Pipeline
- Releases: GitHub → Releases (v0.1.0, v0.2.0, v1.0.0)
- Rollback: GitHub Actions → Rollback Production
- Postmortem: docs/postmortem-001.md
