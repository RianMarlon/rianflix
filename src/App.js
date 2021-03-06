import React from 'react';

import { Switch, Route } from 'react-router-dom';

import styled from 'styled-components';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import CadastreVideo from './pages/cadastreVideo/CadastreVideo';
import CadastreCategory from './pages/cadastreCategory/CadastreCategory';
import PageNotFound from './pages/pageNotFound/PageNotFound';
import Footer from './components/footer/Footer';

const Main = styled.main`
  background-color: var(--main-background-color);
  color: var(--white);
  flex: 1;
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 50px;
`;

export default function App() {
  return (
    <>
      <Header />
      <Main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/cadastro/video" component={CadastreVideo} />
          <Route path="/cadastro/categoria" component={CadastreCategory} />
          <Route path="/" component={PageNotFound} />
        </Switch>
      </Main>
      <Footer />
    </>
  );
}
