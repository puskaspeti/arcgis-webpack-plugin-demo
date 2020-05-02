import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  AuthenticationService,
  BearerTokenInterceptor,
  COMMON_LIB_CONFIG_TOKEN,
  CommonLibModule,
  ICommonLibConfig,
  RefreshTokenInterceptor,
} from '@eing/common';
import { TranslateModule } from '@ngx-translate/core';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

export function authenticationInitializer(authService: AuthenticationService) {
  return () => {
    return authService.init({
      keycloak: {
        url: environment.authServerUrl,
        clientId: 'terkep-frontend',
        realm: 'public',
      },
      loadUserProfileAtStartUp: true,
    });
  };
}

export function commonLibConfigFactory(): ICommonLibConfig {
  return {
    appId: 'terkep',
    appType: 'front_office',
    apiUrl: environment.apiUrl,
    isProduction: environment.production,
    clientAppVersion: environment.version,
    logoutRedirectUrl: environment.logoutRedirectUrl,
    navbarItems: [
      {
        title: marker('TERKEP_TEST.HOME.TITLE'),
        link: '/home',
      },
    ],
  };
}

export function apiConfiguration() {
  return { rootUrl: environment.apiUrl };
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, HttpClientModule, TranslateModule.forRoot(), CommonLibModule],
  providers: [
    // TODO: swagger generálás után az alábbi kóddal lehet beállítani, hogy éles környezetben configolható legyen a backend URL
    // {
    //   provide: TerkepApiConfiguration,
    //   useFactory: apiConfiguration
    // },
    {
      provide: COMMON_LIB_CONFIG_TOKEN,
      useFactory: commonLibConfigFactory,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: authenticationInitializer,
      multi: true,
      deps: [AuthenticationService],
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RefreshTokenInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BearerTokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
