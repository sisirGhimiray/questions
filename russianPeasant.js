
function russianPeasant(num1,num2)
{

if(num1==1)
{
    return num2;
}

console.log(num1,num2);
return russianPeasant(parseInt(num1/2),num2*2)+num2;


}


let rsp=russianPeasant(19,25);
console.log(rsp);