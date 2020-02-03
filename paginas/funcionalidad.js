

var boton = document.getElementById("botoncito");

boton.addEventListener("click", dibujarPorClick);

 function dibujarPorClick()
 {
   var primer_periodo = document.getElementById("texto_notas1");
   var primer_nota = primer_periodo.value;
   var segundo_periodo = document.getElementById("texto_notas2");
   var segundo_nota = segundo_periodo.value;
   var porcentaje_primer_segundo_periodo = 30;
   var porcentaje1;
   var porcentaje2;
   var minima = 3.2;
   var nota_final;
   var definitiva;
   if (primer_periodo)
   {
     definitiva = minima - ((primer_nota * porcentaje_primer_segundo_periodo + segundo_nota * porcentaje_primer_segundo_periodo) / 100);
   }
   if (definitiva)
   {
     nota_final = (definitiva * 100) / 40
   }

   alert("En el tercer periodo debes sacar " + nota_final);

 }
