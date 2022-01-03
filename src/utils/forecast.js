const requests = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=48cd4a9a68bb1fde939e2258856268ff&query=krakow";

  requests({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("", undefined);
    } else if (response.body.error) {
      callback("", undefined);
    } else {
      callback(undefined, response);
    }
  });
};

module.exports = forecast;
