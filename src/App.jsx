import './App.css';
import Header from './Header/Header';
import Technologies from './Technologies/Technoogies';


/* Компонент - это функция, которая возвращает JSX РАЗМЕТКУ */
const App = function () {
  return (
    <div>
      <Header />
      <Technologies />
    </div>
  )
}




export default App;
 