(()=>{"use strict";(e=>{const t=document.querySelector("#timer-days"),n=document.querySelector("#timer-hours"),r=document.querySelector("#timer-minutes"),o=document.querySelector("#timer-seconds"),l=()=>{let e=(new Date("25 march 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,days:Math.floor(e/60/60/24),hours:Math.floor(e/60/60)%24,minutes:Math.floor(e/60)%60,seconds:Math.floor(e%60)}};let c=l(),a=setInterval((()=>{c.timeRemaining>0?(()=>{let e=l();5>e.days%10>1?t.textContent=e.days+" дня /":e.days%10==1&&11!=e.days?t.textContent=e.days+" день /":t.textContent=e.days+" дней /",e.hours<10&&e.hours>=0?n.textContent="0"+e.hours+" ч":n.textContent=e.hours+" ч",e.minutes<10&&e.minutes>=0?r.textContent="0"+e.minutes+" м":r.textContent=e.minutes+" м",e.seconds<10&&e.seconds>=0?o.textContent="0"+e.seconds+" с":o.textContent=e.seconds+" с"})():(clearTimeout(a),console.log("Остановка!"))}),1e3)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),r=document.querySelector('[href="#service-block"]'),o=t.querySelectorAll("ul>li>a"),l=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",l),n.addEventListener("click",l),r.addEventListener("click",(e=>{e.preventDefault();const t=r.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth",block:"start"})})),o.forEach((e=>e.addEventListener("click",l))),o.forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();const n=e.getAttribute("href");document.querySelector(n).scrollIntoView({behavior:"smooth",block:"start"})}))}))})(),(()=>{const e=document.querySelector(".popup"),t=e.querySelector(".popup-content"),n=document.querySelectorAll(".popup-btn"),r=e.querySelector(".popup-close");let o,l=0;const c=()=>{o=requestAnimationFrame(c),t.style.transition="all 0.3s",t.style.top>"10%"?(l++,t.style.top=120-10*l+"%"):cancelAnimationFrame(o)},a=()=>{o=requestAnimationFrame(c),t.style.transition="all 0.3s",t.style.top<"120%"?(l++,t.style.top=10+10*l+"%"):cancelAnimationFrame(o)};n.forEach((n=>{n.addEventListener("click",(()=>{e.style.display="block",innerWidth<=768?t.style.top="10%":(o=requestAnimationFrame(c),t.style.top="120%")}))})),r.addEventListener("click",(()=>{innerWidth>768?(t.style.top="120%",l=0):(o=requestAnimationFrame(a),t.style.top="10%"),setTimeout((()=>{e.style.display="none"}),100)}))})(),(()=>{const e=document.querySelector(".calc-block").querySelectorAll("input"),t=document.querySelector(".mess"),n=document.querySelectorAll('[type="tel"]'),r=document.querySelectorAll('[type="email"]'),o=document.querySelectorAll('[name="user_name"]');e.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/g,"")}))})),t.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-я -]/gi,"")})),n.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^0-9()-]/gi,"")}))})),r.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^\@\-\_\.\!\~\*\'\w]/gi,"")}))})),o.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value=e.target.value.replace(/[^а-я]/gi,"")}))}))})()})();