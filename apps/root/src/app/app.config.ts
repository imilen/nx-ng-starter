import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import {
  NoPreloading,
  provideRouter,
  withComponentInputBinding,
  withInMemoryScrolling,
  withPreloading,
  withViewTransitions,
} from '@angular/router';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(
      appRoutes,
      withViewTransitions({
        skipInitialTransition: true,
      }),
      withPreloading(NoPreloading),
      withComponentInputBinding(),
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      }),
    ),
  ],
};
