/* Edexcel GCSE History (1HI0), Paper 3, Option 31: Weimar and Nazi Germany, 1918–39.
   Content follows the specification (Issue 6), including the August 2024 erratum to key topic 3.
   Each card has: q (question), a (answer), hint, hook (memory hook), choices (the answer first, then three wrong answers),
   sub (the specification sub-topic it belongs to) and an optional visual (a table or steps). */

const OPTION = {
  id: "germany",
  title: "Weimar and Nazi Germany, 1918–39",
  paper: "Paper 3: Modern depth study",
  code: "Option 31",
  exam: "1 hour 30 minutes. 52 marks (including 4 for spelling, punctuation, grammar and specialist terms)."
};

const TOPICS = [
  {
    id: "kt1", num: 1, title: "The Weimar Republic, 1918–29", short: "Weimar Republic",
    spec: [
      {n: "1.1", name: "The origins of the Republic, 1918–19", points: ["The situation in Germany at the end of the War: political unrest, abdication of the Kaiser, armistice and new republic.", "The strengths and weaknesses of the new Weimar Constitution."]},
      {n: "1.2", name: "The early challenges to the Weimar Republic, 1919–23", points: ["Reasons for the early unpopularity of the Republic, including the 'stab in the back' theory and the key terms of the Treaty of Versailles.", "Challenges to the Republic from Left and Right: Spartacists, Freikorps, the Kapp Putsch.", "The challenges of 1923: hyperinflation; the reasons for, and effects of, the French occupation of the Ruhr."]},
      {n: "1.3", name: "The 'Golden Years': recovery of the Republic, 1924–29", points: ["Reasons for economic recovery, including the work of Stresemann, the Rentenmark, the Dawes and Young Plans and American loans and investment.", "Stresemann's achievements in gaining international acceptance of Germany abroad through the Locarno Pact and joining the League of Nations."]},
      {n: "1.4", name: "Changes in society, 1924–29", points: ["Changes in the standard of living.", "Changes in the position of women in work, politics and leisure.", "Cultural changes: developments in architecture, art and the cinema."]}
    ],
    cards: [
      {id: "w1", sub: "1.1", q: "On what date did Kaiser Wilhelm II abdicate?", a: "9 November 1918", hint: "It was two days before the fighting stopped.", hook: "The Kaiser went on the 9th. The guns went quiet on the 11th.", choices: ["9 November 1918", "11 November 1918", "28 June 1919", "11 August 1919"]},
      {id: "w2", sub: "1.1", q: "What was signed on 11 November 1918?", a: "The armistice (an agreement to stop fighting)", hint: "This ended the fighting in the First World War.", hook: "11th hour, 11th day, 11th month: the guns stopped.", choices: ["The armistice (an agreement to stop fighting)", "The Treaty of Versailles", "The Weimar Constitution", "The Locarno Pact"]},
      {id: "w3", sub: "1.1", q: "Who was the first President of the Weimar Republic?", a: "Friedrich Ebert", hint: "He was the leader of the Social Democratic Party (SPD).", hook: "Ebert was first: E for Early.", choices: ["Friedrich Ebert", "Paul von Hindenburg", "Gustav Stresemann", "Wolfgang Kapp"]},
      {id: "w4", sub: "1.1", q: "What did Article 48 of the Weimar Constitution allow?", a: "The President could make laws without the Reichstag in an emergency", hint: "It gave one person a lot of power in a crisis.", hook: "Article 48: the President's emergency button.", choices: ["The President could make laws without the Reichstag in an emergency", "Women over 20 could vote", "Germany had to pay reparations", "Each state had its own government"]},
      {id: "w5", sub: "1.1", q: "Why was proportional representation a weakness of the Weimar Constitution?", a: "It led to many small parties and weak coalition governments", hint: "Parties got seats in line with their share of the votes.", hook: "Lots of little parties: nobody in charge.", choices: ["It led to many small parties and weak coalition governments", "It gave the Kaiser back his power", "It stopped women from voting", "It banned the Communist Party"]},
      {id: "w6", sub: "1.1", q: "Name one strength of the Weimar Constitution.", a: "All men and women over 20 could vote", hint: "Think about who could take part in elections.", hook: "Weimar gave the vote to women too.", choices: ["All men and women over 20 could vote", "Article 48", "The President was elected for life", "Only the army could choose the Chancellor"]},
      {id: "w7", sub: "1.2", q: "What was the 'stab in the back' theory?", a: "The belief that the army was betrayed by politicians, not beaten in battle", hint: "Some Germans blamed the 'November Criminals' who signed the armistice.", hook: "Stabbed in the back by the November Criminals.", choices: ["The belief that the army was betrayed by politicians, not beaten in battle", "A plan to attack France from behind", "Hitler's plan to take over Munich", "The name for the Night of the Long Knives"]},
      {id: "w8", sub: "1.2", q: "What did Article 231 of the Treaty of Versailles say?", a: "Germany had to accept the blame for the war", hint: "It is called the 'war guilt clause'.", hook: "231: Germany takes the blame for it all.", choices: ["Germany had to accept the blame for the war", "Germany's army was limited to 100,000 men", "Germany had to join the League of Nations", "Germany lost all its colonies"]},
      {id: "w9", sub: "1.2", q: "How large could the German army be under the Treaty of Versailles?", a: "100,000 men", hint: "No tanks, no air force and no conscription either.", hook: "One hundred thousand: a small army for a big country.", choices: ["100,000 men", "1 million men", "500,000 men", "10,000 men"], visual: {kind: "table", headers: ["Treaty term", "What it meant"], rows: [["Blame", "Article 231: Germany accepted the blame for the war"], ["Army", "Limited to 100,000 men. No tanks, no air force"], ["Money", "Reparations of £6,600 million (set in 1921)"], ["Land", "Lost about 13% of its land and all its colonies"]]}},
      {id: "w10", sub: "1.2", q: "How much did Germany have to pay in reparations (set in 1921)?", a: "£6,600 million", hint: "It was 132 billion gold marks.", hook: "Six thousand six hundred million: a huge bill.", choices: ["£6,600 million", "£50 million", "£2,000 million", "£100 million"]},
      {id: "w11", sub: "1.2", q: "Who were the Spartacists?", a: "Communists who tried to take over Berlin in January 1919", hint: "They were led by Rosa Luxemburg and Karl Liebknecht.", hook: "Spartacists: a challenge from the Left.", choices: ["Communists who tried to take over Berlin in January 1919", "Ex-soldiers who supported the Kaiser", "Nazis who attacked a beer hall in Munich", "French soldiers who occupied the Ruhr"]},
      {id: "w12", sub: "1.2", q: "Who were the Freikorps?", a: "Ex-soldiers who were against communism", hint: "The government used them to crush the Spartacists.", hook: "Freikorps: former soldiers, Right wing, free to fight.", choices: ["Ex-soldiers who were against communism", "Communist workers in Berlin", "The Nazi Party's youth group", "French soldiers in the Ruhr"]},
      {id: "w13", sub: "1.2", q: "Why did the Kapp Putsch of March 1920 fail?", a: "Workers in Berlin went on a general strike", hint: "The army refused to stop the putsch, so ordinary people did.", hook: "Kapp collapsed when the workers stopped.", choices: ["Workers in Berlin went on a general strike", "The French army stopped it", "Hitler refused to support it", "The Freikorps fought against it"]},
      {id: "w14", sub: "1.2", q: "Why did French and Belgian troops occupy the Ruhr in January 1923?", a: "Germany had failed to pay its reparations", hint: "The Ruhr was Germany's main industrial area.", hook: "No payment? France took the factories.", choices: ["Germany had failed to pay its reparations", "Germany had attacked France", "The Ruhr workers asked for help", "The League of Nations told them to"]},
      {id: "w15", sub: "1.2", q: "What caused hyperinflation in 1923?", a: "The government printed more and more money", hint: "It paid the striking Ruhr workers with new banknotes.", hook: "More money printed, less money worth.", choices: ["The government printed more and more money", "The Wall Street Crash", "The Dawes Plan", "Too many people saved their money"], visual: {kind: "steps", steps: ["Germany could not pay reparations", "France and Belgium occupied the Ruhr", "Ruhr workers went on strike (passive resistance)", "The government printed money to pay the strikers", "Money became worthless: hyperinflation"]}},
      {id: "w16", sub: "1.2", q: "Who was hit hardest by hyperinflation?", a: "People with savings and people on fixed incomes", hint: "Think about money that was already in the bank.", hook: "Savers lost everything; borrowers gained.", choices: ["People with savings and people on fixed incomes", "People who owed money", "Farmers who grew food", "Rich industrialists"]},
      {id: "w17", sub: "1.3", q: "What was the Rentenmark?", a: "A new, temporary currency introduced in November 1923", hint: "Stresemann brought it in to end hyperinflation.", hook: "Rentenmark: a fresh start for German money.", choices: ["A new, temporary currency introduced in November 1923", "A loan from America", "A tax on Jewish businesses", "A reward for mothers"]},
      {id: "w18", sub: "1.3", q: "What did the Dawes Plan (1924) do?", a: "Made reparations payments smaller and gave Germany American loans", hint: "It was named after an American banker, Charles Dawes.", hook: "Dawes: smaller payments, American dollars.", choices: ["Made reparations payments smaller and gave Germany American loans", "Cancelled reparations completely", "Let France keep the Ruhr", "Made Germany join the League of Nations"]},
      {id: "w19", sub: "1.3", q: "What did the Young Plan (1929) do?", a: "Cut the total reparations bill to £2,000 million, with 59 years to pay", hint: "It came five years after the Dawes Plan.", hook: "Young Plan: a smaller bill and a long time to pay.", choices: ["Cut the total reparations bill to £2,000 million, with 59 years to pay", "Gave Germany its colonies back", "Raised reparations to £10,000 million", "Ended the occupation of the Ruhr in one day"]},
      {id: "w20", sub: "1.3", q: "What did Germany agree in the Locarno Pact (1925)?", a: "To accept its western borders with France and Belgium", hint: "It made other countries trust Germany more.", hook: "Locarno: Germany locked in its western borders.", choices: ["To accept its western borders with France and Belgium", "To pay all reparations at once", "To give up the Rhineland", "To build up its army again"]},
      {id: "w21", sub: "1.3", q: "When did Germany join the League of Nations?", a: "1926", hint: "It was given a permanent seat on the Council.", hook: "1926: Germany was welcomed back.", choices: ["1926", "1919", "1933", "1923"]},
      {id: "w22", sub: "1.3", q: "Why was the recovery of 1924–29 risky?", a: "It depended on American loans that could be called back", hint: "What would happen if America needed its money back?", hook: "Built on borrowed dollars.", choices: ["It depended on American loans that could be called back", "It depended on Hitler staying in prison", "It depended on France paying Germany", "It depended on the Kaiser returning"]},
      {id: "w23", sub: "1.4", q: "Name one way the standard of living improved in 1924–29.", a: "Unemployment insurance was introduced (1927)", hint: "It helped people who lost their jobs.", hook: "1927: help for the unemployed.", choices: ["Unemployment insurance was introduced (1927)", "The Labour Front was set up", "Autobahns were built", "Strength Through Joy holidays began"]},
      {id: "w24", sub: "1.4", q: "Name one change for women in the Weimar years.", a: "Women got the vote and could be elected to the Reichstag", hint: "Think about politics.", hook: "Weimar women: votes, jobs and freedom.", choices: ["Women got the vote and could be elected to the Reichstag", "Women were banned from working", "Women were given the Mother's Cross", "Women had to join the League of German Maidens"]},
      {id: "w25", sub: "1.4", q: "What was the Bauhaus?", a: "A school of art, design and architecture set up in 1919", hint: "It was started by Walter Gropius.", hook: "Bauhaus: simple shapes, useful design.", choices: ["A school of art, design and architecture set up in 1919", "A Nazi youth camp", "A famous German film", "The Reichstag building"]},
      {id: "w26", sub: "1.4", q: "Name a famous German film from the Weimar years.", a: "Metropolis (1927)", hint: "It was made by Fritz Lang and showed a city of the future.", hook: "Metropolis: a city of the future on screen.", choices: ["Metropolis (1927)", "Triumph of the Will", "The Eternal Jew", "Olympia"]}
    ],
    keywords: [
      {term: "Abdicate", meaning: "When a king or emperor gives up the throne."},
      {term: "Armistice", meaning: "An agreement to stop fighting."},
      {term: "Republic", meaning: "A country with no king; leaders are elected."},
      {term: "Reichstag", meaning: "The German parliament."},
      {term: "Proportional representation", meaning: "Seats are shared out in line with votes."},
      {term: "Reparations", meaning: "Money paid for damage caused in a war."},
      {term: "Putsch", meaning: "An attempt to take power by force."},
      {term: "Hyperinflation", meaning: "Prices rise so fast that money becomes worthless."},
      {term: "Coalition", meaning: "A government made of several parties."}
    ],
    methods: [
      {name: "From war to republic, 1918–19", steps: ["Sailors mutiny at Kiel", "The Kaiser abdicates", "The armistice is signed", "The Spartacist Uprising", "The Treaty of Versailles is signed", "The Weimar Constitution is agreed"]},
      {name: "The crisis of 1923", steps: ["Germany fails to pay reparations", "France and Belgium occupy the Ruhr", "Ruhr workers go on strike", "The government prints money to pay them", "Hyperinflation: money becomes worthless", "Stresemann brings in the Rentenmark"]},
      {name: "The road to recovery, 1923–29", steps: ["The Rentenmark", "The Dawes Plan", "The Locarno Pact", "Germany joins the League of Nations", "The Young Plan"]}
    ]
  },
  {
    id: "kt2", num: 2, title: "Hitler's rise to power, 1919–33", short: "Hitler's rise",
    spec: [
      {n: "2.1", name: "Early development of the Nazi Party, 1920–22", points: ["Hitler's early career: joining the German Workers' Party and setting up the Nazi Party, 1919–20.", "The Twenty-Five Point Programme. The role of the SA."]},
      {n: "2.2", name: "The Munich Putsch and the Nazi Party, 1923–28", points: ["The reasons for, events and consequences of the Munich Putsch; Mein Kampf.", "Reasons for limited support for the Nazi Party, 1924–28. Party reorganisation, including the Bamberg Conference of 1926."]},
      {n: "2.3", name: "The growth in support for the Nazis, 1929–32", points: ["The growth of unemployment: its causes and impact. The growth of support for the Communist Party.", "Reasons for the growth in support for the Nazi Party, including the appeal of Hitler and the Nazis, the effects of propaganda and the work of the SA."]},
      {n: "2.4", name: "How Hitler became Chancellor, 1932–33", points: ["The Presidential and Reichstag elections of 1932; reasons for Hitler becoming Chancellor in 1933, including the roles of Hindenburg and von Papen."]}
    ],
    cards: [
      {id: "h1", sub: "2.1", q: "Which party did Hitler join in 1919?", a: "The German Workers' Party (DAP)", hint: "It was a small party in Munich led by Anton Drexler.", hook: "DAP first, Nazis next.", choices: ["The German Workers' Party (DAP)", "The Social Democratic Party (SPD)", "The Communist Party (KPD)", "The Centre Party"]},
      {id: "h2", sub: "2.1", q: "What was the Nazi Party's full name from 1920?", a: "The National Socialist German Workers' Party (NSDAP)", hint: "'Nazi' is short for the first word.", hook: "NAtional soZIalist: NAZI.", choices: ["The National Socialist German Workers' Party (NSDAP)", "The German National People's Party", "The Social Democratic Party", "The Freikorps"]},
      {id: "h3", sub: "2.1", q: "Name one aim in the Twenty-Five Point Programme (1920).", a: "To get rid of the Treaty of Versailles", hint: "Many Germans hated the peace treaty.", hook: "25 points: tear up Versailles.", choices: ["To get rid of the Treaty of Versailles", "To bring back the Kaiser", "To join the League of Nations", "To give Jewish people equal rights"]},
      {id: "h4", sub: "2.1", q: "What was the SA?", a: "The Nazi Party's stormtroopers (the 'brownshirts')", hint: "Set up in 1921. They protected Nazi meetings and attacked opponents.", hook: "SA: Storm Army in brown shirts.", choices: ["The Nazi Party's stormtroopers (the 'brownshirts')", "Hitler's secret police", "The German army", "A Nazi youth group for girls"]},
      {id: "h5", sub: "2.2", q: "When was the Munich Putsch?", a: "8–9 November 1923", hint: "The same year as hyperinflation.", hook: "1923: a bad year for money and a putsch in Munich.", choices: ["8–9 November 1923", "March 1920", "January 1933", "June 1934"]},
      {id: "h6", sub: "2.2", q: "Name one reason why Hitler tried the Munich Putsch in 1923.", a: "Hyperinflation and the Ruhr made the government very unpopular", hint: "1923 was a year of crisis.", hook: "Crisis year: Hitler saw his chance.", choices: ["Hyperinflation and the Ruhr made the government very unpopular", "The Nazis had just won an election", "The Wall Street Crash", "Hindenburg asked him to"]},
      {id: "h7", sub: "2.2", q: "What happened to Hitler after the Munich Putsch?", a: "He was put on trial and sent to prison, where he wrote Mein Kampf", hint: "He was sentenced to 5 years but served about 9 months.", hook: "Prison gave him time to write.", choices: ["He was put on trial and sent to prison, where he wrote Mein Kampf", "He was made Chancellor", "He escaped to Austria", "He was executed"]},
      {id: "h8", sub: "2.2", q: "What is Mein Kampf?", a: "Hitler's book setting out his ideas ('My Struggle')", hint: "He wrote it in Landsberg prison.", hook: "Mein Kampf: My Struggle, written in prison.", choices: ["Hitler's book setting out his ideas ('My Struggle')", "The Nazi Party song", "A Nazi newspaper", "The law that made Hitler Führer"]},
      {id: "h9", sub: "2.2", q: "Why did the Nazis have little support in 1924–28?", a: "Germany was recovering under Stresemann, so fewer people wanted extreme parties", hint: "These were the 'Golden Years'.", hook: "Good times, few Nazi votes.", choices: ["Germany was recovering under Stresemann, so fewer people wanted extreme parties", "The Nazis were banned for ever", "Hitler was dead", "The SA had been destroyed"]},
      {id: "h10", sub: "2.2", q: "How many seats did the Nazis win in the 1928 Reichstag election?", a: "12", hint: "It was a very small number.", hook: "1928: just twelve.", choices: ["12", "107", "230", "288"], visual: {kind: "table", headers: ["Election", "Nazi seats"], rows: [["May 1928", "12"], ["September 1930", "107"], ["July 1932", "230"], ["November 1932", "196"], ["March 1933", "288"]]}},
      {id: "h11", sub: "2.2", q: "What did the Bamberg Conference (1926) do?", a: "Made Hitler the unchallenged leader of the Nazi Party", hint: "It ended an argument about the party's aims.", hook: "Bamberg: Hitler's word becomes the rule.", choices: ["Made Hitler the unchallenged leader of the Nazi Party", "Let Hitler out of prison", "Made Hitler Chancellor", "Banned the SA"]},
      {id: "h12", sub: "2.3", q: "What event in October 1929 caused the Depression?", a: "The Wall Street Crash in America", hint: "America called back its loans to Germany.", hook: "Crash in America, crash in Germany.", choices: ["The Wall Street Crash in America", "The Munich Putsch", "The Reichstag Fire", "The Young Plan"]},
      {id: "h13", sub: "2.3", q: "About how many Germans were unemployed in 1932?", a: "About 6 million", hint: "It was about one in three workers.", hook: "Six million out of work.", choices: ["About 6 million", "About 600,000", "About 1 million", "About 20 million"]},
      {id: "h14", sub: "2.3", q: "Which other extreme party grew during the Depression?", a: "The Communist Party (KPD)", hint: "Many workers voted for it. Its growth scared the middle classes.", hook: "Communists grew, and fear of them grew too.", choices: ["The Communist Party (KPD)", "The Social Democratic Party (SPD)", "The Centre Party", "The Freikorps"]},
      {id: "h15", sub: "2.3", q: "Give one reason why the Nazis appealed to voters in 1929–32.", a: "They promised work and bread, and a strong Germany", hint: "Think about what people needed in the Depression.", hook: "Work and bread: 'Arbeit und Brot'.", choices: ["They promised work and bread, and a strong Germany", "They promised to pay more reparations", "They promised to bring back the Kaiser", "They promised to join the League of Nations"]},
      {id: "h16", sub: "2.3", q: "Who ran Nazi propaganda?", a: "Joseph Goebbels", hint: "He later became Minister of Propaganda.", hook: "Goebbels: the voice of the Nazis.", choices: ["Joseph Goebbels", "Ernst Röhm", "Heinrich Himmler", "Franz von Papen"]},
      {id: "h17", sub: "2.4", q: "Who won the Presidential election of 1932?", a: "Paul von Hindenburg", hint: "Hitler came second with about 37% of the vote.", hook: "The old general beat Hitler in 1932.", choices: ["Paul von Hindenburg", "Adolf Hitler", "Ernst Thälmann", "Franz von Papen"]},
      {id: "h18", sub: "2.4", q: "What happened in the July 1932 Reichstag election?", a: "The Nazis became the largest party, with 230 seats", hint: "They did not have a majority, but they had the most seats.", hook: "July 1932: Nazis on top.", choices: ["The Nazis became the largest party, with 230 seats", "The Communists won a majority", "The Nazis lost all their seats", "Hitler became President"]},
      {id: "h19", sub: "2.4", q: "Why did von Papen persuade Hindenburg to make Hitler Chancellor?", a: "He thought he could control Hitler as Vice-Chancellor", hint: "Papen wanted power back for himself.", hook: "Papen thought he held the strings.", choices: ["He thought he could control Hitler as Vice-Chancellor", "He wanted to retire", "He was a Nazi Party member", "The army ordered him to"]},
      {id: "h20", sub: "2.4", q: "On what date did Hitler become Chancellor?", a: "30 January 1933", hint: "It was the start of the year after the two 1932 elections.", hook: "End of January 1933: Chancellor Hitler.", choices: ["30 January 1933", "9 November 1923", "2 August 1934", "27 February 1933"]}
    ],
    keywords: [
      {term: "NSDAP", meaning: "The Nazi Party's initials in German."},
      {term: "SA", meaning: "Nazi stormtroopers, also called brownshirts."},
      {term: "Mein Kampf", meaning: "Hitler's book, 'My Struggle'."},
      {term: "Depression", meaning: "A time of very high unemployment and poverty."},
      {term: "Propaganda", meaning: "Information used to persuade people to believe something."},
      {term: "Chancellor", meaning: "The head of the German government."},
      {term: "President", meaning: "The head of state. Hindenburg from 1925."},
      {term: "Extremist", meaning: "A person or party with very strong views."}
    ],
    methods: [
      {name: "The Munich Putsch, 1923", steps: ["Hitler and the SA burst into a beer hall in Munich", "Hitler announces a national revolution", "Bavarian leaders escape and call the police", "Hitler and Ludendorff march through Munich", "Police open fire and 16 Nazis are killed", "Hitler is arrested and put on trial", "In prison, Hitler writes Mein Kampf"]},
      {name: "How Hitler became Chancellor, 1929–33", steps: ["The Wall Street Crash", "Unemployment rises to about 6 million", "The Nazis win 107 seats", "The Nazis become the largest party (July 1932)", "Von Papen persuades Hindenburg", "Hitler becomes Chancellor"]}
    ]
  },
  {
    id: "kt3", num: 3, title: "Nazi control and dictatorship, 1933–39", short: "Nazi control",
    spec: [
      {n: "3.1", name: "The creation of a dictatorship, 1933–34", points: ["The Reichstag Fire. The Enabling Act and the banning of other parties and trade unions.", "The threat from Röhm and the SA, the Night of the Long Knives. The death of Hindenburg, Hitler becomes Führer, the army oath of allegiance."]},
      {n: "3.2", name: "The police state", points: ["The role of the Gestapo, the SS and concentration camps.", "Nazi control of the legal system."]},
      {n: "3.3", name: "Controlling and influencing attitudes", points: ["Goebbels and the Ministry of Propaganda: censorship, Nazi use of media, rallies and sport, including the Berlin Olympics (1936).", "Nazi control of culture and the arts, including art, architecture, literature and film.", "Nazi attempts to control the Catholic and Protestant Churches: the Concordat and the Reich Church."]},
      {n: "3.4", name: "Opposition, resistance and conformity", points: ["The extent of support for the Nazi regime.", "Opposition from the Churches, including the role of Pastor Niemöller.", "Opposition from the young, including the Swing Youth and the Edelweiss Pirates."]}
    ],
    cards: [
      {id: "c1", sub: "3.1", q: "When was the Reichstag Fire?", a: "27 February 1933", hint: "Less than a month after Hitler became Chancellor.", hook: "February 1933: the parliament burned.", choices: ["27 February 1933", "30 January 1933", "23 March 1933", "30 June 1934"]},
      {id: "c2", sub: "3.1", q: "How did Hitler use the Reichstag Fire?", a: "He blamed the Communists and got an emergency decree to arrest them", hint: "A Dutch communist, Marinus van der Lubbe, was arrested at the scene.", hook: "Fire blamed on the Reds; Reds locked up.", choices: ["He blamed the Communists and got an emergency decree to arrest them", "He resigned as Chancellor", "He blamed the SA and arrested Röhm", "He called for peace with France"]},
      {id: "c3", sub: "3.1", q: "What did the Enabling Act (March 1933) allow?", a: "Hitler could make laws without the Reichstag for four years", hint: "It was the legal basis of the dictatorship.", hook: "Enabling Act: enabled Hitler to rule alone.", choices: ["Hitler could make laws without the Reichstag for four years", "Women could vote", "Germany could rearm", "Jewish people lost their citizenship"]},
      {id: "c4", sub: "3.1", q: "What replaced the trade unions after they were banned in May 1933?", a: "The German Labour Front (DAF)", hint: "It was led by Robert Ley.", hook: "Unions out, Labour Front in.", choices: ["The German Labour Front (DAF)", "The Gestapo", "Strength Through Joy", "The Reich Church"]},
      {id: "c5", sub: "3.1", q: "By July 1933, what kind of state was Germany?", a: "A one-party state: all other parties were banned", hint: "Only one party was allowed to exist.", hook: "One party, one leader.", choices: ["A one-party state: all other parties were banned", "A democracy with many parties", "A monarchy with a Kaiser", "A communist state"]},
      {id: "c6", sub: "3.1", q: "Why did Hitler see Ernst Röhm as a threat?", a: "Röhm led 3 million SA men and wanted to control the army", hint: "The army generals did not trust the SA.", hook: "Röhm's SA was bigger than the army.", choices: ["Röhm led 3 million SA men and wanted to control the army", "Röhm was a communist", "Röhm wanted to bring back the Kaiser", "Röhm had joined the Swing Youth"]},
      {id: "c7", sub: "3.1", q: "What was the Night of the Long Knives?", a: "The SS killed Röhm and other SA leaders (30 June 1934)", hint: "Hitler also had other enemies killed, such as von Schleicher.", hook: "Long knives, short night: the SA was cut down.", choices: ["The SS killed Röhm and other SA leaders (30 June 1934)", "Attacks on Jewish shops in 1938", "The burning of the Reichstag", "The Munich Putsch"]},
      {id: "c8", sub: "3.1", q: "What happened after Hindenburg died in August 1934?", a: "Hitler became Führer, and the army swore an oath of loyalty to him", hint: "He joined the jobs of Chancellor and President together.", hook: "Hindenburg gone: Hitler is Führer.", choices: ["Hitler became Führer, and the army swore an oath of loyalty to him", "Von Papen became President", "New elections were held", "The Kaiser returned"]},
      {id: "c9", sub: "3.2", q: "What was the Gestapo?", a: "The Nazi secret police", hint: "It used informers and could arrest people without trial.", hook: "Gestapo: GEheime STAats POlizei, secret state police.", choices: ["The Nazi secret police", "The Nazi youth group", "The German army", "A Nazi propaganda film"]},
      {id: "c10", sub: "3.2", q: "Who led the SS?", a: "Heinrich Himmler", hint: "From 1936 he controlled all the police in Germany too.", hook: "Himmler: head of the SS.", choices: ["Heinrich Himmler", "Joseph Goebbels", "Ernst Röhm", "Robert Ley"]},
      {id: "c11", sub: "3.2", q: "What was the first concentration camp, opened in March 1933?", a: "Dachau", hint: "It was near Munich.", hook: "Dachau: the first camp, near Munich.", choices: ["Dachau", "Auschwitz", "Landsberg", "Nuremberg"]},
      {id: "c12", sub: "3.2", q: "How did the Nazis control the legal system?", a: "Judges had to be loyal to the Nazis, and a People's Court tried treason cases", hint: "The People's Court was set up in 1934.", hook: "Nazi judges, Nazi courts, Nazi verdicts.", choices: ["Judges had to be loyal to the Nazis, and a People's Court tried treason cases", "They let judges stay independent", "They closed all the courts", "They let the League of Nations run the courts"]},
      {id: "c13", sub: "3.3", q: "What did Goebbels' Ministry of Propaganda do?", a: "Controlled the media and spread Nazi ideas", hint: "Newspapers, radio, films and books.", hook: "Goebbels controlled what Germans saw and heard.", choices: ["Controlled the media and spread Nazi ideas", "Ran the concentration camps", "Organised the army", "Built the autobahns"]},
      {id: "c14", sub: "3.3", q: "Why did the Nazis sell cheap radios (the 'People's Receiver')?", a: "So that Nazi messages and Hitler's speeches reached every home", hint: "The radios could not easily pick up foreign stations.", hook: "A cheap radio for every home: Nazi voices in every room.", choices: ["So that Nazi messages and Hitler's speeches reached every home", "So people could listen to jazz", "So people could hear the BBC", "To raise money for the army"]},
      {id: "c15", sub: "3.3", q: "Why were the 1936 Berlin Olympics useful propaganda?", a: "They showed the world a strong, organised Germany", hint: "Germany won the most medals.", hook: "1936: Germany showed off to the world.", choices: ["They showed the world a strong, organised Germany", "They were held in secret", "Germany came last", "They were cancelled"]},
      {id: "c16", sub: "3.3", q: "What happened at the book burnings of May 1933?", a: "Books by Jewish and anti-Nazi writers were burned", hint: "Students burned the books in public.", hook: "Wrong ideas went on the bonfire.", choices: ["Books by Jewish and anti-Nazi writers were burned", "Old newspapers were recycled", "The Reichstag burned down", "Mein Kampf was banned"]},
      {id: "c17", sub: "3.3", q: "What was the Concordat (July 1933)?", a: "An agreement with the Pope: the Nazis would leave the Catholic Church alone if it stayed out of politics", hint: "Hitler soon broke the agreement.", hook: "Concordat: a deal with the Pope that Hitler broke.", choices: ["An agreement with the Pope: the Nazis would leave the Catholic Church alone if it stayed out of politics", "The law that banned trade unions", "A treaty with France", "The Protestant Reich Church"]},
      {id: "c18", sub: "3.3", q: "What was the Reich Church?", a: "A Nazi-controlled Protestant church led by Reich Bishop Ludwig Müller", hint: "It joined Protestant churches together under Nazi control.", hook: "Reich Church: Protestants under a Nazi bishop.", choices: ["A Nazi-controlled Protestant church led by Reich Bishop Ludwig Müller", "The Catholic Church in Rome", "A church set up by Niemöller", "The church burned on Kristallnacht"]},
      {id: "c19", sub: "3.4", q: "Who was Pastor Martin Niemöller?", a: "A Protestant pastor who set up the Confessing Church and opposed Nazi control", hint: "He was sent to a concentration camp.", hook: "Niemöller said no, and paid for it.", choices: ["A Protestant pastor who set up the Confessing Church and opposed Nazi control", "The leader of the Reich Church", "A Catholic bishop who supported Hitler", "The leader of the Hitler Youth"]},
      {id: "c20", sub: "3.4", q: "Who were the Swing Youth?", a: "Mostly middle-class young people who loved American jazz and swing music", hint: "The Nazis disapproved of their music and dancing.", hook: "Swing Youth: dancing against the Nazis.", choices: ["Mostly middle-class young people who loved American jazz and swing music", "Working-class gangs who fought the Hitler Youth", "Members of the League of German Maidens", "Soldiers in the SA"]},
      {id: "c21", sub: "3.4", q: "Who were the Edelweiss Pirates?", a: "Working-class young people who avoided the Hitler Youth and sometimes attacked its members", hint: "Their badge was a white flower.", hook: "Edelweiss Pirates: the flower that fought back.", choices: ["Working-class young people who avoided the Hitler Youth and sometimes attacked its members", "Middle-class jazz fans", "A Nazi navy unit", "Hitler's bodyguards"]},
      {id: "c22", sub: "3.4", q: "Give one reason why most Germans did not oppose the Nazis.", a: "Fear of the Gestapo and the camps", hint: "Also: jobs came back, and propaganda was everywhere.", hook: "Fear, jobs and propaganda kept people quiet.", choices: ["Fear of the Gestapo and the camps", "The Nazis let people vote them out", "There were no Nazi laws", "Opposition parties were very strong"]}
    ],
    keywords: [
      {term: "Dictatorship", meaning: "Rule by one person or party with total power."},
      {term: "Enabling Act", meaning: "Law letting Hitler make laws on his own."},
      {term: "Führer", meaning: "Leader. Hitler's title from August 1934."},
      {term: "Gestapo", meaning: "The Nazi secret police."},
      {term: "SS", meaning: "Elite Nazi force led by Himmler."},
      {term: "Concentration camp", meaning: "A prison camp for opponents, without trial."},
      {term: "Censorship", meaning: "Stopping people seeing or saying certain things."},
      {term: "Concordat", meaning: "The 1933 agreement with the Catholic Church."},
      {term: "Conformity", meaning: "Going along with the rules and not protesting."}
    ],
    methods: [
      {name: "Creating a dictatorship, 1933–34", steps: ["Hitler becomes Chancellor", "The Reichstag Fire", "The Enabling Act", "Trade unions are banned", "Other political parties are banned", "The Night of the Long Knives", "Hindenburg dies and Hitler becomes Führer"]},
      {name: "The Nazis and the Churches", steps: ["The Concordat with the Pope (1933)", "Ludwig Müller becomes Reich Bishop (1933)", "Niemöller helps set up the Confessing Church (1934)", "Niemöller is arrested (1937)"]}
    ]
  },
  {
    id: "kt4", num: 4, title: "Life in Nazi Germany, 1933–39", short: "Life in Nazi Germany",
    spec: [
      {n: "4.1", name: "Nazi policies towards women", points: ["Nazi views on women and the family.", "Nazi policies towards women, including marriage and family, employment and appearance."]},
      {n: "4.2", name: "Nazi policies towards the young", points: ["Nazi aims and policies towards the young. The Hitler Youth and the League of German Maidens.", "Nazi control of the young through education, including the curriculum and teachers."]},
      {n: "4.3", name: "Employment and living standards", points: ["Nazi policies to reduce unemployment: labour service, autobahns, rearmament and invisible unemployment.", "Changes in the standard of living, especially of German workers. The Labour Front, Strength Through Joy, Beauty of Labour."]},
      {n: "4.4", name: "The persecution of minorities", points: ["Nazi racial beliefs and policies and the treatment of minority groups: Slavs, Roma and Sinti, homosexuals, and people with disabilities.", "The persecution of Jewish people, including the boycott of Jewish shops and businesses (1933), the Nuremberg Laws and 'Kristallnacht'."]}
    ],
    cards: [
      {id: "l1", sub: "4.1", q: "What were the 'three Ks' for women?", a: "Kinder, Küche, Kirche (children, kitchen, church)", hint: "Three German words that all start with K.", hook: "Kids, Kitchen, Kirche: the three Ks.", choices: ["Kinder, Küche, Kirche (children, kitchen, church)", "Kaiser, Kampf, Krieg (emperor, struggle, war)", "Kunst, Kino, Kultur (art, cinema, culture)", "Kraft, Kampf, Kameraden (strength, struggle, comrades)"]},
      {id: "l2", sub: "4.1", q: "What was the Law for the Encouragement of Marriage (1933)?", a: "Couples got a loan of 1,000 marks, and kept a quarter for each child", hint: "Four children meant the whole loan was kept.", hook: "Have a child, keep a quarter of the loan.", choices: ["Couples got a loan of 1,000 marks, and kept a quarter for each child", "Women had to marry by 18", "Married women got the vote", "Couples paid a tax for having children"]},
      {id: "l3", sub: "4.1", q: "What was the Mother's Cross?", a: "A medal for mothers with many children", hint: "Bronze, silver or gold, depending on the number of children.", hook: "More children, shinier cross.", choices: ["A medal for mothers with many children", "A Nazi church", "A badge for the Hitler Youth", "An award for women doctors"], visual: {kind: "table", headers: ["Children", "Mother's Cross"], rows: [["4 or 5", "Bronze"], ["6 or 7", "Silver"], ["8 or more", "Gold"]]}},
      {id: "l4", sub: "4.1", q: "How did the Nazis want women to look?", a: "Natural: no make-up, no trousers, hair in a bun or plaits", hint: "Smoking and dieting were also discouraged.", hook: "Plain and healthy: the Nazi ideal.", choices: ["Natural: no make-up, no trousers, hair in a bun or plaits", "Fashionable, with short hair", "In uniform at all times", "Like American film stars"]},
      {id: "l5", sub: "4.1", q: "What happened to many women doctors, lawyers and civil servants after 1933?", a: "They lost their jobs", hint: "From 1936, women could not be judges.", hook: "Back to the home: women pushed out of top jobs.", choices: ["They lost their jobs", "They were promoted", "They were paid more", "They were made Reichstag members"]},
      {id: "l6", sub: "4.2", q: "What was the Hitler Youth for boys aged 14–18 meant to do?", a: "Train them to be fit, loyal soldiers for Germany", hint: "Marching, camping, sport and Nazi ideas.", hook: "Hitler Youth: fit, loyal, ready to fight.", choices: ["Train them to be fit, loyal soldiers for Germany", "Teach them to play jazz", "Train them as teachers", "Prepare them for university"]},
      {id: "l7", sub: "4.2", q: "What was the League of German Maidens?", a: "The Nazi youth group for girls", hint: "It trained girls to be good wives and mothers.", hook: "Maidens: girls trained for home and family.", choices: ["The Nazi youth group for girls", "A group of women doctors", "The Nazi women's political party", "A Swing Youth club"]},
      {id: "l8", sub: "4.2", q: "When did joining the Hitler Youth become compulsory?", a: "1939 (from 1936 it was the only youth group allowed)", hint: "Two laws: one in 1936 and one in 1939.", hook: "1936 the only one; 1939 the must.", choices: ["1939 (from 1936 it was the only youth group allowed)", "1926", "1933", "1945"]},
      {id: "l9", sub: "4.2", q: "How did the Nazis control teachers?", a: "Teachers had to join the Nazi Teachers' League and teach Nazi ideas", hint: "Teachers who did not support the Nazis could be sacked.", hook: "Nazi teachers taught Nazi lessons.", choices: ["Teachers had to join the Nazi Teachers' League and teach Nazi ideas", "Teachers were given free choice", "Teachers were all women", "Schools were closed"]},
      {id: "l10", sub: "4.2", q: "Name one change to the school curriculum under the Nazis.", a: "More PE, plus 'race studies' and Nazi history", hint: "PE took up about 15% of the timetable.", hook: "Fit bodies, Nazi minds.", choices: ["More PE, plus 'race studies' and Nazi history", "More religious education", "More foreign languages", "No history lessons"]},
      {id: "l11", sub: "4.3", q: "What was the National Labour Service (RAD)?", a: "Young men did six months of work, such as building roads", hint: "From 1935 it was compulsory for men aged 18–25.", hook: "Labour Service: a spade instead of a dole queue.", choices: ["Young men did six months of work, such as building roads", "A trade union", "A holiday scheme", "The secret police"]},
      {id: "l12", sub: "4.3", q: "What were the autobahns?", a: "New motorways that created many jobs", hint: "Public works project to cut unemployment.", hook: "Autobahns: roads to work.", choices: ["New motorways that created many jobs", "Nazi youth camps", "Railway lines for the army", "Concentration camps"]},
      {id: "l13", sub: "4.3", q: "How did rearmament reduce unemployment?", a: "Conscription and making weapons created jobs", hint: "Conscription began in 1935.", hook: "Guns, tanks and uniforms meant jobs.", choices: ["Conscription and making weapons created jobs", "It sent workers abroad", "It closed factories", "It paid people not to work"]},
      {id: "l14", sub: "4.3", q: "What was 'invisible unemployment'?", a: "Groups such as women and Jewish people were not counted as unemployed", hint: "It made the figures look better than they were.", hook: "Not counted means not seen.", choices: ["Groups such as women and Jewish people were not counted as unemployed", "Workers who worked at night", "Secret jobs in the army", "People who emigrated"]},
      {id: "l15", sub: "4.3", q: "What was Strength Through Joy (KdF)?", a: "A Nazi scheme giving workers cheap holidays, trips and leisure", hint: "It was part of the Labour Front.", hook: "Strength Through Joy: holidays to keep workers happy.", choices: ["A Nazi scheme giving workers cheap holidays, trips and leisure", "A training camp for the SS", "A Nazi exercise video", "A law for mothers"]},
      {id: "l16", sub: "4.3", q: "What was Beauty of Labour?", a: "A scheme to improve workplaces, such as canteens and washrooms", hint: "It aimed to make factories nicer places to work.", hook: "Beauty of Labour: nicer factories, happier workers.", choices: ["A scheme to improve workplaces, such as canteens and washrooms", "A beauty contest for women", "Art in public buildings", "A Nazi magazine"]},
      {id: "l17", sub: "4.3", q: "Give one way that life got worse for German workers.", a: "Longer working hours and no right to strike", hint: "Trade unions had been banned.", hook: "More work, no unions.", choices: ["Longer working hours and no right to strike", "Unemployment rose to 6 million", "Wages doubled", "Holidays were banned"]},
      {id: "l18", sub: "4.4", q: "Name two minority groups persecuted by the Nazis, apart from Jewish people.", a: "Roma and Sinti, and people with disabilities", hint: "Slavs and homosexuals were also persecuted.", hook: "Not 'Aryan' enough meant persecuted.", choices: ["Roma and Sinti, and people with disabilities", "Farmers and factory workers", "Soldiers and sailors", "Teachers and doctors"]},
      {id: "l19", sub: "4.4", q: "When was the boycott of Jewish shops and businesses?", a: "1 April 1933", hint: "SA men stood outside shops telling people not to go in.", hook: "April 1933: the first nationwide attack.", choices: ["1 April 1933", "9 November 1938", "15 September 1935", "30 January 1933"]},
      {id: "l20", sub: "4.4", q: "What did the Nuremberg Laws (1935) do?", a: "Took away Jewish people's citizenship and banned marriage between Jews and non-Jews", hint: "They were announced at a Nazi rally.", hook: "Nuremberg 1935: citizenship taken away.", choices: ["Took away Jewish people's citizenship and banned marriage between Jews and non-Jews", "Gave Jewish people the vote", "Set up the Hitler Youth", "Banned trade unions"]},
      {id: "l21", sub: "4.4", q: "What was Kristallnacht (9–10 November 1938)?", a: "Nazi attacks on Jewish shops, homes and synagogues across Germany", hint: "'Night of Broken Glass'. About 30,000 Jewish men were sent to camps.", hook: "Broken glass: the night of terror.", choices: ["Nazi attacks on Jewish shops, homes and synagogues across Germany", "The Night of the Long Knives", "The Reichstag Fire", "The Munich Putsch"]}
    ],
    keywords: [
      {term: "Aryan", meaning: "Nazi name for a so-called 'master race'."},
      {term: "Persecution", meaning: "Treating a group cruelly because of who they are."},
      {term: "Boycott", meaning: "Refusing to buy from or deal with someone."},
      {term: "Kristallnacht", meaning: "'Night of Broken Glass', November 1938."},
      {term: "Rearmament", meaning: "Building up armed forces and weapons again."},
      {term: "Conscription", meaning: "Forcing men to join the armed forces."},
      {term: "Curriculum", meaning: "The subjects taught in school."},
      {term: "Labour Front", meaning: "Nazi organisation that replaced trade unions."}
    ],
    methods: [
      {name: "Persecution of Jewish people, 1933–38", steps: ["Boycott of Jewish shops and businesses (April 1933)", "Jewish people banned from government jobs (April 1933)", "The Nuremberg Laws (1935)", "Kristallnacht (November 1938)"]},
      {name: "Cutting unemployment", steps: ["Hitler becomes Chancellor: about 6 million unemployed", "Public works such as the autobahns begin", "Conscription begins (March 1935)", "The National Labour Service becomes compulsory (June 1935)", "Unemployment falls to about 300,000 (1939)"]}
    ]
  }
];

/* For the Who's who game: name and what they did. */
const PEOPLE = [
  {name: "Friedrich Ebert", role: "First President of the Weimar Republic, 1919–25"},
  {name: "Gustav Stresemann", role: "Chancellor in 1923, then Foreign Minister. Led the recovery"},
  {name: "Rosa Luxemburg", role: "A leader of the Spartacist Uprising, 1919"},
  {name: "Wolfgang Kapp", role: "Led a Right-wing putsch in Berlin in 1920"},
  {name: "Paul von Hindenburg", role: "President from 1925. Appointed Hitler Chancellor"},
  {name: "Anton Drexler", role: "Founded the German Workers' Party, which Hitler joined"},
  {name: "Ernst Röhm", role: "Leader of the SA. Killed in the Night of the Long Knives"},
  {name: "Erich Ludendorff", role: "First World War general who joined the Munich Putsch"},
  {name: "Franz von Papen", role: "Chancellor in 1932. Persuaded Hindenburg to appoint Hitler"},
  {name: "Kurt von Schleicher", role: "Last Chancellor before Hitler. Killed in 1934"},
  {name: "Joseph Goebbels", role: "Minister of Propaganda"},
  {name: "Heinrich Himmler", role: "Leader of the SS, and of all police from 1936"},
  {name: "Marinus van der Lubbe", role: "Dutch communist arrested for the Reichstag Fire"},
  {name: "Martin Niemöller", role: "Protestant pastor who helped set up the Confessing Church"},
  {name: "Ludwig Müller", role: "Reich Bishop of the Nazi-controlled Reich Church"},
  {name: "Robert Ley", role: "Leader of the German Labour Front"},
  {name: "Baldur von Schirach", role: "Leader of the Hitler Youth"},
  {name: "Leni Riefenstahl", role: "Film-maker of 'Triumph of the Will' (1935)"},
  {name: "Albert Speer", role: "Hitler's architect"}
];

/* For the Timeline game. 'when' sorts the events; 'date' is what Sophie sees. */
const EVENTS = [
  {when: "1918-11-09", date: "9 November 1918", text: "The Kaiser abdicates", kt: 1},
  {when: "1918-11-11", date: "11 November 1918", text: "The armistice is signed", kt: 1},
  {when: "1919-01-05", date: "January 1919", text: "The Spartacist Uprising", kt: 1},
  {when: "1919-06-28", date: "28 June 1919", text: "The Treaty of Versailles is signed", kt: 1},
  {when: "1919-08-11", date: "August 1919", text: "The Weimar Constitution is agreed", kt: 1},
  {when: "1919-09-12", date: "September 1919", text: "Hitler joins the German Workers' Party", kt: 2},
  {when: "1920-02-24", date: "February 1920", text: "The Twenty-Five Point Programme", kt: 2},
  {when: "1920-03-13", date: "March 1920", text: "The Kapp Putsch", kt: 1},
  {when: "1921-08-01", date: "1921", text: "The SA is set up", kt: 2},
  {when: "1923-01-11", date: "January 1923", text: "France and Belgium occupy the Ruhr", kt: 1},
  {when: "1923-11-08", date: "8–9 November 1923", text: "The Munich Putsch", kt: 2},
  {when: "1923-11-15", date: "November 1923", text: "The Rentenmark is introduced", kt: 1},
  {when: "1924-08-16", date: "1924", text: "The Dawes Plan", kt: 1},
  {when: "1925-12-01", date: "1925", text: "The Locarno Pact", kt: 1},
  {when: "1926-02-14", date: "February 1926", text: "The Bamberg Conference", kt: 2},
  {when: "1926-09-08", date: "September 1926", text: "Germany joins the League of Nations", kt: 1},
  {when: "1929-06-07", date: "1929", text: "The Young Plan", kt: 1},
  {when: "1929-10-24", date: "October 1929", text: "The Wall Street Crash", kt: 2},
  {when: "1932-04-10", date: "April 1932", text: "Hindenburg beats Hitler in the Presidential election", kt: 2},
  {when: "1932-07-31", date: "July 1932", text: "The Nazis become the largest party in the Reichstag", kt: 2},
  {when: "1933-01-30", date: "30 January 1933", text: "Hitler becomes Chancellor", kt: 2},
  {when: "1933-02-27", date: "27 February 1933", text: "The Reichstag Fire", kt: 3},
  {when: "1933-03-23", date: "March 1933", text: "The Enabling Act", kt: 3},
  {when: "1933-04-01", date: "1 April 1933", text: "Boycott of Jewish shops and businesses", kt: 4},
  {when: "1933-05-02", date: "May 1933", text: "Trade unions are banned", kt: 3},
  {when: "1933-07-20", date: "July 1933", text: "The Concordat with the Catholic Church", kt: 3},
  {when: "1934-06-30", date: "30 June 1934", text: "The Night of the Long Knives", kt: 3},
  {when: "1934-08-02", date: "August 1934", text: "Hindenburg dies. Hitler becomes Führer", kt: 3},
  {when: "1935-09-15", date: "September 1935", text: "The Nuremberg Laws", kt: 4},
  {when: "1936-08-01", date: "August 1936", text: "The Berlin Olympics", kt: 3},
  {when: "1938-11-09", date: "9–10 November 1938", text: "Kristallnacht", kt: 4},
  {when: "1939-03-25", date: "March 1939", text: "Joining the Hitler Youth becomes compulsory", kt: 4}
];

/* ---------- Exam practice: Paper 3 ----------
   The sources and interpretations below were written for practice, in the style of the exam.
   They are not real documents. Real ones come from Edexcel's papers. */

const SETS = {
  youth: {
    title: "Young people and the Hitler Youth",
    enquiry: "the attitudes of young people towards the Hitler Youth",
    sources: [
      {label: "Source B", prov: "From the diary of a 15-year-old girl, written in 1936. She was a member of the League of German Maidens.", text: "Tonight we sang round the campfire until late. I felt that I belonged to something great. Father says the League takes up too much of my time, but I do not care. Here I have friends, and we are all equal. Next summer we will go hiking in the mountains."},
      {label: "Source C", prov: "From a report written in 1938 by an agent of the Social Democratic Party (SPD), working secretly in Germany. The report was sent to SPD leaders who had fled abroad.", text: "Many young people are tired of the endless marching and drill. Boys complain that they never have free time. In some towns, fewer boys come to the evening meetings, and they meet their own friends instead. Parents say they hardly see their children."}
    ],
    interps: [
      {label: "Interpretation 1", prov: "A practice interpretation, written in the style of a modern historian.", text: "The Hitler Youth was a great success for the Nazis. Millions of young Germans joined, and most of them joined willingly. They enjoyed the camping, sport and adventure, and felt proud to serve their country. A whole generation grew up loyal to Hitler."},
      {label: "Interpretation 2", prov: "A practice interpretation, written in the style of a modern historian.", text: "Many young people joined the Hitler Youth because they had little choice. As the 1930s went on, more of them became bored with the drill and the strict control. A minority, such as the Edelweiss Pirates, openly rejected it. The Nazis never won over all of Germany's youth."}
    ]
  },
  women: {
    title: "Women in Nazi Germany",
    enquiry: "the lives of women in Nazi Germany",
    sources: [
      {label: "Source B", prov: "From a speech by a Nazi women's leader to a meeting of the National Socialist Women's League, 1935.", text: "The German woman's greatest task is to be a mother. Her place is in the home, caring for her husband and her children. Every child she brings into the world is a gift to the nation. We do not want women in the factories or in the parliament."},
      {label: "Source C", prov: "From a letter written in 1937 by a woman doctor who lost her job in 1933. She wrote it to a friend who had left Germany.", text: "I trained for seven years to become a doctor. Now I am told that my duty is to stay at home and cook. Many women I know feel the same anger, but we do not dare to say it out loud. Even our neighbours might report us."}
    ],
    interps: [
      {label: "Interpretation 1", prov: "A practice interpretation, written in the style of a modern historian.", text: "Many German women welcomed Nazi policies. Marriage loans, the Mother's Cross and the new respect for motherhood gave them status. After the hard years of the Depression, many were happy to leave work and focus on their families."},
      {label: "Interpretation 2", prov: "A practice interpretation, written in the style of a modern historian.", text: "Nazi policies took away women's freedom. Educated women were pushed out of good jobs, and women were removed from politics. By the late 1930s, the Nazis needed women back in the factories, which shows their policies did not really work."}
    ]
  }
};

/* Each question type: what it asks, how marks are given, a writing frame, a self-check list and practice tasks.
   In a sample answer, each part is [text, tag]. Tags: point, evidence, explain, source, provenance, context, judgement. */
const EXAM = [
  {
    id: "q1", label: "Question 1", title: "Make inferences", marks: 4, minutes: 6,
    asks: "Give two things you can infer from Source A about a topic.",
    explain: "To infer means to work out something the source suggests but does not say directly. You get 1 mark for each inference, and 1 more mark for each detail from the source that backs it up.",
    levels: [["2 marks", "Inference 1 (1 mark) and a detail from the source that supports it (1 mark)."], ["2 marks", "Inference 2 (1 mark) and a detail from the source that supports it (1 mark)."]],
    frame: ["(i) What I can infer: This suggests that…", "Details in the source that tell me this: The source says '…'", "(ii) What I can infer: The source also suggests that…", "Details in the source that tell me this: It says '…'"],
    check: ["I wrote two different inferences", "Each inference says something the source suggests, not just what it says", "Each one has a short quote or detail from the source", "I did not use my own knowledge (not needed for this question)"],
    tasks: [
      {id: "q1a", prompt: "Give two things you can infer from Source A about the effects of hyperinflation in 1923.",
        source: {label: "Source A", prov: "Practice source. Written in the style of an account by a German factory worker, describing 1923.", text: "We were paid twice a day now. At noon my wife waited at the factory gate. She took the money and ran to the shops before the prices went up again. By the evening, the same notes bought only half as much. Our savings from before the war could not even buy a stamp."},
        sample: [["(i) Hyperinflation meant that money lost its value very quickly.", "point"], [" The source says 'By the evening, the same notes bought only half as much'.", "evidence"], ["\n(ii) People who had saved money lost it.", "point"], [" The source says 'Our savings from before the war could not even buy a stamp'.", "evidence"]]},
      {id: "q1b", prompt: "Give two things you can infer from Source A about the Nazis' appeal in 1932.",
        source: {label: "Source A", prov: "A description of a real Nazi election poster from 1932. The poster shows a crowd of tired, poor-looking German men and women. The words on the poster say: 'Our last hope: Hitler'.", text: "[Poster] A crowd of grey, tired-looking working men and women stand together. Their faces look worried and hungry. Across the top are the words: 'Our last hope: Hitler'."},
        sample: [["(i) Many Germans were desperate during the Depression.", "point"], [" The poster shows people who look 'tired', 'worried and hungry'.", "evidence"], ["\n(ii) The Nazis showed Hitler as the person who could save Germany.", "point"], [" The words say 'Our last hope: Hitler'.", "evidence"]]},
      {id: "q1c", prompt: "Give two things you can infer from Source A about attitudes to the Hitler Youth.",
        source: {label: "Source A", prov: "Practice source. Written in the style of a report by a local Hitler Youth leader, 1938.", text: "Attendance at evening meetings is falling. Many boys say they are tired of marching and drill. Some of the older boys prefer to meet their friends in the park, where they sing their own songs. I have warned their parents that this must stop."},
        sample: [["(i) Not all young people were keen on the Hitler Youth.", "point"], [" The report says 'Attendance at evening meetings is falling'.", "evidence"], ["\n(ii) Some young people formed their own groups outside Nazi control.", "point"], [" Older boys 'meet their friends in the park, where they sing their own songs'.", "evidence"]]}
    ]
  },
  {
    id: "q2", label: "Question 2(a) or 2(b)", title: "Explain why", marks: 12, minutes: 18,
    asks: "Explain why something happened. You get two points you may use, and you must also use information of your own. You answer one of the two questions.",
    explain: "This is about causes. Give at least three reasons: the two points in the question, plus one of your own. For each reason, give accurate facts and explain how it led to the result. To reach the top level you MUST add your own point.",
    levels: [["Level 1 (1–3)", "A simple or general answer. Little accurate knowledge."], ["Level 2 (4–6)", "Some explanation of reasons, with some accurate knowledge."], ["Level 3 (7–9)", "Explains reasons clearly, with good, accurate knowledge. Answer is organised."], ["Level 4 (10–12)", "Explains several reasons in depth, with accurate, well-chosen knowledge. Goes beyond the two points given."]],
    frame: ["One reason why … was … For example, …", "This meant that … so …", "Another reason was … For example, …", "This led to … because …", "A further reason (my own point) was … For example, …", "This was important because …"],
    check: ["I gave at least three reasons", "One reason is my own, not one of the two points given", "Each reason has accurate facts: dates, names or numbers", "Each reason explains HOW it caused the result (this meant that…)", "I stayed inside the dates in the question"],
    tasks: [
      {id: "q2a", prompt: "Explain why the Weimar Republic was unpopular in the years 1919–23.", stim: ["the Treaty of Versailles", "hyperinflation"],
        own: ["The 'stab in the back' theory: many believed the army had been betrayed by the 'November Criminals'.", "Uprisings from Left and Right: the Spartacists (1919) and the Kapp Putsch (1920).", "Weaknesses of the constitution: proportional representation led to weak coalitions."],
        sample: [["One reason why the Weimar Republic was unpopular was the Treaty of Versailles.", "point"], [" Germany had to accept the blame for the war under Article 231, pay £6,600 million in reparations and cut its army to 100,000 men.", "evidence"], [" This made many Germans feel humiliated. They blamed the Weimar politicians who signed it and called them the 'November Criminals', so the new Republic was linked to defeat from the start.", "explain"]]},
      {id: "q2b", prompt: "Explain why Germany's economy recovered in the years 1924–29.", stim: ["the Rentenmark", "the Dawes Plan"],
        own: ["American loans and investment: about 25 billion marks came in from the USA between 1924 and 1930.", "The Young Plan (1929) cut the reparations bill to £2,000 million.", "Stresemann's leadership and the end of the Ruhr strike."],
        sample: [["One reason for the recovery was the Dawes Plan of 1924.", "point"], [" It reduced Germany's yearly reparations payments and gave Germany loans from America, starting with 800 million marks.", "evidence"], [" This meant that German businesses had money to invest, so factories reopened, jobs were created and the economy grew.", "explain"]]},
      {id: "q2c", prompt: "Explain why support for the Nazi Party grew in the years 1929–32.", stim: ["unemployment", "propaganda"],
        own: ["The SA: they marched in the streets, protected Nazi meetings and attacked Communists, which made the Nazis look strong.", "Hitler's appeal: a powerful speaker who promised to make Germany great again.", "Fear of communism: the KPD was growing, which frightened business owners and the middle classes."],
        sample: [["One reason why Nazi support grew was the rise in unemployment.", "point"], [" After the Wall Street Crash in 1929, America called back its loans, and by 1932 about 6 million Germans were out of work.", "evidence"], [" Desperate people turned against the Weimar government, which seemed unable to help. The Nazis promised 'work and bread', so their seats rose from 12 in 1928 to 230 in July 1932.", "explain"]]},
      {id: "q2d", prompt: "Explain why Hitler was able to become Chancellor in January 1933.", stim: ["the Reichstag elections of 1932", "von Papen"],
        own: ["Hindenburg: he disliked Hitler but agreed to appoint him, believing Papen could control him.", "Article 48: Chancellors such as Brüning ruled by decree, so the Reichstag lost importance.", "Von Schleicher lost the support of Hindenburg and the army in January 1933."],
        sample: [["One reason was the Reichstag elections of 1932.", "point"], [" In July 1932 the Nazis won 230 seats and became the largest party in the Reichstag.", "evidence"], [" This meant that it was very hard to run Germany without Hitler's support, so the politicians around Hindenburg started to think he had to be included in the government.", "explain"]]},
      {id: "q2e", prompt: "Explain why there was little opposition to the Nazis in the years 1933–39.", stim: ["the Gestapo", "propaganda"],
        own: ["Jobs and benefits: unemployment fell to about 300,000 by 1939, and schemes like Strength Through Joy kept workers happy.", "Other parties and trade unions were banned, so there was no legal way to oppose the Nazis.", "The Concordat (1933) kept many Catholics quiet at first."],
        sample: [["One reason for little opposition was fear of the Gestapo.", "point"], [" The Gestapo was the secret police. It used informers and could arrest people without trial and send them to concentration camps such as Dachau.", "evidence"], [" This meant that people were too frightened to criticise the Nazis, even to their neighbours, so opposition stayed small and hidden.", "explain"]]}
    ]
  },
  {
    id: "q3a", label: "Question 3(a)", title: "How useful are the sources?", marks: 8, minutes: 15,
    asks: "How useful are Sources B and C for an enquiry into a topic? Explain your answer, using Sources B and C and your knowledge of the historical context.",
    explain: "Judge how useful each source is for this enquiry. Use three things: the content (what it says), the provenance (who wrote it, when, and why) and your own knowledge of the context. Talk about both sources.",
    levels: [["Level 1 (1–2)", "Simple comments about the sources, often just saying what they say."], ["Level 2 (3–5)", "Judges usefulness using content and provenance, with some own knowledge."], ["Level 3 (6–8)", "Judges usefulness of both sources well, using content, provenance and own knowledge together."]],
    frame: ["Source B is useful for this enquiry because it shows … It says '…'", "This fits with what I know, because …", "The provenance makes it useful/less useful because it was written by … in … to …", "Source C is useful because it shows … It says '…'", "This matches my knowledge that …", "Its provenance means … because …"],
    check: ["I talked about BOTH sources", "For each source I used the content (a quote)", "For each source I used the provenance (who, when, why)", "I used my own knowledge to check the content", "I kept linking back to the enquiry"],
    tasks: [
      {id: "q3a1", set: "youth", prompt: "How useful are Sources B and C for an enquiry into the attitudes of young people towards the Hitler Youth?",
        sample: [["Source B is useful because it shows that some young people enjoyed the Hitler Youth.", "source"], [" The girl says 'I felt that I belonged to something great'.", "evidence"], [" This fits my knowledge that the League of German Maidens and the Hitler Youth offered camping, hiking and sport, which many found exciting.", "context"], [" It is a private diary, so she had no reason to lie, which makes it useful. However, it is only one girl's view, from 1936, before membership became compulsory.", "provenance"]]},
      {id: "q3a2", set: "women", prompt: "How useful are Sources B and C for an enquiry into the lives of women in Nazi Germany?",
        sample: [["Source C is useful because it shows how some educated women lost their careers.", "source"], [" The doctor writes 'Now I am told that my duty is to stay at home and cook'.", "evidence"], [" This fits my knowledge that many women doctors, lawyers and civil servants were dismissed after 1933.", "context"], [" It is a private letter to a friend abroad, so she could be honest. But she is angry about her own situation, so she may not speak for all women.", "provenance"]]}
    ]
  },
  {
    id: "q3b", label: "Question 3(b)", title: "How do the interpretations differ?", marks: 4, minutes: 5,
    asks: "Study Interpretations 1 and 2. They give different views about a topic. What is the main difference between these views? Explain your answer, using details from both interpretations.",
    explain: "Find the MAIN difference in the overall view, not a small detail. Say what each interpretation argues, and back each side up with a short quote.",
    levels: [["Level 1 (1–2)", "Points out differences in detail, or describes each one separately."], ["Level 2 (3–4)", "Explains the main difference in their views, with details from both."]],
    frame: ["The main difference is that Interpretation 1 says …, whereas Interpretation 2 says …", "For example, Interpretation 1 says '…'", "However, Interpretation 2 says '…'"],
    check: ["I said what the MAIN difference is in one sentence", "I quoted Interpretation 1", "I quoted Interpretation 2", "I used a linking word such as 'whereas' or 'however'"],
    tasks: [
      {id: "q3b1", set: "youth", prompt: "What is the main difference between these views about young people's attitudes towards the Hitler Youth?",
        sample: [["The main difference is that Interpretation 1 says most young people supported the Hitler Youth, whereas Interpretation 2 says many were forced to join and became bored with it.", "point"], [" Interpretation 1 says 'most of them joined willingly'.", "evidence"], [" However, Interpretation 2 says 'they had little choice' and that 'more of them became bored'.", "evidence"]]},
      {id: "q3b2", set: "women", prompt: "What is the main difference between these views about Nazi policies towards women?",
        sample: [["The main difference is that Interpretation 1 says Nazi policies were popular with many women, whereas Interpretation 2 says they took away women's freedom.", "point"], [" Interpretation 1 says 'Many German women welcomed Nazi policies'.", "evidence"], [" However, Interpretation 2 says 'Nazi policies took away women's freedom'.", "evidence"]]}
    ]
  },
  {
    id: "q3c", label: "Question 3(c)", title: "Why do the interpretations differ?", marks: 4, minutes: 5,
    asks: "Suggest one reason why Interpretations 1 and 2 give different views about a topic. You may use Sources B and C to help explain your answer.",
    explain: "Give ONE reason and explain it well. Good reasons: the historians used different sources, gave more weight to different evidence, or focused on different groups or different years. Using Sources B and C to show this is a strong way to do it.",
    levels: [["Level 1 (1–2)", "A simple reason, not really explained."], ["Level 2 (3–4)", "Explains a reason why they differ, with support (for example, from Sources B and C)."]],
    frame: ["The interpretations may differ because the historians gave weight to different sources.", "Interpretation 1 may be based on evidence like Source B, which shows …", "Interpretation 2 may be based on evidence like Source C, which shows …"],
    check: ["I gave ONE clear reason", "I explained the reason, not just named it", "I linked Interpretation 1 to a source or group", "I linked Interpretation 2 to a different source or group"],
    tasks: [
      {id: "q3c1", set: "youth", prompt: "Suggest one reason why Interpretations 1 and 2 give different views about young people's attitudes towards the Hitler Youth.",
        sample: [["The interpretations may differ because the historians gave weight to different sources.", "point"], [" Interpretation 1 may be based on evidence like Source B, a diary from 1936 where a girl says she 'belonged to something great'.", "evidence"], [" Interpretation 2 may be based on evidence like Source C, an SPD report from 1938 saying young people were 'tired of the endless marching'. They also look at different years: 1936 compared with 1938.", "explain"]]},
      {id: "q3c2", set: "women", prompt: "Suggest one reason why Interpretations 1 and 2 give different views about Nazi policies towards women.",
        sample: [["The interpretations may differ because they focus on different groups of women.", "point"], [" Interpretation 1 focuses on mothers, who received marriage loans and the Mother's Cross.", "evidence"], [" Interpretation 2 focuses on educated women, like the doctor in Source C who lost her job, so it is much more negative.", "explain"]]}
    ]
  },
  {
    id: "q3d", label: "Question 3(d)", title: "How far do you agree?", marks: 16, minutes: 30, spag: 4,
    asks: "How far do you agree with Interpretation 2 about a topic? Explain your answer, using both interpretations and your knowledge of the historical context.",
    explain: "This is the big one: 16 marks, plus 4 for spelling, punctuation, grammar and specialist words. Use Interpretation 2, Interpretation 1 AND your own knowledge. Show evidence for and against, then give a clear judgement.",
    levels: [["Level 1 (1–4)", "A simple answer, mostly describing the interpretations."], ["Level 2 (5–8)", "Some analysis, with some own knowledge. A judgement is given but not well supported."], ["Level 3 (9–12)", "Good analysis of both interpretations with accurate own knowledge. A supported judgement."], ["Level 4 (13–16)", "Detailed analysis, well-chosen knowledge, and a clear, well-supported judgement throughout."]],
    frame: ["I agree with Interpretation 2 to a large extent / to some extent, because …", "Interpretation 2 says '…'. This is supported by my knowledge that …", "Also, … For example, …", "However, Interpretation 1 says '…'. There is some truth in this because …", "Overall, I agree / partly agree with Interpretation 2 because …"],
    check: ["My first sentence says how far I agree", "I quoted Interpretation 2 and backed it with my own knowledge", "I used Interpretation 1 to show the other side", "I used at least three accurate facts of my own", "My conclusion gives a clear judgement with a reason", "I checked spelling, capital letters and key terms (SPaG: 4 marks)"],
    tasks: [
      {id: "q3d1", set: "youth", prompt: "How far do you agree with Interpretation 2 about young people's attitudes towards the Hitler Youth?",
        sample: [["I agree with Interpretation 2 to a large extent, because many young people were forced to join and some openly rejected the Hitler Youth.", "judgement"], [" Interpretation 2 says young people 'had little choice'.", "evidence"], [" This is supported by my knowledge that from 1936 the Hitler Youth was the only youth group allowed, and in 1939 joining became compulsory.", "context"], [" However, Interpretation 1 says 'most of them joined willingly'. There is some truth in this, because membership grew to millions before it was compulsory, and many enjoyed the camps and sport.", "explain"], [" Overall, I agree with Interpretation 2 more, because groups like the Edelweiss Pirates and Swing Youth show that the Nazis never won over all young people.", "judgement"]]},
      {id: "q3d2", set: "women", prompt: "How far do you agree with Interpretation 2 about Nazi policies towards women?",
        sample: [["I agree with Interpretation 2 to some extent, because Nazi policies limited women's lives, but some women did welcome them.", "judgement"], [" Interpretation 2 says educated women 'were pushed out of good jobs'.", "evidence"], [" This is supported by my knowledge that women doctors and civil servants were dismissed, and from 1936 women could not be judges.", "context"], [" However, Interpretation 1 says many women 'welcomed' the policies. Marriage loans of 1,000 marks and the Mother's Cross gave some women status and money.", "explain"], [" Overall, I partly agree with Interpretation 2, because the policies took away women's choices, but many mothers felt valued.", "judgement"]]}
    ]
  }
];
