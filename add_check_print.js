function manageStudents(students){
    return {
        add (index , cond ,value) {
        students.splice(index,cond,value)
        },
    check (element){
        console.log(students.includes(element))
    },
    AtoS(){
        let ans=students.join(",")
        console.log(ans)

    }
    }
}
let students = ["Alice", "Bob", "Charlie"]
let display=manageStudents(students)
display.add(1,0,"David")
display.check("Ramya")
let ans =display.AtoS()