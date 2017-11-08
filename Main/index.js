const express           = require('express');
const router            = express.Router();
const DatabaseConnector = require('../lib/DatabaseConnector');
const path              = require('path');


router.get('/', (req,res)=>{

		res.sendFile( path.join( __dirname , "public/pagianPrincipal.html" ) );
		
})




router.get('/insertarUsuario',(req,res)=>{
		
	var conn = DatabaseConnector.getDatabaseConnection();
	
	var usuario  ="Hola";
	var passw    ="Hola";
	var email    ="Hola@itesm.mx";
	
	
	conn.insertUsuario('usuarios',{nombre:usuario, password: passw, mail:email});
	conn.close();
	
	 res.redirect('/Main');
	
});


module.exports = router;