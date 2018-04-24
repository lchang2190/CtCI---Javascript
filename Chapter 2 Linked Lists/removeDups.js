var ListNode = function(value) {
	this.value = value,
	this.next = null
}

var removeDups = function(ll) {
	var obj = {};
	obj[ll.value] = 1;

	var prevNode = ll;
	var currentNode = ll.next;

	while (currentNode !== null) {
		if (!obj[currentNode.value]) {
			obj[currentNode.value] = 1;
			prevNode = currentNode;
			currentNode = currentNode.next;
		} else {
			prevNode.next = currentNode.next;
			currentNode = prevNode.next;
		}
		
	}
	console.log(obj);


}

var Ll = new ListNode(1);
Ll.next = new ListNode(3);
Ll.next.next = new ListNode(3);
Ll.next.next.next = new ListNode(2);
Ll.next.next.next.next = new ListNode(2);
Ll.next.next.next.next.next = new ListNode(3);
// Ll.next.next.next = new ListNode(3);
// Ll.next.next.next.next = new ListNode(2	);
// Ll.next.next.next.next.next = new ListNode(2);

console.log(removeDups(Ll));
console.log(Ll);
