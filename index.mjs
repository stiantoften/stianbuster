import fetch from "node-fetch";
import fs from "fs/promises";

const wl = await fs.readFile("wl.txt");

String(wl)
  .split("\n")
  .map(async (link) => {
    try {
      const res = await fetch(`http://agder-ikt70.uia.no:17003/${link}`);
      const text = await res.text();

      if (text !== "Nope not here!! Keep looking :D") {
        console.log(`check out: ${link}`);
      }
    } catch (e) {
      console.error(e);
    }
  });
