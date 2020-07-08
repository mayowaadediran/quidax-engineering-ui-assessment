//variables


const searchIcon = document.querySelector(".nav__search-icon");
const searchCloseIcon = document.querySelector(".nav__search--back-btn")
const navSearch = document.querySelector(".nav__search")
const navLeft = document.querySelector(".nav__main--left")
const navRight = document.querySelector(".nav__main--right")

const navSearchInput = document.querySelector(".nav__search--input")
const navSearchButton = document.querySelector(".nav__search--btn")

const dropdown = document.querySelector(".nav__search--dropdown")

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
            let availableText = book.available ? "Available" : "Borrowed Out"
            let availableStyle = book.available ? "book__details--status--available" : "book__details--status--out"

            let stars = book.ratings
            let starsRating = ''
            let i
            for (i=0; i < stars; i++) {
                starsRating += `
                <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.03867 0L7.91383 3.62102L12.0773 4.19917L9.058 7.01383L9.77311 11L6.03867 9.12863L2.30423 11L3.01933 7.01383L0 4.19917L4.17939 3.62102L6.03867 0Z" fill="#EBA430"/>
                </svg>
                `
            }

            result += `
                <article class="book">
                    <div class="book__thumbnail">
                        <img
                        src="${book.imageUrl}"
                        />
                    </div>
                    <div class="book__details">
                        <p class="book__details--status ${availableStyle}">
                           ${availableText}
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
                                ${starsRating}
                            </div>
                        </div>
                        <div class="book__details--share">
                            <div class="people">
                                <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.41008 11C8.74665 11 9.0195 10.7324 9.0195 10.4022C9.0195 9.51523 8.75342 8.68925 8.29529 7.99685C8.87764 7.48512 9.64689 7.17392 10.4902 7.17392C12.3078 7.17392 13.7811 8.61926 13.7811 10.4022C13.7811 10.7324 14.054 11 14.3906 11C14.7272 11 15 10.7324 15 10.4022C15 7.95892 12.9809 5.97827 10.4902 5.97827C9.34305 5.97827 8.29589 6.39847 7.5 7.09054C6.70411 6.39847 5.65695 5.97827 4.50975 5.97827C2.01908 5.97827 0 7.95892 0 10.4022C0 10.7324 0.272849 11 0.609426 11C0.946002 11 1.21885 10.7324 1.21885 10.4022C1.21885 8.61926 2.69224 7.17392 4.50975 7.17392C5.35311 7.17392 6.12237 7.48512 6.70471 7.99684C6.24658 8.68924 5.9805 9.51523 5.9805 10.4022C5.9805 10.7324 6.25335 11 6.58992 11C6.9265 11 7.19935 10.7324 7.19935 10.4022C7.19935 9.92026 7.307 9.46299 7.5 9.05227C7.693 9.46299 7.80065 9.92026 7.80065 10.4022C7.80065 10.7324 8.0735 11 8.41008 11ZM4.50975 5.5C2.9615 5.5 1.70639 4.26878 1.70639 2.75C1.70639 1.23122 2.9615 0 4.50975 0C6.058 0 7.31311 1.23122 7.31311 2.75C7.31311 4.26878 6.058 5.5 4.50975 5.5ZM4.50975 4.30435C5.38485 4.30435 6.09426 3.60844 6.09426 2.75C6.09426 1.89156 5.38485 1.19565 4.50975 1.19565C3.63465 1.19565 2.92524 1.89156 2.92524 2.75C2.92524 3.60844 3.63465 4.30435 4.50975 4.30435ZM10.4902 4.30435C11.3653 4.30435 12.0748 3.60844 12.0748 2.75C12.0748 1.89156 11.3653 1.19565 10.4902 1.19565C9.61515 1.19565 8.90574 1.89156 8.90574 2.75C8.90574 3.60844 9.61515 4.30435 10.4902 4.30435ZM10.4902 5.5C8.942 5.5 7.68689 4.26878 7.68689 2.75C7.68689 1.23122 8.942 0 10.4902 0C12.0385 0 13.2936 1.23122 13.2936 2.75C13.2936 4.26878 12.0385 5.5 10.4902 5.5Z" fill="black"/>
                                </svg>
                                <div class="people-text">${book.readers}</div>
                            </div>
                            <div class="like">
                                <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.99811 9L9.13183 5.04131C9.68733 4.48902 10 3.73577 10 2.94978C10 2.16379 9.68733 1.41054 9.13183 0.85825C7.98818 -0.271677 6.16141 -0.287922 4.99811 0.82149C3.83279 -0.285828 2.00601 -0.266222 0.864401 0.865856C0.309892 1.41916 -0.00141469 2.17299 4.83342e-06 2.95897C0.00142436 3.74496 0.315452 4.49764 0.871956 5.04891L4.99811 9ZM1.57329 1.58205C1.98776 1.16659 2.5651 0.959575 3.14713 1.01773C3.72915 1.07588 4.25482 1.3931 4.58008 1.88247L4.99811 2.51626L5.41614 1.88247C5.48987 1.77408 5.57423 1.67343 5.66797 1.58205C6.43291 0.826396 7.658 0.826396 8.42294 1.58205C8.78603 1.94257 8.99106 2.43415 8.99248 2.94756C8.9939 3.46097 8.79159 3.95369 8.43049 4.31624L4.99811 7.60058L1.57329 4.32005C1.21003 3.95836 1.00562 3.46539 1.00562 2.95105C1.00562 2.4367 1.21003 1.94373 1.57329 1.58205Z" fill="black"/>
                                </svg>
                                <div class="people-text">${book.likes}</div>
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

    toggleDropDown() {
        if (dropdown.classList.contains('nav__search--dropdown-show')) {
            dropdown.classList.remove('nav__search--dropdown-show')
        } else {
            dropdown.classList.add('nav__search--dropdown-show')
        }
    }

    setupUI() {
        navHamburger.addEventListener('click', this.showSidebar)
        sidebarBckBtn.addEventListener('click', this.closeSidebar)
        searchIcon.addEventListener('click', this.showSearchNav)
        searchCloseIcon.addEventListener('click', this.closeSearchNav)
        navSearchButton.addEventListener('click', this.toggleDropDown)
        navSearchInput.addEventListener('click', this.toggleDropDown)
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