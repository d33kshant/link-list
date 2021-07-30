import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'
import Profile from '../components/Profile'
import Divider from '../components/Divider'
import { database } from '../firebase-tools'

export default function username() {
    
    const [profile, setProfile] = useState({})
    const router = useRouter()

    useEffect(() => {
        database.collection("users").where("username", "==", router.query.username)
        .get().then((result)=>{
            if(result.docs.length > 0){
                setProfile(result.docs[0].data())
            }
        })
    }, [])

    return (
        <div>
            <Profile user={{
                email: profile.email,
                displayName: profile.displayName,
                photoURL: profile.photoURL,
            }}/>
            <Divider/>
        </div>
    )
}
