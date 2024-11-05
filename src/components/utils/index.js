/* View in fullscreen */
export function openFullscreen() {
  let elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
export function closeFullscreen() {
  let elem = document.documentElement;
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE11 */
    document.msExitFullscreen();
  }
}

export function updateSize() {
  // Dimensioni di riferimento
  const BASE_WIDTH = 1920;
  const BASE_HEIGHT = 1080;

  const mainContainer = document.getElementById("main");

  // Calcola il fattore di scala basato sulle dimensioni della finestra
  const scaleX = window.innerWidth / BASE_WIDTH;
  const scaleY = window.innerHeight / BASE_HEIGHT;
  const scale = Math.min(scaleX, scaleY);

  // Applica le dimensioni scalate in pixel al contenitore
  mainContainer.style.width = `${BASE_WIDTH * scale}px`;
  mainContainer.style.height = `${BASE_HEIGHT * scale}px`;

  // Centra il contenitore all'interno della viewport
  mainContainer.style.top = `${
    (window.innerHeight - BASE_HEIGHT * scale) / 2
  }px`;
  mainContainer.style.left = `${
    (window.innerWidth - BASE_WIDTH * scale) / 2
  }px`;

  // Ridimensiona il font in base alla scala
  document.body.style.fontSize = `${16 * 1.25 * scale}px`;
}
