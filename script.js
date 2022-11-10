// Set our main container located in the HTML body
let allbeers= document.getElementById("AllBeers")


// this creates a "database" (multidimensioanl array with objects)
const Database=[
{Name:"Weird Weather",img:"https://cdn.shopify.com/s/files/1/1268/5569/products/mikkeller-beer-single-can-weird-weather-29947504918646_900x.png?v=1662549787" , Description: "New England low alcoholic Hazy IPA Brewed at De Proef by Mikkeller", Category :"IPA"},
{Name:"Peter, Pale & Mary",img:"https://cdn.shopify.com/s/files/1/1268/5569/products/mikkeller-beer-peter-pale-and-mary-gluten-free-29773136691318_900x.png?v=1655895570" , Description: "Brewed at De Proef by Mikkeller", Category :"Lager"},
{Name:"Speedway Stout",img:"https://cdn.shopify.com/s/files/1/1268/5569/products/alesmith-beer-speedway-stout-14708037976182_900x.png?v=1647894912" , Description: "A HUGE Imperial Stout that weighs in at an impressive 12% ABV! As if that's not enough, we added pounds of coffee for a little extra kick.", Category :"Stout"},
{Name:"Splashdown at Sunrise",img:"https://cdn.shopify.com/s/files/1/1268/5569/products/bottle-logic-brewing-beer-splashdown-at-sunrise-29910078521462_900x.png?v=1661260814" , Description: "Smoothie Style Sour Ale • 6.5% ABV • POG Juice inspired smoothie style sour with pineapple, passionfruit, orange, and pink guava. Orange-pink color with tropical aromas of Hawaii", Category :"Sour ale"},
{Name:"Bianca Raspberry Peach",img:"https://cdn.shopify.com/s/files/1/1268/5569/products/omnipollo-beer-bianca-raspberry-peach-marshmallow-lassi-gose-29418610557046_900x.png?v=1647867593" , Description: "Brewed by Omnipollo", Category :"Sour ale"},
{Name:"Japanese Rice Lager",img:"https://cdn.shopify.com/s/files/1/1268/5569/products/mikkeller-beer-japanese-rice-lager-29300373815414_900x.png?v=1647877137" , Description: "Very refreshing clean lager, aromas of citrus and hay.  Crisp, clean, and easy drinking.", Category :"Lager"},
{Name:"Heavy Rotations",img:"https://cdn.shopify.com/s/files/1/1268/5569/products/deya-beer-heavy-rotations-29592078286966_900x.png?v=1650961577" , Description: "Brewed by DEYA Brewing Company", Category :"IPA"},
{Name:"Black Pistachio",img:"https://cdn.shopify.com/s/files/1/1268/5569/products/hopalaa-beer-black-pistachio-imperial-stout-29720641896566_900x.png?v=1654093394" , Description: "Brewed by Hopalaa, Latvia.", Category :"Stout"},
{Name:"Eternal Slumber",img:"https://cdn.shopify.com/s/files/1/1268/5569/products/the-veil-brewing-beer-eternal-slumber-2021-29811987742838_900x.png?v=1657616890" , Description: "Tastes a lot like the description! Chocolate covered bananas, sandwich cookie frosting, and boozy ice cream.", Category :"Stout"},
{Name:"We Got The Fire",img:"https://cdn.shopify.com/s/files/1/1268/5569/products/maltgarden-beer-we-got-the-fire-29824866320502_900x.png?v=1658220968" , Description: "Thick Coffee Imperial Stout with specially roasted coffee Costa Rica Chirripo from Kafar Roastery, a collab brew with Tank Busters.", Category :"Stout"},
{Name:"Winter In Bangalore",img:"https://cdn.shopify.com/s/files/1/1268/5569/products/amager-bryghus-beer-winter-in-bangalore-30060531613814_900x.png?v=1666084084" , Description: "Taste the name - Bangalore. India's variegated and spicy mystery almost flows up into the nostrils - just like the best Indian aroma hops we have used in this beer, grown precisely in the beautiful Bangalore catchment area.", Category :"IPA"},
{Name:"Power Nap",img:"https://cdn.shopify.com/s/files/1/1268/5569/products/buxton-brewery-beer-power-nap-29611941134454_900x.png?v=1651570159" , Description: "The heavy hitter in the IPA category is known for its high alcohol content. A warming body, with residual sweetness and an intense hop flavor.", Category :"IPA"},
{Name:"Sally Oh Sally",img:"https://cdn.shopify.com/s/files/1/1268/5569/products/mikkeller-beer-sally-oh-sally-28438655664246_900x.png?v=1647894942" , Description: "Our collaboration with renowned German brewery Gaffel. The keywords here are liht hops, clean flavour and a generous crisp finish.", Category :"Lager"},
{Name:"Oompah-Oompah",img:"https://cdn.shopify.com/s/files/1/1268/5569/products/amager-bryghus-beer-sorcerer-s-lab-oompah-oompah-28747036196982_900x.png?v=1647894552" , Description: "A light-bodied, highly-attenuated, gold-colored, bottom-fermented bitter German beer style showing excellent head retention and an elegant, floral hop aroma. Crisp, clean, and refreshing, it showcases the finest quality German malt and hops.", Category :"Lager"},
{Name:"Visions",img:"https://cdn.shopify.com/s/files/1/1268/5569/products/mikkeller-beer-visions-440ml-29395546243190_900x.jpg?v=1647898702" , Description: "Clean, inviting aroma and medium body make for a perfect session beer. A hint of citrus lemon from the hopping compliments Vision's crisp finish.", Category :"Lager"},
{Name:"Candy3",img:"https://cdn.shopify.com/s/files/1/1268/5569/products/dugges-beer-candy3-30103906287734_900x.png?v=1667306645" , Description: "The third beer in our Candy series where we mix fruits and spices into imperial stouts. This time you again get a double coconut whopper with mango and lush tonka bean on top of black liquid heaven. With the added bonus of Calvados barrel aging. Bonkers!", Category :"Stout"},
{Name:"Into The Haze",img:"https://cdn.shopify.com/s/files/1/1268/5569/products/deya-beer-into-the-haze-29592268243062_900x.png?v=1650964098" , Description: "Soft, juicy, citrus and tropical fruit laden IPA. This beer has clean malt structure, peachy yeast esters, and a saturated presence of Citra and Simcoe. Refreshing clean and beautiful to drink! ", Category :"IPA"},
{Name:"Polly 2019",img:"https://cdn.shopify.com/s/files/1/1268/5569/products/mikkeller-baghaven-beer-polly-29910099624054_900x.png?v=1661431026" , Description: "Blended Danish Wild Ale aged on fresh kiwi berries and guava. Aged 36 months.", Category :"Sour ale"},
{Name:"Fume Blanc",img:"https://cdn.shopify.com/s/files/1/1268/5569/products/homage-brewing-beer-fume-blanc-14841999097974_900x.png?v=1647873212" , Description: "Barrel Aged Saison conditioned on Sauvignon Blanc grape skins and strawberries.", Category :"Sour ale"},
{Name:"Kawas Tau",img:"https://cdn.shopify.com/s/files/1/1268/5569/products/pinta-beer-kwas-tau-29784112234614_900x.png?v=1656405322" , Description: "Dark red, sour and fruity beer. It gets its crisp acidification in the kettle with lactic acid bacteria and a large dose of cherry juice.", Category :"Sour ale"},
]


function Filter(Value) {
    allbeers.innerHTML = "" // Delete all previously rendered elements

    // Map itterates over the database objects 
    Database.map((Beer) =>  { // "Beer" is a variable and can be what ever we want it to be, it contains 1 object from the Database

        // If Beer category and value(From our button) is the same, render the elment we created below
        if(Beer.Category == Value){
        
        // Create a div element 
    const BeerContainer = document.createElement("div");
    
    // building the HTML structure for our BeerContainer div element
    // Populate the children elemnts of our div elemnt, with template strings 
    BeerContainer.innerHTML = `
            <div class="BeerContainer">
                    <h2 class="BeerName">${Beer.Name}</h2> 
                    <div class="BeerInfo">
                        <img class="BeerImages" src=${Beer.img} alt="">
                        <p>${Beer.Description}</p>
                    </div> 
                </div>
    `
    // every time we are done building the div element push it into the AllBeers container
     allbeers.appendChild(BeerContainer)
    }

    // same but if we have no search value render all beers
    if(Value == 'Home'){
        const BeerContainer = document.createElement("div");
    
    BeerContainer.innerHTML = `
            <div class="BeerContainer">
                    <h2 class="BeerName">${Beer.Name}</h2>
                    <div class="BeerInfo">
                        <img class="BeerImages" src=${Beer.img} alt="">
                        <p>${Beer.Description}</p>
                    </div> 
                </div>
    `
    
     allbeers.appendChild(BeerContainer)
    }
    })
    
}

Filter("Home")