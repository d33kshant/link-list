import firebase from "firebase"

const config = {
	apiKey: process.env.API_KEY,
	authDomain: process.env.AUTH_DOMAIN,
	projectId: process.env.PROJECT_ID,
	storageBucket: process.env.STORAGE_BUCKET,
	messagingSenderId: process.env.MESSAGING_SENDER_ID,
	appId: process.env.APP_ID
}

const app = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()
const database = app.firestore()
const auth = app.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { database, auth, provider }