export function inputChange(event,x){
const {value, name} = event.target
x(prev=>({...prev, [name]:value}))
}