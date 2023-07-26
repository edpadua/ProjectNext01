"use client"

import React from 'react'

import { useDispatch, useSelector } from "react-redux";

import { useEffect } from 'react';

import { findFlags } from "../../../redux/features/flags"

import { AppDispatch, useAppSelector } from "../../../redux/store"



function FlagList() {

    const dispatch = useDispatch<AppDispatch>();

    const search = useAppSelector((state)=>state.search);

    const flags = useAppSelector(state => {
        const regexp = new RegExp(state.search, 'i');
        console.log('state',state)
        return {
            flags: state.flags        
        }
    });


    useEffect(() => {
        console.log("Search", search)
        dispatch(findFlags(search));
    }, [search, dispatch]);

    return (
        <div>
           
        </div>
    )
}

export default FlagList
