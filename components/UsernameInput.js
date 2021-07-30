import { useContext, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { database } from '../firebase-tools'
import { AuthContext } from '../pages/_app'

export default function UsernameInput({ children, placeHolder }) {

    const user = useContext(AuthContext)

    const inputRef = useRef()
    const fieldRef = useRef()

    const loadValue = () => {
        database.collection('users').doc(user.uid)
            .get().then((doc) => {
                if (doc.exists) {
                    const val = doc.data().username
                    if (val) inputRef.current.value = val
                }
            }).catch((error) => {
                console.log("Error :", error);
            });
    }

    const onChange = () => {

        //TODO: username validation, min max length, characters 

        const newname = inputRef.current.value
        if (newname.length > 3) {
            database.collection("users").where("username", "==", newname)
                .get().then((doc) => {
                    if (doc.docs.length > 0) {
                        if (doc.docs[0].data().email !== user.email) {
                            fieldRef.current.style.borderColor = "red"
                        } else {
                            fieldRef.current.style.borderColor = "blue"
                        }
                    } else {
                        fieldRef.current.style.borderColor = "green"
                        database.collection('users').doc(user.uid).set({username: newname}, {merge: true})
                    }
                }).catch((error) => {
                    console.log("Error :", error);
                });
        } else {
            fieldRef.current.style.borderColor = "red"
        }
    }

    useEffect(() => {
        loadValue()
    }, [])

    return (
        <Container ref={fieldRef}>
            {children}
            <URLInput placeholder={placeHolder} ref={inputRef} onChange={onChange} />
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