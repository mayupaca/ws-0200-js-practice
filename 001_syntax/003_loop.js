/**
 *  3.1 0~10までを表示するメソッドを実装してください
 *
 */

function printOneToTen() {
  for (let i = 0; i <= 10; i++){
    console.log(i);
  }
}
printOneToTen();

/**
 *  3.2 0~10までの数字を数字の大きい順に表示するメソッドを実装してください
 * */

function printOneToTenDesc() {
  for (let i =10; i >= 0; i--){
    console.log(i);
  }
}
printOneToTenDesc();

/**
 *  3.3 while文を使って0~10までの数字を小さい順番に表示するメソッドを実装してください
 *
 */

function printOneToTenWhile() {
  let count = 0;
  while (count <= 10){
    console.log(count);
    count++;
  }
}
printOneToTenWhile();

/**
 *  3.4 while文を使って0~10までの数字を大きい順番に表示するメソッドを実装してください
 *
 */

function printOneToTenWhileDesc() {
  let count = 10;
  while (count >= 0){
    console.log(count);
    count--;
  }
}
printOneToTenWhileDesc();

module.exports = {
  printOneToTen,
  printOneToTenDesc,
  printOneToTenWhile,
  printOneToTenWhileDesc
}
