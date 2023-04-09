import { legacy_createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
export let store

let initialState = null

// let dispatch = useDispatch()
// !-----------------------------------------------------------REDUCER------------------------------------
function todoReduer(state = initialState,action){

    switch(action.type){

        case FETCH_LOADING :
            return {
                ...state,
                loading:action.paylod.loading,
            }
        case FETCH_DONE :
            return (
                {
                    ...state,
                    loading:false,
                    lesDemandes:{
                                    todo : action.paylod
                                },
                    
                }
            )
        case OPERATION_AFFECT :
            return ({
                ...state,
                
                user_operation : action.paylod
                    }
            )
        default: return (store)
    }
}
// !-----------------------------------------------------------REDUCER-----------------------------------------------------

const FETCH_DONE = 'FETCH_DONE'
const FETCHE_ERROR = 'FETCH_ERROR'
const FETCH_LOADING = 'FETACH_LOADING'
const OPERATION_AFFECT = 'OPERATION_AFFECT'
export function fetchDone(data) {
    return(
        {
            type:FETCH_DONE,
            paylod : data,
            
        }
        )
    }
export function fetchError() {
        return(
        {
            type:FETCHE_ERROR,
            
        }
        )
    }

export function fetchLoading() {
        return(
            {
                type:FETCH_LOADING,
                paylod:{
                    loading:true
                }
                
            }
            )
        }

export function operationAffect(lesOpt) {
        return(
                {
                    type:OPERATION_AFFECT,
                    paylod: lesOpt
                        
                }
                
                )
            }
        
// export function fetchLlamada () {
//     let dispatch = useDispatch()
//     return function (dispatch) {
//         dispatch(fetchLoading)
//         fetch('http://loacalhost:3001/logging',{
//             method:'POST',
//             body:JSON.stringify(
//                 {
//                     name_user:'aziz',
//                     pass_user:'123'
//                 }
//             )
//         })
//         .then(response => response.json())
//         .then(data => {
//             dispatch(fetchDone(data))
//         })
//         .catch(err => store.dispatch(fetchError))
//     }
// }
       
store = legacy_createStore(todoReduer,applyMiddleware(thunk))
// store.subscribe(() => {
//     console.log(store.getState())
// })