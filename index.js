"use strict";

let Driver = require("./src/js/Driver.js"),
    YoutubePage = require("./src/js/YoutubePage.js"),
    driver = new Driver().instance,
    youtubePage = new YoutubePage( driver );

youtubePage.getInCircle(1);

driver.getTitle().then(function (title) {
    console.log(title);
});
