import React from "react";

function isPrime(n){
  for(let i=2;i<=Math.sqrt(n);i++){
    if(n%i===0) return false;
  }
  return true;
}

function PrimeSum(){

  let count=0;
  let num=2;
  let sum=0;

  while(count<5000){
    if(isPrime(num)){
      sum+=num;
      count++;
    }
    num++;
  }

  return(
    <div>
      <h2>Sum of First 5000 Prime Numbers</h2>
      <p>{sum}</p>
    </div>
  );
}

export default PrimeSum;