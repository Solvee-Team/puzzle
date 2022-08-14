const loadEl = () => {
    const img = document.querySelector(".img img");
    const title = document.querySelector(".info h2");
    const about = document.querySelector(".info p");
    const selectedImgIndex = JSON.parse(localStorage.getItem("selectedPuzzle"))

    img.src = selectedImgIndex.img
    title.innerHTML = selectedImgIndex.nameOfPlace;
    about.innerHTML = selectedImgIndex.content; 
  };
  
  window.onload = () => {
    const selectedPage = localStorage.getItem("selectedPuzzleGroup")
    
    document.getElementById("puzzle-solve-time").innerHTML = `Փազլի լուծման ժամանակը։ ${localStorage.getItem("timer")}`

    document.querySelector("#previous").addEventListener("click", () => {
        window.location.replace(`../puzzle_secondPage/secondPage.html?type=${selectedPage}`)
    })

    document.querySelector(".next-btn").addEventListener("click", () => {
        window.location.replace(`../puzzle_secondPage/secondPage.html?type=${selectedPage}`)
    })
    loadEl();
  }; 