const container = document.querySelector("#container");
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);
const para = document.createElement("p");
para.classList.add("para");
para.textContent = "Hey I'm red!";
container.appendChild(para);

const h3 = document.createElement("h3");
h3.classList.add("h3");
h3.textContent = `I'm a blue h3!`;
container.appendChild(h3);

const wrap = document.createElement("div");
wrap.classList.add("newDiv");
wrap.style.border = "black";
wrap.style.backgroundColor = "pink";
container.appendChild(wrap);

const wrapper = document.querySelector(".newDiv");
const header3 = document.createElement("h3");
header3.classList.add("header3");
header3.textContent = `I'm a blue h3!`;
wrapper.appendChild(header3);

const header1 = document.createElement('h1')
header1.classList.add("header1")
header1.textContent = `I'm a div too`
wrapper.appendChild(header1)

const p1 = document.createElement('p')
p1.classList.add('p1')
p1.textContent = 'ME TOO!'
wrapper.appendChild(p1)