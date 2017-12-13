const yargs = require('yargs');
const Geocode = require('./Services/GeocodeService');

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

let geocode = new Geocode();

geocode.getGeocode(argv.address)
    .then(location => {
        if (location) {
            console.log(`Latitude: ${location.lat}`);
            console.log(`Longitude: ${location.lng}`);
        } else {
            console.log('Unable to find that address.');
        }
    })
    .catch(err => console.log('Unable to connect to Google servers.'));
