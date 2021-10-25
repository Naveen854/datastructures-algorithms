//  Optimal Solution O(n)
// Idea : fixing one item x ,the next item to search is y and it will be target-x

 function twoSum1(nums, target) {
    let hash = {}

    for(let i=0; i<nums.length; i++){
        if (nums[i] in hash) return [hash[nums[i]], i ] ;

        hash[target-nums[i]] = i    
    }   
}

console.log(twoSum1([2,7,4,9], 9))

// Example 
// input :
//  nums =  [2,7,4,9], target = 9

// output Appraoch:
// target = 9
// 1st iteration:
//     value = 2, index = 0 
//         it is not in hash object
//         So, we add key = 9 -2 , value = index
//         hash = {'7':0}
// 2nd  iteration:
//     value = 7, index = 0 
//         our hashObject contains 7 as key
//         so, we return value for the key(7) and current index(1)
//         return [0,1]

// output = [0,1]

// BruteForce Approach - O(n^2)
function twoSum2(nums, target) {
    for(let i=0; i<nums.length; i++){
        for (let j=i+1; j < nums.length; j++){
            if(nums[i]+nums[j] === target){
                return [i,j]
            }
        }
        hash[target-nums[i]] = i;           
    }   
}

// console.log(twoSum2([2,7,4,9], 9))