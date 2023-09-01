//output-btnというidを持つHTML要素を取得し、定数に大住する
const btn = document.getElementById('output-btn');

//HTNL要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click',() => {
  console.log('クリックされました！');
});


const addBtn = document.getElementById('add-btn');
const parentList =document.getElementById('parent-list');

addBtn.addEventListener('click',() => {
  const childList =document.createElement('li');

  childList.textContent = 'これはリスト要素です';

  parentList.appendChild(childList);
})

const countBtn = document.getElementById('count-btn');
countBtn.addEventListener('click',() => {
  const text = document.forms.textForm.textBox.value;

  console.log(text.length + '文字');

});


const areaBtn = document.getElementById('area-btn');
areaBtn.addEventListener('click',() => {

  console.log(document.forms.areaForm.area.value);

  const areaName = document.forms.areaForm.area.value;
  console.log(areaName)});


  const osBtn = document.getElementById('os-btn');
  osBtn.addEventListener('click',() => {
    const item = document.forms.osForm.os;
      for(let i=0;i< item.length;i++) {
        if(item[i].checked){
        console.log(item[i].value)}}});
