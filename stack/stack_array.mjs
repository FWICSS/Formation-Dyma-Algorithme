export class Stack {
    constructor() {
        this.array = new Array();
        this.top = -1;
    }

    push(value) {
        this.top++;
        this.array[this.top] = value;
    }

    peek() {
        if (this.top < 0) {
            return null;
        } else {
            return this.array[this.top];
        }
    }

    pop() {
        if (this.top < 0) {
            return null;
        } else {
            const value = this.array[this.top];
            this.top--;
            return value;
        }
    }

    getSize() {
        return this.top + 1;
    }

    isEmpty() {
        return this.top < 0;
    }

    clear() {
        this.top = -1;
    }

    print() {
        process.stdout.write('[');
        for (let i = this.top; i > -1; i--) {
            process.stdout.write(` ${this.array[i]}${i > 0 ? "," : ""}`);
        }
        process.stdout.write(" ]\n");
    }
}

const stack = new Stack();

stack.print() // vide
stack.push(1) //[1]
stack.push(22) //[22,1]
stack.print()
console.log(stack.peek()); //22
console.log(stack.pop()); //22
stack.print(); //[1]
console.log(stack.getSize()) //1
console.log(stack.isEmpty()) //False
stack.clear()
console.log(stack.isEmpty()) //True