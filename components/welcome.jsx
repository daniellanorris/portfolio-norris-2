'use client';

import React, { useState, useEffect } from "react";
import {useRouter} from 'next/navigation'

export default function WelcomeAnim() {
    const things = ['designer', 'creator', 'developer', 'artist','......','......','......'];
    const [printedLetters, setPrintedLetters] = useState('');

    const router = useRouter()


    useEffect(() => {
        async function animate() {
            for(let i = 0; i < things.length; i++) {
                const word = things[i]
                for (const letter of word) {
                    setPrintedLetters(prev => prev.slice(-1) === letter && prev.slice(-1) !== '.' ? prev : prev + letter);
                    await new Promise(resolve => setTimeout(resolve, 150));
                    console.log(letter)
             
                } 

                setPrintedLetters(''); // Add a space after each word
            }

            sendToNext()
        }
        animate();
    }, []);

    function sendToNext() {
        router.push('/home')

    }
    
    return (
        <>
            <div style={{color: 'white'}} className={"greeting-text"}>{printedLetters}</div>
        </>
    );
}
