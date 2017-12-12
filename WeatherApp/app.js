const fetch = require('node-fetch');
const yargs = require('yargs');

const argv = yargs.options({
        address: {
            describe: 'Address to fetch weather for',
            demand: true,
            alias: 'a',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

let address = encodeURIComponent(argv.address);

fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}`)
    .then((res) => res.json())
    .then(json => {
        console.log('Latitude:', json.results[0].geometry.location.lat);
        console.log('Longitude:', json.results[0].geometry.location.lng);
    })
    .catch(err => console.log(err));