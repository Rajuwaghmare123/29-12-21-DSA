// Program for Recursive Binary search

function binarySearch(arr, x)
{   
    let l = 0;
    let r = arr.length - 1;
    let mid;
    while (r >= l) {
         mid = l + Math.floor((r - l) / 2);
        if (arr[mid] == x)
            return mid;
  
        if (arr[mid] > x)
            r = mid - 1;
        else
            l = mid + 1;
    }
    return -1;
}
    let Array1= [5,6,7,8,9,2,3,1,0];
    let arr = Array1.sort();
    let x = 8;
    let n = arr.length;
    let result = binarySearch(arr, x);
    
    console.log(result);