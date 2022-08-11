const container = document.querySelector(".container");
const options = document.querySelector(".options");
const items = document.querySelectorAll(".item");

const versions = [
  {
    bgImage: "./img-versions/places/placesBg.svg",
    url: [
      "./img-versions/places/amberd1.png",
      "./img-versions/places/jermuk1.png",
      "./img-versions/places/jermuk1.png",
      "./img-versions/places/axtamar1.png",
      "./img-versions/places/axtamar1.png",
      "./img-versions/places/noratus1.png",
      "./img-versions/places/noratus1.png",
      "./img-versions/places/lastiver1.png",
      "./img-versions/places/heruni1.png",
      "./img-versions/places/heruni1.png",
      "./img-versions/places/parzlich1.png",
      "./img-versions/places/areni1.png",
      "./img-versions/places/cascade1.png",
      "./img-versions/places/matenadaran1.png",
      "./img-versions/places/parzlich1.png",
    ],
    titles: [
      "Ամբերդ",
      "Ջերմուկ",
      "Քարերի Սիմֆոնիա",
      "Աղթամար կղզի",
      "Քարահունջ",
      "Նորատուս",
      "Խնձորեսկ",
      "Լաստիվեր",
      "Պարիս Հերունի",
      "Տառերի պուրակ",
      "Պարզ լիճ",
      "Արենի",
      "Կասկադ",
      "Մատենադարան",
      "Տաթևի թևեր",
    ],
  },
  // {
  //   bgImage: "./img-versions/churches/churchesBg.svg",
  //   url: [
  //     "./img-versions/tatev.jpg",
  //     "./img-versions/gndevank.jpg",
  //     "./img-versions/khor-virap.png",
  //     "./img-versions/sevanavanq.png",
  //     "./img-versions/texeri.jpg",
  //     "./img-versions/hagpat.png",
  //     "./img-versions/aghavnavanq.png",
  //     "./img-versions/haxarcin.png",
  //     "./img-versions/dadivanq.png",
  //     "./img-versions/gefgard.png",
  //     "./img-versions/zavrtnoc.jpg",
  //     "./img-versions/tatev.jpg",
  //     "./img-versions/saghmosavanq.png",
  //     "./img-versions/kecharis.png",
  //     "./img-versions/makaravanq.png",
  //     "./img-versions/noravanq.png",
  //   ],
  //   titles: [
  //     "Տաթևի վանք",
  //     "Գնդեվանք",
  //     "Խոր Վիրապ",
  //     "Սևանավանք",
  //     "Տեղերի վանք",
  //     "Հաղպատ",
  //     "Աղավնավանք",
  //     "Հաղարծնի վանք",
  //     "Դադիվանք",
  //     "Գեղարդի վանք",
  //     "Զվարթնոց",
  //     "Անհայտ",
  //     "Սաղմոսավանք",
  //     "Կեչառիսի վանք",
  //     "Մակարավանք",
  //     "Նորավանք",
  //   ],
  // },
  // {
  //   bgImage: "./img-versions/countries/countriesBg.svg",
  //   url: [
  //     "./img-versions/countries/chambarak1.png",
  //     "./img-versions/countries/vanadzor1.png",
  //     "./img-versions/countries/yerevan1.png",
  //     "./img-versions/countries/tsaghadzor1.png",
  //     "./img-versions/countries/jermuk1.png",
  //     "./img-versions/countries/jermuk1.png",
  //     "./img-versions/countries/goris1.png",
  //     "./img-versions/countries/stepenavan1.png",
  //     "./img-versions/countries/noyemberyan1.png",
  //     "./img-versions/countries/sevan1.png",
  //     "./img-versions/countries/dilijan1.png",
  //     "./img-versions/countries/kapan1.png",
  //     "./img-versions/countries/artashat1.png",
  //     "./img-versions/countries/gavar1.png",
  //     "./img-versions/countries/aparan1.png",
  //     "./img-versions/countries/sisian1.png",
  //   ],
  //   titles: [
  //     "Ճամբարակ",
  //     "Վանաձոր",
  //     "Երևան",
  //     "Ծաղկաձոր",
  //     "Ջերմուկ",
  //     "Ջերմուկ",
  //     "Գորիս",
  //     "Ստեփանավան",
  //     "Նոյեմբերյան",
  //     "Սևան",
  //     "Դիլիջան",
  //     "Կապան",
  //     "Արտաշատ",
  //     "Գավառ",
  //     "Ապարան",
  //     "Սիսիան",
  //   ],
  // },
];

const createEl = el => {
  return document.createElement(el);
};

const loadEl = () => {
  for (let i = 0; i < 16; i++) {
    const div = createEl("div");

    div.classList.add("option");
    // div.classList.add(i);

    options.insertAdjacentElement("beforeend", div);
    div.classList.add("option");

    const title = createEl("p");
    title.classList.add("title");
    div.insertAdjacentElement("beforeend", title);

    container.insertAdjacentHTML(
      "beforeend",
      `
                <img src = "./img-versions/countries/countriesBg.svg"/>
                `
    );

    //div.insertAdjacentHTML("beforeend", html);
  }
};
loadEl();
