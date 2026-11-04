---
title: "Cómo diagnosticar errores en pipelines de Azure DevOps"
description: "Una guía ordenada para investigar fallos de CI/CD, desde la causa inicial hasta la reproducción local y la prevención."
pubDate: 2026-08-26
tags:
  - Azure DevOps
  - CI/CD
  - DevOps
---

Cuando un pipeline de Azure DevOps falla, el mensaje final suele ser consecuencia, no causa. Empieza por el primer error real del log y anota la etapa, el agente, la versión del runtime y el commit ejecutado. Las líneas posteriores pueden ser solo una cascada de tareas canceladas. Comprueba además si el fallo es reproducible: un error intermitente de red requiere una estrategia distinta a una compilación que falla siempre en el mismo paso.

## Revisa el contexto de ejecución

Los agentes hospedados se actualizan; no asumas que conservan las herramientas de una ejecución anterior. Revisa la imagen del agente y las versiones de SDK, Node o paquetes que usa el proyecto. Fija versiones cuando la compatibilidad sea importante y registra el entorno con una tarea de diagnóstico. Si funciona localmente pero no en CI, compara variables, sistema operativo, rutas, permisos y diferencias entre archivos ignorados y los que realmente están en el repositorio.

Para errores de autenticación, verifica primero que la conexión de servicio correcta está asociada al pipeline y que su identidad conserva los permisos mínimos necesarios. Los secretos deben llegar como variables protegidas, no estar escritos en YAML ni imprimirse en logs. En fallos de restore o descarga, examina feeds, credenciales, límites de concurrencia y disponibilidad externa antes de reintentar a ciegas.

## Haz el pipeline más determinista

Divide la definición en etapas pequeñas y nombra los pasos según su propósito. Así, el log identifica rápidamente si fallaron las pruebas, el empaquetado o la publicación. Usa caché solo para dependencias reproducibles y define una clave que cambie cuando cambien los archivos de bloqueo. Una caché obsoleta puede ocultar problemas o introducir resultados confusos.

Reproduce el comando exacto del pipeline en un entorno limpio y corrige la causa antes de añadir reintentos. Los reintentos son razonables para operaciones externas transitorias, pero esconden defectos si se aplican a toda la compilación. Cuando resuelvas el incidente, agrega una comprobación automática o documenta la configuración requerida. Un pipeline saludable no solo vuelve a ponerse verde: ofrece evidencia suficiente para que el siguiente fallo sea más fácil de explicar y menos costoso de resolver.