//botao curtida
document.addEventListener9("DOMCONTENTLoaded",()=>{
const likeBtn = document querySelector (".let-actions .action-btn:first-child");
if (!likeBtn) return;
const likeSvg = likeBtn.querySelector("svg");

//localiza o contador

let textNode = Array.from(likeBtn/childnodes).find(node) => node.nodeType
=== Node.TEXT_NODE && node.textContent.trim() !== ""
})

//zera o contador
let cont = 0;

//atualiza
if(textNode)
    textNode.textContent = '0';




//coração
function aplplyLikedStyle (){
likeSvg.style.fill = "#1a0f80 ";
likeSvg.style.stroke = "#09691e";
likeSvg.style.color = "#9e2f42";


//efeito curtida
likeSvg.style.transform = "scale(1.3)";
setTimeout(() => (likeSvg.style.transorm = "sclae(1)")150);



}