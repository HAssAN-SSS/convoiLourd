import Aside from "./aside"
import Nav from "./nav"
import Main from "./main"
import './layout.css'
import { operationAffect } from "../../store"
import { useParams } from "react-router"
import { fetchDone,fetchError,fetchLoading } from "../../store"
import { useDispatch} from "react-redux"
import { useEffect , useState} from "react"
export let params

export default function Layout () {
  let [letGo,setLetGo] = useState(false)
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
                            sideOpt3: 'refused',
                          },
                          basicopt:{
                            opt1: 'validate',
                            opt2: 'refuse',
                            opt3: 'Choisir l itineraire'
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
                            sideOpt3: 'refused',
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
                            sideOpt3: 'refused',
                          },
                          basicopt:{
                            opt1: 'validate',
                            opt2: 'refuse',
                            opt3: null
                            }
                          }
                        )
                })
      }
      
    }
     //  ------------------------------------set operation foreach role -------------------

    Dispatch(operationAffect(lesOpt))
     
       return (
           <div className="layout">
   
               {letGo?<Nav />:'loding...'}

               {letGo?<Aside />:'loding...'}
               {letGo?<Main />:'loding...'}

           </div>
       )
}