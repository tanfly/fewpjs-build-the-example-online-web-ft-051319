// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'



const error = document.getElementById("modal")
error.style.visibility = "hidden"

function liker(){
  let hearts = document.getElementsByClassName("like-glyph")
  for (let heart of hearts) {
    heart.addEventListener("click", function(e){
      mimicServerCall()
        .then(response => {
          if (e.target.innerText == EMPTY_HEART){
          e.target.innerHTML = `
          <span class="like-glyph activated-heart">
          ${FULL_HEART}
          </span>
          `
          ;
          }
          else {
            e.target.innerHTML = `
            <span class="like-glyph">
            ${EMPTY_HEART}
            </span>
            `
          }
        })
        .catch(error => {error.style.visibility = "visible";
        error.innerText = `
        ${error.message}
        `
        ;
        setTimeout(function(){
          error.style.visibility = "hidden"}, 5000);
        })
      })
    }
  }
  
liker()






//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
