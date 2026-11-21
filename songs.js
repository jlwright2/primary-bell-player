// PRIMARY BELL SONG LIBRARY — edit this file to publish new arrangements.
// Note format: C D E F G A B C' and R for silence; duration /2 or /0.5.
// 'If I Were There' is an UNVERIFIED first-pass transcription: many pitches and rhythms require audit against PDF.
window.PRIMARY_BELL_SONGS = {practice:{title:'Bell Practice',section:'Demo sequence — not an actual hymn',notes:"C D E F G A B C' C' B A G F E D C"},families:{title:'Families Can Be Together Forever',section:'Children’s Songbook · page 188',notes:''},choose:{title:'Choose the Right',section:'Hymns · no. 239',notes:''},there:{title:'If I Were There',section:'Full-song bell adaptation · melody only · Monica Scott & Angie Killian',notes:"R/12 | G/0.5 F/0.5 G/0.5 A/2 G/0.5 F/0.5 G/0.5 B/0.5 G/0.5 A/2 E/0.5 G/0.5 B C'/0.5 B B/0.5 C'/0.5 B/0.5 B/0.5 G/0.5 A/2 G/0.5 F/0.5 G/0.5 B/2 G/0.5 F/0.5 G/0.5 B/0.5 G/0.5 A/2 E/0.5 G/0.5 B/0.5 C'/0.5 B/0.5 B/0.5 C'/0.5 B/0.5 B/0.5 G/0.5 R/2 C'/0.5 B/0.5 C'/0.5 R/2 C'/0.5 C'/0.5 R/0.5 R/0.5 B/0.5 G G/0.5 A/0.5 G/0.5 A/2 F/0.5 F/0.5 E/0.5 F/0.5 F/0.5 G E/0.5 C'/0.5 B/0.5 R/2 C'/0.5 C'/0.5 R/0.5 R/0.5 R/2 R/0.5 R/0.5 C'/0.5 R/2 B/0.5 E/0.5 R/0.5 E/4 | R/12 | G/0.5 F/0.5 G/0.5 E/4 B/2 G/0.5 F/0.5 G/0.5 B/0.5 G/0.5 A/2 E/0.5 G/0.5 B C'/0.5 B B/0.5 C'/0.5 B/0.5 B/0.5 G/0.5 A/2 G/0.5 F/0.5 G/0.5 B/2 G/0.5 F/0.5 G/0.5 B/0.5 G/0.5 A/2 E/0.5 G/0.5 B/0.5 C'/0.5 B/0.5 B/0.5 C'/0.5 B/0.5 B/0.5 G/0.5 R/2 C'/0.5 B/0.5 C'/0.5 R/2 C'/0.5 C'/0.5 R/0.5 R/0.5 B/0.5 G G/0.5 A/0.5 G/0.5 A/2 F/0.5 F/0.5 E/0.5 F/0.5 F/0.5 G E/0.5 C'/0.5 B/0.5 R/2 C'/0.5 C'/0.5 R/0.5 R/0.5 R/2 R/0.5 R/0.5 C'/0.5 R/2 B/0.5 E/0.5 R/0.5 E/4 | R/16 | A/0.5 G/0.5 A R/2 A/0.5 G/0.5 A/0.5 R/0.5 A/0.5 B/2 R/0.5 A/0.5 R/0.5 R/0.5 R R/0.5 R/0.5 R/0.5 R/0.5 A/0.5 B/2 A/0.5 G/0.5 A/0.5 R/2 A/0.5 G/0.5 A/0.5 R/0.5 A/0.5 B/2 R/0.5 A/0.5 R/0.5 R/0.5 R/0.5 R/0.5 R/0.5 R/0.5 R/0.5 R/0.5 R/0.5 A/0.5 R/2 R/0.5 R/0.5 R/0.5 R/0.5 R/2 R/0.5 R/0.5 R/0.5 R/0.5 R/0.5 A A/0.5 B/0.5 A/0.5 B/2 G/0.5 G/0.5 R/0.5 G/0.5 G/0.5 A R/0.5 R/0.5 R/0.5 R/2 R/0.5 R/0.5 R/0.5 R/0.5 R/2 R/0.5 R/0.5 R R/2 R/0.5 R/0.5 E/0.5 R/4 R/0.5 A/0.5 G/0.5 A/4"}};


/* Singing cues transcribed from the user-provided score.
   Cues are approximate section-level guides, NOT syllable-aligned note events. */
window.PRIMARY_BELL_LYRICS = {
 there: [
  {title:"Verse 1",lines:[
   "If I were there on that silent night",
   "Would I hear angels sing praises in the sky?",
   "If I were there, would I go with haste",
   "With humble shepherds to seek His holy place?",
   "If I were there, I'd find the manger",
   "And bow before the tiny Savior.",
   "I'd sense the peace that filled the air,",
   "If I were there, if I were there."
  ]},
  {title:"Verse 2",lines:[
   "If I were there, would I see the star",
   "And join with wise men who journeyed from afar?",
   "If I were there, would I gladly bring",
   "My finest treasure to lay before my King?",
   "If I were there, I'd find the manger",
   "And bow before the tiny Savior.",
   "I'd sense the peace that filled the air,",
   "If I were there, if I were there."
  ]},
  {title:"Verse 3 / Ending",lines:[
   "I was not there, but inside I know",
   "That precious baby, who came so long ago,",
   "Was Jesus Christ, Lord of heav'n and earth.",
   "I sing His praises as I celebrate His birth.",
   "If I were there, I'd find the manger",
   "And bow before the tiny Savior.",
   "I'd sense the peace that filled the air,",
   "If I were there, if I were there."
  ]}
 ]
};

/* Section boundaries are approximate positions in the existing draft sequence.
   Do not interpret them as a verified measure/phrase alignment. */
window.PRIMARY_BELL_SECTIONS = {
 there: [
  {at:0,title:"Instrumental introduction",kind:"intro",verse:-1},
  {at:1,title:"Verse 1",kind:"verse",verse:0},
  {at:43,title:"Chorus · Verse 1",kind:"chorus",verse:0},
  {at:80,title:"Instrumental transition",kind:"intro",verse:-1},
  {at:81,title:"Verse 2",kind:"verse",verse:1},
  {at:124,title:"Chorus · Verse 2",kind:"chorus",verse:1},
  {at:161,title:"Instrumental transition",kind:"intro",verse:-1},
  {at:162,title:"Verse 3",kind:"verse",verse:2},
  {at:207,title:"Final chorus and ending",kind:"chorus",verse:2}
 ]
};

// The opening transcription uses one event per sung note, with a sustained “there”
// (2.5 beats) and true sixteenth notes for “on” and “that”. The rest of the
// original full-song adaptation remains UNVERIFIED and must not be treated as final.
window.PRIMARY_BELL_SECTIONS=window.PRIMARY_BELL_SECTIONS||{};

// User-reviewed working arrangement (pitches/lyric syllables approved in chat).
// Rhythmic durations are working values, not an independently certified score transcription.
// Each nested line is a COMPLETE singing phrase group and must not be auto-reflowed.
window.PRIMARY_BELL_APPROVED = {thereApproved:[{"name":"Verse 1","lines":[[["E","If",0.5],["D","I",0.5],["E","were",0.5],["E","there",2.5],["D","On",0.25],["E","that",0.25],["G","si-",0.5],["E","lent",0.5],["D","night",2]],[["C","Would",0.5],["E","I",0.5],["G","hear",0.5],["A","an-",0.5],["G","gels",1],["G","sing",0.5],["A","prais-",0.5],["G","es",0.5],["G","in",0.5],["E","the",0.5],["D","sky",2]],[["E","If",0.5],["D","I",0.5],["E","were",0.5],["E","there",2.5],["D","Would",0.25],["E","I",0.25],["G","go",0.5],["E","with",0.5],["D","haste",2]],[["C","With",0.5],["E","hum-",0.5],["G","ble",0.5],["A","shep-",0.5],["G","herds",1],["G","to",0.5],["A","seek",0.5],["G","His",0.5],["G","ho-",0.5],["E","ly",0.5],["G","place",2]]]},{"name":"Chorus","lines":[[["A","If",0.5],["G","I",0.5],["A","were",0.5],["A","there",2.5],["A","I'd",0.5],["B","find",0.5],["C'","the",0.5],["G","man-",0.5],["E","ger",1.5]],[["E","And",0.5],["F","bow",0.5],["E","be-",0.5],["D","fore",2.5],["D","the",0.5],["C","ti-",0.5],["D","ny",0.5],["D","Sav-",0.5],["E","ior",1.5]],[["C","I'd",0.5],["A","sense",0.5],["G","the",0.5],["A","peace",2.5],["A","that",0.5],["B","filled",0.5],["C'","the",0.5],["C'","air",2]],[["C'","If",0.5],["B","I",0.5],["A","were",0.5],["G","there",2],["G","If",0.5],["C","I",0.5],["B","were",0.5],["C","there",4]]]},{"name":"Verse 2","lines":[[["E","If",0.5],["D","I",0.5],["E","were",0.5],["E","there",2.5],["D","would",0.25],["E","I",0.25],["G","see",0.5],["E","the",0.5],["D","star",2]],[["C","And",0.5],["E","join",0.5],["G","with",0.5],["A","wise-",0.5],["G","men",1],["G","who",0.5],["A","jour-",0.5],["G","neyed",0.5],["G","from",0.5],["E","a-",0.5],["D","far",2]],[["E","If",0.5],["D","I",0.5],["E","were",0.5],["E","there",2.5],["D","would",0.25],["E","I",0.25],["G","glad-",0.5],["E","ly",0.5],["D","bring",2]],[["C","My",0.5],["E","fin-",0.5],["G","est",0.5],["A","treas-",0.5],["G","ure",1],["G","to",0.5],["A","lay",0.5],["G","be-",0.5],["G","fore",0.5],["E","my",0.5],["G","King",2]]]},{"name":"Chorus","lines":[[["A","If",0.5],["G","I",0.5],["A","were",0.5],["A","there",2.5],["A","I'd",0.5],["B","find",0.5],["C'","the",0.5],["G","man-",0.5],["E","ger",1.5]],[["E","And",0.5],["F","bow",0.5],["E","be-",0.5],["D","fore",2.5],["D","the",0.5],["C","ti-",0.5],["D","ny",0.5],["D","Sav-",0.5],["E","ior",1.5]],[["C","I'd",0.5],["A","sense",0.5],["G","the",0.5],["A","peace",2.5],["A","that",0.5],["B","filled",0.5],["C'","the",0.5],["C'","air",2]],[["C'","If",0.5],["B","I",0.5],["A","were",0.5],["G","there",2],["G","If",0.5],["C","I",0.5],["B","were",0.5],["C","there",4]]]},{"name":"Verse 3","lines":[[["E","I",0.5],["D","was",0.5],["E","not",0.5],["E","there",2.5],["D","but",0.25],["E","in-",0.25],["G","side",0.5],["E","I",0.5],["D","know",2.5]],[["C","That",0.5],["E","pre-",0.5],["G","cious",0.5],["A","ba-",0.5],["G","by",1],["G","who",0.5],["A","came",0.5],["G","so",0.5],["G","long",0.5],["E","a-",0.5],["D","go",2.5]],[["E","Was",0.5],["D","Je-",0.5],["E","sus",0.5],["E","Christ",2.5],["D","Lord",0.25],["E","of",0.25],["G","heav'n",0.5],["E","and",0.5],["D","earth",2.5]],[["C","I",0.5],["E","sing",0.5],["G","His",0.5],["A","prais-",0.5],["G","es",1],["C'","as",0.5],["B","I",0.25],["A","cel-",0.25],["G","e-",0.5],["G","brate",0.5],["E","His",0.5],["G","birth",2.5]]]},{"name":"Final Chorus","lines":[[["A","If",0.5],["G","I",0.5],["A","were",0.5],["A","there",2.5],["A","I'd",0.5],["B","find",0.5],["C'","the",0.5],["G","man-",0.5],["E","ger",1.5]],[["E","And",0.5],["F","bow",0.5],["E","be-",0.5],["D","fore",2.5],["D","the",0.5],["C","ti-",0.5],["D","ny",0.5],["D","Sav-",0.5],["E","ior",1.5]],[["C","I'd",0.5],["A","sense",0.5],["G","the",0.5],["A","peace",2.5],["A","that",0.5],["B","filled",0.5],["C'","the",0.5],["C'","air",2]],[["C'","If",0.5],["B","I",0.5],["A","were",0.5],["G","there",2],["G","If",0.5],["C","I",0.5],["B","were",0.5],["C","there",4]]]}]};
window.PRIMARY_BELL_SONGS.thereApproved = {
 title:'If I Were There — Singing & Bells',
 section:'User-reviewed arrangement · verse 1 / chorus / verse 2 / chorus / verse 3 / chorus',
 notes:"E/0.5 D/0.5 E/0.5 E/2.5 D/0.25 E/0.25 G/0.5 E/0.5 D/2 C/0.5 E/0.5 G/0.5 A/0.5 G G/0.5 A/0.5 G/0.5 G/0.5 E/0.5 D/2 E/0.5 D/0.5 E/0.5 E/2.5 D/0.25 E/0.25 G/0.5 E/0.5 D/2 C/0.5 E/0.5 G/0.5 A/0.5 G G/0.5 A/0.5 G/0.5 G/0.5 E/0.5 G/2 A/0.5 G/0.5 A/0.5 A/2.5 A/0.5 B/0.5 C'/0.5 G/0.5 E/1.5 E/0.5 F/0.5 E/0.5 D/2.5 D/0.5 C/0.5 D/0.5 D/0.5 E/1.5 C/0.5 A/0.5 G/0.5 A/2.5 A/0.5 B/0.5 C'/0.5 C'/2 C'/0.5 B/0.5 A/0.5 G/2 G/0.5 C/0.5 B/0.5 C/4 E/0.5 D/0.5 E/0.5 E/2.5 D/0.25 E/0.25 G/0.5 E/0.5 D/2 C/0.5 E/0.5 G/0.5 A/0.5 G G/0.5 A/0.5 G/0.5 G/0.5 E/0.5 D/2 E/0.5 D/0.5 E/0.5 E/2.5 D/0.25 E/0.25 G/0.5 E/0.5 D/2 C/0.5 E/0.5 G/0.5 A/0.5 G G/0.5 A/0.5 G/0.5 G/0.5 E/0.5 G/2 A/0.5 G/0.5 A/0.5 A/2.5 A/0.5 B/0.5 C'/0.5 G/0.5 E/1.5 E/0.5 F/0.5 E/0.5 D/2.5 D/0.5 C/0.5 D/0.5 D/0.5 E/1.5 C/0.5 A/0.5 G/0.5 A/2.5 A/0.5 B/0.5 C'/0.5 C'/2 C'/0.5 B/0.5 A/0.5 G/2 G/0.5 C/0.5 B/0.5 C/4 E/0.5 D/0.5 E/0.5 E/2.5 D/0.25 E/0.25 G/0.5 E/0.5 D/2.5 C/0.5 E/0.5 G/0.5 A/0.5 G G/0.5 A/0.5 G/0.5 G/0.5 E/0.5 D/2.5 E/0.5 D/0.5 E/0.5 E/2.5 D/0.25 E/0.25 G/0.5 E/0.5 D/2.5 C/0.5 E/0.5 G/0.5 A/0.5 G C'/0.5 B/0.25 A/0.25 G/0.5 G/0.5 E/0.5 G/2.5 A/0.5 G/0.5 A/0.5 A/2.5 A/0.5 B/0.5 C'/0.5 G/0.5 E/1.5 E/0.5 F/0.5 E/0.5 D/2.5 D/0.5 C/0.5 D/0.5 D/0.5 E/1.5 C/0.5 A/0.5 G/0.5 A/2.5 A/0.5 B/0.5 C'/0.5 C'/2 C'/0.5 B/0.5 A/0.5 G/2 G/0.5 C/0.5 B/0.5 C/4"
};
