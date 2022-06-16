"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var form = document.querySelector("form");
var addressInput = document.getElementById("address");
var GOOGLE_API_KEY = "AIzaSyCIaAc2c5M3VpbCH6PPq_guwy9lHuowXOs";
function searchAddressHandler(event) {
    event.preventDefault();
    var enteredAddress = addressInput.value;
    axios_1["default"]
        .get("https://maps.googleapis.com/maps/api/geocode/json?address=".concat(encodeURI(enteredAddress), "&key=").concat(GOOGLE_API_KEY))
        .then(function (response) {
        if (response.data.status !== "OK") {
            throw new Error("Could not fetch location!");
        }
        var coordinates = response.data.results[0].geometry.location;
    })["catch"](function (err) {
        alert(err.message);
        console.log(err);
    });
}
form.addEventListener("submit", searchAddressHandler);
