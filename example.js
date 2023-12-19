let url = ` https://api.thecatapi.com/v1/images/search`;
let Parent = document.querySelector('.photo');
async function GetImg(url){
let response = await fetch(url);
let imgs  = await response.json();
console.log(imgs);
const image  = document.createElement('img');
image.setAttribute('src',`${imgs[0].url}`);
image.setAttribute('width','400px');
image.setAttribute('height','400px');
image.classList.add('image');
Parent.append(image);
const name = document.createElement("h1");
name.classList.add('name');
name.textContent = imgs[0].id;
Parent.append(name);
const btn=document.createElement('button');
btn.classList.add('btn');
if(localStorage.getItem('like')==undefined)
localStorage.setItem('like',0);
btn.textContent='\u{2665}'+localStorage.getItem('like');
Parent.append(btn);
btn.addEventListener('click',function(e){
    str = e.target.textContent.replace("\u{2665}",'');
    str = Number(str)+1;
    localStorage.setItem('like',str);
    e.target.textContent = '\u{2665}'+str;
    e.target.style.color = "red";
})
}
GetImg(url);
