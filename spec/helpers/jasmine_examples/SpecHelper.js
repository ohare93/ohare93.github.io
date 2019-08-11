// beforeEach(function () {
//   jasmine.addMatchers({
//     toBePlaying: function () {
//       return {
//         compare: function (actual, expected) {
//           var player = actual;

//           return {
//             pass: player.currentlyPlayingSong === expected && player.isPlaying
//           }
//         }
//       };
//     }
//   });
// });



var jsdom = require('jsdom');
const { JSDOM } = jsdom;

const window = (new JSDOM('http://localhost:4000/tools/multi-search')).window;
global.window = window;
const { document } = global.window;
global.document = document;


//var R = global.R = require('../../../js/Multi-Search/Code.js');