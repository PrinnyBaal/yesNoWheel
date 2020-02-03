

// if (localStorage.getItem("savedChars") === null) {
//   localStorage.setItem('savedChars', JSON.stringify(savedChars));
// }
//
// if (localStorage.getItem("activeChar") === null) {
//   localStorage.setItem('activeChar', 0);
// }

// var theWheel = new Winwheel({
//     'numSegments'       : 8,                 // Specify number of segments.
//     'outerRadius'       : 200,               // Set outer radius so wheel fits inside the background.
//     'drawText'          : true,              // Code drawn text can be used with segment images.
//     'textFontSize'      : 16,
//     'textOrientation'   : 'curved',
//     'textAlignment'     : 'inner',
//     'textMargin'        : 90,
//     'textFontFamily'    : 'monospace',
//     'textStrokeStyle'   : 'black',
//     'textLineWidth'     : 3,
//     'textFillStyle'     : 'white',
//     'drawMode'          : 'segmentImage',    // Must be segmentImage to draw wheel using one image per segemnt.
//     'segments'          :                    // Define segments including image and text.
//     [
//        {'image' : 'jane.png',  'text' : 'Jane'},
//        {'image' : 'tom.png',   'text' : 'Tom'},
//        {'image' : 'mary.png',  'text' : 'Mary'},
//        {'image' : 'alex.png',  'text' : 'Alex'},
//        {'image' : 'sarah.png', 'text' : 'Sarah'},
//        {'image' : 'bruce.png', 'text' : 'Bruce'},
//        {'image' : 'rose.png',  'text' : 'Rose'},
//        {'image' : 'steve.png', 'text' : 'Steve'}
//     ],
//     'animation' :           // Specify the animation to use.
//     {
//         'type'     : 'spinToStop',
//         'duration' : 5,     // Duration in seconds.
//         'spins'    : 8,     // Number of complete spins.
//         'callbackFinished' : null
//     }
// });
//
// // Vars used by the code in this page to do power controls.
// var wheelPower    = 0;
// var wheelSpinning = false;

let ci={
  dieRoll:function(dieSides){
    return Math.floor(Math.random()*dieSides)+1;
  },
  array_move:function(arr, old_index, new_index) {
    //https://stackoverflow.com/questions/5306680/move-an-array-element-from-one-array-position-to-another
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr; // for testing
  },
  checkCommonGround:function(array1, array2){
    //tests if array1 and 2 have ANY elements in common
    let commonGround=false;
    if (array1.length<array2.length){
      for (let i=0, len=array1.length; i<len; i++){
        if (array2.includes(array1[i])){commonGround=true; break;}
      }
    }else{
      for (let i=0, len=array2.length; i<len; i++){
        if (array1.includes(array2[i])){commonGround=true; break;}
      }
    }

    return commonGround;
  },
  copyToClipboard:(copyText)=>{
    /* Get the text field */


   /* Select the text field */

   let range = document.createRange();
   let selection=window.getSelection();
   range.selectNode(copyText);
   selection.removeAllRanges();
   selection.addRange(range);
   document.execCommand("copy");



   /* Alert the copied text */
   ci.fyiUser("Magic Word copied to clipboard");
 },
 fyiUser:(text)=>{
   $("#alertBanner").removeClass("activeAlert");
   $("#alertBanner").html(text);
   $("#alertBanner").addClass("activeAlert");
   setTimeout(removeBanner, 5000)

   function removeBanner(){
     $("#alertBanner").removeClass("activeAlert");
   }
 }

}



function resetStorage(){
  if (window.confirm("Do you really want to delete all your saved info?")) {
  localStorage.clear();
  location.reload();
}
}
