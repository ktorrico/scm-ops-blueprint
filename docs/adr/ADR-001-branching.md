# ADR-001: Estrategia de Branching

## Fecha
2026-03-05

## Contexto
Necesitamos definir una estrategia de branching que soporte:
- Control de cambios formal
- Múltiples entornos (dev, stage, prod)
- Releases versionadas
- CI/CD automatizado

## Decisión
Adoptamos GitHub Flow con:
- main como rama principal protegida
- Ramas de feature: eature/XXX-descripcion
- Ramas de fix: hotfix/XXX-descripcion
- Tags semánticos para releases: 0.1.0, 0.2.0, 1.0.0

## Consecuencias
- No se permite push directo a main
- Todos los cambios requieren PR con review
- CI debe pasar antes del merge
- Releases inmutables por tag
