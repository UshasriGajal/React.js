import style from './Nav.module.css'
const Side =(props)=>{
    return (
        <>
            <div className={style.side}>
                <h3>{props.h1}</h3>
            {/* <h3>Home Side Bar</h3> */}
            </div>
        </>
    )
}
export default Side