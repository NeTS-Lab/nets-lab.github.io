import{k as M}from"./preact.module.BYSHj7yn.js";import{A as y,d as _,y as q}from"./hooks.module.RibxbAva.js";import{u as s}from"./jsxRuntime.module.BLZlUNXw.js";const D=({items:P,animationTime:h=600,particleCount:p=15,particleDistances:z=[90,10],particleR:L=100,timeVariance:v=300,colors:b=[1,2,3,1,2,3,1,4],initialActiveIndex:E=0})=>{const f=y(null),m=y(null),i=y(null),n=y(null),[d,N]=_(E),u=(t=1)=>t/2-Math.random()*t,g=(t,r,e)=>{const a=(360+u(8))/e*r*(Math.PI/180);return[t*Math.cos(a),t*Math.sin(a)]},R=(t,r,e,a)=>{let o=u(a/10);return{start:g(e[0],p-t,p),end:g(e[1]+u(7),p-t,p),time:r,scale:1+u(.2),color:b[Math.floor(Math.random()*b.length)],rotate:o>0?(o+a/20)*10:(o-a/20)*10}},A=t=>{const r=z,e=L,a=h*2+v;t.style.setProperty("--time",`${a}ms`);for(let o=0;o<p;o++){const k=h*2+u(v*2),l=R(o,k,r,e);t.classList.remove("active"),setTimeout(()=>{const c=document.createElement("span"),$=document.createElement("span");c.classList.add("particle"),c.style.setProperty("--start-x",`${l.start[0]}px`),c.style.setProperty("--start-y",`${l.start[1]}px`),c.style.setProperty("--end-x",`${l.end[0]}px`),c.style.setProperty("--end-y",`${l.end[1]}px`),c.style.setProperty("--time",`${l.time}ms`),c.style.setProperty("--scale",`${l.scale}`),c.style.setProperty("--color",`var(--color-${l.color}, white)`),c.style.setProperty("--rotate",`${l.rotate}deg`),$.classList.add("point"),c.appendChild($),t.appendChild(c),requestAnimationFrame(()=>{t.classList.add("active")}),setTimeout(()=>{try{t.removeChild(c)}catch{}},k)},30)}},x=t=>{if(!f.current||!i.current||!n.current)return;const r=f.current.getBoundingClientRect(),e=t.getBoundingClientRect(),a={left:`${e.x-r.x}px`,top:`${e.y-r.y}px`,width:`${e.width}px`,height:`${e.height}px`};Object.assign(i.current.style,a),Object.assign(n.current.style,a),n.current.innerText=t.innerText},w=(t,r)=>{const e=t.currentTarget;d!==r&&(N(r),x(e),i.current&&i.current.querySelectorAll(".particle").forEach(o=>i.current.removeChild(o)),n.current&&(n.current.classList.remove("active"),n.current.offsetWidth,n.current.classList.add("active")),i.current&&A(i.current))},T=(t,r)=>{if(t.key==="Enter"||t.key===" "){t.preventDefault();const e=t.currentTarget.parentElement;e&&w({currentTarget:e},r)}};return q(()=>{if(!m.current||!f.current)return;const t=m.current.querySelectorAll("li")[d];t&&(x(t),n.current?.classList.add("active"));const r=new ResizeObserver(()=>{const e=m.current?.querySelectorAll("li")[d];e&&x(e)});return r.observe(f.current),()=>r.disconnect()},[d]),s(M,{children:[s("style",{children:`
        :root {
          --linear-ease: linear(0, 0.068, 0.19 2.7%, 0.804 8.1%, 1.037, 1.199 13.2%, 1.245, 1.27 15.8%, 1.274, 1.272 17.4%, 1.249 19.1%, 0.996 28%, 0.949, 0.928 33.3%, 0.926, 0.933 36.8%, 1.001 45.6%, 1.013, 1.019 50.8%, 1.018 54.4%, 1 63.1%, 0.995 68%, 1.001 85%, 1);
        }
        .effect {
          position: absolute;
          opacity: 1;
          pointer-events: none;
          display: grid;
          place-items: center;
          z-index: 1;
        }
        .effect.text {
          color: white;
          transition: color 0.3s ease;
        }
        .effect.text.active {
          color: white;
          text-shadow: 0 0 6px rgba(255, 255, 255, 0.6), 0 0 12px rgba(255, 255, 255, 0.4);

        }
        .effect.filter {
          filter: blur(7px) contrast(100) blur(0);
          mix-blend-mode: lighten;
        }
        .effect.filter::before {
          content: "";
          position: absolute;
          inset: -75px;
          z-index: -2;
          background: black;
        }
        .effect.filter::after {
          content: "";
          position: absolute;
          inset: 0;
          background: white;
          transform: scale(0);
          opacity: 0;
          z-index: -1;
          border-radius: 9999px;
        }
        .effect.active::after {
          animation: pill 0.3s ease both;
        }
        @keyframes pill {
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .particle,
        .point {
          display: block;
          opacity: 0;
          width: 20px;
          height: 20px;
          border-radius: 9999px;
          transform-origin: center;
        }
        .particle {
          --time: 5s;
          position: absolute;
          top: calc(50% - 8px);
          left: calc(50% - 8px);
          animation: particle calc(var(--time)) ease 1 -350ms;
        }
        .point {
          background: var(--color);
          opacity: 1;
          animation: point calc(var(--time)) ease 1 -350ms;
        }
        @keyframes particle {
          0% {
            transform: rotate(0deg) translate(calc(var(--start-x)), calc(var(--start-y)));
            opacity: 1;
            animation-timing-function: cubic-bezier(0.55, 0, 1, 0.45);
          }
          70% {
            transform: rotate(calc(var(--rotate) * 0.5)) translate(calc(var(--end-x) * 1.2), calc(var(--end-y) * 1.2));
            opacity: 1;
            animation-timing-function: ease;
          }
          85% {
            transform: rotate(calc(var(--rotate) * 0.66)) translate(calc(var(--end-x)), calc(var(--end-y)));
            opacity: 1;
          }
          100% {
            transform: rotate(calc(var(--rotate) * 1.2)) translate(calc(var(--end-x) * 0.5), calc(var(--end-y) * 0.5));
            opacity: 1;
          }
        }
        @keyframes point {
          0% {
            transform: scale(0);
            opacity: 0;
            animation-timing-function: cubic-bezier(0.55, 0, 1, 0.45);
          }
          25% {
            transform: scale(calc(var(--scale) * 0.25));
          }
          38% {
            opacity: 1;
          }
          65% {
            transform: scale(var(--scale));
            opacity: 1;
            animation-timing-function: ease;
          }
          85% {
            transform: scale(var(--scale));
            opacity: 1;
          }
          100% {
            transform: scale(0);
            opacity: 0;
          }
        }
        li.active {
          color: white;
          text-shadow: none;
        }
        li.active::after {
          opacity: 1;
          transform: scale(1);
        }
        li::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 4px;
          height: 3px;
          border-radius: 2px;
          background: transparent;
          box-shadow: 0 2px 8px 0 rgba(0,0,0,0.12);
          opacity: 1;
          transform: scale(1);
          transition: all 0.3s ease;
          z-index: -1;
        }
      `}),s("div",{className:"relative",ref:f,children:[s("nav",{className:"flex relative",style:{transform:"translate3d(0,0,0.01px)"},children:s("ul",{ref:m,className:"flex gap-8 list-none p-0 px-4 m-0 relative z-[3]",style:{color:"white",textShadow:"0 1px 1px hsl(205deg 30% 10% / 0.2)"},children:P.map((t,r)=>s("li",{className:`rounded-full relative cursor-pointer transition-[background-color_color_box-shadow] duration-300 ease shadow-[0_0_0.5px_1.5px_transparent] text-white ${d===r?"active":""}`,children:s("a",{href:t.href,onClick:e=>w(e,r),onKeyDown:e=>T(e,r),className:"outline-none py-[0.6em] px-[1em] inline-block",children:t.label})},r))})}),s("span",{className:"effect filter",ref:i}),s("span",{className:"effect text",ref:n})]})]})};export{D as default};
