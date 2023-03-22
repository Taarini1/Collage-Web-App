var SpeechRecognition = window.webkitSpeechRecognition;

var Recognition = new SpeechRecognition();

function start(){
    document.getElementById("textarea").innerHTML="";
    Recognition.start();
    

}

Recognition.onresult = 
function run(event){
    console.log(event)
    var bruh = event.results[0][0].transcript;
    if (bruh=="take my selfie"){
        speak();
           
    }
    document.getElementById("textarea").innerHTML= bruh;     
  
}


function speak(){
    var synth = window.speechSynthesis;

    speak_data = "taking your selfie in 10 seconds"
    var utter_this = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
    
camera=document.getElementById("camera")
Webcam.attach(camera);

setTimeout(function(){   
    takeSnapshot()
    save();
  }  ,1000);


}




Webcam.set({
width:360,
height:250,
image_format:'png',
png_quality:90
});





function takeSnapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML= "<img id='image' src='"+data_uri+ "'>"
    })

    
}

function save(){
    link=document.getElementById("download");
    Image_src=document.getElementById("image").src;
    link.href=Image_src
    link.click();

}