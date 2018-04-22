# Adonis Bootstrap SPA Starter
## Prebuilt auth pages

## Features
* Sigle page application
* Vue and Vue Router configured with auth restricted pages
* Basic example login and register with JWT Auth
* UI Simple bootstrap
* Powered by [AdonisJS](https://adonisjs.com)

## Installation
adonis new myapp --blueprint=IvanAquino/adonis-bootstrap-starter-spa

## Vue App

Vue app it's in the folder __/resources/assets/vue__, you can modify the different components and compile

Watch changes on components
```
npm run watch
```

Compile production version
```
npm run production
```

_Vue-router is configured in_ ___history mode___ _by default_


## Run adonis serve dev mode

```
adonis serve --dev
```

### Http Request
You can use ___this.$http___ to access all methos of Axios

### Headers on authorized routes
Use ___this.$auth.getToken()___ to access Bearer Token

```
let headers = { 'Authorization': this.$auth.getToken() }

this.$http.get(`${window.basePath}/auth/user`, {headers})
```

## Captures

![login](https://lh6.googleusercontent.com/L7AkTrmAftb1oKtad2y9URs0dh2W75Lqw_rBygwEiIvNdztChvxS87kzqbGrwCOOVJM9tRoYrObB4ds1RgOZ=w2213-h895-rw)

![dashboard](https://lh3.googleusercontent.com/TdT-5xUDWrGYc5u61FZfiqfqfI4zXwYuF8bPd8lWasJb5gUIHGZMKYlliihcnb0bhsvE8CB_eIdpUUY9igJh=w2213-h895-rw)