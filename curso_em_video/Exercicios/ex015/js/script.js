function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    // Verifica se o campo está vazio ou se o ano digitado é maior que o ano atual
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var idade = ano - Number(fano.value)
        var fsex = document.getElementsByName('radsex')
        var gênero = ''
        var especie = ''

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos uma ${especie} do sexo ${gênero} com ${idade} anos.`

        if (fsex[0].checked) {
            gênero = 'Masculino'
            if (idade >= 0 && idade < 10) {
                // Criança
                especie = 'Criança'
                res.innerHTML = `Detectamos uma ${especie} do sexo ${gênero} com ${idade} ano(s).`
            } else if (idade < 21) {
                // Jovem
                especie = 'Jovem'
                res.innerHTML = `Detectamos uma ${especie} do sexo ${gênero} com ${idade} ano(s).`
            } else if (idade < 50) {
                // Adulto
                especie = 'Adulto'
                res.innerHTML = `Detectamos uma ${especie} do sexo ${gênero} com ${idade} ano(s).`
            } else {
                // Idoso
                especie = 'Adulto'
                res.innerHTML = `Detectamos uma ${especie} do sexo ${gênero} com ${idade} ano(s).`
            }
        } else if (fsex[1].checked) {
            gênero = 'Feminino'
            if (idade >= 0 && idade < 10) {
                // Criança
                especie = 'Criança'
                res.innerHTML = `Detectamos uma ${especie} do sexo ${gênero} com ${idade} ano(s).`
            } else if (idade < 21) {
                // Jovem
                especie = 'Jovem'
                res.innerHTML = `Detectamos uma ${especie} do sexo ${gênero} com ${idade} ano(s).`
            } else if (idade < 50) {
                // Adulta
                especie = 'Adulta'
                res.innerHTML = `Detectamos uma ${especie} do sexo ${gênero} com ${idade} ano(s).`
            } else {
                // Idosa
                especie = 'Idosa'
                res.innerHTML = `Detectamos uma ${especie} do sexo ${gênero} com ${idade} ano(s).`
            }
        }

    }

}