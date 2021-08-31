
const isInstagram = navigator.userAgent.toLowerCase().includes('instagram');

function loadGalaxy() {
  const starfieldEl = document.querySelector('#starfield');
  const shootingStarEl = document.querySelector('#shooting-star');

  starfieldEl.style.width ='100%';
  starfieldEl.style.height='100%';
  starfieldEl.width = starfieldEl.offsetWidth;
  starfieldEl.height = starfieldEl.offsetHeight;

  shootingStarEl.style.width = '100%';
  shootingStarEl.style.height = '100%';
  shootingStarEl.width = shootingStarEl.offsetWidth;
  shootingStarEl.height = shootingStarEl.offsetHeight;
  try {
    if (isInstagram) {
      throw "load on same thread";
    }
    const starfield = starfieldEl.transferControlToOffscreen();
    const shootingStar = shootingStarEl.transferControlToOffscreen();
    const starfieldWorker = new Worker('js/starfield.worker.js');
  
    starfieldWorker.postMessage({ starfield, shootingStar }, [starfield, shootingStar]);
  } catch (err) {
    console.log(err);
    // Load on same thread
    const canvasScript = document.createElement('script');
    canvasScript.src = 'js/starfield.worker.js';
    document.body.appendChild(canvasScript);
    canvasScript.onload = () => declareContext(starfieldEl, shootingStarEl);
  }
}


// Accessibility hackz
function handleFirstTab(e) {
  if (e.keyCode === 9) { // the "I am a keyboard user" key
    document.body.classList.add('user-is-tabbing');
    window.removeEventListener('keydown', handleFirstTab);
  }
}


function renderBuyMeCoffeeButton() {
  document.querySelector('#bmc-container').innerHTML = `<style>.bmc-button img{width: 35px !important;margin-bottom: 1px !important;box-shadow: none !important;border: none !important;vertical-align: middle !important;}.bmc-button{padding: 7px 5px 7px 10px !important;line-height: 35px !important;height:51px !important;min-width:217px !important;text-decoration: none !important;display:inline-flex !important;color:#ffffff !important;background-color:#5F7FFF !important;border-radius: 5px !important;border: 1px solid transparent !important;padding: 7px 5px 7px 10px !important;font-size: 28px !important;letter-spacing:0.6px !important;box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5) !important;-webkit-box-shadow: 0px 1px 2px 2px rgba(0, 0, 0, 0.5) !important;margin: 0 auto !important;font-family:'Cookie', cursive !important;-webkit-box-sizing: border-box !important;box-sizing: border-box !important;-o-transition: 0.3s all linear !important;-webkit-transition: 0.3s all linear !important;-moz-transition: 0.3s all linear !important;-ms-transition: 0.3s all linear !important;transition: 0.3s all linear !important;}.bmc-button:hover, .bmc-button:active, .bmc-button:focus {-webkit-box-shadow: 0px 1px 2px 2px rgba(0, 0, 0, 0.5) !important;text-decoration: none !important;box-shadow: 0px 1px 2px 2px rgba(0, 0, 0, 0.5) !important;opacity: 0.85 !important;color:#ffffff !important;}</style><link href="https://fonts.googleapis.com/css?family=Cookie" rel="stylesheet"><a class="bmc-button" target="_blank" rel="noopener" href="https://www.buymeacoffee.com/junaidshaikh"><img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a coffee"><span style="margin-left:15px;font-size:28px !important;">Let's Chat</span></a>`;
}


window.addEventListener('keydown', handleFirstTab);
window.onload = () => {
  loadGalaxy();
  renderBuyMeCoffeeButton();
}

document.querySelector('.nav-overlay' + "[data-abell-ctznot]").addEventListener('click', () => {
  // The https://github.com/abelljs/abell/issues/116 
  document.querySelector('.nav').classList.remove('open');
})

  document.querySelectorAll('.project' + "[data-abell-hOOSwD]")
    .forEach(project => {
      project.addEventListener('mouseover', () => {
        document.querySelector('astro-guy.typer' + "[data-abell-hOOSwD]").classList.add('typing');
      })

      project.addEventListener('mouseout', () => {
        document.querySelector('astro-guy.typer' + "[data-abell-hOOSwD]").classList.remove('typing');
      })
    })

  

  