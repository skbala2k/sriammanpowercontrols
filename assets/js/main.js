function load(id,file){
 fetch(file).then(r=>r.text()).then(d=>document.getElementById(id).innerHTML=d);
}
load("navbar","components/navbar.html");
load("hero","components/hero.html");
load("about","components/about.html");
load("design","components/design.html");
load("welding","components/welding.html");
load("specs","components/specs.html");
load("footer","components/footer.html");
