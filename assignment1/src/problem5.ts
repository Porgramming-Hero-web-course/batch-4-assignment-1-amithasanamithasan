{
    // generic function 
    const person = { name: "Alice", age: 30 };

    const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
        return obj[key];
    };
    const NameValue=(getProperty(person, "name"));
    console.log(NameValue);

}