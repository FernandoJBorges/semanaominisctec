const connection = require('../database/connection');

module.exports = {
    async create(request,response){
        const {id} =  request.body;
        console.log(id)
        const ongs = await connection('ongs')
                            .where('id', id)
                            .select('name')
                            .first();
        if(!ongs){
            return response.status(400).json({error: 'No ONG found whith id:'});
        }
      return response.json(ongs);
    }
}