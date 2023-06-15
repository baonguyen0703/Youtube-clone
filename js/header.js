const searchElement = document.getElementById("search-input");
const searchCancelButton = document.getElementById("search-cancel-button");

searchCancelButton.style.visibility = 'hidden'

searchCancelButton.addEventListener('click', () => {
        searchElement.value = ''
    }
)

searchElement.addEventListener('input', () => {
    if (searchElement.value !== "") {
        searchCancelButton.style.visibility = 'visible'
    }  
        
})
