const hasMutation = require('../helpers/Hasmutation')

require('dotenv').config()

class Controller {

    async mutantVerifier(req, res){
        const general = req.body;
          
        let result = hasMutation(general); 

        if(result){
            return res.status(200).send(result);
        }else{
            return res.status(403).send(result) 
        }
    }
}

module.exports = new Controller();


