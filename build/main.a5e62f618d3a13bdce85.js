(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(t,e,n){},QfWi:function(t,e,n){"use strict";n.r(e);var a=[{day:"Monday",time:[{hour:"10:00",busy:!1,participants:[],event:""},{hour:"11:00",busy:!1,participants:[],event:""},{hour:"12:00",busy:!1,participants:[],event:""},{hour:"13:00",busy:!1,participants:[],event:""},{hour:"14:00",busy:!1,participants:[],event:""},{hour:"15:00",busy:!1,participants:[],event:""},{hour:"16:00",busy:!1,participants:[],event:""},{hour:"17:00",busy:!1,participants:[],event:""},{hour:"18:00",busy:!1,participants:[],event:""}]},{day:"Tuesday",time:[{hour:"10:00",busy:!1,participants:[],event:""},{hour:"11:00",busy:!1,participants:[],event:""},{hour:"12:00",busy:!1,participants:[],event:""},{hour:"13:00",busy:!1,participants:[],event:""},{hour:"14:00",busy:!1,participants:[],event:""},{hour:"15:00",busy:!1,participants:[],event:""},{hour:"16:00",busy:!1,participants:[],event:""},{hour:"17:00",busy:!1,participants:[],event:""},{hour:"18:00",busy:!1,participants:[],event:""}]},{day:"Wednesday",time:[{hour:"10:00",busy:!1,participants:[],event:""},{hour:"11:00",busy:!1,participants:[],event:""},{hour:"12:00",busy:!1,participants:[],event:""},{hour:"13:00",busy:!1,participants:[],event:""},{hour:"14:00",busy:!1,participants:[],event:""},{hour:"15:00",busy:!1,participants:[],event:""},{hour:"16:00",busy:!1,participants:[],event:""},{hour:"17:00",busy:!1,participants:[],event:""},{hour:"18:00",busy:!1,participants:[],event:""}]},{day:"Thursday",time:[{hour:"10:00",busy:!1,participants:[],event:""},{hour:"11:00",busy:!1,participants:[],event:""},{hour:"12:00",busy:!1,participants:[],event:""},{hour:"13:00",busy:!1,participants:[],event:""},{hour:"14:00",busy:!1,participants:[],event:""},{hour:"15:00",busy:!1,participants:[],event:""},{hour:"16:00",busy:!1,participants:[],event:""},{hour:"17:00",busy:!1,participants:[],event:""},{hour:"18:00",busy:!1,participants:[],event:""}]},{day:"Friday",time:[{hour:"10:00",busy:!1,participants:[],event:""},{hour:"11:00",busy:!1,participants:[],event:""},{hour:"12:00",busy:!1,participants:[],event:""},{hour:"13:00",busy:!1,participants:[],event:""},{hour:"14:00",busy:!1,participants:[],event:""},{hour:"15:00",busy:!1,participants:[],event:""},{hour:"16:00",busy:!1,participants:[],event:""},{hour:"17:00",busy:!1,participants:[],event:""},{hour:"18:00",busy:!1,participants:[],event:""}]}];n("RtS0"),n("3dw1");var i=function(t,e){e.forEach((function(e,n){t.forEach((function(t,a){var i=document.createElement("td");i.classList.add("js-cell"),i.setAttribute("Index-Day",a),i.setAttribute("Index-Time",n),e.appendChild(i)}))}))},r={popup:document.querySelector(".js_eventPopup"),form:document.querySelector(".js-event_form"),bntOpenPopupAddEvent:document.querySelector(".js-open-eventPopup"),btnClosePopupAddEvent:document.querySelector(".js-close-eventPopup"),btnEddEvent:document.querySelector(".js-add-event"),btnCancelAddEvent:document.querySelector(".ja-cancel-addEvent"),table:document.getElementById("calendar"),rowsTime:document.querySelectorAll(".calendar-time"),cellEvent:document.querySelectorAll(".js-cell"),inputParticipants:document.querySelector(".js-input-participants"),bntAddParticipants:document.querySelector(".js-add_participants"),bntRemoveParticipants:document.querySelector(".js-remove_participants"),participantsBlock:document.querySelector(".js_participants-block"),filterParticipants:document.querySelector(".js-filterParticipants")};r.bntOpenPopupAddEvent.addEventListener("click",(function(t){t.preventDefault(),r.popup.classList.add("is-open")}));var u=function(t){document.querySelectorAll("form input").forEach((function(t){t.value=""}))};var s=function(t){t.preventDefault(),r.popup.classList.remove("is-open"),u(r.form)};n("FWxf"),n("Muwe"),n("aZFp");var c=function(t,e){var n=a[t].time[e];n.participants=[],n.event="",n.busy=!1};var p=function(t,e,n){var a='\n       <div class="calendar_cell js-card-event"  draggable=true>\n       <div class="calendar_cell--name">'+n+'</div>\n       <div class="calendar_cell--close js-remove">&times;</div>\n       </div>\n      ';document.querySelector('[index-day="'+t+'"][index-time="'+e+'"]').insertAdjacentHTML("beforeend",a)};var o=function(t,e,n,a,i){var r=t.findIndex((function(t){return t.day==e})),u=t[r].time.findIndex((function(t){return t.hour==n})),s=t[r].time[u];s.busy=!0,s.event=i,s.participants=a.split(" "),console.log(t),p(r,u,i)};r.btnEddEvent.addEventListener("click",(function(t){t.preventDefault();var e=new FormData(r.form),n={};e.forEach((function(t,e){n[e]=t}));var i=a.findIndex((function(t){return t.day==n.day})),s=a[i].time.findIndex((function(t){return t.hour==n.time}));if(a[i].time[s].busy)return void alert("Failed to create an event. Time slot is already booked");o(a,n.day,n.time,n.participants,n.event),r.popup.classList.remove("is-open"),u(r.form)}));var d=function(t){if(t.target.classList.contains("js-remove")){var e=t.target.previousElementSibling.innerText;if(confirm("Are you sure you want to delete "+e+" event")){var n=t.target.parentElement,a=n.parentElement,i=a.getAttribute("index-day"),r=a.getAttribute("index-time");c(i,r),n.remove()}}};n("uQK7");var v=function(t){t.preventDefault();var e=r.inputParticipants;r.participantsBlock.classList.toggle("is-open"),r.participantsBlock.addEventListener("click",(function t(n){n.preventDefault(),-1==e.value.indexOf(n.target.textContent)?(r.participantsBlock.classList.remove("is-open"),e.value+=" "+n.target.textContent,r.participantsBlock.removeEventListener("click",t)):alert(n.target.textContent+" already added")}))};n("IvQZ"),n("4NM0");var l=function(t){var e=t.target.value,n=document.querySelectorAll(".js-card-event");!function(t){t.forEach((function(t){t.style.opacity="1"}))}(n),"All members"!=e&&n.forEach((function(t){var n=t.parentElement,i=n.getAttribute("index-day"),r=n.getAttribute("index-time");a[i].time[r].participants.includes(e)||(t.style.opacity="0")}))};n("8rZV"),n("WB5j");var y=function(t){t.preventDefault();var e=r.inputParticipants,n=e.value.lastIndexOf(" "),a=e.value.slice(0,n);e.value=a};i(a,r.rowsTime),r.btnClosePopupAddEvent.addEventListener("click",s),r.btnCancelAddEvent.addEventListener("click",s),r.table.addEventListener("click",d),r.bntAddParticipants.addEventListener("click",v),r.bntRemoveParticipants.addEventListener("click",y),r.filterParticipants.addEventListener("change",l);n("L1EO")}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.a5e62f618d3a13bdce85.js.map