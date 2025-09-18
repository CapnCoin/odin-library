const MyLibrary = [];
let Contents = document.getElementById('contents');

function clear_contents(){
    Contents.replaceChildren();
}

function add_contents(){
    for(let i = 0; i < MyLibrary.length; i++){
        //create card
        let new_book = document.createElement('div');
        //assign id and class
        new_book.id = `${MyLibrary[i].id}`;
        new_book.classList.add('book-card');
        //add title element
        let title = document.createElement('div');
        title.textContent = `Title: ${MyLibrary[i].title}`;
        new_book.appendChild(title);
        //add author element
        let author = document.createElement('div');
        author.textContent = `Author: ${MyLibrary[i].author}`;
        new_book.appendChild(author);
        //add page count
        let n_pages = document.createElement('div');
        author.textContent = `number of pages: ${MyLibrary[i].n_pages}`;
        new_book.appendChild(n_pages);
        //add have read
        let have_read_checkbox = document.createElement('input');
        have_read_checkbox.type = 'checkbox';
        if(MyLibrary[i].have_read) have_read_checkbox.checked = true;
        else have_read_checkbox.checked = false;
        new_book.appendChild(have_read_checkbox);

        Contents.appendChild(new_book);
    }
}

function refresh_contents(){
    clear_contents();
    add_contents();
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
    refresh_contents();
}

add_book('test', 'test', 20, true);
add_book('test', 'test', 20, false);
add_book('test', 'test', 20, true);