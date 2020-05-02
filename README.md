# TerkepTest

Az alkalmazás @eing/schematics segítségével lett generálva.

## Használati útmutató

## API generálás

Az `ng-swagger-gen -c terkep-api.json` legenerálja a(z) `terkep-api.json`-ben leírtak alapján a projekhez szükséges swagger API service-eket és a hozzájuk tartozó komponenseket.
Mindez a `./src/app/api/terkep` mappa alá generálódik.

Példa:

Az `eing-f-beadvany-frontend-workflow` projekthez tartozó API generáló JSON (api.json) tartalma:

```(json)
{
  "$schema": "./node_modules/ng-swagger-gen/ng-swagger-gen-schema.json",
  "swagger": "http://localhost:7081/eakta/v2/api-docs",
  "output": "projects/eing-f-beadvany-frontend-workflow/src/api/eakta",
  "prefix": "eakta-wf",
  "sortParams": "none"
}
```

Fontos, hogy a generált API modul `.forRoot()` beállítása **NE** az `AppModule`-ban legyen, hanem a(z) `TerkepModule`-ban.

### Telepítés

Hozzon létre egy `.npmrc` fájlt a home könyvtárban (Linux/Windows PowerShell: `cd ~`, Windows parancssor: `cd %HOMEPATH%`).
Ha már létezik ilyen fájl, a meglévőt nyissa meg és fűzze a tartalma utána a lentebb található szöveget.
Az `.npmrc` fájl elvárt tartalma:

```(text)
registry=https://registry.npmjs.org/
@eing:registry=https://nexus.eing.tigra.hu/repository/npm-private/
@eing-types:registry=https://nexus.eing.tigra.hu/repository/npm-private/
//nexus.eing.tigra.hu/repository/npm-private/:_auth=<auth data>
```

Az `<auth data>`-t cserélje a megfelelő authentikációs adatra.

Ezután már rendelkeznie kell hozzáféréssel a E-ING Nexus-hoz. Minden `@eing/...` és `@eing-types/` csomag itt kerül tárolásra.
