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
                sideOptActuel : 'To Do',
                
            }
        case FETCH_DONE :
            return (
                {
                    ...state,
                    loading:false,
                    lesDemandes:{
                                    todo : action.paylod,
                                    done:null,
                                    refused:null
                                },
                    
                }
            )
        case OPERATION_AFFECT :
            return ({
                ...state,
                
                user_operation : action.paylod
                    }
            )
        case PUT_SIDEOPT_ACTUEL :
            return ({
                ...state,
                
                sideOptActuel : action.paylod
                    }
            )
        case PUT_DEMANDE_ACTUEL :
            return ({
                ...state,
                
                dmdActual : action.paylod
                    }
            )
        default: return (state)
    }
}
// !-----------------------------------------------------------REDUCER-----------------------------------------------------

const FETCH_DONE = 'FETCH_DONE'
const FETCHE_ERROR = 'FETCH_ERROR'
const FETCH_LOADING = 'FETACH_LOADING'
const OPERATION_AFFECT = 'OPERATION_AFFECT'
const PUT_SIDEOPT_ACTUEL = 'PUT_SIDEOPT_ACTUEL'
const PUT_DEMANDE_ACTUEL = 'PUT_DEMANDE_ACTUEL'
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

export function sideOptActuel(optActuel) {
    return(
            {
                type:PUT_SIDEOPT_ACTUEL,
                paylod: optActuel
                    
            }
            
            )
        }
export function demandeActuel(demandeInfo) {
    return(
            {
                type:PUT_DEMANDE_ACTUEL,
                paylod: demandeInfo
                    
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
store.subscribe(() => {
    console.log(store.getState())
})