"use strict";

let webdriver = require("selenium-webdriver"),
    Page = require("./Page.js"),
    page = new Page();

function createDriver() {
    let driver = new webdriver.Builder()
        .usingServer('http://localhost:8888/wd/hub')
        .withCapabilities(webdriver.Capabilities.chrome())
        .build();
    driver.manage().timeouts().setScriptTimeout(10000);
    return driver;
}



page.get();

driver.getTitle().then(function (title) {
    console.log(title);
});

driver.quit();