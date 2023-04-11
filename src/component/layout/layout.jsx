import Aside from "./aside"
import Nav from "./nav"
import Main from "./main"
import './layout.css'
import { operationAffect } from "../../store"
import { useParams } from "react-router"
import { fetchDone,fetchError,fetchLoading,store } from "../../store"
import { useDispatch} from "react-redux"
import { useEffect , useState} from "react"
export let params

export default function Layout () {
  let [letGo,setLetGo] = useState(false)
  let dataStore = store.getState()
  console.log(dataStore)
  let Dispatch = useDispatch()
  // !------------------useEffect------------------
   useEffect(() => {
       Dispatch(fetchLoading())
      //  console.log('useEffect')
       fetch('http://localhost:3001/todo',
       {
           method:'POST',
           
           body:JSON.stringify(
               {
                   id_user:params.id,
                   role:params.role
                  }
                  )
              }
              )
              .then(response => response.json()
              )
              .then(data => {
      Dispatch(fetchDone(data))
      setLetGo(prv => true)
      setOperations(params.role)
    })
    .catch(error => {
      console.log('fetchError a hassan')
      Dispatch(fetchError())
    });
    
          },[letGo,Dispatch])
          // store.subscribe(() => console.log(store.getState()))
        // !----------------------------------useEffect----------------------------
     params = useParams()
    //  console.log('params.id',params.role)
     let [lesOpt,setLesOpt] = useState(null)
     
     //  ------------------------------------set operation foreach role -------------------
     
     function setOperations(role) {
       if (role === 'tme') {
         setLesOpt(prv => {
                        return(
                          {
                          sideOpt:{
                            sideOpt1: 'To Do',
                            sideOpt2: 'Done',
                            sideOpt3: 'Refused',
                          },
                          basicopt:{
                            opt1: 'Validate',
                            opt2: 'Refuse',
                            opt3: 'Choisir_itineraire'
                            }
                          }
                        )
                })
      }else if(role === 'client') {
                      setLesOpt(prv => {
                        return(
                          {
                          sideOpt:{
                            sideOpt1: 'Demandes',
                            sideOpt2: 'Accepted',
                            sideOpt3: 'Refused',
                          },
                          basicopt:{
                            opt1: 'Submite',
                            opt2: 'Cancel',
                            opt3: null
                            }
                          }
                        )
                })
      }else{
                      setLesOpt(prv => {
                        return(
                          {
                            sideOpt:{
                            
                            sideOpt1: 'To Do',
                            sideOpt2: 'Done',
                            sideOpt3: 'Refused',
                          },
                          basicopt:{
                            opt1: 'Validate',
                            opt2: 'Refuse',
                            opt3: null
                            }
                          }
                        )
                })
      }
      
    }
    Dispatch(operationAffect(lesOpt))
     //  ------------------------------------set operation foreach role -------------------
    // ?-------------------------------------render demandes foreach role------------------------
    // let datosDemandas = dataStore.lesDemandes  ? dataStore.lesDemandes.todo : ''
    // function renderDemandes(){
    //   switch(dataStore.sideoptActuel){
    //     case 'Done' : datosDemandas = dataStore.lesDemandes.done; 
    //         break
    //     case 'Refused' : datosDemandas = dataStore.lesDemandes.refused
    //         break
    //     default : datosDemandas = dataStore.lesDemandes.todo
    // }
    // }
    let [boolSide,setBollside] = useState(true)
    console.log(boolSide)
    // ?-------------------------------------render demandes foreach role------------------------

       return (
           <div className="layout">
   
               {letGo?<Nav />:'loding...'}

               {letGo? <Aside redender={setBollside}/>:'loding...'}
               {letGo?<Main boll={boolSide}/>:'loding...'}

           </div>
       )
}