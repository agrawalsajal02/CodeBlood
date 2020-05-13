// import {combineReducers} from 'redux';
// import user from "./user"
// import chats from "./chat_reducer"

// const rootReducer = combineReducers({
//     user,chats
// })


// export default rootReducer;
const initial={
    submission:[],
    currentdetails:null,
    cuurentpageno:1
}
export default function(state=initial,action){
    if(action.type==='submission'){
   console.log("reducer hitted",state);
        return {...state,
        submission:state.submission.concat(action.payload.data)
    }
    }
    if(action.type==='changepost'){
        //console.log("hereeeeeeeeeee",action.payload);
          return{
            ...state,
            currentdetails:action.payload
        }
    }
    if(action.type==='setcurentshow'){
            return {
                ...state,
                currentdetails:null
            }
    }
    if(action.type==='setcurentpaheno'){
        return {
            ...state,
            cuurentpageno:action.payload
        }
    }
            
            return state;
    }
