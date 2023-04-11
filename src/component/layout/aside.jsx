
import './aside.css'
import { store } from '../../store'
import { useDispatch } from 'react-redux'
import { sideOptActuel } from '../../store'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
export default function Aside(props) {
    let Dispatch = useDispatch()
    let params = useParams()
    let listOpt = []
    let storeDataOpt = store.getState()

    // console.log('aside data:',storeDataOpt.user_operation.sideOpt)
    for(let key in storeDataOpt.user_operation.sideOpt){

        listOpt.push(
            // <Link to={`/${params.role}/${params.id_user}/${params.version}/${storeDataOpt.user_operation.sideOpt[key]}`} >
            <div className={'operation ' + storeDataOpt.user_operation.sideOpt[key]} key={storeDataOpt.user_operation.sideOpt[key]} onClick={() => {Dispatch(sideOptActuel(storeDataOpt.user_operation.sideOpt[key]));props.redender((prv) => prv ? false : true)}}>
                {storeDataOpt.user_operation.sideOpt[key]}
            </div>
            // </Link>
        )
    }
   
    return(
        <div className="aside">
            {listOpt}
        </div>
    )
}
