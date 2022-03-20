//Este archivo tendra todo el codigo del proyecto

/*
 Lo primero que debemos tener en claro es que un chat no es 
una conexion entre dos personas o una persona y varias , si no que un chat 
se basa en la conexion entre clientes y servidores , como toda internet
, es decir , que en vez que una persona le envie un mensaje directamente a
otra persona , este mensaje primero pasa de una persona al servidor y este servidor 
ya retransmite este mensaje al cliente receptor. De la misma manera , si una
persona quiere enviar un mensaje a varias personas , el mensaje parte desde el host
del cliente que lo envia , va hacia el servidor , y este reparte el mensaje a los 
diferentes host receptores del mensaje o clientes distinatarios.

El primer paso es enviar una aplicacion html , pues es en base a esta por donde se comunicaran
los diferentes host. Creando un servidor basico
*/

/*
lo primero sera crear la configuracion de nuestro proyecto
Las cual contiene las diferentes dependencias y configuraciones de nuestro servidor 
para esto en consola escribimos "npm init" o "npm init --yes" , el primero nosotros 
le damos parametros , en el segundo obtenemos la configuracion estandar del proyecto
luego la podemos modificar en un IDE . Se generara en nuestra carpeta de nuestro 
proyecto un codigo titulado "package.json".

(la creacion de npm init se con cmd ubicado en la carpeta del proyecto)
*/

/*
Aparte del archivo de configuracion , nuestro programa utilizara dependencias
o modulos con los que va a trabajar
La primera es express la cual nos permite generar servidores en NodeJs de
manera mas optimizada y rapida , es decir , disminulle la cantidad de lineas 
de codigo que vamos a utilizar.Creadndo asi una forma mas sencilla para crear nuestro 
servidor, pues , si escribieramos en Java Script puro , tendriamos que escribir una 
y otra vez , ciertas lineas de comando que bien nos podemoa ahorrar con el uso de 
una bibllioteca o framework; es por este motivo que utilizamos express.
Para esto en la misma consola utilizamos el comando "npm install express"
vale tambien escribir "npm i express" donde i tambien es leida como el comando install

*/
const http = require("http");
const path = require("path"); //para solicitar directorios de otras carpetas
const colors = require("colors");
const express = require("express"); //requerimos el modulo de express
const socketio = require("socket.io");

const app = express(); //ejecutamos express , nos devolvera toda la funcionalidad de un servidor , la cual la guardaremos en una constante llamada app

const server = http.createServer(app);
const io = socketio.listen(server);
//debido a que los websockets deben crearse sobre un servidor , primero lo creamos de maner primitiva en Nodejs con su modulo "http"

require("./sockets")(io); // importamos la funcion io de sockets.js

//app.use(express.static("public"));//archivo estatico sin path
app.use(express.static(path.join(__dirname,"public")));//con join , independientemente si es linux o windows , hallara la ruta de la carpeta public y mostrara el archivo html que encuentra ahi

/*
Para decirle a nuestr o servidor que debe mostrar apenas alguien se conecte a 
nuestr aplicacion web, debemos crear eso que queremos mostrar

creamos en nuestro carpeta un nuevo folder que llamaremos public en el almacenaremos la interfaz 
en HTML que queremos que ejecute y la llamaremos index.html ( no se porque pitas no recibe otro puto nombre)
*/

/*
cuando Queramos llevar nuestra aplicacion a un servidor web o otra instancia,
es comun que estos sitios ya asignen un puerto para que nuestra aplicacion funcione
por este motivo no podemos asignarle siempre el puerto que nosotros queramos a 
aplicacion , para esto le diremos al codigo que asigne el puerto que el servidor 
crea conveniente y si no nos lo da , ahora si nosotros le daremos un puerto personalizado

De esto:

server.listen(3000 , function(){console.log("Server en puerto 3000".bgCyan)});

Pasa a :



*/

app.set("port",process.env.PORT || 3000);
//de nuestro servidor dado en express lo configuramos, diciendole que busque e puerto en el entorno y si no lo enuentr asigne el personalizado

server.listen(app.get("port") , function(){console.log("Server en puerto 3000".bgCyan)});
/*
metodo listen se encarga de quedar escuchando algun servidor en algun puerto de nuestra computadora
El puerto que designemos en nuestra computadora sera la puerta de enlace que tendra la funcionalidad de ser nuestro servidor
creamos una funcion ademas de de declarar el puerto , esta funcion se encarga de que
una vez ejecutemos el puerto muestre a su vez un mensaje por consola de color cyan.


Hay tres formas de escrivir la lamada del servidor y son exactamente iguales

app.listen(3000 , function(){console.log("Server en puerto 3000".bgCyan)});
app.listen(3000 , () =>{console.log("Server en puerto 3000".bgCyan)});

Las diferencias radican en la actualizacion de 
la declaracion de una funcion en JavaScript
*/

/*
Para que el chat funcione en tiempo real utilizamos los websockets

Cuando nosotros escribimos una aplicacion web , obtenemos la propiedad de que
estas son esteriles , pues normalmente un servidor recibe un dato de un host pero 
esta comunicacion solo se mantiene cuando se esta dado el mensaje , de resto la comunicacion 
no se mantiene, SIN EMBARGO DATOEBA MAYBE y no se que mas putas, un chat si necesita mantener
esta conexion entre el servidor y el host , pues no se sabe en que momento se enviara
un mensaje por parte del host , para establecer esta conexion fija , utilizamos los
websockets.
 installamos el modulo de Nodejs paara sockets

 npm install socket.io  

 en  cmd de Windows el cual nos permitira hacer la conexion en tiempo real

*/

/*
Con el fin de facilitar la creacion de este proyecto a medida que lo voy programando
y no estar cerrando y reiniciando el servidor cada vez que haga un cambio
instalare la dependencia de NODEMON la cual reiniciar el servidor por mi , cada vez que yo 
realice algun cambio en el codigo 

para esto instalo en la misma carpeta con 
"npm install nodemon -D" 
, el modo de desarrollo esclarifico que esta dependencia o modulo solo es importante 
para el desarrollo del pryecto y no para que este mismo  funcione , por lo que no se 
pondra en las configuraciones de package.json como modulo importante que descargar
para que funcione.

Luego me debo remitir a mi configuracion "package.json" y cambiar el script
en el daremos la funcion de ejeccion del programa a nodemon con objeto clave:valor

"start":"nodemon src/index.js"

lo cual en consola solo debemos ejecutar una sola vez npm start

*/