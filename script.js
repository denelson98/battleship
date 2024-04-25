class Ship {
    constructor(){
        this.length = 0;
        this.hits = 0;
        this.sunk = false;
    }

    hit(){
        if(this.isSunk()){
            this.sunk = true;
        }
        this.hits++;
    }

    isSunk(){
        return this.hits === this.length;
    }
}

function functionName(){
    //
}

// module.exports = functionName 