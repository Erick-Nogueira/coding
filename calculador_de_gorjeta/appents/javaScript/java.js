/* ciando um evento para a função */
function calculartip(event){
    /* para que nao fique carregando toda hora */
    event.preventDefault();
    /* criando variaveis pelo metodo let ou var */
    let bill = document.getElementById('bill').value;
    let serviceQual = document.getElementById('serviceQual').value;
    let numofpeople = document.getElementById('people').value;
   
    /* condição para que os campós sera preenchidos */
    if(bill == "" | serviceQual == 0){
        alert('Por favor, preencha os valores.')
        return
    }
    /* condiçoes verificando se tem uma pessoa so ou em mais */ 
    if(numofpeople == "" | numofpeople <= 1){
        numofpeople = 1;
        document.getElementById('each').style.display = "none"
    }
    /* achou mais de uma pessoa no final */
    else{
        document.getElementById('each').style.display = "block"
    }
    /* criando a varivel total e recebendo o total da conta como a pocentagem 
    do serviço e a quantidade de pessoas na mesa */ 
    let total = (bill * serviceQual) / numofpeople;
    /* monstrando apenas duas casa decimal */
    total = total.toFixed(2);
    /* monstrando no html o resultado com o innerHTML */
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totaltip').style.display ="block";
   
    
}
 /* sumindo com os elementos no java schipt */ 
document.getElementById('totaltip').style.display ="none";
document.getElementById('each').style.display = "none";

/* fazendo o form funcionar atraves do submit */
document.getElementById('tipsform').addEventListener('submit', calculartip);