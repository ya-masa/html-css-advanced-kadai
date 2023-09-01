
const btnN = document.getElementById('btn');
btnN.addEventListener('click',() =>{
  const h2Text =document.getElementById('text');
  setTimeout(() =>{
    h2Text.textContent = 'ボタンが押されました';
  },2000);
});