function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let slow =  head;
    let fast = head;

    while (n > 0) {
        fast = fast?.next || null;
        n -= 1;
    };

    if (fast === null) return head?.next || null;

    while (fast?.next) {
        fast = fast.next;
        slow = slow?.next || null;
    };

    if(slow) slow.next = slow.next?.next || null;
    return head;
};