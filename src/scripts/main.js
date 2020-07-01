// fetch all the templates and display it to index.html

// Header template
fetch("../../src/view/header.html")
.then(response => {
    return response.text();
})
.then(data => {
    document.querySelector("header").innerHTML = data;
});

// Search Bar template
fetch("../../src/view/searchbar.html")
.then(response => {
    return response.text();
})
.then(data => {
    document.querySelector("searchbar").innerHTML = data;
});

// Viewport template
// fetch("../../src/view/viewport.html")
// .then(response => {
//     return response.text();
// })
// .then(data => {
//     document.querySelector("viewport").innerHTML = data;
// });

// Footer template
fetch("../../src/view/footer.html")
.then(response => {
    return response.text();
})
.then(data => {
    document.querySelector("footer").innerHTML = data;
});