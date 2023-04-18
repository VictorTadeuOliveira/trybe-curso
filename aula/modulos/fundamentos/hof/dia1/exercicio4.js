const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

const expectedResult = 'Stephen King';
const authorBornIn1947 = () => {
  return books.find((idade) => idade.author.birthYear === 1947).author.name;
}

/* console.log(authorBornIn1947(books));
 */

const smallerName = () => {
  let nameBook;
  books.forEach((book) => {
    if (!nameBook || book.name.length < nameBook.length) {
      nameBook = book.name;
    }
  });
  return nameBook;
};

/* console.log(smallerName(books)); */

const book26 = () => {
  let nameBook;
  books.forEach((book) => {
    if (!nameBook || book.name.length === 26) {
      nameBook = book.name;
    }
  });
  return nameBook;
};

/* console.log(book26(books)); */

const bornXX = () => {
    return books.every((secXX) => (
      secXX.author.birthYear > 1900 && secXX.author.birthYear < 2001
    ));
};

/* console.log(bornXX(books)); */

const someBookWasReleaseOnThe80s = () => {
  return books.some((decada80) =>
    decada80.releaseYear > 1979 && decada80.releaseYear < 1990 );
};

/* console.log(someBookWasReleaseOnThe80s(books)); */

const authorUnique = () => {
  return books.every((ano) =>
  !books.some((mesmoAno) => 
  (ano.author.birthYear === mesmoAno.author.birthYear)
  && (ano.author.name !== mesmoAno.author.name)));
};

console.log(authorUnique(books));
