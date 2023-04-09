
import './aside.css'
export default function Aside() {
    let opt = {
        opt1 : 'add',
        opt2 : 'remove',
        opt3 : 'ask'
    }

    let listOpt = []
    for(let key in opt){

        listOpt.push(
            <div className={'operation ' + opt[key]} key={opt[key]}>
                {opt[key]}
            </div>
        )
    }
   
    return(
        <div className="aside">
            {listOpt}
        </div>
    )
}
