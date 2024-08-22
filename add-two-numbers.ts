class ListNode {
  val: number;
  next: ListNode | null;
}
 


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if(l1===null) return l2;
  if(l2===null) return l1;

  const currVal = (l1.val+ l2.val)%10;

  let nextNode = addTwoNumbers(l1.next, l2.next);
  
  const overflow = (l1.val+l2.val-currVal)/10;
  if(overflow !=0) {
    nextNode = addTwoNumbers(nextNode, {val:overflow, next:null});
  };

  return {val:currVal, next:nextNode};
};