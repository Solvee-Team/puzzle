// const littleBoxes = document.getElementsByClassName('pieceOfCroppedPicture')
// const croppedPics = document.getElementsByClassName('barev')
// const myBox = document.getElementsByClassName('pieceOfPuzzle')

// function addPuzzlePieces() {
//     for (let i = 0; i < 20; i++) {
//         const pieceOfPuzzle = document.createElement('div');
//         pieceOfPuzzle.classList.add('pieceOfPuzzle')
//         document.getElementsByClassName('puzzleBox')[0].appendChild(pieceOfPuzzle);
//     }
// }

// function addBoxesOfCropedPictures() {
//     const boxOfCroppedPictures = document.createElement('div');
//     boxOfCroppedPictures.classList.add('box');
//     document.getElementsByClassName('container')[0].appendChild(boxOfCroppedPictures)
//     for (let i = 0; i < 20; i++) {
//         const pieceOfCroppedPicture = document.createElement('div');
//         pieceOfCroppedPicture.classList.add('pieceOfCroppedPicture');
//         document.getElementsByClassName('box')[0].appendChild(pieceOfCroppedPicture);
//        }
// }

// function makeBordersIdeal() {
//     const elements = document.getElementsByClassName("pieceOfPuzzle")
//     for (let i = 0; i < 5; i++) {
//         elements[i].style.borderTop = 'none'
//     }
//     for(let j = 15; j < 20; j++) {
//         elements[j].style.borderBottom = 'none'
//     }
//     for (let k = 0; k < 16; k += 5) {
//         elements[k].style.borderLeft = 'none'
//     }
//     for (let p = 4; p < 20; p += 5) {
//         elements[p].style.borderRight = 'none'
//     }
// }

// function picture() {
//     let pieces = '';
//     for (let i = 0, vertical = 0; i < 4; i++, vertical -= 100) {
//         for (let j = 0, horizontal = 0; j < 5; j++, horizontal -= 100) {
//             pieces += "<div draggable='true' style='background-position:" + horizontal + "px " + vertical + "px;' class='barev'></div>"
//         }
//     }
//     document.getElementById('fourth').innerHTML = pieces;
// }

// function fillThePuzzleBoxes() {
//     for (let j = 0; j < croppedPics.length; j++) {

//     }
//     for (let i = 0; i < littleBoxes.length; i++) {
//         littleBoxes[i].append(croppedPics[i])
//     }
// }

// window.onload = function() {
//     addPuzzlePieces();
//     addBoxesOfCropedPictures();
//     makeBordersIdeal();
//     console.log(JSON.parse(localStorage.getItem('selectedPuzzle')))
//     picture()
//     fillThePuzzleBoxes()
// }
window.onload = () => {
    StartStop();
  }
  
  
  var base = 60;
  var clocktimer, dateObj, dh, dm, ds, ms;
  var readout = '';
  var h = 1,
    m = 1,
    tm = 1,
    s = 0,
    ts = 0,
    ms = 0,
    init = 0;
  

  function ClearСlock() {
    clearTimeout(clocktimer);
    h = 1;
    m = 1;
    tm = 1;
    s = 0;
    ts = 0;
    ms = 0;
    init = 0;
    readout = '00:00:00';
    document.MyForm.stopwatch.value = readout;
  }
  

  function StartTIME() {
    var cdateObj = new Date();
    var t = (cdateObj.getTime() - dateObj.getTime()) - (s * 1000);
    if (t > 999) {
      s++;
    }
    if (s >= (m * base)) {
      ts = 0;
      m++;
    } else {
      ts = parseInt((ms / 100) + s);
      if (ts >= base) {
        ts = ts - ((m - 1) * base);
      }
    }
    if (m > (h * base)) {
      tm = 1;
      h++;
    } else {
      tm = parseInt((ms / 100) + m);
      if (tm >= base) {
        tm = tm - ((h - 1) * base);
      }
    }
    ms = Math.round(t / 10);
    if (ms > 99) {
      ms = 0;
    }
    if (ms == 0) {
      ms = '00';
    }
    if (ms > 0 && ms <= 9) {
      ms = '0' + ms;
    }
    if (ts > 0) {
      ds = ts;
      if (ts < 10) {
        ds = '0' + ts;
      }
    } else {
      ds = '00';
    }
    dm = tm - 1;
    if (dm > 0) {
      if (dm < 10) {
        dm = '0' + dm;
      }
    } else {
      dm = '00';
    }
    dh = h - 1;
    if (dh > 0) {
      if (dh < 10) {
        dh = '0' + dh;
      }
    } else {
      dh = '00';
    }
    readout = dh + ':' + dm + ':' + ds;
    document.MyForm.stopwatch.value = readout;
    clocktimer = setTimeout("StartTIME()", 1);
  }
  
  function StartStop() {
    if (init == 0) {
      ClearСlock();
      dateObj = new Date();
      StartTIME();
      init = 1;
    } else {
      clearTimeout(clocktimer);
      init = 0;
    }
  }
