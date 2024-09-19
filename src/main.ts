import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

// Update appConfig to include the router
const updatedAppConfig = {
  ...appConfig,
  providers: [
    ...appConfig.providers, // Preserve existing providers
    provideRouter(routes) // Add routing providers
  ],
};

bootstrapApplication(AppComponent, updatedAppConfig)
  .catch((err) => console.error(err));
