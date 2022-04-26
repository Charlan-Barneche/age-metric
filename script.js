//data atual
let data = new Date();
let ano = data.getFullYear();

//ano do nascimento
let age = window.document.getElementById ('age');

//sexo
let sexo = window.document.getElementsByName('sex')


//botão
let btn = window.document.getElementById('btn');
btn.addEventListener("click" , click);

//resultado
let resul = window.document.getElementById('resul')


function click(){
    if (age.value.length == 0 || age.value > ano){
        alert(`|ERRO!|Você colocou um valor invalido na area "Ano de nascimento" `)
    } else {
        let idade = ano - age.value
        let genero = ''
        let img = document.createElement('img') // cria um elemento imagem
        img.setAttribute('id' , 'img') // seta o elemento criado com o id depois da virgula no caso img
        if (sexo[0].checked){ //verifica se a checkbox de sexo esta checked e o valor
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'homem-bebe.jpg') // 
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'homem-jovem.jpg')

            }else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'homem-adulto.jpg')

            } else {
                //Idoso
                img.setAttribute('src', 'homem-idoso.jpg')

            }
        } else if (sexo[1].checked){ //verifica se a checkbox de sexo esta checked e o valor
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'bebe-menina.jpg')

            }else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'mulher-jovem.jpg')

            }else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'mulher-adulta.jpg')

            } else {
                //Idoso
                img.setAttribute('src', 'mulher-idosa.jpg')

            }
        }
    resul.style.textAlign = 'center' //serve para alinhar o texto usando jS
    resul.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    resul.appendChild(img)// appendChild serve para adicionar novas coisas nesse caso uma img
    }
}