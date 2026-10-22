# Sophie's Revision

Calm GCSE revision apps, one per subject, joined together by a landing page. Everything is plain web pages, so it runs in any modern browser with nothing to install.

**Open it:** https://sirlegend123.github.io/revision/

## What's here

| Folder | What it is |
| --- | --- |
| `index.html` | The landing page. One card per subject, showing how many cards are ready to check, plus XP and days in a row. It suggests the subject with the most cards waiting. |
| `maths/` | The Maths app: a built-in Ratio and Proportion topic, and topics you add yourself by copying instructions into Claude. |
| `history/` | The History app, for Edexcel GCSE History (1HI0). Paper 3, Option 31: Weimar and Nazi Germany, 1918–39. |
| `shared/style.css` | The shared look used by the landing page and History. |

All the apps share one set of comfort settings: background colour, light or dark, text size, letter spacing and sounds.

## How every subject works

- **Today's mission.** Up to 8 cards a day. Each card sits in one of five memory boxes and comes back after 1, 2, 4, 7 and then 14 days. A card that isn't known yet goes back to box 1.
- **Games:** Quick quiz, Flip cards, Match the words, and putting things in order.
- **Help on every card:** hints, tables or steps, memory hooks, and read aloud.
- **Saving:** progress is saved in the browser on this device. Each subject has a backup file in its settings for moving to another device.

## History: Weimar and Nazi Germany

The content follows the Edexcel specification (Issue 6), including the August 2024 erratum to key topic 3. It is in `history/germany.js`, so it can be checked and corrected in one place.

- **Four key topics:** The Weimar Republic 1918–29, Hitler's rise to power 1919–33, Nazi control and dictatorship 1933–39, and Life in Nazi Germany 1933–39. Each has fact cards (89 in all), key words, events to put in order, and the specification's own bullet points.
- **Timeline:** put events from 1918 to 1939 in date order. Dates appear as each one is placed.
- **Who's who:** match 19 people to what they did.
- **Exam practice for Paper 3.** It covers all six question types: Q1 inference, Q2 explain why, and Q3(a)–(d) on sources and interpretations. Each type has:
  - what the question asks
  - how the marks work
  - a writing frame (tap a sentence starter to add it to the answer)
  - a check list to tick
  - a colour-coded sample answer, showing which part earns which kind of mark

  Answers save as you type and can be copied to send to a teacher.

The practice sources and interpretations were written for this app in the style of the exam, and are labelled as not real documents. Marks per question follow the usual Edexcel Paper 3 pattern (4, 12, 8, 4, 4 and 16 + 4 SPaG), so it's worth checking them against the sample papers and mark schemes.

Paper 1 and Paper 2 options will be added once they're known.

## Adding a subject

1. Make a folder for it, for example `english/`, with its own `index.html`.
2. Have the app save a summary with `localStorage.setItem("sgr-sum-english", JSON.stringify({due, xp, streak, lastDay}))`.
3. Add it to the `SUBJECTS` list at the top of the landing page script in `index.html`.

## Publishing it (GitHub Pages)

1. In this repository on GitHub, open **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**, then branch `main` and folder `/ (root)`.
3. Save. After a minute or two the site is live at the link above.

The maths games are at https://sirlegend123.github.io/Educational-games/.
