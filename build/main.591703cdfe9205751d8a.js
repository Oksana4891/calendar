(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(e,t,n){},QfWi:function(e,t,n){"use strict";n.r(t);var r=[{day:"Monday",time:[{hour:"10:00"},{hour:"11:00"},{hour:"12:00"},{hour:"13:00"},{hour:"14:00",busy:!1,participants:[],event:""},{hour:"15:00"},{hour:"16:00"},{hour:"17:00"},{hour:"18:00"}]},{day:"Tuesday",time:[{hour:"10:00"},{hour:"11:00"},{hour:"12:00"},{hour:"13:00"},{hour:"14:00"},{hour:"15:00"},{hour:"16:00"},{hour:"17:00"},{hour:"18:00"}]},{day:"Wednesday",time:[{hour:"10:00"},{hour:"11:00"},{hour:"12:00"},{hour:"13:00"},{hour:"14:00"},{hour:"15:00"},{hour:"16:00"},{hour:"17:00"},{hour:"18:00"}]},{day:"Thursday",time:[{hour:"10:00"},{hour:"11:00"},{hour:"12:00"},{hour:"13:00"},{hour:"14:00"},{hour:"15:00"},{hour:"16:00"},{hour:"17:00"},{hour:"18:00"}]},{day:"Friday",time:[{hour:"10:00"},{hour:"11:00"},{hour:"12:00"},{hour:"13:00"},{hour:"14:00"},{hour:"15:00"},{hour:"16:00"},{hour:"17:00"},{hour:"18:00"}]}];n("RtS0"),n("3dw1");var o=function(e,t){t.forEach((function(t,n){e.forEach((function(e,r){var o=document.createElement("td");o.classList.add("js-cell"),o.setAttribute("Index-Day",r),o.setAttribute("Index-Time",n),t.appendChild(o)}))}))},a={popup:document.querySelector(".js_eventPopup"),form:document.querySelector(".js-event_form"),bntOpenPopupAddEvent:document.querySelector(".js-open-eventPopup"),btnClosePopupAddEvent:document.querySelector(".js-close-eventPopup"),btnEddEvent:document.querySelector(".js-add-event"),btnCancelAddEvent:document.querySelector(".ja-cancel-addEvent"),table:document.getElementById("calendar"),rowsTime:document.querySelectorAll(".calendar-time"),cellEvent:document.querySelectorAll(".js-cell"),inputParticipants:document.querySelector(".js-input-participants"),bntAddParticipants:document.querySelector(".js-add_participants"),bntRemoveParticipants:document.querySelector(".js-remove_participants"),participantsBlock:document.querySelector(".js_participants-block"),filterParticipants:document.querySelector(".js-filterParticipants"),popupLogin:document.querySelector(".js-login"),selectorUser:document.querySelector(".js-user"),btnConfirmUser:document.querySelector(".js-btn-login"),btnChangeUser:document.querySelector(".js-change-user"),infoUser:document.querySelector(".js-infoUser")};var i=function(){document.querySelectorAll("form input").forEach((function(e){return e.value=""}))};var c=function(){a.popup.classList.remove("is-open"),i(a.form)};n("lYjL"),n("lAJ5"),n("FWxf");var u=function(e,t,n,r){var o='\n       <div class="calendar_cell js-card-event"  id=\''+r+'\'>\n       <div class="calendar_cell--name">'+n+'</div>\n       <div class="calendar_cell--close js-remove">&times;</div>\n       </div>\n      ';document.querySelector('[index-day="'+e+'"][index-time="'+t+'"]').insertAdjacentHTML("beforeend",o)};var d=function(e){var t=JSON.parse(e.data),n=r.findIndex((function(e){return e.day===t.day})),o=r[n].time.findIndex((function(e){return e.hour===t.time}));u(n,o,t.event,e.id)},s=(n("JBxO"),n("FdtR"),"http://158.101.166.74:8080/api/data/oks_work/events"),l=function(){function e(){return e.instance||(e.instance=this),e.instance}return e.findAllData=function(){return fetch(s).then((function(e){return e.json()}))},e.deleteData=function(e){return fetch(s+"/"+e,{method:"DELETE"}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.error(e)}))},e.createData=function(e){return fetch(s,{body:JSON.stringify(e),headers:{"Content-Type":"application/json"},method:"POST"}).then((function(e){return e.json()}))},e}(),p=(new l,l);a.form.addEventListener("submit",(function(e){e.preventDefault();var t=new FormData(a.form),n={};t.forEach((function(e,t){n[t]=e}));var r={data:""+JSON.stringify(n)};p.findAllData().then((function(e){null==e&&p.createData(r).then((function(e){d(e),c()})).catch(alert);var t=e.filter((function(e){return"string"===!e.data})).some((function(e){var t=JSON.parse(e.data);return n.day===t.day&&n.time===t.time}));t&&alert("Failed to create an event. Time slot is already booked"),t||p.createData(r).then((function(e){d(e),c()})).catch(alert)}))}));n("uQK7");var v=function(e){e.preventDefault();var t=a.inputParticipants;a.participantsBlock.classList.toggle("is-open"),a.participantsBlock.addEventListener("click",(function e(n){n.preventDefault(),-1===t.value.indexOf(n.target.textContent)?(a.participantsBlock.classList.remove("is-open"),t.value+=" "+n.target.textContent,a.participantsBlock.removeEventListener("click",e)):alert(n.target.textContent+" already added")}))};n("8rZV"),n("WB5j");var f=function(e){e.preventDefault();var t=a.inputParticipants,n=t.value.lastIndexOf(" "),r=t.value.slice(0,n);t.value=r};n("IlJM"),n("D/wG"),n("lmye");var h=function(e){var t=e.target.value,n=document.querySelectorAll(".js-card-event");!function(e){e.forEach((function(e){return e.style.opacity="1"}))}(n),"All members"!=t&&p.findAllData().then((function(e){if(null!=e){var r=e.filter((function(e){return-1!==JSON.parse(e.data).participants.indexOf(t)})).map((function(e){return e.id}));n.forEach((function(e){-1==r.indexOf(e.id)&&(e.style.opacity="0")}))}}))},m=function(){function e(e){this.name=e}return e.filter=function(){a.filterParticipants.addEventListener("change",h)},e.prototype.render=function(){var e=document.createElement("option"),t=document.createElement("option"),n=document.createElement("div");e.value=""+this.name,t.textContent=""+this.name,t.value=""+this.name,e.textContent=""+this.name,n.textContent=""+this.name,a.filterParticipants.appendChild(e),a.selectorUser.appendChild(t),a.participantsBlock.appendChild(n)},e}();var y=function(e){e.preventDefault(),a.popup.classList.add("is-open")};var E=function(e){if(e.target.classList.contains("js-remove")){var t=e.target.parentNode.id,n=e.target.parentNode,r=e.target.previousElementSibling.innerText;confirm("Are you sure you want to delete "+r+" event")&&(p.deleteData(t),n.remove())}};var b=function(e){var t,n;function r(t){return e.call(this,t)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.addEvent=function(){a.bntOpenPopupAddEvent.addEventListener("click",y)},r.removeEvent=function(){a.table.addEventListener("click",E)},r}(m),L=[];function j(e,t){var n=new t(""+e);L.push(n),n.render()}j("Oksana",m),j("Kate",b),j("Alex",b),j("Mark",m),j("Dima",m);var S=L;var g=function(e){e.preventDefault(),a.bntOpenPopupAddEvent.removeEventListener("click",y),a.table.removeEventListener("click",E),a.bntOpenPopupAddEvent.disabled=!0,a.bntOpenPopupAddEvent.classList.remove("is-active"),a.table.classList.remove("is-active"),m.filter();var t=e.target.previousElementSibling.value,n=S.find((function(e){return e.name===t})),r=n.name,o=a.infoUser;n instanceof m&&(o.children[0].textContent="User:"),n instanceof b&&(o.children[0].textContent="Admin:"),o.children[1].textContent=r,n instanceof b&&(a.bntOpenPopupAddEvent.disabled=!1,a.bntOpenPopupAddEvent.classList.add("is-active"),a.table.classList.add("is-active"),b.addEvent(),b.removeEvent()),a.popupLogin.classList.remove("is-open")};(function(){p.findAllData().then((function(e){console.log(e),null!=e&&e.forEach((function(e){d(e)}))})).catch((function(e){return console.warn(e)}))})(),o(r,a.rowsTime),window.onload=function(){a.popupLogin.classList.add("is-open")},a.btnClosePopupAddEvent.addEventListener("click",c),a.btnCancelAddEvent.addEventListener("click",c),a.bntAddParticipants.addEventListener("click",v),a.bntRemoveParticipants.addEventListener("click",f),a.btnConfirmUser.addEventListener("click",g),a.btnChangeUser.addEventListener("click",(function(e){a.popupLogin.classList.add("is-open")}));n("L1EO")}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.591703cdfe9205751d8a.js.map