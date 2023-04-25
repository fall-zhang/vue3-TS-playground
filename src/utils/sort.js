const arr = [1, 64, 7, 5, 3, 77, 4, 66]

// js提供的排序算法
// arr.sort((left, right) => left - right)

// 冒泡排序，确实是冒泡排序
// for (let i = 0; i < arr.length - 1; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] > arr[j]) {
//       const num = arr[j]
//       arr[j] = arr[i]
//       arr[i] = num
//     }
//   }
// }

// 选择排序（将最小的数放到最后面）
function choseSort(arr) {
  const length = arr.length
  let currentIndex = arr.length - 1
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < currentIndex; j++) {
      if (arr[j] < arr[currentIndex]) {
        const store = arr[currentIndex]
        arr[currentIndex] = arr[j]
        arr[j] = store
      }
    }
    currentIndex -= 1
  }
  return arr
}

console.log(choseSort(arr))
