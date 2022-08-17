

let height = +prompt('Рост в метрах');
console.log(`Рост:${height} м.`);
let mass = +prompt('Масса в кг.');
console.log(`Масса:${mass} кг.`);
let index = mass / (height ** 2);
console.log(`Индекс:${index}`);
if(index <= 16){
console.log(`Выраженный дефицит массы тела`);
}
if(index<= 18.5 && index>= 16.1)
{console.log(`Недостаточный дефицит массы тела`);
}
if(index<= 25 && index>= 18.6){
    console.log(`Норма`);
}
if(index<= 30 && index>= 25.1){
     console.log(`Избыточная масса тела (Предожирение)`);
  }
  if(index<= 35 && index>= 30.1){
    console.log(`Ожирение 1 степени`);
}
 if(index<= 40 && index>= 35.1){
   console.log(`Ожирение 2 степени`);
 }
if(index>= 40.1 && index< 200){
  console.log(`Ожирение 3 степени`);
 }
 

let year = +prompt('Введите год:');
console.log(`${year}`);
 let believe = 4;
let leap =year% believe;
 if(leap === 0 ){
   console.log(`Высокосный`);
}
else{
     console.log(`НЕ высокосный`);
}
