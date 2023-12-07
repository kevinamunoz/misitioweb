class Automovil{
    constructor(marca,modelo,precio,anyo,ciudad,Kilometros){
        this.marca= marca;
        this.modelo=modelo;
        this.precio=precio;
        this.anyo=anyo;
        this.ciudad=ciudad;
        this.Kilometros=Kilometros;
    }
}

let auto1 = new Automovil("Kia","Rio", 35000000, 2020, "Pitalito - Huila", 1000);

let autos = [auto1];

let inputBusqueda = document.getElementById("busqueda");

inputBusqueda.addEventListener("keydown", function(event){
    if (event.key == "Enter") {
        let mainContent = document.getElementById("mainContent");
        mainContent.innerHTML = "";
        let busqueda = inputBusqueda.value;
        for(let i = 0; i < autos.length; i++) {
            let auto = autos[i];
            if(auto.marca.toLowerCase().startsWith(busqueda.toLowerCase())) { 
                let boxAuto = document.createElement("div");
                mainContent.appendChild(boxAuto);
                boxAuto.setAttribute("class","box-auto")

                let boxImg= document.createElement("div");

                let boxCorazon = document.createElement("div");
                boxImg.appendChild(boxCorazon);
                boxCorazon.setAttribute("class","box-corazon");
                let corazon =document.createElement("div");
                boxCorazon.appendChild(corazon);
                corazon.setAttribute("class","corazon");

                let iconHearth = document.createElement("i");
                corazon.appendChild(iconHearth);
                iconHearth.setAttribute("class","icon-style-hearth fa-regular fa-heart");

                boxAuto.appendChild(boxImg);
                let imgAuto = document.createElement("img");
                boxImg.appendChild(imgAuto);
                boxImg.setAttribute("class","box-img");
                imgAuto.setAttribute("src","./img/kiario.jpg");
                imgAuto.setAttribute("class","img-auto")

                let boxInfo = document.createElement("div");
                boxAuto.appendChild(boxInfo);

                let txtMarca = document.createElement("label");
                boxInfo.appendChild(txtMarca);
                boxInfo.setAttribute("class","box-info")

                txtMarca.innerHTML = auto.marca

                let txtModelo = document.createElement("label");
                boxInfo.appendChild(txtModelo);
                txtModelo.innerHTML = " " +auto.modelo;
                
                 let precioFormat = new Intl.NumberFormat("de-DE").format(auto.precio)
                 let txtPrecio = document.createElement("label")
                 boxInfo.appendChild(txtPrecio);
                 txtPrecio.innerHTML = " "+ precioFormat;

                 let boxProcedencia = document.createElement("div");
                 boxInfo.appendChild(boxProcedencia);
                 boxProcedencia.setAttribute("class", "box-procedencia");

                 let txtanyo = document.createElement("label");
                 boxProcedencia.appendChild(txtanyo);
                 txtanyo.innerHTML = auto.anyo + " · ";

                 let txtKilometros = document.createElement("label");
                 boxProcedencia.appendChild(txtKilometros);
                 let txtKilometrosFormat = new Intl.NumberFormat("de-DE").format(auto.Kilometros);
                 txtKilometros.innerHTML = txtKilometrosFormat + " km · ";

                 let txtciudad = document.createElement("label");
                 boxProcedencia.appendChild(txtciudad);
                 txtciudad.innerHTML = auto.ciudad;

                 let boxLineaDiv = document.createElement("div");
                 mainContent.appendChild(boxLineaDiv);
                 boxLineaDiv.setAttribute("class", "box-linea-div");
            }
        }
    }
})