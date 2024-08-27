import{r as reactExports,t as round,a as jsx,j as jsxs}from"./index-5c9d4bf6.js";const Calculator$1="";function Calculator(){const[display,setDisplay]=reactExports.useState("0"),[textSize,setTextSize]=reactExports.useState(4);let displaySizes={0:4,8:3,11:2.5,14:2,17:1.7,19:1.6};reactExports.useEffect(()=>{document.addEventListener("keydown",handleKeyPress),display==="0"&&setTextSize(4);let e=0;for(let a=0;a<Object.keys(displaySizes).length;a++)display.length>=parseInt(Object.keys(displaySizes)[a])&&(e=displaySizes[Object.keys(displaySizes)[a]]);return setTextSize(e),()=>document.removeEventListener("keydown",handleKeyPress)},[display]);const handleKeyPress=e=>{switch(e.key){case"Enter":calculate();break;case"Backspace":setDisplay(display.slice(0,-1));break;case"Escape":setDisplay("0");break;default:e.key.match(/^[0-9+\-*/.()]+$/)&&updateDisplay(e.key);break}},updateDisplay=e=>{if(e=="C")return setDisplay("0");if(e=="%")return setDisplay((parseFloat(display)/100).toString());if(e=="abs")return setDisplay((parseFloat(display)*-1).toString());display==="0"?setDisplay(e):display.length<20&&setDisplay(a=>a+e)},calculate=()=>{try{const val=eval(display||null);setDisplay(round(val,3).toString())}catch(e){setDisplay("Error")}},numberWithSpaces=e=>e.toString().replace(/\B(?=(\d{3})+(?!\d))/g," "),inputs=[{value:"C",color:"grey"},{value:"abs",color:"blue",label:"+/-"},{value:"%",color:"blue",label:"&#37"},{value:"/",color:"blue",label:"&#247"},{value:"7"},{value:"8"},{value:"9"},{value:"*",color:"blue",label:"&#215"},{value:"4"},{value:"5"},{value:"6"},{value:"-",color:"blue",label:"&#45"},{value:"1"},{value:"2"},{value:"3"},{value:"+",color:"blue",label:" &#43"},{value:"0",size:2},{value:".",label:","}];return jsx("div",{className:"calculator-container",children:jsxs("div",{className:"calculator-wrapper",children:[jsx("div",{className:"result-container",style:{fontSize:`${textSize}rem`},children:numberWithSpaces(display)??display}),jsxs("div",{className:"calculator-buttons",children:[inputs.map((e,a)=>jsx("div",{className:`button ${e.color??""}${e.size?" fill":""}`,onClick:()=>updateDisplay(e.value),dangerouslySetInnerHTML:{__html:e.label??e.value}},a)),jsx("div",{className:"button blue",onClick:calculate,children:"="})]})]})})}export{Calculator as default};
