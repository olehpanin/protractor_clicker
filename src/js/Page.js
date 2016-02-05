"use strict";

let Q = require("q");

class Page {
    constructor( driver ){
        this.url = "https://www.youtube.com/watch?v=mh5Hl32307E"; //1208
        this.driver = driver;
        this.timeToWait = 10000;
        this.getInCircleTimeout = undefined;
    }
    get(){
        this.driver.get( this.url );
    }

    getInCircle( times ){
        if( times <= 0 ){
            clearTimeout( this.getInCircleTimeout );
            this.driver.quit();
            return false;
        }
        let instance = this,
            deferred = Q.defer();

        console.log( "times: ", times );
        console.log( "OPEN PAGE" );

        this.get();
        this.driver.sleep(this.timeToWait);

        this.getInCircleTimeout = setTimeout(function(){
            deferred.resolve();
        }, this.timeToWait);

        deferred.promise.then(function(){
            instance.getInCircle( times - 1 );
        })
    }
}

module.exports = Page;