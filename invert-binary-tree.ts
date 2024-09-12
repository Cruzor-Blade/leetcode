function invertTree(tree: TreeNode | null): TreeNode | null {
    if(tree === null) return null;

    const pivot = tree.left;
    tree.left = invertTree(tree.right);
    tree.right = invertTree(pivot);
    
    return tree;
};