const container = document.querySelector(".container");
const options = document.querySelector(".options");
const items = document.querySelectorAll(".item");

const href = window.location.search;
const params = new URLSearchParams(href)
const {type:page} = Object.fromEntries(Array.from(params.entries()))

const pages = ["places", "churches", "countries"];


const infos = [
    {
        bgImage: "http://drive.google.com/uc?export=view&id=1iGJ2PklngcJk0VXsR5nx1BbUTwL9gyrP",
        places: [
        {
            img: "http://drive.google.com/uc?export=view&id=1AKWYnwJcj78IRLWB6A8uCEOU_QeioD3C",
            title: "Գառնիի տաճար"
        },
        {
            img: "http://drive.google.com/uc?export=view&id=1JDjdUy_FNcgmMjXOd2UdS31Ov_v8ZQbX",
            title: "Ամբերդ"
        },
        {
            img: "http://drive.google.com/uc?export=view&id=12sH7myvjSrtxbAJbNA1W6jUhbjN5wGXK",
            title: "Ջերմուկ"
        },
        {
            img: "http://drive.google.com/uc?export=view&id=1cP8ZqBuUu_yeJCnVj9w4HBZOMDvbSqlE",
            title: "Քարերի սիմֆոնիա"
        },
        {
            img: "http://drive.google.com/uc?export=view&id=11hRfKUn_cTt73yfWUFdvZH6D0StGfGrV",
            title: "Աղթամար կղզի"
        },
        {
            img: "http://drive.google.com/uc?export=view&id=1P2t3q-Oqfe_9G7w9PZ7SlxHSX_DEIS0J",
            title: "Քարահունջ"
        },
        {
            img: "http://drive.google.com/uc?export=view&id=1GA87btYfjJ-CXtJslrfmwd633cWKkwGO",
            title: "Նորատուս"
        },
        {
            img: "http://drive.google.com/uc?export=view&id=1Kxny5NVX_3oSLY9DxzYgMfcc2WnWTBAf",
            title: "Խնձորեսկ"
        },
        {
            img: "http://drive.google.com/uc?export=view&id=1cEIwmQ8mOylK-_LCqlpZrvagPdL85qLC",
            title: "Լաստիվեր"
        },
        {
            img: "http://drive.google.com/uc?export=view&id=1GfWh2IVbAUl_F05pMfuF_u6uYcm8Ong2",
            title: "Պարիս Հերունի"
        },
        {
            img: "http://drive.google.com/uc?export=view&id=12NS9K3tilFMyh4POzSA7_1EL1inZ7by4",
            title: "Տառերի պուրակ"
        },
        {
            img: "http://drive.google.com/uc?export=view&id=1Hz0e6LHrE3ZH6GLa1MjBVMimNMKRoN0I",
            title: "Պարզ լիճ"
        },
        {
            img: "http://drive.google.com/uc?export=view&id=1L877pP94k3oODekA_IZs2P4OFTlYtiE6",
            title: "Արենի"
        },
        {
            img: "http://drive.google.com/uc?export=view&id=1vN-zxBK1HDUt6OjICdpOuxBah2ut157p",
            title: "Կասկադ"
        },
        {
            img: "http://drive.google.com/uc?export=view&id=1nJzuTqlAhSoTv8Oun8GhZmhwyIEv6yao",
            title: "Մատենադարան"
        },
        {
            img: "http://drive.google.com/uc?export=view&id=1LFsT0ttoybfalcsprwCIxeynsKWP3SDB",
            title: "Տաթևի թևեր "
        }
]},
   {
    bgImage: "http://drive.google.com/uc?export=view&id=1Jrub8gzSoyIhIFqBWfp9Y121xacn8nAd",
    places: [
        {
            img: "http://drive.google.com/uc?export=view&id=1n4TpVtY5OUrAXO2oXkKNryW5qwYjAFRR",
            title: "Տաթևի վանք"
        },
        {
            img: "http://drive.google.com/uc?export=view&id=15LWlpMzrczez2G4XzytI9GyjryuLPOnf",
            title: "Գնդեվանք"
        },
        {
            img: "http://drive.google.com/uc?export=view&id=14DJc2Jbt6b_4BRXo8SnGFoou6Dpyo2CV",
            title: "Խոր Վիրապ"
        },
        {
            img: "http://drive.google.com/uc?export=view&id=1m-21U2EwgwTgXbu2kP6mGLOIhVbzRiDY",
            title: "Սևանվանք"
        },
        {
            img: "http://drive.google.com/uc?export=view&id=1KZo8wJJUlcMyQqVFFCJ1KhnUYVxV8oJc",
            title: "Տեղերի վանք"
        },
        {
            img: "http://drive.google.com/uc?export=view&id=1NHhD-fyZ-m_UaOEXvoz5rRmWZptsXX5O",
            title: "Հաղպատ"
        },
        {
            img: "http://drive.google.com/uc?export=view&id=1EFsvqD47BiFhcSkRKKsiCt4qasCPw-ya",
            title: "Աղավնավանք"
        },
        {
            img: "http://drive.google.com/uc?export=view&id=1vYeKXkkpqns_LKaq2PrMDCn0_lC2iHGp",
            title: "Հաղարծնի վանք"
        },
        {
            img: "http://drive.google.com/uc?export=view&id=1kgvMk1rsVoOTfZf_pxKSRxPa_hBkrlHI",
            title: "Դադիվանք"
        },
        {
            img: "http://drive.google.com/uc?export=view&id=1Q089kHFnpEVhoG1L5ex4TYpqOkNIdsmg",
            title: "Գեղարդի վանք"
        },
        {
            img: "http://drive.google.com/uc?export=view&id=1NvQ7qHJjcy2JhCFUPr-BKEcBILQplEBU",
            title: "Զվարթնոց"
        },
        {
            img: "http://drive.google.com/uc?export=view&id=1n4TpVtY5OUrAXO2oXkKNryW5qwYjAFRR",
            title: "Անհայտ"
        },
        {
            img: "http://drive.google.com/uc?export=view&id=1Wg7s4Afh50LEKcBTIgO52pwAJ-QRFkes",
            title: "Սաղմոսավանք"
        }, 
        {
            img: "http://drive.google.com/uc?export=view&id=1BCEe5S94C_59VLSM3SVKAOm_rxwihguK",
            title: "Կեչառիս վանք"
        },
        {
            img: "http://drive.google.com/uc?export=view&id=17bVtxCnci6js0rIp1OEnolEy7CF6PTLw",
            title: "Մակարավանք"
        }, 
        {
            img: "http://drive.google.com/uc?export=view&id=11arkXOU6db_iQl-m05qYA7AnReUNN-FJ",
            title: "Նորավանք"
        }
    ]
   },
   {
    bgImage: "http://drive.google.com/uc?export=view&id=1PrkQxM7Ex46xxSwkr6WrDJalhwwW3DY8",
    places: [
        {
            img: "http://drive.google.com/uc?export=view&id=1rmfRrEeOdmsV1mObx0gbfsOHWYJrHyCe",
            title: "Ճամբարակ"
        },
        {
            img: "http://drive.google.com/uc?export=view&id=1OkEiGct7eYh2JzkQdQ_v2zYEhOe8-lbP",
            title: "Վանաձոր"
        },
        {
            img: "http://drive.google.com/uc?export=view&id=1ZRyhkS18W75KKfJYNuMvmDgCQxIFjX9p",
            title: "Երևան"
        },
        {
            img: "http://drive.google.com/uc?export=view&id=1L7FeyclA7e-ktlvrd2vWbnjD1uYRCuBN",
            title: "Ծաղկաձոր"
        },
        {
            img: "http://drive.google.com/uc?export=view&id=1czZJY9nE7Q9cBKVsaHVsU4B4E1rqGLuB",
            title: "Ջերմուկ"
        },
        {
            img: "http://drive.google.com/uc?export=view&id=1405G_k4Spzh_Xo1IahQVg-F3tgZqxgsF",
            title: "Գորիս"
        },
        {
            img: "http://drive.google.com/uc?export=view&id=1AErRQO5PfFsPg0Njo9r2GW82H8Ed-v1t",
            title: "Մեղրի"
        },
        {
            img: "http://drive.google.com/uc?export=view&id=1ddSo_0JphBqtTB2JOOrUQAdUDQmnfCBd",
            title: "Ստեփանավան"
        },
        {
            img: "http://drive.google.com/uc?export=view&id=1SGV5FDxt7nO38aew3e6EtoJLuBXBLOct",
            title: "Նոյեմբերյան"
        },
        {
            img: "http://drive.google.com/uc?export=view&id=1BVEkp6lwWvfqwzPJyjDQS4fJHMe5R-tB",
            title: "Սևան"
        },
        {
            img: "http://drive.google.com/uc?export=view&id=1ZdGVTyP1h5mOUfGyaVPvUiLIcWEMECBo",
            title: "Դիլիջան"
        },
        {
            img: "http://drive.google.com/uc?export=view&id=1uySnAGnFkUjU-kaSQlNG2KEGIv0BcKFj",
            title: "Կապան"
        },
        {
            img: "http://drive.google.com/uc?export=view&id=139e7zmS_gJXEacBsUjDKRzo1RuQQNvld",
            title: "Արտաշատ"
        },
        {
            img: "http://drive.google.com/uc?export=view&id=11u7zIWXw6ngJ36w0IvRGPSqAshY8sXzs",
            title: "Գավառ"
        },
        {
            img: "http://drive.google.com/uc?export=view&id=1Ve-nhIL5N9pRDiMzCahsCV_l91N31E8N",
            title: "Ապարան"
        }, 
        {
            img: "http://drive.google.com/uc?export=view&id=1d7a8EIk6WNnhoWassUolv3uJss1tHr9p",
            title: "Սիսիան"
        }
    ]
   }
]
const createEl = el => {
    return document.createElement(el);
  };
  

  const loadEl = () => {
    const index = pages.indexOf(page);
    infos.forEach((info, i) => {
       
        info.places.forEach(item => {
            const div = createEl("div");
      div.classList.add("option");
  
      options.insertAdjacentElement("beforeend", div);

      div.classList.add("option");
  
     const title = createEl("p");
      title.classList.add("title");
      div.insertAdjacentElement("beforeend", title);

        if(i !== index) div.style.display = "none"

        if(i === index) {
            container.insertAdjacentHTML("beforeend", `<img src = "${info.bgImage}" style = "opacity: 0.2"/>`)
            title.innerHTML = item.title
            div.insertAdjacentHTML("beforeend", `
                <img src = "${item.img}" />
            `)
        }

        })
    })

  };

window.onload = () => {
    loadEl()
}