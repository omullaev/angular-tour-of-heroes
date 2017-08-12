# Getting Started

Super simple Angular app with 1 module and 2 routes 

## Get the Code
```
git clone https://github.com/johnpapa/angular-tour-of-heroes.git toh
cd toh
npm i
```

### Just in Time (JiT) Compilation

Runs the TypeScript compiler and launches the app

```
npm start
```

### Ahead of Time (AoT) Compilation 

Runs the Angular AoT compiler, rollup, uglify for an optimized bundle, then launches the app

```
npm run start-aot
```

### AoT + gzip 

Runs AoT plus gzips and launches the app 

```
gulp copy-aot-gzip
npm run aot
npm run rollup
http-server
```

### Runs e2e tests
```
npm run e2e
```

### Build report
```
mvn site -Dallure.results_pattern=allure-results
```

### Deploy report via jetty on 1234 port
```
mvn jetty:run -Djetty.port=1234
```

Notes:
- Use your favorite server in place of `http-server`
- This could be scripted, obviously
- `lite-server` does not launch gzipped files by default.


