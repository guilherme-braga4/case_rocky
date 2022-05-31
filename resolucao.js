var fs = require('fs');
//1 - Carregando o arquivo JSON com os dados corrompidos
let jsonData = require('./index.json'); 


//1 - Corrigindo os preços: transformando tipos String em Number
function corrigirPreco () {
  return ( 
    jsonData.map((item) => {
    return(
      typeof item.price == 'string' ? item.price = Number(item.price) : item.price
  )
})
)}

corrigirPreco()


//objeto para substituir as letras "erradas"
let letrasSubstituidas = {
  'æ':'a',
  '¢':'c',
  'ø':'o',
  'ß':'b',
};

//2 - Corrigindo os nomes: m = letra sendo iterada
//                         [æ¢øß] -> quando qualquer uma dessas letras for iterada, será substituida de acordo com a representação dela no objeto "letrasSubstituidas"
function corrigirNomes () {
  return (
    jsonData.map((item) => {
       return (
         
         item.name = item.name.replaceAll(/[æ¢øß]/g, m => letrasSubstituidas[m])
       )
    })
  )
}

corrigirNomes()


//3 - Corrigindo as quantidades: spread operator
function corrigirQuantidade () {
  return ( 
    jsonData.map((item, index) => {
    if (!item.quantity) {
    return(
      [...jsonData, item.quantity = 0]
  )
  }
})
)}

corrigirQuantidade()


//4 - Ordenar por Nome e depois por Id;
jsonData.sort((f, l) => {
  if (f.name > l.name) {
  return (
    1
  )
  }
  else if (f.name = l.name) {
    return (
      0
  )
  }  
  return -1
}
)

jsonData.sort((f, l) => {
  if (f.id > l.id) {
  return (
    1
  )
  }
  else if (f.id = l.id) {
    return (
      0
  )
  }  
  return -1
}
)



//5 Somar as quantidades de cada em produto em estoque, de acordo com a sua categoria:
// Panelas -> Eletrodomésticos -> Eletrônicos -> Acessórios
let arr = []
let arr2 = []
let arr3 = []
let arr4 = []

let somaObject = [{}]
function quantidadeEstoque () {
  return (
  jsonData.map((item) => {
    if (item.category == 'Panelas') {
    //armazenando o item.quantity dentro de um array para poder utilizar o reduce, posteriormente
    arr.push(item.quantity),
    //copiando a nova quantidade dessa categoria para dentro do Objeto que armazena todas as quantidades no estoque
    somaObject.map((props) => {
      return(
        props.quantidadePanelas = arr.reduce((prev, curr) => prev + curr, 0)
        )
    })
   }
   if (item.category == 'Eletrodomésticos') {
    return (
      arr2.push(item.quantity),
      somaObject.map((props) => {
        return(
          props.quantidadeEletrodomesticos = arr2.reduce((prev, curr) => prev + curr, 0)
          )
      })
    )
   }
   if (item.category == 'Eletrônicos') {
    return (
      arr3.push(item.quantity),
      somaObject.map((props) => {
        return(
          props.quantidadeEletronicos = arr3.reduce((prev, curr) => prev + curr, 0)
          )
      })
    )
   }
   if (item.category == 'Acessórios') {
    return (
      arr4.push(item.quantity),
      somaObject.map((props) => {
        return(
          props.quantidadeAcessorios = arr4.reduce((prev, curr) => prev + curr, 0)
          )
      })
    )
   }
 }
)
)} 

quantidadeEstoque()
console.log("somaObject", somaObject)
console.log("jsonData", jsonData)


// 6- serializando o objeto jsonData em string, e então exportando para saida.json
//referência: https://stackabuse.com/reading-and-writing-json-files-with-node-js/

 function salvarDados (dados) {
  const exportJson = JSON.stringify(dados, null, 2); 
  fs.writeFileSync('saida.json', exportJson);
}

salvarDados(jsonData)

