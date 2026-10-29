
/* Configure these when you have them; empty values are hidden. */
var ADDR="101 Kosha Commercial Complex, Near Kaka Bar, Malad East, Mumbai",PHONE="86919 83570",WA="918691983570",MAPQ="19.1870772,72.8507376",EMAIL="",HOURS="",IG="https://www.instagram.com/nalessa.in",SZ=["XS","S","M","L","XL"];
var P=[
{n:"Azure Eyelet Tie-Dye Mini",p:1799,t:"mini tiedye eyelet new trend best",i:"assets/img0.jpg"},
{n:"Blush Shibori Mini",p:1599,t:"mini tiedye trend",i:"assets/img1.jpg"},
{n:"Butter Plunge Midi",p:2299,t:"midi new trend best",i:"assets/img2.jpg"},
{n:"Rosette Embroidered Midi",p:2499,t:"midi new trend best",i:"assets/img3.jpg"},
{n:"Marigold Slip Maxi",p:1999,t:"midi new",i:"assets/img4.jpg"},
{n:"Petal Ruched Mini",p:1499,t:"mini",i:"assets/img5.jpg"},
{n:"Scarlet Lace-Up Mini",p:1699,t:"mini trend best",i:"assets/img6.jpg"},
{n:"Ivory Slit Midi",p:2199,t:"midi",i:"assets/img7.jpg"},
{n:"Peach Eyelet Ruffle Mini",p:1799,t:"mini eyelet new trend best",i:"assets/img8.jpg"},
{n:"Lime Puff-Sleeve Mini",p:1899,t:"mini new",i:"assets/img9.jpg"},
{n:"Forest Button Mini",p:1699,t:"mini",i:"assets/img10.jpg"},
{n:"Mint Eyelet Puff Mini",p:1999,t:"mini eyelet new trend",i:"assets/img11.jpg"}];
P.forEach(function(x,k){x.id=k;x.z=x.z||SZ});
var V=[["home","Home"],["new-in","New In"],["shop-all","Shop All"],["trending","Trending"],["contact","Contact"]];
var INF={shipping:"Shipping Information",returns:"Returns & Exchanges",faqs:"FAQs","size-guide":"Size Guide",privacy:"Privacy Policy",terms:"Terms & Conditions","shipping-returns":"Shipping and Returns Policy"};
var cart=[],$=function(i){return document.getElementById(i)},sel=null,size=null,cat="all",pre="",tm,DB=null,UID=null;
try{cart=JSON.parse(localStorage.getItem("nl-cart"))||[]}catch(e){}
if(window.claude&&claude.use){claude.use("db").then(function(d){DB=d}).catch(function(){});claude.use("user").then(function(u){return u&&u.id()}).then(function(i){UID=i}).catch(function(){})}
function mapbox(c){return '<div class="mp '+(c||"")+'"><iframe src="https://www.google.com/maps?q='+MAPQ+'&z=17&hl=en&output=embed" title="Nalessa location on Google Maps" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe><a href="https://www.google.com/maps?q='+MAPQ+'&z=17&hl=en" target="_blank" rel="noopener">Open in Google Maps ↗</a></div>'}
var rs=function(n){return "₹"+n.toLocaleString("en-IN")};
function toast(m){var t=$("t");t.textContent=m;t.classList.add("on");clearTimeout(tm);tm=setTimeout(function(){t.classList.remove("on")},2400)}
function list(f){return P.filter(function(x){return x.t.split(" ").indexOf(f)>-1})}
function ids(a){return a.map(function(k){return P[k]})}
function card(x){return '<article class="c"><a href="product.html?id='+x.id+'" aria-label="'+x.n+'" style="text-decoration:none"><figure><img src="'+x.i+'" alt="'+x.n+'" loading="lazy"></figure></a><div class="in2"><h3>'+x.n+'</h3><div class="pr">'+(x.o?'<s>'+rs(x.o)+'</s>':'')+rs(x.p)+(x.o?'<b>'+Math.round(100-x.p/x.o*100)+'% off</b>':'')+'</div><div class="sz1">Sizes '+x.z[0]+'–'+x.z[x.z.length-1]+'</div><a class="bt" href="product.html?id='+x.id+'">View Product</a></div></article>'}
function sec(t,d,items,lb,href,alt){return '<section class="sec rv'+(alt?' alt':'')+'"><div class="sh"><h2>'+t+'</h2><p>'+d+'</p></div><div class="g">'+items.map(card).join("")+'</div><div class="bc"><a class="bt" href="'+href+'.html">'+lb+'</a></div></section>'}
function pg(t,s,b){return '<section class="sec pg"><h1>'+t+'</h1><p class="ds">'+s+'</p>'+b+'</section>'}
function tiles(){var T=[["mini","Mini Dresses",6],["midi","Midi & Maxi",2],["tiedye","Tie-Dye",1],["eyelet","Eyelet",11]];return '<section class="sec rv alt"><div class="sh"><h2>Shop by Style</h2><p>From playful minis to sweeping maxis, find the silhouette that feels like you.</p></div><div class="g">'+T.map(function(x){return '<a class="c" href="shop-all.html?c='+x[0]+'" data-k="'+x[0]+'"><figure><img src="'+P[x[2]].i+'" alt="" loading="lazy"></figure><div class="in2"><h3>'+x[1]+'</h3></div></a>'}).join("")+'</div><div class="bc"><a class="bt" href="shop-all.html">Explore Collections</a></div></section>'}
var D="M2 70Q2 2 70 2H478Q498 2 498 22V230Q498 298 430 298H22Q2 298 2 278Z";
var R={
home:function(){return '<div class="bw" id="bw" aria-hidden="true">Nalessa</div><div class="hw" id="hw"><section class="hero" id="hr" aria-label="Nalessa campaign"><svg class="dt" viewBox="0 0 170 100" fill="none" aria-hidden="true"><path d="M20 0C80 10 140 40 170 100" stroke="#5E1A2C" stroke-width="1.3"/></svg><svg class="dl" viewBox="0 0 260 420" aria-hidden="true"><path d="M0 130C70 120 105 175 85 245 70 300 150 340 190 420H0Z" fill="#5E1A2C"/><path d="M10 250C70 300 160 330 260 420" stroke="#9A9577" stroke-width="1.4" fill="none"/><path d="M40 400C90 330 130 285 190 262" stroke="#9A9577" stroke-width="1.4" fill="none"/><g fill="#565B3A"><ellipse cx="120" cy="300" rx="30" ry="9" transform="rotate(-55 120 300)"/><ellipse cx="150" cy="276" rx="30" ry="9" transform="rotate(-25 150 276)"/><ellipse cx="178" cy="262" rx="30" ry="9" transform="rotate(-10 178 262)"/><ellipse cx="96" cy="340" rx="28" ry="9" transform="rotate(-90 96 340)"/><ellipse cx="150" cy="330" rx="28" ry="8" transform="rotate(20 150 330)"/></g></svg><div class="tx"><div class="sx" data-a=".04" data-b=".32" data-y="60"><div class="eb en">Dressed for real life</div></div><div class="sx" data-a=".08" data-b=".4" data-y="80"><h1 class="hl en" style="--d:.25s">A Little<br>More You.</h1></div><div class="sx" data-a=".18" data-b=".5" data-y="70"><p class="sp2 en" style="--d:.7s">Easy styles for every plan,<br>every mood, every moment.</p></div><div class="sx" data-a=".28" data-b=".6" data-y="60"><a class="ex en" style="--d:1.1s" href="shop-all.html">Explore the collection →</a></div></div><div class="ph"><div class="pf sx" data-a=".7" data-b="1.8" data-s="40" data-sc=".04"><figure style="--d:.5s"><img src="assets/img12.jpg" alt="Model wearing the Azure Eyelet Tie-Dye Mini"></figure></div><div class="pf sx" data-a=".7" data-b="1.8" data-s="90" data-sc=".04"><figure style="--d:.8s"><img src="assets/img13.jpg" alt="Model wearing the Butter Plunge Midi"></figure></div></div></section></div><div class="up">'+
sec("New In","Our latest arrivals, fresh from the studio.",list("new").slice(0,4),"View All New In","new-in")+
sec("Trending Now","The dresses everyone is reaching for this season.",list("trend").slice(0,4),"Explore Trending","trending",1)+
sec("Dresses & Gowns","Flowing midis, sweeping maxis and statement minis for every occasion.",ids([2,3,4,7,0,11]),"View All Dresses & Gowns","dresses-gowns")+
sec("Best Sellers","Customer favourites, loved again and again.",list("best").slice(0,4),"Discover Best Sellers","best-sellers",1)+tiles()+'</div>'},
"new-in":function(){return pg("New In","The latest dresses, fresh from the studio.",'<div class="g">'+list("new").map(card).join("")+'</div>')},
"best-sellers":function(){return pg("Best Sellers","Customer favourites, loved again and again.",'<div class="g">'+list("best").map(card).join("")+'</div>')},
"dresses-gowns":function(){return pg("Dresses & Gowns","Every Nalessa dress, from minis to maxis.",'<div class="g">'+P.map(card).join("")+'</div>')},
"shop-all":function(){var C=[["all","All"],["mini","Mini"],["midi","Midi & Maxi"],["tiedye","Tie-dye"],["eyelet","Eyelet"]];return pg("Shop All","Every Nalessa dress in one place.",'<div class="chips">'+C.map(function(c){return '<button data-c="'+c[0]+'" aria-pressed="'+(cat==c[0])+'">'+c[1]+'</button>'}).join("")+'</div><div class="g">'+(cat=="all"?P:list(cat)).map(card).join("")+'</div>')},
trending:function(){return pg("Trending","What everyone is wearing right now.",'<div class="g">'+list("trend").map(card).join("")+'</div>')},
contact:function(){var o=P.map(function(x){return '<option value="'+x.id+'"'+(pre!==""&&pre==x.id?" selected":"")+'>'+x.n+' – '+rs(x.p)+'</option>'}).join("");
return pg("Contact","Enquire about a dress, a size or a special request. Fill in the form and press submit — your enquiry opens in WhatsApp, ready to send to us.",'<div class="ctw"><form id="ef" novalidate><div class="f"><label for="fn">Full name <i>*</i></label><input id="fn" name="n" autocomplete="name"><span class="er"></span></div><div class="h"><label for="fp2">Phone number <i>*</i></label><input id="fp2" name="p" type="tel" inputmode="tel" autocomplete="tel" placeholder="98765 43210"><span class="er"></span></div><div class="h"><label for="fe">Email address</label><input id="fe" name="e" type="email" autocomplete="email"><span class="er"></span></div><div class="f"><label for="ps">Select product <i>*</i></label><div class="pw"><select id="ps" name="pr"><option value="">Choose a dress…</option>'+o+'</select><img id="th" alt=""></div><span class="er"></span></div><div class="h"><label for="zs">Select size</label><select id="zs" name="s"></select></div><div class="h"><label for="fq">Quantity</label><input id="fq" name="q" type="number" min="1" max="20" value="1"></div><div class="f"><label for="fm">Message / special request</label><textarea id="fm" name="m" rows="4"></textarea></div><div class="f"><div id="st" role="status"></div></div><div class="f"><button class="sb" id="sbt" type="submit">Submit on WhatsApp</button></div></form><aside class="ci">'+cinfo()+'</aside></div>')}};
function cinfo(){return '<small>Visit us</small><p class="ad">'+ADDR+'</p>'+(PHONE?'<small>Call us</small><a href="tel:'+PHONE.replace(/[^+\d]/g,"")+'">'+PHONE+'</a>':'')+(EMAIL?'<small>Email</small><a href="mailto:'+EMAIL+'">'+EMAIL+'</a>':'')+(HOURS?'<small>Support hours</small><p>'+HOURS+'</p>':'')+'<small>Instagram</small><a href="'+IG+'" target="_blank" rel="noopener">@nalessa.in</a><small>Our location</small>'+mapbox()}
function rel(i){var x=P[i],tg=x.t.split(" ");return P.filter(function(y){return y.id!=i}).map(function(y){var sc=0;y.t.split(" ").forEach(function(t){if(tg.indexOf(t)>-1)sc+=(t=="new"||t=="trend"||t=="best")?1:3});return{y:y,sc:sc,d:Math.abs(y.id-i)}}).sort(function(a,b){return b.sc-a.sc||a.d-b.d}).slice(0,3).map(function(o){return o.y})}
function prod(i){var x=P[i];sel=i;size=null;return '<section class="sec pd"><a class="bk" href="shop-all.html">← Back to Shop All</a><div class="pdw"><img src="'+x.i+'" alt="'+x.n+'"><div><h1>'+x.n+'</h1><div class="pr">'+rs(x.p)+'</div><b>Select size</b><div class="sz">'+x.z.map(function(s){return '<button data-z2="'+s+'" aria-pressed="false">'+s+'</button>'}).join("")+'</div><button class="btn" data-ad="0">Add to Cart</button><button class="btn p" data-ad="1">Buy it Now</button><a class="btn" href="contact.html?p='+i+'" data-e="'+i+'">Enquire About This Product</a></div></div></section><section class="sec rv rel"><div class="sh"><h2>You may also like</h2><p>More dresses similar to '+x.n+'.</p></div><div class="g">'+rel(i).map(card).join("")+'</div></section>'}
function info(h){return pg(INF[h],"This page is being prepared.",'<div class="inf"><p>Until it’s ready, send us your question through the enquiry form and we’ll help you directly.</p><a class="bt" href="contact.html">Go to Contact</a></div>')}
function fill(){var v=$("ps"),x=P[v.value],z=$("zs"),th=$("th");if(!x){z.innerHTML='<option value="">Select a product first</option>';z.disabled=true;th.style.display="none";return}z.disabled=false;z.innerHTML='<option value="">Any / not sure</option>'+x.z.map(function(s){return '<option>'+s+'</option>'}).join("");th.src=x.i;th.alt=x.n;th.style.display="block"}
function route(){var pg0=document.body.dataset.page||"home",q=new URLSearchParams(location.search),h=pg0=="product"?"product-"+(+q.get("id")):pg0=="info"?(q.get("p")||""):pg0,m=h.match(/^product-(\d+)$/);
if(!route.d){route.d=1;var c0=q.get("c"),p0=q.get("p");if(pg0=="shop-all"&&["all","mini","midi","tiedye","eyelet"].indexOf(c0)>-1)cat=c0;if(pg0=="contact"&&p0!=null&&P[p0])pre=p0}
if(h!="shop-all")cat="all";if(!m&&!R[h]&&!INF[h])h="home";
$("app").innerHTML=m&&P[m[1]]?prod(+m[1]):R[h]?R[h]():info(h);document.title=(m&&P[m[1]]?P[m[1]].n:INF[h]||(h=="dresses-gowns"?"Dresses & Gowns":h=="home"?"":(V.filter(function(v){return v[0]==h})[0]||[0,h.replace(/-/g," ").replace(/\b\w/g,function(c){return c.toUpperCase()})])[1]))+(h=="home"&&!m?"Nalessa – Where Fashion Meets Passion":" – Nalessa");$("nav").classList.remove("open");$("mn").setAttribute("aria-expanded","false");$("sp").hidden=true;
$("nav").innerHTML=V.map(function(v){return '<a href="'+(v[0]=="home"?"index":v[0])+'.html"'+(v[0]==h?' aria-current="page"':'')+'>'+v[1]+'</a>'}).join("");
if(h=="contact"){fill();pre=""}window.scrollTo(0,0);reveal();hdst();fit();sc()}
function reveal(){var r=document.querySelectorAll(".rv");if(!window.IntersectionObserver){r.forEach(function(e){e.classList.add("in")});return}var o=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");o.unobserve(e.target)}})},{rootMargin:"0px 0px -8% 0px"});r.forEach(function(e){o.observe(e)})}
var tk=0,rm=matchMedia("(prefers-reduced-motion:reduce)"),HM=null;
function hdst(){if(!$("hw")){var h=document.querySelector(".hd");h.classList.remove("hm","dk")}}
/* Size the big banner wordmark to the page width and work out where the nav logo sits, so it can glide there. */
function fit(){var w=$("hw"),b=$("bw");HM=null;if(!w||!b||rm.matches)return;
var h=$("hr"),hd=document.querySelector(".hd"),wm=hd.querySelector(".wm"),px=parseFloat(getComputedStyle(hd).paddingLeft)||16,
av=document.documentElement.clientWidth-2*px,H=h.offsetHeight,top0=parseFloat(getComputedStyle(h).top)||0;
b.style.transform="none";b.style.fontSize="100px";
var w1=b.getBoundingClientRect().width||353,F=Math.max(48,Math.min(100*av/w1,.435*H)),y=14-.13*F;
b.style.fontSize=F+"px";b.style.left=px+"px";b.style.top=(top0+y)+"px";
h.style.setProperty("--wr",(36+.69*F).toFixed(1)+"px");
var r=wm.getBoundingClientRect();
HM={dx:r.left-px,dy:r.top-(top0+y),s:parseFloat(getComputedStyle(wm).fontSize)/F}}
function sc(){if(tk)return;tk=requestAnimationFrame(function(){tk=0;var w=$("hw");if(!w||rm.matches)return;var hd=document.querySelector(".hd"),d=w.offsetHeight-$("hr").offsetHeight,p=Math.min(1,Math.max(0,(hd.getBoundingClientRect().bottom-w.getBoundingClientRect().top)/d));
w.querySelectorAll(".sx").forEach(function(el){var a=+el.dataset.a,b=+el.dataset.b,k=Math.min(1,Math.max(0,(p-a)/(b-a))),y=-(+el.dataset.y||0)*k-(+el.dataset.s||0)*p;el.style.opacity=1-k;el.style.transform="translate3d(0,"+y.toFixed(1)+"px,0) scale("+(1+(+el.dataset.sc||0)*p).toFixed(4)+")"});
var bw=$("bw");if(!bw)return;if(!HM){hd.classList.remove("hm","dk");bw.style.visibility="hidden";return}
var q=Math.min(1,p/.9),e=q<.5?4*q*q*q:1-Math.pow(-2*q+2,3)/2,dk=q>=1;
bw.style.transform="translate3d("+(HM.dx*e).toFixed(1)+"px,"+(HM.dy*e).toFixed(1)+"px,0) scale("+(1+(HM.s-1)*e).toFixed(4)+")";
bw.style.visibility=dk?"hidden":"visible";hd.classList.add("hm");hd.classList.toggle("dk",dk)})}
addEventListener("scroll",sc,{passive:true});
function save(){try{localStorage.setItem("nl-cart",JSON.stringify(cart))}catch(e){}$("cn").textContent=cart.reduce(function(a,b){return a+b.q},0);var T=0;$("ls").innerHTML=cart.length?cart.map(function(c,k){var x=P[c.id];T+=x.p*c.q;return '<div class="li"><img src="'+x.i+'" alt=""><div><b>'+x.n+'</b><br><small>Size '+c.s+' · '+rs(x.p)+'</small><div class="q"><button data-q="'+k+'|-1" aria-label="Fewer">−</button>'+c.q+'<button data-q="'+k+'|1" aria-label="More">+</button></div></div><b>'+rs(x.p*c.q)+'</b></div>'}).join(""):'<p style="color:var(--mut)">Your cart is empty. Browse Shop All to find your next dress.</p>';
$("ft").innerHTML=cart.length?'<p style="display:flex;justify-content:space-between;font-size:18px"><b>Subtotal</b><b>'+rs(T)+'</b></p><button class="btn p" data-ck>Checkout</button>':''}
function dr(o){$("dr").classList.toggle("on",o)}
function er(el,m){var s=el.parentNode.classList.contains("pw")?el.parentNode.nextElementSibling:el.nextElementSibling;if(s&&s.className=="er")s.textContent=m||"";el.setAttribute("aria-invalid",!!m)}
document.addEventListener("submit",function(e){if(e.target.id!="ef")return;e.preventDefault();var f=e.target,st=$("st"),b=$("sbt"),bad=0,n=f.n,p=f.p,em=f.e,pr=f.pr,ph=p.value.replace(/[\s-]/g,"");
[n,p,em,pr].forEach(function(x){er(x,"")});st.className="";st.textContent="";
if(!n.value.trim()){er(n,"Please enter your full name.");bad=1}
if(!/^(\+91|91|0)?[6-9]\d{9}$/.test(ph)){er(p,"Enter a valid 10-digit Indian mobile number.");bad=1}
if(em.value&&!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(em.value)){er(em,"Enter a valid email address.");bad=1}
if(!pr.value){er(pr,"Please select a product.");bad=1}
if(bad){var fe=f.querySelector("[aria-invalid=true]");if(fe)fe.focus();return}
var x=P[pr.value],sz=f.s.value||"Any",qt=+f.q.value||1,nm=n.value.trim(),
msg=["Hello Nalessa! I’d like to enquire about a dress.","","Product: "+x.n+" ("+rs(x.p)+")","Size: "+sz,"Quantity: "+qt,"","Name: "+nm,"Phone: "+ph.slice(-10)].concat(em.value.trim()?["Email: "+em.value.trim()]:[],f.m.value.trim()?["","Message: "+f.m.value.trim()]:[]).join("\n"),
url="https://wa.me/"+WA+"?text="+encodeURIComponent(msg);
if(DB&&UID){var ts=Date.now(),L={};L["e"+ts]={name:nm,phone:ph.slice(-10),email:em.value.trim(),product:x.n,productPrice:x.p,size:f.s.value,quantity:qt,message:f.m.value.trim(),at:new Date(ts).toISOString()};var ref=DB.doc("enquiries/"+UID);ref.update({log:L}).catch(function(er2){if(er2&&er2.code=="invalid_argument")return ref.set({log:L});throw er2}).catch(function(){})}
var w=window.open(url,"_blank");if(w){try{w.opener=null}catch(e){}}else location.href=url;
st.className="ok";st.textContent="Thank you, "+nm.split(" ")[0]+". WhatsApp is opening with your enquiry about "+x.n+" — just press send.";f.reset();fill()});
document.addEventListener("change",function(e){if(e.target.id=="ps")fill()});
document.addEventListener("input",function(e){if(e.target.id!="sq")return;var q=e.target.value.trim().toLowerCase();$("sr").innerHTML=q?P.filter(function(x){return (x.n+" "+x.t).toLowerCase().indexOf(q)>-1}).map(function(x){return '<a href="product.html?id='+x.id+'"><img src="'+x.i+'" alt=""><span>'+x.n+'<br><small>'+rs(x.p)+'</small></span></a>'}).join("")||'<p style="color:var(--mut)">No dresses found.</p>':""});
document.addEventListener("click",function(e){var t=e.target.closest("[data-k],[data-e],[data-c],[data-z2],[data-ad],[data-q],[data-ck],#cb,#dx,#mn,#sb");if(!t)return;var d=t.dataset;
if(d.k)cat=d.k;else if(d.e!=null)pre=d.e;else if(d.c){cat=d.c;route()}
else if(d.z2){size=d.z2;document.querySelectorAll("[data-z2]").forEach(function(b){b.setAttribute("aria-pressed",b.dataset.z2==size)})}
else if(d.ad!=null){if(!size){toast("Please select a size");return}var f=cart.filter(function(c){return c.id==sel&&c.s==size})[0];if(f)f.q++;else cart.push({id:sel,s:size,q:1});save();if(d.ad=="1")dr(true);else toast("Added to cart")}
else if(d.q){var a=d.q.split("|"),c=cart[a[0]];c.q+=+a[1];if(c.q<1)cart.splice(a[0],1);save()}
else if(d.ck!=null)toast("Checkout isn’t connected yet");
else if(t.id=="cb")dr(true);else if(t.id=="dx")dr(false);
else if(t.id=="mn"){var o=$("nav").classList.toggle("open");t.setAttribute("aria-expanded",o);if(o){$("sp").hidden=true;$("sb").setAttribute("aria-expanded","false")}}
else if(t.id=="sb"){var s=$("sp");s.hidden=!s.hidden;t.setAttribute("aria-expanded",!s.hidden);if(!s.hidden){closeNav();$("sq").focus()}}});
function closeNav(){$("nav").classList.remove("open");$("mn").setAttribute("aria-expanded","false")}
/* close the mobile menu when tapping a link or anywhere outside it */
document.addEventListener("click",function(e){if(!$("nav").classList.contains("open"))return;if(e.target.closest("#nav a")||!e.target.closest("#nav,#mn"))closeNav()});
document.addEventListener("keydown",function(e){if(e.key=="Escape"){dr(false);$("sp").hidden=true;closeNav()}});
$("fc").innerHTML='<p class="ad">'+ADDR+'</p>'+(PHONE?'<a href="tel:'+PHONE.replace(/[^+\d]/g,"")+'">'+PHONE+'</a>':'')+(EMAIL?'<a href="mailto:'+EMAIL+'">'+EMAIL+'</a>':'')+(HOURS?'<p style="margin:4px 0">'+HOURS+'</p>':'')+'<a href="'+IG+'" target="_blank" rel="noopener">Instagram @nalessa.in</a><a href="contact.html">Product enquiry form</a>'+'<a href="https://wa.me/'+WA+'" target="_blank" rel="noopener">WhatsApp us</a>'+mapbox("fm");
$("cp").textContent="© "+new Date().getFullYear()+" Nalessa. All rights reserved.";
route();save();
addEventListener("resize",function(){if(innerWidth>860)closeNav();fit();sc()});addEventListener("load",function(){fit();sc()});if(document.fonts&&document.fonts.ready)document.fonts.ready.then(function(){fit();sc()});
