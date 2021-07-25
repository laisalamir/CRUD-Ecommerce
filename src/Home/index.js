import React, { useState, useEffect } from 'react';
import * as L from './styled'
import { Jumbotron } from 'reactstrap';
import FormularioCadastro from './formularioCadastro';
import fireDb from '../DataBase/firebase';

import {
    Collapse, Navbar, NavbarToggler, Nav, NavItem,
    NavLink, Button
} from 'reactstrap';

import img1 from './img/img1.png';
import background from './img/background.jpg';

function App(props) {
    let [dadosUsuario, setDadosUsuario] = useState({})

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const MostrarDados = function MostrarLista() {
        document.getElementById("awesome").hidden = false;

    }
    useEffect(() => {
        fireDb.child('usuario').on('value', dbPhoto => {
            if (dbPhoto.val() != null) {
                setDadosUsuario({
                    ...dbPhoto.val()
                })
            }
        })
    }, [])
    const addEedit = obj => {
        fireDb.child('usuario').push(
            obj,
            error => {
                if (error) {
                    console.log(error)
                }
            }
        )
    }

    return (
        <L.CrudEcommerce>
            <L.Menu style={{ backgroundImage: `url(${background})` }}>
                <div >
                    <Navbar color="light" light expand="md">
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="mr-auto" navbar>

                                <NavItem>
                                    <NavLink href="/Home">Inicio</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/formularioCadastro">Matricula</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/components/">Aulas</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://https://github.com/laisalamir">GitHub</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            </L.Menu>
            <L.HomeImg src={img1} />

            <L.HomeContainer>

                <div>
                    <Jumbotron>
                        <h1 className="display-3">Vida Fitness</h1>
                        <p className="lead">Sua casa, seu estilo de vida.</p>
                        <hr className="my-2" />
                        <p>Aulas Para Todos Os Gostos Ou Aulas Para O Seu Gosto?</p>
                        <p className="lead">
                            HIIT zone, Alongamentos, Mobilidade, Abdominais, Dança, Mind & Body, Força, Intensidade e Tanto Mais.
                        </p>
                    </Jumbotron>
                </div>
            </L.HomeContainer>
            <L.PrincipalContainer>
                <div>

                    <div className="row">
                        <div className="container">
                            <div className="col-md-6">
                                <FormularioCadastro addEedit={addEedit} />
                            </div>
                            <br />
                            <hr />
                            <br />
                            <div>
                                <h1>Mostrar Inventário de MatriculaS</h1>
                                <Button color="primary" size="lg" onClick={MostrarDados} id="okButton">Mostrar</Button>
                                <div className="MostrarDados" id="awesome" hidden>

                                    <div className="col-md-7">
                                        <table className="table table-borderless table-stripped">
                                            <thead className="thead-light">
                                                <tr>
                                                    <td>Nome Completo: </td>
                                                    <td>Contato: </td>
                                                    <td>E-mail: </td>
                                                    <td>Endereço: </td>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {
                                                    Object.keys(dadosUsuario).map(id => {
                                                        return <tr key={id}>
                                                            <td> {dadosUsuario[id].nomeCompleto}</td>
                                                            <td> {dadosUsuario[id].telefone}</td>
                                                            <td> {dadosUsuario[id].email}</td>

                                                        </tr>
                                                    })
                                                }
                                            </tbody>

                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </L.PrincipalContainer>
            <L.Footer style={{ backgroundImage: `url(${background})` }}>
                <p> GamaAcademy  -  LAISA LAMIR  - 2021   </p>
            </L.Footer>




        </L.CrudEcommerce>

    )
}

export default App;