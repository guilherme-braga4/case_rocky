
🚀 𝗖𝗮𝘀𝗲 𝗥𝗼𝗰𝗸𝘆 - 𝗘𝘀𝘁𝗮́𝗴𝗶𝗼 𝗽𝗮𝗿𝗮 𝗔𝗻𝗮𝗹𝗶𝘀𝘁𝗮 𝗱𝗲 𝗦𝗶𝘀𝘁𝗲𝗺𝗮𝘀 🚀
Teste realizado para o processo seletivo Rocky Monks, pelo Desenvolvedor Guilherme Braga!

𝗙𝘂𝗻𝗰𝗶𝗼𝗻𝗮𝗹𝗶𝗱𝗮𝗱𝗲𝘀: 

✔️ 1-corrigirPreco: ao iterar o array de objetos, então é verificado o tipo de cada propriedade "preço", e se o tipo é uma String, então essa propriedade é transformada de tipo String para tipo Number.
    
 ✔️ 2-corrigirNomes: ao iterar o array de objetos, é manipulada a propriedade "Nome", a partir do método replaceAll. Dentro desse método, são passadas como parâmetro: as letras a serem substituidas, e em seguida ("m") a posição de cada letra da string contida dentro da propriedade "Nome"; ao encontrar a letra errada, ela é substituida pela letra correta, indicada pelo objeto "letrasSubstituidas".
    Utilização de um objeto ("letrasSubstituidas") para auxiliar a substituição a partir do método replaceAll
    
 ✔️ 3-corrigirQuantidade: a partir da iteração de objetos, dentro do return da função callback do Map, é retornado um objeto com uma propriedade nova, sendo essa a "quantidade = 0"; porém, isso somente ocorre caso não exista a propriedade "quantidade", isto é, ela seja false.
  
 ✔️ 4-jsonData.sort: foram utilizadas 2 vezes a função sort: primeiro para ordenar o array de objetos por Nome e depois por Id. Dentro do callback da função sort, existem dois parâmetros, sendo "f" = first, e "l" como last;
    No primeiro sort (organizar Nome), caso o primeiro parâmetro (f) tenha um valor maior do que o segundo (l), relacionado a ordem do alfabeto, ele irá retornar 1, e irá f virá depois de l; caso f seja = l ele irá retornar 0 e ordenar lado a lado; caso (f) seja menor do que (l), então f virá antes de l.
    O segundo método sort segue a mesma linha de raciocínio, mas agora irá ordenar os Id's.
  
 ✔️ 5-quantidadeEstoque: para Somar as quantidades de cada em produto em estoque, de acordo com a sua categoria: "Panelas -> Eletrodomésticos -> Eletrônicos -> Acessórios", primeiramente foi realizada a iteração através do map, e ao encontrar a categoria desejada (através da condição verdadeira), então essas propriedades "item.quantity" eram colocadas em um array vazio, através do método Puss, para utilizar esse array posteriormente na soma das quantidades dessa categoria, através do método reduce.
    Para questões de organização, foi criado um array de objetos vazio, e criado uma propriedade para cada soma de categoria respectiva. Portanto, foi atribuido ao retorno da função de callback do map desse array de objetos citado anteriorimente, o resultado do reduce para a propriedade que representa essa categoria.
    No fim, é retornado um array de objetos ("somaObject") contendo todas as somas das quantidades de cada respectiva categoria.
    
   ✔️ 6-salvarDados: Serializando o objeto jsonData em string, e então exportando para saida.json.
  
𝗘𝘀𝗰𝗼𝗹𝗵𝗮 𝗱𝗮 𝗹𝗶𝗻𝗴𝘂𝗮𝗴𝗲𝗺:

  O Javascript é uma linguagem com grande flexibilidade e usabilidade. A Web "ganhou vida" com o Javascript. Além disso, é base de grandes bibliotecas e frameworks como React, Angular, Vue; e por fim, permite também desenvolver o backend através do Node.js. Portanto, é uma linguagem muito poderosa, com documentação completa, e ideal para o meu objetivo: desenvolver aplicações web com bom desempenho e qualidade.
  
𝗡𝗼𝘁𝗮 𝗳𝗶𝗻𝗮𝗹:

  Projeto desafiador: gostei da proposta de arrumar os dados, pois além de simular uma situação de interação com o banco de dados (bastante comum), me proporcionou a oportunidade de revisar (através das documentações) e aprofundar (utilizando fóruns para esclarecer dúvidas) conhecimentos relacionados aos métodos e conceitos do Javascript: Map, Sort, Replace, Spread Operator, Arrow Functions, CallBacks, etc.
