let d = document;

function byClass(nomeClasse, index){
    let captura = d.getElementsByClassName(nomeClasse)[index]; 
    return captura;
}

function conversorTitulo(prototipo){
    let titulo = byClass("prototype",0);
    titulo.textContent = prototipo.value;
}

function conversorParagrafo(prototipo){
    let parag = byClass("prototype",1);
    parag.textContent = prototipo.value;
}

function mudarCor(prtp){    
    let cor = prtp.value
    let titulo = byClass("prototype",0);
    let parag = byClass("prototype",1);
    titulo.style.color = cor;
    parag.style.color = cor;
}

function mudarSize(prtp, nomeClasse, index){
    let fsize = prtp.value;
    let elemento = byClass(nomeClasse,index);
    
    
    elemento.style.fontSize = fsize + "px";
    
}

function txtPosition(prtp){
    let boxText = byClass("box",0)
    let botoes = d.getElementsByClassName("pos");
    for (let i in botoes){
        if (prtp.value == 1){
            boxText.setAttribute('style', 'text-align: left');
            break
        }
        else if (prtp.value == 2){
            boxText.setAttribute('style', 'text-align: center');
            break
        }
        else{
            boxText.setAttribute('style', 'text-align: right');
        }
    }
}

function negrito(checkbox){
    let parag = byClass("prototype",1)
    
    if (checkbox.checked == true){
        parag.style.fontWeight = 'bold';
    }
    else{
        parag.style.fontWeight = 'normal';
    };
}

function italico(checkbox){
    let parag = byClass("prototype",1)
    
    if (checkbox.checked == true){
        parag.style.fontStyle = 'italic';
    }
    else{
        parag.style.fontStyle = 'normal';
    };    
}

function underline(checkbox){
    let parag = byClass("prototype",1)
    
    if (checkbox.checked == true){
        parag.style.textDecoration = 'underline';
    }
    else{
        console.log(false);
        parag.style.textDecoration = 'none';
    };    
}

function fontes(select){
    let boxText = byClass("textBox",0)
    
    if (select.value == 'Arial'){
        boxText.style.fontFamily = 'arial';
    }
    else if (select.value == "Cursive"){
        boxText.style.fontFamily = 'cursive';
    }
    else if(select.value == 'Monospace'){
        boxText.style.fontFamily = 'monospace';
    }
    console.log(boxText)
}