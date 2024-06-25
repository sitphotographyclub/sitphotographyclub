import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";
const firebaseConfig = {
    apiKey: process.env.REACT_APP_ONBOARDING_apiKey,
    authDomain: process.env.REACT_APP_ONBOARDING_authDomain,
    databaseURL: process.env.REACT_APP_ONBOARDING_databaseURL,
    projectId: process.env.REACT_APP_ONBOARDING_projectId,
    storageBucket: process.env.REACT_APP_ONBOARDING_storageBucket,
    messagingSenderId: process.env.REACT_APP_ONBOARDING_messagingSenderId,
    appId: process.env.REACT_APP_ONBOARDING_appId
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export default database;