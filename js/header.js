// get header elements
const headerElement = document.getElementById("header-container");
const headerStartElement = document.getElementById("header-start");
const headerCenterElement = document.getElementById("header-center");
const headerCenterContainer = document.getElementById("header-center-container");
const headerEndElement = document.getElementById("header-end");

const backButton = document.getElementById("back-button");

// search component
const searchComponent = document.getElementById("searchbar-container");
const searchInputElement = document.getElementById("search-input");
const searchCancelButton = document.getElementById("search-cancel-button");
searchCancelButton.style.visibility = "hidden";
const searchButtonSmallScreen = document.getElementById(
  "search-button-small-screen"
);

const headerStartElementChildren = headerStartElement.children

// default styles
const defaultStyle = headerElement.style.cssText || "";

// helper variables
let isSearchSmallScreen = false; 
const origHeaderCenterContainerStyle = headerCenterContainer.style.cssText 
const origSearchComponentStyle = searchComponent.style.cssText
const origSearchButtonSmallScreen = searchButtonSmallScreen.style
let isSearching = false; 

// == Event Handlers ==

// clear the search input
searchCancelButton.addEventListener("click", () => {
  searchInputElement.value = "";
});

// display the search-cancel-button when there is somne input
searchInputElement.addEventListener("input", () => {
  if (searchInputElement.value !== "") {
    searchCancelButton.style.visibility = "visible";
  }
});

searchInputElement.addEventListener("focus", () => {
    isSearching = true
})

searchInputElement.addEventListener('blur', () => {
    isSearching = false
})

// replace default header with search component when search-button-small-screen is clicked
searchButtonSmallScreen.addEventListener("click", () => {toggleSearchHeader(true)});

const toggleSearchHeader = (isSearchSmallScreen) => {
    if (isSearchSmallScreen) {
        // hide header-end and search-button-small-screen 
        headerEndElement.style.display = "none";
        searchButtonSmallScreen.style.display = 'none';
        
        // hide all children of header-start
        for (const child of headerStartElementChildren) {
            child.style.display = 'none'
        }
        // unhide back-button
        headerStartElementChildren[0].style.display='flex'
     
        // unhide searchComponent and add margin
        searchComponent.style.display = 'flex';
        searchComponent.style.margin = '0px 10px'
    
        // remove left-margin of header-center-container
        headerCenterContainer.style.marginLeft = "0px"

        // adjust position of microphone's tooltip
        document.querySelector('#mic-button .button-tooltip').style.right = "0px"
    } else {
        // unhide header-end and search-button-small-screen 
        headerEndElement.style.display = 'flex'
        searchButtonSmallScreen.style = origSearchButtonSmallScreen.style
        
        // hide all children of header-start
        for (const child of headerStartElementChildren) {
            child.style.display = 'flex'
        }
        // unhide back-button
        headerStartElementChildren[0].style.display='none'
     
        // unhide searchComponent and add margin
        searchComponent.style = origSearchComponentStyle
    
        // remove left-margin of header-center-container
        headerCenterContainer.style = origHeaderCenterContainerStyle

        // adjust position of microphone's tooltip
        document.querySelector('#mic-button .button-tooltip').style.right = ""
    }
}

// return to default header when back-button is clicked
backButton.addEventListener("click", () => {
    toggleSearchHeader(false)
})

// handle resize
window.addEventListener("resize", (ev) => {
    if (this.innerWidth >= 656) {
        toggleSearchHeader(false)
    } else {
        if (isSearching) {
            toggleSearchHeader(true)
        }
    }
})


