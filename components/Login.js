import React from 'react'
import styled from 'styled-components'
import { auth, provider } from '../firebase-tools'

export default function Login() {

	const login = ()=>{
		auth.signInWithPopup(provider).catch(alert)
	}

    return (
        <Container>
            <span style={{ fontSize: 56 }}>🔗</span>
            <Title>LinkList</Title>
            <Subtitle>All your social links in one place.</Subtitle>
            <Button onClick={login}>
                <svg width="20" height="20" fill="white" viewBox="0 0 20 20">
                    <path d="M10.2,7.235a10.224,10.224,0,0,0-9.114,5.51,9.821,9.821,0,0,0,0,8.98,10.225,10.225,0,0,0,9.115,5.51,9.887,9.887,0,0,0,6.762-2.414A9.686,9.686,0,0,0,20,17.463a11.683,11.683,0,0,0-.18-2.033H10.2v3.85h5.508a4.625,4.625,0,0,1-2.033,3.04,6.218,6.218,0,0,1-3.475.956,6.09,6.09,0,0,1-5.727-4.128,5.879,5.879,0,0,1,0-3.827A6.087,6.087,0,0,1,10.2,11.194a5.6,5.6,0,0,1,3.912,1.5L17.03,9.842A9.912,9.912,0,0,0,10.2,7.235Z" transform="translate(0 -7.235)" />
                </svg>
                <span>Login with Google</span>
            </Button>
        </Container>
    )
}

const Title = styled.h3`
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-size: 26px;
	margin: 0;
`

const Subtitle = styled.p`
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	margin: 4px 0;
	margin-bottom: 24px;
	color: #a5a5a5;
`

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 75vh;
	flex-direction: column;
`

const Button = styled.button`
	background: #4285F4;
	color: white;
	border: none;
	padding: 8px;
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