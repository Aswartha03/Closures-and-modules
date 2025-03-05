const library = {

    books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],
    
    addBook(book) {
    
                    if (!book.title || !book.author || !book.year) {
                    
                    console.log("Book information is incomplete.");
                    
                    return;
    
                   }
                   else{ this.books.push(book)}
                        
               
    
                },
    
    findBookByTitle(title) {
    
    let ans=this.books.find(book => book.title === title);
    if(ans==undefined){
        console.log("Book is Not Found")
    }
    else{
        console.log("Yes the book is found:",ans)
    }
    
    },
    
    removeBook(title) {
    
    const index = this.books.findIndex(book => book.title === title);
    
    if (index !== -1) {
    
    this.books.splice(index, 1);
    
    } else {
    
    console.log("Book not found.So we are not able to remove it");
    
    } } };
    
library.addBook({ author: "George Orwell", year: 1949 });
    
console.log(library.books.length);
library.addBook({ title:"Jersey" ,author: "George Orwell", year: 1949,});
console.log(library.books)
console.log(library.books.length)
library.findBookByTitle("Jersey")
library.removeBook("Jersey")
console.log(library.books);
library.addBook({ author: "George Orwell", title:"The Jersey" });
    
    