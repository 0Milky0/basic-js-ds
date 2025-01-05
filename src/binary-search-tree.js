const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
// Node class
class Node
{
  constructor(data)
  {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
	  root() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  add(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

	// constructor() {
	// 	this.root = null
	// }

	// root() {
	// 	return this.root
	// }

	// add(data) {
	// 	this.root = addNewNodeToTree(this.root, data)
	// 	return this.root;

	// 	function addNewNodeToTree(node, data) {
	// 		if (!node) {
	// 			return new Node(data)
	// 		}
	// 		if(node.data == data){
	// 			return node
	// 		} else if (node.data < data) {
	// 			node.right = addNewNodeToTree(node.right, data)
	// 		} else {
	// 			node.left = addNewNodeToTree(node.left, data)
	// 		} 
	// 		return node;
	// 	}
	// }

	// has(data) {
	// 	let node = this.find(data)
	// 	return !!node
	// }

	// find(data) {
	// 	return searchForNode(this.root, data)
	// 	function searchForNode(node, data) {
	// 		if (!node) return null
	// 		if(node.data == data) return node
	// 		if (node.data < data) {
	// 			return searchForNode(node.right, data)
	// 		} else {
	// 			return searchForNode(node.left, data)
	// 		}
	// 	}
	// }

	// remove(data) {
	// 	this.root = removeNode(this.root, data)

	// 	function removeNode(node, data) {
	// 		if (node == null) return null

	// 		if (data < node.data) {
	// 			node.left = removeNode(node.left, data)
	// 			return node
	// 		} else if (data > node.data) {
	// 			node.right = removeNode(node.right, data)
	// 			return node
	// 		} else {
	// 			if (!node.left && !node.right) {
	// 				return null
	// 			}

	// 			if (!node.left) {
	// 				node = node.right
	// 				return node
	// 			} 
	// 			if (!node.right) {
	// 				node = node.left
	// 				return node
	// 			}
	// 			let minRight = this.min(node.right)
	// 			node.data = minRight.data

	// 			node.right = this.removeNode(node.right, minRight.data)
	// 			return node
	// 		}
	// 	}
	// }

	// min() {
	// 	let node = this.root;
	// 	if(!node) return null;
		
	// 	while(node.left) {
	// 		node = node.left
	// 	}
	// 	return node.data
	// }

	// max() {
	// 	let node = this.root
	// 	if (!node) return null

	// 	while (node.right) {
	// 		node = node.right
	// 	}
	// 	return node.data
	// }
}
module.exports = {
  BinarySearchTree
};