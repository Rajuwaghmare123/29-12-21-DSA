// Average of array element 

function Average(arr, N)
{
    if (N == 1)
    {
        return arr[N - 1];
    }
    else
    {
        return ((Average(arr, N - 1) * (N - 1) + arr[N - 1]) / N);
    }
}
 
let arr = [1, 2, 3, 4, 5];
let N = arr.length;
let ans = Average(arr, N);
console.log(ans);