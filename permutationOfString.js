
function permutation(str,low,high)
{

if(low===high)
{

    console.log(str);

}else
{

for(let i=low;i<=high;i++)
{
    str=swap(str,low,i);
    permutation(str,low+1,high);
    str=swap(str,low,i);
}

}


}


function swap(letters,i,j)
{
    let lerarr=letters.split("");
    let temp=lerarr[i];
    lerarr[i]=lerarr[j];
    lerarr[j]=temp;
    return (lerarr).join("");
}


let word="abc";

permutation(word,0,word.length-1);