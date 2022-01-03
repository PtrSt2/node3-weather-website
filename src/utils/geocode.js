const postmanReq = require("postman-request");

const geocode = (address, callback) => {
  const urlMaps =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?limit=1&access_token=pk.eyJ1IjoicGlvdHJzdCIsImEiOiJja3g3eWdxZzEwNXJ2Mm5zZXcyOTVpMXM1In0.QcqVcYroFGPagRjOqzAA8Q";

  postmanReq({ url: urlMaps, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location services.", undefined);
    } else if (response.body.features.length === 0) {
      callback("Unable to find location.", undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[0],
        longitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
