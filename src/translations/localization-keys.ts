/**
 * @file Itt kerülnek listázásra azok a lokalizációs kulcsok, amik az alkalmazásban máshol nem jelennek meg,
 * viszont felhasználásra kerülnek.
 * @example marker('COMMON.BUTTON.SAVE');
 */

import { marker } from '@biesbjerg/ngx-translate-extract-marker';

/**
 * Ez a $schema marker egy workaround, enélkül az `npm run translate` kitörölné a '$schema'-t a JSON fájlokból.
 */
marker('$schema');
