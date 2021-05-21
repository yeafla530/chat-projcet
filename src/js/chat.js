// console.log('hello js')
"use strict"

// socket에 클라이언트 io가 담김
const socket = io()

// 돔 선택
const nickname = document.querySelector("#nickname")
const chatList = document.querySelector(".chatting-list")
const chatInput = document.querySelector(".chatting-input")
const sendButton = document.querySelector(".send-button")
const displayContainer = document.querySelector(".display-container")

chatInput.addEventListener("keypress", (e) => {
    if (e.keyCode === 13) {
        send()
    }

})

function send() {
    const param = {
        name: nickname.value,
        msg: chatInput.value
    }
    socket.emit("chatting", param)
}

sendButton.addEventListener("click", send)

// 서버에 데이터 보내기 (chatting이라는 이름으로 from front라는 내용을)
socket.emit("chatting", "from front")

// 서버에서 데이터 받기
// socket.on("chatting", (data) => {
//     console.log(data) // {name, value}
//     // chatList
//     if (data.name === undefined || data.msg === undefined ) {
//         console.log(data)
//     }
//     else {
//         const li = document.createElement("li");
//         li.innerText = `${data.name}님이 - ${data.msg}`
//         chatList.appendChild(li)
//     }
// })

// 실전 데이터 받았을 때
// li계속 찍어내기
socket.on("chatting", (data) => {
    console.log(data)
    if (data.name === undefined || data.msg === undefined) {
        console.log(error)
    }
    else {
        const {name, msg, time} = data;
        // const item = new LiModel(data.name, data.msg, data.time) //인스턴스화(초기화)
        const item = new LiModel(name, msg, time)
        item.makeLi()
        displayContainer.scrollTo(0, displayContainer.scrollHeight)
    }

})


//li생성후 ul에 append
function LiModel(name, msg, time) {
    this.name = name;
    this.msg = msg;
    this.time = time;

    this.makeLi = () => {
        const li = document.createElement("li")
        li.classList.add(nickname.value === this.name ? "sent" : "received")
        const dom = `<span class="profile">
        <span class="user">${this.name}</span>
        <img src="https://placeimg.com/50/50/any" alt="">
        </span>
        <span class="message">
            ${this.msg}
        </span>
        <span class="time">${this.time}</span>`
        li.innerHTML = dom;
        chatList.appendChild(li)
    }
}

// console.log(socket)