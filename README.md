[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=16995022&assignment_repo_type=AssignmentRepo)



# Using async/await in TypeScript

### How to handle asynchronous operations using async/await over callback/promise TypeScript.

### Define an Asynchronous Function: 
Mark a function as async to make it asynchronous. Inside an async function, you can use await to pause execution until a promise resolves.
### Use await for Promises:
await pauses the function execution until the promise resolves or rejects. This allows you to handle asynchronous code sequentially.
### Error Handling:
Use try/catch to handle errors, similar to synchronous code.
**Example:**
```typescript

type APIdata={
    userId: number;
    id:number;
    title:string;
    completed:boolean;
}


const  getdata = async():Promise<APIdata>=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1') 
const data = await response.json()
//   console.log(data);
 return data;
}

getdata()
