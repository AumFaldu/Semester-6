import React, { useMemo } from "react";

function isPrime(n){
  for(let i=2;i<=Math.sqrt(n);i++){
    if(n%i===0) return false;
  }
  return true;
}

function PrimeSumMemo(){

  const sum = useMemo(()=>{

    let count=0;
    let num=2;
    let total=0;

    while(count<5000){
      if(isPrime(num)){
        total+=num;
        count++;
      }
      num++;
    }

    return total;

  },[]);

  return(
    <div>
      <h2>Prime Sum using useMemo</h2>
      <p>{sum}</p>
    </div>
  );
}

export default PrimeSumMemo;