//head要素を取得し、中身を出力する
console.log(document.head);
//body要素を取得し、中身を出力する
console.log(document.body);
//ｗｉｎｄｏｗオブジェクトの中身を出力する
console.log(window);
//HTML要素をidで取得し、中身を出力する
console.log(document.getElementById('first-list'));
//HTMLをclassで取得し、中身を出力する
console.log(document.getElementsByClassName('heading'));

//複数のHTML要素を取得し、定数に代入する
const headings = document.getElementsByClassName('heading');

//複数のHTML要素を1つづつ取得し、中身を出力する
for(let i= 0; i< headings.length; i++) {
  console.log(headings[i]);
}

//HTML要素をCSSセレクタで取得し、中身を出力する
console.log(document.querySelector('h1'));
console.log(document.querySelector('#second-heading'));
console.log(document.querySelector('.list'));

// 複数のHTML要素を取得し、定数に代入する
const cssHeadings = document.querySelectorAll('.heading');
const cssLists = document.querySelectorAll('li');

// 複数のHTML要素を1つずつ取得し、中身を出力する
for (let i = 0; i < cssHeadings.length; i++) {
  console.log(cssHeadings[i]);
}
for (let i = 0; i < cssLists.length; i++) {
  console.log(cssLists[i]);
}

//新しくli要素を作成し、定数に代入する
const li = document.createElement('li');

//作成したli要素にテキストを追加する
li.textContent = 'JavaScriptで新しく作成したリスト3';

//ｕｌ要素の末尾にli要素を追加する
document.querySelector ('ul').appendChild(li);
