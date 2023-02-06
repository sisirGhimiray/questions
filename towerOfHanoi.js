

function tfh(n,source,temp,dest){

if(n===1)
{

    console.log(`move disk ${n} from ${source} to ${dest} `);
    return;

}

tfh(n-1,source,dest,temp);
console.log(`move disk ${n} from ${source} to ${dest}`)
tfh(n-1,temp,source,dest);


}

tfh(2,'A','B','C');