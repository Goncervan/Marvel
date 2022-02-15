import React from "react";
import { Link } from "react-router-dom";
import s from './Styles/Landing.module.css'

export default function Landing() {
    return (
        <div className={s.container}>
            <img className={s.img} src="" alt="Marvel logo" />
            <div className={s.cont}>
                <div className={s.divTitle}>
                    <h1 className={s.h1}>MARVEL</h1>
                    <h2 className={s.title}>Api By Gonzalo Cervan</h2>
                </div>
                <div className={s.containerBtn}>
                    <Link className={s.link} to="/series"><button className={s.boton}><span>Series</span></button></Link>
                    <Link className={s.link} to="/characters"><button className={s.boton}><span>Characters</span></button></Link>
                    <Link className={s.link} to="/comics"><button className={s.boton}><span>Comics</span></button></Link>
                </div>
            </div>
        </div>
    )
}