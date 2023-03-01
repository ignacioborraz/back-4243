const controller = {

    read_all: (req,res) => { /* funcion que se va a ejecutar cada vez que se llame al endpoint */
        //console.log(req)
        return res
            .status(200) /* 200: exito para la lectura */
            .send('aca deberias ver todas las categorias') /* send envía mensajes al cliente */
    }

}

export default controller