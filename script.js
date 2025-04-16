document.getElementById("see1").addEventListener("click", showPhone1)
document.getElementById("see2").addEventListener("click", showPhone2)
document.getElementById("send-button").addEventListener("click", message)
document.getElementById("calc-button").addEventListener("click", calc)
document.getElementById("openModal").addEventListener("click",openModal)
document.getElementById("closeModal").addEventListener("click",closeModal)
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      closeModal();
    }
  });
const cpfIp = document.getElementById("cpf-input")
cpfIp.addEventListener("input", ()=>{
    let cpflength = Number(cpfIp.value.length)
    cpfIp.value = cpfIp.value.replace(/\D/g, '');
    if ( cpflength > 9) {
        cpfIp.value = cpfIp.value.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, "$1.$2.$3-$4");
    } else if (cpflength > 6) {
        cpfIp.value = cpfIp.value.replace(/(\d{3})(\d{3})(\d{1,3})/, "$1.$2.$3");
    } else if (cpflength > 3) {
        cpfIp.value = cpfIp.value.replace(/(\d{3})(\d{1,3})/, "$1.$2");
    }
})
const phoneIp = document.getElementById("number-input")
phoneIp.addEventListener("input", ()=>{
    let phonelength = Number(phoneIp.value.length)
    phoneIp.value = phoneIp.value.replace(/\D/g, '');
    if(phonelength > 11){
        phoneIp.value = phoneIp.value.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, "($1)$2 $3-$4");
    }else if ( phonelength > 7) {
        phoneIp.value = phoneIp.value.replace(/(\d{2})(\d{1})(\d{4})/, "($1)$2 $3");
    } else if (phonelength > 3) {
        phoneIp.value = phoneIp.value.replace(/(\d{2})(\d{1})/, "($1)$2");
    } else if (phonelength > 2) {
        phoneIp.value = phoneIp.value.replace(/(\d{2})/, "($1)");
    }
})


function showPhone1(){
    let phone = document.getElementById("phone1")
    phone.classList.remove("hidden")
}
function showPhone2(){
    let phone = document.getElementById("phone2")
    phone.classList.remove("hidden")
}

function message(){
    const textarea = document.getElementById("text-input")
    cpfIp.style.borderColor = "#787878"
    cpfIp.classList.remove("error")
    phoneIp.style.borderColor = "#787878"
    phoneIp.classList.remove("error")
    textarea.style.borderColor = "#787878"
    textarea.classList.remove("error")
    if (cpfIp.value == ""){
        cpfIp.style.borderColor = "Red"
        cpfIp.classList.add("error")
    }else if(phoneIp.value == ""){
        phoneIp.style.borderColor = "Red"
        phoneIp.classList.add("error")
    }else if(textarea.value == ""){
        textarea.style.borderColor = "Red"
        textarea.classList.add("error")
    }else{
        cpfIp.value = ""
        phoneIp.value = ""
        textarea.value = ""
        alert("Menssagem enviada")
    }
}

function calc(){
    const num1 = document.getElementById("number1")
    const num2 = document.getElementById("number2")
    const num3 = document.getElementById("number3")
    const result = document.getElementById("result")
    num1.style.borderColor = "#787878"
    num1.classList.remove("error")
    num2.style.borderColor = "#787878"
    num2.classList.remove("error")
    num3.style.borderColor = "#787878"
    num3.classList.remove("error")
    if (num1.value == "" || num1.value == 0){
        num1.style.borderColor = "Red"
        num1.classList.add("error")
    }else if(num2.value == ""){
        num2.style.borderColor = "Red"
        num2.classList.add("error")
    }else if(num3.value == ""){
        num3.style.borderColor = "Red"
        num3.classList.add("error")
    }else{
        result.innerText = parseFloat((num2.value*num3.value)/num1.value).toFixed(2)
    }
}
const modal = document.getElementById("modal")
const closeBt = document.getElementById("close")
const modalOverlay = document.querySelector(".modal-overlay")
function openModal(){
    modal.showModal()
    modalOverlay.classList.remove("hidden")
}
function closeModal(){
    modal.close()
    modalOverlay.classList.add("hidden")
}
function Menu() {

}