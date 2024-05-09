function mostrarResultados() {
    const dataHora1 = document.getElementById("dataHora1").value;
    const dataHora2 = document.getElementById("dataHora2").value;

    const data1 = new Date(dataHora1);
    const data2 = new Date(dataHora2);

    document.getElementById("maiorData").innerText = `Maior data informada: ${maiorDataFunciton(data1, data2)}`
    document.getElementById("intervalo").innerText = `Intervalo entre as datas: ${intervaloFunction(data1, data2)}`
    document.getElementById("dataAtual").innerText = `Data atual: ${formatarDataHora(new Date())};`
}

function maiorDataFunciton(data1, data2) {
    if (data1 > data2) {
        return data1;
    } else {
        return data2; 
    }
}

function intervaloFunction(dataInicial, dataFinal) {
    if (dataInicial > dataFinal) {
        let aux = dataInicial;
        dataInicial = dataFinal;
        dataFinal = aux;
    }

    const intervaloMs = dataFinal.getTime() - dataInicial.getTime();
    const intervaloSegundos = Math.floor(intervaloMs / 1000);
    const intervaloMinutos = Math.floor(intervaloSegundos / 60);
    const intervaloHoras = Math.floor(intervaloMinutos / 60);
    const intervaloDias = Math.floor(intervaloHoras / 24);

    const horasRestantes = intervaloHoras % 24;
    const minutosRestantes = intervaloMinutos % 60;

    if (intervaloDias > 0) {
        if (horasRestantes > 0) {
            if (minutosRestantes > 0) {
                return intervaloDias + " dias, " + horasRestantes + " horas, " + minutosRestantes + " minutos";
            } else {
                return intervaloDias + " dias, " + horasRestantes + " horas";
            }
        } else {
            return intervaloDias + " dias";
        }
    } else if (horasRestantes > 0) {
        if (minutosRestantes > 0) {
            return horasRestantes + " horas, " + minutosRestantes + " minutos";
        } else {
            return horasRestantes + " horas";
        }
    } else {
        return minutosRestantes + " minutos";
    }
}

function formatarDataHora(data) {
    const minuto = String(data.getMinutes()).padStart(2, '0');
    const hora = String(data.getHours()).padStart(2, '0');
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    
    return hora + ":" + minuto + " - " + dia + "/" + mes + "/" + ano;
}

