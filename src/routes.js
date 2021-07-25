import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home/index';
import FormularioCadastro from './Home/formularioCadastro';
export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/formularioCadastro' exact component={FormularioCadastro} />
            </Switch>
        </BrowserRouter>
    )
}