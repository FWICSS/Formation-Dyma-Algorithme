import {Queue} from "../queue/queue_ll.mjs";

const q = new Queue();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

console.log(q);

function reverseQueueRecursive(queue) {
    if (queue.isEmpty()) {
        return;
    }
    const value = queue.dequeue();
    reverseQueueRecursive(queue);
    queue.enqueue();
}

reverseQueueRecursive(q)

console.log(q)