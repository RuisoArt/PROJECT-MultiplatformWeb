//Hola Mundo en hardware (Enscender un LED CTM :v)

void setup()
{
  //se configuran los pines de arduino
  // put your setup code here, to run once:

  //LED 1 en pin 13
  pinMode(13, OUTPUT); //este pin sera una salida

}

void loop()
{
  //Operaciones
  // put your main code here, to run repeatedly:

  digitalWrite(13, HIGH);
  delay(1000);
  digitalWrite(13,LOW);
  delay(1000);

}

/*
este codigo es el lenguaje C con el que biene automaticamente 
Arduino para poderse configurar , sin embargo el ideal del
proyecto es poder manejar Nuestro Arduino con el lenguaje de
programacion JavaScript.

La placa de Arduino no sabe leer codigo de JavaScript, por lo que es necesario
hacer uso de un protocolo que haga de intermediario de traductor entre el
Lenguaje de programacion y la Placa de Arduino. De esta manera manejaremos
el MCU de Arduino con comando JavaScript.

El protocolo que vamos autilizar se llama FIRMATA, similar a MIDI y muchos otros.
Para flashear la memoria del Arduino con Firmata basta con dirijirnos al IDE de 
Arduino entrar a Archivo/Ejemplos/Firmata/standardFirmata lo que nos abrira el protocolo
el cual subiremos a la placa de Arduino para poderla manejar con JavaScript. Este 
proyecto se hace con la version 1.8.12 del IDE de Arduino.

Tambien existe otra manera de flashear la memoria de Arduino mediante NodeJs,
para eso creamos el archivo raiz del programa () y utilizamos el paquete de NodeJs
llamado "firmata-party". Para instalarlo , en la misma carpeta donde se esta 
trabajando el proyecto, se escribe por consola el comando "npm install firmata-party".

--Sigo con el flasheo de Arduino.

Una vez flasheada la placa de Arduino necesitamos el protocolo como tal , el cual es 
aquel que nos permitira "hablar" con la placa mediante otro lenguaje de programacion.
Para esto vamos a utilizar la biblioteca de Firmata con "npm install firmata" la cual
es un paquete de NodeJs y se instala escribiendo el comando en consola e instalando 
dentro de la carpeta del proyecto.



*/
