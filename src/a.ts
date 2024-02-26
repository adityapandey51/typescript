import express from "express";
const app: any=express();

app.get("/",(req:any,res:any)=>{
	if(!req.query.userId){
		res.status(ResponseStatus.Error).json({})
	}
	res.status(ResponseStatus.Success).json({})
})

const i:number =100;
console.log(i);

function greet(firstName:string){
	console.log("hello"+firstName);
}
greet("aditya")

function sum(a:number,b:number):number{
	return a+b;
}
console.log(sum(1,2))
function hello (fn: ()=>void){
	setTimeout(fn,1000)
}

hello(()=>{
	console.log("inside me")
})

interface User {
	firstName: string;
	lastName: string;
	age: number;
	email?: string
} 

// type User = {
// 	firstName: string;
// 	lastName: string;
// 	age: number;
// 	email?: string
// } 

function isLegal(user: User):boolean{
	return ((user.age>18)?true:false)
}
 const user:User={
	 firstName:"Aditya",
	 lastName:"Pandey",
	 age:21
 }

 console.log(isLegal(user))

enum Direction {
    Up,
    Down,
    Left,
    Right
}

function doSomething(keyPressed: Direction) {
	// do something.
}

doSomething(Direction.Up)

// common use case in backend
enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    Error = 500
}

//setting default values
// enum Direction {
//     Up = "UP",
//     Down = "Down",
//     Left = "Left",
//     Right = 'Right'
// }

// function doSomething(keyPressed: Direction) {
// 	// do something.
// }

doSomething(Direction.Down)

// GENERICS

function returnFirstIndex<T> (inputParam: T[]){
	return inputParam[0];
}

const a=returnFirstIndex<string>(["Aditya","Pandey"]);
console.log(a);

function sumOfAge(a: User, b: User) {
	return a.age + b.age;
  };
  
  // Example usage
  const result = sumOfAge({
	  firstName: "hello",
	  lastName:"world",
	  age:20
  }, {
	  firstName: "hi",
	  lastName:"world",
	  age:21
  });
  console.log(result); 

  
  
  // For a profile display, only pick `name` and `email`
  type UserProfile = Pick<User, 'firstName' | 'email'>;

//   makes the properties of the pick userProfile optional
  type UserProfileOptional=Partial<UserProfile>;
  const displayUserProfile = (user: UserProfileOptional ) => {
	console.log(`Name: ${user.firstName}, Email: ${user.email}`);
  };

//   to make an object readonly ...not able to change its values...used while defining config Files 
// interface hello{
// 	readonly name:string;
// 	readonly age:number;
// 	readonly anything:string
// }
// either do it as shown above 
// or 
interface hello{
	name: string;
	age: number;
	anything:string
}

const Example:Readonly<hello>={
	name:"hello",
	age:8,
	anything:"nothing"
}

//Record

// u r defining a map
const abc:Record<string,string>={
	"hello":"world"
}

// use of Map.

const hw=new Map<string,string>()
hw.set("kaise","waise")
console.log(hw)

// In a function that can accept several types of inputs but you want to exclude specific types from being passed to it.
type Event = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<Event, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent('click'); // OK


Type inference from Zod

import { z } from 'zod';
import express from "express";

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});

// can be exported to frontends also ...especially in monoRepos
type FinalUserProfile=z.infer<typeof userProfileSchema>

app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody:FinalUserProfile = req.body; // how to assign a type to updateBody?

  if (!success) {
    res.status(411).json({});
    return
  }
  // update database here
  res.json({
    message: "User updated"
  })
});

app.listen(3000);
