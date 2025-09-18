const MyLibrary = [];
const Contents = document.getElementById('contents');

function clear_contents(){
    while(Contents.firstChild){
        Contents.removeChild(firstChild);
    }
}

function refresh_contents(){
    clear_contents();
    for(let i = 0; i < MyLibrary.length; i++){
        //create card
        let new_book = document.createElement('div');
        //assign id and class
        new_book.id = `${MyLibrary[i].id}`;
        new_book.classList.add('book_card');
        //add inner elements

        Contents.appendChild(new_book);
    }
}

function Book(title, author, n_pages, have_read){
    if(!new.target) throw Error("You must use the 'new' keyword to use the constructor");
    

    this.title = title;
    this.author = author;
    this.n_pages = n_pages;
    this.have_read = have_read;
    this.id = crypto.randomUUID();

    this.info = function(){
        return `title: ${this.title}, author: ${this.author}, n_pages: ${this.n_pages}, have_read: ${this.have_read}, id: ${this.id}`;
    }
}

function add_book(title, author, n_pages, have_read){
    let book_to_add = new Book(title, author, n_pages, have_read);
    MyLibrary.push(book_to_add);
}

add_book('test', 'test', 20, true);
add_book('test', 'test', 20, true);
add_book('test', 'test', 20, true);