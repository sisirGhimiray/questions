
function compute(num,n)
{
    
// 1.a^8=(a^2)^4

// if(n===1)
// {
//     return num**2
// }

// return (num**2)*compute(num,n-1);

// 2. a^11=a*(a^2)^5

if(n==1)
{

    return num*(num**2);
    
}


return (num**2)*compute(num,n-1);



}

let prod=compute(2,9);
console.log(prod);

console.log(2**19);