const littleBoxes = document.getElementsByClassName('pieceOfCroppedPicture')
const croppedPics = document.getElementsByClassName('puzzle-pices')
const myBox = document.getElementsByClassName('pieceOfPuzzle')
const puzzleBox = document.getElementsByClassName('puzzleBox')
let pieces = [];
let piecesIndex = 0
const shuffled = randomArrayShuffle(pieces)
const arrayForCheck = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
let flagForWin = false;
let flagForPause = false;
let flagForFunctions = 0;
let timer;
let startButtonIsActive = true

const backToSecondPage = () => {
    window.location.replace(`../puzzle_secondPage/secondPage.html?type=${localStorage.getItem('selectedPuzzleGroup')}`)
}

function addPuzzlePieces() {
    puzzleBox[0].style.width = '530px'
    puzzleBox[0].style.height = '431px'
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
            pieces.push(`<div  id=${piecesIndex} draggable='true' style='background-image: url(${JSON.parse(localStorage.getItem('selectedPuzzle'))['img']}); background-position: ${horizontal}px ${vertical}px;' class='puzzle-pices'></div>`);
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
    for (let i = 0; i < arrayWithIdOfPictures.length; i++) {
        forCheckLocal.push(+arrayWithIdOfPictures[i].id)
    }
    if (forCheckLocal.length === 20) {
        if (arrayEquals(forCheckLocal, arrayForCheck)) {
            window.location.replace('../puzzle_info/index.html')
            stopTimer()
            localStorage.setItem('timer', timer);
        }
    }
}

function randomArrayShuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

function stopInPause() {
    stopTimer()
    startButtonIsActive = true
}

function fillThePuzzleBoxes() {
    randomArrayShuffle(pieces);
    for (let i = 0; i < littleBoxes.length; i++) {
        littleBoxes[i].innerHTML = shuffled[i]
    }
}

function addStartButtonIcon(div) {
    const startButtonIcon = document.createElement('img');
    startButtonIcon.classList.add('startButtonIcon');
    div.append(startButtonIcon);
    startButtonIcon.src = 'icons/startButton.png'
}


function showPictureForTwoSeconds() {
        if (startButtonIsActive === false) {
        let imageForTwoSeconds = document.createElement('img')
        imageForTwoSeconds.classList.add('imageForTwoSeconds')
        document.getElementsByClassName('puzzleBox')[0].append(imageForTwoSeconds);
        imageForTwoSeconds.src = `${JSON.parse(localStorage.getItem('selectedPuzzle'))['img']}`
        function removeImageAfterTwoSeconds() {
            imageForTwoSeconds.remove()
        }
        setTimeout(removeImageAfterTwoSeconds, 1200) 
    }
}

function createDivForIcons() {
    const divForIcons = document.createElement('div');
    document.body.append(divForIcons)
    divForIcons.classList.add('divForIcons');
    const clueIcon = document.createElement('img');
    clueIcon.classList.add('clueIcon');
    divForIcons.append(clueIcon);
    const startAndPauseIcon = document.createElement('img');
    startAndPauseIcon.classList.add('pauseIcon');
    divForIcons.append(startAndPauseIcon);
    clueIcon.src = 'icons/clue.svg';
    startAndPauseIcon.src = 'icons/pausee.png'
}

const startButton = document.createElement('div');
startButton.onclick = function() {
    startButtonIsActive = false;
    for (let i = 0; i < croppedPics.length; i++) {
        croppedPics[i].style.display = 'block';
        myBox[i].style.display = 'flex'
    }
    startTimer()
    startButton.style.display = 'none';
    document.getElementsByClassName('pauseIcon')[0].style.display = 'flex';
}

function startTheGameButton() {
    addBoxesOfCropedPictures();
    addPuzzlePieces();
    makeBordersIdeal();
    picture();
    fillThePuzzleBoxes();
    document.getElementsByClassName('pauseIcon')[0].style.display = 'none';
    puzzleBox[0].style.width = '530px';
    puzzleBox[0].style.height = '431px';
    startButton.classList.add('startButton');
    document.getElementsByClassName('puzzleBox')[0].append(startButton);
    addStartButtonIcon(startButton);
    for (let i = 0; i < croppedPics.length; i++) {
        croppedPics[i].style.display = 'none';
        myBox[i].style.display = 'none'
    }
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
        e.stopPropagation(); 
    }
    
    if (dragSrcEl != this) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
    }
    const arrayOfDivsInPuzzleBox = document.querySelectorAll('.puzzleBox .puzzle-pices')
    checkIfWin(arrayOfDivsInPuzzleBox)
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
}

document.addEventListener('DOMContentLoaded', (event) => {
    startTheGameButton()
})

let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let int = null;

const startTimer = ()=>{
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);
};

const stopTimer = () => {
        document.getElementsByClassName('pauseIcon')[0].style.display = 'none';
    for (let i = 0; i < croppedPics.length; i++) {
        croppedPics[i].style.display = 'none';
        myBox[i].style.display = 'none'
    }
    startButton.style.display = 'flex'
    clearInterval(int);
};

function displayTimer(){
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    document.MyForm.stopwatch.value = ` ${h}:${m}:${s}`;
    timer = ` ${h}:${m}:${s}`;
}
