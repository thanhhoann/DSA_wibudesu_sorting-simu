<div align="center">
<h1 align="center">SORTING VISUALIZER</h1>
  <h3 align="center">
    Project for DSA Course at International University - VNU
    <br />
    <br />
    <a href="https://github.com/thanhhoann/DSA_wibudesu_sorting-simu/issues">Report Bug</a>
    ·
    <a href="https://github.com/thanhhoann/DSA_wibudesu_sorting-simu/issues">Request Feature</a>
  </h3>


[![Forks][forks-shield]][forks-url]
[![Issues][issues-shield]][issues-url]

</div>

<!-- About -->

# ABOUT

## 1. The team behind it 

| No.| Full Name |Student's ID | Email | Roles | Contribution |
|:--:| :-------------------: | :---------: | :------------------------------: | :-----------------------------: | :--------------------: |
| 1 | Phan Dinh Thanh Hoan| ITITWE20024 | ITITWE20024@student.hcmiu.edu.vn | TEAM LEADER, COVER ALMOST THE PROJECT | 25% |
| 2 | Hoang Tuan Kiet | ITDSIU21055 | ITDSIU210550@student.hcmiu.edu.vn | BASIC INTERACTIVE ACTIONS AND SLIDES | 25% |
| 3 | Nguyen Hai Ngoc | ITDSIU21057 | ITDSIU21057@student.hcmiu.edu.vn | LAYOUT, STYLING AND REPORT | 25% |
| 4 | Tran Nguyen Trung Quan | ITITDK21071 | ITITDK21071@student.hcmiu.edu.vn | VISUALIZATION THE SORTING PROCESS THROUGH REACTJS | 25% |

## 2. The project we are working on
The project's goal is to create a visualization tool for **sorting algorithms** using React JS. This can also demonstrate some basic features of the sorting algorithms in DSA. 
To further enhance the tool, **commitments** from others may also be acceptable.

To be short, the project aims to:

* []() Visualizing sorting algorithms in action.

* []() Contributing to developing people’s understanding of DSA.

* []()  Go through the process of web-tool programming and code refining.

* []()  Evaluate the ability to build more features on top of the basic code.

<img src="src/images/whole_project.png" alt="center">

<!-- METHODOLOGY -->

# METHODOLOGY

## 1. Rules
The team tried to build a web screen with simple functions that users can easily adapt it,  here is the summary of the main points:

* []() **Sorting selection**: There are 6 types of sorting algorithms provided, including Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort, and Heap Sort. Users can select one type of the desired sorting to do visualization.
* []() **Speed selection**: Provided 3 different speeds, including Slow, Medium, and Fast, which are in ascending order of speed values.
* []() **Reset button**: provided for generating a new array for sorting, and clearing all the previous actions.
* []() **Sort button**: provided for starting to apply the sorting algorithms to the array, also doing visualization corresponding to each sort.
* []()  **Visualization area and sorting information**: provided some bar to visualize the algorithms and an area to show the information of the algorithm, including its time complexity.

<img src="src/images/react_logo.jpg" alt="logo">

## 2. Design

### a. The UI/UX
* []() Sorting selection

  <img src="src/images/sort_selection.png" alt="sorting selection">
  
* []() Speed selection

  <img src="src/images/speed_selection.png" alt="speed selection">

* []() Reset button

   <img src="src/images/reset.png" alt="reset">
* []() Sort button

   <img src="src/images/sort.png" alt="sort">
* []() Visualization area and sorting information

   <img src="src/images/visualization_area.png" alt="area">


### b. The game logic
Our final project structure is below:

   <img src="src/images/structure.png" alt="structure">

Initially, the project has been separated into 3 parts: components package, utils package, and groups of testing applications class for each type of function class. The components package is the main class that includes almost our project, it contains styles and UI, which will be described in detail below:


**a) Styles**: Including classes in CSS type

* []() **AlgoInfo**: 

* []() **Button**: 

* []() **Dropdown**: 

* []() **Slider**: 

* []() **Toggle**: 

* []() **Visualizer**:

**b) UI**: Including classes in javascript (js) type:

* []() **AlgoInfo**: 

* []() **Button**: 

* []() **Dropdown**: 

* []() **Slider**: 

* []() **Toggle**: 

**c) Visualizer.js**: Including visualization of the algorithms information, sorting handling (randomly generating array, time limitation), and the basic algorithm rules of each sort in Javascript.

About the app classes, they will respectively test the class in the type of CSS, javascript, and reactJS.

## 3. UML Diagram
To better visualize the structure and algorithms, we included the UML diagrams for the whole project and each group mentioned.

* []()For the whole project:

   <img src="src/images/fullUML.png" alt="fullUML">
* []()For the scope: components (without styles package):

   <img src="src/images/component_UML.png" alt="components_lUML">

<!-- INSTALLATION -->

# INSTALLATION

### Steps

1. Clone the repo
   ```sh
   git clone https://github.com/thanhhoann/DSA_wibudesu_sorting-simu.git
   ```
2. Open in a programming IDE (supporting ReactJS)
3. Open the Terminal
4. To install and run the project, users should run the code below in the terminal:
> npm install 
> 
> npm start


<!-- RESULT -->

# DEMO - RESULT
Sample of the game screenshots that demo the game's current build:

- [X]  The menu when running game

<img src="Resources/menu.png" alt="menu">


<!-- CONTRIBUTING -->

# CONTRIBUTING

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any
contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also
simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push develop feature/AmazingFeature`)
5. Open a Pull Request

<!-- CONTACT -->

# CONTACT

Phan Dinh Thanh Hoan by  **[Email HERE](ITITWE20024@student.hcmiu.edu.vn)**

Project Link: [https://github.com/thanhhoann/DSA_wibudesu_sorting-simu](https://github.com/thanhhoann/DSA_wibudesu_sorting-simu)

<!-- ACKNOWLEDGMENTS -->

# ACKNOWLEDGEMENTS

We want to express our sincerest thanks to our lecturer and the people who have helped us to achieve this project's goals:
- []() Dr. Tran Thanh Tung
- []() M.Sc. Pham Quoc Son Lam
- []() M.Sc. Nguyen Quang Phu
- []() The README.md template from **[othneildrew](https://github.com/othneildrew/Best-README-Template)**

<!-- MARKDOWN LINKS & IMAGES -->


[forks-shield]: https://img.shields.io/github/forks/thanhhoann/DSA_wibudesu_sorting-simu?style=for-the-badge

[forks-url]: https://github.com/thanhhoann/DSA_wibudesu_sorting-simu/fork

[issues-shield]: https://img.shields.io/github/issues/thanhhoann/DSA_wibudesu_sorting-simu?style=for-the-badge

[issues-url]: https://github.com/thanhhoann/DSA_wibudesu_sorting-simu/issues

