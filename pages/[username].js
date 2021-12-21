import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Profile from '../components/Profile'
import Divider from '../components/Divider'
import { database } from '../firebase-tools'
import Loading from '../components/Loading'
import UserNotFound from '../components/UserNotFound'
import styled from 'styled-components'
import Link from '../components/Link'
import Instagram from '../components/icons/Instagram'
import Facebook from '../components/icons/Facebook'
import Website from '../components/icons/Website'
import Twitter from '../components/icons/Twitter'
import Twitch from '../components/icons/Twitch'
import Github from '../components/icons/Github'
import Youtube from '../components/icons/Youtube'
import Linkedin from '../components/icons/Linkedin'
import Spotify from '../components/icons/Spotify'
import Soundcloud from '../components/icons/Soundcloud'
import Gitlab from '../components/icons/Gitlab'
import Dev from '../components/icons/Dev'
import Codepen from '../components/icons/Codepen'

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
            <Head>
				<title>{profile.displayName} • LinkList</title>
				<meta name="description" content="All your social links in one place." />
				<link rel="icon" href="/favicon.ico" />
			</Head>
            <Profile user={{
                email: profile.email,
                displayName: profile.displayName,
                photoURL: profile.photoURL,
            }}/>
            <Divider/>
            <LinkGroup>
                { (!!profile.website) && <Link link={profile.website} color="#000000" title="Website"><Website color="#000000"/></Link>}
                { (!!profile.instagram) && <Link link={profile.instagram} color="#E4405F" title="Instagram"><Instagram color="#E4405F"/></Link>}
                { (!!profile.facebook) && <Link link={profile.facebook} color="#1877F2" title="Facebook"><Facebook color="#1877F2"/></Link>}
                { (!!profile.youtube) && <Link link={profile.youtube} color="#ff0000" title="Youtube"><Youtube color="#ff0000"/></Link>}
                { (!!profile.twitter) && <Link link={profile.twitter} color="#1DA1F2" title="Twitter"><Twitter color="#1DA1F2"/></Link>}
                { (!!profile.linkedin) && <Link link={profile.linkedin} color="#0A66C2" title="LinkedIn"><Linkedin color="#0A66C2"/></Link>}
                { (!!profile.twitch) && <Link link={profile.twitch} color="#9146FF" title="Twitch"><Twitch color="#9146FF"/></Link>}
                { (!!profile.spotify) && <Link link={profile.spotify} color="#1DB954" title="Spotify"><Spotify color="#1DB954"/></Link>}
                { (!!profile.soundcloud) && <Link link={profile.soundcloud} color="#FF3300" title="SoundCloud"><Soundcloud color="#FF3300"/></Link>}
                { (!!profile.github) && <Link link={profile.github} color="#181717" title="GitHub"><Github color="#181717"/></Link>}
                { (!!profile.gitlab) && <Link link={profile.gitlab} color="#FCA121" title="GitLab"><Gitlab color="#FCA121"/></Link>}
                { (!!profile.dev) && <Link link={profile.dev} color="#3b49df" title="Dev.to"><Dev color="#3b49df"/></Link>}
                { (!!profile.codepen) && <Link link={profile.codepen} color="#5a5f73" title="CodePen"><Codepen color="#5a5f73"/></Link>}
            </LinkGroup>
            </>
            : <Loading/>}
        </div>
    )
}

const LinkGroup = styled.div`
    max-width: 750px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 18px;
    display: grid;
    gap: 8px;
    grid-template-columns: 1fr 1fr;
    padding: 0 16px;
`