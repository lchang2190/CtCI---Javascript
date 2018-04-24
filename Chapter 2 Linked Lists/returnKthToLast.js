var ListNode = function(val) {
	this.value = val;
	this.next = null;
}

var returnKthLast = function(ll, k) {
	var curr = ll;
	var count = 0;

	while(curr !== null) {
		console.log(curr.value);
		curr = curr.next;
		count++;
	}
	var kth = count - k;
	curr = ll;
	count = 0;

	if (kth === 0) {
		return ll;
	}

	while(curr !== null) {
		curr = curr.next;
		count++;
		if (kth === count) {
			return curr;
		}
	}
	return 'Out of bounds';
}

var Ll = new ListNode(1);
Ll.next = new ListNode(2);
Ll.next.next = new ListNode(3);
Ll.next.next.next = new ListNode(4);
Ll.next.next.next.next = new ListNode(5);
Ll.next.next.next.next.next = new ListNode(6);

console.log(returnKthLast(Ll, 3))