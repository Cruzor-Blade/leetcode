class ListNode {
    val: number
    next: ListNode | null
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let head:ListNode = {val:0, next:null};
    let current = head;

    while (list1 && list2) {
        if(list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        };

        current = current.next;
    };

    current.next = list1 || list2;

    return head.next;
};