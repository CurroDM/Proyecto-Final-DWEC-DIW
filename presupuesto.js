var total = 0;
        var listaTratamiento = [];
        
        function suma(tratamiento){
            var elemento = tratamiento.id + " - " + tratamiento.value + " €</br></br>";

            if (tratamiento.checked) {

                listaTratamiento.push(elemento);
                console.log(listaTratamiento);
        
                total += parseInt(tratamiento.value);
                document.getElementById("precio").innerHTML = total + " €";
            }else{
                
                let posicion = listaTratamiento.indexOf(elemento);
                listaTratamiento.splice(posicion, 1);

                total -= parseInt(tratamiento.value);

                if (total >= 0) {
                    document.getElementById("precio").innerHTML = total + " €";
                }else{
                    document.getElementById("precio").innerHTML = "0 €";
                }
            }

            var listaString = new String(listaTratamiento);
            document.getElementById("listaTratamiento").innerHTML = "<p>"+ listaString + "</p>";
        }