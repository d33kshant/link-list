import Head from 'next/head'
import styled from 'styled-components'
import Profile from '@/components/Profile'
import Input from '@/components/Input'
import Instagram from '@/components/icons/Instagram'
import Facebook from '@/components/icons/Facebook'
import Username from '@/components/icons/username'
import Website from '@/components/icons/Website'
import Twitter from '@/components/icons/Twitter'
import Twitch from '@/components/icons/Twitch'
import Github from '@/components/icons/Github'
import Youtube from '@/components/icons/Youtube'
import Linkedin from '@/components/icons/Linkedin'
import Divider from '@/components/Divider'
import { auth, database } from '../firebase-tools'
import Spotify from '@/components/icons/Spotify'
import Soundcloud from '@/components/icons/Soundcloud'
import Gitlab from '@/components/icons/Gitlab'
import Dev from '@/components/icons/Dev'
import Codepen from '@/components/icons/Codepen'
import UsernameInput from '@/components/UsernameInput'
import { useAuthState } from 'react-firebase-hooks/auth'
import Loading from '@/components/Loading'
import Login from '@/components/Login'

import { createContext } from 'react'
export const AuthContext = createContext()

export default function Home() {

	const [user, loading] = useAuthState(auth)

	if(loading) return <Loading/>
	if (!user){
		return <Login/>
	}

	database.collection('users').doc(user.uid).set({
		displayName: user.displayName,
		email: user.email, 
		photoURL: user.photoURL,
		uid: user.uid
	}, {merge: true})

	const logOut = ()=>{
		auth.signOut()
	}

	const gotoPage = ()=>{
		database.collection("users").where("email", "==", user.email)
        .get().then((result)=>{
            if(result.docs.length > 0){
                window.open(`/${result.docs[0].data().username}`);
            }
        })
	}

	return (
		<AuthContext.Provider value={user}>
			<div style={{margin: "0 auto", padding: "0 16px", maxWidth: "750px"}}>
				<Head>
					<title>{user.displayName} • LinkList</title>
					<meta name="description" content="All your social links in one place." />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<Profile user={user}/>
				<ButtonsGroup>
					<Open onClick={gotoPage}>
						Goto Page
						<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20" fill="#fff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>
					</Open>
					<LogOut onClick={logOut}>
							Log out
							<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20" fill="#fff"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M5,5h6c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h6c0.55,0,1-0.45,1-1v0 c0-0.55-0.45-1-1-1H5V5z"/><path d="M20.65,11.65l-2.79-2.79C17.54,8.54,17,8.76,17,9.21V11h-7c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h7v1.79 c0,0.45,0.54,0.67,0.85,0.35l2.79-2.79C20.84,12.16,20.84,11.84,20.65,11.65z"/></g></g></svg>
					</LogOut>
				</ButtonsGroup>
				<Divider/>
				<Heading>LinkList and Web 🌐</Heading>
				<Container>
					<UsernameInput placeHolder="Username" >
						<Username/>
					</UsernameInput>
					<Input placeHolder="Website">
						<Website/>
					</Input>
				</Container>
				<Divider/>
				<Heading>Social 👽</Heading>
				<Container>
				<Input placeHolder="Instagram">
						<Instagram/>
					</Input>
					<Input placeHolder="Facebook">
						<Facebook/>
					</Input>
					<Input placeHolder="YouTube">
						<Youtube/>
					</Input>
					<Input placeHolder="Twitter">
						<Twitter/>
					</Input>
					<Input placeHolder="LinkedIn">
						<Linkedin/>
					</Input>
					<Input placeHolder="Twitch">
						<Twitch/>
					</Input>
				</Container>
				<Divider/>
				<Heading>Music 🎵</Heading>
				<Container>
					<Input placeHolder="Spotify">
						<Spotify/>
					</Input>
					<Input placeHolder="Soundcloud">
						<Soundcloud/>
					</Input>
				</Container>
				<Divider/>
				<Heading>Developer 👨‍💻</Heading>
				<Container>
					<Input placeHolder="GitHub">
						<Github/>
					</Input>
					<Input placeHolder="GitLab">
						<Gitlab/>
					</Input>
					<Input placeHolder="Dev">
						<Dev/>
					</Input>
					<Input placeHolder="CodePen">
						<Codepen/>
					</Input>
				</Container>
			</div>
		</AuthContext.Provider>
	)
}

const Heading = styled.h3`
	/* margin: ; */
`

const ButtonsGroup = styled.div`
	display: flex;
	gap: 16px;
	justify-content: center;
	align-items: center;
	margin-top: 16px;
`

const Container = styled.div`
	max-width: 750px;
	width: 100%;
	margin: 0 auto;
	margin-bottom: 18px;
	display: grid;
	gap: 8px;
	grid-template-columns: 1fr 1fr;
`

const Open = styled.button`
	background: #4285F4;
	color: white;
	border: none;
	padding: 8px;
	padding-left: 12px;
	border-radius: 4px;
	font-weight: 500;
	font-size: 16px;
	opacity: 0.9;
	cursor: pointer;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	display: flex;
	align-items: center;
	gap: 8px;

	:hover {
		background: #174EA6;
	}
`

const LogOut = styled.button`
	background: #D71921;
	color: white;
	border: none;
	padding: 8px;
	padding-left: 12px;
	border-radius: 4px;
	font-weight: 500;
	font-size: 16px;
	opacity: 0.9;
	cursor: pointer;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	display: flex;
	align-items: center;
	gap: 8px;

	:hover {
		background: #88171A;
	}
`