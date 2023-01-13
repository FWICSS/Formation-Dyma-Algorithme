import {LinkedList, Node} from "./linked_list.mjs"

function reverseList(ll) {
    let current = ll.head
    if (!current || !current.next) {
        return "reverse is not possible";
    } else {
        let prev = null;
        while (current) {
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;

        }
        ll.head = prev;
    }
}

function reverseList2(ll) {
    let current = ll.head
    if (!current || !current.next) {
        return "reverse is not possible";
    } else {
        const reverseList = new LinkedList();
        while (current){
            reverseList.addFirst(current.value);
            current = current.next;
        }
        LL.head = reverseList.head
    }
}

const LL = new LinkedList();

LL.addFirst(1);
LL.addFirst(4);
LL.addFirst(6);
LL.print();
reverseList(LL);
LL.print()
reverseList2(LL);
LL.print()