let resF = document.querySelector("#resultado");
function calcula(){
    let num = document.querySelector("input").value;
    if(num == ""){
        alert("Por favor digite um número!");
    }else{
        for(let i = 0;i <= 10; i++){
            resF.innerHTML  += `${num} X ${i} = ${i * num}<br>`;
        }
    }
}

function limpa(){
    let num = document.querySelector("input");
    num.value = "";
    resF.innerHTML = "";
}