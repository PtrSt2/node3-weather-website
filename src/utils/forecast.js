const requests = require("postman-request");

const forecast = (address, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=48cd4a9a68bb1fde939e2258856268ff&query=${address}`;

  requests({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("", undefined);
    } else if (response.body.error) {
      callback("", undefined);
    } else {
      console.log(response);
      callback(undefined, response);
    }
  });
};

module.exports = forecast;
