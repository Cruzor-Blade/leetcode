function reverseList(head: ListNode | null): ListNode | null {
    let prev:ListNode|null;
    let current:ListNode|null = null;
    let next:ListNode|null = head;

    while (next) {
        prev = current;
        current = next;

        next = next.next;
        current.next = prev;
    };

    return current;
};