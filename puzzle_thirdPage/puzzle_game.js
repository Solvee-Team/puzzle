const littleBoxes = document.getElementsByClassName('pieceOfCroppedPicture')
const croppedPics = document.getElementsByClassName('barev')
const myBox = document.getElementsByClassName('pieceOfPuzzle')
let pieces = [];
let piecesIndex = 0
const shuffled = randomArrayShuffle(pieces)
const arrayForCheck = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

function addPuzzlePieces() {
    for (let i = 0; i < 20; i++) {
        const pieceOfPuzzle = document.createElement('div');
        pieceOfPuzzle.classList.add('pieceOfPuzzle')
        pieceOfPuzzle.classList.add('dragAndDropItem')
        document.getElementsByClassName('puzzleBox')[0].appendChild(pieceOfPuzzle);
        pieceOfPuzzle.setAttribute('draggable', 'true')
    }
}

function addBoxesOfCropedPictures() {
    const boxOfCroppedPictures = document.createElement('div');
    boxOfCroppedPictures.classList.add('box');
    boxOfCroppedPictures.classList.add('containerForDragAndDrop');
    document.getElementsByClassName('container')[0].appendChild(boxOfCroppedPictures)
    for (let i = 0; i < 20; i++) {
        const pieceOfCroppedPicture = document.createElement('div');
        pieceOfCroppedPicture.classList.add('pieceOfCroppedPicture');
        pieceOfCroppedPicture.classList.add('dragAndDropItem');
        document.getElementsByClassName('box')[0].appendChild(pieceOfCroppedPicture);
       }
}

function makeBordersIdeal() {
    const elements = document.getElementsByClassName("pieceOfPuzzle")
    for (let i = 0; i < 5; i++) {
        elements[i].style.borderTop = 'none'
    }
    for(let j = 15; j < 20; j++) {
        elements[j].style.borderBottom = 'none'
    }
    for (let k = 0; k < 16; k += 5) {
        elements[k].style.borderLeft = 'none'
    }
    for (let p = 4; p < 20; p += 5) {
        elements[p].style.borderRight = 'none'
    }
}

function picture() {
    for (let i = 0, vertical = 0; i < 4; i++, vertical -= 100) {
        for (let j = 0, horizontal = 0; j < 5; j++, horizontal -= 100) {
            pieces.push(`<div  id=${piecesIndex} draggable='true' style='background-image: url(${JSON.parse(localStorage.getItem('selectedPuzzle'))['img']}); background-position: ${horizontal}px ${vertical}px;' class='barev'></div>`);
            piecesIndex++;
        }
    }
}

function arrayEquals(a, b) {
    return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index]);
  }

function checkIfWin(arrayWithIdOfPictures) {
    const forCheckLocal = [];
    let flag = true
    for (let i = 0; i < arrayWithIdOfPictures.length; i++) {
        forCheckLocal.push(+arrayWithIdOfPictures[i].id)
    }
    console.log(forCheckLocal, arrayForCheck);
    if (forCheckLocal.length === 20) {
        if (arrayEquals(forCheckLocal, arrayForCheck)) {
            console.log("you win");
        } else {
            console.log('you lose');
        }
    }
}

function randomArrayShuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      console.log(randomIndex)
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

function fillThePuzzleBoxes() {
    console.log(randomArrayShuffle(pieces));
    for (let i = 0; i < littleBoxes.length; i++) {
        littleBoxes[i].innerHTML = shuffled[i]
    }
}
    
       

document.addEventListener('DOMContentLoaded', (event) => {
    addPuzzlePieces();
    addBoxesOfCropedPictures();
    makeBordersIdeal();
    console.log(JSON.parse(localStorage.getItem('selectedPuzzle')))
    picture()
    fillThePuzzleBoxes()
    var dragSrcEl = null;
  
  function handleDragStart(e) {
    
    dragSrcEl = this;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
  }

  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }

    e.dataTransfer.dropEffect = 'move';
    
    return false;
  }

  function handleDragEnter(e) {
    this.classList.add('over');
  }

  function handleDragLeave(e) {
    this.classList.remove('over');
  }

  function handleDrop(e) {
    if (e.stopPropagation) {

      e.stopPropagation(); // stops the browser from redirecting.
    }
    
    if (dragSrcEl != this) {
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData('text/html');
    }
    const arrayOfDivsInPuzzleBox = document.querySelectorAll('.puzzleBox .barev')
    checkIfWin(arrayOfDivsInPuzzleBox)
    console.log(arrayOfDivsInPuzzleBox);
    
    return false;
  }

  function handleDragEnd(e) {
    items.forEach(function (item) {
      item.classList.remove('over');
    });
  }
  let items = document.querySelectorAll('.containerForDragAndDrop .dragAndDropItem');
  items.forEach(function(item) {
    item.addEventListener('dragstart', handleDragStart, false);
    item.addEventListener('dragenter', handleDragEnter, false);
    item.addEventListener('dragover', handleDragOver, false);
    item.addEventListener('dragleave', handleDragLeave, false);
    item.addEventListener('drop', handleDrop, false);
    item.addEventListener('dragend', handleDragEnd, false);
  });
})