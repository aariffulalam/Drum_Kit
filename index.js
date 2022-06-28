console.log("Js file is working.")
window.addEventListener("keydown",(e)=>{
    console.log(e.keyCode)
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`)
    // console.log(audio)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) return    //if 
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing")
    // key.classList.remove("playing")
    setTimeout(() => {
        key.classList.remove("playing")
    }, 200);
})