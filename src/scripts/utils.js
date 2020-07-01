// Generate table dynamically
let authorList = [];

authorList.push(["Id", "Title", "Author", "Lender", "Borrower", "Action"]);
authorList.push([1, "Web Dev", "Author-A", "Author-B", "Author-C", "<button id='reqNext' name='req next' onclick='requestNextBook(this)'>Request Next</button>"]);
authorList.push([2, "java", "Author-C", "Author-A", "Author-B", "<button id='borrow' name='borrow book' onclick='borrowBook(this)'>Borrow</button>"]);
authorList.push([3, "Designing", "Author-C", "Author-B", "Author-A", "Requested by B"]);
authorList.push([4, "Algorihthm", "Author-B", "Author-A", "Author-C", "<button id='reqNext' name='req next' onclick='requestNextBook(this)'>Request Next</button>"]);
authorList.push([5, "Designing", "Author-C", "Author-B", "Author-A", "-"]);
authorList.push([6, "Designing", "Author-C", "Author-B", "Author-A", "-"]);

window.onload = () => {
    // event.preventDefault();

    //Create a HTML Table element.
    let table = document.createElement("TABLE");
    table.border = "1";
    table.setAttribute("style", "width:100%;margin-top:20px;")

    //Get the count of columns.
    let columnCount = authorList[0].length;

    //Add the header row.
    let row = table.insertRow(-1);
    for (let i = 0; i < columnCount; i++) {
        let headerCell = document.createElement("TH");
        headerCell.innerHTML = authorList[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (let i = 1; i < authorList.length; i++) {
        row = table.insertRow(-1);
        for (let j = 0; j < columnCount; j++) {
            let cell = row.insertCell(-1);
            cell.innerHTML = authorList[i][j];
        }
    }

    let bookTable = document.getElementById("booktable");
    bookTable.innerHTML = "";
    bookTable.appendChild(table);
}

// Add author
let authorName;
const getAuthor = function(event) {
    event.preventDefault();

    authorName = document.getElementById("authorName").value;
    let id = authorList.length;

    authorList.push([id, "<input type='text' id='title' placeholder='title'", "<input type='text' id='author' placeholder='author'", authorName, "-", "<button id='addBook' name='add book' onclick='addBook(this)'>Add Book</button>"]);
    window.onload();
    console.log(authorList);
};

const addBook = function(element) {
    let rowIndex = element.parentNode.parentNode.rowIndex;
    
}

// request Book
const requestNextBook = function(element) {
   let rowIndex = element.parentNode.parentNode.rowIndex;

   authorList[rowIndex].pop();
   authorList[rowIndex].push(`Rquested by ${authorName}`);
   window.onload();
}

// Borrow Book
const borrowBook = function(element) {
    let rowIndex = element.parentNode.parentNode.rowIndex;
 
    authorList[rowIndex].pop();
    authorList[rowIndex].push(`${authorName} has borrowed this book`);
    window.onload();
 }