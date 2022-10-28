import { $, setVar, consoleLog} from './util.js';
import { pasteCode } from './code.js';
import { takeSnap, cameraFlashAnimation } from './snap.js';

const navbarNode = $('#navbar');
const windowControlsNode = $('#window-controls');
const windowTitleNode = $('#window-title');
const btnSave = $('#button-save');
const btnCopy = $('#button-copy');
const sliderZoom = $('#slider-zoom');

let config;

btnSave.addEventListener('click', () => takeSnap({ ...config, shutterAction: 'save' }));
btnCopy.addEventListener('click', () => takeSnap({ ...config, shutterAction: 'copy' }));

sliderZoom.addEventListener('input', (e) => setVar('preview-zoom', sliderZoom.value / 100));

document.addEventListener('copy', () => takeSnap({ ...config, shutterAction: 'copy' }));
document.addEventListener('paste', (e) => pasteCode(config, e.clipboardData));


window.addEventListener('message', ({ data: { type, ...cfg } }) => {
  if (type === 'update') {
    config = cfg;

    const {
      fontLigatures,
      tabSize,
      letterSpacing,
      containerBackground,
      boxShadow,
      containerPadding,      
      windowBorderRadius,
      showWindowControls,
      showWindowTitle,
      windowTitle,
    } = config;

    setVar('ligatures', fontLigatures ? 'normal' : 'none');
    if (typeof fontLigatures === 'string') setVar('font-features', fontLigatures);
    setVar('letter-spacing', letterSpacing);
    setVar('tab-size', tabSize);
    setVar('container-background', containerBackground);
    setVar('box-shadow', boxShadow);
    setVar('container-padding', containerPadding);
    setVar('window-border-radius', windowBorderRadius);
    
    setVar('preview-zoom', 0.75);

    navbarNode.hidden = !showWindowControls && !showWindowTitle;
    windowControlsNode.hidden = !showWindowControls;
    windowTitleNode.hidden = !showWindowTitle;

    windowTitleNode.textContent = windowTitle;

    document.execCommand('paste');
  } else if (type === 'flash') {
    cameraFlashAnimation();
  }
});