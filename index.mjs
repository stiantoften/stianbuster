import fetch from "node-fetch";
import fs from "fs/promises";

const wl = await fs.readFile("wl.txt");

const list = String(wl).split("\n");

for (let i = 0; i < list.length; i++) {
  try {
    const res = await fetch(`http://agder-ikt70.uia.no:17003/${wl[i]}`);
    const text = await res.text();

    if (text !== "Nope not here!! Keep looking :D") {
      console.log(`check out: ${wl[i]}`);
    }
  } catch (e) {
    console.error(e);
  }
}
