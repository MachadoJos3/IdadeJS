function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] verifique seus dados novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')//aqui estamos manipulando o html apartir do JS colocando nome no atributo diretamente por aqui
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src','imagens/bebe.png')
            }else if (idade < 21) {//aqui nao precisa colocar >=10 pois se no anterior diz menor qualquer um acima de 10 bate com a condiçao
                //jovem
                img.setAttribute('src','imagens/menino.png')
            }else if(idade < 60){
            //adulto
            img.setAttribute('src','imagens/adultoM.png')
            }else{
            //idoso
            img.setAttribute('src','imagens/velhoM.png')
        }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade< 10){
                img.setAttribute('src','imagens/bebeF.png')
                //criança
            }else if(idade < 21){
                img.setAttribute('src','imagens/jovemF.png')
                //jovem
            }else if(idade < 60){
                img.setAttribute('src','imagens/adultoF.png')
                //adulto
            }else{
                img.setAttribute('src','imagens/velhoF.png')
                //idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}