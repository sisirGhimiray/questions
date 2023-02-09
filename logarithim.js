
// write a recursive functions to find values of log2N and logbN


function log(number,base,i)
{

    if(!(number<base)){
        return 0;
    }

        return log(parseInt(number/base),base)+1;



}

let l=log(64,2,1);

document.write(l);

