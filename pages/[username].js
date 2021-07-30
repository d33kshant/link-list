import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'
import Profile from '../components/Profile'
import Divider from '../components/Divider'
import { database } from '../firebase-tools'
import Loading from '../components/Loading'
import UserNotFound from '../components/UserNotFound'

export default function UserProfile() {
    
    const router = useRouter()

    const [profile, setProfile] = useState()
    const [notFound, setNotFound] = useState(false)
    
    useEffect(() => {
        if(router.asPath !== router.route)
        database.collection("users").where("username", "==", router.query.username)
        .get().then((result)=>{
            if(result.docs.length > 0){
                setProfile(result.docs[0].data())
            }else{
                setNotFound(true)
            }
        })
    }, [router])
    
    if(notFound) return <UserNotFound/>

    return (
        <div>
            {(profile)
            ?<>
            <Profile user={{
                email: profile.email,
                displayName: profile.displayName,
                photoURL: profile.photoURL,
            }}/>
            <Divider/>
            </>
            : <Loading/>}
        </div>
    )
}
