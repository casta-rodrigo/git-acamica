//Declaración de variables
var nombreUsuario = 'mi nombre';
var contraseña = '9292';
var saldoCuenta = 15000;
var limiteExtraccion = 1000;
var agua = 350;
var luz = 425;
var internet = 210;
var telefono = 570;
var armandoParedes = '1234567';
var luzClaraDeLaCalle = '7654321';

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

//Ejecución de las funciones que actualizan los valores de las variables en el HTML
iniciarSesion();
cargarNombreEnPantalla(nombreUsuario);
actualizarSaldoEnPantalla(saldoCuenta);
actualizarLimiteEnPantalla(limiteExtraccion);

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var limite = prompt('Introduzca el nuevo limite. ');
    var limiteNew = parseInt(limite);
    limiteSaldo(limiteNew);
    actualizarLimiteEnPantalla(limiteExtraccion);
    alert('Su nuevo limite de extraccion es: $' + limiteExtraccion);
}

function extraerDinero() {
    var extr = prompt('Introduzca la cantidad de dinero que quiere extraer. ');
    var resta = parseInt(extr);
    if (resta > saldoCuenta){
        alert('No dispone de saldo suficiente.');
    } 
    else if (resta > limiteExtraccion){
        alert('No puede exceder el limite de extracción.')
    }
    else if (resta % 100 !== 0){
        alert('Solo se puede extraer billetes de $100.')
    }
    else{
        restaSaldo(resta);
        actualizarSaldoEnPantalla(saldoCuenta);
        alert('Usted ha retirado $ ' + resta);}
    }
    function depositarDinero() {
        var monto = prompt('Por favor introduzca la suma a depositar.');
        var suma = parseInt(monto );
        sumaSaldo(suma);
        actualizarSaldoEnPantalla(saldoCuenta);
        alert('Usted ha depositado: $' + suma,  '\nSu saldo anterior es de ');
    }
    
    function pagarServicio() {
        var servPay = prompt('Ingrese el servicio que quiere pagar\n 1 - Agua    $350\n 2 - Luz   $425 \n 3 - Internet   $210\n 4 - Telefono   $570');
        if ((saldoCuenta < agua) || (saldoCuenta < luz) || (saldoCuenta < internet) || (saldoCuenta < telefono)){
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
                default:
                alert('Servicio no encontrado, por favor intente de nuevo colocando el numero del servicio.');}
            }
            actualizarSaldoEnPantalla(saldoCuenta);
        }
        
        function transferirDinero() {
            var montoTransf = prompt('Introduzca el monto que desea transferir.');
            var transfInt = parseInt(montoTransf);
            if (transfInt > saldoCuenta){
                alert('No dispone de suficiente saldo para realizar la transferencia.');
            }
            else if ( transfInt <= saldoCuenta){
                var userTransf = prompt('Introduzca el número de cuenta al que desea transferirle dinero.');
                if ((userTransf != armandoParedes) && (userTransf != luzClaraDeLaCalle)){
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
            var username = prompt('Introduzca su nombre de uario.');
            var password = prompt('Introduzca su contraseña.');
            if ((username != nombreUsuario) || (password != contraseña)){
                alert('Usuario y/o contraseña incorrecta, recargue la pagina e intntelo de nuevo.');
                saldoCuenta = 0;
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
        
        