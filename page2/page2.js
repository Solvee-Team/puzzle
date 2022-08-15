let index;

function getIndex(number) {
    console.log(index, number);
    return index = number
}
const objectsOfPlacesAndImages = [
    [{
            nameOfPlace: 'Ապարան',
            img: 'http://drive.google.com/uc?export=view&id=1XwB0TXYb8RTnf23sR0la5eaSuRLMsFOX'
        },
        {
            nameOfPlace: 'Արտաշատ',
            img: 'http://drive.google.com/uc?export=view&id=1gcXB4ygRfShYdNZ7yoXvASKX2ySD9z5W'
        },
        {
            nameOfPlace: "Ճամբարակ",
            img: 'http://drive.google.com/uc?export=view&id=1HjTaYsHyV1vdGu0sRo7JCBCVX5PIYorn'
        },
        {
            nameOfPlace: "Գավառ",
            img: "http://drive.google.com/uc?export=view&id=1SeJmmGIRYYEF1YsREJbVcwhOnwTtOjOD"
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
            img: 'http://drive.google.com/uc?export=view&id=1gcXB4ygRfShYdNZ7yoXvASKX2ySD9z5W'
        },
        {
            nameOfPlace: "Ճամբարակ",
            img: 'http://drive.google.com/uc?export=view&id=1HjTaYsHyV1vdGu0sRo7JCBCVX5PIYorn'
        },
        {
            nameOfPlace: "Գավառ",
            img: "http://drive.google.com/uc?export=view&id=1SeJmmGIRYYEF1YsREJbVcwhOnwTtOjOD"
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
            img: 'http://drive.google.com/uc?export=view&id=1gcXB4ygRfShYdNZ7yoXvASKX2ySD9z5W'
        },
        {
            nameOfPlace: "Ճամբարակ",
            img: 'http://drive.google.com/uc?export=view&id=1HjTaYsHyV1vdGu0sRo7JCBCVX5PIYorn'
        },
        {
            nameOfPlace: "Գավառ",
            img: "http://drive.google.com/uc?export=view&id=1SeJmmGIRYYEF1YsREJbVcwhOnwTtOjOD"
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
console.log(index)

function getIndex() {
    console.log(objectsOfPlacesAndImages[localStorage.getItem("pageIndex")])
}
getIndex()