function onloadPage(){
    const pages = [
        {
            backgroundImg: "churches.png",
            content : [
                {
                  backgroundImg : 'tatev.jpg',
                  name : "Տաթև"
                },
                {
                    backgroundImg : 'gndevank.webp',
                    name : 'Գնդեվանք'
                },
                {
                    backgroundImg : '11.-khor-virap-1.png',
                    name : 'Խոր Վիրապ'
                },
                {
                    backgroundImg : 'sevanavanq 1.png',
                    name : 'Սևանավանք'
                },
                {
                    backgroundImg : 'texeri.jpg',
                    name : 'Տեղերի վանք'
                },
                {
                    backgroundImg : 'haghpat 1.png',
                    name : 'Հաղպատ'
                },
                {
                    backgroundImg : 'aghavnavanq 1.png',
                    name : 'Աղվանավանք'
                },
                {
                    backgroundImg : 'haxarcin 1.png',
                    name : 'Հաղարծնի վանք'
                },
                {
                    backgroundImg : 'dadivanq 1.png',
                    name : 'Դադիվանք'
                },
                {
                    backgroundImg : 'gefgard 1.png',
                    name : 'Գեղարդի վանք'
                },
                {
                    backgroundImg : 'zavrtnoc 1.png',
                    name : 'Զվարթնոց'
                },
                {
                    backgroundImg : '',
                    name : ''
                },
                {
                    backgroundImg : 'saghmosavanq 1.png',
                    name : 'Սաղմոսավանք'
                },
                { 
                  backgroundImg : 'kecharis 1.png',
                  name : 'Կեչառիս'
                },
                { 
                  backgroundImg : 'makaravanq 1.png',
                  name : 'Մակարավանք'
                },
                { 
                    backgroundImg : 'noravanq 1.png',
                    name : 'Նորավանք'
                  }
    
            ]
        },
        {
            backgroundImg :  "tesarjorange 1.png",
            content : [
                {
                    backgroundImg : 'garni 1.png',
                    name : 'Գառնի'
                },
                {
                    backgroundImg : 'amberd 1.png',
                    name : 'Ամբերդ'
                },
                {
                    backgroundImg : 'jermuk 1.png',
                    name : 'Ջերմուկ'
                },
                {
                    backgroundImg : 'qarer 2.png',
                    name : 'Քարերի Սիմֆոնիա'
                },
                {
                    backgroundImg : 'axtamar 1.png',
                    name : 'Աղրամար կղզի'
                },
                {
                    backgroundImg : 'qarahoonj 1.png',
                    name : 'Քրահունջ'
                },
                {
                    backgroundImg : 'noratus 1.png',
                    name : 'Նորատուս'
                },
                {
                    backgroundImg : 'xndzoresk 1.png',
                    name : 'Խնձորեսկ'
                },
                {
                    backgroundImg : 'lastiver 1.png',
                    name : 'Լաստիվեր'
                },
                {
                    backgroundImg : 'heruni 1.png',
                    name : 'Պարիս Հերունի'
                },
                {
                    backgroundImg : 'tarer 2.png',
                    name : 'Տարերի պուրակ'
                },
                {
                    backgroundImg : 'parzlich 1.png',
                    name : 'Պարզ լիճ'
                },
                {
                    backgroundImg : 'areni 1.png',
                    name : 'Արենի'
                },
                {
                    backgroundImg : 'cascade 1.png',
                    name : 'Կասկադ'
                },
                {
                    backgroundImg : 'matenadar 1.png',
                    name : 'Մատենադարան'
                },
                {
                    backgroundImg : 'tatev 37.png',
                    name : 'Տաթևի թևեր'
                }
            ]
        },
        {
            backgroundImg : 'GYUM 1.png',
            content : [
                {
                    backgroundImg : 'chambarak 2.png',
                    name : 'Ճամբարակ'
                },
                {
                    backgroundImg : 'vanadzor 1.png',
                    name : 'Վանաձոր'
                },
                {
                    backgroundImg : 'yerevan 1.png',
                    name : 'Երևան'
                },
                {
                    backgroundImg : 'tsaghadzor 1.png',
                    name : 'Ծաղկաձոր'
                },
                {
                    backgroundImg : 'jermuk 1.png',
                    name : 'Ջերմուկ'
                },
                {
                    backgroundImg : 'image 1.png',
                    name : 'Գյումրի'
                },
                {
                    backgroundImg : 'goris 1.png',
                    name : 'Գորիս'
                },
                {
                    backgroundImg : 'stepanavan 1.png',
                    name : 'Ստեփանավան'
                },
                {
                    backgroundImg : 'noyemberyan 1.png',
                    name : 'Նոյեմբերյան'
                },
                {
                    backgroundImg : 'sevan 2.png',
                    name : 'Սևան'
                },
                {
                    backgroundImg : 'dilijna.png',
                    name : 'Դիլիջան'
                },
                {
                    backgroundImg : 'kapan 1.png',
                    name : 'Կապան'
                },
                {
                    backgroundImg : 'artashat 1.png',
                    name : 'Արտաշատ'
                },
                {
                    backgroundImg : 'gavar 1.png',
                    name : 'Գավառ'
                },
                {
                    backgroundImg : 'aparam 1.png',
                    name : 'Ապարան'
                },
                {
                    backgroundImg : 'sisiam 1.png',
                    name : 'Սիսիան'
                }
            ]
        }
    ] 
       const main = document.createElement('div');
       main.classList.add('main'); 
       document.body.appendChild(main);
    for(let i=0; i<pages.length; i++){
       const coverContainer = document.createElement('div');
       main.appendChild(coverContainer);
       const cover = document.createElement('img');
       cover.classList.add('cover');
       cover.src = pages[i].backgroundImg;
       coverContainer.appendChild(cover);   
    const board = document.createElement('div');
       board.classList.add('board');
       main.appendChild(board);
       for(let j=0; j<pages[i].content.length; j++){
         const surface = document.createElement('div');
         surface.classList.add('surface'); 
         const lable = document.createElement('div');
         lable.innerText = `${pages[i].content[j].name}`;
         lable.classList.add('lable');
         const card = document.createElement('div');
         card.classList.add('card')
         const pic = document.createElement('img');
         pic.classList.add('pics');
         pic.src = pages[i].content[j].backgroundImg;
         surface.appendChild(lable);
         card.appendChild(pic); 
         card.appendChild(surface);
         board.appendChild(card);
        } 
     }        

    }
    