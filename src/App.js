
import './App.css';

import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import About from './components/About'

import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  return (
    <div className=" bg-slate-950 text-white/70 h-[400vh]  font-semibold overflow-hidden ">
       <Header />
       <Nav />
       <Main />
      <About />
      <Services />
      <Contact />
      <div className=""></div>
    </div>
  );
}

export default App;
