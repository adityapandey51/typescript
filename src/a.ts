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

app.get("/', (req, res) => {
    if (!req.query.userId) {
			res.status(ResponseStatus.Error).json({})
    }
    // and so on...
		res.status(ResponseStatus.Success).json({});
})

//setting default values
enum Direction {
    Up = "UP",
    Down = "Down",
    Left = "Left",
    Right = 'Right'
}

function doSomething(keyPressed: Direction) {
	// do something.
}

doSomething(Direction.Down)

// GENERICS

function returnFirstIndex<T> (inputParam: T[]){
	return inputParam[0];
}

const a=returnFirstIndex<string>(["Aditya","Pandey"]);
console.log(a);
