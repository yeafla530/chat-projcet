# JS๋ฅผ ์ด์ฉํ Chat Project

## ๐จ๊ธฐ์ ์คํ

* Nodejs (express)
* Socket.io
* Vanilla JS
* Flex
* ngrok 
  * ์ธ๋ถ์์๋ ๋ค๋ฅธ ์ฌ์ฉ์๊ฐ1260 ์ฌ์ฉํ  ์ ์๋๋ก ํด์ค



## โProcess

<img src="./img/process.png" alt="process" style="zoom:30%;" />



## ๐ํ์ผ๊ตฌ์กฐ

```
chat project
	ใด img
	ใด README.md
	ใด node_modules
	ใด src
		ใด css
		   ใด style.css
		ใด js
		   ใด chat.js
		ใด index.html
	ใด package.json
	ใด package-lock.json 
```

* img  : README์ image๋ฅผ ๋ด๊ณ ์์

* package-lock.json :  ์ฑ์ค์ , ์ค์นํญ๋ชฉ, ๊ธฐ๋ฅ๋ฑ์ด ๋ด๊ฒจ์์

  ์๋ ๋ช๋ น์ด๋ก ์์ฑ๋จ
  
  ```
  npm init -y
  ```



## ๐ฟ์ค์นํญ๋ชฉ

| ๊ฐ๋ฐ์ธ์ด | ๊ฐ๋ฐํ๊ฒฝ  | API & ๋ผ์ด๋ธ๋ฌ๋ฆฌ |
| -------- | --------- | :--------------- |
| JS       | express   | moment           |
|          | Socket.io | nodemon          |
|          |           | ngrok            |

* nodemon : JSํ์ผ์ ๋ณ๊ฒฝ์ด ์์ ๋๋ง๋ค ์๋์ผ๋ก ์ฌ์คํ ์์ผ์ค

  * ์คํ๋ฐฉ๋ฒ

    ```
    nodemon app.js
    ```

* ngrok : ์ธ๋ถ์ ์ฌ๋๋ค์ด ๋ด ํฌํธ๋ก ์ ์ํ  ์ ์๋๋ก ๋ง๋ค์ด์ค

  * ์คํ๋ฐฉ๋ฒ

    * node.js ์คํ ํ

    ```
    ngrok http <ํฌํธ๋ฒํธ>
    ```

    * Forwarding์ ์๋ ์ฃผ์ ์ฌ์ฉํ๋ฉด ์ธ๋ถ์์๋ ๋ด๊ฐ ์ฌ์ฉํ๋ ํฌํธ๋ก ์ ์๊ฐ๋ฅ

    <img src="./img/image-20210406163251731.png" alt="process" />



## ๐ก๋ฌธ์ ์ ๊ณผ ํด๊ฒฐ๋ฐฉ๋ฒ

### ๋ฌธ์  1. ์๋ก๊ณ ์นจ์ undefined๋ฐ์

![image-20210326203818389](./img/image-20210326203818389.png)

**ํด๊ฒฐ๋ฐฉ๋ฒ. if๋ฌธ์ผ๋ก ํด๊ฒฐ**

```
//chat.js ํ์ผ

// ์๋ฒ์์ ๋ฐ์ดํฐ ๋ฐ๊ธฐ
socket.on("chatting", (data) => {
    console.log(data) // {name, value}
    // chatList
    if (data.name === undefined || data.msg === undefined ) {
        console.log(data)
    }
    else {
        const li = document.createElement("li");
        li.innerText = `${data.name}๋์ด - ${data.msg}`
        chatList.appendChild(li)
    }
})
```

* ์๋ก๊ณ ์นจ์ undefined๊ฐ ๋จ๋ ๋ฌธ์ ๋ ํด๊ฒฐ๋์ผ๋ ๋ด์ฉ์ด ์ฌ๋ผ์ง๋ ๋ฌธ์  ๋ฐ์



