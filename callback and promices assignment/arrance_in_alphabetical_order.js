const books = [
    {
      title: "Shreemad Bhagwat Geeta",
      author: "Vyasa",
      year: 1885
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960
    },
    {
      title: "1984",
      author: "George Orwell",
      year: 1949
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      year: 1813
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925
    }
  ];

  function logTitles(titles)
  {
    titles.sort();
    console.log(titles.join(", "));
  }

  function extraactTitles(boks,callback)
  {
    const titles=books.map((books)=>books.title);
    callback(titles);

  }
  extraactTitles(books,logTitles);

