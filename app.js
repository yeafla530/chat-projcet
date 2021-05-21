// 서버 구동 JS파일

//require 사용시 node_modules파일을 바라봐 경로 설정없이 express사용가능
const express = require("express")
// web socket => http필요 
const http = require("http")
const app = express();
const path = require("path")
const server = http.createServer(app)
const socketIO = require("socket.io")
const moment = require("moment")

const io = socketIO(server);

// console.log(__dirname) //프로젝트 폴더경로


// 보여줄 폴더 지정
// path.join => 운영체제마다 \, /가 달라서사용
app.use(express.static(path.join(__dirname, "src")))

// port사용
const PORT = process.env.PORT || 5000;

io.on("connection", (socket) => {
    // console.log('연결이 이뤄졌습니다')
    // data 받아오기
    socket.on("chatting", (data) => {
        // console.log(data) // from front
        // 프론트에서 서버가 보낸 내용 받을 수 있음
        // 시간 넘기기
        const {name, msg} = data;

        // console.log(data)
        io.emit("chatting", {
            name,
            msg,
            time: moment(new Date()).format("H:mm A") //21:46 PM
        })
    })
})

// server.listen(포트, 명령)
// server.listen(PORT, () => console.log(`server is running ${PORT}`))
