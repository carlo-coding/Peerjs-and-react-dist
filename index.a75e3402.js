import{j as x,r as i,u as R,l as I,R as y,a as P,b as v,c as M,H as S}from"./vendor.6b2f27e2.js";const E=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))p(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&p(u)}).observe(document,{childList:!0,subtree:!0});function d(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function p(o){if(o.ep)return;o.ep=!0;const s=d(o);fetch(o.href,s)}};E();const n=x.exports.jsx,h=x.exports.jsxs;function b(){const a=i.exports.useRef(null),c=e=>a.current.srcObject=e,[d,p]=i.exports.useState(""),[o,s]=i.exports.useState(null),[u,f]=i.exports.useState([]),r=e=>f([...u,e]),m=()=>{if(!o)return;r(`Connecting to ${d}...`);let e=o.connect(d);e==null||e.on("data",t=>{r(`received: ${t}`)}),e==null||e.on("open",()=>{e.send("hi!")}),navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then(t=>{o.call(d,t).on("stream",c)}).catch(t=>{console.log("Failed to get local stream",t)})};return i.exports.useEffect(()=>s(new Peer({host:"localhost",port:"4005",path:"/peerjs/myapp"})),[]),i.exports.useEffect(()=>{!o||(o.on("open",e=>{console.log("connection opened ..."),r("My peer id is: "+e)}),o.on("error",e=>console.log("Error: Lost connection to server.")),o.on("connection",e=>{r("incoming peer connection!"),e.on("data",t=>{r(`received: ${t}`)}),e.on("open",()=>{e.send("Hello!")})}),o.on("call",e=>{navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then(t=>{e.answer(t),e.on("stream",c)}).catch(t=>{console.log("Failed to get local stream",t)})}))},[o]),h("div",{className:"App",children:[n("div",{id:"video-grid"}),n("video",{ref:a,className:"remote-video",autoPlay:!0}),n("input",{placeholder:"Enter peer id: ",value:d,onChange:e=>p(e.target.value)}),n("button",{onClick:m,children:"Connect to peer"}),n("div",{className:"messages",children:u.map((e,t)=>n("div",{children:e},t))})]})}const N=()=>Math.random().toString(16).slice(2);function $({stream:a}){const c=i.exports.useRef(null);return i.exports.useEffect(()=>{c.current.srcObject=a},[]),n("video",{ref:c,autoPlay:!0})}function w(){const a=R(),[c,d]=i.exports.useState(""),p=i.exports.useRef([]),[o,s]=i.exports.useState([]),u=i.exports.useRef(null);function f(r){let m=N();p.current.find(e=>e.id===r.id)||(p.current.push(r),s(e=>[...e,{stream:r,id:m}]))}return i.exports.useEffect(()=>{(async()=>{if(a.roomId)return;const t=await(await fetch("https://peer-connection-dx8mf.ondigitalocean.app/create/room")).json();d(t.id)})();const r=I("wss://peer-connection-dx8mf.ondigitalocean.app/"),m=new Peer({host:"peer-connection-dx8mf.ondigitalocean.app",path:"/peerjs/myapp"});m.on("open",t=>{r.emit("join-room",a.roomId?a.roomId:c,t)});function e(t,l){m.call(t,l).on("stream",j=>{f(j)})}navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then(t=>{f(t),m.on("call",l=>{l.answer(t),l.on("stream",g=>{f(g)}),l.on("closed",g=>{console.log("Closed stream: ",g)})}),r.on("user-connected",l=>{console.log("new user connected",l),e(l,t)})})},[]),h("div",{children:[!a.roomId&&h(y.Fragment,{children:[n("p",{children:"your room url"}),h("a",{href:`${window.location.origin}${window.location.pathname}#/room/${c}`,children:[window.location.origin,window.location.pathname,"#/room/",c]})]}),n("div",{id:"video-grid",ref:u,children:o==null?void 0:o.map(r=>n($,{stream:r==null?void 0:r.stream},r==null?void 0:r.id))})]})}function O(){return n("div",{className:"App",children:h(P,{children:[n(v,{path:"/peer",element:n(b,{})}),n(v,{path:"/room/:roomId",element:n(w,{})}),n(v,{path:"/",element:n(w,{})})]})})}M.render(n(S,{children:n(y.StrictMode,{children:n(O,{})})}),document.getElementById("root"));
