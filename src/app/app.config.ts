/*
 * src/app.config.ts - Configuración global de la aplicación Angular
 *
 * Este archivo centraliza toda la configuración de la aplicación:
 * 1. Proveedores de servicios
 * 2. Configuración de rutas
 * 3. Interceptors HTTP
 * 4. Configuración de módulos externos
 * 5. Configuración del entorno
 */
import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

/**
 * Configuración principal de la aplicación
 *
 * ApplicationConfig es la nueva forma de configurar aplicaciones Angular standalone.
 * Reemplaza el tradicional NgModule y ofrece mejor tree-shaking y modularidad.
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ],
};
