import React, { useEffect, useState } from 'react';
import './App.scss';
import ReactGA from 'react-ga';

import Navigation from './Components/Navigation';
import Hero from './Components/Hero';
import About from './Components/About';
import Terminal from './Components/Terminal';
import Headline from './Components/Headline';
import ProjectList from './Components/ProjectList';
import withListLoading from './Components/withListLoading';
import Footer from './Components/Footer';

ReactGA.initialize('UA-197845029-1');
ReactGA.pageview(window.location.pathname + window.location.search);

// remove repos w/ < 1 topic
function clean(obj:any) {
  for (var propName in obj) {
    if (obj[propName].topics.length < 1 || obj[propName].topics === null || obj[propName].topics === undefined) {
      delete obj[propName];
    }
  }
}

// reorder repos
function reorder(obj:any) {
  let projectList:any = [];
  let order = [
    { name: 'gameOfLifeJs', demo: true },
    { name: 'eventually', demo: false },
    { name: 'es6-gulp-boilerplate', demo: false },
    { name: 'multicontainer-docker', demo: false },
    { name: 'Tetris', demo: true },
    { name: 'sorting-algorithm-visualization', demo: true },
    { name: 'goEvents', demo: false },
    { name: 'Toggl-Clone', demo: true },
    { name: 'scroll-progress', demo: true },
    { name: 'chatterbug', demo: false },
    { name: 'code-loader', demo: true },
    { name: 'snake', demo: true },
    { name: 'codeWars', demo: false },
    { name: 'colorPaletteGenerator', demo: true },
    { name: 'typescript-calculator', demo: false },
    { name: 'me', demo: false }
  ]; 

  for (var i = 0; i < order.length; i++) {
    for (var name in obj) {
      if (obj[name].name === order[i].name) {
        obj[name].has_demo = order[i].demo; 
        projectList.push(obj[name]);
      }
    }
  }

  return projectList;
}

function App() {

  const ListLoading = withListLoading(ProjectList);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true, repos: null });
    const apiUrl = `https://api.github.com/users/AroniasPrenovost/repos?per_page=100`;
    fetch(apiUrl, {
        mode: 'cors',
        headers: new Headers({
            'Accept':'application/vnd.github.mercy-preview+json' // required to get GitHub repo topics
        })
      })
      .then((res) => res.json())
      .then((repos) => {
        clean(repos); 
        repos = reorder(repos);
        setAppState({ loading: false, repos: repos });
      });
  }, [setAppState]);
  
  return (
    <div>
      <Navigation />
      <Hero />
      <About />
      <Terminal />
      <Headline headline='Projects' />
      <ListLoading isLoading={appState.loading} repos={appState.repos} />
      <Headline headline='Contact' />
      <Footer />
    </div>
  );
}

export default App;
