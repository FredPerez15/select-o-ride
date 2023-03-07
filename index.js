const pullInfo = () => {
    fetch('http://localhost:3000/questions')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        data.forEach((assesmentImages) => {
            renderAssesmentPics(assesmentImages)
        })
    })
}

const renderAssesmentPics = (assesmentImages) => {
   
}





document.addEventListener("DOMContentLoaded", pullInfo)