import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import { franc, francAll } from 'franc';
const langs = require('langs');
const colors = require('colors');
// getting the input from the second index of the argument in the node
const input = process.argv[2];
// getting the input and use franc to detect the language
const langCode = franc(input);
// returns ISO 639-3 code to be redefined by langs
if (langCode === 'und') {
	console.log("SORRY, COULDN'T FIGURE OUT THE LANGUAGE! TRY WITH MORE SAMPLE TEXT".red);
} else {
	const language = langs.where('3', langCode);
	console.log(`The likeliest language is: ${language.name}`.bgMagenta);
}
