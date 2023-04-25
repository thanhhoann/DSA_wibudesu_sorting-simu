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

  return <></>
}
