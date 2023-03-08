let questionsArray;
let currentIndex = 0

const pullInfo = () => {
    fetch('http://localhost:3000/questions')
    .then((response) => response.json())
    .then((data) => {
        questionsArray = data
        renderAssesmentPics(questionsArray[0])
    })
}

const renderAssesmentPics = (assesmentImages) => {
    // console.log(assesmentImages)
    const choicesDiv = document.querySelector('.choices')

    const assessmentElement = document.querySelector('#assessment')
    // console.log(assessmentElement)
    
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

const moveAssessmentAlong = (e) => {
    currentIndex += 1
    renderAssesmentPics(questionsArray[currentIndex])
}

document.addEventListener("DOMContentLoaded", pullInfo)