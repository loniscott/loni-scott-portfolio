import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Navigation from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Github from './icons/icons8-github.svg';
import LinkedIn from './icons/icons8-linkedin.svg';


function App() {

  const [state, setState] = useState({ items: []});
  const [extraComponents] = useState([]);
  const [count, setCount] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);


  const fetchMoreData = () => {
    if (state.items.length >= 5) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setState({
        items: state.items.concat([extraComponents[count]])
      });
      setCount(count + 1);
    }, 500);
  };

  return (
    <div>
      <BrowserRouter>
        <div className={`App ${theme}`}>
      {/*light/dark mode toggle*/}
          <label className="toggle" >
            <input type="checkbox" className="toggle-checkbox" onClick={toggleTheme}/>
            <div className="toggle-switch"/>
            <span className="toggle-label" />
          </label>
      <Navigation />
      <header className="App-header">
        <Home id="home"/>
        <AboutMe id="about"/>
        <Portfolio id="portfolio"/>
        <Contact id="contact"/>
        <InfiniteScroll
          dataLength={state.items.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p className="flex">
                    <a href= "https://github.com/jenscotch">
                        <img src={Github} alt="Github" />
                    </a>
                    <a href="https://www.linkedin.com/in/jennifer-scott-84543a1b6/">
                        <img src={LinkedIn} alt="LinkedIn" />
                    </a>
            </p>
          }
          >
            {state.items.map((i, index) => i)}
          </InfiniteScroll>
      </header>
          </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
