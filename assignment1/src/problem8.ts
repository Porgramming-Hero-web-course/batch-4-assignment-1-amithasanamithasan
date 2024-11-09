{
    // Generic ValidKeys 
const person =
{name:"Alice",
age:25,
email:"alice@example.com"
};

const validateKeys = <T extends object>(obj: T, keys: (keyof T)[]): boolean => 
    keys.every(key => key in obj)

    
const BooleanValue =(validateKeys(person,['name','age']));
console.log(BooleanValue);
    // 
}