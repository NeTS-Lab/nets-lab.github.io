import{k as z}from"./preact.module.BYSHj7yn.js";import{A as T,d as O,y as I,q as R}from"./hooks.module.RibxbAva.js";import{g as c}from"./index.CH_iu5NA.js";/* empty css                          */import{u as i}from"./jsxRuntime.module.BLZlUNXw.js";const B=12,S=300,C="132, 0, 255",G=768,q=[{color:"#060010",title:"Dataset Recap",description:"Open Access",label:"",url:"https://docs.google.com/spreadsheets/d/1V8oivay7q4aam4SYq6M8_m-h-AP-jEkL/edit?usp=sharing&ouid=102162629437595545050&rtpof=true&sd=true"},{color:"#060010",title:"",description:"",label:"Full ATTracTTS dataset",url:"https://docs.google.com/spreadsheets/d/1vT7Nt1VGXTQisaSN_iG7yXE7JiNr2ZCD/edit?usp=sharing&ouid=102162629437595545050&rtpof=true&sd=true"}],U=(t,f,a=C)=>{const y=document.createElement("div");return y.className="particle",y.style.cssText=`
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${a}, 1);
    box-shadow: 0 0 6px rgba(${a}, 0.6);
    pointer-events: none;
    z-index: 100;
    left: ${t}px;
    top: ${f}px;
  `,y},F=t=>({proximity:t*.5,fadeDistance:t*.75}),V=(t,f,a,y,g)=>{const n=t.getBoundingClientRect(),M=(f-n.left)/n.width*100,x=(a-n.top)/n.height*100;t.style.setProperty("--glow-x",`${M}%`),t.style.setProperty("--glow-y",`${x}%`),t.style.setProperty("--glow-intensity",y.toString()),t.style.setProperty("--glow-radius",`${g}px`)},W=({children:t,className:f="",disableAnimations:a=!1,style:y,particleCount:g=B,glowColor:n=C,enableTilt:M=!0,clickEffect:x=!1,enableMagnetism:b=!1})=>{const v=T(null),s=T([]),A=T([]),E=T(!1),N=T([]),u=T(!1),P=T(null),Y=R(()=>{if(u.current||!v.current)return;const{width:e,height:X}=v.current.getBoundingClientRect();N.current=Array.from({length:g},()=>U(Math.random()*e,Math.random()*X,n)),u.current=!0},[g,n]),_=R(()=>{A.current.forEach(clearTimeout),A.current=[],P.current?.kill(),s.current.forEach(e=>{c.to(e,{scale:0,opacity:0,duration:.3,ease:"back.in(1.7)",onComplete:()=>{e.parentNode?.removeChild(e)}})}),s.current=[]},[]),d=R(()=>{!v.current||!E.current||(u.current||Y(),N.current.forEach((e,X)=>{const w=setTimeout(()=>{if(!E.current||!v.current)return;const p=e.cloneNode(!0);v.current.appendChild(p),s.current.push(p),c.fromTo(p,{scale:0,opacity:0},{scale:1,opacity:1,duration:.3,ease:"back.out(1.7)"}),c.to(p,{x:(Math.random()-.5)*100,y:(Math.random()-.5)*100,rotation:Math.random()*360,duration:2+Math.random()*2,ease:"none",repeat:-1,yoyo:!0}),c.to(p,{opacity:.3,duration:1.5,ease:"power2.inOut",repeat:-1,yoyo:!0})},X*100);A.current.push(w)}))},[Y]);return I(()=>{if(a||!v.current)return;const e=v.current,X=()=>{E.current=!0,d(),M&&c.to(e,{rotateX:5,rotateY:5,duration:.3,ease:"power2.out",transformPerspective:1e3})},w=()=>{E.current=!1,_(),M&&c.to(e,{rotateX:0,rotateY:0,duration:.3,ease:"power2.out"}),b&&c.to(e,{x:0,y:0,duration:.3,ease:"power2.out"})},p=m=>{if(!M&&!b)return;const r=e.getBoundingClientRect(),o=m.clientX-r.left,l=m.clientY-r.top,L=r.width/2,$=r.height/2;if(M){const k=(l-$)/$*-10,D=(o-L)/L*10;c.to(e,{rotateX:k,rotateY:D,duration:.1,ease:"power2.out",transformPerspective:1e3})}if(b){const k=(o-L)*.05,D=(l-$)*.05;P.current=c.to(e,{x:k,y:D,duration:.3,ease:"power2.out"})}},h=m=>{if(!x)return;const r=e.getBoundingClientRect(),o=m.clientX-r.left,l=m.clientY-r.top,L=Math.max(Math.hypot(o,l),Math.hypot(o-r.width,l),Math.hypot(o,l-r.height),Math.hypot(o-r.width,l-r.height)),$=document.createElement("div");$.style.cssText=`
        position: absolute;
        width: ${L*2}px;
        height: ${L*2}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(${n}, 0.4) 0%, rgba(${n}, 0.2) 30%, transparent 70%);
        left: ${o-L}px;
        top: ${l-L}px;
        pointer-events: none;
        z-index: 1000;
      `,e.appendChild($),c.fromTo($,{scale:0,opacity:1},{scale:1,opacity:0,duration:.8,ease:"power2.out",onComplete:()=>$.remove()})};return e.addEventListener("mouseenter",X),e.addEventListener("mouseleave",w),e.addEventListener("mousemove",p),e.addEventListener("click",h),()=>{E.current=!1,e.removeEventListener("mouseenter",X),e.removeEventListener("mouseleave",w),e.removeEventListener("mousemove",p),e.removeEventListener("click",h),_()}},[d,_,a,M,b,x,n]),i("div",{ref:v,className:`${f} particle-container`,style:{...y,position:"relative",overflow:"hidden"},children:t})},H=({gridRef:t,disableAnimations:f=!1,enabled:a=!0,spotlightRadius:y=S,glowColor:g=C})=>{const n=T(null),M=T(!1);return I(()=>{if(f||!t?.current||!a)return;const x=document.createElement("div");x.className="global-spotlight",x.style.cssText=`
      position: fixed;
      width: 800px;
      height: 800px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(${g}, 0.15) 0%,
        rgba(${g}, 0.08) 15%,
        rgba(${g}, 0.04) 25%,
        rgba(${g}, 0.02) 40%,
        rgba(${g}, 0.01) 65%,
        transparent 70%
      );
      z-index: 200;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
    `,document.body.appendChild(x),n.current=x;const b=s=>{if(!n.current||!t.current)return;const E=t.current.closest(".bento-section")?.getBoundingClientRect(),N=E&&s.clientX>=E.left&&s.clientX<=E.right&&s.clientY>=E.top&&s.clientY<=E.bottom;M.current=N||!1;const u=t.current.querySelectorAll(".card");if(!N){c.to(n.current,{opacity:0,duration:.3,ease:"power2.out"}),u.forEach(e=>{e.style.setProperty("--glow-intensity","0")});return}const{proximity:P,fadeDistance:Y}=F(y);let _=1/0;u.forEach(e=>{const X=e,w=X.getBoundingClientRect(),p=w.left+w.width/2,h=w.top+w.height/2,m=Math.hypot(s.clientX-p,s.clientY-h)-Math.max(w.width,w.height)/2,r=Math.max(0,m);_=Math.min(_,r);let o=0;r<=P?o=1:r<=Y&&(o=(Y-r)/(Y-P)),V(X,s.clientX,s.clientY,o,y)}),c.to(n.current,{left:s.clientX,top:s.clientY,duration:.1,ease:"power2.out"});const d=_<=P?.8:_<=Y?(Y-_)/(Y-P)*.8:0;c.to(n.current,{opacity:d,duration:d>0?.2:.5,ease:"power2.out"})},v=()=>{M.current=!1,t.current?.querySelectorAll(".card").forEach(s=>{s.style.setProperty("--glow-intensity","0")}),n.current&&c.to(n.current,{opacity:0,duration:.3,ease:"power2.out"})};return document.addEventListener("mousemove",b),document.addEventListener("mouseleave",v),()=>{document.removeEventListener("mousemove",b),document.removeEventListener("mouseleave",v),n.current?.parentNode?.removeChild(n.current)}},[t,f,a,y,g]),null},j=({children:t,gridRef:f})=>i("div",{className:"card-grid bento-section",ref:f,children:t}),J=()=>{const[t,f]=O(!1);return I(()=>{const a=()=>f(window.innerWidth<=G);return a(),window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[]),t},re=({textAutoHide:t=!0,enableStars:f=!0,enableSpotlight:a=!0,enableBorderGlow:y=!0,disableAnimations:g=!1,spotlightRadius:n=S,particleCount:M=B,enableTilt:x=!1,glowColor:b=C,clickEffect:v=!0,enableMagnetism:s=!0})=>{const A=T(null),E=J(),N=g||E;return i(z,{children:[a&&i(H,{gridRef:A,disableAnimations:N,enabled:a,spotlightRadius:n,glowColor:b}),i(j,{gridRef:A,children:q.map((u,P)=>{const _={className:`card ${t?"card--text-autohide":""} ${y?"card--border-glow":""}`,style:{backgroundColor:u.color,"--glow-color":b}};return f?i(W,{..._,disableAnimations:N,particleCount:M,glowColor:b,enableTilt:x,clickEffect:v,enableMagnetism:s,children:[i("a",{href:u.url,target:"_blank",rel:"noopener noreferrer",style:{position:"absolute",inset:0,zIndex:10,cursor:"pointer"},"aria-label":u.title}),i("div",{className:"card__header",children:i("div",{className:"card__label",children:u.label})}),i("div",{className:"card__content",children:[i("h2",{className:"card__title",children:u.title}),i("p",{className:"card__description",children:u.description})]})]},P):i("div",{..._,ref:d=>{if(!d)return;const e=p=>{if(N)return;const h=d.getBoundingClientRect(),m=p.clientX-h.left,r=p.clientY-h.top,o=h.width/2,l=h.height/2;if(x){const L=(r-l)/l*-10,$=(m-o)/o*10;c.to(d,{rotateX:L,rotateY:$,duration:.1,ease:"power2.out",transformPerspective:1e3})}if(s){const L=(m-o)*.05,$=(r-l)*.05;c.to(d,{x:L,y:$,duration:.3,ease:"power2.out"})}},X=()=>{N||(x&&c.to(d,{rotateX:0,rotateY:0,duration:.3,ease:"power2.out"}),s&&c.to(d,{x:0,y:0,duration:.3,ease:"power2.out"}))},w=p=>{if(!v||N)return;const h=d.getBoundingClientRect(),m=p.clientX-h.left,r=p.clientY-h.top,o=Math.max(Math.hypot(m,r),Math.hypot(m-h.width,r),Math.hypot(m,r-h.height),Math.hypot(m-h.width,r-h.height)),l=document.createElement("div");l.style.cssText=`
                    position: absolute;
                    width: ${o*2}px;
                    height: ${o*2}px;
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(${b}, 0.4) 0%, rgba(${b}, 0.2) 30%, transparent 70%);
                    left: ${m-o}px;
                    top: ${r-o}px;
                    pointer-events: none;
                    z-index: 1000;
                  `,d.appendChild(l),c.fromTo(l,{scale:0,opacity:1},{scale:1,opacity:0,duration:.8,ease:"power2.out",onComplete:()=>l.remove()})};d.addEventListener("mousemove",e),d.addEventListener("mouseleave",X),d.addEventListener("click",w)},children:[i("div",{className:"card__header",children:i("div",{className:"card__label",children:u.label})}),i("div",{className:"card__content",children:[i("h2",{className:"card__title",children:u.title}),i("p",{className:"card__description",children:u.description})]})]},P)})})]})};export{re as default};
