/**
 *  4.1 文字列の長さを返却するメソッドを実装してください
 *
 */

function length(str) {
  const strLength = str.length;
  return strLength;
}
length("Hello World!")

/**
 *  4.2 文字列のながさが偶数の場合にtrueを返却するメソッドを実装してください
 *
 */

function lengthIsEven(str) {
  const strLength = str.length;
  if (strLength % 2 === 0) {
    return true;
  }
  return false;
}
lengthIsEven("cat");

/**
 *  4.3 文字列の先頭一文字目を返却するメソッドを実装してください
 *
 */

function firstChar(str) {
  return str[0];
}
firstChar("cat");
/**
 *  4.4 文字列の末尾一文字目を返却するメソッドを実装してください
 *
 */

function lastChar(str) {
  return str[-1];
}
lastChar("cat");

/**
 *  4.5 文字列と二つの数字a, bを渡すとa文字目から, b文字目まで
 *  を返却するメソッドを実装してください
 *
 */

  function substring(str, a, b) {
    return str.substring(a - 1, b);
}
substring("Toronto", 3, 5);

/**
 *  4.6 引数に与えられた二つの引数のうち、一つ目の引数の文字列に二つ目の引数の文字列が
 *  含まれることを確認するメソッドを実装してください
 *
 *  example:
 *      "workplace", "work" => true
 *      "work", "workplace" => false
 *      "hogehoge", "" => true
 *      "hogegeho", "fugafuga" => false
 * */

function isInclude(a, b) {
  return a.includes(b)
}
isInclude("alpaca", "paca");

/**
 *  4.7 引数で渡された文字列を一文字ずつ表示するメソッドを実装してください
 *
 * example:
 *   'library'
 *    出力 => 'l'
 *           'i'
 *           'b'
 *           'r'
 *           'a'
 *           'r'
 *           'y'
 *
 */

function printByChar(str) {
  for (let i = 0; i < str.length; i++){
    console.log(str[i]);
  }
  // const char = str.split('');
  // for (let i = 0; i < str.length; i++){
  //   console.log(char[i]);
  // }
}
// printByChar("alpaca");

module.exports = {
  length,
  lengthIsEven,
  firstChar,
  lastChar,
  substring,
  isInclude,
  printByChar
}
