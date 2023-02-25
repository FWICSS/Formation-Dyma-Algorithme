import { Queue } from "../queue/queue_ll.mjs";
import { Stack } from "../stack/stack_array.mjs";

const q = new Queue();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

console.log(q);

function reverseQueue(queue) {
    const stack = new Stack();
    while(!queue.isEmpty()){
        stack.push(queue.dequeue());
    }
    while (!stack.isEmpty()){
        queue.enqueue(stack.pop());
    }
}

reverseQueue(q)

console.log(q)