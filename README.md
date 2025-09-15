# Poc-Angular-Gallery

Galería de películas usando Angular Standalone y la API de TMDB.

## Requisitos

- Node.js >= 18
- Angular CLI (`npm install -g @angular/cli`)

## Instalación

1. Clona el repositorio:

   ```sh
   git clone https://github.com/tu-usuario/poc-angular-gallery.git
   cd poc-angular-gallery
   ```

2. Instala las dependencias:

   ```sh
   npm install
   ```

3. Configura la clave de la API de TMDB:
   - Copia el archivo de ejemplo:
     ```sh
     cp src/environments/environment.example.ts src/environments/environment.ts
     ```
   - Ingresa tu propia clave de TMDB en el campo `apiKey` del archivo `src/environments/environment.ts`.
   - Si ya tienes el archivo y la clave, puedes omitir este paso.

## Ejecución

Inicia el servidor de desarrollo:

```sh
ng serve
```

La aplicación estará disponible en [http://localhost:4200](http://localhost:4200).

## Uso

- La galería muestra posters de películas populares obtenidos desde TMDB.
- Haz clic en un poster para ver la vista previa.
- Puedes marcar películas como favoritas.

## Estructura del Proyecto

- `src/app/components/gallery/`: Componente principal de la galería.
- `src/app/services/image.service.ts`: Servicio para obtener imágenes de TMDB.
- `src/environments/environment.ts`: Configuración de la API y entorno.

## Notas

- No subas tu clave privada de TMDB a repositorios públicos.
- Para obtener una clave gratuita, regístrate en [TMDB](https://www.themoviedb.org/documentation/api).
