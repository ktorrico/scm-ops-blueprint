# ADR-001: Estrategia de Branching y Releases

- **Estado:** Aceptado
- **Fecha:** 2026-03-07
- **Autores:** Equipo SCM

## Contexto
Necesitamos una estrategia de ramas que garantice calidad y trazabilidad en todos los cambios.

## Decisión
Adoptamos Trunk-Based Development con feature branches de corta vida:
- `main` → rama protegida, solo PR
- `feature/TICKET-descripcion` → ramas de trabajo
- `hotfix/descripcion` → correcciones urgentes

### Versionado: Semantic Versioning (SemVer)
- `v0.1.0` → Semana 1 (fundaciones)
- `v0.2.0` → Semana 2 (entornos)
- `v1.0.0` → Semana 3 (producción)

### Convenciones de commits
- `feat:` nueva funcionalidad
- `fix:` corrección de bug
- `ci:` cambios en pipeline
- `docs:` documentación
- `chore:` mantenimiento

## Consecuencias
✅ Historial limpio y auditable
✅ CI obligatorio en cada PR
⚠️ Requiere disciplina del equipo
