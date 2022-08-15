window.onload = function() {
    let aTags = document.getElementsByClassName("a-tag");
    console.log(aTags)
    Array.from(aTags).forEach((element, index) => {
        element.onclick = () => {
            console.log(index)
            localStorage.setItem("pageIndex", index)

        }
    });
}