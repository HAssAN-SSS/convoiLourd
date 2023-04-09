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
    let Dispatch = useDispatch()
     params = useParams()
     console.log('params.id',params.role)
     let [sideOpt,setSideOpt] = useState(null)
     let [basicOpt,setBasicOpt] = useState(null)

    //  ------------------------------------set operation foreach role -------------------
     if (params.role === 'tme') {
        basicOpt = {
          opt1: 'validate',
          opt2: 'refuse',
          opt3: 'Choisir l itineraire'
        };
        setSideOpt((prv) => {
          return {
            sideOpt1: 'To Do',
            sideOpt2: 'Done',
            sideOpt3: 'refused'
          };
        });
      } else if (params.role === 'capt') {
        setSideOpt((preturnrv) => {
          return {
            opt1: 'validate',
            opt2: 'refuse',
            opt3: null
          };
        });
      
        setSideOpt((prv) => {
          return {
            sideOpt1: 'To Do',
            sideOpt2: 'Done',
            sideOpt3: 'refused'
          };
        });
      } else if (params.role === 'D_tech') {
        basicOpt = {
          opt1: 'validate',
          opt2: 'refuse_motif',
          opt3: null
        };
        setSideOpt((prv) => {
          return {
            sideOpt1: 'To Do',
            sideOpt2: 'Done',
            sideOpt3: 'refused'
          };
        });
      } else if (params.role === 'exploi') {
        basicOpt = {
          opt1: 'validate',
          opt2: 'refuse_motif',
          opt3: null
        };
        setSideOpt((prv) => {
          return {
            sideOpt1: 'To Do',
            sideOpt2: 'Done',
            sideOpt3: 'refused'
          };
        });
      } else if (params.role === 'client') {
        basicOpt = {
          opt1: 'Submit',
          opt2: 'Cancel',
          opt3: null
        };
        setSideOpt((prv) => {
          return {
            sideOpt1: 'Demandes',
            sideOpt2: 'Accepted',
            sideOpt3: 'refused'
          };
        });
        
      }
      else if (params.role === 'terr') {
        basicOpt = {
          opt1: 'validate',
          opt2: 'refuse_motif',
          opt3: null
        };
        setSideOpt((prv) => {
          return {
            sideOpt1: 'To Do',
            sideOpt2: 'Done',
            sideOpt3: 'refused'
          };
        });
        
      }
      
    Dispatch(operationAffect(basicOpt,sideOpt))
    // !------------------useEffect------------------
     useEffect(() => {
         Dispatch(fetchLoading())
         console.log('useEffect')
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
    })
    .catch(error => {
        console.log('fetchError a hassan')
        Dispatch(fetchError())
    });

            },[])
            store.subscribe(() => console.log(store.getState()))
   
       return (
           <div className="layout">
   
               {letGo?<Nav />:'loding...'}
               {letGo?<Aside />:'loding...'}
               {letGo?<Main />:'loding...'}

           </div>
       )
}