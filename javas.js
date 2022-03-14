operacion = prompt(
  `¿Que operacion va a realizar?
SUMA:1
RESTA:2
MULTIPLICACION:3
DIVISION:4
POTENCIA:5
RAIZ CUADRADA:6
RAIZ CUBICA:7`
);
operacion = parseInt(operacion);
if (operacion == 6 || operacion == 7) {
  num1 = prompt("Ingrese el numero");
  if (operacion == 6) {
    function raizcuadrada(num1) {
      resultado = Math.sqrt(num1);
      document.write(resultado);
    }
    raizcuadrada(num1);
  } else {
    function raizcubica(num1) {
      resultado = Math.cbrt(num1);
      document.write(resultado);
    }
    raizcubica(num1);
  }
} else if (
  operacion == 1 ||
  operacion == 2 ||
  operacion == 3 ||
  operacion == 4 ||
  operacion == 5
) {
  num1 = prompt("Ingrese el primer numero");
  num2 = prompt("Ingrese el segundo numero");
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  if (operacion == 1) {
    function suma(num1, num2) {
      resultado = num1 + num2;
      document.write(resultado);
    }
    suma(num1, num2);
  } else if (operacion == 2) {
    function resta(num1, num2) {
      resultado = num1 - num2;
      document.write(resultado);
    }
    resta(num1, num2);
  } else if (operacion == 3) {
    function multiplicacion(num1, num2) {
      resultado = num1 * num2;
      document.write(resultado);
    }
    multiplicacion(num1, num2);
  } else if (operacion == 4) {
    function division(num1, num2) {
      resultado = num1 / num2;
      document.write(resultado);
    }
    division(num1, num2);
  } else {
    function potencia(num1, num2) {
      resultado = num1 ** num2;
      document.write(resultado);
    }
    potencia(num1, num2);
  }
} else document.write("Erroducir la operacion");

// class celulares {
//   constructor(color, peso, rdp, rdc, ram) {
//     this.color = color;
//     this.peso = peso;
//     this.resoluciondepantalla = rdp;
//     this.resoluciondecamara = rdc;
//     this.ram = ram;
//     this.estado = "apagado";
//   }

//   info() {
//     document.write(`
//         Color: <b>${this.color}</b></br>
//         Peso: <b>${this.peso}</b></br>
//         Tamaño: <b>${this.resoluciondepantalla}</b></br>
//         Ram: <b>${this.ram}</b></br>
//         Camara: <b>${this.resoluciondecamara}</b><br>
//         `);
//   }

//   encendido() {
//     if (this.estado == "apagado") {
//       alert("El celular se esta prendiendo");
//       this.estado = "encendido";
//     } else {
//       alert("El celular se esta apagando");
//       this.estado = "apagado";
//     }
//   }

//   reiniciar() {
//     if (this.estado == "encendido") {
//       alert("El celular se esta reiniciando");
//     }
//   }
//   foto() {
//     alert("El celular esta tomando una foto");
//   }
//   video() {
//     alert("El celular esta grabando un video");
//   }
// }
// //mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm

// class altagama extends celulares {
//   constructor(color, peso, rdp, rdc, ram, extra) {
//     super(color, peso, rdp, rdc, ram);
//     this.camaraextra = extra;
//   }

//   camaralenta() {
//     alert("El celular esta grabando un video en camara lenta");
//   }

//   fotoextra() {
//     alert("El celuar esta tomando una foto con la camra extra");
//   }
//   recofacial() {
//     alert("Ejecutando el reconocimiento facial");
//   }

//   gamainfo() {
//     // console.log(this);
//     // const info = this.info();
//     // console.log({ info });
//     this.info();
//     document.write(`Camara extra: ${this.camaraextra}`);
//   }
// }

// // const cel1= new celulares("rojo","250gr",5,"40px","2gb")
// // const cel2= new celulares("verde","200gr",6,"30px","1gb")
// // const cel3= new celulares("negro","270gr",4,"50px","4gb")

// // cel1.info()
// // cel2.info()
// // cel3.info()

// const gama1 = new altagama("gris", "300gr", "7", "60px", "6gb", "30px");
// // const gama2=new altagama("azul","150gr","8","70px","8gb","50px")

// // // // gama1.encendido()
// // // gama1.foto()
// // // gama1.video()
// // // gama1.reiniciar()
// // // gama1.encendido()
// // // gama1.camaralenta()
// // // gama1.fotoextra()
// // // gama1.recofacial()

// gama1.gamainfo();
// // // gama2.gamainfo()

// // // class aplicaciones {
// // //     constructor(descargas,puntuacion,peso){
// // //         this.descargas=descargas
// // //         this.puntuacion=puntuacion
// // //         this.peso=peso
// // //         this.bajada="si"
// // //     }

// // //     instalacion(){
// // //         if(this.bajada=="si"){
// // //             alert("La app se esta instalando")
// // //             this.bajada="no"
// // //         }
// // //         else{
// // //             alert("La app se esta desinstalando")
// // //             this.bajada="si"
// // //         }
// // //     }
// // //     abrir(){
// // //         alert("La app se esta abriendo")
// // //     }
// // //     cerrar(){
// // //         alert("La app se esta cerrando")
// // //     }

// // //     info(){
// // //         document.write(`Cantidad de desscargas:<b>${this.descargas}</b><br>
// // //         Puntuacion:<b>${this.puntuacion}</b><br>
// // //         Peso:<b>${this.peso}</b><br>`)
// // //     }
// // // }

// // // const app1=new aplicaciones("150M",4,"300mb")

// // // app1.instalacion()
// // // app1.abrir()
// // // app1.cerrar()
// // // app1.instalacion()

// // // app1.info()
