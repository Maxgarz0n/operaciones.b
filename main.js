//AREA DEL CIRCULO
function areaCirculo(radio, area) {
    var area;
    var radio = prompt("Ingresa el valor del radio");
    const pi=3.1416;
    area = 3.1416*(radio**2);
    alert("El area es: " +area);
    return area;
}
//AREA DEL TRIÁNGULO
function areaTriangulo(area, base, altura){
    var base=prompt("Ingresa la medida de la base: ");
    var altura=prompt("Ingresa la medida de la altura: ");
    var area= (base*altura)/2;
    alert("El area de este triangulo es: "+ area);
    return area;
}
//AREA TRAPECIO
function areaTrapecio(area, basemayor, basemenor, altura) {
    var basemayor=prompt("Ingresa la medida de la base mayor");
    var basemenor=prompt("Ingresa la medida de la base menor");
    var altura=prompt("Ingresa cuanto es la altura del trapecio");
    var area=(basemayor*basemenor)*(altura)/2;
    alert("El area de este trapecio es: " +area)
    return area;
}
//VOLUMEN CILINDRO
function volumenCilindro(pi, radio, altura, volumen){
    //const pi=3.1416;
    var radio=prompt("Ingresa el valor del radio: ");
    var altura=prompt("Ingresa la medida de la altura del cilindro: ");
    var volumen=3.1416*(radio**2)*altura;
    alert("El volumen de este cilindro es: " + volumen);
    return volumen;
}
//VOLUMEN ESFERA
function volumenEsfera(radio, volumen, pi) {
    var radio=prompt("Ingresa la medida del radio:");
    //const pi=3.1416;
    var volumen = (1.33)*3.1416*(radio**3);
    alert("El volumen de esta esfera es: " + volumen);
    return volumen;
}
//VOLUMEN CUBO
function volumenCubo(lado, volumen){
    var lado=prompt("Ingresa el valor de cualquiera de las aristas o lados del cubo: ");
    var volumen=(lado**3);
    alert("El volumen de este cubo es: "+ volumen);
    return volumen;
}
//CONVERSIÓN METROS A MILLAS
function metrosMillas(metros, millas){
    var metros=prompt("Ingrese la cantidad de metros que desea convertir a millas:");
    var millas=metros/1609;
    alert("La cantidad de millas son: "+ millas+ " millas");
    return millas;
}
//CONVERSIÓN CELSIUS A FARENHEIT
function conversionGrados(celsius, farenheit){
    var celsius=prompt("Ingresa la cantidad en grados celsius: ");
    var farenheit=(celsius*9/5)+32;
    alert(+celsius+" grados celsius son:"+farenheit+" grados farenheit")
    return farenheit;
}
//CONVERSIÓN PESO DOLAR
function conversionMoneda(peso, dolar){
    var dolar=prompt("Ingresa la cantidad en dolares: ");
    var peso=dolar*20.65;
    alert(+dolar+ " dolares son: "+peso+ "pesos mexicanos");
    return peso;
}
