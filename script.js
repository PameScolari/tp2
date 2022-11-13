const valorTicket = 200;
const descuentoEstudiante = 0.80;
const descuentoTrainee = 0.50;
const descuentoJunior= 0.15;

const cantidad = document.getElementById('cantidad');
const categoria = document.getElementById('CategoriaSelect');
const botoncalcular = document.getElementById('Calcular');
const botonreset = document.getElementById('Reset');
const p = document.querySelector('p');



function totalPagar(){


let totalValor = (cantidad.value) * valorTicket;

if (categoria.value ==1){
    totalValor = totalValor - (totalValor * descuentoEstudiante);
}else if (categoria.value ==2){
    totalValor = totalValor - (totalValor * descuentoTrainee);
}else if (categoria.value ==3){
    totalValor = totalValor - (totalValor * descuentoJunior)
}

p.innerHTML = `Total a pagar : ${totalValor}`;
}
botoncalcular.addEventListener('click',totalPagar);

botonreset.addEventListener ('click',()=>{
    p.textContent= 'Total a pagar : ';});






