/* main.ts es el primer archivo que se ejecuta 
en una aplicación Angular.*/

import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';

bootstrapApplication(App, appConfig) // <-- (Función que inicia componente raíz [App]
                                     //      e inicia configuraciones [appConfig])
                                     
  .then(() => console.log('Aplicación iniciada correctamente'))
  .catch((err) => console.error('❌ Error al iniciar la aplicación:', err));
