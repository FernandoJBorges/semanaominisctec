import React, {useState} from 'react';
import './styles.css';
import {FiArrowLeft} from 'react-icons/fi';
import {Link, useHistory} from 'react-router-dom';
import logoImg from '../assets/logo.png'
import DynamicSelect from '../components/DynamicSelect';
import ufData from '../components/UfData';
import cityData from '../components/cityDate';
import api from '../../services/api'

 const  Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');
    const history = useHistory();
   
    function handleSelectChangeUFs (selectedValue){
      setUf(selectedValue) 
    }

    function handleSelectChangeCity (selectedValue){
        setCity(selectedValue) 
    }

    async function handleRegister (evemt) {
        evemt.preventDefault();
        const data = {name,email,whatsapp,city,uf};
        try{
            await api.post('/ongs',data);
            history.push('/');   
        }catch(e){
            alert("erro ao cadastrar usuario")
        }
   }

    return (
        <div className="register-containner">
             <div className="content">
                <section>
                    <img src={logoImg} alt="logo"></img>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro e concora a milhoes de checkbacks</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={20} color="#E61A27" />
                        Login
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                        <input placeholder="Nome" 
                                value={name} 
                                onChange={e => setName(e.target.value)} 
                                />
                        <input type="email" placeholder="E-mail" 
                                value={email} 
                                onChange={e => setEmail(e.target.value)} 
                                />
                        <input placeholder="Whatsapp" 
                                value={whatsapp} 
                                onChange={e => setWhatsapp(e.target.value)} 
                                />
                        <div className="input-group">
                            <DynamicSelect arrayOfData={cityData} onSelectChange={handleSelectChangeCity} label={"sua cidade"} />
                            <DynamicSelect arrayOfData={ufData} onSelectChange={handleSelectChangeUFs}  label={"sua UF"}/>
                        </div>
                        <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
     );
}
export default Register;