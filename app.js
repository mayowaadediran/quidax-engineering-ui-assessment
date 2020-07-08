//variables


const searchIcon = document.querySelector(".nav__search-icon");
const searchCloseIcon = document.querySelector(".nav__search--back-btn")
const navSearch = document.querySelector(".nav__search")
const navLeft = document.querySelector(".nav__main--left")
const navRight = document.querySelector(".nav__main--right")

const booksList = document.querySelector(".bookshelf__list");
const carousel = document.querySelector(".carousel");

const navHamburger = document.querySelector(".nav__hamburger")


const sidebar = document.querySelector(".sidebar")
const sidebarBckBtn = document.querySelector(".sidebar__back-btn")



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

    displayFeaturedBooks(books) {
        let result = ''
        books.forEach(book => {
            result += `
            <div class="carousel-cell">
            <div class="carousel-cell__image">
              <div class="carousel-cell__details-btn">
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 13.5C0 20.9558 6.04416 27 13.5 27C20.9558 27 27 20.9558 27 13.5C27 6.04416 20.9558 0 13.5 0C6.04416 0 0 6.04416 0 13.5Z" fill="white"/>
                  <path d="M12 7.5C12 8.32843 12.6716 9 13.5 9C14.3284 9 15 8.32843 15 7.5C15 6.67157 14.3284 6 13.5 6C12.6716 6 12 6.67157 12 7.5Z" fill="#999999"/>
                  <path d="M12 13.5C12 14.3284 12.6716 15 13.5 15C14.3284 15 15 14.3284 15 13.5C15 12.6716 14.3284 12 13.5 12C12.6716 12 12 12.6716 12 13.5Z" fill="#999999"/>
                  <path d="M13.5 21C12.6716 21 12 20.3284 12 19.5C12 18.6716 12.6716 18 13.5 18C14.3284 18 15 18.6716 15 19.5C15 20.3284 14.3284 21 13.5 21Z" fill="#999999"/>
                  </svg>
              </div>
              <img src="${book.imageUrl}"/>
            </div>
            <div class="carousel-cell__overlay">
              <div class="carousel-cell__close-btn">
                <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.99998 5.54187L1.20836 0.750244L-6.10352e-05 1.95866L4.79156 6.75029L-1.8537e-05 11.5419L1.2084 12.7503L5.99998 7.9587L10.7915 12.7502L11.9999 11.5418L7.2084 6.75029L12 1.9587L10.7916 0.750287L5.99998 5.54187Z" fill="#DDDDDD"/>
                </svg>
              </div>
              <div class="carousel-cell__overlay--info">
                <p class="carousel-cell__overlay--status">Available</p>
                <h3 class="carousel-cell__overlay--title">
                ${book.title}
                </h3>
                <p class="carousel-cell__overlay--authors">
                ${book.author} - ${book.published}
                </p>
                <p class="carousel-cell__overlay--rating-text">
                  Rating: ${book.ratings}.0
                </p>
                <div class="carousel-cell__overlay--rating-stars">
                  <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.03867 0L7.91383 3.62102L12.0773 4.19917L9.058 7.01383L9.77311 11L6.03867 9.12863L2.30423 11L3.01933 7.01383L0 4.19917L4.17939 3.62102L6.03867 0Z" fill="#EBA430"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
            `
            carousel.innerHTML = result
        })
        var flkty = new Flickity( carousel, {
            // options
            wrapAround: true
        });
    }
    //showfeatured


    //togglenav 

//showSearchNav()
//-->on click search icon add .nav__search--show to nav__search

//hidesidebar()
//on click back btn




    showSidebar() {
        sidebar.classList.add('sidebar--show')
    }

    closeSidebar() {
        sidebar.classList.remove('sidebar--show')
    }

    showSearchNav() {
        navSearch.classList.add('nav__search--show')
        navLeft.classList.add('nav__main--hide')
        navRight.classList.add('nav__main--hide')
    }

    closeSearchNav() {
        navSearch.classList.remove('nav__search--show')
        navLeft.classList.remove('nav__main--hide')
        navRight.classList.remove('nav__main--hide')
    }

    setupUI() {
        navHamburger.addEventListener('click', this.showSidebar)
        sidebarBckBtn.addEventListener('click', this.closeSidebar)
        searchIcon.addEventListener('click', this.showSearchNav)
        searchCloseIcon.addEventListener('click', this.closeSearchNav)
    }

    //showRecent -- first 3

    //showall books 

}
    


//show search terms 


//


document.addEventListener("DOMContentLoaded", ()=> {
    const ui = new UI()
    const books = new Books();
  
    ui.setupUI();

    books.getBooks()
      .then(books => {
        ui.displayBooks(books)
        ui.displayFeaturedBooks(books)
        ui.displayRecentBooks(books)
      }).then(() => {
       
      })
  
  })