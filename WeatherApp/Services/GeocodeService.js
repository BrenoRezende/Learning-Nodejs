const fetch = require('node-fetch');

module.exports = class GeocodeService {

    _handleErrors(res) {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
    }

    getGeocode(address) {
        let encodedAddress = encodeURIComponent(address);

        return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`)
            .then((res) => this._handleErrors(res))
            .then(json => {
                if (json.results.length > 0) 
                    return json.results[0].geometry.location;
                return null;    
            })
            .catch(err => { throw new Error(err) });
    }
}