import fetch from "node-fetch";
import fs from "fs/promises";

const wl = await fs.readFile("../gg.txt");

const list = String(wl).split("\n");

for (let i = 0; i < list.length; i++) {
  try {
    if (i % 1000 === 0) {
      console.log(`${i} attempts`);
    }
    const res = await fetch(`http://agder-ikt70.uia.no:17003/${list[i]}.txt`);
    const text = await res.text();
    //console.log(`JADDA: ${list[i]}`)

    if (text !== "Nope not here!! Keep looking :D") {
      console.log(`${text}, index: ${i}`);
      console.log(`check out: ${list[i]}`);
    }
  } catch (e) {
    console.error(e);
  }
}
