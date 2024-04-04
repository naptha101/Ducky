
const  getJokes=async ()=>{
try{
const res=await fetch("https://api.chucknorris.io/jokes/random");
const data=await res.json();
const jok=document.querySelector("#joke");
jok.innerHTML=data.value;


}
catch(err){console.log(err);}
}
// const url = 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=https%3A%2F%2Fwww.masterclass.com%2Farticles%2Fhat-styles-explained&length=3';
// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '0486428565msh34ab0c01564f1f1p170ebbjsnf0a5356835ab',
//         'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
//     }
// };

// const getArticleSummary = async () => {
//     try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//         const jok=document.querySelector("#joke");
//         jok.innerHTML=result;
//     } catch (error) {
//         console.error(error);
//     }
// };
function getArticleSummary() {
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();
    const data=document.querySelector('#url');
    
    // Define the request URL
    var url = 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url='+data.value+'&length=3';




    // Set up the request
    xhr.open('GET', url, true);
    xhr.setRequestHeader('X-RapidAPI-Key', '5798a4515cmshc9dcf19581ec2d8p18b880jsn48f5a4de8813');
    xhr.setRequestHeader('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');

    // Define a callback function to handle the response
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            // Success response
            var responseData = JSON.parse(xhr.responseText);
            console.log(responseData);
            // Display the response data
            //document.getElementById('result').textContent = JSON.stringify(responseData, null, 2);
            div.innerHTML=""
            const jok=document.querySelector("#joke");
   jok.innerHTML=' <svg id="speak" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="50px" height="50px" viewBox="0 0 24 24"><path d="M9,14a4,4,0,1,0-4-4A4,4,0,0,0,9,14ZM9,8a2,2,0,1,1-2,2A2,2,0,0,1,9,8ZM6,15h6a4,4,0,0,1,4,4v2a1,1,0,0,1-2,0V19a2,2,0,0,0-2-2H6a2,2,0,0,0-2,2v2a1,1,0,0,1-2,0V19A4,4,0,0,1,6,15Zm11.462-5A5.977,5.977,0,0,1,15.7,14.253a1,1,0,0,1-1.414-1.414,4.015,4.015,0,0,0,0-5.678A1,1,0,1,1,15.7,5.747,5.977,5.977,0,0,1,17.462,10Zm-.181,7.7a1,1,0,0,1,.024-1.414,8.667,8.667,0,0,0,0-12.562A1,1,0,0,1,18.7,2.281a10.667,10.667,0,0,1,0,15.438,1,1,0,0,1-1.414-.024Z"/></svg>'+JSON.stringify(responseData.summary, null, 2);
        } else {
            // Error response
            const jok=document.querySelector("#joke")
            jok.innerHTML=JSON.stringify(responseData.summary, null, 2)
            div.innerHTML=""
             url.innerHTML="This page dosen't have a article or error occured"
            console.error('Request failed with status ' + xhr.status);
        }
    };

    // Send the request
    xhr.send();
}

document.addEventListener("click", function(event) {
    if (event.target.id === "speak") {
        var text = document.querySelector("#joke").textContent;
        var utterance = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance);
    }
});
const div=document.querySelector(".div");
const btn=document.querySelector("#btn");
btn.addEventListener('click',()=>{
//     const jok=document.querySelector("#joke");
//    jok.innerHTML=url;
div.innerHTML="<img src='loading-icon-animated-gif-19.jpg' alt='loading..' height='60px' width='60px ' />"
getJokes();
getArticleSummary();

})
