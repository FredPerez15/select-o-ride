const pullInfo = () => {
    fetch('http://localhost:3000/questions')
    .then((response) => response.json())
    .then((data) => {
        data.forEach((assesmentImages) => {
            renderAssesmentPics(assesmentImages)
        })
    })
}


const renderAssesmentPics = (assesmentImages) => {
    const choicesDiv = document.querySelector('.choices')
    
    const imgElement1 = document.createElement('img')
    const imgElement2 = document.createElement('img')
    const imgElement3 = document.createElement('img')

    imgElement1.src = assesmentImages.image1
    // imgElement2.src = assesmentImages.image2
    // imgElement3.src = assesmentImages.image3
    
    choicesDiv.append(imgElement1,imgElement2,imgElement3)
   
}





document.addEventListener("DOMContentLoaded", pullInfo)