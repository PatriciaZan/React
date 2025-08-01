const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructuring ----------------------------------------------------------------------

const book = getBook(1);
//const title = book.title
//const author = book.author
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
console.log(book);
//console.log(title, author, pages , publicationDate, genres, hasMovieAdaptation);

//const primaryGenre = genres[0]
//const secondaryGenre = genres[1]
// Rest operator -> ... ----------------------------------------------------------------
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, secondaryGenre, otherGenres);

// Spread operator -> ... ----------------------------------------------------------------
// Add all the elements + a new one
const newGenres = [...genres, "epic Fanatsy"]; // or ['epic Fansy, ...genres]

const updatedBook = {
  ...book,
  moviePublicationData: "2001-12-19",
  pages: 1210,
};
console.log(updatedBook);

// Template Literals ------------------------------------------------------------------------
const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${
  publicationDate.split("-")[0]
}`;
console.log(summary);

// Ternaries --------------------------------------------------------------------------------

const pagesRange = pages > 1000 ? "over a thousand" : "less than one thousand";
console.log(pagesRange);
console.log(`The book has ${pagesRange} pages`);

// Arrow Functions ------------------------------------------------------------------------------
function getYear(str) {
  return str.split("-")[0];
}

const getYearArrow = (str) => str.split("-")[0];
console.log(getYear(publicationDate));

// Short-Circuiting and logical operators &&||?? -----------------------------------------------

console.log(true && "Some string"); // 'Some string'
console.log(false && "Some string"); // false
console.log(hasMovieAdaptation && "This book has a movie");

// falsy 0 '' null undefined
console.log("Patricia" && "Some string"); // some string
console.log(0 && "Some string"); // 0

console.log(true || "Some string"); // true
console.log(false || "Some string"); // 'Some string'

console.log(book.translations.spanish); // undefined [2]

const spanishTranslation = book.translations.spanish || "NOT TRANSLATED"; // NOT TRANSLATED

console.log(book.reviews.librarything.reviewsCount); // 0
const countWrong = book.reviews.librarything.reviewsCount || "NO DATA"; // NO DATA

const count = book.reviews.librarything.reviewsCount ?? "No data"; // 0

// Optionar Chaining ? --------------------------------------------------------------------------
function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodread?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;

  return goodreads + librarything;
}

console.log(getTotalReviewCount(book)); // result

// Array map Method --------------------------------------------------------------------------
// return new array based of the original

const books = getBooks();

const titles = books.map((book) => book.title);
const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));
console.log(essentialData);

// Array filter Method --------------------------------------------------------------------------
const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
console.log(longBooks);

const adventureBooks = books
  .filter((book) => books.genres.includes("adventure"))
  .map((book) => book.title);
console.log(adventureBooks);

// Array reduce Method --------------------------------------------------------------------------

const pagesAllBooks = books.reduce((sum, book) => acc + book.pages, 0);
console.log(pagesAllBooks); // 3227

// Array sort Method --------------------------------------------------------------------------
const arr = [3, 7, 1, 8, 5];
const sorted = arr.slice().sort((a, b) => a - b);
console.log(sorted);

const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages);
console.log(sortedByPages);

// Immutable Arrays ---------------------------------------------------------------
// 1) Add a book obj to array
const newBook = {
  id: 6,
  title: "Harry Potter and the chamber of secrets",
  author: "J. k. Rowling",
};

const booksAfterAdd = [...books, newBook];
console.log(booksAfterAdd);

// 2) Delete a obj book from array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
console.log(booksAfterDelete);

// 3) update book obj in the array
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1 } : book
);

console.log(booksAfterUpdate);

// Asynchronous JS: Promises ------------------------------------------------------

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data));

// Asynchronous JS: Async/Await ---------------------------------------------------

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
}

getTodos();
