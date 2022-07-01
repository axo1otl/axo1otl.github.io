var r_text = new Array ();
r_text[0] = "Poggers";
r_text[1] = "Home. Home.";
r_text[2] = "2";
r_text[3] = "3";
r_text[4] = "4";
r_text[5] = "5";
r_text[6] = "6";

var i = Math.random();
i = length(r_text) * i;
i = Math.floor(i);
function splashtext(){
    document.write(r_text[i]);
}