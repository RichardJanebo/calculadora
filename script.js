function inserir(nun){
    var numero=window.document.getElementById('res').innerText
    window.document.getElementById('res').innerText= numero + nun
}
function limpar(){
    document.getElementById('res').innerHTML=""  
}
function apagar(){
    var res =window.document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML= res.substring(0, res.length -1)
}
function calcular(){
    var res =window.document.getElementById('res').innerHTML
    if(res){
        document.getElementById('res').innerHTML=eval(res);
    }
    else{
        document.getElementById('res').innerHTML='Nulo'
        window.alert('Defina um valor')
    }
}
