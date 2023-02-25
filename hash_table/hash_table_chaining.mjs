import {LinkedListHash} from "../linked_list/linked_list_hash_table.mjs";

class HashTable {

    constructor() {
        this.table = new Array(97);
        this.size = 0;
    }

    hash(key) {
        let total = 0;
        if (typeof key === 'string') {
            for (let i = 0; i < key.length; i++) {
                total += key.charAt(i);
            }
        } else if (typeof key === 'number') {
            total = key
        }
        return total % this.table.length;
    }


    get(key) {
        const index = this.hash(key);
        const list = this.table[index];
        if (!list) {
            return null;
        }
        return list.get(key);
    }

    set(key, value = null) {
        const index = this.hash(key);
        const list = this.table[index];
        if (!list) {
            this.table[index] = new LinkedListHash();
            this.table[index].add(key, value);
            this.size++;
        } else {
            if (!list.update(key, value)) {
                list.add(key, value)
                this.size++;
            }
        }
    }

    delete(key) {
        const index = this.hash(key);
        const list = this.table[index];
        if (!list) {
            return null;
        }
        const value = list.delete(key);
        if (value) {
            this.size++;
        }
        return value;
    }

    isEmpty() {
        return this.size === 0;
    }
}

const hash = new HashTable();

const hello = "world";
const user = {
    id: '123',
    name: "dimitri",
};

hash.set(hello);
hash.set(user.id, user);

console.log(hash);
console.log(hash.get("world"));
console.log(hash.get("123"));