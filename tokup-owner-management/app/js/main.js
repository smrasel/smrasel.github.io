/*$(document).ready(function(){
                $('.dataTables-example').DataTable({
                    "responsive": true,
                    "paging":   false,
                    "info":     false,
                    "bFilter": false
                });

              });*/

    // eval(function(p,a,c,k,e,d){e=function(c){return c};if(!''.replace(/^/,String)){while(c--){d[c]=k[c]||c}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('1.2(\'3\',0=>0.4());',5,5,'event|document|addEventListener|contextmenu|preventDefault'.split('|'),0,{}))



    function toggle_visibility(id) {
        var e = document.getElementById(id);
        e.style.display = ((e.style.display != 'none') ? 'none' : 'block');
    }

    var button = document.getElementById("showHide");
    button.addEventListener('click', function() {
        if (button.getAttribute("data-text-swap") == button.innerHTML) {
            button.innerHTML = button.getAttribute("data-text-original");
        } else {
            button.setAttribute("data-text-original", button.innerHTML);
            button.innerHTML = button.getAttribute("data-text-swap");
        }
    }, false);

    $(document).ready(function() {
        $("#myTable").tablesorter();
    });