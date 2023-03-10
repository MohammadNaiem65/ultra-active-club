import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import SideBar from './components/SideBar/SideBar';
import QuestionAnswer from './components/QuestionAnswer/QuestionAnswer';

function App() {
  return (
    <div>
      <div className="App md:flex justify-between">
        <div className='w-3/4 mx-auto'>
          <Header></Header>
          <Cards></Cards>
        </div>
        <SideBar></SideBar>
      </div>
      <QuestionAnswer></QuestionAnswer>
    </div>
  );
}

export default App;
