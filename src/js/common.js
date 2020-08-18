//Starting base for all applications
requirejs.config({
    baseUrl: '/src/js/libs',
    paths: {
        app: '../app',
        bootstrap: 'bootstrap.min',
        jquery: 'jquery.min',
        papaparse: 'papaparse.min',
        popper: 'popper.min',
        Plyr: 'plyr'
    },
    shim: {
        bootstrap: ["jquery"],
        jquery: {
            exports: '$'
        }
    },
    map: {
        '*': {
            'popper.js': 'popper'
        }
    }
});

