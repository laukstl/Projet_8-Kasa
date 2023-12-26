import logo from '../../assets/svg/logo.svg';
import '../../styles/Home.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Location d'appartements entre particuliers.
        </p>
        <a
          className="App-link"
          href="https://openclassrooms.com/fr/paths/594/projects/1247/assignment"
          target="_blank"
          rel="noopener noreferrer"
        >
          Projet N°8 d'OpenClassroom
        </a>
      </header>
    </div>
  );
}

export default App;
