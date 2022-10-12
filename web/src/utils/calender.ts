export function diasNoMes( mes: number, ano: number) : number{
    var data = new Date(ano, mes, 0);
    return data.getDate();
}

export function primeiroDiaDaSemanaDoMes(mes: number, ano: number): number {

    return new Date(ano, mes,1).getDay();
}

export function arrayDiasDoMes(mes: number, ano: number): number[]{
    let arrayDias:number[] = []
    let count = 1;
    while (count <= diasNoMes(mes,ano)) {
        arrayDias.push(count)
        count++;
    }
    return arrayDias
}

export function matrizDias5Linhas(mes: number, ano: number): number[][]{
    
    let arrayDias:number[] = arrayDiasDoMes(mes,ano)
    let diaDaSemana = primeiroDiaDaSemanaDoMes(mes,ano)
    console.log(diaDaSemana)
    // Sublista de dias do mes anterior
    let anoAux = mes===1? ano-1:ano
    let arrayDiasMesPassado:number[] = arrayDiasDoMes(mes-1,anoAux)
    
    let arrayDiasAntes = []
    let count = 1
    let ultimo = arrayDiasMesPassado[arrayDiasMesPassado.length-1];
    while (count < diaDaSemana+1 ) {
        arrayDiasAntes.push(ultimo*(-1))
        ultimo-=1
        count++;
    }
    
    var listaEtapa1 = [...arrayDiasAntes.sort((a,b)=> -1),...arrayDias]

    // Sublista de dias do proximo mes
    anoAux = mes===12? ano+1:ano
    let arrayFuturosAntes = []
    count = 1
    let primeiro = 1
    while (count < 43-listaEtapa1.length) {
        arrayFuturosAntes.push(primeiro*(-1))
        primeiro+=1
        count++;
    }
    
    let listaEtapa2 = [...listaEtapa1, ...arrayFuturosAntes]

    let listaFinal = []

    let i = 0
    let k = 0
    let j = 1

    let listaTemp:number[] = []
    while(j <= 6){
        listaTemp.push(listaEtapa2[i])
        k++
        i++
        if(k > 6){
            k=0
            j++
            listaFinal.push(listaTemp)
            listaTemp = []
        }
    }
    return listaFinal
}
