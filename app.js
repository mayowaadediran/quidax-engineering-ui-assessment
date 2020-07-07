//variables

const searchIcon = document.querySelector(".nav__search-icon");


//togglenav 

//showSearchNav()
//-->on click search icon add .nav__search--show to nav__search

//hidesidebar()
//on click back btn



//toggle sidebar 

//showSidebar()
//---> on click hamburger add class .sidebar-show to class sidebar
//hideSidebar()
//----> on click back button remove the sidebar-show from class

//getbooks
class Books {
    async getBooks() {
        try {
            let result = await fetch('books.json');
            let data = await result.json()
            let books = data.books
            return books
        } catch (error) {
            console.log(error)
        }
    }
}

//show books
class UI {
    //showfeatured

    //showRecent -- first 3

    //showall books 

}
    


//show search terms 


//


document.addEventListener("DOMContentLoaded", ()=> {
    const ui = new UI()
    const books = new Books();
  
    // ui.setupAPP();
    //get all products
    books.getBooks()
      .then(books => {
       console.log(books)
      }).then(() => {
       
      })
  
  })