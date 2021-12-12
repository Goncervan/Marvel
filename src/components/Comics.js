import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getComics, getComicsByName } from '../actions';
import s from './Styles/Home.module.css'

export default function Comics() {
    const dispatch = useDispatch();
    const comics = useSelector(state => state.allComics)

    const [page, setPage] = useState(0)
    const [searchComics, setSearchComics] = useState(false)
    const [comic, setComic] = useState("")

    useEffect(() => {
        if (searchComics) {
            dispatch(getComicsByName(comic, page))
        } else {
            dispatch(getComics(page))
        }
    }, [page])
    // -------------------------------------------Paginación----------------------------------------------
    function handleNextPage(e) {
        e.preventDefault();
        if (page <= comics.total) {
            setPage(page + 21)
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        } else {
            alert("Last page")
        }
    }
    function handlePrevPage(e) {
        e.preventDefault();
        if (page !== 0) {
            setPage(page - 21)
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
        setSearchComics(false)
        dispatch(getComics(0));
    }
    // --------------------------------------------Busqueda--------------------------------------------
    function handleInputComic(e) {
        e.preventDefault();
        setComic(e.target.value);
    }
    function handleSearchComic(e) {
        e.preventDefault();
        setSearchComics(true);
        dispatch(getComicsByName(comic, 0))
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
                            <span>Name</span>
                            <input
                                placeholder='Example: Iron-man'
                                type="text"
                                onChange={(e) => handleInputComic(e)}
                            />
                        </div>
                        <button
                            className={s.btn}
                            onClick={(e) => handleSearchComic(e)}>Search
                        </button>
                    </div>
                    <button className={s.btn} onClick={(e) => handleReload(e)}>Reload Comics</button>
                </nav>
                <div className={s.containerSeries}>
                    {comics?.results?.map((el) => {
                        return (
                            <div className={s.cardSeries} key={el.id}>
                                <h1>{el.title}</h1>
                                <div className={s.contCard}>
                                    <img className={s.img} alt="" src={`${el.thumbnail.path}.${el.thumbnail.extension}`} />
                                </div>
                                <div>
                                    {/* {el.pageCount > 0 ? (<h3>Total pages : {el.pageCount}</h3>) : (<></>)}
                                    <h3>End : {el.endYear}</h3>
                                    { el.type.length > 0 ? (<h3>Type : {el.type}</h3>) : (<></>)}
                                    {el.characters?.items?.map((e) => {
                                        return (
                                            <h5 key={el.name}>{e.name}</h5>
                                        )
                                    })} */}
                                </div>
                            </div>
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