// Mission Control Live: the President drops by (the "Presidential visit" button). A fixed, hand-written parody scene:
// CAPCOM and the intern open it, the President joins for this one exchange only, then leaves.
// Shared by the player (subtitles, narration.js) and web/api/say.js (voices line i, so nobody can make it say anything else).
// [delivery tags] are acted by ElevenLabs, never spoken; subtitles hide them.

export const PRESIDENT_SCENE = [
  ['CAPCOM', '[dry] Intern, stop spinning in the chair. The risk feed is updating.'],
  ['INTERN', "[nervous] Sorry, sorry! Um, who's parking the, uh, extremely long line of black cars outside?"],
  ['CAPCOM', '[surprised, standing up] Ah, Mr. President, so great to see you here.'],
  ['PRESIDENT', "[smug, drawn out] Thank you. Thank you very much. [pausing for effect] Great to be here. Beautiful room. Beautiful. Lots of screens. I have bigger screens, frankly. Much bigger. [waving it off] But these are nice. They're very nice."],
  ['INTERN', '[starstruck, voice cracking] Mister President, sir! Welcome to Mission Control!'],
  ['PRESIDENT', "[leaning in] So I'm told, and they told me this, very smart people, that we have asteroids. A lot of asteroids. Thousands. [pausing for effect] Nobody knew. Nobody knew there were so many. [smug] I knew."],
  ['CAPCOM', '[dry] About forty thousand near-Earth asteroids, sir. Our model gives each one a risk score.'],
  ['PRESIDENT', "[impressed] The model. Very smart model. They say, and I've heard this, it's the best model. Maybe the best model in the history of models. [drawn out] Big, strong scientists, coming up to me, tears in their eyes. Sir. Sir."],
  ['INTERN', '[nervous laugh] Sir, a-actually, some of them are flagged as potentially hazardous.'],
  ['PRESIDENT', "[serious] Hazardous. Not good. Not good, folks. [pausing for effect] So here's what we're gonna do. We're gonna build a wall. A beautiful space wall. [smug] And the asteroids, the asteroids, are gonna pay for it."],
  ['CAPCOM', "[deadpan] Sir, asteroids don't have money."],
  ['PRESIDENT', "[leaning in, quieter] That's what they want you to think. [pausing for effect] Believe me."],
  ['INTERN', '[whispering] Is he allowed to say that?'],
  ['PRESIDENT', "[squinting] And the big one. Apo... Apo... [frustrated] Apophis. Terrible name. Low energy name. Nobody can say it. [drawn out] From now on, we call it... Sloppy Rock."],
  ['CAPCOM', '[dry] Apophis will not hit Earth, sir. In 2029 it passes closer than some of our satellites, then it keeps going.'],
  ['PRESIDENT', "[proud] Closer than the satellites, and it doesn't hit. Why? [pausing for effect] Because of us. Nobody's ever dodged an asteroid like we're dodging this asteroid. They're calling it the greatest dodge. Of all time."],
  ['INTERN', "[confused] I don't think that's how orbits w—"],
  ['PRESIDENT', "[pointing] Kid. Kid. You're doing a fantastic job. Fantastic. Maybe the best intern. [drawn out] A little nervous. Very sweaty. [shrugs] But strong. Very strong."],
  ['INTERN', '[overjoyed] Oh my gosh. Thank you, sir!'],
  ['PRESIDENT', "[checking watch] Okay, I gotta go. Very important round of golf. On the Moon, maybe. We're looking at it, a lot of people want it. [waving] Thank you, everybody. Great job. [drawn out] Tremendous job."],
  ['CAPCOM', '[long sigh] And he is gone. Intern, put the asteroids back on screen.'],
  ['INTERN', '[dreamy] He said I was the best intern.'],
  ['CAPCOM', '[deadpan] He said maybe.'],
];

// ElevenLabs settings for the President's voice (PRESIDENT_VOICE_ID): slow, showy and emphatic. Low stability + high style
// = bigger swings in delivery, so the [pausing for effect] / [drawn out] tags get acted out hard.
export const PRESIDENT_VOICE = { stability: 0.2, similarity_boost: 0.75, style: 0.9, speed: 0.85 };
