export const ADD_DATA = "ADD_DATA"; 
export const REMOVE = "REMOVE";

export function dataPicker(data) {
    alert("alert from action");
    return{
        type:ADD_DATA,
        data
    }
}
export function mydataedit(ref) {
    alert(ref)
    return {
        type:REMOVE,
        ref
    }
}