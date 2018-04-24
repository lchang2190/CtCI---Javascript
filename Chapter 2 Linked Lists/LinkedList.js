class LinkedList {
	constructor(val) {
		this.head = {
			value: val,
			next: null
		}

		this.len = 1
	}

	addToHead(val) {
		var newNode = { value: val };
		newNode.next = this.head;
		this.head = newNode;
		this.len++;
		return this;
	}

	removeFromHead() {
		if (this.length === 0) {
			return undefined;
		}

		var del = this.head.value;
		this.head = this.head.next;
		this.len--;

		return del;
	}

	removeNode(val) {
		if (this.length === 0) {
			return undefined;
		}

		if (this.head.value === val) {
			this.removeFromHead();
			return this;
		}

		var prevNode = this.head;
		var currentNode = prevNode.next;

		while (currentNode.value !== val) {
			prevNode = currentNode;
			currentNode = currentNode.next;
		}

		prevNode.next = currentNode.next;
		this.len--;
		return this;
	}
}

var Ll = new LinkedList(1);
Ll.addToHead(2);
Ll.addToHead(3);
Ll.removeNode(2);
// Ll.addToHead(4);
// Ll.addToHead(5);
// console.log(Ll.removeFromHead());
console.log(Ll)

