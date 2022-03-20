//Metodo para mi contraseña y credenciales por aparte al htl principal , asi no se ven por navegador
//Nota: hacer un puzzle para las credenciales de ingreso
function usrpas()
{
	if (document.form1.txt.value=="GUI" && document.form1.num.value=="159951" ||
	    document.form1.txt.value=="Transmision" && document.form1.num.value=="159951" ||
	    document.form1.txt.value=="Creator" && document.form1.num.value=="159951" ||
	    document.form1.txt.value=="Estudiante" && document.form1.num.value=="159951")
		{
			//<a href="./htmlChat/Chat.html"></a>
            //window.location="./htmlChat/Chat.html"
            window.location="acces.html"
		}
	 
	else 
		{
			alert("ERROR \n Este es un chat PRIVADO \n Si está intentando acceder sin conocer las credenciales correctas \n Absténgase por su bien de seguir intentando.")
		}
}
document.oncontextmenu=new Function("return false");