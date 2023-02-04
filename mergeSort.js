//  we should pass index of the array in function merge parameter
function merge(array,low,mid,high){


let n1=(mid-low)+1;
let n2=high-mid;
let a1=[];
let a2=[];
let i=0,j=0,k=0;
for(;i<n1;i++)
{
    a1[i]=array[low+i];
}

for(;j<n2;j++)
{
    a2[j]=array[mid+1+j];
}

a1[i]=Infinity;
a2[j]=Infinity;
i=0;
j=0;
for(k=low;k<=high;k++){

if(a1[i]<=a2[j]){
    array[k]=a1[i];
    i++;
}else{
    array[k]=a2[j];
    j++;
}

}

}




function mergeSort(list,low,high)
{
    
    if(low<high){
        
        let midele=parseInt((low+high)/2);
        
        mergeSort(list,low,midele);
        
        mergeSort(list,midele+1,high);
        
merge(list,low,midele,high);

}


}

// mergeSort(arrayList,0,7);


let arrayList=[2,3,4,5,1,2,1,2];
mergeSort(arrayList,0,arrayList.length-1);

console.log(arrayList);