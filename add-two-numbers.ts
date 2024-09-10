class ListNode {
  val: number;
  next: ListNode | null;
}
 


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let result: ListNode = {val:0, next:null};
    let current = result;
    let remainder = 0;

    while (l1 || l2) {
        current.next = {val: ((l1?.val || 0) + (l2?.val || 0) + remainder) % 10, next: null};
        remainder = Math.floor(((l1?.val || 0) + (l2?.val || 0) + remainder) / 10);
        current = current.next;
        if(l1) l1 = l1.next;   
        if(l2) l2 = l2.next;
    };

    if(remainder) current.next = {val: remainder, next:null};
    return result.next;
};