const crypto = require("crypto");
const connection = require('../database/connection');
const config = require('../utils/sendMail');

module.exports = {

    async get(request,response){
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },

    async create(request,response)
    {
       const {name, email, whatsapp, city, uf} =  request.body;
       const id = crypto.randomBytes(4).toString('HEX');
       await connection('ongs').insert({
            id, 
            name, 
            email, 
            whatsapp, 
            city, 
            uf
        })

        const message = {
            from: email,
            to: email,
            subject: "ProllMed",
            text : "Usuario Criado com sucesso: " + id,
        }
        
        config.sendMail(message,(error,info)=>{
            if(error){
                console.log('erro ao enviar email');
            }
        });
     
        return response.json({id});
    }
};