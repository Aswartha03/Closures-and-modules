let age=30 
let displayAge=()=>(console.log(age))
let changeAge= (newage) =>{
    age=newage 
    console.log(age)
}
displayAge()
changeAge(45)
displayAge()