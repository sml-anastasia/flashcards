
import './App.css';
import Card from './assets/components/Card';
import Bar from './assets/components/Bar';
import ModalAdd from './assets/components/ModalAdd';

function App() {
  return (
    <div className="App">
      <h1>Flashcards</h1>
      <Bar></Bar>
      <button>add new card</button>
      <div className="container">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <ModalAdd></ModalAdd>
    </div>
  );
}

export default App;
