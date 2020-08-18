define(function (require) {
    var Papa = require('papaparse.min');
    return {
        parse_csv: async function(src){

            return await fetch(src)
                .then(raw => raw.text())
                .then(data => Papa.parse(data))
                .then(json => {
                    return Promise.resolve(json.data);
                });
        }
    };
});