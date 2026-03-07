# ADR-003: Artefactos Inmutables y Promoción

- **Estado:** Aceptado
- **Fecha:** 2026-03-07

## Contexto
Necesitamos garantizar que lo que se prueba en stage es exactamente lo que llega a prod.

## Decisión
- Cada release produce imágenes Docker versionadas publicadas en GHCR
- Tag de versión: `v{semver}` para releases, `sha-{hash}` para builds de main
- **Promote, don't rebuild**: el mismo digest validado en stage se despliega en prod
- Se prohíbe usar `:latest` como referencia de despliegue

### Flujo
1. PR mergeado → CI construye imagen → publica en GHCR
2. Deploy automático a stage con esa imagen
3. Validación en stage (health check + smoke tests)
4. Promoción manual a prod del MISMO artefacto

## Consecuencias
✅ Reproducibilidad total
✅ Trazabilidad build → stage → prod
✅ Rollback confiable (volver a imagen anterior)
