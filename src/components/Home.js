import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import getCharacters from '../actions'
import { searchByName } from '../actions';
import s from './Styles/Home.module.css'

export default function Home() {
    const dispatch = useDispatch();
    const characters = useSelector(state => state.allCharacters)

    const [page, setPage] = useState(0)
    const [searchName, setSearchName] = useState(false)
    const [name, setName] = useState("")

    useEffect(() => {
        if (searchName) {
            dispatch(searchByName(name, page))
        } else {
            dispatch(getCharacters(page))
        }
    }, [page])

    // -------------------------------------------Paginación----------------------------------------------
    function handleNextPage(e) {
        e.preventDefault();
        if (page <= characters.total) {
            setPage(page + 20)
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        } else {
            alert("Last page")
        }
    }
    function handlePrevPage(e) {
        e.preventDefault();
        if (page !== 0) {
            setPage(page - 20)
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        } else if (page === 0) {
            alert("First page")
        }
    }


    // ---------------------------------------Botones funcionales---------------------------------------
    function handleDown(e) {
        e.preventDefault();
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
    }
    function handleUp(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    function handleReload(e) {
        e.preventDefault();
        setSearchName(false)
        dispatch(getCharacters(0));
    }

    // --------------------------------------------Busqueda--------------------------------------------

    function handleInputName(e) {
        e.preventDefault();
        setName(e.target.value);
    }
    function handleSearchName(e) {
        e.preventDefault();
        setSearchName(true);
        dispatch(searchByName(name, 0));
    }

    return (
        <div className={s.prin}>
            <div className={s.prins}>
                <nav className={s.nav}>
                    <Link className={s.linkHome} to="/">
                        {/* <button className={s.btn}>Back</button> */}
                        <img className={s.logo} src="https://images.vectorhq.com/images/previews/8be/marvel-logo-psd-440172.png" alt="logo" />
                    </Link>
                    <div className={s.containerSearch}>
                        <div className={s.inputcontainer}>
                            <span> Search by Name</span>
                            <input
                                placeholder='Example: Iron-man'
                                type="text"
                                onChange={(e) => handleInputName(e)}
                            />
                        </div>
                        <button
                            className={s.btn}
                            onClick={(e) => handleSearchName(e)}>Search
                        </button>
                    </div>
                    <button className={s.btn} onClick={(e) => handleReload(e)}>Reload Characters</button>
                </nav>
                <div className={s.containerCh}>
                    {characters?.results?.map(el => {
                        return (
                            <Link className={s.link} to={"/details/" + el.id}>
                                <div className={s.card} key={el.id}>
                                    <img className={s.img} alt="" src={`${el.thumbnail.path}.${el.thumbnail.extension}`} />
                                    <span className={s.cardName}>{el.name}</span>
                                </div>
                            </Link>
                        )
                    })}
                </div>
                <div className={s.paged}>
                    <button
                        className={s.btn}
                        onClick={e => { handlePrevPage(e) }}>
                        Previous page
                    </button>
                    <button
                        className={s.btn}
                        onClick={e => { handleNextPage(e) }}>
                        Next page
                    </button>
                </div>
                <button className={s.btnUp} onClick={(e) => handleUp(e)}>Up</button>
                <button className={s.btnDown} onClick={(e) => handleDown(e)}>Down</button>
            </div>
        </div>
    )
}