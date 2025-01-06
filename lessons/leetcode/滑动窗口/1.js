/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let res = [];
    let win = [];
    for(let i = 0 ;i<k;i++){ //维护一个递减的队列
        if(i==0) win.push(i);
        else{
            while(win[win.length-1] && nums[win[win.length-1]]<nums[i]){
                win.pop();
            }
            win.push(i);
        }
    }
        res.push(nums[win[0]]);
        console.log(win);
    for(let i =k;i<nums.length;i++){
        if(i-win[0] == k)win.shift();
            while(win[win.length-1] && nums[win[win.length-1]]<nums[i]){
                win.pop();
            }
            win.push(i);
        res.push(nums[win[0]]);
    }
    return res;
};

let nums =[1,3,-1,-3,5,3,6,7];
console.log(maxSlidingWindow(nums,3));