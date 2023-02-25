export class Node {
    constructor(key, value, next = null) {
        this.key = key;
        this.value = value;
        this.next = next;
    }
}

export class LinkedListHash {
    constructor() {
        this.head = null;
        this.size = 0;

    }


    add(key, value = null) {
        let current = this.head;

        if (!current) {
            this.head = new Node(key, value ?? key);
        } else {
            while (current.next) {
                current = current.next;
            }
            current.next = new Node(key, value);
        }
        this.size++;

    }

    clear() {
        this.head = null;
        this.size = 0;
    }


    get(key) {
        let current = this.head;
        if (!current) {
            return null;
        } else {
            while (current) {
                if (current.key === key) {
                    return current.value;
                }
                current = current.next;
            }
            return null;
        }
    }

    delete(key) {
        if (this.size === 0) {
            return null;
        }
        if (this.head.key === key) {
            const value = this.head.value;
            this.head = this.head.next;
            this.size--;
            return value;
        }
        if (this.head.key !== key) {
            let current = this.head;
            while (current.next) {
                if (current.next.key === key) {
                    const value = current.next.value;
                    current.next = current.next.next;
                    this.size--;
                    return value;
                }
                current = current.next;
            }
        }
        return null;
    }

    update(key, value) {
        if (this.size === 0) {
            return null;
        }
        let current = this.head;
        while (current) {
            if (current.key === key) {
                current.value = value;
            }
            current = current.next;
        }
        return false;
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