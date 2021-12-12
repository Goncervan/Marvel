import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { getSeries, getSeriesByName } from '../actions';
import s from './Styles/Home.module.css'

export default function Series() {
    const dispatch = useDispatch();
    const series = useSelector(state => state.allSeries)

    const [page, setPage] = useState(0)
    const [searchSerie, setSearchSerie] = useState(false)
    const [serie, setSerie] = useState("")

    useEffect(() => {
        if (searchSerie) {
            dispatch(getSeriesByName(serie, page))
            console.log("serie")
        } else {
            dispatch(getSeries(page))
            console.log("no serie")
        }
        console.log(series)
    }, [page])
    // -------------------------------------------Paginación----------------------------------------------
    function handleNextPage(e) {
        e.preventDefault();
        if (page <= series.total) {
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
        setSearchSerie(false)
        dispatch(getSeries(0));
    }
    // --------------------------------------------Busqueda--------------------------------------------
    function handleInputSerie(e) {
        e.preventDefault();
        setSerie(e.target.value);
    }
    function handleSearchSerie(e) {
        e.preventDefault();
        setSearchSerie(true);
        dispatch(getSeriesByName(serie, 0))
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
                            <span>Search by Name</span>
                            <input
                                placeholder='Example: Avengers'
                                type="text"
                                onChange={(e) => handleInputSerie(e)}
                            />
                        </div>
                        <button
                            className={s.btn}
                            onClick={(e) => handleSearchSerie(e)}>Search
                        </button>
                    </div>
                    <button className={s.btn} onClick={(e) => handleReload(e)}>Reload Series</button>
                </nav>
                <div className={s.containerSeries}>
                    {series?.results?.map((el) => {
                        return (
                            <div className={s.cardSeries} key={el.id}>
                                <h1>{el.title}</h1>
                                <div className={s.contCard}>
                                    <div>
                                        <img className={s.img} alt="" src={`${el.thumbnail.path}.${el.thumbnail.extension}`} />
                                    </div>
                                    <div>
                                        <h3>Start : {el.startYear}</h3>
                                        <h3>End : {el.endYear}</h3>
                                        {el.type.length > 0 ? (<h3>Type : {el.type}</h3>) : (<></>)}
                                        {/* {el.characters?.items?.map((e) => {
                                        return (
                                            <h5>{e.name}</h5>
                                        )
                                    })} */}
                                    </div>
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