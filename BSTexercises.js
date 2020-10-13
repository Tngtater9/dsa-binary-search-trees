/* 
1. Draw a BST
- Given the data 3,1,4,6,9,2,5,7, if you were to insert this into an empty binary search tree, what would the tree look like? (Draw the tree, no coding needed here.)
      3
  /       \
1           4
  \           \
    2           6
              /   \
            5     9
                /
              7
- Draw the BST with the keys - E A S Y Q U E S T I O N
       E
  /        \
A            S
          /     \
        Q        Y
      /         /
    E         U
      \      /
        I   S
          \   \
            O   T
          /
        N   
*/

/*
2. Remove the root
Show how the above trees would look like if you deleted the root of each tree. 
       4
  /        \ 
1            6
  \        /   \ 
    2     5     9  
         /     
        7    

      E
  /        \
A            S
          /     \
        Q        Y
      /         /
     I         U
       \     /
         O  S
        /     \
       N        T
*/

// # 3 CREATE A BST CLASS
class BST {
	constructor(key = null, value = null, parent = null) {
		this.key = key;
		this.value = value;
		this.parent = parent;
		this.left = null;
		this.right = null;
	}

	insert(key, value) {
		if (this.key === null) {
			this.key = key;
			this.value = value;
		} else if (key < this.key) {
			if (this.left == null) {
				this.left = new BST(key, value, this);
			} else {
				this.left.insert(key, value);
			}
		} else {
			if (this.right == null) {
				this.right = new BST(key, value, this);
			} else {
				this.right.insert(key, value);
			}
		}
	}

	find(key) {
		if (key == this.key) {
			return this.value;
		} else if (key < this.key && this.left) {
			return this.left.find(key);
		} else if (key > this.key && this.right) {
			return this.right.find(key);
		} else {
			throw new Error('Key Error');
		}
	}

	remove(key) {
		if (key === this.key) {
			if (this.left && this.right) {
				const successor = this.right._findMin();
				this.key = successor.key;
				this.value = successor.value;
				successor.remove(successor.key);
			} else if (this.left) {
				this._replaceWith(this.left);
			} else if (this.right) {
				this._replaceWith(this.right);
			} else {
				this._replaceWith(null);
			}
		} else if (key < this.key && this.left) {
			this.left.remove(key);
		} else if (key > this.key && this.right) {
			this.right.remove(key);
		} else {
			throw new Error('Key error');
		}
	}

	_findMin() {
		if (this.left) {
			return this.left._findMin();
		} else {
			return this;
		}
	}

	_replaceWith(node) {
		if (this.parent) {
			if (this == this.parent.left) {
				this.parent.left = node;
			} else if (this == this.parent.right) {
				this.parent.right = node;
			}

			if (node) {
				node.parent = this.parent;
			}
		} else {
			if (node) {
				this.key = node.key;
				this.value = node.value;
				this.left = node.left;
				this.right = node.right;
			} else {
				this.key = null;
				this.value = null;
				this.left = null;
				this.right = null;
			}
		}
	}
}

/*
Create a binary search tree called BST and insert 3,1,4,6,9,2,5,7 into your tree. Compare your result with the result from the 1st exercise.
*/

const BST1 = new BST();
BST1.insert(3, 3);
BST1.insert(1, 1);
BST1.insert(4, 4);
BST1.insert(6, 6);
BST1.insert(9, 9);
BST1.insert(2, 2);
BST1.insert(5, 5);
BST1.insert(7, 7);
// same result as #1

/*
Create a binary search tree called BST and insert E A S Y Q U E S T I O N into your tree. Compare your result with the result from the 1st exercise.
*/

const BST2 = new BST();
BST2.insert('E', 'E');
BST2.insert('A', 'A');
BST2.insert('S', 'S');
BST2.insert('Y', 'Y');
BST2.insert('Q', 'Q');
BST2.insert('U', 'U');
BST2.insert('E', 'E');
BST2.insert('S', 'S');
BST2.insert('T', 'T');
BST2.insert('I', 'I');
BST2.insert('O', 'O');
BST2.insert('N', 'N');
// same result as #1

/*
4. What does this program do?
Without running this code in your code editor, explain what the following program does. Show with an example the result of executing this program. What is the runtime of this algorithm?

function tree(t){
    if(!t){
        return 0;
    }
    return tree(t.left) + t.value + tree(t.right)
}

This program adds up the values in the tree starting from the root. The runtime of the algorithm is O(n) because the program has to visit every tree node.
*/
// # 4 example

function tree(t) {
	if (!t) {
		return 0;
	}
	return tree(t.left) + t.value + tree(t.right);
}

// Output is 37
tree(BST1);

// #5 Write an algorithm to find the height of a binary search tree. What is the time complexity of your algorithm?
function findHeight(tree) {
	// empty
	if (tree.key == null) {
		return 0;
	}
	// has children
	if (tree.left && tree.right) {
		return 1 + Math.max(findHeight(tree.left), findHeight(tree.right));
	}

	if (tree.left) {
		return 1 + findHeight(tree.left);
	}
	if (tree.right) {
		return 1 + findHeight(tree.right);
	}

	// no children
	else {
		return 1;
	}
}

// O(n) because every node is visited

// 6 Write an algorithm to check whether an arbitrary binary tree is a binary search tree, assuming the tree does not contain duplicates.

function isBST(tree) {
	//empty
	if (tree.key === null) {
		return 'The tree is empty';
	}
	if (tree.parent && tree.left) {
		if (tree.left < tree.parent) {
		}
	}
	// no children
	else {
	}
}
