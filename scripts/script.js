function handleEmailKeydown(event){
  if (event.key === 'Enter'){
    verifyEmail();
  }
}

function verifyEmail(){
  const userEmail = document.querySelector('.js-input-email');
  let email = userEmail.value;

  const emailVerification = /[^][@][g][m][a][i][l][.][c][o][m]/g;
  let output = emailVerification.test(email);
  let newOutput = output === true;
   if (newOutput === false ){
     document.querySelector('.js-email-verification').innerHTML= `
     <p style="color: red;">
      Please check your Email <span style="color: black;">|| </span><span style="color: green;">
      gmail only</span>
     </p>`;
   }
   else if (newOutput === true) {
    document.querySelector('.js-email-verification').innerHTML= `
   <p style="color: green;">
    Email Verified
   </p>`}

}


// let userInput = prompt("(7). Enter a word without an 'E'");
// const eInput = /[e 0-9]/ig;
// let output = eInput.test(userInput);
// let newOutput = output === false;
//  if (newOutput === true ){
//    alert(`${userInput} does not have the letter E`)
//  }
//  else(alert(`${userInput} contains letter E or is a number`));