# Programming Logic Practice

A small JavaScript number-guessing exercise using browser dialogs.

## What it does

The player enters a guess and receives a higher/lower hint until the target is found. The script tracks the number of attempts and displays a completion message.

The current target is **fixed in `app.js`**. It is not generated randomly.

## Learning focus

- Variables and comparison.
- Loops and conditionals.
- User input through `prompt`.
- Feedback through `alert`.
- Counting attempts.

## Try it locally

Clone or download this repository, then open [index.html](index.html) in a browser with JavaScript enabled.

No package manager, build step or server is required for the root exercise.

## Files

- [index.html](index.html): entry point.
- [app.js](app.js): guessing logic.
- [style.css](style.css): page presentation.
- [img](img): bundled visual material.

## Current limits

This is an introductory study exercise. The dialog-based flow has no dedicated handling for cancellation or invalid input. Automated tests and a CI workflow were not found in the reviewed tree.

The documentation was checked against the root `index.html` and `app.js`; the game was not executed during this review.

## Credits and rights

Bundled visual material retains its original authorship. No license file or complete asset-attribution record was present in the reviewed revision.
