function deepClone(obj) 
{
    let JStoJSON = JSON.stringify(obj) // converting js code to json text
    let JSONtoJS = JSON.parse(JStoJSON) // converting json text to js code
    JSONtoJS.hobbies[2]="coding" // updating the new object without modifing the original object
    console.log("Original:",obj)
    console.log("Clone:",JSONtoJS)
    
}
let original = { name: "Alice", hobbies: ["reading", "traveling"] }
deepClone(original)