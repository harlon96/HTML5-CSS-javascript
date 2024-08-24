function speak() {
    var voice = new SpeechSynthesisUtterance();
    voice.text = "If you are interested in contacting me you can via email which is harlonhutchison@yahoo.com or you may leave a message at 4075555555. Thank you for your time and have a great day!";
    speechSynthesis.speak(voice); 
}