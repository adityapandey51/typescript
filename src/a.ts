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
function isLegal(user: User):boolean{
	return ((user.age>18)?true:false)
}
 const user:User={
	 firstName:"Aditya",
	 lastName:"Pandey",
	 age:21
 }

 console.log(isLegal(user))
