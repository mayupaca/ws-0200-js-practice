/**
 *  5.1 配列の要素を全て表示するメソッドを実装してください
 *
 */

function printArray(array) {
  for (let i of array) {
    console.log(i);
  }
};

/**
 *  5.2 関数内で全ての曜日を配列として宣言して返却するメソッドを実装してください
 *
 *  example:
 *     [
 *       "Monday",
 *       "Tuesday",
 *       "Wednesday",
 *       "Thursday",
 *       "Friday",
 *       "Saturday",
 *       "Sunday",
 *      ]
 *
 */
function getDays() {
  let dayOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  return dayOfTheWeek;
}

/**
 *  5.3 配列に特定の数があった場合にtrue、そうでない場合にfalseを返す関数を実装してください
 *
 *  example:
 *    [1, 2, 3], 1 => true
 *    [1, 2, 3], 5 => false
 *    [], 5 => false
 *
 */

function findNum(array, num) {
  for (let item of array) {
    if (item === num) {
      return true;
    }
  }
  return false;
}

/**
 *  5.4 配列に重複した要素があれば、true、そうでなければfalseを返す関数を実装してください
 *
 *  example:
 *    [1, 2, 3] => false
 *    [1, 2, 2, 3] => true
 *    [] => false
 *
 */

function isDuplicate(array) {
  for (let i = 0; i < array.length; i++) {
    // check if the number duplicate with other number
    const cursor = array[i]
    for (let j = i + 1; j < array.length; j++) {
        if (cursor === array[j]) {
            return true
        }
    }
 }
  return false
//  return new Set(array).size !== array.length;
}

module.exports = {
  printArray,
  getDays,
  findNum,
  isDuplicate
}
