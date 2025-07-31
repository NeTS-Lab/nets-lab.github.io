import"./preact.module.BYSHj7yn.js";import{A as O,y as G}from"./hooks.module.RibxbAva.js";import{u as N}from"./jsxRuntime.module.BLZlUNXw.js";import{T as X,M as y,V as h,R as Y,G as $,P as J,a as K}from"./Mesh.BQZ91osC.js";const Q=new y,U=new h,Z=new h;class D extends X{constructor(t,{near:e=.1,far:i=100,fov:r=45,aspect:o=1,left:m,right:a,bottom:v,top:w,zoom:M=1}={}){super(),Object.assign(this,{near:e,far:i,fov:r,aspect:o,left:m,right:a,bottom:v,top:w,zoom:M}),this.projectionMatrix=new y,this.viewMatrix=new y,this.projectionViewMatrix=new y,this.worldPosition=new h,this.type=m||a?"orthographic":"perspective",this.type==="orthographic"?this.orthographic():this.perspective()}perspective({near:t=this.near,far:e=this.far,fov:i=this.fov,aspect:r=this.aspect}={}){return Object.assign(this,{near:t,far:e,fov:i,aspect:r}),this.projectionMatrix.fromPerspective({fov:i*(Math.PI/180),aspect:r,near:t,far:e}),this.type="perspective",this}orthographic({near:t=this.near,far:e=this.far,left:i=this.left||-1,right:r=this.right||1,bottom:o=this.bottom||-1,top:m=this.top||1,zoom:a=this.zoom}={}){return Object.assign(this,{near:t,far:e,left:i,right:r,bottom:o,top:m,zoom:a}),i/=a,r/=a,o/=a,m/=a,this.projectionMatrix.fromOrthogonal({left:i,right:r,bottom:o,top:m,near:t,far:e}),this.type="orthographic",this}updateMatrixWorld(){return super.updateMatrixWorld(),this.viewMatrix.inverse(this.worldMatrix),this.worldMatrix.getTranslation(this.worldPosition),this.projectionViewMatrix.multiply(this.projectionMatrix,this.viewMatrix),this}updateProjectionMatrix(){return this.type==="perspective"?this.perspective():this.orthographic()}lookAt(t){return super.lookAt(t,!0),this}project(t){return t.applyMatrix4(this.viewMatrix),t.applyMatrix4(this.projectionMatrix),this}unproject(t){return t.applyMatrix4(Q.inverse(this.projectionMatrix)),t.applyMatrix4(this.worldMatrix),this}updateFrustum(){this.frustum||(this.frustum=[new h,new h,new h,new h,new h,new h]);const t=this.projectionViewMatrix;this.frustum[0].set(t[3]-t[0],t[7]-t[4],t[11]-t[8]).constant=t[15]-t[12],this.frustum[1].set(t[3]+t[0],t[7]+t[4],t[11]+t[8]).constant=t[15]+t[12],this.frustum[2].set(t[3]+t[1],t[7]+t[5],t[11]+t[9]).constant=t[15]+t[13],this.frustum[3].set(t[3]-t[1],t[7]-t[5],t[11]-t[9]).constant=t[15]-t[13],this.frustum[4].set(t[3]-t[2],t[7]-t[6],t[11]-t[10]).constant=t[15]-t[14],this.frustum[5].set(t[3]+t[2],t[7]+t[6],t[11]+t[10]).constant=t[15]+t[14];for(let e=0;e<6;e++){const i=1/this.frustum[e].distance();this.frustum[e].multiply(i),this.frustum[e].constant*=i}}frustumIntersectsMesh(t,e=t.worldMatrix){if(!t.geometry.attributes.position||((!t.geometry.bounds||t.geometry.bounds.radius===1/0)&&t.geometry.computeBoundingSphere(),!t.geometry.bounds))return!0;const i=U;i.copy(t.geometry.bounds.center),i.applyMatrix4(e);const r=t.geometry.bounds.radius*e.getMaxScaleOnAxis();return this.frustumIntersectsSphere(i,r)}frustumIntersectsSphere(t,e){const i=Z;for(let r=0;r<6;r++){const o=this.frustum[r];if(i.copy(o).dot(t)+o.constant<-e)return!1}return!0}}const H=["#ffffff","#ffffff","#ffffff"],tt=u=>{u=u.replace(/^#/,""),u.length===3&&(u=u.split("").map(o=>o+o).join(""));const t=parseInt(u,16),e=(t>>16&255)/255,i=(t>>8&255)/255,r=(t&255)/255;return[e,i,r]},et=`
  attribute vec3 position;
  attribute vec4 random;
  attribute vec3 color;
  
  uniform mat4 modelMatrix;
  uniform mat4 viewMatrix;
  uniform mat4 projectionMatrix;
  uniform float uTime;
  uniform float uSpread;
  uniform float uBaseSize;
  uniform float uSizeRandomness;
  
  varying vec4 vRandom;
  varying vec3 vColor;
  
  void main() {
    vRandom = random;
    vColor = color;
    
    vec3 pos = position * uSpread;
    pos.z *= 10.0;
    
    vec4 mPos = modelMatrix * vec4(pos, 1.0);
    float t = uTime;
    mPos.x += sin(t * random.z + 6.28 * random.w) * mix(0.1, 1.5, random.x);
    mPos.y += sin(t * random.y + 6.28 * random.x) * mix(0.1, 1.5, random.w);
    mPos.z += sin(t * random.w + 6.28 * random.y) * mix(0.1, 1.5, random.z);
    
    vec4 mvPos = viewMatrix * mPos;
    gl_PointSize = (uBaseSize * (1.0 + uSizeRandomness * (random.x - 0.5))) / length(mvPos.xyz);
    gl_Position = projectionMatrix * mvPos;
  }
`,it=`
  precision highp float;
  
  uniform float uTime;
  uniform float uAlphaParticles;
  varying vec4 vRandom;
  varying vec3 vColor;
  
  void main() {
    vec2 uv = gl_PointCoord.xy;
    float d = length(uv - vec2(0.5));
    
    if(uAlphaParticles < 0.5) {
      if(d > 0.5) {
        discard;
      }
      gl_FragColor = vec4(vColor + 0.2 * sin(uv.yxx + uTime + vRandom.y * 6.28), 1.0);
    } else {
      float circle = smoothstep(0.5, 0.4, d) * 0.8;
      gl_FragColor = vec4(vColor + 0.2 * sin(uv.yxx + uTime + vRandom.y * 6.28), circle);
    }
  }
`;function at({particleCount:u=200,particleSpread:t=10,speed:e=.1,particleColors:i,moveParticlesOnHover:r=!1,particleHoverFactor:o=1,alphaParticles:m=!1,particleBaseSize:a=100,sizeRandomness:v=1,cameraDistance:w=20,disableRotation:M=!1,className:W=""}){const C=O(null),P=O({x:0,y:0});return G(()=>{const p=C.current;if(!p)return;const j=new Y({depth:!1,alpha:!0}),c=j.gl;p.appendChild(c.canvas),c.clearColor(0,0,0,0);const z=new D(c,{fov:15});z.position.set(0,0,w);const b=()=>{const s=p.clientWidth,n=p.clientHeight;j.setSize(s,n),z.perspective({aspect:c.canvas.width/c.canvas.height})};window.addEventListener("resize",b),b();const R=s=>{const n=p.getBoundingClientRect(),f=(s.clientX-n.left)/n.width*2-1,d=-((s.clientY-n.top)/n.height*2-1);P.current={x:f,y:d}};r&&window.addEventListener("mousemove",R);const x=u,F=new Float32Array(x*3),I=new Float32Array(x*4),V=new Float32Array(x*3),L=i?.length?i:H;for(let s=0;s<x;s++){let n,f,d,T;do n=Math.random()*2-1,f=Math.random()*2-1,d=Math.random()*2-1,T=n*n+f*f+d*d;while(T>1||T===0);const A=Math.cbrt(Math.random());F.set([n*A,f*A,d*A],s*3),I.set([Math.random(),Math.random(),Math.random(),Math.random()],s*4);const q=tt(L[Math.floor(Math.random()*L.length)]);V.set(q,s*3)}const k=new $(c,{position:{size:3,data:F},random:{size:4,data:I},color:{size:3,data:V}}),_=new J(c,{vertex:et,fragment:it,uniforms:{uTime:{value:0},uSpread:{value:t},uBaseSize:{value:a},uSizeRandomness:{value:v},uAlphaParticles:{value:m?1:0}},transparent:!0,depthTest:!1}),l=new K(c,{mode:c.POINTS,geometry:k,program:_});let S,B=performance.now(),g=0;const E=s=>{S=requestAnimationFrame(E);const n=s-B;B=s,g+=n*e,_.uniforms.uTime.value=g*.001,r?(l.position.x=-P.current.x*o,l.position.y=-P.current.y*o):(l.position.x=0,l.position.y=0),M||(l.rotation.x=Math.sin(g*2e-4)*.1,l.rotation.y=Math.cos(g*5e-4)*.15,l.rotation.z+=.01*e),j.render({scene:l,camera:z})};return S=requestAnimationFrame(E),()=>{window.removeEventListener("resize",b),r&&window.removeEventListener("mousemove",R),cancelAnimationFrame(S),p.contains(c.canvas)&&p.removeChild(c.canvas)}},[u,t,e,r,o,m,a,v,w,M]),N("div",{ref:C,class:`relative w-full h-full ${W}`})}export{at as default};
