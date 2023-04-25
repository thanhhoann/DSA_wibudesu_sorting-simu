export default function Visualizer() {

  // Bubble Sort
const bubbleSort = async () => {
  let currentArr = primaryArray
  let sorted = false
  setAlgorithm({name: 'Bubble Sort', timeComplexity: 'O(n^2)'})

  while (!sorted) {
      sorted = true

      for (let i = 0; i < currentArr.length - 1; i++) {
          for (let j = 0; j < currentArr.length - i - 1; j++) {
              if (currentArr[j] > currentArr[j + 1]) {
                  let temp = currentArr[j]
                  currentArr[j] = currentArr[j + 1]
                  currentArr[j + 1] = temp
                  setPrimaryArray([...primaryArray, currentArr])

                  let bar1 = document.getElementById(j).style
                  let bar2 = document.getElementById(j + 1).style
                  bar1.backgroundColor = '#DC143C'
                  bar2.backgroundColor = '#6A5ACD'

                  await sleep(animationSpeed)

                  bar1.backgroundColor = '#FF7F50'
                  bar2.backgroundColor = '#FF7F50'

                  sorted = false

              }
          }
      }
      if (sorted) finishedAnimation()
  }
}
// Selection Sort
const selectionSort = async () => {
  let currentArr = primaryArray
  let sorted = false
  setAlgorithm({name: 'Selection Sort', timeComplexity: 'O(n^2)'})

  while (!sorted) {
      sorted = true

      for (let i = 0; i < currentArr.length - 1; i++) {
          for (let j = i + 1; j < currentArr.length; j++) {
              if (currentArr[i] > currentArr[j]) {
                  let swap1 = currentArr[i]
                  let swap2 = currentArr[j]
                  currentArr[i] = swap2
                  currentArr[j] = swap1
                  setPrimaryArray([...primaryArray, currentArr])

                  let bar1 = document.getElementById(i).style
                  let bar2 = document.getElementById(j).style
                  bar1.backgroundColor = '#DC143C'
                  bar2.backgroundColor = '#6A5ACD'

                  await sleep(animationSpeed)

                  bar1.backgroundColor = '#FF7F50'
                  bar2.backgroundColor = '#FF7F50'

                  sorted = false
              }
          }
      }
      if (sorted) finishedAnimation()
  }
}

// Insertion Sort
const insertionSort = async () => {
  let currentArr = primaryArray
  let sorted = false
  setAlgorithm({name: 'Insertion Sort', timeComplexity: 'O(n^2)'})

  while (!sorted) {
      sorted = true

      for (let i = 1; i < currentArr.length; i++) {
          let current = currentArr[i]
          let j = i - 1
          while (j >= 0 && currentArr[j] > current) {
              currentArr[j + 1] = currentArr[j]
              setPrimaryArray([...primaryArray, currentArr])

              let bar1 = document.getElementById(j + 1).style
              let bar2 = document.getElementById(j).style
              bar1.backgroundColor = '#DC143C'
              bar2.backgroundColor = '#6A5ACD'

              await sleep(animationSpeed)

              bar1.backgroundColor = '#FF7F50'
              bar2.backgroundColor = '#FF7F50'

              j--
              sorted = false
          }
          currentArr[j + 1] = current
          setPrimaryArray([...primaryArray, currentArr])
      }
      if (sorted) finishedAnimation()
  }
}

// Merge Sort
const mergeSort = async () => {
  let currentArr = primaryArray
  setAlgorithm({name: 'Merge Sort', timeComplexity: 'O(n log(n))'})

  await sort(currentArr, 0, currentArr.length - 1)
  finishedAnimation()
}

const sort = async (arr, low, high) => {
  if (low < high) {
      let mid = Math.floor((low + high) / 2)
      await sort(arr, low, mid)
      await sort(arr, mid + 1, high)
      await merge(arr, low, mid, high)
  }
}

const merge = async (arr, low, mid, high) => {
  let i = low
  let j = mid + 1
  let k = 0
  let tempArr = []

  while (i <= mid && j <= high) {
      if (arr[i] < arr[j]) {
          tempArr[k] = arr[i]
          i++
          k++
      } else {
          tempArr[k] = arr[j]
          j++
          k++
      }
      setPrimaryArray([...primaryArray, tempArr])

      let bar1 = document.getElementById(i).style
      let bar2 = document.getElementById(j).style
      bar1.backgroundColor = '#DC143C'
      bar2.backgroundColor = '#6A5ACD'

      await sleep(animationSpeed)

      bar1.backgroundColor = '#FF7F50'
      bar2.backgroundColor = '#FF7F50'

  }

  while (i <= mid) {
      tempArr[k] = arr[i]

      setPrimaryArray([...primaryArray, tempArr])

      let bar1 = document.getElementById(i).style
      let bar2 = document.getElementById(j).style
      bar1.backgroundColor = '#DC143C'
      bar2.backgroundColor = '#6A5ACD'

      await sleep(animationSpeed)

      bar1.backgroundColor = '#FF7F50'
      bar2.backgroundColor = '#FF7F50'


      i++
      k++
  }

  while (j <= high) {
      tempArr[k] = arr[j]

      setPrimaryArray([...primaryArray, tempArr])

      let bar1 = document.getElementById(i).style
      let bar2 = document.getElementById(j).style
      bar1.backgroundColor = '#DC143C'
      bar2.backgroundColor = '#6A5ACD'

      await sleep(animationSpeed)

      bar1.backgroundColor = '#FF7F50'
      bar2.backgroundColor = '#FF7F50'


      j++
      k++
  }

  for (let i = low; i <= high; i++) {
      arr[i] = tempArr[i - low]
      setPrimaryArray([...primaryArray, arr])

  }
}

  return <></>
}
