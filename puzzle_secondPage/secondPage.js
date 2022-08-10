const href = window.location.search;
const params = new URLSearchParams(href);
const {type: page} = Object.fromEntries(Array.from(params.entries()));


const pages = ['mountains', 'churches', 'cities'];

if(!pages.includes(page)){
    console.log(page);
    location.replace('file:///home/hayk/Desktop/project/puzzle/404.html')
}

const objectsOfPlacesAndImages = [
    [{
        nameOfPlace: 'Ապարան',
        img: 'http://drive.google.com/uc?export=view&id=1XwB0TXYb8RTnf23sR0la5eaSuRLMsFOX'
    },
    {
        nameOfPlace: 'Արտաշատ',
        img:'http://drive.google.com/uc?export=view&id=1gcXB4ygRfShYdNZ7yoXvASKX2ySD9z5W'
    },
    {
        nameOfPlace: "Ճամբարակ",
        img:'http://drive.google.com/uc?export=view&id=1HjTaYsHyV1vdGu0sRo7JCBCVX5PIYorn'
    },
    {
        nameOfPlace: "Գավառ",
        img:"http://drive.google.com/uc?export=view&id=1SeJmmGIRYYEF1YsREJbVcwhOnwTtOjOD"
    },
    {
        nameOfPlace: 'Ջերմուկ',
        img: 'http://drive.google.com/uc?export=view&id=1eIRKbQh4iwMBv1nwe9Sb_Jb4-HxH9AGe'
    },
    {
        nameOfPlace: 'Կապան',
        img: 'http://drive.google.com/uc?export=view&id=14Mm2cuByW3h275E6QoPafyn_GVlLv1uM'
    },
    {
        nameOfPlace: "Մեղրի",
        img: 'http://drive.google.com/uc?export=view&id=14Ev__NhzN16LfG45PFmUr96aX1lpnb2f'
    },
    {
        nameOfPlace: "Նոյեմբերյան",
        img: 'http://drive.google.com/uc?export=view&id=1I9f8zuEZVxpsEwcL5hPrH972XPTkQvli'
    },
    {
        nameOfPlace: 'Սիսիան',
        img: 'http://drive.google.com/uc?export=view&id=14Ev__NhzN16LfG45PFmUr96aX1lpnb2f'
    },
    {
        nameOfPlace: 'Ստեփանավան',
        img: 'http://drive.google.com/uc?export=view&id=14Ev__NhzN16LfG45PFmUr96aX1lpnb2f'
    },
    {
        nameOfPlace: "Ծախկաձոր",
        img: 'http://drive.google.com/uc?export=view&id=14Ev__NhzN16LfG45PFmUr96aX1lpnb2f'
    },
    {
        nameOfPlace: "Վանաձոր",
        img: 'http://drive.google.com/uc?export=view&id=14Ev__NhzN16LfG45PFmUr96aX1lpnb2f'
    },
    {
        nameOfPlace: 'Երևան',
        img: 'http://drive.google.com/uc?export=view&id=14Ev__NhzN16LfG45PFmUr96aX1lpnb2f'
    },
    {
        nameOfPlace: 'Արտաշատ',
        img: 'http://drive.google.com/uc?export=view&id=14Ev__NhzN16LfG45PFmUr96aX1lpnb2f'
    },
    {
        nameOfPlace: "Ճամբարակ",
        img: 'http://drive.google.com/uc?export=view&id=14Ev__NhzN16LfG45PFmUr96aX1lpnb2f'
    },
    {
        nameOfPlace: "Գավառ",
        img: 'http://drive.google.com/uc?export=view&id=14Ev__NhzN16LfG45PFmUr96aX1lpnb2f'
    }
],
[{
    nameOfPlace: 'Ապարան',
    img: 'http://drive.google.com/uc?export=view&id=1XwB0TXYb8RTnf23sR0la5eaSuRLMsFOX'
},
{
    nameOfPlace: 'Արտաշատ',
    img:'http://drive.google.com/uc?export=view&id=1gcXB4ygRfShYdNZ7yoXvASKX2ySD9z5W'
},
{
    nameOfPlace: "Ճամբարակ",
    img:'http://drive.google.com/uc?export=view&id=1HjTaYsHyV1vdGu0sRo7JCBCVX5PIYorn'
},
{
    nameOfPlace: "Գավառ",
    img:"http://drive.google.com/uc?export=view&id=1SeJmmGIRYYEF1YsREJbVcwhOnwTtOjOD"
},
{
    nameOfPlace: 'Ջերմուկ',
    img: 'http://drive.google.com/uc?export=view&id=1eIRKbQh4iwMBv1nwe9Sb_Jb4-HxH9AGe'
},
{
    nameOfPlace: 'Կապան',
    img: 'http://drive.google.com/uc?export=view&id=14Mm2cuByW3h275E6QoPafyn_GVlLv1uM'
},
{
    nameOfPlace: "Մեղրի",
    img: 'http://drive.google.com/uc?export=view&id=14Ev__NhzN16LfG45PFmUr96aX1lpnb2f'
},
{
    nameOfPlace: "Նոյեմբերյան",
    img: 'http://drive.google.com/uc?export=view&id=1I9f8zuEZVxpsEwcL5hPrH972XPTkQvli'
},
{
    nameOfPlace: 'Սիսիան',
    img: 'http://drive.google.com/uc?export=view&id=14Ev__NhzN16LfG45PFmUr96aX1lpnb2f'
},
{
    nameOfPlace: 'Ստեփանավան',
    img: 'http://drive.google.com/uc?export=view&id=14Ev__NhzN16LfG45PFmUr96aX1lpnb2f'
},
{
    nameOfPlace: "Ծախկաձոր",
    img: 'http://drive.google.com/uc?export=view&id=14Ev__NhzN16LfG45PFmUr96aX1lpnb2f'
},
{
    nameOfPlace: "Վանաձոր",
    img: 'http://drive.google.com/uc?export=view&id=14Ev__NhzN16LfG45PFmUr96aX1lpnb2f'
},
{
    nameOfPlace: 'Երևան',
    img: 'http://drive.google.com/uc?export=view&id=14Ev__NhzN16LfG45PFmUr96aX1lpnb2f'
},
{
    nameOfPlace: 'Արտաշատ',
    img: 'http://drive.google.com/uc?export=view&id=14Ev__NhzN16LfG45PFmUr96aX1lpnb2f'
},
{
    nameOfPlace: "Ճամբարակ",
    img: 'http://drive.google.com/uc?export=view&id=14Ev__NhzN16LfG45PFmUr96aX1lpnb2f'
},
{
    nameOfPlace: "Գավառ",
    img: 'http://drive.google.com/uc?export=view&id=14Ev__NhzN16LfG45PFmUr96aX1lpnb2f'
}
],
[{
    nameOfPlace: 'Ապարան',
    img: 'http://drive.google.com/uc?export=view&id=1XwB0TXYb8RTnf23sR0la5eaSuRLMsFOX'
},
{
    nameOfPlace: 'Արտաշատ',
    img:'http://drive.google.com/uc?export=view&id=1gcXB4ygRfShYdNZ7yoXvASKX2ySD9z5W'
},
{
    nameOfPlace: "Ճամբարակ",
    img:'http://drive.google.com/uc?export=view&id=1HjTaYsHyV1vdGu0sRo7JCBCVX5PIYorn'
},
{
    nameOfPlace: "Գավառ",
    img:"http://drive.google.com/uc?export=view&id=1SeJmmGIRYYEF1YsREJbVcwhOnwTtOjOD"
},
{
    nameOfPlace: 'Ջերմուկ',
    img: 'http://drive.google.com/uc?export=view&id=1eIRKbQh4iwMBv1nwe9Sb_Jb4-HxH9AGe'
},
{
    nameOfPlace: 'Կապան',
    img: 'http://drive.google.com/uc?export=view&id=14Mm2cuByW3h275E6QoPafyn_GVlLv1uM'
},
{
    nameOfPlace: "Մեղրի",
    img: 'http://drive.google.com/uc?export=view&id=14Ev__NhzN16LfG45PFmUr96aX1lpnb2f'
},
{
    nameOfPlace: "Նոյեմբերյան",
    img: 'http://drive.google.com/uc?export=view&id=1I9f8zuEZVxpsEwcL5hPrH972XPTkQvli'
},
{
    nameOfPlace: 'Սիսիան',
    img: 'http://drive.google.com/uc?export=view&id=14Ev__NhzN16LfG45PFmUr96aX1lpnb2f'
},
{
    nameOfPlace: 'Ստեփանավան',
    img: 'http://drive.google.com/uc?export=view&id=14Ev__NhzN16LfG45PFmUr96aX1lpnb2f'
},
{
    nameOfPlace: "Ծախկաձոր",
    img: 'http://drive.google.com/uc?export=view&id=14Ev__NhzN16LfG45PFmUr96aX1lpnb2f'
},
{
    nameOfPlace: "Վանաձոր",
    img: 'http://drive.google.com/uc?export=view&id=14Ev__NhzN16LfG45PFmUr96aX1lpnb2f'
},
{
    nameOfPlace: 'Երևան',
    img: 'http://drive.google.com/uc?export=view&id=14Ev__NhzN16LfG45PFmUr96aX1lpnb2f'
},
{
    nameOfPlace: 'Արտաշատ',
    img: 'http://drive.google.com/uc?export=view&id=14Ev__NhzN16LfG45PFmUr96aX1lpnb2f'
},
{
    nameOfPlace: "Ճամբարակ",
    img: 'http://drive.google.com/uc?export=view&id=14Ev__NhzN16LfG45PFmUr96aX1lpnb2f'
},
{
    nameOfPlace: "Գավառ",
    img: 'http://drive.google.com/uc?export=view&id=14Ev__NhzN16LfG45PFmUr96aX1lpnb2f'
}
]
]


function addPlacements() {
    let j = pages.indexOf(page);
    for(let i = 0; i < objectsOfPlacesAndImages[j].length; i++) {
        const image = document.createElement('img');
        image.src = objectsOfPlacesAndImages[j][i]['img']
        console.log(i)
        image.classList.add('picture')
        const place = document.createElement('div');
        place.classList.add('place');
        place.appendChild(image);
        const placeName = document.createElement('div');
        placeName.classList.add('placeName');
        placeName.textContent = objectsOfPlacesAndImages[j][i]['nameOfPlace']
        place.appendChild(placeName);
        document.querySelector('.container').append(place);
    }
}

function setBackgroundPic() {
    const backgrounds = {
        mountains: 'http://drive.google.com/uc?export=view&id=1GbRil7GyJ0XCHbLZQQiep_-lyXxe1OAz',
        church: 'http://drive.google.com/uc?export=view&id=11EfgvRILMKHLH4ldzmiscUtN0CgcNZu_',
        city: 'http://drive.google.com/uc?export=view&id=1fhHV2ING22K6wbTGeWa3O1DTW7ibJCLj' 
    }
    let j = pages.indexOf(page);
    let picture = document.createElement('img');
    picture.classList.add('fix')
    document.body.appendChild(picture)
    if (j === 0) {
        picture.src = backgrounds['mountains']
    } else if (j === 1) {
        picture.src = backgrounds['church']
    } else if (j === 2) {
        picture.src = backgrounds['city']
    }
}

window.onload = function () {
    addPlacements();
    setBackgroundPic();
}
