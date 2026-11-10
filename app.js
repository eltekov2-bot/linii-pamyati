"use strict";

// All names, dates, events, and archival citations below are fictional demonstration data.
const people = [
  {id:"p1",name:"Павел Никитич Лаптев",initials:"ПЛ",gender:"male",years:"ок. 1854 — после 1885",place:"Тверская губерния",generation:1,status:"confirmed",parents:[],spouse:"p2",bio:"Один из первых установленных представителей учебной семьи Лаптевых. Упомянут в брачной записи и записях о рождении детей.",facts:[{text:"В 1878 году заключил брак с Анной Сергеевной Орловой.",sources:["d1"],status:"confirmed"},{text:"Назван отцом Дмитрия и Елизаветы Лаптевых.",sources:["d2","d3"],status:"confirmed"}]},
  {id:"p2",name:"Анна Сергеевна Лаптева (Орлова)",initials:"АЛ",gender:"female",years:"ок. 1858 — после 1885",place:"Тверская губерния",generation:1,status:"confirmed",parents:[],spouse:"p1",bio:"В брачной записи указана под девичьей фамилией Орлова. Её родство с детьми подтверждено учебными метрическими записями.",facts:[{text:"Девичья фамилия — Орлова; брак с Павлом Лаптевым в 1878 году.",sources:["d1"],status:"confirmed"},{text:"Названа матерью Дмитрия и Елизаветы.",sources:["d2","d3"],status:"confirmed"}]},
  {id:"p3",name:"Дмитрий Павлович Лаптев",initials:"ДЛ",gender:"male",years:"1880 — после 1913",place:"Тверь",generation:2,status:"confirmed",parents:["p1","p2"],spouse:"p4",bio:"Сын Павла и Анны Лаптевых. Его собственная семья прослеживается по брачной записи и посемейному списку.",facts:[{text:"Родился в 1880 году; родители — Павел и Анна Лаптевы.",sources:["d2"],status:"confirmed"},{text:"В 1905 году вступил в брак с Марией Григорьевной Соколовой.",sources:["d4"],status:"confirmed"},{text:"Записан отцом Николая и Татьяны.",sources:["d5","d6"],status:"confirmed"}]},
  {id:"p4",name:"Мария Григорьевна Лаптева (Соколова)",initials:"МЛ",gender:"female",years:"ок. 1883 — после 1913",place:"Тверь",generation:2,status:"confirmed",parents:[],spouse:"p3",bio:"После брака 1905 года носила фамилию Лаптева. Упомянута в учебных сведениях о детях.",facts:[{text:"Девичья фамилия — Соколова; брак с Дмитрием Лаптевым.",sources:["d4"],status:"confirmed"},{text:"Мать Николая и Татьяны Лаптевых.",sources:["d5","d6"],status:"confirmed"}]},
  {id:"p5",name:"Елизавета Павловна Лаптева",initials:"ЕЛ",gender:"female",years:"1885 — ?",place:"Тверская губерния",generation:2,status:"confirmed",parents:["p1","p2"],spouse:null,bio:"Младшая дочь Павла Никитича и Анны Сергеевны. Дальнейшая судьба в демонстрационном архиве пока не прослежена.",facts:[{text:"Родилась в 1885 году; родители названы в записи о рождении.",sources:["d3"],status:"confirmed"}]},
  {id:"p6",name:"Николай Дмитриевич Лаптев",initials:"НЛ",gender:"male",years:"1906 — после 1946",place:"Тверь → Москва",generation:3,status:"confirmed",parents:["p3","p4"],spouse:"p7",bio:"Указан ребёнком Дмитрия и Марии в посемейном списке. Позднее появляется в московском списке домохозяйства.",facts:[{text:"В 1912 году записан сыном Дмитрия и Марии; возраст соответствует рождению около 1906 года.",sources:["d5"],status:"confirmed"},{text:"В 1935 году вступил в брак с Верой Александровной Беловой.",sources:["d7"],status:"confirmed"},{text:"В 1946 году проживал вместе с Верой и Алексеем.",sources:["d8"],status:"confirmed"}]},
  {id:"p7",name:"Вера Александровна Лаптева (Белова)",initials:"ВЛ",gender:"female",years:"ок. 1911 — после 1946",place:"Москва",generation:3,status:"confirmed",parents:[],spouse:"p6",bio:"Фигурирует в брачной записи 1935 года и посемейном списке 1946 года.",facts:[{text:"Девичья фамилия — Белова; в 1935 году заключила брак с Николаем Лаптевым.",sources:["d7"],status:"confirmed"},{text:"Упомянута в домохозяйстве Николая Лаптева в 1946 году.",sources:["d8"],status:"confirmed"}]},
  {id:"p8",name:"Татьяна Дмитриевна Лаптева",initials:"ТЛ",gender:"female",years:"1913 — ?",place:"Тверь",generation:3,status:"confirmed",parents:["p3","p4"],spouse:null,bio:"Дочь Дмитрия и Марии. Её рождение засвидетельствовано отдельной учебной метрической записью.",facts:[{text:"Родилась в 1913 году; в записи названы оба родителя.",sources:["d6"],status:"confirmed"}]},
  {id:"p9",name:"Алексей Николаевич Лаптев",initials:"АЛ",gender:"male",years:"ок. 1936 — после 1946",place:"Москва",generation:4,status:"confirmed",parents:["p6","p7"],spouse:null,bio:"По посемейному списку 1946 года — сын Николая и Веры; указан возраст 10 лет.",facts:[{text:"В 1946 году записан десятилетним сыном Николая и Веры Лаптевых.",sources:["d8"],status:"confirmed"}]},
  {id:"p10",name:"Ирина Николаевна Лаптева (?)",initials:"ИЛ",gender:"female",years:"предположительно ок. 1940",place:"Москва (?)",generation:4,status:"hypothesis",parents:["p6","p7"],spouse:null,bio:"В списке 1946 года есть сокращённое имя «Ирина Н.». Полное имя, возраст и принадлежность именно к этой семье не доказаны.",facts:[{text:"«Ирина Н.» из списка 1946 года могла быть дочерью Николая и Веры Лаптевых. Требуется независимая запись о рождении или иной документ.",sources:["d8"],status:"hypothesis"}]}
];

const sources = [
  {id:"d1",title:"Брачная запись Павла и Анны",year:1878,type:"Метрическая запись",reference:"УЧЕБ. Ф. 01 · Оп. 1 · Д. 01 · Л. 4",people:["p1","p2"],excerpt:"В 1878 году сочетались браком Павел Никитич Лаптев, 24 лет, и девица Анна Сергеевна Орлова, 20 лет.",note:"Подтверждает брак и имена супругов. Годы рождения вычисляются приблизительно по возрасту."},
  {id:"d2",title:"Рождение Дмитрия Лаптева",year:1880,type:"Метрическая запись",reference:"УЧЕБ. Ф. 01 · Оп. 1 · Д. 02 · Л. 17",people:["p1","p2","p3"],excerpt:"Родился Дмитрий. Родители: Павел Никитич Лаптев и законная жена его Анна Сергеевна.",note:"Прямой источник имён родителей и ребёнка."},
  {id:"d3",title:"Рождение Елизаветы Лаптевой",year:1885,type:"Метрическая запись",reference:"УЧЕБ. Ф. 01 · Оп. 1 · Д. 03 · Л. 9",people:["p1","p2","p5"],excerpt:"Родилась Елизавета. Родители: Павел Никитич Лаптев и Анна Сергеевна.",note:"Прямой источник родства. Дальнейшая судьба не установлена."},
  {id:"d4",title:"Брак Дмитрия и Марии",year:1905,type:"Метрическая запись",reference:"УЧЕБ. Ф. 02 · Оп. 1 · Д. 04 · Л. 6",people:["p3","p4"],excerpt:"Жених Дмитрий Павлович Лаптев и невеста Мария Григорьевна Соколова вступили в брак.",note:"Подтверждает брак и девичью фамилию Марии."},
  {id:"d5",title:"Посемейный список Лаптевых",year:1912,type:"Посемейный список",reference:"УЧЕБ. Ф. 03 · Оп. 2 · Д. 05 · Л. 12",people:["p3","p4","p6"],excerpt:"Домохозяйство Дмитрия Павловича Лаптева: супруга Мария Григорьевна, сын Николай, 6 лет.",note:"Подтверждает состав семьи на 1912 год. Год рождения Николая приблизителен."},
  {id:"d6",title:"Рождение Татьяны Лаптевой",year:1913,type:"Метрическая запись",reference:"УЧЕБ. Ф. 02 · Оп. 1 · Д. 06 · Л. 28",people:["p3","p4","p8"],excerpt:"Родилась Татьяна. Родители: Дмитрий Павлович Лаптев и Мария Григорьевна.",note:"Прямой источник родства."},
  {id:"d7",title:"Брак Николая и Веры",year:1935,type:"Метрическая запись",reference:"УЧЕБ. Ф. 04 · Оп. 1 · Д. 07 · Л. 3",people:["p6","p7"],excerpt:"Зарегистрирован брак Николая Дмитриевича Лаптева и Веры Александровны Беловой, 24 лет.",note:"Подтверждает брак и девичью фамилию Веры."},
  {id:"d8",title:"Московский посемейный список",year:1946,type:"Посемейный список",reference:"УЧЕБ. Ф. 05 · Оп. 3 · Д. 08 · Л. 15",people:["p6","p7","p9","p10"],excerpt:"Николай Д. Лаптев, жена Вера А., сын Алексей, 10 лет. На следующей строке: «Ирина Н.» — родство и возраст не указаны.",note:"Прямой источник состава семьи для первых трёх лиц. Запись «Ирина Н.» не доказывает её родство с Николаем и Верой."}
];

const peopleById = Object.fromEntries(people.map(p => [p.id,p]));
const sourcesById = Object.fromEntries(sources.map(s => [s.id,s]));
const $ = selector => document.querySelector(selector);
let currentView = "overview";
let currentPeople = [...people];
let lastDialogTrigger = null;
let toastTimer = null;

function normalize(value){return String(value??"").toLocaleLowerCase("ru").replace(/ё/g,"е").trim()}
function escapeHtml(value){return String(value??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]))}
function readableCount(n,one,few,many){const mod10=n%10,mod100=n%100;return `${n} ${mod10===1&&mod100!==11?one:(mod10>=2&&mod10<=4&&(mod100<12||mod100>14)?few:many)}`}
function statusText(status){return status==="hypothesis"?"Есть гипотеза":"Подтверждено"}
function relatedSources(id){return sources.filter(s=>s.people.includes(id))}
function childrenOf(id){return people.filter(p=>p.parents.includes(id))}

function setView(view,scroll=false){
  if(!["overview","people","sources","tree","about"].includes(view))return;
  currentView=view;
  document.querySelectorAll(".content-section").forEach(section=>section.hidden=section.id!==`view-${view}`);
  document.querySelectorAll(".nav-tab").forEach(tab=>{const active=tab.dataset.viewTarget===view;tab.classList.toggle("active",active);tab.setAttribute("aria-selected",String(active));tab.tabIndex=active?0:-1});
  if(view==="people")renderPeople();
  if(view==="sources")renderSources();
  if(view==="tree")renderTree();
  try{history.replaceState(null,"",`#${view}`)}catch(_){/* local files can restrict URL changes */}
  if(scroll){$(".section-nav").scrollIntoView({behavior:"smooth",block:"start"})}
}

function renderOverview(){
  $("#stat-people").textContent=people.length;
  $("#stat-sources").textContent=sources.length;
  $("#stat-confirmed").textContent=people.filter(p=>p.status==="confirmed").length;
  $("#stat-hypotheses").textContent=people.filter(p=>p.status==="hypothesis").length;
  $("#featured-sources").innerHTML=["d1","d5","d8"].map(id=>{const source=sourcesById[id];return `<button class="featured-source" type="button" data-source-id="${id}"><span>${source.year} · ${escapeHtml(source.type.toUpperCase())}</span><strong>${escapeHtml(source.title)}</strong><small>${escapeHtml(source.reference)} →</small></button>`}).join("");
}

function filterPeople(){const q=normalize($("#people-search").value),status=$("#people-status").value;return people.filter(p=>(status==="all"||p.status===status)&&(!q||normalize([p.name,p.place,p.years,p.bio].join(" ")).includes(q)))}
function renderPeople(){
  currentPeople=filterPeople();
  $("#people-count-label").textContent=readableCount(currentPeople.length,"запись","записи","записей");
  $("#people-summary").textContent=`Показано ${readableCount(currentPeople.length,"человек","человека","человек")} из ${people.length}`;
  $("#people-grid").innerHTML=currentPeople.map(p=>`<button class="person-card" type="button" data-person-id="${p.id}" aria-label="Открыть карточку: ${escapeHtml(p.name)}"><div class="person-card-top"><span class="person-avatar ${p.gender==='female'?'female':''}">${escapeHtml(p.initials)}</span><span class="person-status ${p.status==='hypothesis'?'hypothesis':''}">${statusText(p.status)}</span></div><div><h3>${escapeHtml(p.name)}</h3><div class="person-years">${escapeHtml(p.years)}</div></div><div class="person-card-footer"><span>${escapeHtml(p.place)} · ${relatedSources(p.id).length} ист.</span><span aria-hidden="true">→</span></div></button>`).join("");
  $("#people-empty").hidden=currentPeople.length>0;
}

function filterSources(){const q=normalize($("#source-search").value),type=$("#source-type").value;return sources.filter(s=>(type==="all"||s.type===type)&&(!q||normalize([s.title,s.year,s.reference,s.excerpt].join(" ")).includes(q)))}
function renderSources(){const filtered=filterSources();$("#sources-summary").textContent=`Показано ${readableCount(filtered.length,"документ","документа","документов")} из ${sources.length}`;$("#sources-grid").innerHTML=filtered.map(s=>`<button class="source-card" type="button" data-source-id="${s.id}" aria-label="Открыть источник: ${escapeHtml(s.title)}"><div class="source-card-top"><span class="source-chip">${escapeHtml(s.type)}</span><span class="source-year">${s.year}</span></div><h3>${escapeHtml(s.title)}</h3><p>${escapeHtml(s.reference)}</p><div class="source-card-bottom"><span>${readableCount(s.people.length,"персона","персоны","персон")}</span><span>Читать запись →</span></div></button>`).join("");$("#sources-empty").hidden=filtered.length>0}

function renderTree(){const title={1:["I поколение","1870-е"],2:["II поколение","1880–1905"],3:["III поколение","1906–1935"],4:["IV поколение","1936–1946"]};$("#family-tree").innerHTML=[1,2,3,4].map(g=>`<div class="generation-row"><div class="generation-title"><strong>${title[g][0]}</strong><small>${title[g][1]}</small></div><div class="generation-members">${people.filter(p=>p.generation===g).map(p=>`<button type="button" class="tree-person ${p.status==='hypothesis'?'hypothesis':''}" data-person-id="${p.id}"><span class="tree-relation">${p.status==='hypothesis'?'Предположительная связь':'Документально отмечен(а)'}</span><strong>${escapeHtml(p.name)}</strong><small>${escapeHtml(p.years)}</small></button>`).join("")}</div></div>`).join("")}

function relationButtons(ids){return ids.filter(id=>peopleById[id]).map(id=>`<button class="relation-button" type="button" data-person-id="${id}">${escapeHtml(peopleById[id].name)} →</button>`).join("")}

function readNote(id){try{return JSON.parse(localStorage.getItem("genealogy-notes-v1")||"{}")[id]||""}catch(_){return ""}}
function saveNote(id,text){try{const notes=JSON.parse(localStorage.getItem("genealogy-notes-v1")||"{}");notes[id]=text;localStorage.setItem("genealogy-notes-v1",JSON.stringify(notes));return true}catch(_){return false}}

function openPerson(id,trigger){
  const p=peopleById[id];if(!p)return;
  lastDialogTrigger=trigger||document.activeElement;
  const confirmedFacts=p.facts.filter(f=>f.status==="confirmed").length;
  const parentTitle=p.status==="hypothesis"?"Предположительные родители":"Родители";
  const children=childrenOf(p.id);
  const facts=p.facts.map(f=>`<div class="detail-fact ${f.status==='hypothesis'?'hypothesis':''}"><strong>${f.status==='hypothesis'?'Гипотеза · требует проверки':'Подтверждённое утверждение'}</strong><p>${escapeHtml(f.text)}</p><div class="fact-links">${f.sources.map(sid=>`<button type="button" class="fact-source-button" data-source-id="${sid}">Источник ${sourcesById[sid].year} г. →</button>`).join("")}</div></div>`).join("");
  $("#detail-content").innerHTML=`<div class="dialog-overline">ПЕРСОНАЛЬНАЯ КАРТОЧКА · ${p.status==='hypothesis'?'ГИПОТЕЗА':'СВЕДЕНИЯ С ИСТОЧНИКАМИ'}</div><h2 id="detail-title" class="dialog-title">${escapeHtml(p.name)}</h2><p class="dialog-subtitle">${escapeHtml(p.years)} · ${escapeHtml(p.place)}</p><p>${escapeHtml(p.bio)}</p><div class="detail-divider"></div><h3 class="detail-section-title">Сведения и доказательства</h3><div class="detail-facts">${facts}</div><div class="detail-divider"></div><h3 class="detail-section-title">Родственные связи</h3>${p.parents.length?`<p class="note-label">${parentTitle}</p><div class="relations-list">${relationButtons(p.parents)}</div>`:""}${p.spouse?`<p class="note-label">Супруг(а)</p><div class="relations-list">${relationButtons([p.spouse])}</div>`:""}${children.length?`<p class="note-label">${children.some(c=>c.status==='hypothesis')?'Дети (включая возможное родство)':'Дети'}</p><div class="relations-list">${relationButtons(children.map(c=>c.id))}</div>`:""}${!p.parents.length&&!p.spouse&&!children.length?"<p class='note-label'>Связанные персоны не указаны.</p>":""}<div class="detail-divider"></div><h3 class="detail-section-title">Личная исследовательская заметка</h3><label class="note-label" for="person-note">Заметка сохраняется только в этом браузере</label><textarea class="note-editor" id="person-note" maxlength="3000" placeholder="Например: проверить запись о рождении в другом фонде…"></textarea><div class="note-actions"><span class="note-help">Не синхронизируется между устройствами</span><button class="note-save" type="button" data-save-note="${id}">Сохранить заметку</button></div>`;
  $("#person-note").value=readNote(id);
  showDialog();
}

function openSource(id,trigger){
  const s=sourcesById[id];if(!s)return;
  lastDialogTrigger=trigger||document.activeElement;
  $("#detail-content").innerHTML=`<div class="dialog-overline">ДЕМОНСТРАЦИОННЫЙ АРХИВНЫЙ ДОКУМЕНТ</div><h2 id="detail-title" class="dialog-title">${escapeHtml(s.title)}</h2><p class="dialog-subtitle">${s.year} год · ${escapeHtml(s.type)}</p><dl class="source-metadata"><dt>Шифр</dt><dd>${escapeHtml(s.reference)}</dd><dt>Связано персон</dt><dd>${s.people.length}</dd><dt>Подлинность</dt><dd>Вымышленный учебный источник</dd></dl><div class="detail-divider"></div><h3 class="detail-section-title">Учебная расшифровка</h3><blockquote class="quote-block">${escapeHtml(s.excerpt)}</blockquote><p>${escapeHtml(s.note)}</p><div class="detail-divider"></div><h3 class="detail-section-title">Связанные персоны</h3><div class="relations-list">${relationButtons(s.people)}</div><p class="source-disclaimer">Этот документ создан для демонстрации интерфейса и не существует в реальном архиве. Шифр и текст не следует использовать как историческое свидетельство.</p>`;
  showDialog();
}

function showDialog(){const dialog=$("#detail-dialog");if(!dialog.open){dialog.showModal()}$("#dialog-close").focus()}
function closeDialog(){const dialog=$("#detail-dialog");if(dialog.open)dialog.close();if(lastDialogTrigger?.isConnected)lastDialogTrigger.focus()}
function showToast(text){const toast=$("#toast");toast.textContent=text;toast.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove("show"),3000)}
function resetPeople(){ $("#people-search").value="";$("#people-status").value="all";renderPeople() }
function resetSources(){ $("#source-search").value="";$("#source-type").value="all";renderSources() }

function csvEscape(value){return `"${String(value??"").replace(/"/g,'""')}"`}
function exportPeopleCsv(){
  if(!currentPeople.length){showToast("Нет записей для выгрузки");return}
  const head=["ФИО","Период","Место","Статус","Шифры источников"];
  const rows=currentPeople.map(p=>[p.name,p.years,p.place,statusText(p.status),relatedSources(p.id).map(s=>s.reference).join("; ")]);
  const csv="\uFEFF"+[head,...rows].map(row=>row.map(csvEscape).join(";")).join("\r\n");
  const url=URL.createObjectURL(new Blob([csv],{type:"text/csv;charset=utf-8;"}));
  const anchor=document.createElement("a");anchor.href=url;anchor.download="genealogy-demo-people.csv";document.body.appendChild(anchor);anchor.click();anchor.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
  showToast(`Выгружено ${readableCount(currentPeople.length,"запись","записи","записей")}`);
}

document.addEventListener("click",event=>{
  const nav=event.target.closest("[data-view-target]");if(nav){setView(nav.dataset.viewTarget,true);return}
  const person=event.target.closest("[data-person-id]");if(person){openPerson(person.dataset.personId,person);return}
  const source=event.target.closest("[data-source-id]");if(source){openSource(source.dataset.sourceId,source);return}
  const save=event.target.closest("[data-save-note]");if(save){const note=$("#person-note");showToast(saveNote(save.dataset.saveNote,note.value)?"Заметка сохранена в браузере":"Не удалось сохранить: доступ к хранилищу ограничен");return}
});
$("#people-search").addEventListener("input",renderPeople);
$("#people-status").addEventListener("change",renderPeople);
$("#people-reset").addEventListener("click",resetPeople);
$("#empty-reset").addEventListener("click",resetPeople);
$("#source-search").addEventListener("input",renderSources);
$("#source-type").addEventListener("change",renderSources);
$("#sources-reset").addEventListener("click",resetSources);
$("#export-people").addEventListener("click",exportPeopleCsv);
$("#dialog-close").addEventListener("click",closeDialog);
$("#detail-dialog").addEventListener("click",event=>{if(event.target===$("#detail-dialog"))closeDialog()});
$("#detail-dialog").addEventListener("close",()=>{if(lastDialogTrigger?.isConnected)lastDialogTrigger.focus()});
document.querySelectorAll('.nav-tab').forEach((tab,index,tabs)=>tab.addEventListener('keydown',event=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;event.preventDefault();const next=event.key==='Home'?0:event.key==='End'?tabs.length-1:(index+(event.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;setView(tabs[next].dataset.viewTarget);tabs[next].focus()}));

renderOverview();renderPeople();renderSources();renderTree();
const startHash=location.hash.replace('#','');setView(["overview","people","sources","tree","about"].includes(startHash)?startHash:"overview");
