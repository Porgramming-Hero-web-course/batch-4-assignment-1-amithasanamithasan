{
    // Defien an interface Profile 
    // type Profile ={
    //     name:string;
    //     age: number;
    //     email:string;
    // }
interface Profile {
    name:string;
    age: number;
    email:string;
}
const myProfile={name:"Alice",age:25,email:"alice@example.com"};
const updateProfile = (profile:Profile ,updates: Partial <Profile>):Profile=>{
 return {...profile, ...updates};

};
console.log(updateProfile(myProfile,{age:26}));
    // 
}