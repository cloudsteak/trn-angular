# trn-angular (Angular demo)

Egyszerű Angular alkalmazás (standalone), localStorage alapú „Visszajelzés fal”.
Demóbarát: `ng build` után a kimenet a `dist/trn-angular` mappában van (Amplify Hosting kompatibilis).

## Követelmények
- Node.js 18/20/22
- npm

## Helyi futtatás
```bash
npm ci           # vagy: npm install
npx ng serve -o  # vagy: npm start
```
Alap URL: http://localhost:4200

## Production build
```bash
npx ng build --configuration=production
# Kimenet: dist/trn-angular
```

## AWS Amplify Hosting
- Connect app → GitHub
- A buildspec az `amplify.yml` fájlban van (Node 20-at használ).
- Artifact mappa: `dist/trn-angular`


### Megjegyzés
- Helyi futtatáshoz szükséges a `@angular-devkit/build-angular` (hozzáadva).
- Az `angular.json`-ból eltávolítottuk a `defaultProject` mezőt az új séma miatt.
