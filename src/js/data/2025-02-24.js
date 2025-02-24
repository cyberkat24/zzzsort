dataSetVersion = "2025-02-24"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by faction",
    key: "faction",
    tooltip: "Check this to restrict to characters from certain faction.",
    checked: true,
    sub: [
      { name: "Protagonists", key: "main" },
      { name: "Cunning Hares", key: "ch" },
      { name: "Belobog Heavy Industries", key: "bhi" },
      { name: "Victoria Housekeeping Co.", key: "vhc" },
      { name: "Sons of Calydon", key: "soc" },
      { name: "Obol Squad", key: "ob" },
      { name: "PubSec", key: "ps" },
      { name: "Section 6", key: "s6" },
      { name: "Stars of Lyra", key: "sol" },
      { name: "Mockingbird", key: "mkb" },
      { name: "NPCs", key: "npc", checked: false },
    ]
  },
  {
    name: "Exclude males",
    key: "male",
    tooltip: "Check this to exclude males.",
    checked: false
  },
  {
    name: "Exclude females",
    key: "female",
    tooltip: "Check this to exclude females.",
    checked: false
  },
  {
    name: "Exclude unreleased",
    key: "unreleased",
    tooltip: "Check this to exclude unrealased characters.",
    checked: false
  },
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Belle",
    img: "belle.png",
    opts: {
      faction: ['main'],
      female: true
    }
  },
  {
    name: "Wise",
    img: "wise.png",
    opts: {
      faction: ['ch'],
      male: true
    }
  },
  {
    name: "Nekomiya Mana",
    img: "mana.png",
    opts: {
      faction: ['ch'],
      female: true
    }
  },
  {
    name: "Billy Kid",
    img: "billy.png",
    opts: {
      faction: ['ch'],
      male: true
    }
  },
  {
    name: "Nicole Demara",
    img: "nicole.png",
    opts: {
      faction: ['ch'],
      female: true
    }
  },
  {
    name: "Anby Demara",
    img: "anby.png",
    opts: {
      faction: ['ch'],
      female: true
    }
  },
  {
    name: "Grace Howard",
    img: "grace.png",
    opts: {
      faction: ['bhi'],
      female: true
    }
  },
  {
    name: "Ben Bigger",
    img: "ben.png",
    opts: {
      faction: ['bhi'],
      male: true
    }
  },
  {
    name: "Anton Ivanov",
    img: "anton.png",
    opts: {
      faction: ['bhi'],
      male: true
    }
  },
  {
    name: "Koleda Belobog",
    img: "koleda.png",
    opts: {
      faction: ['bhi'],
      female: true
    }
  },
  {
    name: "Ellen Joe",
    img: "ellen.png",
    opts: {
      faction: ['vhc'],
      female: true
    }
  },
  {
    name: "Alexandrina",
    img: "alexandrina.png",
    opts: {
      faction: ['vhc'],
      female: true
    }
  },
  {
    name: "Von Lycaon",
    img: "lycaon.png",
    opts: {
      faction: ['vhc'],
      male: true
    }
  },
  {
    name: "Corin Wickes",
    img: "corin.png",
    opts: {
      faction: ['vhc'],
      female: true
    }
  },
  {
    name: "Lucy",
    img: "lucy.png",
    opts: {
      faction: ['soc'],
      female: true
    }
  },
  {
    name: "Piper Wheel",
    img: "piper.png",
    opts: {
      faction: ['soc'],
      female: true
    }
  },
  {
    name: "Caesar King",
    img: "caesar.png",
    opts: {
      faction: ['soc'],
      female: true
    }
  },
  {
    name: "Burnice White",
    img: "burnice.png",
    opts: {
      faction: ['soc'],
      female: true
    }
  },
  {
    name: "Lighter",
    img: "lighter.png",
    opts: {
      faction: ['soc'],
      male: true
    }
  },
  {
    name: "Pulchra",
    img: "pulchra.png",
    opts: {
      faction: ['soc'],
      female: true,
      unreleased: true
    }
  },
  {
    name: "Soldier 11",
    img: "s11.png",
    opts: {
      faction: ['ob'],
      female: true
    }
  },
  {
    name: "Anby (Silver Soldier)",
    img: "anby_obol.png",
    opts: {
      faction: ['ob'],
      female: true,
      unreleased: true
    }
  },
  {
    name: "Trigger",
    img: "trigger.png",
    opts: {
      faction: ['ob'],
      female: true,
      unreleased: true
    }
  },
  {
    name: "Zhu Yuan",
    img: "zhu_yuan.png",
    opts: {
      faction: ['ps'],
      female: true,
    }
  },
  {
    name: "Qingyi",
    img: "qingyi.png",
    opts: {
      faction: ['ps'],
      female: true,
    }
  },
  {
    name: "Jane Doe",
    img: "jane.png",
    opts: {
      faction: ['ps'],
      female: true,
    }
  },
  {
    name: "Seth",
    img: "seth.png",
    opts: {
      faction: ['ps'],
      male: true,
    }
  },
  {
    name: "Hoshimi Miyabi",
    img: "hoshimi.png",
    opts: {
      faction: ['s6'],
      female: true
    }
  },
  {
    name: "Soukaku",
    img: "soukaku.png",
    opts: {
      faction: ['s6'],
      female: true
    }
  },
  {
    name: "Tsukishiro Yanagi",
    img: "yanagi.png",
    opts: {
      faction: ['s6'],
      female: true
    }
  },
  {
    name: "Asaba Harumasa",
    img: "harumasa.png",
    opts: {
      faction: ['s6'],
      male: true
    }
  },
  {
    name: "Astra Yao",
    img: "astra.png",
    opts: {
      faction: ['sol'],
      female: true
    }
  },
  {
    name: "Evelyn Chevalier",
    img: "evelyn.png",
    opts: {
      faction: ['sol'],
      female: true
    }
  },
  {
    name: "Hugo Vlad",
    img: "hugo.png",
    opts: {
      faction: ['mkb'],
      male: true,
      unreleased: true,
    }
  },
  {
    name: "Vivian",
    img: "vivian.png",
    opts: {
      faction: ['mkb'],
      female: true,
      unreleased: true
    }
  },
  {
    name: "Howl",
    img: "howl.png",
    opts: {
      faction: ['npc'],
      male: true,
      npc: true
    }
  },
  {
    name: "General Chop",
    img: "chop.png",
    opts: {
      faction: ['npc'],
      male: true,
      npc: true
    }
  },
  {
    name: "Tinmaster",
    img: "tinmaster.png",
    opts: {
      faction: ['npc'],
      male: true,
      npc: true
    }
  },
  {
    name: "Elfy",
    img: "elfy.png",
    opts: {
      faction: ['npc'],
      female: true,
      npc: true
    }
  },
  {
    name: "Enzo",
    img: "enzo.png",
    opts: {
      faction: ['npc'],
      male: true,
      npc: true
    }
  },
  {
    name: "Susie",
    img: "susie.png",
    opts: {
      faction: ['npc'],
      female: true,
      npc: true
    }
  },
  {
    name: "Asha",
    img: "asha.png",
    opts: {
      faction: ['npc'],
      female: true,
      npc: true
    }
  },
  {
    name: "Orchidea",
    img: "orchidea.png",
    opts: {
      faction: ['npc'],
      female: true,
      npc: true
    }
  },
  {
    name: "Sjal",
    img: "sjal.png",
    opts: {
      faction: ['npc'],
      female: true,
      npc: true
    }
  },
  {
    name: "Travis",
    img: "travis.png",
    opts: {
      faction: ['npc'],
      male: true,
      npc: true
    }
  },
  {
    name: "Coco",
    img: "coco.png",
    opts: {
      faction: ['npc'],
      female: true,
      npc: true
    }
  },
  {
    name: "Venus",
    img: "venus.png",
    opts: {
      faction: ['npc'],
      female: true,
      npc: true
    }
  },
  {
    name: "Heddy",
    img: "heddy.png",
    opts: {
      faction: ['npc'],
      female: true,
      npc: true
    }
  },
  {
    name: "Bertha",
    img: "bertha.png",
    opts: {
      faction: ['npc'],
      female: true,
      npc: true
    }
  },
  {
    name: "Lyla",
    img: "lyla.png",
    opts: {
      faction: ['npc'],
      female: true,
      npc: true
    }
  },
  {
    name: "Orlenda",
    img: "orlenda.png",
    opts: {
      faction: ['npc'],
      female: true,
      npc: true
    }
  },
  {
    name: "Pavol Chuck",
    img: "pavol.png",
    opts: {
      faction: ['npc'],
      male: true,
      npc: true
    }
  },
  {
    name: "Big Daddy",
    img: "bigdaddy.png",
    opts: {
      faction: ['npc'],
      male: true,
      npc: true
    }
  },
  {
    name: "Pompey",
    img: "pompey.png",
    opts: {
      faction: ['npc'],
      male: true,
      npc: true
    }
  },
  {
    name: "Perlman",
    img: "perlman.png",
    opts: {
      faction: ['npc'],
      male: true,
      npc: true
    }
  },
  {
    name: "Officer Mewmew",
    img: "mewmew.png",
    opts: {
      faction: ['npc'],
      female: true,
      npc: true
    }
  },
  {
    name: "Gerant",
    img: "gerant.png",
    opts: {
      faction: ['npc'],
      male: true,
      npc: true
    }
  },
  {
    name: "Amy",
    img: "heddy.png",
    opts: {
      faction: ['npc'],
      female: true,
      npc: true
    }
  },
  {
    name: "Lilac",
    img: "lilac.png",
    opts: {
      faction: ['npc'],
      female: true,
      npc: true
    }
  },
  {
    name: "Heddy",
    img: "heddy.png",
    opts: {
      faction: ['npc'],
      female: true,
      npc: true
    }
  },
  {
    name: "Kylie",
    img: "kylie.png",
    opts: {
      faction: ['npc'],
      female: true,
      npc: true
    }
  },
  {
    name: "Pepper",
    img: "pepper.png",
    opts: {
      faction: ['npc'],
      male: true,
      npc: true
    }
  },
  {
    name: "SAN-Z",
    img: "sanz.png",
    opts: {
      faction: ['npc'],
      male: true,
      npc: true
    }
  },
  {
    name: "Ray",
    img: "ray.png",
    opts: {
      faction: ['npc'],
      female: true,
      npc: true
    }
  },
  {
    name: "Ophelia",
    img: "ophelia.png",
    opts: {
      faction: ['npc'],
      female: true,
      npc: true
    }
  },
];
