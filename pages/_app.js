import '../styles/globals.css'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, database } from '../firebase-tools'
import Login from '../components/login'
import Loading from '../components/Loading'
import { createContext } from 'react'

export const AuthContext = createContext()

function MyApp({ Component, pageProps }) {
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
	return (
		<AuthContext.Provider value={{
			displayName: user.displayName,
			email: user.email, 
			photoURL: user.photoURL,
			uid: user.uid
			}} >
			<Component {...pageProps} />
		</AuthContext.Provider>
	)
}

export default MyApp
