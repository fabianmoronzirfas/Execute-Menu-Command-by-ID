// Copyright (c)  2013
// Fabian "fabiantheblind" Morón Zirfas
// Permission is hereby granted, free of charge, to any
// person obtaining a copy of this software and associated
// documentation files (the "Software"), to deal in the Software
// without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense,
// and/or sell copies of the Software, and to  permit persons to
// whom the Software is furnished to do so, subject to
// the following conditions:
// The above copyright notice and this permission notice
// shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
// OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
// IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF  CONTRACT,
// TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTIO
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

// see also http://www.opensource.org/licenses/mit-license.php

// check out this post
// http://aenhancers.com/viewtopic.php?f=8&t=889
//

(function(thisObj){
// basic panel
run(thisObj);

 function run(thisObj){
var script_file = File($.fileName); // get the location of the scriptfile
var script_file_path = script_file.path; // get the path
// this is global

data =  {
  "script_version":0.1,
  "website":"https://github.com/fabiantheblind/Execute-Menu-Command-by-ID",
  "issue_tracker":"https://github.com/fabiantheblind/Execute-Menu-Command-by-ID/issues",
      "script_file" :script_file, // get the location of the    scriptfile
    "script_file_path" : script_file_path, // get the path
    "verison_history" : [
 "* 0.1 initial version"
],
    'id':8000 /* this is execute script */,

  icon_info :"\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1E\x00\x00\x00\x19\b\x06\x00\x00\x00&5\u009E\x1A\x00\x00\x01\x1CIDATx\u00DA\u00EDT;\n\u0083@\x14\u00F4\x009L\x0E\u00E0%\u0084\x1C#E\u00FA\x14jkcg\u00B0\u00CA\x11R\u00E4\x066i\u00C4^,,\u00B4K\x11p]\u00FC\x15f\x07\x14\u0096e\r\u00C1U\u0092\u00C2\u0081\u00D78\u00F3ftV\u00D56l\u00F8\x17\u00E8\u0086a\u00B8\u008E\u00E3\u00A4\u00FC\u00E0\x1A\u00B85\x02w0\u008F\u00A2\u0088\x14E\u00D1\u00CB\x06\x1C4\u00D0.\x16j\u00DB\u00F6\x1D\u00E6\u00DF\f\u00B4\u008B\u00A4\u00B2*O\u00B2\x00BHG)}\u00C9\u00B8#\u0083\u00F2\u00D3N\u00D5\u009B\u00E7\u00F9-\fC}\u00AAv\u00EC\u00AA<\u00ED\u00E1\u00D3\u0099\u00FA\u00BE\u009FM\u00F1\u00D8\u009D\x1D\u00CC\f,\u0099iUU\u008F\u00B6m\u00AF\u0098\x0F\u00E7m\u00A9\x04\u00BB2S\u00D34/\u008C\u00DEC\u00B3r\u00B0\u00DCx\u00CD`\u00EB'\u00C1u]K_.J\u00E9\u0093q\u00A7A\u0093\u00E2\u00D3\x125\u00D8\u009D\x1D\u00DC\u00F7\u00FD\u00AE,K\"\u009Az\u009Ew\u00C6\x19\u008F\x13\u00C7q\u00C6\u00F3\u00D8\u00C1\u00AE\u00A6\u0082\u00A6i\u008Ebp\u0092$U\x10\x04\u00AFqD\x1E;\u00BC\u0087J\u00E5_\u00FF2\u00A1\x15\u00F7\u0095*\u00EF\u00BA\u00CE\x15k\x17\u00EB\u0085F^\u00B1\u00FA\r\u00E80\u00C7\x0B\u00C5\u00CF\x10\u00A8k\x1B6px\x03d\u00E9\u00E3d2q\u00D9)\x00\x00\x00\x00IEND\u00AEB`\u0082"
};
data.images_binary = [data.icon_info];

data.cmdListEn = [
{"appVersions":[8],"title":"File New","id":2264},
{"appVersions":[8,9,10,11,12],"title":"Open Project","id":3},
{"appVersions":[8,9,10,12],"title":"Open Recent Projects","id":2284},
{"appVersions":[8,9,10,11,12],"title":"Browse...","id":3689},
{"appVersions":[8,9,10,11,12],"title":"Browse Template Projects...","id":3692},
{"appVersions":[8,9,10,11,12],"title":"Clos","id":4},
{"appVersions":[8,9,10,11,12],"title":"Close Project","id":3154},
{"appVersions":[8,9,10,11,12],"title":"Save","id":5},
{"appVersions":[8,9,10,11,12],"title":"Save As...","id":6},
{"appVersions":[8,9,10,11,12],"title":"Save a Copy...","id":2166},
{"appVersions":[8,9,10,11,12],"title":"Increment and Save","id":3088},
{"appVersions":[8,9,10,11,12],"title":"Revert","id":7},
{"appVersions":[8,9,10,11,12],"title":"Import","id":2105},
{"appVersions":[8,9,10,11,12],"title":"Import Recent Footage","id":2283},
{"appVersions":[8,9,10,11,12],"title":"Export","id":2494},
{"appVersions":[8,9,10,11,12],"title":"Find...","id":2607},
{"appVersions":[8,9,10,11,12],"title":"Find Next","id":2608},
{"appVersions":[8,9,10,11,12],"title":"Add Footage to Comp","id":2005},
{"appVersions":[8,9,10,11,12],"title":"New Comp from Selection...","id":2796},
{"appVersions":[8,9,10,11,12],"title":"Consolidate All Footage","id":2107},
{"appVersions":[8,9,10,11,12],"title":"Remove Unused Footage","id":2109},
{"appVersions":[8,9,10,11,12],"title":"Reduce Project","id":2735},
{"appVersions":[8,9,10,11,12],"title":"Collect Files...","id":2482},
{"appVersions":[8,9,10,11,12],"title":"Watch Folder...","id":2457},
{"appVersions":[8,9,10,11,12],"title":"Create Proxy","id":2777},
{"appVersions":[8,9,10,11,12],"title":"Set Proxy","id":2106},
{"appVersions":[8,9,10,11,12],"title":"Interpret Footage","id":2102},
{"appVersions":[8,9,10,11,12],"title":"Replace Footage","id":2237},
{"appVersions":[8,9,10,11,12],"title":"Reload Footage","id":2257},
{"appVersions":[8,9,10,11,12],"title":"Reveal in Explorer","id":2562},
{"appVersions":[8,9,10,11,12],"title":"Reveal in Bridge","id":3690},
{"appVersions":[8,9,10,11,12],"title":"Project Settings...","id":2611},
{"appVersions":[8,9,10,11,12],"title":"Page Setup...","id":8},
{"appVersions":[8,9,10,11,12],"title":"Print...","id":9},
{"appVersions":[8,9,10,11,12],"title":"Quit","id":1},

/* Scripts */
{"appVersions":[8,9,10,11,12],"title":"Execute Scriptfile...","id":8000},
/* Edit */
{"appVersions":[8,9,10,11,12],"title":"Undo","id":16},
{"appVersions":[8,9,10,11,12],"title":"Redo","id":2035},
{"appVersions":[8,9,10,11,12],"title":"History","id":2995},
{"appVersions":[8,9,10,11,12],"title":"Cut","id":18},
{"appVersions":[8,9,10,11,12],"title":"Copy","id":19},
{"appVersions":[8,9,10,11,12],"title":"Copy Expression Only","id":53},
{"appVersions":[8,9,10,11,12],"title":"Paste","id":20},
{"appVersions":[8,9,10,11,12],"title":"Clear","id":21},
{"appVersions":[8,9,10,11,12],"title":"Duplicate","id":2080},
{"appVersions":[8,9,10,11,12],"title":"Split Layer","id":2158},
{"appVersions":[8,9,10,11,12],"title":"Lift Work Area","id":2613},
{"appVersions":[8,9,10,11,12],"title":"Extract Work Area","id":2614},
{"appVersions":[8,9,10,11,12],"title":"Select All","id":23},
{"appVersions":[8,9,10,11,12],"title":"Deselect All","id":2004},

{"appVersions":[8,9,10,11,12],"title":"Label","id":2358},
{"appVersions":[8,9,10,11,12],"title":"Purge","id":2370},
{"appVersions":[8,9,10,11,12],"title":"Edit Original...","id":2142},
{"appVersions":[8,9,10,11,12],"title":"Edit in Adobe Audition","id":3697},
{"appVersions":[8,9,10,11,12],"title":"Edit in Adobe Sound booth","id":3761},
{"appVersions":[8,9,10,11,12],"title":"Templates","id":2265},
{"appVersions":[8,9,10,11,12],"title":"Preferences","id":2079},

{"appVersions":[8,9,10,11,12],"title":"Layer New","id":2606},
{"appVersions":[8,9,10,11,12],"title":"Layer Settings","id":2021},
{"appVersions":[8,9,10,11,12],"title":"Open Layer","id":2015},
{"appVersions":[8,9,10,11,12],"title":"Open So urce Window","id":2523},
{"appVersions":[8,9,10,11,12],"title":"Mask","id":2040},
{"appVersions":[8,9,10,11,12],"title":"Mask and Shape Path","id":3745},
{"appVersions":[8,9,10,11,12],"title":"Quality","id":2041},
{"appVersions":[8,9,10,11,12],"title":"Switches","id":2053},
{"appVersions":[8,9,10,11,12],"title":"Transform","id":2020},
{"appVersions":[8,9,10,11,12],"title":"Time","id":3155},
{"appVersions":[8,9,10,11,12],"title":"Frame Blending","id":2289},
{"appVersions":[8,9,10,11,12],"title":"3D Layer","id":2541},
{"appVersions":[8,9,10,11,12],"title":"Guide Layer","id":3081},
{"appVersions":[8,9,10,11,12],"title":"Add Marker","id":2157},
{"appVersions":[8,9,10,11,12],"title":"Preserve Transparency","id":2190},
{"appVersions":[8,9,10,11,12],"title":"Blen ding Mode","id":2162},
{"appVersions":[8,9,10,11,12],"title":"Next Blending Mode","id":2781},
{"appVersions":[8,9,10,11,12],"title":"Previous Blending Mode","id":2782},
{"appVersions":[8,9,10,11,12],"title":"Track Matte","id":2269},
{"appVersions":[8,9,10,11,12],"title":"Layer Styles","id":3739},
{"appVersions":[8,9,10,11,12],"title":"Bring to Front","id":2016},
{"appVersions":[8,9,10,11,12],"title":"Bring Forward","id":2018},
{"appVersions":[8,9,10,11,12],"title":"Send Backward","id":2019},
{"appVersions":[8,9,10,11,12],"title":"Send to Back","id":2017},
{"appVersions":[8,9,10,11,12],"title":"Adobe Encore","id":3082},
{"appVersions":[8,9,10,11,12],"title":"Create Outlines","id":2933},
{"appVersions":[8,9,10,11,12],"title":"Auto-trace...","id":3044},
{"appVersions":[8,9,10,11,12],"title":"Pre-compose...","id":2071},

/* Composition */
{"appVersions":[8,9,10,11,12],"title":"New Composition...","id":2000},
{"appVersions":[8,9,10,11,12],"title":"Composition Settings...","id":2007},
{"appVersions":[8,9,10,11,12],"title":"Background Color...","id":2036},
{"appVersions":[8,9,10,11,12],"title":"Set Poster Time","id":2012},
{"appVersions":[8,9,10,11,12],"title":"Trim Comp to Work Area","id":2360},
{"appVersions":[8,9,10,11,12],"title":"Crop Comp to Region of Interest","id":2997},
{"appVersions":[8,9,10,11,12],"title":"Add to Render Queue","id":2161},
{"appVersions":[8,9,10,11,12],"title":"Add Output Module","id":2154},
{"appVersions":[8,9,10,11,12],"title":"Preview","id":2131},
{"appVersions":[8,9,10,11,12],"title":"Save Frame As","id":2233},
{"appVersions":[8,9,10,11,12],"title":"Make Movie...","id":2006},
{"appVersions":[8,9,10,11,12],"title":"Pre-render...","id":2780},
{"appVersions":[8,9,10,11,12],"title":"Save RAM Preview...","id":2125},
{"appVersions":[8,9,10,11,12],"title":"Comp Flowchart View","id":2258},

/* Layer */
{"appVersions":[8,9,10,11,12],"title":"New","id":2606},
{"appVersions":[8,9,10,11,12],"title":"Layer Settings...","id":2021},
{"appVersions":[8,9,10,11,12],"title":"Open Layer","id":2015},
{"appVersions":[8,9,10,11,12],"title":"Open Source Window","id":2523},
{"appVersions":[8,9,10,11,12],"title":"Mask","id":2040},
{"appVersions":[8,9,10,11,12],"title":"Mask and Shape Path","id":3745},
{"appVersions":[8,9,10,11,12],"title":"Quality","id":2041},
{"appVersions":[8,9,10,11,12],"title":"Switches","id":2053},
{"appVersions":[8,9,10,11,12],"title":"Transform","id":2020},
{"appVersions":[8,9,10,11,12],"title":"Time","id":3155},
{"appVersions":[8,9,10,11,12],"title":"Frame Blending","id":2289},
{"appVersions":[8,9,10,11,12],"title":"3D Layer","id":2541},
{"appVersions":[8,9,10,11,12],"title":"Guide Layer","id":3081},
{"appVersions":[8,9,10,11,12],"title":"Add Marker","id":2157},
{"appVersions":[8,9,10,11,12],"title":"Preserve Transparency","id":2190},
{"appVersions":[8,9,10,11,12],"title":"Blen ding Mode","id":2162},
{"appVersions":[8,9,10,11,12],"title":"Next Blending Mode","id":2781},
{"appVersions":[8,9,10,11,12],"title":"Previous Blending Mode","id":2782},
{"appVersions":[8,9,10,11,12],"title":"Track Matte","id":2269},
{"appVersions":[8,9,10,11,12],"title":"Layer Styles","id":3739},
{"appVersions":[8,9,10,11,12],"title":"Bring to Front","id":2016},
{"appVersions":[8,9,10,11,12],"title":"Bring Forward","id":2018},
{"appVersions":[8,9,10,11,12],"title":"Send Backward","id":2019},
{"appVersions":[8,9,10,11,12],"title":"Send to Back","id":2017},
{"appVersions":[8,9,10,11,12],"title":"Adobe Encore","id":3082},
{"appVersions":[8,9,10,11,12],"title":"Create Outlines","id":2933},
{"appVersions":[8,9,10,11,12],"title":"Auto-trace...","id":3044},
{"appVersions":[8,9,10,11,12],"title":"Pre-compose...","id":2071},

/* View */
{"appVersions":[8,9,10,11,12],"title":"New Viewer","id":2039},
{"appVersions":[8,9,10,11,12],"title":"Zoom In","id":2092},
{"appVersions":[8,9,10,11,12],"title":"Zoom Out","id":2093},
{"appVersions":[8,9,10,11,12],"title":"Resolution","id":2037},
{"appVersions":[8,9,10,11,12],"title":"Use Display Color Management","id":3704},
{"appVersions":[8,9,10,11,12],"title":"Simulate Output","id":3703},
{"appVersions":[8,9,10,11,12],"title":"Show Rulers","id":2280},
{"appVersions":[8,9,10,11,12],"title":"Show Guides","id":2274},
{"appVersions":[8,9,10,11,12],"title":"Snap to Guides","id":2286},
{"appVersions":[8,9,10,11,12],"title":"Lock Guides","id":2275},
{"appVersions":[8,9,10,11,12],"title":"Clear Guides","id":2276},
{"appVersions":[8,9,10,11,12],"title":"Show Grid","id":2277},
{"appVersions":[8,9,10,11,12],"title":"Snap to Grid","id":2278},
{"appVersions":[8,9,10,11,12],"title":"View Options...","id":2776},
{"appVersions":[8,9,10,11,12],"title":"Show Layer Controls","id":2435},
{"appVersions":[8,9,10,11,12],"title":"Reset 3D View","id":2642},
{"appVersions":[8,9,10,11,12],"title":"Switch 3D View","id":2625},
{"appVersions":[8,9,10,11,12],"title":"Assign 3D View Shortcut","id":2624},
{"appVersions":[8,9,10,11,12],"title":"Switch to Last 3D View","id":2703},
{"appVersions":[8,9,10,11,12],"title":"Look at Selected Layers","id":2834},
{"appVersions":[8,9,10,11,12],"title":"Look at All Layers","id":2835},
{"appVersions":[8,9,10,11,12],"title":"Goto Time...","id":2076},


/* Effect */
{"appVersions":[8,9,10,11,12],"title":"Effect Controls","id":2163},
{"appVersions":[8,9,10,11,12],"title":"Last Effect","id":2452},
{"appVersions":[8,9,10,11,12],"title":"Remove All","id":2072},

/* Window */
{"appVersions":[8,9,10,11,12],"title":"Work space","id":2738},
{"appVersions":[8,9,10,11,12],"title":"Assign Workspace Shortcut","id":3707}
];

///   THIS WILL CHECK IF PANEL IS DOCKABLE OR FLAOTING WINDOW
var win   = buildUI(thisObj );
if ((win !== null) && (win instanceof Window)) {
    win.center();
    win.show();
} // end if win  null and not a instance of window

 function buildUI (thisObj  ) {
        var H = 25; // the height
        var W = 30; // the width
        var G = 5; // the gutter
        var x = G;
    var win = (thisObj instanceof Panel) ? thisObj :  new Window('palette', 'executeCommand',[0,0,G*3+W*4,G*2+H*2],{resizeable: true,name:"executeCommand"});

    if (win !== null) {
        var iconfiles = [];
        for(var i=0; i < data.images_binary.length; i++) {
            iconfiles[i] = new File(data.script_file_path + "/xxxiconfilesxxx"+i+ ".png");
            iconfiles[i].encoding = "BINARY";
            iconfiles[i].open( "w" );
            iconfiles[i].write( data.images_binary[i] );
            iconfiles[i].close();
        }

        var y = G;
        win.command_id_etext = win.add('edittext',[x,y,x+W*3,y + H],8000);
        x+=W*3+G;

        win.help_bttn = win.add('iconbutton',[x,y,x+W*1,y+H],iconfiles[0]);
        x=G;
        y+=H+G;
        // win.check_box = win.add('checkbox',[x,y,x+W*2,y + H],'check');
        // win.check_box.value = metaObject.setting1;
        win.do_it_button = win.add('button', [x ,y,x+W*4+G*1,y + H], 'execute command');
        // win.up_button = win.add('button', [x + W*5+ G,y,x + W*6,y + H], 'Up');

        // win.check_box.onClick = function (){
        //     alert("check");
        // };
        win.command_id_etext.onChanging = function (){

          data.id = parseTextToInteger( this.text, "sorry this is not a value",0);
        };

        win.do_it_button.onClick = function () {
            execute_command();
      };

              win.help_bttn.onClick = function(){
            help_panel('execute_command.jsx v' + data.script_version + ' Help');
        };

            for(var j=0; j< iconfiles.length; j++) {
            iconfiles[j].remove();
            }
    }
    return win;
}

function help_panel(title){
var helpText = [];
helpText.push('Execute Command quick help. For further infos go to ' + data.website);
helpText.push('If you run into any bugs please report an issue @ '+ data.issue_tracker);
helpText.push('List is taken from aenhancers post http://aenhancers.com/viewtopic.php?f=8&t=889');

for(var i = 0; i < data.cmdListEn.length;i++){
  var item = data.cmdListEn[i];
  var versionStr = "Works in these app versions:";
  for(var j =0; j < item.appVersions.length;j++){
    switch(item.appVersions[j]){
      case 8:
    versionStr += " CS3, ";
      break;
      case 9:
      versionStr+= " CS4, ";
      break;
      case 10:
      versionStr+= " CS5, CS5.5, ";
      break;
      case 11:
      versionStr+= " CS6, ";
      break;
      case 12:
      versionStr+= " CC ";
      break;
      }
    }

    helpText.push(versionStr +" "+ item.title + " --> " + String(item.id) );
}

helpText.push('');


helpText.push('VERSION HISTORY:');
for(var hist = 0; hist < data.verison_history.length; hist++){
  helpText.push(data.verison_history[hist]);
}



var diag                     = new Window ('dialog',title + ''); // the new window
    diag.preferredSize       =    {'width':600,'height':130};
    diag.supergroup                 = diag.add('group',undefined,'');
    diag.supergroup.orientation     ='column';
    diag.rowhelptext = diag.supergroup.add('group');

    diag.rowhelptext.edittxt = diag.rowhelptext.add('edittext',undefined,helpText.join('\n'),{
                                        multiline:true,
                                        scrolling: true});
    diag.rowhelptext.edittxt.preferredSize = {'width':600,'height':400};

    /* ----------------------------------------------- */
    diag.rowconfirm            = diag.supergroup.add ('group');
    diag.rowconfirm.orientation = 'row';
    diag.rowconfirm.alignment   = 'right';
// ------------ the comfirm or cancel buttons ------------
    diag.rowconfirm.ok               = diag.rowconfirm.add ('button', undefined, 'OK');
    diag.rowconfirm.cancel           = diag.rowconfirm.add ('button', undefined, 'Cancel');
   if (diag.show () == 1){
    return true;
  }else{
    return false;

  }
}

function resetValIfNAN(val,resetVal, theErrorMessage){
    if(isNaN(val) === true){
    val = resetVal;
    // alert(theErrorMessage);
    }
  return val;
}

/**
 * [parseTextToInteger description]
 * @param  {[type]} theText         [description]
 * @param  {[type]} theErrorMessage [description]
 * @param  {[type]} resetVal        [description]
 * @return {[type]}
 */
function parseTextToInteger(theText,theErrorMessage,resetVal){
  var val = Math.abs( parseInt(theText, 10));
    val = resetValIfNAN(val,resetVal,theErrorMessage);
  return val;
}

function execute_command(){
// "in function main. From here on it is a straight run"
//

   //  var curComp = app.project.activeItem;
   // if (!curComp || !(curComp instanceof CompItem)){
   //      alert('please select a comp');
   //      return;
   //  }



    // if(curComp.selectedLayers.length < 1){
    //     alert('Please select at least one layer');
    // return;
    //     }


    // app.beginUndoGroup('execute command ' + data.id);

    try{
      app.executeCommand(data.id);
      }catch(err){
        alert("Execution of command " + data.id+ " did not work\n" + err);
      }

// var props = curComp.selectedProperties

    // app.endUndoGroup();
  }
 }// close run

})(this);