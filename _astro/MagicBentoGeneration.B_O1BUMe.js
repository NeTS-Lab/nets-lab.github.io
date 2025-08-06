import{k as O}from"./preact.module.BYSHj7yn.js";import{A as k,d as S,y as R,q as I}from"./hooks.module.RibxbAva.js";import{g as c}from"./index.CH_iu5NA.js";/* empty css                         */import{u as i}from"./jsxRuntime.module.BLZlUNXw.js";const B=12,z=300,D="132, 0, 255",G=768,U=[{color:"#060010",title:"Full xslx table",description:"",label:"Table of phenomena",url:"https://docs.google.com/spreadsheets/d/1_yxTwJTmYzQj1swjrYkNXEKn8yOeqDEf/edit?usp=sharing&ouid=110319279836360737174&rtpof=true&sd=true"}],q=(t,f,a=D)=>{const y=document.createElement("div");return y.className="particle",y.style.cssText=`
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
  `,y},F=t=>({proximity:t*.5,fadeDistance:t*.75}),W=(t,f,a,y,g)=>{const r=t.getBoundingClientRect(),M=(f-r.left)/r.width*100,x=(a-r.top)/r.height*100;t.style.setProperty("--glow-x",`${M}%`),t.style.setProperty("--glow-y",`${x}%`),t.style.setProperty("--glow-intensity",y.toString()),t.style.setProperty("--glow-radius",`${g}px`)},j=({children:t,className:f="",disableAnimations:a=!1,style:y,particleCount:g=B,glowColor:r=D,enableTilt:M=!0,clickEffect:x=!1,enableMagnetism:b=!1})=>{const v=k(null),s=k([]),C=k([]),w=k(!1),N=k([]),u=k(!1),X=k(null),P=I(()=>{if(u.current||!v.current)return;const{width:e,height:Y}=v.current.getBoundingClientRect();N.current=Array.from({length:g},()=>q(Math.random()*e,Math.random()*Y,r)),u.current=!0},[g,r]),_=I(()=>{C.current.forEach(clearTimeout),C.current=[],X.current?.kill(),s.current.forEach(e=>{c.to(e,{scale:0,opacity:0,duration:.3,ease:"back.in(1.7)",onComplete:()=>{e.parentNode?.removeChild(e)}})}),s.current=[]},[]),d=I(()=>{!v.current||!w.current||(u.current||P(),N.current.forEach((e,Y)=>{const E=setTimeout(()=>{if(!w.current||!v.current)return;const p=e.cloneNode(!0);v.current.appendChild(p),s.current.push(p),c.fromTo(p,{scale:0,opacity:0},{scale:1,opacity:1,duration:.3,ease:"back.out(1.7)"}),c.to(p,{x:(Math.random()-.5)*100,y:(Math.random()-.5)*100,rotation:Math.random()*360,duration:2+Math.random()*2,ease:"none",repeat:-1,yoyo:!0}),c.to(p,{opacity:.3,duration:1.5,ease:"power2.inOut",repeat:-1,yoyo:!0})},Y*100);C.current.push(E)}))},[P]);return R(()=>{if(a||!v.current)return;const e=v.current,Y=()=>{w.current=!0,d(),M&&c.to(e,{rotateX:5,rotateY:5,duration:.3,ease:"power2.out",transformPerspective:1e3})},E=()=>{w.current=!1,_(),M&&c.to(e,{rotateX:0,rotateY:0,duration:.3,ease:"power2.out"}),b&&c.to(e,{x:0,y:0,duration:.3,ease:"power2.out"})},p=m=>{if(!M&&!b)return;const n=e.getBoundingClientRect(),o=m.clientX-n.left,l=m.clientY-n.top,L=n.width/2,$=n.height/2;if(M){const T=(l-$)/$*-10,A=(o-L)/L*10;c.to(e,{rotateX:T,rotateY:A,duration:.1,ease:"power2.out",transformPerspective:1e3})}if(b){const T=(o-L)*.05,A=(l-$)*.05;X.current=c.to(e,{x:T,y:A,duration:.3,ease:"power2.out"})}},h=m=>{if(!x)return;const n=e.getBoundingClientRect(),o=m.clientX-n.left,l=m.clientY-n.top,L=Math.max(Math.hypot(o,l),Math.hypot(o-n.width,l),Math.hypot(o,l-n.height),Math.hypot(o-n.width,l-n.height)),$=document.createElement("div");$.style.cssText=`
        position: absolute;
        width: ${L*2}px;
        height: ${L*2}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(${r}, 0.4) 0%, rgba(${r}, 0.2) 30%, transparent 70%);
        left: ${o-L}px;
        top: ${l-L}px;
        pointer-events: none;
        z-index: 1000;
      `,e.appendChild($),c.fromTo($,{scale:0,opacity:1},{scale:1,opacity:0,duration:.8,ease:"power2.out",onComplete:()=>$.remove()})};return e.addEventListener("mouseenter",Y),e.addEventListener("mouseleave",E),e.addEventListener("mousemove",p),e.addEventListener("click",h),()=>{w.current=!1,e.removeEventListener("mouseenter",Y),e.removeEventListener("mouseleave",E),e.removeEventListener("mousemove",p),e.removeEventListener("click",h),_()}},[d,_,a,M,b,x,r]),i("div",{ref:v,className:`${f} particle-container`,style:{...y,position:"relative",overflow:"hidden"},children:t})},H=({gridRef:t,disableAnimations:f=!1,enabled:a=!0,spotlightRadius:y=z,glowColor:g=D})=>{const r=k(null),M=k(!1);return R(()=>{if(f||!t?.current||!a)return;const x=document.createElement("div");x.className="global-spotlight",x.style.cssText=`
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
    `,document.body.appendChild(x),r.current=x;const b=s=>{if(!r.current||!t.current)return;const w=t.current.closest(".bento-section")?.getBoundingClientRect(),N=w&&s.clientX>=w.left&&s.clientX<=w.right&&s.clientY>=w.top&&s.clientY<=w.bottom;M.current=N||!1;const u=t.current.querySelectorAll(".card");if(!N){c.to(r.current,{opacity:0,duration:.3,ease:"power2.out"}),u.forEach(e=>{e.style.setProperty("--glow-intensity","0")});return}const{proximity:X,fadeDistance:P}=F(y);let _=1/0;u.forEach(e=>{const Y=e,E=Y.getBoundingClientRect(),p=E.left+E.width/2,h=E.top+E.height/2,m=Math.hypot(s.clientX-p,s.clientY-h)-Math.max(E.width,E.height)/2,n=Math.max(0,m);_=Math.min(_,n);let o=0;n<=X?o=1:n<=P&&(o=(P-n)/(P-X)),W(Y,s.clientX,s.clientY,o,y)}),c.to(r.current,{left:s.clientX,top:s.clientY,duration:.1,ease:"power2.out"});const d=_<=X?.8:_<=P?(P-_)/(P-X)*.8:0;c.to(r.current,{opacity:d,duration:d>0?.2:.5,ease:"power2.out"})},v=()=>{M.current=!1,t.current?.querySelectorAll(".card").forEach(s=>{s.style.setProperty("--glow-intensity","0")}),r.current&&c.to(r.current,{opacity:0,duration:.3,ease:"power2.out"})};return document.addEventListener("mousemove",b),document.addEventListener("mouseleave",v),()=>{document.removeEventListener("mousemove",b),document.removeEventListener("mouseleave",v),r.current?.parentNode?.removeChild(r.current)}},[t,f,a,y,g]),null},K=({children:t,gridRef:f})=>i("div",{className:"card-grid bento-section",ref:f,children:t}),J=()=>{const[t,f]=S(!1);return R(()=>{const a=()=>f(window.innerWidth<=G);return a(),window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[]),t},ne=({textAutoHide:t=!0,enableStars:f=!0,enableSpotlight:a=!0,enableBorderGlow:y=!0,disableAnimations:g=!1,spotlightRadius:r=z,particleCount:M=B,enableTilt:x=!1,glowColor:b=D,clickEffect:v=!0,enableMagnetism:s=!0})=>{const C=k(null),w=J(),N=g||w;return i(O,{children:[a&&i(H,{gridRef:C,disableAnimations:N,enabled:a,spotlightRadius:r,glowColor:b}),i(K,{gridRef:C,children:U.map((u,X)=>{const _={className:`card ${t?"card--text-autohide":""} ${y?"card--border-glow":""}`,style:{backgroundColor:u.color,"--glow-color":b}};return f?i(j,{..._,disableAnimations:N,particleCount:M,glowColor:b,enableTilt:x,clickEffect:v,enableMagnetism:s,children:[i("a",{href:u.url,target:"_blank",rel:"noopener noreferrer",style:{position:"absolute",inset:0,zIndex:10,cursor:"pointer"},"aria-label":u.title}),i("div",{className:"card__header",children:i("div",{className:"card__label",children:u.label})}),i("div",{className:"card__content",children:[i("h2",{className:"card__title",children:u.title}),i("p",{className:"card__description",children:u.description})]})]},X):i("div",{..._,ref:d=>{if(!d)return;const e=p=>{if(N)return;const h=d.getBoundingClientRect(),m=p.clientX-h.left,n=p.clientY-h.top,o=h.width/2,l=h.height/2;if(x){const L=(n-l)/l*-10,$=(m-o)/o*10;c.to(d,{rotateX:L,rotateY:$,duration:.1,ease:"power2.out",transformPerspective:1e3})}if(s){const L=(m-o)*.05,$=(n-l)*.05;c.to(d,{x:L,y:$,duration:.3,ease:"power2.out"})}},Y=()=>{N||(x&&c.to(d,{rotateX:0,rotateY:0,duration:.3,ease:"power2.out"}),s&&c.to(d,{x:0,y:0,duration:.3,ease:"power2.out"}))},E=p=>{if(!v||N)return;const h=d.getBoundingClientRect(),m=p.clientX-h.left,n=p.clientY-h.top,o=Math.max(Math.hypot(m,n),Math.hypot(m-h.width,n),Math.hypot(m,n-h.height),Math.hypot(m-h.width,n-h.height)),l=document.createElement("div");l.style.cssText=`
                    position: absolute;
                    width: ${o*2}px;
                    height: ${o*2}px;
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(${b}, 0.4) 0%, rgba(${b}, 0.2) 30%, transparent 70%);
                    left: ${m-o}px;
                    top: ${n-o}px;
                    pointer-events: none;
                    z-index: 1000;
                  `,d.appendChild(l),c.fromTo(l,{scale:0,opacity:1},{scale:1,opacity:0,duration:.8,ease:"power2.out",onComplete:()=>l.remove()})};d.addEventListener("mousemove",e),d.addEventListener("mouseleave",Y),d.addEventListener("click",E)},children:[i("div",{className:"card__header",children:i("div",{className:"card__label",children:u.label})}),i("div",{className:"card__content",children:[i("h2",{className:"card__title",children:u.title}),i("p",{className:"card__description",children:u.description})]})]},X)})})]})};export{ne as default};
