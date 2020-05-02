// This file is the default environment. These values can be overwritten with the `/src/assets/environments/environment.json` file.
// Also, this .json file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.json` with `environment.prod.json`.

import { version } from './version';

export interface Environment {
  production: boolean;
  authServerUrl: string;
  version: string;
  apiUrl: string;
  logoutRedirectUrl?: string;
}

export const environment: Environment = {
  production: false,
  authServerUrl: 'http://localhost:8080/auth',
  version,
  apiUrl: '/api/terkep-backend',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
