export function ChangePopupdisplay (popupsetstate,popupChangeValueState,popuptext,popupclasschange){
popupChangeValueState(()=>{return popuptext})   
popupclasschange(()=>'popup') 
popupsetstate(()=>true)
setTimeout(() => {
  popupclasschange(() => 'popup-remove')
  setTimeout(() => {
    popupsetstate(() => false)
  },1000)
},3000)}

