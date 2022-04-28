// const adviceId = document.querySelector('#adviceID');
// const adviceText = document.querySelector('.advice');
// const btn = document.querySelector('button');

// function getAdvice(){
// fetch('https://api.adviceslip.com/advice').then(response => {
//   return response.json();

// }).then(adviceData => {
//   const adviceNum = adviceData.slip.id;
//   const adviceT = adviceData.slip.advice;
//   adviceId.textContent = adviceNum;
//   adviceText.innerHTML = `<p>${adviceT}</p>`;
  
// }).catch(error => {
//   console.log(error)
// })
// }
// btn.addEventListener('click',function(){
//   getAdvice();
// })
// window.onload =() =>{
//   getAdvice();
// }


const adviceId = document.querySelector('#adviceID');
const adviceText = document.querySelector('.advice');
const btn = document.querySelector('button');

function getAdvice(){

fetch('https://api.adviceslip.com/advice').then(response => {
  return response.json();
}).then(adviceData => {
  const adviceNum = adviceData.slip.id;
  const adviceT = adviceData.slip.advice;
  adviceId.textContent = adviceNum;
  adviceText.textContent = adviceT;

}).catch(error => {
  console.log(error);
})
}
btn.addEventListener('click',function(){
  getAdvice();
})
window.onload = () => {
  getAdvice();
}























