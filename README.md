# ArcGIS webpack-plugin bemutató

Az alkalmazás @eing/schematics segítségével lett generálva.

A projekt célja, hogy bemutassa a https://developers.arcgis.com/javascript/latest/guide/angular/ linken leírt konfigurációt, kiegészítve a leírásban nem szereplő lépésekkel, hogy működő térkép komponenst lehessen használni típusdefiníciókkal.

Az [ArcGIS JS konfigurácó commit](https://github.com/puskaspeti/arcgis-webpack-plugin-demo/commit/f45b603afa525325d0bf3e9dc86ec24ab33808ca) tartalmazza a legfontosabb konfigurációs lépéseket.

## Telepítés

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

Valamilyen módosítás

Még több módosítás
