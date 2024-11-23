import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, updateCurrentUser } from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoadign] = useState(true);

    const provider = new GoogleAuthProvider();

    const CreateUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const Login = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    };
    const Logout = () =>{
        return signOut(auth)
    };

    const GoogleLogin = () =>{
        return signInWithPopup(auth, provider)
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
           setUser(currentUser);
           setLoadign(false);
        });
        return (
            ()=>{
              return unsubscribe();
            },[]
        );
    });

    const authInfo = {

        user,
        loading,
        CreateUser,
        Login,
        Logout,
        GoogleLogin,
    }
    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;