import React from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { startLogin, startRegister } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
import './login.css';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [formLoginValues, handleLoginInputChange] = useForm({
        lEmail: 'diegoale20@outlook.es',
        lPassword: '12345678'
    });

    const [formRegisterValues, handleRegisterInputChange] = useForm({
        rName: 'Alejandro',
        rEmail: 'diegoale18@outlook.es',
        rPassword1: '1234567890',
        rPassword2: '1234567890',
    });

    const { lEmail, lPassword } = formLoginValues;

    const { rName, rEmail, rPassword1, rPassword2 } = formRegisterValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLogin(lEmail, lPassword));
    }

    const handleRegister = (e) => {
        e.preventDefault();
        if (rPassword1 !== rPassword2) {
            Swal.fire('Error', 'Las contraseñas deben de ser iguales', 'error');
            return;
        }
        dispatch(startRegister(rEmail, rPassword2, rName));
    }

    return (
        <div className="container login-container">
            <div className="row justify-content-around">
                <div className="col-md-5 login-form-1">
                    <div className="col-md-12">
                        <h3>Ingreso</h3>
                        <form onSubmit={handleLogin}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Correo"
                                    name="lEmail"
                                    value={lEmail}
                                    onChange={handleLoginInputChange}
                                />
                            </div>
                            <br />
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Contraseña"
                                    name="lPassword"
                                    value={lPassword}
                                    onChange={handleLoginInputChange}
                                />
                            </div>
                            <br />
                            <div className="form-group">
                                <input
                                    type="submit"
                                    className="btnSubmit"
                                    value="Login"
                                />
                            </div>
                        </form>
                    </div>

                </div>

                <div className="col-md-5 login-form-2">
                    <div className="col-md-12">
                        <h3>Registro</h3>
                        <form onSubmit={handleRegister}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre"
                                    name="rName"
                                    value={rName}
                                    onChange={handleRegisterInputChange}
                                />
                            </div>
                            <br />
                            <div className="form-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Correo"
                                    name="rEmail"
                                    value={rEmail}
                                    onChange={handleRegisterInputChange}
                                />
                            </div>
                            <br />
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Contraseña"
                                    name="rPassword1"
                                    value={rPassword1}
                                    onChange={handleRegisterInputChange}
                                />
                            </div>
                            <br />
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Repita la contraseña"
                                    name="rPassword2"
                                    value={rPassword2}
                                    onChange={handleRegisterInputChange}
                                />
                            </div>
                            <br />
                            <div className="form-group">
                                <input
                                    type="submit"
                                    className="btnSubmit"
                                    value="Crear cuenta" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}