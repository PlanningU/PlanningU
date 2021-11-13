//Starting base for all applications
requirejs.config({
    baseUrl: '/PlanningU/src/js/libs',
    urlArgs: "v=1.2",
    paths: {
        //Insert your libraries here for easy access
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

