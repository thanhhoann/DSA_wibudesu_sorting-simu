import React, { useEffect, useState } from "react";

export default function AlgoInfo({ algo }) {
  const [details, setDetails] = useState({});

  useEffect(() => {
    if (algo == "bubbleSort") {
      setDetails({ name: "Bubble Sort", time: "O(n^2)" });
    }
    if (algo == "selectionSort") {
      setDetails({ name: "Selection Sort", time: "O(n^2)" });
    }
    if (algo == "insertionSort") {
      setDetails({ name: "Insertion Sort", time: "O(n^2)" });
    }
    if (algo == "mergeSort") {
      setDetails({ name: "Merge Sort", time: "O(n log n)" });
    }
    if (algo == "quickSort") {
      setDetails({ name: "Quick Sort", time: "O(n log n)" });
    }
    if (algo == "HeapSort") {
      setDetails({ name: "Heap Sort", time: "O(n log n)" });
    }
  }, []);

  return (
    <>
      <div className="algoInfo">
        <div className="algoInfo-name">
          <h2>Algorithm : {details.name}</h2>
        </div>
        <div className="algoInfo-time">
          <h2>Time complexity : {details.time}</h2>
        </div>
      </div>
    </>
  );
}
