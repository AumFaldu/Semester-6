import React, { useSyncExternalStore } from "react";

function subscribe(callback){
  window.addEventListener("online",callback);
  window.addEventListener("offline",callback);

  return ()=>{
    window.removeEventListener("online",callback);
    window.removeEventListener("offline",callback);
  };
}

function getSnapshot(){
  return navigator.onLine;
}

function OnlineStatus(){

  const isOnline = useSyncExternalStore(subscribe,getSnapshot);

  return(
    <div>
      <h2>Online Status</h2>
      <h3>{isOnline ? "Online" : "Offline"}</h3>
    </div>
  );
}

export default OnlineStatus;