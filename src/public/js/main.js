//conexion de los websocket
//io(); //ejecucion de la funcion io encargada de ver que cliente esta conectado al servidor

//cambiamos el codigo creando una variable que almacenara los datos para enviar mensajes o hacer algo con ellos
//encerramos la variable socket dentro de Jquery dada por "$"

//CONEXION DE SOCKETS DEL CLIENTE HOST , donde se envia el mensaje o HABLA
$(function()
{
    //alert("Funciona Jquery");//para que corroboar que ya tenemos Jquery
    const socket = io();

    //La variable Socket , ahora esta encargade de mantener la comunicacion bidireccional entre el server y host
    //sockets me permite enviar y recibir mensajes con comunicacion estable

    //Obteniendo los elemetos del DOM desde la interface

    //LLAMAMOS LO QUE CONTIENE LA ID , atravez de message-from , puedo obtener lo que contiene y darselo a Jquery para trabajar con el
    const $messageForm = $("#message-form");
    const $messageBox = $("#message");//obtenemos el mensaje y lo almacena en la variable
    const $chat = $("#chat");//obtiene chat y lo almacena en la variable
    //ahora tenemos las interfaces de nuestro chat , ahora devemos capturarlos eventos del formulario (barra input)

    $messageForm.submit ( e => 
        {
            e.preventDefault();//para que no se refresque a cada rato
            //$messageBox.val(); //obtener el mensaje de la caja de input
            socket.emit("send message",$messageBox.val());//captura el mensaje y envialo al socket mediante el NOMBRE de "send message"
            $messageBox.val("");//para volver a limpiar la caja de chat

        });


    socket.on("new message", function(data)
    {
        $chat.append(data +"<br/>");// los datos hablados por el servidor se agregaran ( append) a la parte de char
        //para que cada mensaje se ponga en una linea, utilizamos la funcion propia de salto dell lenguaje html (enter = br)

    })


} )

