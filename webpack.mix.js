let mix = require('laravel-mix');

mix.sass('./resources/assets/scss/app.scss', 'public/css');
mix.js('./resources/assets/vue/app', 'public/js');