//変数の初期化
let unTyped ='';

//必要なHTML要素の取得
const untypedfield = document.getElementById('untyped');

//複数のテキストを格納する配列
const textLists = [
  'Hello World','This is my App','How are you?',
  'Today is sunny','I love JavaScript!','Good morning',
  'I am Japanese','Let it be','Samurai',
  'I want to be a programmer','What day is today?',
  'I want to build a web app','Nice to meet you',
  'Chrome Firefox Edge Safari','machine learning',
  'Brendan Eich','John Resig','React Vue Angular',
  'Netscape Communications','undefined null NaN',
  'Thank you very much','Google Apple Facebook Amazon',
  'ECMAScript','console.log','for while if switch',
  'var let const','Windows Mac Linux iOS Android',
  'programming', 'smile anytimes','Have good Time',
  'Love & Peace'];

//ランダムなテキストを表示
const createText = () => {
  let random = Math.floor(Math.random() * textLists.length);
  unTyped = textLists[random];
  console.log(untypedfield);
  console.log(unTyped);
  untypedfield.textContent = unTyped;
};

//キー入力の判定
const keyPress = e => {};

//タイピングスキルのランクを判定
const rankCheck = score => {};

//ゲームを修了
const gameOver = id => {};

//カウントダウンタイマー
const timer = () => {};