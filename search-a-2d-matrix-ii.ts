function searchMatrix(matrix: number[][], target: number): boolean {

    let left = 0, right = matrix[0].length-1;
    let top:number, bottom:number;

    while (left <= right) {
        let midX = Math.floor((left+right)/2);
        top = 0, bottom = matrix.length-1;
        
        if(matrix[matrix.length-1][midX] < target) {
            left = midX+1;
            continue; // since the items are sorted in ascending order, the target cannot be there
        } else if (matrix[0][midX] > target) {
            right = midX-1;
            continue;
        }

        while (top <= bottom) {
            let midY = Math.floor((top+bottom)/2);

            if(matrix[midY][left]===target) {
                return true;
            } else if (matrix[midY][left] < target) {
                top = midY+1;
            } else {
                bottom = midY-1;
            };  
        };

        left += 1; // increment the left pointer for every possibly valid vertice        
    }

    return false;
};


console.assert(searchMatrix([[1, 1]], 2)===false);