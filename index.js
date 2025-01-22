
const SubmitAdventurer = document.getElementById('submitAdventurer')
const SubmitShop = document.getElementById('SubmitShop')
const SubmitFoe = document.getElementById('SubmitFoe')
const SubmitDeity = document.getElementById('SubmitDeity')
const SubmitOther = document.getElementById('SubmitOther')


const AdventurerDescription = document.getElementById('AdventurerResult')
const ShopDescription = document.getElementById('ShopResult')
const FoeDescription = document.getElementById('FoeResult')
const DeityDescription = document.getElementById('DeityResult')
const OtherDescription = document.getElementById('OtherResult')

function Adventurercheck (){
const adventurernpc = document.getElementById('ADVnpcs').value

if (adventurernpc === "Mel"){
AdventurerDescription.innerHTML = '<p style ="color:aqua;"> Devotion paladin who lost their village and has become an adventurer because of the Gift she received from who is believed to be Garna, The Goddess Of Light</p>' 
}
else if (adventurernpc === "Sarah"){
    AdventurerDescription.innerHTML = '<p style ="color: red;"> Veangance Oath Goblin who after witnessing all her fellow goblin companions die in front of her, decided to abandon her old faith and swore to wipe all hobgoblins from existence, although she is filled with hatred in her soul, she still has a kind heart to those who have shown to be trustful </p>'
}
else if ( adventurernpc === "Ezreal"){ 
    AdventurerDescription.innerHTML = '<p style ="color: yellow;"> Human Adventurer who came from Arcanum,loves exploring dungeons and getting tresure. although he is cheerful and playful around everyone, even the ones who are clearly not friendly, he knows what it is to lose someone precious </p>'
}
else if ( adventurernpc ==="Eyren Seit" ){
    AdventurerDescription.innerHTML = '<p style = "color:#1c1f22;">A mysterious sorceress which weirdly has the traits of a elf and a beholder at the same time, even though she is confirmed to be very powerful and hold wisdom Vel Koz offered her, she is extremely volatile and twisted, most of the time she is messing on this she should not since according to her, she has never left the library </p>'
}
else if ( adventurernpc === "Faris"){
    AdventurerDescription.innerHTML = '<p style = "color:lightseagreen;">A human From the group who defeated the Ancient One, Faris is one of the members of the Warriors of Dawn that is left after 2000 years. she is believed to be a cruel pirate who kills people instantly if they wrong her, although she does not mind these rumors for some reason </p>'
}
else if ( adventurernpc === "Zuo Bai"){
     AdventurerDescription.innerHTML = '<p style = "color:red;"> A human Nominated the strongest adventurer of Taihe and one of the greatest samurai, Zuo Bai treats people around him nicely unless they wrong him or someone close to him, though forgiving if the problem is with him, he is not for others he find important</p>'
    }
else if ( adventurernpc === "Youmu"){
AdventurerDescription.innerHTML = '<p style = "color:cyan;"> A misteryous sword master who exhibits an otherworldly presence, her swords Hakourouken and Roukanken are said to be able to cut through anything and send undead to the afterlife by force, strangely she also seems to work as an adventurer </p>'
}}


    function ShopCheck (){
    const Shop = document.getElementById('Shop').value
    
    if(Shop === "Marisa"){
    ShopDescription.innerHTML = '<p style = "color:yellow;">A eccentric and overall weird human, Marisa has a small shop of magical goods in the middle of the forest, she is very known for her woodcarving and her special gadgets called hakkeros, she is also rumored to having studied decades on magic and has learnt to create some spells which only she can use through her own personal Hakkero   </p>'
}
else if(Shop === "yi"){
    ShopDescription.innerHTML = '<p style = "color:lightgreen;"> Little is known about him currently, but he seems to have a dojo, though empty he looks very skillfull, apparently holding a technique which is called Wuju that according to him requires a "pure" weapon </p>'
}
else if(Shop === "Warden"){
ShopDescription.innerHTML = '<p style = "color:darkblue;"> A mysterious Wandering Merchant which seems to sell magic items for a suspiciously low price, he is always wearing a robe to hide his face and body and gives away compasses which only point to his location </p>'
}
}


function Foecheck(){
    const Foe = document.getElementById('Foe').value
    if(Foe === 'Perseu'){
        FoeDescription.innerHTML = '<p style = "color:purple;">A spider found by the Dark Souls in a dungeon that now works for VelKoz itself on his endless search for knowledge, with the deaths of her closest allies, she grew cold and now perseu only task is to assist VelKoz hoping that one day, she will find a purpose </p>'
    }
    else if (Foe === 'Amalgam'){
        FoeDescription.innerHTML = '<p style = "color:red;"> A creature created longer than time can tell and Deemed dead after the Dark Souls cut his head off, yet he somehow has come back to life, his intentions are unknown at the moment but he is surely stronger than last time </p>'
    }
else if (Foe === 'MoonGuy'){
FoeDescription.innerHTML = '<p style = "color:lightblue;" >"Little is known about him, but he affirms to worship a god in the moon, or perharps the moon itself, extremely powerful but something far more powerful seems to limit him, or be stronger than him as he feared the fallen archfey</p>'
}
else if (Foe ==="Cgolem"){
    FoeDescription.innerHTML = '<p style = "color:lightblue;">A golem located in a abandoned crystal mining site due to the village responsible for it being destroyed, he protects his cavern with might although he respects those who come to take fair amounts of crystals and leave</p>'
}
}

function Godcheck(){
    const God = document.getElementById('Gods').value

if (God === 'VelKoz'){
DeityDescription.innerHTML = '<p style = "color:pink;"> A mysterious man which has a library with the information of the whole world and he seems to be sealed in this place, he is constantly searching for more knowledge </p>'
}
}

function Othercheck(){
    const Other = document.getElementById('Others').value

    if (Other ==="AnnaPrincess"){
        OtherDescription.innerHTML = '<p style = "color:lightgreen;"> Anna was the heir of the throne from the Elven Kingdom but that fact changed when her father, the king died, on which her uncle usurped the throne and slowly erased the records of her existence from history </p>'
    }     
else if (Other ==="AnnaBlood"){
    OtherDescription.innerHTML = '<p style = "color:lightgreen;">All but rumors of her existance are heard nowadays, Anna once created what is called the Mighty Oak, but most commonly know as the Elven Exterminator War Machine, a giant wooden golem which slaughtered thousands of elves not so long ago, her intentions were never revealed though her objective clear: destroy the elven clans</p>'

}
}

SubmitShop.addEventListener('click',ShopCheck)
SubmitAdventurer.addEventListener('click',Adventurercheck)
SubmitFoe.addEventListener('click',Foecheck)
SubmitDeity.addEventListener('click',Godcheck)
SubmitOther.addEventListener('click',Othercheck)