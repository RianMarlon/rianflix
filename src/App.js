import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Home from './pages/home/Home';
import CadastroVideo from './pages/cadastroVideo/CadastroVideo';
import Footer from './components/footer/Footer';

import styled from 'styled-components'

const Main = styled.main`
    background-color: var(--main-background-color);
    color: var(--white);
    flex: 1;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 50px;
`

export default function App() {
    return (
        <>
            < Header />
            <Main>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/cadastro/video" component={CadastroVideo} />
                    <Route path="/" component={Home} />
                </Switch>
            </Main>
            <Footer />
        </>
    );
}
