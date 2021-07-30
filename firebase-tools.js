import firebase from "firebase";
import config from "./firebase-config"

const app = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()
const database = app.firestore()
const auth = app.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {database, auth, provider}