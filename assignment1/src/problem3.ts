{
    // Problem 3 

    const countWordOccurrences= (sentence: string ,word: string |"I love typescript" |"typescript"):number=>{
        const words= sentence.toLowerCase().split(' ');

       const Word = word.toLocaleLowerCase();
       const  WordFilter = words.filter(w => w === Word).length;
       return WordFilter;


    }

    const CountWord =(countWordOccurrences("I love typescript ",'typescript'));
console.log(CountWord);
    // 
}