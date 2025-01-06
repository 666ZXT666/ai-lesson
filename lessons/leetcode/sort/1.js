/*quicklySort 快排
* author 邓子
*/
function sort(arr,left,right){
let base = arr[left];
    while(left < right ){
        //从右边找到第一个
        while(left < right && arr[right] >= base){
            right --;
        }
        if(left < right){
            arr[left] = arr[right];
        }
        while(left < right && arr[left] <= base){
            left ++;
        }
        if(left < right)
        {
        arr[right] = arr[left];
        }
    }
    arr[left] = base;
    return left;
    }
function quicklySort(arr,left,right){//以left为基准点
    if(left>=right){
        return;
    }
  let option = sort(arr,left,right);
    quicklySort(arr, left, option-1);
    quicklySort(arr, option+1, right);
}



let arr = [3,2,1];
quicklySort(arr,0,arr.length-1);
console.log(arr);