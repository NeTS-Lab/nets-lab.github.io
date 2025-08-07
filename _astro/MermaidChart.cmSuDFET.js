import{_ as d}from"./preload-helper.BlTxHScW.js";import{A as a,y as n}from"./hooks.module.RibxbAva.js";import{u as i}from"./jsxRuntime.module.BLZlUNXw.js";import"./preact.module.BYSHj7yn.js";function h({chart:t}){const e=a(null);return n(()=>{(async()=>{const o=await d(()=>import("https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs"),[]);if(o.default.initialize({startOnLoad:!1,theme:"neutral"}),e.current){e.current.innerHTML="";const r=document.createElement("div");r.className="mermaid",r.textContent=t,e.current.appendChild(r),await o.default.run({nodes:[r]})}})()},[t]),i("div",{class:"overflow-auto rounded-lg border border-gray-300 p-4 shadow",style:{backgroundColor:"rgba(0, 0, 0, 0.5)",width:"100%",maxWidth:"1200px",height:"800px"},ref:e,children:i("style",{children:`
          .mermaid {
            width: 100% !important;
            height: 100% !important;
          }
          .mermaid svg {
            width: 100% !important;
            height: 100% !important;
          }
          /* Glow effect on nodes */
          .mermaid .node > rect,
          .mermaid .node > ellipse,
          .mermaid .node > polygon {
            filter: drop-shadow(0 0 8px #00f9ff);
            transition: filter 0.3s ease;
          }
          .mermaid .node:hover > rect,
          .mermaid .node:hover > ellipse,
          .mermaid .node:hover > polygon {
            filter: drop-shadow(0 0 16px #00f9ff);
          }
        `})})}export{h as default};
