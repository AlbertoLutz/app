import { Dispatch, SetStateAction, useEffect, useState } from "react";

type Response<T> = [T, Dispatch<SetStateAction<T>>]

export function usePersistedStates<T>(
    key: string, 
    inicialState: T,
    ): Response<T> {
    const [state, setSteta] = useState(() => {
        const storageValue = localStorage.getItem(key);
        
        if(storageValue) {
            return JSON.parse(storageValue);
        }

        return inicialState;
    })

    useEffect(() => {
       localStorage.setItem(key, JSON.stringify(state));
    }, [key, state])

    return[state, setSteta];
}