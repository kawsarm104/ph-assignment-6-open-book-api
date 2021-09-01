console.log("i am connected")
    const searchField = document.getElementById('search-field')
    // document.getElementById('error-message').style.display = 'none';
    document.getElementById('spinner').style.display = 'none';
    const searchResult = document.getElementById('search-result');
    const bookDetail = document.getElementById('book-detail')
    const totalSearchResult = document.getElementById('total-search-result')
    const errorMessage = document.getElementById('error-message')
    
 
//Searching all the books using arrow function
const searchBooks = () => {
     spinner.style.display = "block"
    console.log("button clicked")
    searchResult.textContent = '';
    totalSearchResult.innerText = ''
    // const noResult = document.getElementById('no-result');// ken jani na
        const searchText = searchField.value
        console.log(searchText)
        searchField.value = ""

    if (searchText === '') {
        // document.getElementById('error-message').style.display = 'none';
        spinner.style.display = 'none'
        searchResult.textContent = '';
        totalSearchResult.innerText = ""
        console.log("Empty String")
        errorMessage.innerText = "Please write a book name"
  
    }
    else {
        errorMessage.innerText = ""
        
        fetch(`http://openlibrary.org/search.json?q=${searchText}`)
        .then(res => res.json())
        .then(data => {
            spinner.style.display = "none"
            console.log(data.numFound)
            displayBooks(data.docs,data.numFound)
        })
    }

}
const displayBooks = (books,resultsNumber) =>{

    totalSearchResult.innerHTML = `<h3>Total ${resultsNumber} Search Results Found <h3>`
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

