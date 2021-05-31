// Variables
var nombreCompleto = prompt("Ingrese su nombre");
var carrera = prompt("Ingrese su carrera");
var ramo1 = prompt("Ingrese el primer ramo (HTML)");
var ramo2 = prompt("Ingrese el segundo ramo (CSS)");
var ramo3 = prompt("Ingrese el tercer ramo (Javascript)");
var nota1R1 = parseInt(prompt("Ingrese nota uno de " + ramo1));
var nota2R1 = parseInt(prompt("Ingrese nota dos de " + ramo1));
var nota3R1 = parseInt(prompt("Ingrese nota tres de " + ramo1));
var nota1R2 = parseInt(prompt("Ingrese nota uno de " + ramo2));
var nota2R2 = parseInt(prompt("Ingrese nota dos de " + ramo2));
var nota3R2 = parseInt(prompt("Ingrese nota tres de " + ramo2));
var nota1R3 = parseInt(prompt("Ingrese nota uno de " + ramo3));
var nota2R3 = parseInt(prompt("Ingrese nota dos de " + ramo3));

var promedioR1 = ((nota1R1 + nota2R1 + nota3R1) / 3).toFixed(2);
var promedioR2 = ((nota1R2 + nota2R2 + nota3R2) / 3).toFixed(2);
var notaAprobacion = parseInt(prompt("Ingrese la nota de aprobacion")).toFixed(2);
var notaRequerida = (notaAprobacion * 3 - nota1R3 - nota2R3).toFixed();

// Inicio contenedor
document.write("<div class='container'>");

// Título y datos alumno
document.write("<h1>Notas Finales</h1>");
document.write("<div class='row'>");
document.write(
  "<div class='col-3 col-sm-2 col-lg-1 font-weight-bold'><p>Nombre:</p></div>"
);
document.write(
  "<div class='col-9 col-sm-8 col-lg-6'>" + nombreCompleto + "</div>"
);
document.write("</div>");
document.write("<div class='row'>");
document.write(
  "<div class='col-3 col-sm-2 col-lg-1 font-weight-bold'><p>Carrera:</p></div>"
);
document.write("<div class='col-9 col-sm-8 col-lg-6'>" + carrera + "</div>");
document.write("</div>");

// Creación tabla
document.write("<table class='table'>");
document.write("<thead class='thead-dark'>");
document.write("<tr>");
document.write("<th scope='col'>Ramo</th>");
document.write("<th scope='col'>Nota 1</th>");
document.write("<th scope='col'>Nota 2</th>");
document.write("<th scope='col'>Nota 3</th>");
document.write("<th scope='col'>Promedio</th>");
document.write("</tr>");
document.write("</thead>");
document.write("<tbody>");
document.write("<tr>");
document.write("<td scope='row'>" + ramo1 + "</td>");
document.write("<td>" + nota1R1 + "</td>");
document.write("<td>" + nota2R1 + "</td>");
document.write("<td>" + nota3R1 + "</td>");
document.write("<td>" + promedioR1 + "</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td scope='row'>" + ramo2 + "</td>");
document.write("<td>" + nota1R2 + "</td>");
document.write("<td>" + nota2R2 + "</td>");
document.write("<td>" + nota3R2 + "</td>");
document.write("<td>" + promedioR2 + "</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td scope='row'>" + ramo3 + "</td>");
document.write("<td>" + nota1R3 + "</td>");
document.write("<td>" + nota2R3 + "</td>");
document.write("<td>-</td>");
document.write("<td>-</td>");
document.write("</tr>");
document.write("</tbody>");
document.write("</table>");

// Nota requerida
document.write("<div class='row'>");
document.write("<div class='col'>");
document.write(
  "<p>Para aprobar el ramo JavaScript con nota " + notaAprobacion + ", necesita obtener un " + notaRequerida + " en la nota 3. </p>");
document.write("</div>");
document.write("</div>");

// Cierre contenedor
document.write("</div>");

