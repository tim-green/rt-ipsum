// Code that generators the random lorem ipsum text

// Create a new object called loremIpsum by invoking the GenerateNewText constructor function
const loremIpsum = new GenerateNewText();

// Constructor function that creates an object with the words property
function GenerateNewText() {
  // Add all the rooster teeth sayings to the object
  this.sentences =
    [
      "All right, I've created the Tower of Pimps. Everyone worship me.",
"YOU MY BOI MICHAEL !",
"Your life is a dry streak...",
"Well, you sound like Joe Pesci.",
"I am gonna jump this lava like an absolute MOF.",
"Where in the chuff are you guys?",
"Gug. Gug. Ah tree, result.",
"I bet bloody Kerbel Gunners or whatever his name is.",
"I'm anuerisming.",
"I got really confused..cuz of all the confusion.",
"All right, drop your gubbins.",
"Die you little rinsy little prick!",
"YOU USELESS ANUS!",
"Ok, so what I'm going to ask you to do, Geoff, is to come over me and...",
"Jack's got an asshole like a clown's pocket.",
"This is toppy tippers.",
"BUUUP!",
"Don't be a pleb!",
"Quit being so annoying, you donut!",
"Put that spade down you stupid Nintendo cock...",
"AH Fudge Fif--.",
"You want a bone? You want a bone? Yes, you do! Have a bone! You love bones, don't you, little buddy? All right, he doesn't like bones.",
"I think I've found my parents! Dad? Is that you?",
"Ray just pulled the Tower of Pimps out of his anus!",
"Have that in your helmet you little bike riding prick!",
"Micoo!","Let's call him Run-gar!","Plan X is a no go!","I SEE HIM! HE'S IN THE DISTANCE!",
"We were all gonna be in a right bugger's muddle there.",
"What do I mean?",
"It's hard to remember what you've forgotten.",
"What are the chances that this delicious Cinnabon is gonna grow up to eat me?",
"Look, people are English, alright?",
"You were born at a leisurely pace.",
"Michael, have you ever just laid back and smoked a ton of mushrooms?",
"It's let's plays like this that make me want to try cocaine",
"It's like a 4 by 4 2 by 4... what?",
"Thanks for the compii, Ray",
"Bad timing because of the other thing!",
"Just dig a 2-2 hole *sigh*",
"Oh, sausage, bacon, beans, and all the other breakfast meats!",
"What do you call the people here before us? Indians?",
"Ray, look at you tucked up in bed, you little bloody Ray!",
"I as well died?!",
"Are you havin' my ass?",
"But technically you own them, so they are your gaff, so I'm faffing in your gaff.",
"Let's make some sweet bunty little smubbles.",
"It just pinged and went dingle.",
"Oh, there's like a beep boop boop-a-doop on the side of it.",
"Here comes Guff Pap. AHHHHH!",
"I thought I had a comfortable landing, but I just went poip!",
"Bodge is not on this team. Bodge was a part of Drippy Spaff. Munge Bimp is a different crew. There's actually one person from Drippy Spaff who's a part of Munge Bimp.",
"You gumpy little geck...",
"I don't think I've taken a sausage of damage!",
"Oh ho! HO HO HO HO!",
"This is gonna be absolute...ly top.",
"I'm gonna plop an absolute corker!",
"YOU DONUT!'",
"This one looks toppy tippers.",
"BUH BUH BUH BUHHHH!!!! BUH BUH BUH BUHHHH!!!!!",
"What i'm gonna do, is do a little doey do.",
"THERE'S THE WIND!",
"CONCRETE DONKEY!!!!!!!",
"WHOOOPS! WHOOOPS! AWHHHH",
"It doesn't damage me... but it does make me look bad-ass!",
"Why are we declaring war on this bit... alright.",
"OH SSHCH! OOH OOH OOH!",
"Gay Altitude?",
"So do you have to pet to puh, err buy to huh?",
"Michael made me feel all funny earlier",
"I have more word knowledge...vocabulary...",
"I'm trying to take incon...routes.",
"Where are we?! What the bollocks?!",
"DID I JUST GET MUGGED ON THE SIDE OF A MOUNTAIN?!?!?!?!?!?!?!?!?!",
"No, i told you i got mugged like two minutes ago!",
"I LIVE HERE NOW!",
"Well, i came around the corner and reloaded.",
"Oh my GOD RYAN!!!!!!",
"Think with por'ols!",
"Keep up, mo-fos!",
"Let's play Super Mario with Michael and no portals...",
"It's a beanstalk!",
"Did you do that portal of safety?",
"There's portals, right? Right, USE THEM!",
"Look at the pony down on the bottom trying to keep up.",
"Whoops, whoops, damn it!",
"BEEEEEEEEEEEEANSTAAAAAAAAALK!",
"Dude, my green shit is amazing.",
"Uh.. Eggs?",
"How, I do my best to kill you",
"Well they've just ruined it, haven't they by dying",
"Dude, no guffs",
"Orange is fast running, blue is jumpy jumpson.",
"Doo doo doo doo, portal gun. Doo do- AHHHH!",
"Michael's a douche pot! CHA CHA CHA CHA!",
"I've got a shotty to hotty!",
"He's got like... mine tits!",
"I've smeared down the ramp!",
"GLAK GLAK GLAK!",
"Glow bip!",
"I listen like a pro.",
"That guy flumped over like a sack of spuds",
"OH HELP! SOMENE! I'M GETTING DEAD!",
"I got dizzled an rinsed.",
"I sliced him like a piece of ham.",
"Just reset my jammies.",
"Let's go to the Dave Decipher.",
"Did someone stamp your head in?",
"We should stick the damn together. Like not a physical dam!",
"OH MY GOD! That was like a Bulltrue with a Ghost except i had a shotgun and you had a Ghost.",
"Augh, you smeg-pot.",
"That is Bang Out of Order.",
"I did a little vaginal dance!",
"I just got done by a doctor!",
"Michael, rats die in the street. I'm the dandy!",
"You would never know that I was... a dude.",
"You can't kill not your target.",
"Who the hell picked the dandy?!",
"Yeah, flap those bingo wings all you want, love.",
"That was wallar!",
"You almost Robin Hooded that bitch",
"Would you like some... Spaghetti!",
"Alfredo? Mmmm, spicy meatball!",
"OOOOOOOOOOOOHHHHHH, England.",
"OOOOOOOOOOOOOOHHHHHHHHH EHHHHHHHH!!!!",
"MARK NUUUUUUUUUUUUTT!",
"Here's Mark Nutt, his catchphrase is suck my nut.",
"Maaark Nutt... Maaaaark Nutt",
"BIP! BOOP! BEOP! AWH!",
"Just tease it in, AHUH!",
"No, you're chattin' guffs!",
"OOOOOOHHHH SHEBANG!",
"GOOOOO BLUE TEAM!",
"I can't see cuz of the micro poles!",
"Awh, you munged it!",
"FRONT FLIP FOR STYLE!",
"He stamped me in!",
"You know what they say about red? They're plebs!",
"I've gone hollow now!",
"Oh, I've just donked it!",
"That was skillage!",
"PINK CAR!",
"BYYYEEEE BLUE TEAM - oh God!",
"BACKFLIP FOR ACCIDENT!",
"BAAAAIIIIILLLL!!!!!!!!!",
"WHAT IS GAME NIGHT???",
"Screw you Michael, you pissy little piss pot!",
"BOLLOCKS!",
"The spawns are absolute scrillous in this.",
"I'm kakin my spaffs.",
"I'm getting minged up my quelch.",
"YOU LOOK LIKE A TREE!!",
"Awh, cum on my back...",
"It's all about speed justice!",
"If a red house is made of red blicks and a blue house is made of brue...bricks, what color's a greenhouse? It's made of glass.",
"He bloody nibbled my tip!",
"Agh, cockadoodle bollocks!",
"You're like an idiot who's really good!",
"People who know the time are smart.",
"You can't just yell at 'look at that Jew'!",
"I KNEW IT! I KNEW IT! BOLLOCKS! ASS!",
"Long shot! OH MY GOD!!!!!!",
"Matt, you're a cheeky little scrotoid.",
"Can you vote to impeach a citizen?",
"Playing with Matt is like trying to eat a salad with H.I.V. dressing.",
"Come at me debris!",
"They're givin' me jib for crossin' my legs like a fem!",
"I'm feelin' lucky!",
"Racism isn't OK; anal is.",
"People like grapes.",
"Does rocks float on lava?",
"The sky is bigger than the ground.",
"Can you hear through your head?",
"Space gravity is different to planet gravity.",
"People like crepes.",
"How up is space?",
"Choking is either sexual or it's like, with the Force.",
"My life is a series of dumb choices",
"I'm gonna go build a house",
"Radiation is Bullshit",
"You're a walking stupid",
"You're a tornado of dumb",
"Edgar is the one in the hole.",
"I win science",
"Instead of bitching that it won't work, why don't you go make it work",
"If a tree falls in the woods, why does Jon still work here?",
"Here’s lookin at you kid!",
"don't shit in my hand and call it skittles",
"Orange, Monkey, Eagle",
"Is Carpet the name of the baby?",
"YOUUUU! ARE THE ONE WITH THE FACE THAT IS STUPID!",
"It shuts off",
"I tried to grab a thing that was on a thing, but I became the thing.",
"Never fight a guy with his dick out",
"I'm the Cheese man!",
"Ryan, no offense, fucking kill yourself",
"Jokes on you. I'm borderline illiterate.",
"Mogar is ready!",
"Scooter Patrol", 
"HE'S FUCKIN' 5'4!",
"You threw it against the wall like a wet paper towel!",
"I. Am. MONSTER TRUCK!",
"I've got sticky mud in my clunge.",
"Do the LOOOOOOOOOP!",
"Do you want my bread centers?",
"Look at these scrobbles!",
"Spoole, what's the most important machine at the gym?....THE SQUAT RACK!",
"I Died sucking my own Penis",
"Someone slap the dick out of his mouth!",
"This show is all about fair, and right",
"You're fucking at a high school level",
"Why buy the cow when you can get the milk for free?", 
"...I want you to have my orange juice.",
"I meant why are we up in the sun, when we could be standing down there in the shade",
"Tucker, there is a very fine line between not listening and not caring. I like to think that I walk that line every day of my life."
}

// Method to the GenerateNewText constructor function that generates a random sentence
GenerateNewText.prototype.getRandomSentence = function() {
  let randomSentence = this.sentences[Math.floor(Math.random() * this.sentences.length)]
	return randomSentence;
}

// Method to the GenerateNewText constructor function that generates a paragraph from random sentences
GenerateNewText.prototype.getParagraph = function() {
  let paragraph = "";
  // Set the minimum number of words
  let minimumCharacterLength = 250;
  let firstSentence = true;
  while (paragraph.length < minimumCharacterLength) {
    if (firstSentence) {
      paragraph = paragraph.concat(this.getRandomSentence());
      firstSentence = false;
    } else {
      paragraph = paragraph.concat(" " + this.getRandomSentence());
    }
  }
  return paragraph;
}

// Method to the GenerateNewText constructor function that gerates multiple paragraphs from paragraphs
GenerateNewText.prototype.getAllParagraphs = function(numberOfParagraphs) {
  let allParagraphs = [];
  // Generate the number of paragraphs as specified by the user
  while (allParagraphs.length < numberOfParagraphs) {
    allParagraphs.push(this.getParagraph());
  }
  // Convert array into HTML string
  let paragraphHTML = "";
  allParagraphs.forEach(function (paragraph) {
    paragraphHTML += "<p>" + paragraph + "</p>";
  });
  return paragraphHTML;
}

module.exports = loremIpsum;
