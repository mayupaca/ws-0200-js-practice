
/**
 *  2.3.1 リニアサーチ
 *
 *  リニアサーチを実装してください。(入力は数値のみ)
 *  二つ目の引数に合致した配列の添字を返却してください。
 *  合致のする数字のない場合は-1を返却してください。
 *
 *  example:
 *    [1, 3, 2, 4, 5], 3 => 1
 *    [5, 3, 2, 1], 6 => -1
 */

function linearSearch (array, target) {
  for (let i = 0; i < array.length; i++) {
    if (target === array[i]) {
      return i;
    } 
  }
  return -1;
}

/**
 *  2.3.2 バイナリサーチ
 *
 *  バイナリサーチを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 2, 3, 4, 5], 2 => 2
 *    [1, 2, 3, 4] 5 => -1
 */

function binarySearch (array, target) {
  let index = -1;
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while(leftIndex <= rightIndex) {
    //真ん中の値を求める
    let midIndex = Math.floor((leftIndex + rightIndex) / 2); //memo: let mid = Math.floor(array.length / 2);は変数midが変わらないからinfinity loopになる。
    if(array[midIndex] === target) {
      index = midIndex;
      break;
    } else if(array[midIndex] < target) {
      //targetがarray[midIndex]より大きいとき、array[midIndex]より小さい値ではないから、leftIndexを移動。
      leftIndex = midIndex + 1;
    } else {
      //targetがarray[midIndex]より小さいとき、array[midIndex]より大きい値ではないから、rightIndexを移動。
      rightIndex = midIndex - 1;
    }
  }
  return index;
}

module.exports = {
  linearSearch,
  binarySearch
}
