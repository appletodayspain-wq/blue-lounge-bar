# Blue Lounge Bar · web, carta y TPV

- `site/` — la web pública (`index.html`, `carta.html`) y el TPV (`tpv.html`, se abre en `/tpv`).
- `netlify/functions/api.mjs` — el servidor del bar: pedidos, reservas, clientes y sincronización del TPV.
  Guarda todo en Netlify Blobs (no hace falta base de datos externa).
- `netlify/functions/seed.mjs` — carta, mesas y ajustes que se cargan la primera vez.

## Publicar
Netlify instala y publica solo cada vez que cambia este repositorio (no hay que compilar nada).

## Clave del TPV
La primera vez que abras `/tpv` te pedirá crear la clave. Si prefieres fijarla en Netlify,
crea la variable de entorno `TPV_CLAVE`.
