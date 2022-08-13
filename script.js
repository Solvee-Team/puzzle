const href = window.location.search;
const params = new URLSearchParams(href);
const { type: info } = Object.fromEntries(Array.from(params.entries()));

console.log(info);
const infos = ["tatev", "khorVirap", "sevanavanq"];


const information = [
  {
    img: "http://drive.google.com/uc?export=view&id=1hJkiBbqj0OCumx8nNPqPdwTWMEEiEhnr",
    text: "Տաթևի վանք, միջնադարյան վանական համալիր Հայաստանում։ Գտնվում է Սյունիքի մարզի Տաթև գյուղի հարավում՝Որոտան գետի վտակի ձորի աջափնյա եզերքին։ Ավանդության համաձայն՝վանքը կոչվել է Թադեոս առաքյալի աշակերտ Եվստաթեոսի անունով։",
    name: "Տաթևի վանք",
  },
  {
    img: "http://drive.google.com/uc?export=view&id=1A2q-peyQ6LvOWi9l6C5JOgmTqu7r7FAV",
    text: "Խոր վիրապի վանք, ճարտարապետականհուշարձան, 17-րդ դարի վանք-ամրոց Մեծ Հայքի Այրարատ նահանգի Ոստան Հայոց գավառում: Եղել է Հայոց հանրահայտ ուխտատեղիներից՝ կապված Գրիգոր Լուսավորչի անվան հետ։",
    name: "Խոր Վիրապ",
  },
  {
    img: "http://drive.google.com/uc?export=view&id=1Of4cYQ8MfP5q0St5D9Zpbm0l6qEqLMOh",
    text: "Սևանավանք, հայկական վանական համալիր Սևանի թերակղզու վրա, Գեղարքունիքի մարզ, Հայաստան։ Հիմնադրվել է 305 թվականին, երկու եկեղեցիները՝ 874 թվականին։ Սևանի վանքը գտնվում է Սևանի թերակղզում (նախկինում՝ կղզի), հիմնադրել է Գրիգոր ԱԼուսավորիչը 305 թվականին։",
    name: "Սևանավանք",
  },
];

const img = document.querySelector(".img img");
const title = document.querySelector(".info h2");
const about = document.querySelector(".info p");
const click = document.querySelectorAll(".click");
console.log(click);

const loadEl = () => {
  let indexInfos = infos.indexOf(info);
  information.forEach((info, i) => {
    if (indexInfos === i) {
      img.src = info.img
      title.innerHTML = info.name;
      about.innerHTML = info.text; 
    }
  });
  document.querySelector(".next-btn").addEventListener("click", () => {

    window.location = `./info.html?type=${infos[++indexInfos]}`;

    if(indexInfos > (infos.length-1)) {
        window.location = `./info.html?type=${infos[0]}`;
    }
    
})
};

document.querySelector("#previous").addEventListener("click", () => {
    window.location = "index.html";
})

window.onload = () => {
  loadEl();
};