import React , {useState} from 'react';
import './styles.css';
import {FiArrowLeft} from 'react-icons/fi';
import {Link, useHistory} from 'react-router-dom';
import logoImg from '../assets/logo.png'

import DynamicSelect from '../components/DynamicSelect';
import exameData from '../components/exameData';

import api from '../../services/api'

const Incidents = () => {

    const ongId =  localStorage.getItem('ongId'); 
    const history = useHistory();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setvValue] = useState('');

    
    function handleSelectChange(selectedValue){
        setTitle(selectedValue) 
      }

    async function handleIncidents (evemt) {
        evemt.preventDefault();
        const data = {title,description,value};
        try{
            console.log(data);
            await api.post('/incidents',data,{
                headers: {
                    Authorization: ongId,
                }
            })
            history.push('/profile');   
        }catch(e){
            alert(e)
        }
   }

    return (
        <div className="incidents-containner">
             <div className="content">
                <section>
                    <img src={logoImg} alt="logo"></img>
                    <h1>Exame - Solicitação</h1>
                    <p>Faça o upload de seu arquivo aqui.</p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={20} color="#E61A27" />
                        Lista de casos reportados
                    </Link>
                </section>
                <form onSubmit={handleIncidents}>
                    <DynamicSelect arrayOfData={exameData} onSelectChange={handleSelectChange} label={"seu exama"} />
                    <textarea placeholder="Descição"  value={description} onChange={e => setDescription(e.target.value)} />
                    <input id="file" type="file" required multiple />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
     );
}
export default Incidents;