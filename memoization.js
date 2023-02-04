
// memoization

let memo={};

function fib(n,mem)
{

if(n in mem)
{
    return mem[n]
}

if(n<=2)
{
    return 1;
}

mem[n]=fib(n-2,mem)+fib(n-1,mem);
return mem[n];

}

let fib_of_mem=fib(100,memo);

console.log(fib_of_mem);