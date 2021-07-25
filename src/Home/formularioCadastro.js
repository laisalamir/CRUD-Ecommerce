import React, { useState } from 'react';
import * as L from './styled';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

const FormularioCadastro = (props) => {

    // variavel para captura de dados
    const camposIniciaisDeValores = {
        nomeCompleto: '',
        telefone: '',
        email: '',
        endereco: ''
    }

    const [values, setValues] = useState(camposIniciaisDeValores);

    const manipuladorInputChange = e => {
        let { name, value } = e.target

        setValues({
            ...values,
            [name]: value
        })
    }

    const manipuladorEnvio = e => {
        e.preventDefault()
        props.addEedit(values)
    }

    return (
        <L.PrincipalContainer>
            <h2>Matricule-se Já!</h2>
            <L.PrincipaForm autoComplete="off" onSubmit={manipuladorEnvio}>
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-user"></i>
                        </div>
                    </div>

                    <input className="form-control" placeholder="Nome Completo" name="nomeCompleto" value={values.nomeCompleto} onChange={manipuladorInputChange} />
                </div>

                <div className="row">
                    <div className="container">
                        <div className="form-group input-group col-md-6">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <i className="fas fa-mobile-alt"></i>
                                </div>
                            </div>

                            <input className="form-control" placeholder="Contato" name="telefone" value={values.telefone} onChange={manipuladorInputChange} />
                        </div>


                        <div className="form-group input-group col-md-6">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <i className="fas fa-envelope"></i>
                                </div>
                            </div>

                            <input className="form-control" placeholder="E-mail" name="email" value={values.email} onChange={manipuladorInputChange} />
                        </div>
                    </div>
                </div>
                <div className="form-group input-group ">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-home"></i>
                        </div>
                    </div>

                    <textarea className="form-control" placeholder="Endereco" name="endereco" value={values.endereco} onChange={manipuladorInputChange} />
                </div>
                <div className="form-group">
                    <input type="submit" values="Salvar" className="btn btn-primary btn-block" />
                </div>

            </L.PrincipaForm>
        </L.PrincipalContainer>

    )
}

export default FormularioCadastro;