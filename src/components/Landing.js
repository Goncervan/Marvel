import React from "react";
import { Link } from "react-router-dom";
import s from './Styles/Landing.module.css'

export default function Landing() {
    return (
        <div className={s.container}>
            <div className={s.cont}>
                <img className={s.img} src="https://marcas-logos.net/wp-content/uploads/2020/02/Marvel-Comics-Logo-1983.png" alt="Marvel logo" />
                <h2 className={s.title}>Api By Gonzalo Cervan</h2>
                <div className={s.containerBtn}>
                    <Link className={s.link} to="/series"><button className={s.boton}><span>Series</span></button></Link>
                    <Link className={s.link} to="/characters"><button className={s.boton}><span>Characters</span></button></Link>
                    <Link className={s.link} to="/comics"><button className={s.boton}><span>Comics</span></button></Link>
                </div>
            </div>
        </div>
    )
}