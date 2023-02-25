class HashTable {

    constructor() {
        this.table = new Array(97);
        this.size = 0;
        this.MULTIPLICATION = 0.987654321
    }

    // hash(key) {
    //     let total = 0;
    //     if (typeof key === 'string') {
    //         for (let i = 0; i < key.length; i++) {
    //             total += key.charAt(i);
    //         }
    //     } else if (typeof key === 'number') {
    //         total = key
    //     }
    //     return total % this.table.length;
    // }

    //! Parti entière ( taille du tableau * ((clé * 0 < A < 1 ) % 1) hashMultiplication
    hash(key) {
        let total = 0;
        if (typeof key === 'string') {
            for (let i = 0; i < key.length; i++) {
                total += key.charAt(i);
            }
        } else if (typeof key === 'number') {
            total = key
        }
        return Math.floor(this.table * ((total * this.MULTIPLICATION) % 1))
    }

    get(key) {
        const index = this.hash(key);
        return this.table[index];
    }

    set(key, value = null) {
        const index = this.hash(key);
        if (this.table[index]) {
            console.log('colision !');
        } else {
            this.size++;
        }
        this.table[index] = value ?? key;
    }

    delete(key) {
        const index = this.hash(key);
        let value = null;
        if (this.table[index]) {
            this.size--;
            value = this.table[index];
            this.table[index] = null;
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