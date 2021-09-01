console.log("i am connected")
    const searchField = document.getElementById('search-field')
    document.getElementById('error-message').style.display = 'none';
    document.getElementById('spinner').style.display = 'none';
    const searchResult = document.getElementById('search-result');

const searchBook = () => {
    const noResult = document.getElementById('no-result');
    const searchText = searchField.value 
    console.log(searchText)
    searchField.value = ""
    if (searchText == '') {
        document.getElementById('error-message').style.display = 'none';
        searchResult.textContent = '';
        console.log("Empty String")
        const p = document.createElement('p');
        noResult.textContent = ''
        p.style.color = 'red'
        p.innerText = "Please write a book name"
        noResult.appendChild(p)
    }
    else {
        
    }
}