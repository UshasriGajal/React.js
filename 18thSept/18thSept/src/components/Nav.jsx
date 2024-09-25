import { NavLink } from 'react-router-dom'
// import {<NavLink} from 'react-router-dom'
import style from './Nav.module.css'
const Nav=()=>{
    return (
        <>
            <ul className={style.main}>
                <li>
                    <button className={style.Link}><NavLink to='/' > Home</NavLink></button>
                </li>
                <li>
                <button className={style.Link}><NavLink to='/about' > About</NavLink></button>
                </li>
                <li>
                <button className={style.Link}><NavLink to='/contact' > Contact</NavLink></button>
                </li>
            </ul>
        </>
    )
}
export default Nav