let hBtn = document.querySelector('.hBtn')
let gBtn = document.querySelector('.gBtn')
let vBtn = document.querySelector('.vBtn')

let btns = document.querySelector('.btns')

// console.log(hBtn)
// console.log(gBtn)
// console.log(vBtn)

let image = document.querySelector('.picture')
// console.log(image);

let content = document.querySelector('.content')
// console.log(content.innerHTML)

let tabsMaterial = [
    {
        id: 1,
        category: "history",
        headingName: "History",
        headingPara: "I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up. mustache tbh wayfarers 8-bit shaman chartreuse tacos."
    },

    {
        id: 2,
        category: "vision",
        headingName: "Vision",
        headingPara: "Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v hella biodiesel. Church-key listicle polaroid put a bird on it chillwave palo santo enamel pin, tattooed meggings franzen la croix cray. Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof party hammock master cleanse pop-up truffaut, bicycle rights skateboard affogato readymade sustainable deep v live-edge schlitz narwhal."
    },

    {
        id: 3,
        img : "https://vannilla-js-basic-project-11-tabs.netlify.app/hero-bcg.jpeg",
        category: "goals",
        headingName: "Goals",
        headingPara: "Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid cold-pressed roof party. Small batch adaptogen coloring book heirloom. Letterpress food truck hammock literally hell of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie."
    }
]

const findTab = (herTab) => {

    // console.log(herTab)

    let divStore = []
    
    const filterTab = tabsMaterial.filter((eachTab) => eachTab.category.toLowerCase() === herTab.toLowerCase());
    
    filterTab.forEach((eachTab) => {

        const context = `<h3 class="head06">
        ${eachTab.headingName}
        </h3>
        <p class="contentPara text-center text-wrap">
            ${eachTab.headingPara}
        </p>`

        // console.log(context);
        divStore.push(context)
        // console.log(eachTab);

    })

    content.innerHTML = divStore.join(" ")

}

