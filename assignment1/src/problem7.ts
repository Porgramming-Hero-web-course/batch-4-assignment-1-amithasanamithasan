{
    // Class and object 

class car {
    make:string;
    model:string;
    year:number;
    constructor(make:string , model:string , year:number){
        this.make=make;
        this.model=model;
        this.year=year;
    }
getCarAge(){
    // console.log(`Assuming current years ${new Date().getFullYear()} `);
    const currentyear = new Date().getFullYear();
    const PreviouseYear= currentyear -this.year;
    console.log(` ${PreviouseYear} assumig current year is ${currentyear} `);
}


}
const Car = new car ("Honda",'Civic',2018);
Car.getCarAge();


}