// console.log("i am connected")
    const searchField = document.getElementById('search-field')
    const spinner = document.getElementById('spinner')
    const searchResult = document.getElementById('search-result');
    const bookDetail = document.getElementById('book-detail')
    const totalSearchResult = document.getElementById('total-search-result')
    const errorMessage = document.getElementById('error-message')
    
    spinner.style.display = 'none';
 
//Searching all the books using arrow function
const searchBooks = () => {
     spinner.style.display = "block"
    // console.log("button clicked")
    searchResult.textContent = '';
    totalSearchResult.innerText = ''
    const searchText = searchField.value
    // console.log(searchText)
    searchField.value = ""

    //Using === sign 
    if (searchText === '') {    
        spinner.style.display = 'none'
        searchResult.textContent = '';
        totalSearchResult.innerText = ""
        // console.log("Empty String")
        errorMessage.innerText = "Please write a book name" 
    }
    else {
        errorMessage.innerText = ""
        //using https other wise not working in netlify
        fetch(`https://openlibrary.org/search.json?q=${searchText}`)
        .then(res => res.json())
        .then(data => {
            spinner.style.display = "none"
            // console.log(data.numFound)
            if (data.numFound !== 0) {
                displayBooks(data.docs,data.numFound)
            }
            else {
                totalSearchResult.innerHTML = "<h2>Sorry No Data Found<h2>"
            }
            
        })
        .catch(error => console.log(error))
    }

}
const displayBooks = (books,resultsNumber) =>{
    totalSearchResult.innerHTML = `<h3>Total ${resultsNumber} Search Results Found <h3>`
    searchResult.textContent = '';
    errorMessage.innerText = ''
    
    // here using for each function to iterate also using slice to show less data
    books.slice(0,10).forEach((book, index) => {
        
        // if (book.cover_i === '' || book.title == '' || book.author_name === ''  || book.publisher === '' || book.first_publish_year === ''){
        //     continue;   .slice(0,5)
        // }
       
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

