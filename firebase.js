import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDKJdXQoq5pcVDMrFBrhOTg_09HKSSzc8w",
  authDomain: "stress-button-15ea7.firebaseapp.com",
  projectId: "stress-button-15ea7",
  storageBucket: "stress-button-15ea7.appspot.com",
  messagingSenderId: "835787351971",
  appId: "1:835787351971:web:d4bb26c5d8d6928da51c16"
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with AsyncStorage for state persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { auth };
export default app;

