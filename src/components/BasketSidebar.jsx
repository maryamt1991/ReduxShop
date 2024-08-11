import { TbChecklist } from "react-icons/tb"
import { FaHashtag } from "react-icons/fa6"
import { BsPatchCheck } from "react-icons/bs"
import styles from "./BasketSidebar.module.css"
import {checkout} from "../features/cart/cartSlice"
import { useDispatch } from "react-redux"

function BasketSidebar({ state}) {
    const dispatch=useDispatch()
    return (
        <div className={styles.sidebar}>
            <div>
                <TbChecklist />
                <p>Total:</p>
                <span>{state.total}</span>
            </div>
            <div>
                <FaHashtag />
                <p>Quantity:</p>
                <span>{state.itemsCounter}</span>
            </div>
            <div>
                <BsPatchCheck />
                <p>Status:</p>
                <span>{!state.checkout && "Pending..."}</span>
            </div>
            <button onClick={()=>dispatch(checkout())}>Ckeckout</button>
        </div>
    )
}

export default BasketSidebar