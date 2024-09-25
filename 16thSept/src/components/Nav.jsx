import {Link} from 'react-router-dom'
import style from './Nav.module.css'
const Nav=()=>{
    return (
        <>
            <ul className={style.main}>
                <li>
                    <button className={style.Link}><Link to='/' > Home</Link></button>
                </li>
                <li>
                <button className={style.Link}><Link to='/about' > About</Link></button>
                </li>
                <li>
                <button className={style.Link}><Link to='/contact' > Contact</Link></button>
                </li>
            </ul>
        </>
    )
}
export default Nav