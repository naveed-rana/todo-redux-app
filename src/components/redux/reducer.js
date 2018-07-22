import {ADD_DATA} from './action';
import {REMOVE} from './action';
let myState = {
    mydata:[
        {
            name:"naveed"
        }
    ]
}
function myReducer(state = myState,action) {
    
    switch (action.type) {
        case ADD_DATA:
        alert("alert from reduxcer add_Data");
            let newarry = state.mydata.slice();
            let obj = {
                name:action.data.name,
                gender:action.data.gender,
                country:action.data.country,
                lang:action.data.lang

            }
            newarry.push(obj);
            return ({
                ...state,
                mydata:newarry
            })
    case REMOVE: 
       alert(action.ref);
       var arr =  state.mydata.filter((item) => {
           return  item.name != action.ref
       }
       
          
       )

       return ({
           ...state,
           mydata:arr
       });
    //    case UPDATE: 
    //    alert(action.ref);
    //    var arr =  state.mydata.filter((item) => {

    //        if( item.name != action.ref ){
    //            item.name = ref.name;
    //        }
    //    }
    //    return ({
    //     ...state,
    //     mydata:arr
    // });
        default:
            return state;
    }
}
export default myReducer;