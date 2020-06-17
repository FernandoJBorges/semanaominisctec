import React, {useEffect, useState} from 'react';
import {FiPower} from 'react-icons/fi';
import {FiTrash2} from 'react-icons/fi';
import './styles.css';
import logoImg from '../assets/logo.png'
import {Link, useHistory} from 'react-router-dom';
import api from '../../services/api';

const Profile = () => {
    const ongId =  localStorage.getItem('ongId'); 
    const ongName =  localStorage.getItem('ongName'); 
    const [profiles, setProfiles] =  useState([]); 
    const history = useHistory();
   useEffect(() => {
        api.get('/profile',{
            headers: {
                Authorization: ongId,
            }
        }).then(response=> {
            console.log(response.data)
            setProfiles(response.data);
        })

    }, [ongId]);

    async function handlerDelete (id) {
        try{
        await api.delete(`/incidents/${id}`,{
                headers: {
                    Authorization: ongId,
                }
            });
        setProfiles(profiles.filter(e => e.id !== id));
        }catch(e){
            alert(e)
        } 
    }
    function handlerLogout (id) {
       localStorage.clear();
       history.push('/');
    }
    return (
        <div className="profile-containner">
            <header>
                <img src={logoImg} alt="logo"></img>
                <span>Bem vindo!! {ongName}</span>
                <Link to="/incidents/new" style={{padding:10}}>
                    Cadastrar novo caso
                </Link>
                <button className="button" type="button" onClick={handlerLogout}>
                    <FiPower size={16} color="#E61A27" />
                </button>
            </header>
            <h1>Solicitação de Exames</h1>
            <ul>
               {profiles.map(profile =>(
                    <li>
                    <strong>Exame:</strong>
                    <p>{profile.title}</p>
                    
                    <strong>Descrição</strong>
                    <p>{profile.description}</p>
                    
                    <strong>Arquivo</strong>
                    {
                    Intl.NumberFormat('pt-BR',{
                        style: 'currency',
                        currency:'BRL'
                    }).format(profile.value)
                    }
                    <button type="button" onClick={() => handlerDelete(profile.id)}>
                         <FiTrash2 size={20} color="#E61A27" />
                    </button>
                </li>   
               ))}              
            </ul>
        </div>
      );
}
export default Profile;