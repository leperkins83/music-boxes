var notes = {
  c: {
      box: document.getElementById('cBox'),
      audio: document.getElementById('cAudio')
  },
  d: {
    box: document.getElementById('dBox'),
    audio: document.getElementById('dAudio')
  },
  e: {
    box: document.getElementById('eBox'),
    audio: document.getElementById('eAudio')
  },
  f: {
    box: document.getElementById('fBox'),
    audio: document.getElementById('fAudio')
  },
  g: {
    box: document.getElementById('gBox'),
    audio: document.getElementById('gAudio')
  },
  a: {
    box: document.getElementById('aBox'),
    audio: document.getElementById('aAudio')
  },
  b: {
    box: document.getElementById('bBox'),
    audio: document.getElementById('bAudio')
  }
};

// for(var note in notes) {
//   (function(note) {
//     notes[note].box.addEventListener('click', function() {
//       notes[note].audio.currentTime = 0;
//       notes[note].audio.play();
//     });
//   })(note);
// }

//basic code to play each note by clicking on it
notes.c.box.addEventListener('click', function() {
  notes.c.audio.currentTime = 0;
  notes.c.audio.play();
});
notes.d.box.addEventListener('click', function() {
  notes.d.audio.currentTime = 0;
  notes.d.audio.play();
});
notes.e.box.addEventListener('click', function() {
  notes.e.audio.currentTime = 0;
  notes.e.audio.play();
});
notes.f.box.addEventListener('click', function() {
  notes.f.audio.currentTime = 0;
  notes.f.audio.play();
});
notes.g.box.addEventListener('click', function() {
  notes.g.audio.currentTime = 0;
  notes.g.audio.play();
});
notes.a.box.addEventListener('click', function() {
  notes.a.audio.currentTime = 0;
  notes.a.audio.play();
});
notes.b.box.addEventListener('click', function() {
  notes.b.audio.currentTime = 0;
  notes.b.audio.play();
});


// code to play notes on the keyboard. keyboard letter used: a, s, d, f, g, h, j
document.addEventListener('keydown', function(event) {
  switch(event.keyCode) {
    case 65:
    notes.c.audio.currentTime = 0;
    notes.c.audio.play();
    break;
    }
});
document.addEventListener('keydown', function(event) {
  switch(event.keyCode) {
    case 83:
    notes.d.audio.currentTime = 0;
    notes.d.audio.play();
    break;
    }
});
document.addEventListener('keydown', function(event) {
  switch(event.keyCode) {
    case 68:
    notes.e.audio.currentTime = 0;
    notes.e.audio.play();
    break;
    }
});
document.addEventListener('keydown', function(event) {
  switch(event.keyCode) {
    case 70:
    notes.f.audio.currentTime = 0;
    notes.f.audio.play();
    break;
    }
});
document.addEventListener('keydown', function(event) {
  switch(event.keyCode) {
    case 71:
    notes.g.audio.currentTime = 0;
    notes.g.audio.play();
    break;
    }
});
document.addEventListener('keydown', function(event) {
  switch(event.keyCode) {
    case 72:
    notes.a.audio.currentTime = 0;
    notes.a.audio.play();
    break;
    }
});
document.addEventListener('keydown', function(event) {
  switch(event.keyCode) {
    case 74:
    notes.b.audio.currentTime = 0;
    notes.b.audio.play();
    break;
    }
});
