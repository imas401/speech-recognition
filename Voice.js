const btn = document.getElementById('btn');
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function(){
    console.log ('please speak');
}

recognition.onresult = function(event){
   var text = event.results[0][0].transcript;
    console.log(text);
    document.getElementById('result').innerHTML ='You said to me ' + text;
    read(text);
} 

function read(text){
    var speech = new SpeechSynthesisUtterance();
    speech.text = text;
    if(text.includes('time'))
    speech.text ='It is' + new Date ().getHours() + '' + new Date().getMinutes()+' right now';
    else if (text.includes('my birthday'))
    speech.text = 'Do you think you are famouse! How could I know that';
    else if (text.includes('love me'))
    speech.text ='of course not!';
    window.speechSynthesis.speak(speech);
}