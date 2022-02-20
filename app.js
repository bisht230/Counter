let cnt = 0; //initial value of count

// a DOM 'query Selector is used and basically querySelectorAll gives us a node list'
const value=document.querySelector('#value');
const btns=document.querySelectorAll('.btn');  // it gives node list 
// console.log(btns);

//call back function
btns.forEach(function (button) {
// console.log(buttons)
button.addEventListener('click',function(e) {   //what we are clicking
   const styles=e.currentTarget.classList;     //what is the current target
   if(styles.contains("btn-danger")){
       cnt--;
   }
   else if(styles.contains('btn-success')){
       cnt++;
   }
   else{
       cnt=0;
   }
   if(cnt>0){
       value.style.color='green';
   }
   else if(cnt<0){
       value.style.color='red';
   }
   else{
       value.style.color='black';
   }
   value.textContent=cnt;
});
});
