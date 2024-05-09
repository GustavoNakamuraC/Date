Funções JavaScript para manipulação de datas
Este repositório contém um conjunto de funções JavaScript desenvolvidas para lidar com manipulação de datas em páginas da web.

Funcionalidades
1. mostrarResultados()
Esta função é responsável por exibir os resultados da manipulação de datas na interface do usuário. Ela extrai os valores das datas informadas pelo usuário, cria objetos Date correspondentes e exibe a maior data informada, o intervalo entre as datas e a data atual formatada.

2. maiorDataFunction(data1, data2)
Esta função recebe dois objetos Date como parâmetros e retorna o maior entre os dois. É utilizada na função mostrarResultados() para determinar qual das datas informadas é a maior.

3. intervaloFunction(dataInicial, dataFinal)
Esta função calcula o intervalo de tempo entre duas datas. Ela recebe dois objetos Date como parâmetros e retorna uma string formatada indicando o intervalo em dias, horas e minutos. Caso uma das datas seja maior que a outra, os parâmetros são trocados internamente para garantir o cálculo correto.

4. formatarDataHora(data)
Esta função recebe um objeto Date como parâmetro e retorna uma string formatada contendo a hora e a data no formato "hh:mm - dd/mm/aaaa". É utilizada na função mostrarResultados() para exibir a data atual de forma legível.