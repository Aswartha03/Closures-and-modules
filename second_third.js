let person1={
    name:"Aswartha",
    age:20
}
let person2={
    name:"Chiru",
    age:19
}
let person3={
    name:"Ramya",
    age:20
}
let person4={
    name:"Jyothi",
    age:27
}
let personInfo=function(){
    console.log("Person name is:"+this.name)
    console.log("Person age is:"+this.age)
}
personInfo.call(person1)
personInfo.call(person2)
personInfo.call(person3)