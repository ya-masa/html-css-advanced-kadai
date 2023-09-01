//同期処理を実行する
console.log('処理1');
console.log('処理2');
console.log('処理3');

//非同期処理
setTimeout(() =>{
  console.log('非同期処理4');
},2000);