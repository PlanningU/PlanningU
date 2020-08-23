define(function (require) {
    var Papa = require('papaparse.min');
    return {
        //Uses the papa_parse lib to return a promise containing an array made from a csv file

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