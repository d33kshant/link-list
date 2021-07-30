import '../styles/globals.css'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, database } from '../firebase-tools'
import Login from '../components/login'
import Loading from '../components/Loading'
import { createContext } from 'react'


function MyApp({ Component, pageProps }) {
	
	return (
		<Component {...pageProps} />
	)
}

export default MyApp
