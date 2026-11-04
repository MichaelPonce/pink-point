---
title: "Optimización de consultas en SQL Server: medir antes de reescribir"
description: "Un método práctico para detectar consultas costosas, leer planes de ejecución y elegir índices sin comprometer la escritura."
pubDate: 2026-08-12
tags:
  - SQL Server
  - rendimiento
  - bases de datos
---

Una consulta lenta no siempre necesita una reescritura completa. En SQL Server, el primer paso útil es medir el comportamiento real: duración, CPU, lecturas lógicas y frecuencia. Query Store ayuda a comparar planes y regresiones a lo largo del tiempo; para una investigación puntual, las estadísticas de E/S y tiempo permiten contrastar cambios con una carga reproducible. Evita optimizar solo porque una consulta parece compleja: el costo observado y el impacto para el usuario son mejores prioridades.

## Lee el plan, no solo el SQL

El plan de ejecución muestra cómo el motor accede a los datos y estima el costo de cada operación. Busca escaneos grandes, conversiones implícitas, estimaciones de cardinalidad muy alejadas del número real y operadores que derraman a tempdb. Un escaneo no es automáticamente un error: puede ser la opción correcta cuando se devuelve gran parte de una tabla. Revisa también si los predicados son sargables. Aplicar funciones a una columna filtrada, por ejemplo, puede impedir una búsqueda eficiente por índice.

## Índices con una hipótesis clara

Antes de agregar un índice, identifica las columnas usadas en filtros y uniones, y comprueba si uno existente ya cubre el caso. Un índice compuesto debe respetar el patrón de acceso: el orden de sus claves importa. Las columnas incluidas pueden evitar búsquedas adicionales, pero aumentan almacenamiento y costo de escritura. Mide tanto la consulta objetivo como las operaciones de inserción, actualización y eliminación que dependen de la tabla.

Las estadísticas desactualizadas pueden conducir a malas estimaciones; actualízalas según el volumen y el patrón de cambios, no como ritual indiscriminado. Después de cada ajuste, compara el mismo conjunto de parámetros y datos, y guarda la línea base. Prueba también valores poco frecuentes: una solución que acelera un parámetro puede empeorar otro por sensibilidad a parámetros. En producción, despliega cambios reversibles, observa Query Store y define de antemano cómo volver atrás. El resultado sostenible es una mejora demostrable con un costo operativo que el sistema puede asumir.