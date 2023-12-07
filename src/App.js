import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header">
          <div>
            <img
              alt="open book"
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/106/291/original/open-book-outline-doodle-illustration-in-engraving-style-concept-back-to-school-vector.jpg?1701944060"
            />
          </div>
          <h1>Dictionary App</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          <a
            href="https://github.com/jennt55/react-add-on-dictionary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open source Code{" "}
          </a>
          by Jenn Taft
        </footer>
      </div>
    </div>
  );
}
