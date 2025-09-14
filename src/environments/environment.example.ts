/**
 * Este archivo sirve de ejemplo para configurar las variables de entorno.
 * Crear un archivo environment.ts (sin .example) con la configuración real.
 */
export const environment = {
  production: false,
  tmdb: {
    apiKey: 'REPLACE_ME', // <- poné la key real en environment.ts (NO acá)
    baseUrl: 'https://api.themoviedb.org/3',
    imageBaseUrl: 'https://image.tmdb.org/t/p',
    defaultImageSize: 'w500',
    defaultLanguage: 'es-ES',
    endpoints: {
      search: '/search/multi',
      trending: '/trending/all/week',
      popular: '/movie/popular',
      topRated: '/movie/top_rated',
    },
  },
};
