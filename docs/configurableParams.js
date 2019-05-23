configurableParams = [
  {
    "name": "shuffle-paintings",
    "label": "Painting (Art) randomization",
    "category": "aesthetics",
    "type": "select",
    "default": "match",
    "options": [
      {
        "value": "vanilla",
        "label": "Off"
      },
      {
        "value": "match",
        "label": "Match Levels"
      },
      {
        "value": "random",
        "label": "Randomized"
      }
    ],
    "help": "Change the behaviour of how the paintings in the castle are shuffled (\"match\" - matches randomized levels, i.e. painting = level, \"random\" - independently randomize paintings, \"off\" - leave paintings untouched)"
  },
  {
    "name": "shuffle-entries",
    "label": "Entrance Randomizer",
    "category": "gameplay",
    "type": "checkbox",
    "default": {
      "CLI": false,
      "WEB": true
    },
    "help": "Shuffles the levelentries. When you enter a level, you will end up at a random one."
  },
  {
    "name": "shuffle-mario-outfit",
    "label": "Mario's Outfit Randomizer",
    "category": "aesthetics",
    "type": "checkbox",
    "default": {
      "CLI": false,
      "WEB": true
    },
    "help": "Randomizes parts of Marios Outfit."
  },
  {
    "name": "shuffle-music",
    "label": "Music Randomizer",
    "category": "aesthetics",
    "type": "checkbox",
    "default": {
      "CLI": false,
      "WEB": false
    },
    "help": "Randomizes most songs in the game."
  },
  {
    "name": "shuffle-objects",
    "label": "Object Shuffle",
    "category": "gameplay",
    "type": "checkbox",
    "default": {
      "CLI": false,
      "WEB": true
    },
    "help": "Shuffles Objects in Levels"
  },
  {
    "name": "shuffle-colors",
    "label": "Randomize Colors",
    "category": "aesthetics",
    "type": "checkbox",
    "default": {
      "CLI": false,
      "WEB": true
    },
    "help": "Shuffle various colors in the game"
  },
  {
    "name": "shuffle-text",
    "label": "Randomize Dialog/Text",
    "category": "aesthetics",
    "type": "checkbox",
    "default": {
      "CLI": false,
      "WEB": true
    },
    "help": "Shuffle Dialog text, for signs, npc dialog, level dialog and prompts."
  }
]