/* make a variation of weight_conversion in web/js environment utilizing methods from weight_conversion.rb */
/* will purposely use strictly native js code for learning native js syntax
/* Revision on 171031
- Confirm all applicable data feeds to elements on page.
- Confirm calculations remained accurate in tranlation
- Fix loop efficiency along the way
- Make all functions display as desired.
*/

// in-browser debugging globals
    var somethingOff = 10; // if I set other than 0 i'm working on an error ###
    var logs = console.log; // terminal ~ console
    
////////////////////////////////////////////////////////////////////////////////

window.onload = function() {
    
    // a randomized dolly
    function dollyToggle() {
        var text_opts = ["This is more user friendly than the terminal.", "A great way to experience development in contrast.","Great, I remembered a good amount and learned a bit more!","Why not simply just jQuery..?","I suppose just so the core scripting language is not too foreign to work on."];
        var text_opts_cnt = text_opts.length;
        var high = text_opts_cnt;
        var sel_opts = Math.floor((Math.random() * high) + 0);
    
        var content = text_opts[sel_opts];
        
        var sec2 = document.getElementById("sec_2");
        var prgrph = document.createElement("p");
        prgrph.setAttribute("id","dollyPlace");
        var text = document.createTextNode(content);
        var find = document.getElementById("dollyPlace");
        prgrph.appendChild(text);
        if (find === null) {
            sec2.appendChild(prgrph);
        } else {
            find.innerHTML = text.textContent;
        }
    }

    var dollyButton = document.getElementById('dollyToggle');
    dollyButton.onclick = function() {
        dollyToggle();
    }, dollyToggle();
    // end dolly toggle

/* easy way to remind myself of a known issue... */
    var x = document.getElementsByClassName('error');
    x = x[0];
//    logs( x + "get DOM element");
    if (somethingOff != 0) {
        logs("error to process");
        x.style.color = "red";
        x.style.display = "block";
    } else { x.style.display = "none";}

////////////////////////////////////////////////////////////////////////////////

    var body_wght_input = document.getElementById("body_wght");
    var wght_input = body_wght_input;
    
/* elements to feed data to */
    var frmFeed = document.getElementsByClassName("frmFeed");
/* elements added by JS */
    var txtResponse = document.createTextNode("Text response feeds here. Does this render well..?");
    frmFeed[0].appendChild(txtResponse);
//

    /* automation from input */
    wght_input.oninput = function() {
        x = this.value;
        var bodyweight = x;

        // when puts into form input
        this.onchange = function() {
            frmFeed[0].innerHTML = "";
            recc_wght();
            getadd();
            whatsTotal();
            resetButton.click();
        };
        
    /* weight formula input */
    
        const kg = 2.20462262; /*  #kg for a lb*/
        const barweight = (20 * kg);
        var ifpre = window.result; if (isNaN(ifpre)) {ifpre = 0;}
        var curr_wght_set_amt = ifpre + barweight;
        var curr_wght = barweight;
        logs("The bar starts at: " + barweight +"lbs or 20kg");
        const wght_opts = [2.5,5,10,25,35,45];
        var wght_opts_cnt = wght_opts.length;
        const wght_pair_cnt = 7; //how many pairs of weights available
        var recc = 1.6; //recommended maximum lift by percentage
        recc = (recc * bodyweight);
        var over = recc - curr_wght_set_amt + barweight;

    /* end weight formula info */
    
        // live input functions
        
            frmFeed[0].style.color = "red";
            if (isNaN(x)) {
                frmFeed[0].innerHTML = "Enter #lbs only!";
            } else if (x > 0 && x < 400) {
                frmFeed[0].style.color = "skyblue";
                frmFeed[0].innerHTML =  x + " lbs"; // to feed form value as form input
            } else {
                frmFeed[0].innerHTML =  "This weight seems beyond human! Please enter a proper bodyweight value."; // to feed form value as form input
            }
        
    function recc_wght() {
        var reccTxt = document.createTextNode("<span>"+ recc.toFixed(2) + "</span>" + "lbs recommended max weight based on a bodyweight of " + bodyweight + "lbs.");
        logs(recc + "lbs maximum weight recommended based on a bodyweight of " + bodyweight + "lbs.");
        const target = document.getElementsByClassName('first');
        const prgrph = document.createElement('p');
        prgrph.appendChild(reccTxt);
            if (target.length < 1) {
                target.appendChild(prgrph);}
            else {
                target[0].innerHTML= reccTxt.textContent;
            }
    }
    
    function whatsTotal() {
        getadd();
        var arr_cnt = curr_wght_plus.length + 1;
            for (i = 0; i < arr_cnt; i++)  {
                if (i===0){continue}
                var z; if (isNaN(z)) { z = 0;}
                if (i===1){z = 0;}
                var x = curr_wght_plus[i-1];
//                logs(x + " What's NaN?");
                z = z + x;
                window.result = z;// + curr_wght_plus[0];
            }

                curr_wght_set_amt = window.result;
                
                logs(curr_wght_set_amt + " curr_wght_set");
                logs(curr_wght_plus[0] + " curr_wght array first item");

            // push current curr_wght number to DOM
            var pg_curr_barwght = document.getElementById('pg_curr_barwght');
            var pg_curr_barwght_cont = document.createTextNode(curr_wght_set_amt.toFixed(2) + "lbs is current set weight."); // active without asking
            logs(tadd + " value of tadd");
            pg_curr_barwght_cont = pg_curr_barwght_cont.textContent;
                if (pg_curr_barwght < 1) {
                    pg_curr_barwght.appendChild(pg_curr_barwght_cont);
                } else {
                    pg_curr_barwght.innerHTML = pg_curr_barwght_cont;
                }
                
        // if curr_wght exceeds recommended or all weight available
        if (curr_wght_set_amt >= all_wghts || all_wghts < recc) {
            add_wght.push("No");
        } else {
        getadd();
            //push all add_wght data to DOM
    //        var pg_add_wght = document.getElementById('pg_add_wght');
            var pg_add_wght_txt = document.getElementById('add_wght');
            var pg_add_wght_cont = document.createTextNode("Add more weight? " + tadd + "lbs is next logical pair to add.");
        
                pg_add_wght_cont = pg_add_wght_cont.textContent;
                    if (pg_add_wght_txt < 1) {
                        pg_add_wght_txt.appendChild(pg_add_wght_cont);
                    } else {
                        pg_add_wght_txt.innerHTML = pg_add_wght_cont;
                    }
                }
        }
        
    function getadd() {
    for (let a = 5; a >= 0; a--) {
        tadd = wght_opts_3[a];
        logs(a +" value of getadd");
        if ((curr_wght_set_amt + tadd) < recc) {
            return tadd; // good to know... same result #break or #return ends loop
        }
    }
    }

    ////////////////////////////////////////////////////////////////////////////

    var wght_opts_2 = [];
    var wght_opts_3 = [];

    var i = 0; //multiplies original array items to available amount
    x = 0;
        while (i < wght_opts_cnt) {
            for (x=0; x < wght_pair_cnt; x++) {
                var wght_item = wght_opts[i];
                wght_opts_2.push(wght_item);
            }
//        logs(wght_opts_2);
        i+=1;
        }        
    i=0; // conform original array for paired weights
        while (i < wght_opts_cnt) {
            x = wght_opts[i];
            x = x*2;
            wght_opts_3.push(x);
            i+= 1;            
        }
        logs(wght_opts_3);
        
    //calculate total lbs of all available weights
    var all_wghts = 0;
    var wght_items_cnt = wght_opts_2.length;
        for (i==0; i < wght_items_cnt; i++) {
            x = wght_opts_2[i];
            all_wghts = all_wghts + x;
            y = all_wghts;
        }
        
    logs(y + "lbs Total weights available in gym.");

        //push all weights data to DOM
        var pg_all_wghts = document.getElementById('pg_all_wghts');
        var pg_all_wghts_cont = document.createTextNode(y + "lbs Total weights available in gym.");
        if (recc > all_wghts || curr_wght_set_amt >= all_wghts) {
            pg_all_wghts_cont = document.createTextNode("Your reccommended maximum of " + recc + "lbs is more than the " + all_wghts + "lbs available in the gym!");
        }
            pg_all_wghts_cont = pg_all_wghts_cont.textContent;
        if (pg_all_wghts < 0) {
            pg_all_wghts.appendChild(pg_all_wghts_cont);
        } else {
            pg_all_wghts.innerHTML = pg_all_wghts_cont;
        }

    // starts by comparing current curr_wght to recommended and available max
    var add_wght= ["No", "Yes"];
    var tadd = 0; //will be the next set of weights to add

        //push over value to DOM
        var pg_over = document.getElementById('pg_over');
        pg_over.style.color = "purple";
        if (over > 0) {
            var pg_over_cont = document.createTextNode(over.toFixed(1) + "lbs less than our recommended max lift.");
        } else {
            pg_over_cont = document.createTextNode(over.toFixed(1) + "lbs more than our recommended max lift.");
        }
        pg_over_cont = pg_over_cont.textContent;
        if (pg_over === null) {
            pg_over.appendChild(pg_over_cont);
        } else {
            pg_over.innerHTML = pg_over_cont;
        }

    var arr_lst = add_wght.length - 1; // alt for last arr[-#] for JavaScript
    
    while (all_wghts > 0 && recc < all_wghts || (add_wght[arr_lst] === "Yes")) {
        var y = curr_wght_set_amt;

     //  which set of weights to add via 'tadd' based on set limit
    
        var curr_wght_plus = [];
        curr_wght_plus.push(barweight);
        logs(curr_wght_plus);
    
        getadd();
        whatsTotal();
        break;
        
    } // end while loop
    
        
        var yesButton = document.getElementById("yes");
            yesButton.onclick = function() {
            if (all_wghts > curr_wght_set_amt && recc > curr_wght_set_amt) {
                whatsTotal();

                    //sync with over value to DOM 
                    var pg_over = document.getElementById('pg_over'); over -= tadd;
                    pg_over.style.color = "purple";
                    
                    if (over > 0) {
                        var pg_over_cont = document.createTextNode(over.toFixed(1) + "lbs less than our recommended max lift.");
                    } else {
                        pg_over_cont = document.createTextNode(over.toFixed(1) + "lbs more than our recommended max lift.");
                    }

                    pg_over_cont = pg_over_cont.textContent;
                        if (pg_over === null) {
                            pg_over.appendChild(pg_over_cont);
                        } else {
                            pg_over.innerHTML = pg_over_cont;
                        }

                logs(over + " this is over amount.");
                logs(curr_wght + ' current weight feed.');
                logs(recc + ' recc weight feed.');
                add_wght.push("Yes");
                curr_wght_plus.push(tadd);
                gfxExpand();
                
                } else {add_wght.push("No");}
                whatsTotal();
            };
            
        function gfxExpand() {
                var gfx_barbell = document.getElementById("gfx_barbell");
                var gfx_barbell_2 = document.getElementById("gfx_barbell_2");
                if (tadd === 90) {
                    var curr_gfx_wdth = window.getComputedStyle(gfx_barbell, null).getPropertyValue("width");
                    let a = curr_gfx_wdth;
                    logs(a + " current gfx width");
                    let b = a.replace("px", "");
                    var c = Number(b);
                    c = c + 86;
                    logs(c + " the value of sum");
                    gfx_barbell.style.width = (c +"px");
                } else {
                    curr_gfx_wdth = window.getComputedStyle(gfx_barbell_2, null).getPropertyValue("width");
                    let a = curr_gfx_wdth;
                    logs(a + " current gfx width");
                    let b = a.replace("px", "");
                    c = Number(b);
                    c = c + 56;
                    logs(c + " the value of sum");
                    gfx_barbell_2.style.width = (c +"px");    
                }
            }
            
        var noButton = document.getElementById("no");
            noButton.onclick = function() {
                add_wght.push("No");
                logs(add_wght);
                whatsTotal();
            };
            
        var removeButton = document.getElementById("remove");
            removeButton.onclick = function() {
                whatsTotal();
                if (curr_wght_plus.length > 1) {
                arr_lst = curr_wght_plus.length - 1; over += curr_wght_plus[arr_lst];                    
                curr_wght_plus.pop();
                }
                
                //sync with over value to DOM
                var pg_over = document.getElementById('pg_over');
                pg_over.color = "purple";
                if (over > 0) {
                    var pg_over_cont = document.createTextNode(over.toFixed(1) + "lbs less than our recommended max lift.");
                } else {
                    pg_over_cont = document.createTextNode(over.toFixed(1) + "lbs more than our recommended max lift.");
                }                
                pg_over_cont = pg_over_cont.textContent;
                pg_over.innerHTML = pg_over_cont;
                        
                gfxClose();
            };
            
        var resetButton = document.getElementById("reset"); // clear bar of weights
            resetButton.onclick = function() {
                while (curr_wght_plus.length > 1) {
                arr_lst = curr_wght_plus.length - 1; over += curr_wght_plus[arr_lst];
                curr_wght_plus.pop();}
                whatsTotal();
                
                //sync with over value to DOM 
                var pg_over = document.getElementById('pg_over');
                var pg_over_cont = document.createTextNode(over.toFixed(1) + "lbs less than our recommended max lift.");
                pg_over_cont = pg_over_cont.textContent;
                pg_over.innerHTML = pg_over_cont;
                
                document.getElementById("gfx_barbell").style.width = ("0px");
                document.getElementById("gfx_barbell_2").style.width = ("0px");
            };
            
        function gfxClose() {
            whatsTotal();
            var gfx_barbell = document.getElementById("gfx_barbell");
            var gfx_barbell_2 = document.getElementById("gfx_barbell_2");
            if (tadd === 90 ) {
                var curr_gfx_wdth = window.getComputedStyle(gfx_barbell, null).getPropertyValue("width");
                let a = curr_gfx_wdth;
                logs(a + " current gfx width");
                let b = a.replace("px", "");
                var c = Number(b) + 0;
                    if (c === 86) {
                        gfx_barbell.style.width = (0 + "px");
                    } else {
                        c = c - 86;
                        gfx_barbell.style.width = (c +"px");
                    }
            } else {
                curr_gfx_wdth = window.getComputedStyle(gfx_barbell_2, null).getPropertyValue("width");
                let a = curr_gfx_wdth;
                logs(a + " current gfx width");
                let b = a.replace("px", "");
                c = Number(b) + 0;
                    if (c === 56) {
                        gfx_barbell_2.style.width = ("0px");    
                    } else {
                        c = c - 56;
                logs(c + " the value of sum");
                gfx_barbell_2.style.width = (c +"px");                            
                    }
            }
        }

    var kgs = curr_wght_set_amt * kg; //convert lbs lifted to kgs
    logs("The highest recorded lift was " + curr_wght_set_amt.toFixed(0) + "lbs or "+ kgs +"kgs");
    
    }; // end active oninput 

}; // end onload function