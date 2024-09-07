const isCookiesMessageShown = JSON.parse(localStorage.getItem('isCookiesMessageShown')) || false

if(isCookiesMessageShown === false) {
  window.onload = () => {
    setTimeout(showCookiesBanner, 1500)
  }
}

document.querySelector('#cookie__button').addEventListener('click', hideCookieBanner)

function showCookiesBanner() {
  document.querySelector('#cookie').classList.add('shown')
}

function hideCookieBanner() {
  document.querySelector('#cookie').classList.remove('shown')
  localStorage.setItem('isCookiesMessageShown', true)
}
