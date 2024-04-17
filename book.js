let books =
  " 123,Tay Du Ki | 345,Dac Nhan Tam | 297,Tuoi tre dang gia bao nhieu | 491,Harry Potter | 512,Tam ly khac che con gian | 686,Co be quang khan do | 912,Co chang trai viet len cay ";
const booksIdentity = () => {
  let pairs = books.split('|')
    for (let i = 0; i <= pairs.length - 1; i++) {
      for (let k = 0; k <= pairs[i].length - 1; k++) {
        if (pairs[i][k] == ",") {
          console.log(
            {
            id:parseInt(pairs[i].substring(0, k)),
            title:pairs[i].substring(k + 1, pairs[i].length-1),
          });
        }
      }
    }
  };   
booksIdentity(books);

let books2 = [
  "123,Tay Du Ki",
  "345,Dac Nhan Tam",
  "297,Tuoi tre dang gia bao nhieu",
];
for (let i = 0; i <= books2.length - 1; i++) {
  for (let k = 0; k <= books2[i].length - 1; k++) {
    if (books2[i][k] == ",") {
      console.log({
        id: parseInt(books2[i].substring(0, k)),
        title: books2[i].substring(k + 1, books2[i].length),
      });
    }
  }
}