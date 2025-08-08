import{k as T}from"./preact.module.BYSHj7yn.js";import{A as I,d as z,y as R,q as D}from"./hooks.module.RibxbAva.js";import{g as i}from"./index.CH_iu5NA.js";/* empty css                         */import{u as s}from"./jsxRuntime.module.BLZlUNXw.js";const O=12,S=300,C="132, 0, 255",G=768,U=[{color:"#060010",title:"Proceedings of GLOW2025",description:"Open Access",label:"Paper",url:"https://www.example.com"},{color:"#060010",title:"",description:"Presented at GLOW2025",label:"Poster",url:"https://www.example.com"},{color:"#060010",title:"XLSX table",description:"Full table of phenomena included in the BLIMP-It benchmark",label:"BLIMP-It Overview",url:"https://www.example.com"},{color:"#060010",title:"Help us extended BLIMP-It!",description:"Click here to propose new phenomena to be included in the benchmark",label:"Submission form",url:"https://www.example.com"},{color:"#060010",title:"",description:"",label:"README file",url:"https://www.example.com"}],W=(t,f,a=C)=>{const y=document.createElement("div");return y.className="particle",y.style.cssText=`
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
  `,y},F=t=>({proximity:t*.5,fadeDistance:t*.75}),q=(t,f,a,y,g)=>{const r=t.getBoundingClientRect(),M=(f-r.left)/r.width*100,x=(a-r.top)/r.height*100;t.style.setProperty("--glow-x",`${M}%`),t.style.setProperty("--glow-y",`${x}%`),t.style.setProperty("--glow-intensity",y.toString()),t.style.setProperty("--glow-radius",`${g}px`)},H=({children:t,className:f="",disableAnimations:a=!1,style:y,particleCount:g=O,glowColor:r=C,enableTilt:M=!0,clickEffect:x=!1,enableMagnetism:w=!1})=>{const v=I(null),c=I([]),k=I([]),b=I(!1),$=I([]),u=I(!1),X=I(null),Y=D(()=>{if(u.current||!v.current)return;const{width:e,height:N}=v.current.getBoundingClientRect();$.current=Array.from({length:g},()=>W(Math.random()*e,Math.random()*N,r)),u.current=!0},[g,r]),L=D(()=>{k.current.forEach(clearTimeout),k.current=[],X.current?.kill(),c.current.forEach(e=>{i.to(e,{scale:0,opacity:0,duration:.3,ease:"back.in(1.7)",onComplete:()=>{e.parentNode?.removeChild(e)}})}),c.current=[]},[]),l=D(()=>{!v.current||!b.current||(u.current||Y(),$.current.forEach((e,N)=>{const E=setTimeout(()=>{if(!b.current||!v.current)return;const p=e.cloneNode(!0);v.current.appendChild(p),c.current.push(p),i.fromTo(p,{scale:0,opacity:0},{scale:1,opacity:1,duration:.3,ease:"back.out(1.7)"}),i.to(p,{x:(Math.random()-.5)*100,y:(Math.random()-.5)*100,rotation:Math.random()*360,duration:2+Math.random()*2,ease:"none",repeat:-1,yoyo:!0}),i.to(p,{opacity:.3,duration:1.5,ease:"power2.inOut",repeat:-1,yoyo:!0})},N*100);k.current.push(E)}))},[Y]);return R(()=>{if(a||!v.current)return;const e=v.current,N=()=>{b.current=!0,l(),M&&i.to(e,{rotateX:5,rotateY:5,duration:.3,ease:"power2.out",transformPerspective:1e3})},E=()=>{b.current=!1,L(),M&&i.to(e,{rotateX:0,rotateY:0,duration:.3,ease:"power2.out"}),w&&i.to(e,{x:0,y:0,duration:.3,ease:"power2.out"})},p=m=>{if(!M&&!w)return;const n=e.getBoundingClientRect(),o=m.clientX-n.left,d=m.clientY-n.top,_=n.width/2,P=n.height/2;if(M){const A=(d-P)/P*-10,B=(o-_)/_*10;i.to(e,{rotateX:A,rotateY:B,duration:.1,ease:"power2.out",transformPerspective:1e3})}if(w){const A=(o-_)*.05,B=(d-P)*.05;X.current=i.to(e,{x:A,y:B,duration:.3,ease:"power2.out"})}},h=m=>{if(!x)return;const n=e.getBoundingClientRect(),o=m.clientX-n.left,d=m.clientY-n.top,_=Math.max(Math.hypot(o,d),Math.hypot(o-n.width,d),Math.hypot(o,d-n.height),Math.hypot(o-n.width,d-n.height)),P=document.createElement("div");P.style.cssText=`
        position: absolute;
        width: ${_*2}px;
        height: ${_*2}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(${r}, 0.4) 0%, rgba(${r}, 0.2) 30%, transparent 70%);
        left: ${o-_}px;
        top: ${d-_}px;
        pointer-events: none;
        z-index: 1000;
      `,e.appendChild(P),i.fromTo(P,{scale:0,opacity:1},{scale:1,opacity:0,duration:.8,ease:"power2.out",onComplete:()=>P.remove()})};return e.addEventListener("mouseenter",N),e.addEventListener("mouseleave",E),e.addEventListener("mousemove",p),e.addEventListener("click",h),()=>{b.current=!1,e.removeEventListener("mouseenter",N),e.removeEventListener("mouseleave",E),e.removeEventListener("mousemove",p),e.removeEventListener("click",h),L()}},[l,L,a,M,w,x,r]),s("div",{ref:v,className:`${f} particle-container`,style:{...y,position:"relative",overflow:"hidden"},children:t})},K=({gridRef:t,disableAnimations:f=!1,enabled:a=!0,spotlightRadius:y=S,glowColor:g=C})=>{const r=I(null),M=I(!1);return R(()=>{if(f||!t?.current||!a)return;const x=document.createElement("div");x.className="global-spotlight",x.style.cssText=`
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
    `,document.body.appendChild(x),r.current=x;const w=c=>{if(!r.current||!t.current)return;const b=t.current.closest(".bento-section")?.getBoundingClientRect(),$=b&&c.clientX>=b.left&&c.clientX<=b.right&&c.clientY>=b.top&&c.clientY<=b.bottom;M.current=$||!1;const u=t.current.querySelectorAll(".card");if(!$){i.to(r.current,{opacity:0,duration:.3,ease:"power2.out"}),u.forEach(e=>{e.style.setProperty("--glow-intensity","0")});return}const{proximity:X,fadeDistance:Y}=F(y);let L=1/0;u.forEach(e=>{const N=e,E=N.getBoundingClientRect(),p=E.left+E.width/2,h=E.top+E.height/2,m=Math.hypot(c.clientX-p,c.clientY-h)-Math.max(E.width,E.height)/2,n=Math.max(0,m);L=Math.min(L,n);let o=0;n<=X?o=1:n<=Y&&(o=(Y-n)/(Y-X)),q(N,c.clientX,c.clientY,o,y)}),i.to(r.current,{left:c.clientX,top:c.clientY,duration:.1,ease:"power2.out"});const l=L<=X?.8:L<=Y?(Y-L)/(Y-X)*.8:0;i.to(r.current,{opacity:l,duration:l>0?.2:.5,ease:"power2.out"})},v=()=>{M.current=!1,t.current?.querySelectorAll(".card").forEach(c=>{c.style.setProperty("--glow-intensity","0")}),r.current&&i.to(r.current,{opacity:0,duration:.3,ease:"power2.out"})};return document.addEventListener("mousemove",w),document.addEventListener("mouseleave",v),()=>{document.removeEventListener("mousemove",w),document.removeEventListener("mouseleave",v),r.current?.parentNode?.removeChild(r.current)}},[t,f,a,y,g]),null},V=({children:t,gridRef:f})=>s("div",{className:"card-grid bento-section",ref:f,children:t}),j=()=>{const[t,f]=z(!1);return R(()=>{const a=()=>f(window.innerWidth<=G);return a(),window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[]),t},ne=({textAutoHide:t=!0,enableStars:f=!0,enableSpotlight:a=!0,enableBorderGlow:y=!0,disableAnimations:g=!1,spotlightRadius:r=S,particleCount:M=O,enableTilt:x=!1,glowColor:w=C,clickEffect:v=!0,enableMagnetism:c=!0})=>{const k=I(null),b=j(),$=g||b;return s(T,{children:[a&&s(K,{gridRef:k,disableAnimations:$,enabled:a,spotlightRadius:r,glowColor:w}),s(V,{gridRef:k,children:U.map((u,X)=>{const L={className:`card ${t?"card--text-autohide":""} ${y?"card--border-glow":""}`,style:{backgroundColor:u.color,"--glow-color":w}};return f?s(H,{...L,disableAnimations:$,particleCount:M,glowColor:w,enableTilt:x,clickEffect:v,enableMagnetism:c,children:[s("a",{href:u.url,target:"_blank",rel:"noopener noreferrer",style:{position:"absolute",inset:0,zIndex:10,cursor:"pointer"},"aria-label":u.title}),s("div",{className:"card__header",children:s("div",{className:"card__label",children:u.label})}),s("div",{className:"card__content",children:[s("h2",{className:"card__title",children:u.title}),s("p",{className:"card__description",children:u.description})]})]},X):s("div",{...L,ref:l=>{if(!l)return;const e=p=>{if($)return;const h=l.getBoundingClientRect(),m=p.clientX-h.left,n=p.clientY-h.top,o=h.width/2,d=h.height/2;if(x){const _=(n-d)/d*-10,P=(m-o)/o*10;i.to(l,{rotateX:_,rotateY:P,duration:.1,ease:"power2.out",transformPerspective:1e3})}if(c){const _=(m-o)*.05,P=(n-d)*.05;i.to(l,{x:_,y:P,duration:.3,ease:"power2.out"})}},N=()=>{$||(x&&i.to(l,{rotateX:0,rotateY:0,duration:.3,ease:"power2.out"}),c&&i.to(l,{x:0,y:0,duration:.3,ease:"power2.out"}))},E=p=>{if(!v||$)return;const h=l.getBoundingClientRect(),m=p.clientX-h.left,n=p.clientY-h.top,o=Math.max(Math.hypot(m,n),Math.hypot(m-h.width,n),Math.hypot(m,n-h.height),Math.hypot(m-h.width,n-h.height)),d=document.createElement("div");d.style.cssText=`
                    position: absolute;
                    width: ${o*2}px;
                    height: ${o*2}px;
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(${w}, 0.4) 0%, rgba(${w}, 0.2) 30%, transparent 70%);
                    left: ${m-o}px;
                    top: ${n-o}px;
                    pointer-events: none;
                    z-index: 1000;
                  `,l.appendChild(d),i.fromTo(d,{scale:0,opacity:1},{scale:1,opacity:0,duration:.8,ease:"power2.out",onComplete:()=>d.remove()})};l.addEventListener("mousemove",e),l.addEventListener("mouseleave",N),l.addEventListener("click",E)},children:[s("div",{className:"card__header",children:s("div",{className:"card__label",children:u.label})}),s("div",{className:"card__content",children:[s("h2",{className:"card__title",children:u.title}),s("p",{className:"card__description",children:u.description})]})]},X)})})]})};export{ne as default};
