"use strict";

let webdriver = require("selenium-webdriver");

class Driver{
    constructor(){
        let driver = new webdriver.Builder()
            .usingServer('http://localhost:8888/wd/hub')
            .withCapabilities(webdriver.Capabilities.chrome())
            .build();
        driver.manage().timeouts().setScriptTimeout(10000);

        this.instance = driver;
    }
}

module.exports = Driver;
