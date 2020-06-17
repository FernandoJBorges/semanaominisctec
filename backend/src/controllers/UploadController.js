const connection = require('../database/connection');

module.exports = {
    async upload(request,response){
        const file =  request.file;
        console.log(file)
       /** cria no banco ou joga em um diretorio ne.. **/
        if(!ongs){
            return response.status(400).json({error: 'No ONG found whith id:'});
        }
        return response.send(200).end();
    }
}