let salsa = true
let nom = ""
let ed = 0
let cantidad;
let op_2 = 0
let op_alumno = 0
let reporte_opcion = 0
let alumno_reportado = 0
let info_reporte = ""
let date = ""
let acta_reporte = ""
let ver_alumnos_reportados = 0
let cantidad_de_reportes = ""
let reporte_individual = 0
let alumno_reportado_especifico
let alumno_reportado_especifico_individual
let indice_alumno_eliminado



class Alumno {
    constructor(nombre, edad) { // creamos la clase constructora de alumnos pidiendoles edad y apellido
      this.nombre = nombre;
      this.edad = edad;
    }
  }

class reportes {

     constructor(indice,reporte,fecha){  //construccion de reportes
          this.indice = indice
          this.reporte = reporte
          this.fecha = fecha
           

     }
}
  
const alumnos = []; //guardamos los alumnos que vayamos creando
const report = [];  //archivo de reportes



function invalido(){
     alert("opcion invalida")
}

while (salsa === true){
     let op = parseInt(prompt("1.agregar alumno, 2.ver alumnos, 3.Eliminar alumno,4.alumnos reportados "))//opcion principal
     if (op === 1){
         nom = prompt("introduce nombre") //pedimos nombre
         ed = parseInt(prompt("introducir edad"))//pedimos edad
         
         const alumno = new Alumno(nom,ed)
         alumnos.push(alumno)//guardamos el alumno en el array alumnos

     }
    
     else if (op === 2){

          op_2 = parseInt(prompt("1.Ver Todos los alumnos, 2.Ver un alumno")) //ver uno o mas alumnos
          
          if (op_2 === 1){ //ver todos los alumnos
             cantidad = alumnos.length
             for(i = 0; i < cantidad;i++){ 
              alert((i + 1) + "." + " nombre: " + alumnos[i].nombre + "\n" + "    edad: " + alumnos[i].edad) //mostramos todos los alumnos
          }
          }else if (op_2 === 2){//ver un alumno en particular
               op_alumno = parseInt(prompt("Ingrese numero de lista del alumno"))
               alumno_especifico = op_alumno - 1 //le decimos que reste uno ya que los numeros que aparecen en el frontend no son realmente su indice de array
               alert(op_alumno + "." + "nombre: " + alumnos[alumno_especifico].nombre + "\n" + "    edad: " +  alumnos[alumno_especifico].edad )//le decimos que la resta de 1 - opcion op_alumno es el indice al que queremos acceder
          }}
     else if(op === 3){ //opcion de eliminar alumno
          alumn_out = parseInt(prompt("Numero de lista del alumno"))
          indice_borrar = alumn_out - 1
          alumnos.splice(indice_borrar,1) //borramos el alumno
          const buscado = report.find(item => item.indice === alumn_out) //buscamos el reporte que tenga el item.indice valor alumn_out
          indice_alumno_eliminado = report.indexOf(buscado) //buscamos el indice en el que se encuentra el item.indice en report 
          report.splice(indice_alumno_eliminado,1) //eliminamos reporte
     
     }
          

     else if (op === 4){ //opciones de reportes de alumnos
          
          reporte_opcion = parseInt(prompt("1.Crear reporte, 2.ver alumnos reportados"))

          switch (reporte_opcion){
             //creado de reportes
             case(1)://pedimos todos los datos del alumno para el reporte
               alumno_reportado = parseInt(prompt("Ingrese numero de lista del alumno a ser reportado")) 
               info_reporte = prompt("Escriba un breve texto de la causa del reporte")
               date = new Date()
               
               const acta_reporte = new reportes(alumno_reportado,info_reporte,date) //creamos el reporte usando la clase report
               report.push(acta_reporte) //agregamos el reporte al array report
               
               break;     
             //acceder a los reportes
             case(2): 
                   ver_alumnos_reportados = parseInt(prompt("1.Ver todos los alumnos reportados 2.ver reporte individual"))
                   switch(ver_alumnos_reportados){ 
                     case (1): //ver todos los alumnos reportados
                        cantidad_de_reportes = report.length
                        
                        for(i = 0; i < cantidad_de_reportes; i++){
                         alumno_reportado_especifico_individual = alumnos[i]
                         alert(report[i].indice + "." + alumno_reportado_especifico_individual.nombre + "\n" + "Edad: " + alumno_reportado_especifico_individual.edad + "\n" + "Reporte: " + report[i].reporte + "\n" + "fecha del reporte: " + report[i].fecha)
                         //accedemos a los reportes llamandolos por el indice y especificando que parte de la clase armada en ese indice queremos llamar                                 
                          }
                        break;
                     case (2)://ver alumno reportado individual
                        reporte_individual = parseInt(prompt("Ingrese numero de lista del alumno reportado"))
                        const buscado = report.find(item => item.indice === reporte_individual) //lo buscamos por el indice accediendo a la clase report
                        alumno_reportado_especifico = alumnos[reporte_individual - 1]
                        if (buscado){ //le decimos que si encuentra un irem.indice del valor especificado por el prompt - 1 muestre en un alert el alumno reportado
                        alert(buscado.indice + "." + "Nombre: " + alumno_reportado_especifico.nombre + "\n" + "edad: " + alumno_reportado_especifico.edad + "\n" + "reporte: " + buscado.reporte + "\n" + "fecha: " + buscado.fecha)
                        }


                        break;
                     default:
                       alert(invalido())
                      }
                   break;
             default:
               alert(invalido())
          }}}