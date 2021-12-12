import React from "react";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getCharacterDetail } from "../actions";
import { useParams } from "react-router";
import s from './Styles/Detail.module.css'


export default function Details() {
    const dispatch = useDispatch();
    const id = useParams();
    useEffect(() => {
        dispatch(getCharacterDetail(id.id))
    }, [dispatch])

    const detail = useSelector((state) => state.detail)

    console.log(detail)
    return (
        <div className={s.container}>
            <div className={s.containerCharacter}>
                {detail?.results?.map((el) => {
                    return (
                        <div className={s.card} key={el.id}>
                            <h1 className={s.title}>{el.name}</h1>
                            {el.description.length > 0 ? (<h3 className={s.description}>{el.description}</h3>) : (<h3 className={s.description}>No descripition available</h3>)}
                            <div className={s.flex}>
                                <div className={s.flex1}>
                                    <img className={s.img} alt="" src={`${el.thumbnail.path}.${el.thumbnail.extension}`} />
                                </div>
                                <div className={s.flex2}>
                                    <section className={s.section}>
                                        <h2>Series</h2>
                                        <ul>
                                            {
                                                el.series?.available > 0 ? (
                                                    el.series?.items?.map((e) => {
                                                        return (
                                                            <li>{e.name}</li>
                                                        )
                                                    })
                                                ) : (
                                                    <li>No series available</li>
                                                )
                                            }
                                        </ul>
                                    </section>
                                    <section className={s.section}>
                                        <h2>Comics</h2>
                                        <ul>
                                            {
                                                el.comics?.available > 0 ? (
                                                    el.comics?.items?.map((e) => {
                                                        return (
                                                            <li>{e.name}</li>
                                                        )
                                                    })
                                                ) : (
                                                    <li>No comics available</li>
                                                )}
                                        </ul>
                                    </section>
                                    <section className={s.section}>
                                        <h2>Stories</h2>
                                        <ul>
                                            {
                                                el.stories?.available > 0 ? (
                                                    el.stories?.items?.map((e) => {
                                                        return (
                                                            <li>{e.name}</li>
                                                        )
                                                    })
                                                ) : (
                                                    <li>No stories available</li>
                                                )}
                                        </ul>
                                    </section>
                                </div>
                            </div>
                            <Link className={s.home} to="/characters">Home</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}