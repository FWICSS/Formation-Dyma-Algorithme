import { Queue} from "../queue/queue_ll.mjs";

class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(key) {
        if (!this.root)
            this.root = new Node(key);
        else {
            let current = this.root;
            while (true) {
                if (current.key > key) {
                    if (!current.left) {
                        current.left = new Node(key);
                        return;
                    } else {
                        current = current.left;
                    }
                } else if (current.key < key) {
                    if (!current.right) {
                        current.right = new Node(key);
                        return;
                    } else {
                        current = current.right;
                    }
                } else {
                    return;
                }

            }
        }
    }

    search(key) {
        let current = this.root;
        while (current != null && current.key !== key) {
            if (key < current.key) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return current;
    }

    minFromNode(node) {
        let current = node;
        while (current.left) {
            current = current.left;
        }
        return current
    }

    min() {
        let current = this.root;
        while (current.left) {
            current = current.left;
        }
        return current;
    }

    max() {
        let current = this.root;
        while (current.right) {
            current = current.right;
        }
        return current;
    }

    delete(key) {
        this.root = this.deleteNode(this.root, key);
    }

    deleteNode(node, key) {
        if (!node) {
            node = null;
        } else if (key > node.key) {
            node.right = this.deleteNode(node.right, key);
        } else if (key < node.key) {
            node.left = this.deleteNode(node.left, key);
        } else {
            // key === node.key => 3 cases

            //+ case 1 : no children
            if (!node.left && !node.right) {
                node = null;
            }
            //+ case 2 : children
            else if (!node.right) {
                node = node.left;
            } else if (!node.left) {
                node = node.right;
            }
            //+ case 3 : 2 children
            else {
                const minNode = this.minFromNode(node.right);
                node.key = minNode.key;
                node.right = this.deleteNode(node.right, minNode.key);
            }
        }
        return node;
    }


    preOrder() {
        this.preOrderWalk(this.root);
    }

    preOrderWalk(node){
        if(node){
            console.log(node.key);
            this.preOrderWalk(node.left);
            this.preOrderWalk(node.right);
        }
    }

    inOrder() {
        this.inOrderWalk(this.root);
    }

    inOrderWalk(node) {
        if (node) {
            this.inOrderWalk(node.left);
            console.log(node.key);
            this.inOrderWalk(node.right);
        }
    }

    postOrder() {
        this.postOrderWalk(this.root);
    }

    postOrderWalk(node) {
        if (node) {
            this.postOrderWalk(node.left);
            this.postOrderWalk(node.right);
            console.log(node.key);
        }
    }

    breadthFirstSearch() {
        const queue = new Queue();
        queue.enqueue(this.root);
        while (!queue.isEmpty()) {
            const node = queue.dequeue();
            if(node){
                console.log(node.key);
                queue.enqueue(node.left);
                queue.enqueue(node.right);
            }
        }
    }
}

const tree = new BinarySearchTree();

tree.insert(5);
tree.insert(3);
tree.insert(12);
tree.insert(1);
tree.insert(4);
tree.insert(8);
tree.insert(20);
tree.insert(7);
tree.insert(14);
tree.insert(25);
tree.insert(37);

// console.log(tree.search(7))
// console.log(tree.search(12))
//
// tree.delete(8)
//
// console.log(tree.search(7))
// console.log(tree.search(12))
// tree.delete(12)
//
// console.log(tree.search(5))
// console.log(tree.search(14))

tree.postOrder();

// console.log(tree)