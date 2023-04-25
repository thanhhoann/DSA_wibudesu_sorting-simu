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


  return <></>
}
