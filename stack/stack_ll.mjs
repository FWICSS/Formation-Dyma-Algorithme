import {LinkedList} from "../linked_list/linked_list.mjs";


export class Stack {
    constructor() {
        this.list = new LinkedList();
    }

    push(value) {
        this.list.addFirst(value);
    }

    peek() {
        return this.list.get(0);
    }

    pop() {
        return this.list.removeFirst()
    }

    clear() {
        return this.list.clear()
    }

    getSize() {
        return this.list.size;
    }

    isEmpty() {
        return this.list.size === 0;
    }

    print() {
        this.list.print();
    }

}
//
//const stack = new Stack();
//
//stack.print() // vide
//stack.push(1) //[1]
//stack.push(22) //[22,1]
//stack.print()
//console.log(stack.peek()); //22
//console.log(stack.pop()); //22
//stack.print(); //[1]
//console.log(stack.getSize()) //1
//console.log(stack.isEmpty()) //False
//stack.clear()
//console.log(stack.isEmpty()) //True