"use client"


import React from 'react'

import { useSelector, useDispatch } from 'react-redux';

import { useEffect } from 'react';

import { changeSearch, resetSearch } from "../../../redux/features/search"

import { AppDispatch, useAppSelector } from "../../../redux/store"


function Search() {

    const search = useAppSelector(state => state.search);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {

        dispatch(resetSearch());
    }, [dispatch])

    return (
        <div className="flex-auto w-64">
            <input
                className='rounded-md border-none outline-none h-8 lg:w-2/5 md:w-2/5 w-full px-2 mt-1'
                placeholder="Type the word you are looking for ..."
                value={search}
                onChange={evento => dispatch(changeSearch(evento.target.value))}
            />
        </div>
    )
}

export default Search