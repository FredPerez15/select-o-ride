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
        // resultsArray.forEach((result) => {
        //     renderResultsPics(result)
            
        //});
      });
  }
  
  const renderResultsPics = (result) => {
      const picDiv = document.querySelector('.results')
      const resultingPics = document.createElement('img');
      resultingPics.src = result.image;
      picDiv.append(resultingPics)
  }
 
  pullResults();   

let choice1;
let choice2;
let choice3;
let choice4;
let choice5;


const moveAssessmentAlong = (e) => {
    currentIndex += 1
    if (currentIndex < questionsArray.length) {
        renderAssesmentPics(questionsArray[currentIndex])
    } 

    const picDiv = document.querySelector('.results')
    switch(e.target.src) {
        case "https://st2.depositphotos.com/2413227/9749/v/600/depositphotos_97493558-stock-video-girl-driving-the-car.jpg":
            choice1  =  resultsArray.filter((result) =>  result.id != 1)
            picDiv.innerHTML= ""
            choice1.forEach((result) => {
                //renderResultsPics(result)
                console.log(result)
            });
        break; 
        case "https://cdn.xl.thumbs.canstockphoto.com/canstock18450879.jpg":
            choice1  =  resultsArray.filter((result) =>  result.id != 1)
            picDiv.innerHTML= ""
            choice1.forEach((result) => {
                //renderResultsPics(result)
                console.log(result)
            });
        break;
        case "https://media.istockphoto.com/id/1344954298/photo/family-with-dog-in-the-car.jpg?s=612x612&w=0&k=20&c=anIzsubkI7wzUiSHC_gUIVyJuSX2KXJ1-Lu5c25CCzA=":
            choice1  =  resultsArray.filter((result) =>  result.id != 2 && result.id != 5)
            picDiv.innerHTML= ""
            choice1.forEach((result) => {
                //renderResultsPics(result)
                console.log(result)
            });
        break;
        case "https://thumbs.dreamstime.com/z/washington-dc-city-scene-intersection-august-image-street-highrise-buildings-vehicles-street-parking-august-usa-77837271.jpg":
            choice2  =  choice1.filter((result) =>  result.id != 3 && result.id != 4)
            picDiv.innerHTML= ""
            choice2.forEach((result) => {
                //renderResultsPics(result)
                console.log(result)
            });
        break;
        case "https://images.adsttc.com/media/images/6041/246f/f91c/81cf/e700/0078/newsletter/Nick_Fewings_Unsplash.jpg?1614881894":
            choice2  =  choice1.filter((result) =>  result.id != 3)
            picDiv.innerHTML= ""
            choice2.forEach((result) => {
                //renderResultsPics(result)
                console.log(result)
            });
        break;
        case "https://www.roughton.com/cache/cropped/images/Service%20page%20images/Mountainous_terrain_2_rfs-300x300.jpg":
            choice2  =  choice1.filter((result) =>  result.id != 2 && result.id !=5)
            picDiv.innerHTML= ""
            choice2.forEach((result) => {
                //renderResultsPics(result)
                console.log(result)
            });
        break;
        case "https://www.cometsigns.com/assets/images/content/img_gas_2.jpg":
            choice3  =  choice2.filter((result) =>  result.id != 1 && result.id !=6)
            picDiv.innerHTML= ""
            choice3.forEach((result) => {
                //renderResultsPics(result)
                console.log(result)
            });
        break;
        case "https://www.fairfaxcounty.gov/landdevelopment/sites/landdevelopment/files/Assets/images/electric-vehicle-charging-stations.jpg":
            choice3  =  choice2.filter((result) =>  result.id != 4)
            picDiv.innerHTML= ""
            choice3.forEach((result) => {
                //renderResultsPics(result)
                console.log(result)
            });
        break;
        case "https://hips.hearstapps.com/hmg-prod/images/2019-toyota-prius-limited-1545163015.jpg?crop=0.819xw:1.00xh;0.104xw,0&resize=640:*":
            choice3  =  choice2.filter((result) =>  result.id != 2 && result.id != 4)
            picDiv.innerHTML= ""
            choice3.forEach((result) => {
                //renderResultsPics(result)
                console.log(result)
            });
        break;
        case "https://images.unsplash.com/photo-1616455579100-2ceaa4eb2d37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym13JTIwY2FyfGVufDB8fDB8fA%3D%3D&w=1000&q=80":
            choice4  =  choice3.filter((result) => result.id != 2 && result.id != 5)
            picDiv.innerHTML= ""
            choice4.forEach((result) => {
                //renderResultsPics(result)
                console.log(result)
            });
        break;
        case "https://pattersontruckstop.com/wp-content/uploads/sites/60/bb-plugin/cache/used-lifted-truck-gmc-1-landscape.jpeg":
            choice4  =  choice3.filter((result) => result.id != 1 && result.id != 2 && result.id != 5)
            picDiv.innerHTML= ""
            choice4.forEach((result) => {
                //renderResultsPics(result)
                console.log(result)
            });
        break; 
        case "https://low-offset.com/wp-content/uploads/2022/08/fast-wagon.jpg":
            choice4  =  choice3.filter((result) => result.id != 1 && result.id != 3 && result.id != 6)
            picDiv.innerHTML= ""
            choice4.forEach((result) => {
                //renderResultsPics(result)
                console.log(result)
            });
        break; 
        case "https://static.mansionglobal.com/production/media/article-images/3300ace0a0cf533361e487a4d1fe578c/large_1-Photo-by-Charles-Smith-Design-by-Matt-Fajkus-Architecture.jpg":
            choice5  =  choice4.filter((result) => result.id != 3)
            picDiv.innerHTML= ""
            choice5.forEach((result) => {
                renderResultsPics(result)
            });
        break; 
        case "https://www.huntingtonplacedetroit.com/assets/img/P9391-60b6a36701.jpg":
            choice5  =  choice4.filter((result) => result.id != 5)
            picDiv.innerHTML= ""
            choice5.forEach((result) => {
                renderResultsPics(result)   
            });
        break; 
        case "https://media.timeout.com/images/105243662/750/562/image.jpg":
            choice5  =  choice4.filter((result) => result.id != 1 && result.id != 3 && result.id != 6)
            picDiv.innerHTML= ""
            choice5.forEach((result) => {
            renderResultsPics(result)
            });
        break; 
        default: 
            const defObj = {
                result: "We Recommend a Toyota Crown (or similar)",
                image: 'https://www.gannett-cdn.com/presto/2022/10/14/PDTF/984ab931-057f-4b92-9e73-1cd373f6d699-IMG_3252.JPEG'
            }
            renderResultsPics(defObj)
    }
 
}

document.addEventListener("DOMContentLoaded", pullInfo)
