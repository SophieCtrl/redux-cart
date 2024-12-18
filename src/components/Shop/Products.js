import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: 1,
    price: 12.99,
    title: "1984",
    description:
      "George Orwell's dystopian classic about totalitarianism and surveillance.",
  },
  {
    id: 2,
    price: 14.99,
    title: "To Kill a Mockingbird",
    description:
      "Harper Lee's timeless tale of justice and morality in the Deep South.",
  },
  {
    id: 3,
    price: 9.99,
    title: "Pride and Prejudice",
    description: "Jane Austen's beloved romance and commentary on society.",
  },
  {
    id: 4,
    price: 11.99,
    title: "The Great Gatsby",
    description:
      "F. Scott Fitzgerald's critique of the American Dream in the Jazz Age.",
  },
  {
    id: 5,
    price: 19.99,
    title: "The Catcher in the Rye",
    description: "J.D. Salinger's exploration of teenage angst and rebellion.",
  },
  {
    id: 6,
    price: 13.99,
    title: "The Alchemist",
    description:
      "Paulo Coelho's inspirational story about following one's dreams.",
  },
  {
    id: 7,
    price: 15.99,
    title: "Harry Potter and the Sorcerer's Stone",
    description:
      "The first book in J.K. Rowling's magical Harry Potter series.",
  },
  {
    id: 8,
    price: 17.99,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    description: "J.R.R. Tolkien's epic adventure in Middle-earth begins.",
  },
  {
    id: 9,
    price: 10.99,
    title: "The Hobbit",
    description:
      "Bilbo Baggins' journey in J.R.R. Tolkien's beloved fantasy tale.",
  },
  {
    id: 10,
    price: 16.99,
    title: "The Da Vinci Code",
    description:
      "Dan Brown's thrilling mystery about art, history, and secrets.",
  },
  {
    id: 11,
    price: 18.99,
    title: "Becoming",
    description: "Michelle Obama's deeply personal and inspiring memoir.",
  },
  {
    id: 12,
    price: 20.99,
    title: "Sapiens: A Brief History of Humankind",
    description:
      "Yuval Noah Harari's fascinating journey through human history.",
  },
  {
    id: 13,
    price: 22.99,
    title: "Where the Crawdads Sing",
    description: "Delia Owens' poignant mystery set in the marshlands.",
  },
  {
    id: 14,
    price: 14.49,
    title: "The Kite Runner",
    description:
      "Khaled Hosseini's powerful story of friendship, guilt, and redemption.",
  },
  {
    id: 15,
    price: 18.49,
    title: "The Seven Husbands of Evelyn Hugo",
    description:
      "Taylor Jenkins Reid's captivating tale of love, fame, and secrets.",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((book) => (
          <ProductItem
            key={book.id}
            title={book.title}
            price={book.price}
            description={book.description}
            id={book.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
