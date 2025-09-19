const MyLibrary = [];
let Contents = document.getElementById('contents');

function clear_contents(){
    Contents.replaceChildren();
}

function add_contents(){
    for(let i = 0; i < MyLibrary.length; i++){
        //create card
        let new_book = document.createElement('div');

        //assign and class
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
        n_pages.textContent = `number of pages: ${MyLibrary[i].n_pages}`;
        new_book.appendChild(n_pages);

        //add have read
        let have_read_div = document.createElement('div');
        have_read_div.id = 'have-read';

        let have_read_text = document.createElement('div');
        have_read_text.textContent = 'Have read'
        have_read_div.appendChild(have_read_text);

        let have_read_checkbox = document.createElement('input');
        have_read_checkbox.classList.add('have-read-checkbox');
        have_read_checkbox.type = 'checkbox';
        if(MyLibrary[i].have_read) have_read_checkbox.checked = true;
        else have_read_checkbox.checked = false;
        have_read_div.appendChild(have_read_checkbox);

        new_book.appendChild(have_read_div);

        //add remove button
        let remove_button = document.createElement('button');
        remove_button.textContent = 'Remove';
        remove_button.classList.add('button', 'remove-button');
        new_book.appendChild(remove_button);

        //add book card to contents
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

//event listeners
Contents.addEventListener('change', (event) => {
    if(event.target.classList.contains('have-read-checkbox')){
        const checkbox = event.target;
        if(checkbox.checked){
            //update object variable
        }
        else{
            //update object variable
        }
    }
});

Contents.addEventListener('click', (event) => {
    if(event.target.classList.contains('remove-button')){
        //remove target (somehow by using the id)
        //refresh contents
    }
})

add_book('title1', 'author1', 20, true);
add_book('title2', 'author2', 20, false);
add_book('title3', 'author3', 20, true);