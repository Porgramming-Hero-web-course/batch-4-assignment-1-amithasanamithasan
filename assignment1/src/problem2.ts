{
    //Remove Duplicates

const removeDuplicates = (arr: number[]) :number []=> [...new Set(arr)];

const newArray=(removeDuplicates([1,2,2,3,4,4,5]));
console.log(newArray);
}