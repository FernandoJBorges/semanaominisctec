import React, {useState} from 'react';
import {FiLogIn} from 'react-icons/fi';
import './styles.css';
import logoImg from '../assets/logo.png'
import {Link, useHistory} from 'react-router-dom';
import api from '../../services/api';

const Login = () => {

const [id, setId] = useState('');

const history = useHistory();

async function submitLogin (e) {
    e.preventDefault();  
    try{
        const response = await api.post('http://localhost:3333/sessions',{id});
        localStorage.setItem('ongId',id);
        localStorage.setItem('ongName',response.data.name);  
        history.push('/profile');
    }catch(e){
        alert(e)
    } 
}
return (
        <div className="login-containner">
            <section>
                <img src={logoImg} alt="logo"></img>
                <form onSubmit={submitLogin}>
                    <h1>Faça seu Logon</h1>
                    <input placeholder="Seu ID" value={id} onChange={e=> setId(e.target.value)} />
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#e02041" />
                            Não tenho cadastro
                    </Link>
                </form>
            </section>
       
        </div>
      );
}
export default Login;