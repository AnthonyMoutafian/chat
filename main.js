const chatMessages = document.getElementById("chat-messages");
const sendButton = document.getElementById("send-button");
const messageInput = document.getElementById("message-input");
const errorMessage = document.getElementById("error-message");
let nameOfMessager = prompt("Nermucel Anun")


const sendMessage =  () => {
    const message = messageInput.value;
    let date = new Date()
let year = date.getFullYear()
let month = 1 + date.getMonth()
let day = date.getDate()
let minutes = date.getMinutes()
let hours = date.getHours()
let seconds = date.getSeconds()


if(minutes < 10){
    minutes = "0" + minutes
}
if(hours < 10){
    hours = "0" + hours
}
if(seconds < 10){
   seconds = "0" + seconds
}

if(month < 10){
    month = "0" + month
}

if(day < 10){
    day = "0" + day
}

    if(!message){
        errorMessage.innerHTML = "input cant be empty"
        errorMessage.style.display = "block"
        return;
    }else{
        errorMessage.style.display = "none"
    }
    const usernameEl = document.createElement("div")
    const messageEl = document.createElement("div")
    usernameEl.classList.add("nameOfMessager")
    messageEl.classList.add("chat-message")
    usernameEl.textContent = `${nameOfMessager} - ${year}.${month}.${day} - ${hours}:${minutes}:${seconds}`
    messageEl.textContent = message
 
    chatMessages.appendChild(usernameEl)
    chatMessages.appendChild(messageEl)
 
    messageInput.value = "";
    chatMessages.scrollTop = chatMessages.scrollHeight;
 };

sendButton.addEventListener("click", sendMessage);


messageInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter"){
         sendMessage()
    }
});