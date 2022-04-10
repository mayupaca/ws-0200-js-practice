
/**
 *  数列の和
 *
 *  再帰処理を用いて、0からnまでの数列の和を返す関数を実装してください
 *
 *  example:
 *    3 => 6
 *    10 => 55
 *    30 => 55
 */

function sumSequence (n, sum = 0) {
  if (n === 0) return 0;
  //もしif(n === 0) return 0;がないとstack overflowする。
  return sumSequence(n - 1) + n;
}

/**
 *  フィボナッチ数
 *
 *  指定された数のフィボナッチ数を返却する関数を実装してください。
 *  https://www.studyplus.jp/445
 *
 *  example:
 *    input: 10 => [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
 */

 function fibonacci (num, index = 0, array = []) {
  if (num === 0) {
      return []
  }
  if (num === 1) {
      return [1]
  }
    
  if (num === 2) {
      return [1, 1]
  }
    
  const prev = fibonacci(num - 1)
    
  return [...prev, prev[prev.length-1] + prev[prev.length-2]]

/**
 * if (num == 0) {
    return array
  }

  if (index === 0 || index === 1) {
    array.push(1)
    return fibonacci(num - 1, index + 1, array)
  }

  array.push(array[index - 2] + array[index - 1])
  return fibonacci(num - 1, index + 1, array)
----------------------------------------------
  if (num === 0) {
      return []
  }
  if (num === 1) {
      return [1]
  }
    
  if (num === 2) {
      return [1, 1]
  }
    
  const prev = fibonacci(num - 1, 0, Array)
    
  return [...prev, prev[prev.length-1] + prev[prev.length-2]]
  ----------------------------------------------
  if (num === 0) {
    return array
  }
    
  if (num === 1) {
    return [1]; 
  }

  if (num === 2) {
    return [1, 1]; 
  }
    
  const prev = fibonacci(num-1, 0, array)
  prev.push(prev[prev.length-1] + prev[prev.length-2])
    
  return prev;
 */
}

/**
 *  2.4.2 ディレクトリに含まれるファイルサイズの合計
 *
 *  ツリー上のオブジェクトで渡されるディレクトリの
 *  ファイルサイズの合計を求める関数を実装してください。
 *
 *  example:
 *    {
 *      type: 'folder',
 *      size: 0,
 *      children: [
 *        {
 *          type: 'folder',
 *          size: 0,
 *          children: [
 *            {
 *              type: 'folder',
 *              size: 0,
 *              children: [
 *                {
 *                  type: 'file',
 *                  size: 5
 *                },
 *                {
 *                  type: 'file',
 *                  size: 7
 *                },
 *                {
 *                  type: 'file',
 *                  size: 9
 *                },
 *              ]
 *            }
 *          ]
 *        },
 *        {
 *          type: 'file',
 *          size: 3
 *        },
 *        {
 *          type: 'file',
 *          size: 4
 *        },
 *        {
 *          type: 'file',
 *          size: 10
 *        },
 *      ]
 *    }
 *    => 38
 */

 function fileSize (node, sum = 0) {
  if (node.children === undefined) return node.size;
  for (let i = 0; i < node.children.length; i++) {
    let child = fileSize(node.children[i])
    node.size += child;
  }
  // node.children.forEach(function(child) {
  //   let r = fileSize(child);
  //   node.size += r;
  // })
  return node.size;
}


module.exports = {
  sumSequence,
  fibonacci,
  fileSize
}
