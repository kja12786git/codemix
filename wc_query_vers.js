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
var $ = window.jQuery;
    function errorHghLght() {
    /* easy way to remind myself of a known issue... */
        var x = $('.error');
//        x = x[0];
    //    logs( x + 'get DOM element');
        if (somethingOff != 0) {
            logs('error to process');
            x.css('color', 'red');
            x.css('display', 'block');
        } else { x.css('display', 'none');}
    }
    
    function dollyToggle() {
        var text_opts = ['This is more user friendly than the terminal.', 'A great way to experience development in contrast.','Great, I remembered a good amount and learned a bit more!','Why not simply just jQuery..?','I suppose just so the core scripting language is not too foreign to work on.'];
        var text_opts_cnt = text_opts.length;
        var high = text_opts_cnt;
        var sel_opts = Math.floor((Math.random() * high) + 0);
    
        var text = text_opts[sel_opts];
        
        var sec2 = $('#sec_2');
        var prgrph = $('<p id="dollyPlace"></p>');
        var find = $('#sec_2 > header > p');
        prgrph.append(text);
        if (find === null) {
            sec2.add(prgrph);
        } else {
            find.html(text);
        }
    }
    
$(window).on('load', function() {
    errorHghLght();
    
    var frmFeed = $('.frmFeed');
    function firstThing() {
    /* elements added by JS */
        var txtResponse = ['Text response feeds here. Does this render well..?','Another text group.'];
        frmFeed.html(txtResponse[0]);
    //
    }  firstThing();
    
    var dollyButton = $('#dollyToggle');
    dollyButton.on('click', function() {
        dollyToggle();
    }), dollyToggle();

////////////////////////////////////////////////////////////////////////////////

    const body_wght_input = $('#body_wght');
    var wght_input = body_wght_input;

    /* automation from input */
        wght_input.on('keyup', function() {
        var x = wght_input.val();
        logs(x + ' the input value.');
        var bodyweight = x;
        logs(bodyweight + ' the bodyweight value.');
        
        // live input functions
    
        frmFeed[0].style.color = 'red';
        if ($.isNumeric(x) === false) {
            frmFeed.html('Enter #lbs only!');
        } else if (x > 0 && x < 400) {
            frmFeed[0].style.color = 'skyblue';
            frmFeed.html(x + 'lbs'); // to feed form value as form input
        } else {
            frmFeed.html('This weight seems beyond human! Please enter a proper bodyweight value.'); // to feed form value as form input
        }

        // when finished insert to input
        wght_input.on('change', function() {
            frmFeed.html('');
            if (curr_wght_plus.length > 1) {
            resetButton.click();}
            recc_wght();
            whatsTotal();
        });
        
    /* weight formula input */
    
        const kg = 2.20462262; /*  #kg for a lb*/
        const barweight = (20 * kg);
        var ifpre = window.result; if ($.isNumeric(ifpre)) { logs(ifpre + 'ifpre value.')} else {ifpre = 0;}
        var curr_wght_set_amt = ifpre + barweight;
        var curr_wght = barweight;
        logs('The bar starts at: ' + barweight +'lbs or 20kg');
        const wght_opts = [2.5,5,10,25,35,45];
        var wght_opts_cnt = wght_opts.length;
        const wght_pair_cnt = 10; //how many pairs of weights available
        var _recc = 1.6; //recommended maximum lift by percentage
        var recc = (_recc * bodyweight);
        var over = recc - curr_wght_set_amt + barweight;

    /* end weight formula info */

    /* first element to feed data to */

    function recc_wght() {
        var reccTxt = ('<span>'+ recc + '</span>' + 'lbs recommended max weight based on a bodyweight of ' + bodyweight + 'lbs.');
        logs(recc + 'lbs maximum weight recommended based on a bodyweight of ' + bodyweight + 'lbs.');
        var target = $('.first');
//        let prgrph = $('.first').append('p').append(reccTxt);
//        prgrph.append(reccTxt);
            if (target.length < 1) {
                $('.first').add('p').append(reccTxt);}
            else {
                target.html(reccTxt);
            }
    }
    
    function whatsTotal() {
        getadd();
        var arr_cnt = curr_wght_plus.length + 1;
            for (i = 0; i < arr_cnt; i++)  {
                if (i===0){continue}
                var z; if ($.isNumeric(z)) {(logs + 'whatsTotal z valueg')} else{ z = 0;}
                if (i===1){z = 0;}
                var x = curr_wght_plus[i-1];
                z = z + x;
                window.result = z;
        }

                curr_wght_set_amt = window.result;
                
                logs(curr_wght_set_amt + ' curr_wght_set');
                logs(curr_wght_plus[0] + ' curr_wght array first item');

            // push current curr_wght number to DOM
            var pg_curr_barwght = $('#pg_curr_barwght');
            var pg_curr_barwght_cont = (curr_wght_set_amt + 'lbs is current set weight.'); // active without asking
            logs(tadd + ' value of tadd');
            
                if (pg_curr_barwght.html < 1) {
                    pg_curr_barwght.add(pg_curr_barwght_cont);
                } else {
                    pg_curr_barwght.html(pg_curr_barwght_cont);
                }
                

            // if curr_wght exceeds recommended or all weight available
            if (curr_wght_set_amt >= all_wghts || all_wghts < recc) {
                add_wght.push('No');
            } else {
                //push all add_wght data to DOM
        //        var pg_add_wght = $('#pg_add_wght');
            getadd();
            var pg_add_wght_txt = $('#add_wght');
            var pg_add_wght_cont = ('Add more weight? ' + tadd + 'lbs is next logical pair to add.');
        
                if (pg_add_wght_txt.html < 1) {
                    pg_add_wght_txt.add(pg_add_wght_cont);
                } else {
                    pg_add_wght_txt.html(pg_add_wght_cont);
                }
        }
        }
        
    function getadd() {
        for (let a = 5; a >= 0; a--) {
            tadd = wght_opts_3[a];
            logs(a +' value of getadd');
            if ((curr_wght_set_amt + tadd) < recc) {
                return tadd;
            }
        }
    }

////////////////////////////////////////////////////////////////////////////////

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
    i=0; //conform original array for paired weights
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
        
    logs(y + 'lbs Total weights available in gym.');

        //push all weights data to DOM
        var pg_all_wghts = $('#pg_all_wghts');
        var pg_all_wghts_cont = (y + 'lbs Total weights available in gym.');
        if (recc > all_wghts || curr_wght_set_amt >= all_wghts) {
            pg_all_wghts_cont = ('Your reccommended maximum of ' + recc + 'lbs is more than the ' + all_wghts + 'lbs available in the gym!');
        }
            pg_all_wghts_cont = pg_all_wghts_cont;
        if (pg_all_wghts.html < 0) {
            pg_all_wghts.add(pg_all_wghts_cont);
        } else {
            pg_all_wghts.html(pg_all_wghts_cont);
        }

    // starts by comparing current curr_wght to recommended and available max
    var add_wght= ['No', 'Yes'];
    var tadd = 0; //will be the next set of weights to add

        //push over value to DOM
        var pg_over = $('#pg_over');
        pg_over.css('color','purple');
        if (over > 0) {
            var pg_over_cont = (over + 'lbs less than our recommended max lift.');
        } else {
            pg_over_cont = (over + 'lbs more than our recommended max lift.');
        }
        if (pg_over.html < 0) {
            pg_over.add(pg_over_cont);
        } else {
            pg_over.html(pg_over_cont);
        }
    
    var arr_lst = add_wght.length - 1; // alt for last arr[-#] for JavaScript
    
    while (all_wghts > 0 && recc < all_wghts || (add_wght[arr_lst] === 'Yes')) {
        var y = curr_wght_set_amt;

 //  which set of weights to add via 'tadd' based on set limit

    var curr_wght_plus = [];
    curr_wght_plus.push(barweight);
    logs(curr_wght_plus);

        getadd();

        whatsTotal();
        
        break;
        
    } // end while loop
    
        
        var yesButton = $('#yes');
            yesButton.click(function() {
            if (all_wghts > curr_wght_set_amt && recc > curr_wght_set_amt) {
                whatsTotal();
                gfxExpand();
                //sync with over value to DOM
                var pg_over = $('#pg_over');
                over = over - tadd;
                pg_over.css('color','purple');
                    if (over > 0) {
                        var pg_over_cont = (over + 'lbs less than our recommended max lift.');
                    } else {
                        pg_over_cont = (over + 'lbs more than our recommended max lift.');
                    }
                    pg_over.html(pg_over_cont);
    
                logs(over + ' this is over amount.');
                logs(curr_wght + ' current weight feed.');
                logs(recc + ' recc weight feed.');
                add_wght.push('Yes');
                curr_wght_plus.push(tadd);
                } else {add_wght.push('No');}
//                getadd();
                whatsTotal();
        });

        function gfxExpand() {
        var gfx_barbell = $('#gfx_barbell');
        var gfx_barbell_2 = $('#gfx_barbell_2');
        var curr_gfx_wdth = gfx_barbell.width();
        var curr_gfx_wdth_2 = gfx_barbell_2.width();            
            if (tadd === 90) {
                var a = curr_gfx_wdth;
                logs(a + " current gfx width");
//                let b = a.replace("px", "");
//                var c = Number(b);
                var c = a + 86;
                logs(c + " the value of sum");
                gfx_barbell.css("width", c);
            } else if (tadd < 90){
                let a = curr_gfx_wdth_2;
                logs(a + " current gfx width");
//                let b = a.replace("px", "");
 //               c = Number(b);
                let c = a + 56;
                logs(c + " the value of sum");
                gfx_barbell_2.css("width", c);    
            }
        }
            
        var removeButton = $('#remove');
            removeButton.click(function() {
                whatsTotal();
                if (curr_wght_plus.length > 1) {
                arr_lst = curr_wght_plus.length - 1; over += curr_wght_plus[arr_lst];                    
                curr_wght_plus.pop();
                }
                //sync with over value to DOM
                var pg_over = $('#pg_over');
                pg_over.css('color', 'purple');
                if (over > 0) {
                    var pg_over_cont = (over + 'lbs less than our recommended max lift.');
                } else {
                    pg_over_cont = (over + 'lbs more than our recommended max lift.');
                }
                pg_over.html = pg_over_cont;
                
                gfxClose();
                        
            });
            
        var resetButton = $('#reset'); // clear bar of weights
            resetButton.click(function() {
/*                whatsTotal();
                while (curr_wght_plus.length > 1) {
                arr_lst = curr_wght_plus.length - 1;
                over += curr_wght_plus[arr_lst];
                curr_wght_plus.pop();}
                //sync with over value to DOM 
                var pg_over = $('#pg_over');
                var pg_over_cont = (over + 'lbs less than our recommended max lift.');
                pg_over.html = pg_over_cont;
                
                $('#gfx_barbell').css('width', '0');
                $('#gfx_barbell_2').css('width', '0');
                gfxClose();
                whatsTotal();*/
            window.location.reload();
            });
            
        function gfxClose() {
        var gfx_barbell = $('#gfx_barbell');
        var gfx_barbell_2 = $('#gfx_barbell_2');
        var curr_gfx_wdth = gfx_barbell.width();
        var curr_gfx_wdth_2 = gfx_barbell_2.width();            
            whatsTotal();
            if (tadd === 90 ) {
                var a = curr_gfx_wdth;
                var c = a;
                logs(a + " current gfx width");
//                let b = a.replace("px", "");
//                var c = Number(b) + 0;
                    if (c === 86) {
                        gfx_barbell.css('width', 0);
                    } else /* not yet necessary*/{
                        c = c - 86;
                        gfx_barbell.css('width', c);
                    }
            } else {
                var d = curr_gfx_wdth_2;
                var e = d;
                logs(a + " current gfx width");
//                let b = a.replace("px", "");
//                c = Number(b) + 0;
                    if (e >= 112) {
                        e = e - 56;
                        gfx_barbell_2.css('width', e);
                    } else if (e === 56) {
                        e = 0;
                        logs(e + " the value of sum");
                        gfx_barbell_2.css('width', 0);                      
                    }
            }
        }
        
        var noButton = $('#no');
            noButton.click(function() {
                add_wght.push('No');
                logs(add_wght);
                whatsTotal();
            });

    var kgs = curr_wght_set_amt * kg; //convert lbs lifted to kgs
    logs('The highest recorded lift was ' + curr_wght_set_amt + 'lbs or '+ kgs +'kgs');
    
    }); // end active oninput/keyup 

}); // end onload function
