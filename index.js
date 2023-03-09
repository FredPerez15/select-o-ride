let questionsArray;
let currentIndex = 0
let resultsArray;


const pullInfo = () => {
    fetch('http://localhost:3000/questions')
    .then((response) => response.json())
    .then((data) => {
        questionsArray = data
        renderAssesmentPics(questionsArray[0])
    })
}

const renderAssesmentPics = (assesmentImages) => {
    console.log(assesmentImages)
    
    const choicesDiv = document.querySelector('.choices')
    const assessmentElement = document.querySelector('#assessment')
    
    const imgElement1 = document.createElement('img')
    const imgElement2 = document.createElement('img')
    const imgElement3 = document.createElement('img')

    imgElement1.src = assesmentImages.image1
    imgElement2.src = assesmentImages.image2
    imgElement3.src = assesmentImages.image3

    imgElement1.addEventListener('click', moveAssessmentAlong)
    imgElement2.addEventListener('click', moveAssessmentAlong)
    imgElement3.addEventListener('click', moveAssessmentAlong)

    assessmentElement.innerText = assesmentImages.question

    choicesDiv.innerHTML = ""
    choicesDiv.append(imgElement1,imgElement2,imgElement3) 
}
const pullResults = () => {
    fetch('http://localhost:3000/results')
      .then((response) => response.json())
      .then((data) => {
        resultsArray = data
        resultsArray.forEach((result) => {
            renderResultsPics(result)
            
        });
      });
  }
  
  const renderResultsPics = (result) => {
    const picDiv = document.querySelector('.results')
      const resultingPics = document.createElement('img');
      resultingPics.src = result.image;
     picDiv.append(resultingPics)
  }
 
  pullResults();   

const moveAssessmentAlong = (e) => {
    currentIndex += 1
    renderAssesmentPics(questionsArray[currentIndex])
    // if currentIndex === questionsArray.length - 1
    // render result pics 
    switch(e.target.src) {
        case "https://st2.depositphotos.com/2413227/9749/v/600/depositphotos_97493558-stock-video-girl-driving-the-car.jpg":
        const choice1  =  resultsArray.filter((result) =>  result.id != 1)
        const picDiv = document.querySelector('.results')
            picDiv.innerHTML= ""
            choice1.forEach((result) => {
                renderResultsPics(result)
                
            });
        break; 
    }



}

const pullResults = () => {
    fetch('http://localhost:3000/results')
      .then((response) => response.json())
      .then((data) => {
        data.forEach((result) => {
            renderResultsPics(result)
        });
    });
  }
  
const renderResultsPics = (result) => {
    console.log(result)
}
    
    
pullResults()

document.addEventListener("DOMContentLoaded", pullInfo)