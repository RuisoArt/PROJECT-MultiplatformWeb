//acepta la conexion de web socket
// es ete codigo manejaremos la recepcion y envio de informacion para no perjudicar index.js
//independizamos la tarea de los sockets de la clase principal

//clase sockets

//Funcion o Metodo que exportremos a index para que tenga los sockets
//Metodo encargado de decirnos si hay un nuevo usuario en consola

//CONEXION DEL SOCKET DEL SERVIDOR , DONDE SE ESCUCHA EL MENSAJE

module.exports = function(io)
{
    io.on("connection",socket => 
    {
        console.log("New User in server".bgMagenta)

        socket.on("send message", function(data)
        {
            //console.log(data);
            io.sockets.emit("new message",data);//coje los datos recibidos y se los reenvia a todos AHORA EL SERVIDOR HABLA
            //Como el servidor habla con el nombre new message , el cliente debe estar preparado para ESCVUCHAR
        });
    });
    //podria añadirle un contador para ver la cantidad de usuarios que se han conectado

   

}


// => o funcion flecha 