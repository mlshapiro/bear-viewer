# Bear-Viewer

Cross platform notes viewer for Bear notes app

## Development Setup

Requires:

- Node > 6, npm > 3
- `yarn` package manager (`npm install -g yarn`)

## Quick Start

- Clone this repository
- Install node dependencies

```
$ yarn install
```


## Build

To run a development server:

```
$ yarn run dev
```

To build the app for production:

```
$ yarn run build
```

- Build will copy `index.html` and the `assets/` directory from `src/` to `www/`
- Stylus is compiled into css by Vue components
