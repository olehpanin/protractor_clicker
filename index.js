"use strict";

let Driver = require("./src/js/Driver.js"),
    Page = require("./src/js/Page.js"),
    driver = new Driver().instance,
    page = new Page( driver );

page.getInCircle(20);

driver.getTitle().then(function (title) {
    console.log(title);
});

