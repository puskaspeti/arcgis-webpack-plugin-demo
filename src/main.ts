import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { loadEnvironment } from '@eing/common';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

loadEnvironment(environment).then(() => {
  if (environment.production) {
    enableProdMode();
  }

  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
});
