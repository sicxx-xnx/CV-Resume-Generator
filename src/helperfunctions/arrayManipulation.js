function changeArrayInput(array,e,setstate){
const id = e.target.getAttribute("data-sortorder")        
const {value, name} = e.target   
setstate(()=>{
array.map(
    (arrayitem) => {
        if (arrayitem.id === id ) {
           return {...arrayitem,[name]:value} 
        }  else {
            return arrayitem
        }     

}
)    
})  
}