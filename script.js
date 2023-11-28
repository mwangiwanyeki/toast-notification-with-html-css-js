let notificationBox = document.getElementById('notificationBox');
let successMsg = "<i class='fa-solid fa-circle-check'></i> Sucessfull submitted";
let invalidMsg = "<i class='fa-solid fa-circle-exclamation'></i> Invalid input value, try again!";
let errorMsg = "<i class='fa-solid fa-circle-xmark'></i> Please fix the error";

function ShowToastBox(msg){
    let toastDiv = document.createElement('div');
    toastDiv.classList.add('toast');
    toastDiv.innerHTML = msg;

    notificationBox.appendChild(toastDiv);

    if(msg.includes("Invalid")){
        toastDiv.classList.add('invalid');
    }

    if(msg.includes("error")){
        toastDiv.classList.add('error');
    }

    setTimeout(()=>{
        toastDiv.remove();
    }, 4000);
}