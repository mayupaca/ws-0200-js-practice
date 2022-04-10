/**
 *  2.2.1 バブルソート
 * 隣同士のデータを比較
 *
 *  バブルソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function bubbleSort (array) {
  for (let i = 0; i < array.length; i++) {
    //配列の左側から比較
    for (let j = array.length - 1; j > i; j--) {
      //右側の値より左側の値が大きい場合は入れ替える
      if (array[j] < array[j - 1]) {
        let tmp = array[j - 1];
        array[j - 1] = array[j];
        array[j] = tmp;
      }
    }
  }
  return array
}

/**
 *  2.2.2 挿入ソート　insertion sort
 * 整列済み要素の次の要素を、整列済みの部分の適切な位置に挿入する
 *
 *  挿入ソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function insertSort (array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      //jとjの右隣の値を比較。jの値が大きかったら入れ替え。
      if (array[j] > array[j + 1]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    } 
  }
  return array
}

/**
 *  2.2.3 マージソート
 * 配列を半分ずつ分割して、小さい順に並べ替えてマージ
 *
 *  マージソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function mergeSort (arr) {
  if (arr.length === 0) {
    return [];
  }
  if (arr.length === 1) {
    return arr;
  }
  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return [...result, ...left, ...right];
}

/**
 *  2.2.4 クイックソート
 *
 *  クイックソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function quickSort (a, start = 0, end = (a.length -1)) {
  if (a.length === 0) {
    return [];
  }
  if (a.length === 0) {
    return a;
  }

  let pivot = a[0];
  start = [];
  end = [];
  
  for (let i = 1; i < a.length; i++) {
    if (a[i] < pivot) {
      start.push(a[i]);
    } else {
      end.push(a[i]);
    }
  }
  return quickSort(start).concat(pivot, quickSort(end))
};

module.exports = {
  bubbleSort,
  insertSort,
  mergeSort,
  quickSort
}
