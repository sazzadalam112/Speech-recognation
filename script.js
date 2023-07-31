const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const rec = new SpeechRecognition();

rec.lang = 'en-US';
rec.continuous = true;

rec.onresult = function(e) {
    const acceptedColors = [
        'red',
        'blue',
        'green',
        'yellow',
        'pink',
        'brown',
        'purple',
        'orange',
        'black',
        'white',
      ];
    for(let i = e.resultIndex; i < e.results.length;i++) {
        const script = e.results[i][0].transcript;
       if(acceptedColors.includes(script)) {
        document.body.style.backgroundColor = script; 
       } else{
        alert('please say a color');
       }
    }
    // console.log(e.results[0][0].transcript);
};
rec.start();








