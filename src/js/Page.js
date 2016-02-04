"use strict";

class Page {
    constructor( driver ){
        this.url = "https://www.youtube.com/watch?v=mh5Hl32307E"; //1197
        this.driver = driver;
    }
    get(){
        this.driver.get( this.url );
    }

    getInCircle( times ){

    }

}

module.exports = Page;