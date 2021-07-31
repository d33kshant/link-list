import { useContext, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { database } from '../firebase-tools'
import { AuthContext } from '../pages/index'
import isURL from 'validator/lib/isURL';

export default function Input({placeHolder, children}) {

    const user = useContext(AuthContext)
    const key = placeHolder.toLowerCase()

    const inputRef = useRef()

    const loadValue = ()=>{
        database.collection('users').doc(user.uid)
        .get().then((doc) => {
            if (doc.exists) {
                const val = doc.data()[key]
                if(val) inputRef.current.value = val
            }
        }).catch((error) => {
            console.log("Error :", error);
        });
    }

    const onChange = ()=>{
        const value = inputRef.current.value
        if (isURL(value) || value === ""){
            const newvalue = {}
            newvalue[key] = value
            database.collection("users").doc(user.uid).set(newvalue, {merge: true})
            inputRef.current.style.borderColor = "green"
        } else {
            inputRef.current.style.borderColor = "red"
        }
        
    }
    
    useEffect(() => {
        loadValue()
    }, [])

    return (
        <Container>
            {children}
            <URLInput onChange={onChange} placeholder={placeHolder} ref={inputRef}/>
        </Container>
    )
}

const Container = styled.div`
    border: 2px solid #dbdbdb;
    display: flex;
    align-items: center;
    padding: 4px 8px;
    border-radius: 4px;
`

const URLInput = styled.input`
    width: 100%;
    border: none;
    padding: 8px;
    :focus {
        outline: none;
    }
`