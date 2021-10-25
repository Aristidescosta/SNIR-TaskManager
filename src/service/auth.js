import firebase from "../config/firebaseConfig";

const socialMediaAuth = (provider) => {
    return firebase
        .auth()
        .signInWithPopup(provider)
        .then((res) => {
            return res.user;
        })
        .cath((err) => {
            return err;
    });
};

export default socialMediaAuth;