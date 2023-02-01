import './App.css';
import MultiPageForm from './components/organisms/MultiPageForm';


function App() {
  const isMobile = window.innerWidth < 500;

  return (
    <div className="App">
          <h1> Data Set Classification </h1> 
          <MultiPageForm />
    </div>
  );
}

export default App;
