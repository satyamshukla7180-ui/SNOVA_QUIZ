const categories = [
 {id:"gk",name:"General Knowledge",icon:"🌍",desc:"Everyday facts and discoveries",questions:[
  ["Which is the largest planet in our solar system?",["Earth","Jupiter","Saturn","Mars"],1,"Jupiter is the largest planet in our solar system."],
  ["What is the capital of Japan?",["Seoul","Beijing","Tokyo","Bangkok"],2,"Tokyo is the capital of Japan."],
  ["How many continents are there?",["Five","Six","Seven","Eight"],2,"There are seven continents."],
  ["Which is the largest ocean?",["Atlantic","Indian","Arctic","Pacific"],3,"The Pacific Ocean is the largest."],
  ["Which animal is known as the Ship of the Desert?",["Horse","Camel","Elephant","Donkey"],1,"The camel is commonly called the Ship of the Desert."],
  ["Which is the smallest prime number?",["0","1","2","3"],2,"Two is the smallest prime number and the only even prime."],
  ["How many days are there in a leap year?",["364","365","366","367"],2,"A leap year has 366 days."],
  ["Which gas do plants absorb from the atmosphere?",["Oxygen","Nitrogen","Carbon dioxide","Hydrogen"],2,"Plants absorb carbon dioxide during photosynthesis."],
  ["Which is the fastest land animal?",["Lion","Cheetah","Tiger","Horse"],1,"The cheetah is the fastest land animal."],
  ["What is the currency of the United Kingdom?",["Euro","Dollar","Pound sterling","Yen"],2,"The UK's currency is the pound sterling."]
 ]},
 {id:"science",name:"Science",icon:"🧪",desc:"Explore the world of science",questions:[
  ["Which planet is known as the Red Planet?",["Venus","Mars","Mercury","Neptune"],1,"Mars looks reddish because of iron oxide on its surface."],
  ["What is the chemical symbol for water?",["CO₂","O₂","H₂O","NaCl"],2,"Water's chemical formula is H₂O."],
  ["Which organ pumps blood around the body?",["Lungs","Brain","Heart","Kidney"],2,"The heart pumps blood through the circulatory system."],
  ["What force pulls objects toward Earth?",["Magnetism","Gravity","Friction","Electricity"],1,"Gravity attracts objects toward Earth's centre."],
  ["Which part of a plant usually absorbs water?",["Leaf","Flower","Root","Stem"],2,"Roots absorb water and minerals from the soil."],
  ["What is the boiling point of water at sea level?",["50°C","75°C","100°C","150°C"],2,"At standard atmospheric pressure, water boils at 100°C."],
  ["Which gas is most abundant in Earth's atmosphere?",["Oxygen","Nitrogen","Carbon dioxide","Hydrogen"],1,"Nitrogen makes up about 78% of Earth's atmosphere."],
  ["What is the centre of an atom called?",["Nucleus","Cell","Electron","Molecule"],0,"The nucleus is at the centre of an atom."],
  ["Which vitamin can the body make with sunlight exposure?",["Vitamin A","Vitamin B12","Vitamin C","Vitamin D"],3,"Sunlight helps the skin produce vitamin D."],
  ["What is the study of living things called?",["Geology","Biology","Astronomy","Physics"],1,"Biology is the study of life and living organisms."]
 ]},
 {id:"history",name:"History",icon:"🏛️",desc:"Past events and civilizations",questions:[
  ["Who was the first Mughal emperor in India?",["Akbar","Babur","Humayun","Shah Jahan"],1,"Babur founded the Mughal Empire in India in 1526."],
  ["In which year did India become independent?",["1942","1945","1947","1950"],2,"India became independent on 15 August 1947."],
  ["Who is known for leading the Dandi March?",["Subhas Chandra Bose","Mahatma Gandhi","Jawaharlal Nehru","Sardar Patel"],1,"Mahatma Gandhi led the Salt March in 1930."],
  ["The ancient city of Rome was located in which country?",["Greece","Italy","Egypt","Turkey"],1,"Ancient Rome was centred in present-day Italy."],
  ["Who was the first President of the United States?",["Abraham Lincoln","Thomas Jefferson","George Washington","John Adams"],2,"George Washington served as the first US president."],
  ["Which civilization built the pyramids at Giza?",["Roman","Ancient Egyptian","Mayan","Mesopotamian"],1,"The pyramids at Giza were built by ancient Egyptians."],
  ["Who founded the Maurya Empire?",["Ashoka","Chandragupta Maurya","Bindusara","Harsha"],1,"Chandragupta Maurya founded the Maurya Empire."],
  ["The French Revolution began in which year?",["1776","1789","1815","1848"],1,"The French Revolution began in 1789."],
  ["Who was popularly known as the Iron Man of India?",["B. R. Ambedkar","Sardar Vallabhbhai Patel","Lal Bahadur Shastri","Bhagat Singh"],1,"Sardar Patel is popularly known as the Iron Man of India."],
  ["Which ship sank in 1912 after hitting an iceberg?",["Lusitania","Titanic","Britannic","Queen Mary"],1,"The RMS Titanic sank in April 1912."]
 ]},
 {id:"geography",name:"Geography",icon:"🗺️",desc:"Places, landforms and our planet",questions:[
  ["Which is the highest mountain above sea level?",["K2","Kangchenjunga","Mount Everest","Lhotse"],2,"Mount Everest is the world's highest mountain above sea level."],
  ["Which is the largest hot desert?",["Gobi","Sahara","Kalahari","Arabian"],1,"The Sahara is the largest hot desert."],
  ["Which river flows through Egypt?",["Amazon","Nile","Danube","Thames"],1,"The Nile flows north through Egypt."],
  ["Which country has the largest land area?",["Canada","China","Russia","USA"],2,"Russia is the world's largest country by area."],
  ["What is the capital of Australia?",["Sydney","Melbourne","Canberra","Perth"],2,"Canberra is Australia's capital."],
  ["Which imaginary line divides Earth into Northern and Southern Hemispheres?",["Prime Meridian","Equator","Tropic of Cancer","Date Line"],1,"The Equator divides Earth into Northern and Southern Hemispheres."],
  ["Which Indian state is known as the Land of Five Rivers?",["Rajasthan","Punjab","Gujarat","Haryana"],1,"Punjab is associated with the five rivers of the region."],
  ["Which ocean lies between Africa and Australia?",["Atlantic","Pacific","Indian","Arctic"],2,"The Indian Ocean lies between Africa, Asia and Australia."],
  ["What is the capital of Canada?",["Toronto","Vancouver","Ottawa","Montreal"],2,"Ottawa is the capital of Canada."],
  ["Which layer of Earth is the outermost solid layer?",["Core","Mantle","Crust","Inner core"],2,"The crust is Earth's outermost solid layer."]
 ]},
 {id:"sports",name:"Sports",icon:"🏆",desc:"Games, players and tournaments",questions:[
  ["How many players from one team are on the field in football (soccer)?",["9","10","11","12"],2,"A football team fields 11 players."],
  ["Which sport uses a shuttlecock?",["Tennis","Badminton","Squash","Table tennis"],1,"Badminton is played with a shuttlecock."],
  ["How many rings are on the Olympic symbol?",["Four","Five","Six","Seven"],1,"The Olympic symbol has five interlocking rings."],
  ["Wimbledon is associated with which sport?",["Cricket","Tennis","Golf","Hockey"],1,"Wimbledon is a major tennis tournament."],
  ["How many runs are scored for a boundary in cricket when the ball reaches the rope after bouncing?",["2","3","4","6"],2,"A boundary after the ball has bounced scores four runs."],
  ["Which country hosted the first modern Olympic Games in 1896?",["France","Greece","Italy","UK"],1,"The first modern Olympics were held in Athens, Greece."],
  ["The term 'checkmate' belongs to which game?",["Carrom","Chess","Polo","Bridge"],1,"Checkmate ends a chess game."],
  ["How many points is a free throw worth in basketball?",["1","2","3","4"],0,"A successful free throw is worth one point."],
  ["Which sport is associated with the Tour de France?",["Running","Cycling","Swimming","Skiing"],1,"The Tour de France is a famous cycling race."],
  ["The Davis Cup is a team competition in which sport?",["Tennis","Football","Badminton","Golf"],0,"The Davis Cup is an international men's tennis team competition."]
 ]},
 {id:"computer",name:"Computer Knowledge",icon:"💻",desc:"Digital world and technology",questions:[
  ["What does CPU stand for?",["Central Processing Unit","Computer Personal Unit","Central Program Utility","Core Power Unit"],0,"CPU stands for Central Processing Unit."],
  ["Which of these is an input device?",["Monitor","Printer","Keyboard","Speaker"],2,"A keyboard is used to enter data."],
  ["What does WWW stand for?",["World Wide Web","Web World Window","Wide World Wire","World Web Work"],0,"WWW stands for World Wide Web."],
  ["Which company develops the Windows operating system?",["Apple","Microsoft","Google","IBM"],1,"Microsoft develops Windows."],
  ["What is the binary number system based on?",["Base 2","Base 8","Base 10","Base 16"],0,"Binary uses two digits: 0 and 1."],
  ["Which one is a web browser?",["Linux","Chrome","Python","Excel"],1,"Google Chrome is a web browser."],
  ["What does URL stand for?",["Uniform Resource Locator","Universal Record Link","United Resource Line","Uniform Read Link"],0,"URL stands for Uniform Resource Locator."],
  ["Which device is commonly used to connect a computer to a network wirelessly?",["Scanner","Wi-Fi adapter","Plotter","Microphone"],1,"A Wi-Fi adapter enables wireless network connectivity."],
  ["Which of these is an example of an operating system?",["HTML","Android","JPEG","HTTP"],1,"Android is a mobile operating system."],
  ["What is the main purpose of a computer's RAM?",["Long-term storage","Temporary working memory","Printing documents","Internet connection"],1,"RAM temporarily stores data and instructions in use."]
 ]},
 {id:"current",name:"Current Affairs",icon:"📰",desc:"General awareness and institutions",questions:[
  ["Where is the headquarters of the United Nations?",["Geneva","New York City","Paris","London"],1,"The UN headquarters is in New York City."],
  ["Which organization publishes the World Economic Outlook?",["World Bank","IMF","WHO","UNESCO"],1,"The International Monetary Fund publishes the World Economic Outlook."],
  ["Where is the headquarters of the World Health Organization?",["Rome","Geneva","Vienna","Nairobi"],1,"WHO is headquartered in Geneva, Switzerland."],
  ["Which Indian institution issues most currency notes in India?",["SBI","RBI","SEBI","NITI Aayog"],1,"The Reserve Bank of India issues banknotes, except the one-rupee note."],
  ["What does ISRO stand for?",["Indian Space Research Organisation","International Satellite Research Office","Indian Science Rocket Office","Institute of Space and Radio Operations"],0,"ISRO stands for Indian Space Research Organisation."],
  ["Which body conducts elections to the Lok Sabha in India?",["Supreme Court","Election Commission of India","Finance Commission","UPSC"],1,"The Election Commission of India conducts parliamentary elections."],
  ["Where is the headquarters of UNESCO?",["Paris","New Delhi","Tokyo","Madrid"],0,"UNESCO is headquartered in Paris."],
  ["Which Indian mission made a soft landing near the Moon's south polar region in 2023?",["Mangalyaan","Chandrayaan-2","Chandrayaan-3","Aditya-L1"],2,"Chandrayaan-3 achieved the landing in August 2023."],
  ["Which day is celebrated as International Yoga Day?",["5 June","21 June","11 July","2 October"],1,"International Yoga Day is observed on 21 June."],
  ["Which body is responsible for monetary policy in India?",["RBI","ISRO","CBSE","CAG"],0,"The Reserve Bank of India is responsible for monetary policy."]
 ]},
 {id:"india",name:"Indian GK",icon:"🇮🇳",desc:"India, culture and constitution",questions:[
  ["What is the national animal of India?",["Lion","Bengal tiger","Elephant","Leopard"],1,"The Bengal tiger is India's national animal."],
  ["What is the national aquatic animal of India?",["Blue whale","Ganges river dolphin","Sea turtle","Crocodile"],1,"The Ganges river dolphin is India's national aquatic animal."],
  ["Who wrote India's national anthem?",["Bankim Chandra Chatterjee","Rabindranath Tagore","Sarojini Naidu","Muhammad Iqbal"],1,"Rabindranath Tagore wrote Jana Gana Mana."],
  ["What is the capital of Rajasthan?",["Jodhpur","Udaipur","Jaipur","Kota"],2,"Jaipur is the capital of Rajasthan."],
  ["Which is the largest Indian state by area?",["Madhya Pradesh","Maharashtra","Rajasthan","Uttar Pradesh"],2,"Rajasthan is India's largest state by area."],
  ["How many spokes are there in the Ashoka Chakra?",["20","22","24","26"],2,"The Ashoka Chakra has 24 spokes."],
  ["Which is the lower house of India's Parliament?",["Rajya Sabha","Lok Sabha","Vidhan Parishad","Gram Sabha"],1,"The Lok Sabha is the lower house of Parliament."],
  ["Which Indian city is known as the Pink City?",["Jodhpur","Jaipur","Bikaner","Agra"],1,"Jaipur is popularly called the Pink City."],
  ["What is the national flower of India?",["Rose","Lotus","Sunflower","Jasmine"],1,"The lotus is India's national flower."],
  ["Which river is often called the Dakshin Ganga?",["Krishna","Godavari","Kaveri","Narmada"],1,"The Godavari is often called the Dakshin Ganga."]
 ]}
];

// ---- Extra question pool (random 10 are picked per quiz) ----
const QUIZ_SIZE=10;
function shuffle(a){const r=[...a];for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]]}return r}
const extraQuestions={
 gk:[
  ["Which planet is closest to the Sun?", ["Mercury", "Venus", "Earth", "Mars"], 0, "Mercury is the closest planet to the Sun."],
  ["How many colours are there in a rainbow?", ["Five", "Six", "Seven", "Eight"], 2, "A rainbow is usually described as having seven colours."],
  ["Which is the largest mammal in the world?", ["African elephant", "Giraffe", "Hippopotamus", "Blue whale"], 3, "The blue whale is the largest mammal and the largest animal known to have lived."],
  ["What is the capital of France?", ["Lyon", "Paris", "Marseille", "Nice"], 1, "Paris is the capital of France."],
  ["Which festival is known as the Festival of Lights?", ["Holi", "Eid", "Diwali", "Baisakhi"], 2, "Diwali is celebrated as the Festival of Lights."],
  ["Which is the largest continent by area?", ["Africa", "Asia", "Europe", "North America"], 1, "Asia is the largest continent by area."],
  ["How many sides does a hexagon have?", ["Five", "Seven", "Eight", "Six"], 3, "A hexagon has six sides."],
  ["Which bird is well known for mimicking human speech?", ["Parrot", "Sparrow", "Eagle", "Pigeon"], 0, "Parrots can imitate human speech."],["Which gas makes up most of Earth's atmosphere?", ["Oxygen", "Nitrogen", "Argon", "Hydrogen"], 1, "Nitrogen makes up about 78% of the atmosphere."],["How many days are there in a week?", ["Five", "Six", "Seven", "Eight"], 2, "A week has seven days."],["The Great Red Spot is a giant storm on which planet?", ["Mars", "Jupiter", "Saturn", "Neptune"], 1, "The Great Red Spot is a giant storm on Jupiter."],["In which script is Hindi written?", ["Roman", "Devanagari", "Arabic", "Gurmukhi"], 1, "Hindi is written in the Devanagari script."]
 ],
 science:[
  ["Which gas do humans inhale for respiration?", ["Carbon dioxide", "Helium", "Oxygen", "Nitrogen"], 2, "Humans need oxygen for respiration."],
  ["What is the SI unit of electric current?", ["Volt", "Ampere", "Ohm", "Watt"], 1, "The ampere is the SI unit of electric current."],
  ["Which is the hardest natural substance?", ["Gold", "Iron", "Quartz", "Diamond"], 3, "Diamond is the hardest naturally occurring substance."],
  ["What is the SI unit of force?", ["Joule", "Newton", "Pascal", "Watt"], 1, "The newton is the SI unit of force."],
  ["Which blood cells help the body fight infection?", ["Red blood cells", "Platelets", "White blood cells", "Plasma"], 2, "White blood cells are a key part of the immune system."],
  ["About how long does sunlight take to reach Earth?", ["8 seconds", "8 minutes", "8 hours", "8 days"], 1, "Sunlight takes roughly 8 minutes to reach Earth."],
  ["What is the process by which plants make food using sunlight?", ["Respiration", "Photosynthesis", "Digestion", "Transpiration"], 1, "Plants make food through photosynthesis."],
  ["Which is the lightest chemical element?", ["Helium", "Oxygen", "Hydrogen", "Lithium"], 2, "Hydrogen is the lightest element."],["What is the chemical symbol of gold?", ["Go", "Gd", "Au", "Ag"], 2, "Gold's symbol is Au, from the Latin aurum."],["Which part of the cell contains genetic material?", ["Nucleus", "Membrane", "Cytoplasm", "Wall"], 0, "The nucleus holds the cell's DNA."],["Sound cannot travel through which of these?", ["Water", "Air", "Steel", "Vacuum"], 3, "Sound needs a medium, so it cannot travel through a vacuum."],["Which planet has prominent rings?", ["Mars", "Saturn", "Earth", "Mercury"], 1, "Saturn is famous for its rings."]
 ],
 history:[
  ["Who was the first Prime Minister of India?", ["Sardar Patel", "Jawaharlal Nehru", "Rajendra Prasad", "Lal Bahadur Shastri"], 1, "Jawaharlal Nehru was independent India's first Prime Minister."],
  ["The Battle of Plassey was fought in which year?", ["1757", "1764", "1857", "1699"], 0, "The Battle of Plassey took place in 1757."],
  ["Who is traditionally credited with writing the Arthashastra?", ["Kalidasa", "Kautilya", "Banabhatta", "Vishakhadatta"], 1, "The Arthashastra is traditionally attributed to Kautilya (Chanakya)."],
  ["Which Mughal emperor built the Taj Mahal?", ["Akbar", "Aurangzeb", "Shah Jahan", "Jahangir"], 2, "Shah Jahan built the Taj Mahal in memory of Mumtaz Mahal."],
  ["The Revolt of 1857 began at which place?", ["Meerut", "Delhi", "Kanpur", "Jhansi"], 0, "The revolt began at Meerut in May 1857."],
  ["Who gave the slogan 'Jai Jawan Jai Kisan'?", ["Jawaharlal Nehru", "Indira Gandhi", "Lal Bahadur Shastri", "Sardar Patel"], 2, "Lal Bahadur Shastri gave this slogan in 1965."],
  ["World War II ended in which year?", ["1918", "1939", "1945", "1950"], 2, "World War II ended in 1945."],
  ["Who was the first woman ruler of the Delhi Sultanate?", ["Razia Sultana", "Noor Jahan", "Chand Bibi", "Rani Lakshmibai"], 0, "Razia Sultana ruled Delhi from 1236 to 1240."],["Who built the Red Fort in Delhi?", ["Akbar", "Humayun", "Shah Jahan", "Babur"], 2, "Shah Jahan built the Red Fort."],["Who was the Governor-General at the time of India's independence?", ["Lord Mountbatten", "Lord Curzon", "Lord Dalhousie", "Lord Ripon"], 0, "Lord Mountbatten was the last Viceroy and first Governor-General of free India."],["Which ancient university was in Bihar?", ["Nalanda", "Taxila", "Ujjain", "Kashi"], 0, "Nalanda was a famous ancient university in Bihar."],["Who discovered the sea route to India in 1498?", ["Columbus", "Vasco da Gama", "Magellan", "Marco Polo"], 1, "Vasco da Gama reached Calicut in 1498."]
 ],
 geography:[
  ["Which is the smallest continent by area?", ["Europe", "Antarctica", "Australia", "South America"], 2, "Australia (Oceania) is the smallest continent by area."],
  ["On which continent is the Amazon rainforest mainly located?", ["Africa", "Asia", "South America", "Europe"], 2, "The Amazon rainforest is mainly in South America."],
  ["Which strait separates Asia from North America?", ["Bering Strait", "Strait of Gibraltar", "Palk Strait", "Strait of Hormuz"], 0, "The Bering Strait lies between Russia (Asia) and Alaska (North America)."],
  ["Which is the highest peak in the Alps?", ["Matterhorn", "Mont Blanc", "Eiger", "Mount Elbrus"], 1, "Mont Blanc is the highest peak in the Alps."],
  ["Which country is known as the Land of the Rising Sun?", ["China", "Thailand", "Japan", "South Korea"], 2, "Japan is called the Land of the Rising Sun."],
  ["The Great Barrier Reef lies off the coast of which country?", ["New Zealand", "Australia", "Indonesia", "Philippines"], 1, "The Great Barrier Reef is off Queensland, Australia."],
  ["Which is the smallest country in the world by area?", ["Monaco", "Vatican City", "San Marino", "Liechtenstein"], 1, "Vatican City is the world's smallest country by area."],
  ["Mount Kilimanjaro is located in which country?", ["Kenya", "Uganda", "Tanzania", "Ethiopia"], 2, "Mount Kilimanjaro is in Tanzania."],["Which is the largest island country in the world by area?", ["Indonesia", "Japan", "Philippines", "Sri Lanka"], 0, "Indonesia is the largest island country by area."],["Which river is the longest in India's peninsula?", ["Godavari", "Krishna", "Kaveri", "Mahanadi"], 0, "The Godavari is the longest peninsular river."],["Which desert is in Rajasthan?", 