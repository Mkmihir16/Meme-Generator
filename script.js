let img=document.querySelector(".img img")
let obj;
let repeat;
let fun=async function memegenerate(){
    let url=await fetch("https://meme-api.com/gimme");
    console.log("It is url",url)
    obj= await url.json();
    console.log(obj.url);
    img.src=`${obj.url}`
}

fun();
img.addEventListener("mouseleave",()=>{
     repeat=setInterval(fun,1000);
})
img.addEventListener("mouseover",()=>{
    clearInterval(repeat);
})