/*quicklySort 三路快排
* author 邓子
*/
let zero = 0;
let nums = [2,1,0];
for(let i = 0; i<nums.length;i++){
    if(nums[i] == 0){
        [nums[i],nums[zero]] = [nums[zero],nums[i]];
        zero ++;
    }
}