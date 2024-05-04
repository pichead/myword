"use client"
import React from 'react'
import { PrismaClient } from '@prisma/client'


function AddWord() {
    const prisma = new PrismaClient()

    const addNewWord = async () => {

        const res = await fetch("http://localhost:3000/api/vocabulary", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                word: "go",
                meaning: "ไป"
            })
        })

        console.log(res)
        console.log("call api")


    }


    return (
        <React.Fragment>
            <button className='btn px-3 py-2 bg-orange-500 text-white' type='button' onClick={addNewWord}>create</button>
        </React.Fragment>
    )


}



export default AddWord