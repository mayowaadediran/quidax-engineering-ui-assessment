//variables

const searchIcon = document.querySelector(".nav__search-icon");
const booksList = document.querySelector(".bookshelf__list")


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

    setupUI() {

    }

    displayBooks(books) {
        let result = '';
        books.forEach(book => {
            result += `
                <article class="book">
                    <div class="book__thumbnail">
                        <img
                        src="${book.imageUrl}"
                        />
                    </div>
                    <div class="book__details">
                        <p class="book__details--status .book__details--status--available">
                        Available
                        </p>
                        <h3 class="book__details--title">
                        ${book.title}
                        </h3>
                        <p class="book__details--authors">
                        ${book.author} - ${book.published}
                        </p>
                        <p class="book__details--category">
                           ${book.genre}
                        </p>
                        <div class="book__details--review">
                        <div class="book__details--rating">
                            <p class="book__details--rating-text">
                            Rating: ${book.ratings}.0
                            </p>
                            <div class="book__details--rating-stars">
        
                            </div>
                    </div>
                    <div class="book__details--share">
                        <div class="people">
                        
                        </div>
                        <div class="like">
    
                        </div>
                    </div>
                    </div>
                </div>
                </article>
            `

            booksList.innerHTML = result
        })
    }

    displayRecentBooks() {

    }
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
        ui.displayBooks(books)
       console.log(books)
      }).then(() => {
       
      })
  
  })