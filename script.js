var titleValue = document.getElementById("title1");
var authorValue = document.getElementById("author1");
var pgnoValue = document.getElementById("pgno1");
var checkValue = document.getElementById("check");
const form = document.getElementById("form");
//adding click event to New Book button
//will display form after clicking on New Book button
function newBook() {
    const newbtn = document.getElementById("new-book");
    const container = document.getElementById("container");
    newbtn.addEventListener("click", () => {
        console.log("click triggered");
        container.classList.toggle("active")
    })
}
newBook();

//Empty array to store book object
const myLibrary = [];

//Book contructor
function Book(title,author,pgno,read) {
    this.title = title;
    this.author = author;
    this.pgno = pgno;
    this.read = read;
}

function arrObj() {
    const addbtn = document.querySelector("#add");
    addbtn.addEventListener("click", () => {
    let t = titleValue.value;
    let a = authorValue.value;
    let p = pgnoValue.value;
let c = checkValue;
let result="";
        console.log("addbtn triggered");
        if(c.checked == true){
 result = "Read";
        }else{
            result="Not Read";
        }
        console.log(t, a, p, result);
        addBookToLibrary(t, a, p, result);
       
form.reset();
    });
}
arrObj()

var cards = document.querySelector("#cards");
function addBookToLibrary(tv, av, pv,re) {
    const newBook = new Book(tv, av, pv,re);
    myLibrary.push(newBook);
    console.log(myLibrary);
    var card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<div>
    <p><span>Title: ${tv}</span><br>
    <span>Author: ${av}</span><br>
    <span>Total Pages: ${pv}</span><br>
    <span>Status: ${re}</span></p>
    </div>
    <button>Remove</button>`
    cards.appendChild(card);
    const remove = card.querySelector("button");
    removeBtn(remove);
    
}

function removeBtn(cancel){
  
    cancel.addEventListener("click",(e) => {
        e.target.parentElement.remove();
    })
}


