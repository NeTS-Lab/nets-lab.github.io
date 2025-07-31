import"./preact.module.BYSHj7yn.js";import{A as v,y as F}from"./hooks.module.RibxbAva.js";import{u as M}from"./jsxRuntime.module.BLZlUNXw.js";import{G as S,R as W,P as G,a as N}from"./Mesh.BQZ91osC.js";class H extends S{constructor(c,{attributes:a={}}={}){Object.assign(a,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),super(c,a)}}const X=({enableRainbow:f=!1,gridColor:c="#ffffff",rippleIntensity:a=.05,gridSize:m=10,gridThickness:d=15,fadeDistance:p=1.5,vignetteStrength:g=2,glowIntensity:h=.1,opacity:x=1,gridRotation:y=0,mouseInteraction:i=!0,mouseInteractionRadius:R=1})=>{const n=v(null),u=v({x:.5,y:.5}),w=v({x:.5,y:.5}),I=v(0),o=v(null);return F(()=>{if(!n.current)return;const T=r=>{const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);return t?[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]:[1,1,1]},l=new W({dpr:Math.min(window.devicePixelRatio,2),alpha:!0}),e=l.gl;e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),e.canvas.style.width="100%",e.canvas.style.height="100%",n.current.appendChild(e.canvas);const z=`
attribute vec2 position;
varying vec2 vUv;
void main() {
    vUv = position * 0.5 + 0.5;
    gl_Position = vec4(position, 0.0, 1.0);
}`,A=`precision highp float;
uniform float iTime;
uniform vec2 iResolution;
uniform bool enableRainbow;
uniform vec3 gridColor;
uniform float rippleIntensity;
uniform float gridSize;
uniform float gridThickness;
uniform float fadeDistance;
uniform float vignetteStrength;
uniform float glowIntensity;
uniform float opacity;
uniform float gridRotation;
uniform bool mouseInteraction;
uniform vec2 mousePosition;
uniform float mouseInfluence;
uniform float mouseInteractionRadius;
varying vec2 vUv;

float pi = 3.141592;

mat2 rotate(float angle) {
    float s = sin(angle);
    float c = cos(angle);
    return mat2(c, -s, s, c);
}

void main() {
    vec2 uv = vUv * 2.0 - 1.0;
    uv.x *= iResolution.x / iResolution.y;

    if (gridRotation != 0.0) {
        uv = rotate(gridRotation * pi / 180.0) * uv;
    }

    float dist = length(uv);
    float func = sin(pi * (iTime - dist));
    vec2 rippleUv = uv + uv * func * rippleIntensity;

    if (mouseInteraction && mouseInfluence > 0.0) {
        vec2 mouseUv = (mousePosition * 2.0 - 1.0);
        mouseUv.x *= iResolution.x / iResolution.y;
        float mouseDist = length(uv - mouseUv);
        
        float influence = mouseInfluence * exp(-mouseDist * mouseDist / (mouseInteractionRadius * mouseInteractionRadius));
        
        float mouseWave = sin(pi * (iTime * 2.0 - mouseDist * 3.0)) * influence;
        rippleUv += normalize(uv - mouseUv) * mouseWave * rippleIntensity * 0.3;
    }

    vec2 a = sin(gridSize * 0.5 * pi * rippleUv - pi / 2.0);
    vec2 b = abs(a);

    float aaWidth = 0.5;
    vec2 smoothB = vec2(
        smoothstep(0.0, aaWidth, b.x),
        smoothstep(0.0, aaWidth, b.y)
    );

    vec3 color = vec3(0.0);
    color += exp(-gridThickness * smoothB.x * (0.8 + 0.5 * sin(pi * iTime)));
    color += exp(-gridThickness * smoothB.y);
    color += 0.5 * exp(-(gridThickness / 4.0) * sin(smoothB.x));
    color += 0.5 * exp(-(gridThickness / 3.0) * smoothB.y);

    if (glowIntensity > 0.0) {
        color += glowIntensity * exp(-gridThickness * 0.5 * smoothB.x);
        color += glowIntensity * exp(-gridThickness * 0.5 * smoothB.y);
    }

    float ddd = exp(-2.0 * clamp(pow(dist, fadeDistance), 0.0, 1.0));
    
    vec2 vignetteCoords = vUv - 0.5;
    float vignetteDistance = length(vignetteCoords);
    float vignette = 1.0 - pow(vignetteDistance * 2.0, vignetteStrength);
    vignette = clamp(vignette, 0.0, 1.0);
    
    vec3 t;
    if (enableRainbow) {
        t = vec3(
            uv.x * 0.5 + 0.5 * sin(iTime),
            uv.y * 0.5 + 0.5 * cos(iTime),
            pow(cos(iTime), 4.0)
        ) + 0.5;
    } else {
        t = gridColor;
    }

    float finalFade = ddd * vignette;
    float alpha = length(color) * finalFade * opacity;
    gl_FragColor = vec4(color * t * finalFade * opacity, alpha);
}`,s={iTime:{value:0},iResolution:{value:[1,1]},enableRainbow:{value:f},gridColor:{value:T(c)},rippleIntensity:{value:a},gridSize:{value:m},gridThickness:{value:d},fadeDistance:{value:p},vignetteStrength:{value:g},glowIntensity:{value:h},opacity:{value:x},gridRotation:{value:y},mouseInteraction:{value:i},mousePosition:{value:[.5,.5]},mouseInfluence:{value:0},mouseInteractionRadius:{value:R}};o.current=s;const D=new H(e),_=new G(e,{vertex:z,fragment:A,uniforms:s}),k=new N(e,{geometry:D,program:_}),b=()=>{const{clientWidth:r,clientHeight:t}=n.current;l.setSize(r,t),s.iResolution.value=[r,t]},U=r=>{if(!i||!n.current)return;const t=n.current.getBoundingClientRect(),E=(r.clientX-t.left)/t.width,L=1-(r.clientY-t.top)/t.height;w.current={x:E,y:L}},C=()=>{i&&(I.current=1)},P=()=>{i&&(I.current=0)};window.addEventListener("resize",b),i&&(n.current.addEventListener("mousemove",U),n.current.addEventListener("mouseenter",C),n.current.addEventListener("mouseleave",P)),b();const B=r=>{s.iTime.value=r*.001;const t=.1;u.current.x+=(w.current.x-u.current.x)*t,u.current.y+=(w.current.y-u.current.y)*t;const E=s.mouseInfluence.value,L=I.current;s.mouseInfluence.value+=(L-E)*.05,s.mousePosition.value=[u.current.x,u.current.y],l.render({scene:k}),requestAnimationFrame(B)};return requestAnimationFrame(B),()=>{window.removeEventListener("resize",b),i&&n.current&&(n.current.removeEventListener("mousemove",U),n.current.removeEventListener("mouseenter",C),n.current.removeEventListener("mouseleave",P)),l.gl.getExtension("WEBGL_lose_context")?.loseContext(),n.current?.removeChild(e.canvas)}},[]),F(()=>{if(!o.current)return;const T=l=>{const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(l);return e?[parseInt(e[1],16)/255,parseInt(e[2],16)/255,parseInt(e[3],16)/255]:[1,1,1]};o.current.enableRainbow.value=f,o.current.gridColor.value=T(c),o.current.rippleIntensity.value=a,o.current.gridSize.value=m,o.current.gridThickness.value=d,o.current.fadeDistance.value=p,o.current.vignetteStrength.value=g,o.current.glowIntensity.value=h,o.current.opacity.value=x,o.current.gridRotation.value=y,o.current.mouseInteraction.value=i,o.current.mouseInteractionRadius.value=R},[f,c,a,m,d,p,g,h,x,y,i,R]),M("div",{ref:n,className:"w-full h-full relative overflow-hidden [&_canvas]:block"})};export{X as default};
