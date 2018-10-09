# cwm-web

cwm website

## Key Technologies
* React + Redux
* Next.js (to generate static site)
* Zeit [now-cli](https://github.com/zeit/now-cli) (for deployment)

## Development
* Install dependencies.
```bash
$ npm install
```

* Run project in development.
```bash
$ npm run dev
```

* navigate to `localhost:3000`

## Production Build and Deployment
* Download Zeit now-cli
```bash
$ npm install -g now
```

* Authenticate using Zeit credentials

* Build static site in /out directory
```bash
$ npm run build
$ npm run export
```

* Deploy the site
```bash
$ cd out
$ now
```

* Alias the deployment. Running `now` as indicated above will generate a unique deployment url. Alias that deployment to desired targets
```bash
$ now alias <unique-deployment-url> crossworldmedics.org
$ now alias <unique-deployment-url> www.crossworldmedics.org
```