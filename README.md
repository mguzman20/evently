# Ejemplo Evently

Este es un ejemplo de un proyecto de Evently.

## Demo

Puedes ver el proyecto en [evently-snowy-five.vercel.app](https://evently-snowy-five.vercel.app/)

## Instalation

Para instalar el proyecto, primero clona el repositorio:

```bash
git clone 
```
Luego crea un archivo `.env.local` en la raíz del proyecto con el siguiente contenido:

```env
DATABASE_URL= #SQL DATABASE URL
```

Luego, instala las dependencias:

```bash
npm install
```

## Use

Para correr el proyecto en local, ejecuta:

```bash
npm run dev
```

## Features

- Crear eventos con título, descripción, fecha, precio, ubicación y estado. (/admin/events)
- Ver eventos creados. (/events)
- Comprar entradas para eventos. (/events/:id)
- Ver entradas compradas. (/admin/tickets)
- Buscar eventos por título. (/events y nabvar)
- Landig page con eventos destacados.
- Modo oscuro y claro.
- Diseño responsivo.
- Utilizacion de Next.js, Server Actions, React, Shadcn/ui, TailwindCSS, Prisma y PostgreSQL.

