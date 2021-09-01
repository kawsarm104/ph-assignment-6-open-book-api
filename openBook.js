console.log("i am connected")
    const searchField = document.getElementById('search-field')
    document.getElementById('error-message').style.display = 'none';
    document.getElementById('spinner').style.display = 'none';
    const searchResult = document.getElementById('search-result');
    const bookDetail = document.getElementById('book-detail')
    
//Searching all the books using arrow function
    const searchBooks = () => {
    // console.log("button clicked")
    const noResult = document.getElementById('no-result');// ken jani na
    const searchText = searchField.value
    console.log(searchText)
    searchField.value = ""
    fetch(`http://openlibrary.org/search.json?q=${searchText}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.numFound)
            displayBooks(data.docs,data.numFound)
        })
}
const displayBooks = (books,number) =>{
    console.log(number)
    const searchResult = document.getElementById('search-result')
    const totalSearchResult = document.getElementById('total-search-result')
    totalSearchResult.innerHTML = `<h3>Total Search Results Found ${number}<h3>` 
    searchResult.textContent = '';

    // here using for each function to iterate
    books.forEach((book,index)=> {
       
    const div = document.createElement('div')
    div.classList.add('col');
    div.innerHTML = `
    <div class="card h-100">
    <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="book image">
        <div class="card-body">
            <h3 class="card-title">Title: ${book.title}</h3>
            <p class="card-text">Author: ${book.author_name}</p>
            <p class="card-text">Publisher: ${book.publisher}</p>
        </div>
        <div class="card-footer">
        <small class="text-muted"> First Publish in: ${book.first_publish_year}</small>
        </div>
    </div>
    `
    searchResult.appendChild(div)
   });
}

// showBookDetail = (data) => {
//     // const bookName = document.getElementById("book-name")
//     // const bookName = document.getElementById("author-name")
//     // const bookName = document.getElementById("first-publish")
//     // const bookName = document.getElementById("publisher-name")
//     document.getElementById("book-name").innerText = data.docs[0].title
//     document.getElementById("author-name").innerText = data.docs[0].author_name
//     document.getElementById("first-publish").innerText = data.docs[0].first_publish_year
//     document.getElementById("publisher-name").innerText = data.docs[0].publisher
//     document.getElementById("publisher-name").innerHTML =
//         `<img src="https://covers.openlibrary.org/b/id/{cover_i}-M.jpg" alt="">`
//             console.log(data.docs[0].title)
    
//     } 
/*
const searchBook = () => {
    onst noResult = document.getElementById('no-result');
    const searchText = searchField.value
    // console.log(searchText)
    // searchField.value = ""
    // if (searchText == '') {
    //     document.getElementById('error-message').style.display = 'none';
    //     searchResult.textContent = '';
    //     console.log("Empty String")
    //     const p = document.createElement('p');
    //     noResult.textContent = ''
    //     p.style.color = 'red'
    //     p.innerText = "Please write a book name"
    //     noResult.appendChild(p)
    // }
    console.log(searchText)
    fetch(`http://openlibrary.org/search.json?q=${searchText}`)
        .then(res => res.json())
        .then(data => console.log(data.docs[0].title))

    // else {
    //     // noResult.textContent = ''
    //     document.getElementById('spinner').style.display = 'block';
    //     fetch(`http://openlibrary.org/search.json?q=${searchText}`)
    //         // console.log(searchText)
    //         .then(res => res.json())
    //         .then(data => {
    //             document.getElementById('spinner').style.display = 'none';
    //             document.getElementById('error-message').style.display = 'none';
    //             console.log(data.docs[0].title)
    //             const bookName = document.getElementById("book-name")
    //             console.log(data.docs[0].title)
                 
    //             bookName.innerText = `

    //             `
            
    //         })

    // }
    
}
*/