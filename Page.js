"use strict";

class Page {
    constructor(){
        this.url = "https://www.youtube.com/watch?v=G2_SATbl9ss";
        this.driver = createDriver();
    }
    get(){
        driver.get( this.url );
    }
}

module.exports = Page;