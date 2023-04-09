
import './aside.css'
import { store } from '../../store'
export default function Aside() {
    let opt = {
        opt1 : 'add',
        opt2 : 'remove',
        opt3 : 'ask'
    }

    let listOpt = []
    let storeDataOpt = store.getState()
    // console.log('aside data:',storeDataOpt.user_operation.sideOpt)
    for(let key in storeDataOpt.user_operation.sideOpt){

        listOpt.push(
            <div className={'operation ' + opt[key]} key={storeDataOpt.user_operation.sideOpt[key]}>
                {storeDataOpt.user_operation.sideOpt[key]}
            </div>
        )
    }
   
    return(
        <div className="aside">
            {listOpt}
        </div>
    )
}
