alert("Ao finalizar a votação, aperte CONFIRMA para reiniciar a urna.");
        var voto="";
        var npres=document.getElementById("nomepres");
        var ngov=document.getElementById("nomegov");
        function verifyp(){
            voto = document.getElementById("vpres").value;
            if(voto=="98"){
                npres.innerHTML="Marcelo Rodrigues";
            }
            else if(voto==""){
                npres.innerHTML="Por favor, digite um número"
            }
            else if(voto=="87"){
                npres.innerHTML="Wagner Serafim";
            }
            else if(voto=="99"){
                npres.innerHTML="Votação Encerrada!";
                ngov.innerHTML="Votação Encerrada!"
                document.getElementById("fieldpres").style.backgroundColor="#d9d9d9";
                document.getElementById("fieldgov").style.backgroundColor="#d9d9d9";
                document.getElementById("vpres").setAttribute("disabled", "disabled");
                document.getElementById("vpres").value="-------------------";
                document.getElementById("vgov").setAttribute("disabled","disabled");
                document.getElementById("vgov").value="--------------------";
            }
            else{
                document.getElementById("nomepres").innerHTML="Voto Nulo";
            }
        }
        function verifyg(){
            voto = document.getElementById("vgov").value;
            if(voto=="876548"){
                ngov.innerHTML="Eloah";
            }
            else if(voto==""){
                ngov.innerHTML="Por favor, digite um número"
            }
            else if(voto=="453945"){
                ngov.innerHTML="Manoel";
            }
            else if(voto=="99"){
                npres.innerHTML="Votação Encerrada!";
                ngov.innerHTML="Votação Encerrada!"
                document.getElementById("fieldpres").style.backgroundColor="#d9d9d9";
                document.getElementById("fieldgov").style.backgroundColor="#d9d9d9";
                document.getElementById("vpres").setAttribute("disabled", "disabled");
                document.getElementById("vpres").value="----------------------";
                document.getElementById("vgov").setAttribute("disabled","disabled");
                document.getElementById("vgov").value="-----------------------";
            }
            else{
                document.getElementById("nomegov").innerHTML="Voto Nulo";
            }
        function confirma(){
            alert("Voto confirmado! <br> Para repetir o processo, pressione F5 ou atualize a página");
        }
        }