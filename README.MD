#INSTALAR TAILWIND EN EL PROYECTO

Instalar el tailwind

```
npm install -D tailwindcss
```

Para iniciar el tailwind

```
npx tailwindcss init
```

Platilla para poder manejar las custom propertis

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

```
Iniciar el tailwind
```
npx tailwindcss -i input.css -o output.css --watch
```