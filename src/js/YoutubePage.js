"use strict";

let Q = require("q");
let webdriver = require("selenium-webdriver");
let By = webdriver.By;

class YoutubePage {
    constructor( driver ){
        this.homePageUrl = "https://www.youtube.com/";
        this.targetUrl = "https://www.youtube.com/watch?v=rJpXzmJItR0"; //618
        this.targetName = "Ferret Elly vs. Baloon";
        this.searchWords = "ferret elly";
        //this.target
        this.driver = driver;
        this.timeToWait = 20000;
        this.getInCircleTimeout = undefined;
    }

    goToHomePage(){
        this.driver.get( this.homePageUrl );
    }

    getSearchInput(){
        return this.driver.findElement(By.id('masthead-search-term'));
    }

    getSearchButton(){
        return this.driver.findElement(By.id('search-btn'));
    }

    getTargetButton(){
        console.log( "[title='" + this.targetName + "']" );
        return this.driver.findElement( By.css("[title='" + this.targetName + "']" ) );
    }

    getInCircle( times ){
        this.goToHomePage();
        this.getSearchInput().sendKeys( this.searchWords );
        this.getSearchButton().click();

        this.getTargetButton().click();

        this.driver.sleep(10000);
        //if( times <= 0 ){
        //    clearTimeout( this.getInCircleTimeout );
        //    this.driver.quit();
        //    return false;
        //}
        //let instance = this,
        //    deferred = Q.defer();
        //
        //console.log( "times: ", times );
        //console.log( "OPEN PAGE" );
        //
        //this.get();
        //this.driver.sleep(this.timeToWait);
        //
        //this.getInCircleTimeout = setTimeout(function(){
        //    deferred.resolve();
        //}, this.timeToWait);
        //
        //deferred.promise.then(function(){
        //    instance.getInCircle( times - 1 );
        //})
    }
}

module.exports = YoutubePage;