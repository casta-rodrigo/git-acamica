//Declaración de variables
var nombreUsuario = 'mi nombre';
var contraseña = '9292';
var saldoCuenta = 15000;
var limiteExtraccion = 1000;
var agua = 350;
var luz = 425;
var internet = 210;
var telefono = 570;
var cuentaAmiga1 = '1234567';
var cuentaAmiga2 = '7654321';
var validacion = true;

function sumaSaldo(pesos){
    saldoCuenta += pesos;
}
function restaSaldo (pesos){
    saldoCuenta -= pesos;
}
function limiteSaldo (pesos){
    limiteExtraccion = pesos;
}
function restaServ (pesos){
    saldoCuenta -= pesos;
}
function restaTransf (pesos){
    saldoCuenta -= pesos;
}
function consultaAlUsuario (mensaje){  
    return prompt(mensaje);
}
/*function cancel(dato){
    if (isNaN(dato) || dato < 0){
        return;
    }
}*/

//Ejecución de las funciones que actualizan los valores de las variables en el HTML
iniciarSesion();
cargarNombreEnPantalla(nombreUsuario);
actualizarSaldoEnPantalla(saldoCuenta);
actualizarLimiteEnPantalla(limiteExtraccion);

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var limiteNew = consultaAlUsuario('Introduzca el nuevo limite de extraccion.');
    if (limiteNew === null){
        return;
    }
    else if (isNaN(limiteNew) || limiteNew === ''){
        alert('Por favor introduzca el monton en caracteres numericos.');
    }
    else{
        limiteSaldo( limiteNew);
        actualizarLimiteEnPantalla(limiteExtraccion);
        alert('Su nuevo limite de extraccion es: $' + limiteExtraccion);
    }
}

function extraerDinero() {
    var resta = consultaAlUsuario('Introduzca el monto que desea extraer.');
    if (resta === null){
        return;
    } 
    else if (resta === '' || isNaN(resta)){
        alert('Por favor introduzca el monto en caracteres numericos.');
    }
    else if (resta > saldoCuenta){
        alert('No dispone de saldo suficiente.');
    } 
    else if (resta >= limiteExtraccion){
        alert('No puede exceder el limite de extracción.')
    }
    else if (resta % 100 !== 0){
        alert('Solo se puede extraer billetes de $100.')
    }
    else{
        restaSaldo(resta);
        actualizarSaldoEnPantalla(saldoCuenta);
        alert('Usted ha retirado $ ' + resta);
        }
    }
 function depositarDinero() {
     if (validacion === true){
    var suma = consultaAlUsuario('Introduzca el monto que desea depositar.');
    var sumaFinal = parseInt(suma);
        if (suma === null){
            return;
        }
        else if (isNaN(sumaFinal) || sumaFinal === ''){
            alert('Por favor introduzca el monto en caraceres numericos.');
        }
        else{
        sumaSaldo(sumaFinal);
        actualizarSaldoEnPantalla(saldoCuenta);
        alert('Usted ha depositado: $' + sumaFinal,  '\nSu saldo anterior es de ');
        }
    }
    else{
        alert('Contraseña y/o usario incorrecto, las operaciones estan deshabilitadas.');
    }
}
    
function pagarServicio() {
    var servPay = prompt('Ingrese el servicio que quiere pagar\n 1 - Agua    $350\n 2 - Luz   $425 \n 3 - Internet   $210\n 4 - Telefono   $570');
    if ((saldoCuenta < agua || saldoCuenta < luz || saldoCuenta < internet || saldoCuenta < telefono) && servPay !== null){
        alert('No dispone de suficiente saldo para pagar el servicio seleccionado.')
    }
    else{
        switch (servPay){
            case '1':
            restaServ(agua);
            alert('Ha pagado el servicio Agua.\nSaldo anterior $15000\nMonto debitado $350\nSaldo actual ' + saldoCuenta);
            break;
            case '2':
            restaServ(luz);
            alert('Ha pagado el servicio Luz.\nSaldo anterior $15000\nMonto debitado $425\nSaldo actual ' + saldoCuenta);
            break;
            case '3':
            restaServ(internet);
            alert('Ha pagado el servicio Internet.\nSaldo anterior $15000\nMonto debitado $210\nSaldo actual ' + saldoCuenta);
            break;
            case '4':
            restaServ(telefono);
            alert('Ha pagado el servicio Telefono.\nSaldo anterior $15000\nMonto debitado $570\nSaldo actual ' + saldoCuenta);
            break;
            case null:
            break;
            default:
            alert('Servicio no encontrado, por favor intente de nuevo colocando el numero del servicio.');}
        }
        actualizarSaldoEnPantalla(saldoCuenta);
    }
        
function transferirDinero() {
     var transfInt = consultaAlUsuario('Introduzca el monto que desea transferir.');
     console.log(transfInt);
     if (transfInt === null){
         return;
     }
     else if (isNaN(transfInt) || transfInt === ''){
        alert('Por favor introduzca el monto en caracteres numericos');
        }
     else if (transfInt > saldoCuenta){
            alert('No dispone de suficiente saldo para realizar la transferencia.');
        }
     else{
            var userTransf = prompt('Introduzca el número de cuenta al que desea transferirle dinero.');
            console.log(userTransf);
        if ((userTransf != cuentaAmiga1) && (userTransf != cuentaAmiga2)){
                alert('Recuerde que solo puede transferir plata a cuentas amigas.');
            }
        else{
                restaTransf(transfInt);
                actualizarSaldoEnPantalla(saldoCuenta);
                alert('Se ha trnasferido $' + transfInt, 'a' + userTransf);
            }
            
            
        }
}
        
function iniciarSesion() {
    var username = prompt('Introduzca su nombre de usario.');
    var password = prompt('Introduzca su contraseña.');
        if (username != nombreUsuario || password != contraseña){
            alert('Usuario y/o contraseña incorrecta, recargue la pagina e intntelo de nuevo.');
            saldoCuenta = "";
            validacion = false;
        }
        actualizarSaldoEnPantalla();
    }
        
        //Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}
        
function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}
        
function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}
      