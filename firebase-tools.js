import firebase from "firebase"

const config = {
	apiKey: "AIzaSyDthXcbwAdvtWKh6A9F8Ofbcf5Al3DQNp4",
	authDomain: "link-list-dev.firebaseapp.com",
	projectId: "link-list-dev",
	storageBucket: "link-list-dev.appspot.com",
	messagingSenderId: "577166295829",
	appId: "1:577166295829:web:b47136dd973d45fd549f1c"
}

const app = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()
const database = app.firestore()
const auth = app.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { database, auth, provider }