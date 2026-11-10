import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';

const source = readFileSync(new URL('../app.js', import.meta.url), 'utf8');
const dataAndFunctions = source.split('document.addEventListener("click"')[0];
if (dataAndFunctions.length === source.length) throw new Error('Не найдено начало обработчиков DOM');
const state = {};
runInNewContext(`${dataAndFunctions}\nglobalThis.snapshot = {people, sources, normalize};`, state);
const {people, sources, normalize} = state.snapshot;
const ids = new Set(people.map(person => person.id));
const documentIds = new Set(sources.map(source => source.id));

function ensure(condition, message) { if (!condition) throw new Error(message); }

ensure(people.length === 10, 'Должно быть 10 персон');
ensure(sources.length === 8, 'Должно быть 8 источников');
ensure(ids.size === people.length, 'ID персон должны быть уникальными');
ensure(documentIds.size === sources.length, 'ID источников должны быть уникальными');
ensure(new Set(people.map(person => person.generation)).size === 4, 'Должно быть 4 поколения');
ensure(people.filter(person => person.status === 'hypothesis').length === 1, 'Должна быть одна гипотеза');
ensure(people.filter(person => normalize(person.name).includes('ирина')).length === 1, 'Поиск Ирины должен возвращать одного человека');
ensure(people.filter(person => normalize(person.name).includes('несуществующий')).length === 0, 'Пустой поиск должен возвращать 0');
ensure(sources.filter(source => source.type === 'Посемейный список').length === 2, 'Должно быть 2 посемейных списка');

for (const person of people) {
  ensure(['confirmed', 'hypothesis'].includes(person.status), `Непонятный статус ${person.id}`);
  for (const parentId of person.parents) ensure(ids.has(parentId), `Нет родителя ${parentId} у ${person.id}`);
  if (person.spouse) {
    ensure(ids.has(person.spouse), `Не существует супруга ${person.spouse}`);
    ensure(people.find(p => p.id === person.spouse).spouse === person.id, `Несимметричный брак ${person.id}`);
  }
  for (const fact of person.facts) {
    ensure(fact.sources.length > 0, `Нет источников у факта ${person.id}`);
    for (const sourceId of fact.sources) {
      ensure(documentIds.has(sourceId), `Отсутствует источник ${sourceId}`);
      ensure(sources.find(s => s.id === sourceId).people.includes(person.id), `Источник ${sourceId} не связан с ${person.id}`);
    }
  }
}
for (const document of sources) {
  for (const personId of document.people) ensure(ids.has(personId), `Не существует персона ${personId} в ${document.id}`);
}

console.log('PASS: 10 персон, 8 источников, 4 поколения, 1 гипотеза');
console.log('PASS: уникальность ID, взаимные браки, родственные связи и доказательства');
console.log('PASS: поиск Ирины, пустой поиск, типы документов');
