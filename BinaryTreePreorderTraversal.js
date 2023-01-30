// Given the root of a binary tree, return the preorder traversal of its nodes' values.

 

// Example 1:


// Input: root = [1,null,2,3]
// Output: [1,2,3]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [1]
// Output: [1]

var preorderTraversal = function(root) {
  const result = [];
  
  const traverse = (node) => {
    if (node === null) {
      return;
    }
    
    result.push(node.val);
    
    [node.left, node.right].forEach(child => {
      traverse(child)
    });
  };

  traverse(root);

return result;
};