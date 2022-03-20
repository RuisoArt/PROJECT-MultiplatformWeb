module.exports = function(ioChat)
{
    ioChat.on("connection",socketChat => {console.log("New User in Chat".bgYellow)});
    //podria añadirle un contador para ver la cantidad de usuarios que se han conectado
}