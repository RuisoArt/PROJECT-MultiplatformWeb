//Requiero el modulo Firmata para comunicarme con el arduino
const Board = require('firmata'); //una vez requerido se inicializara en una constante

/*
Ahora por medio de Board vamos a preguntar en que puerto se encuentra el Arduino
Se ejecutara una funcion que nos devolvera dos tipos de mensaje , un error o el puerto del Arduino
Si existe un error lo escribira en consola y saldremos de la funcion
Si no hay error dara el nombre del puerto a una nueva constante 

cuando la tarjeta ya este lista "ready" se ejecutara una funcion con las instrucciones para 
manejar la placa a nuestro antojo
*/
Board.requestPort
(
    function(err , port)
    {
        if(err)
        {
            console.log(err);
            return;
        }

        const board = new Board(port.comName);

        board.on("ready", function()
        {
            //void setup()

                board.pinMode(13 , board.MODES.OUTPUT); //configuro el pin como salida , entrega de voltaje

            //void loop()

                var led13 = true;

                setInterval(function()
                {
                    if(led13)
                    {
                        console.log("LED13 esta ensencido");
                        board.digitalWrite( 13, board.HIGH);
                    }
                    else
                    {
                        console.log("LED13 esta apagado");
                        board.digitalWrite( 13, board.LOW);
                    }

                    led13 = !led13;
                },1000);
            
            
        })
    }
)
