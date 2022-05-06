#! /usr/bin/env ts-node

class Queue{
    fifo = [];
    constructor() {

    }
    enqueue(item: any){
        this.fifo.unshift(item);
    }
    dequeue(): any{
        return this.fifo.pop();
    }
    print(){
        console.log(this.fifo);
    }
}

