export class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

export class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;

    }


    addFirst(value) {
        let current = this.head;
        if (!current) {
            this.head = new Node(value);
        } else {
            this.head = new Node(value, current);
        }
        this.size++;
    }

    addLast(value) {
        let current = this.head;
        if (!current) {
            this.head = new Node(value);
        } else {
            while (current.next) {
                current = current.next;
            }
            current.next = new Node(value);
        }
        this.size++;
    }

    add(value, position) {
        if (position < 0 || position > this.size) {
            throw new Error("Wrong position");
        }
        if (position === 0) {
            this.head = new Node(value, this.head);
        } else {
            let current = this.head;
            while (position - 1) {
                current = current.next;
                position--;
            }
            current.next = new Node(value, current.next);
        }
        this.size++;

    }

    clear() {
        this.head = null;
        this.size = 0;
    }

    remove(position) {
        let index = position;
        if (position < 0 || position > this.size - 1) {
            throw new Error('Wrong position');
        } else if (position === 0) {
            const headValue = this.head.value;
            this.head = this.head.next;
            this.size--;
            return "Supression de l'élement a la position " + index + " : " + headValue;
        } else {
            let current = this.head;
            while (position - 1) {
                current = current.next;
                position--;
            }
            const nodeValue = current.next.value;
            current.next = current.next.next;
            this.size--;
            return "Supression de l'élement a la position " + index + " : " + nodeValue;
        }

    }

    removeFirst() {
        let current = this.head;
        if (!current) {
            return null;
        } else {
            this.head = current.next;
            this.size--;
            return current.value;
        }
    }

    removeLast() {
        let current = this.head;
        if (!current) {
            return null;
        } else if (!current.next) {
            this.head = null;
            this.size--;
            return "element supprimer a la fin : " + current.value;
        } else {
            while (current.next.next) {
                current = current.next;
            }
            const nodeValue = current.next.value;
            current.next = null;
            this.size--;
            return "element supprimer a la fin : " + nodeValue;
        }

    }

    get(index) {
        if (index > this.size - 1) {
            return null;
        } else {
            let current = this.head;
            while (index) {
                current = current.next;
                index--;
            }
            return "L'élément est " + current.value;
        }
    }

    contains(value) {
        let current = this.head;
        if (!current) {
            return value;
        } else {
            while (current) {
                if (current.value === value) {
                    return true;
                } else {
                    current = current.next;
                }
            }
            return false;
        }
    }

    print() {
        let current = this.head;
        while (current) {
            process.stdout.write(` ${current.value} ->`)
            current = current.next;
        }
        console.log(" null")
    }

}

function main() {
    const linkedList = new LinkedList();
    console.log("***************");
    console.log(" Methode ajout");
    console.log("***************");
    linkedList.addFirst('a');
    linkedList.print();
    linkedList.addFirst('b');
    linkedList.print();
    linkedList.addLast('c');
    linkedList.print();
    linkedList.add("d", 1);
    linkedList.print();
    linkedList.add("e", 0);
    linkedList.print();
    linkedList.add("f", 5);
    linkedList.print();
    console.log(" ");
    console.log("***************");
    console.log(" Methode suppression ");
    console.log("***************");
    console.log(linkedList.removeFirst());
    linkedList.print();
    console.log(linkedList.removeLast());
    linkedList.print();
    console.log(linkedList.remove(1));
    linkedList.print();
    console.log(linkedList.remove(0));
    linkedList.print();
    console.log(" ");
    console.log("***************");
    console.log(" Methode de recharche ");
    console.log("***************");
    console.log(linkedList.get(1));
    console.log(linkedList.contains("a"));
}


