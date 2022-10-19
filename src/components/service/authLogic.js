import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
class AuthLogic {
  constructor() {
    this.firebaseAuth = getAuth();
    this.googleProvider = new GoogleAuthProvider();
    //this.githubProvider = new GithubAuthProvider()
  }
  getUserAuth = () => {
    return this.firebaseAuth;
  };
  getGoogleAuthProvider = () => {
    return this.googleProvider;
  };
}

export default AuthLogic;

export const loginGoogle = (firebaseAuth, googleProvider) => {
  return new Promise((resolve, reject) => {
    signInWithPopup(firebaseAuth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        resolve(user);
      })
      .catch((e) => reject(e));
  });
};

export const logout = (firebaseAuth) => {
  window.localStorage.removeItem("userId");
  return new Promise((resolve, reject) => {
    firebaseAuth
      .signOut()
      .catch((e) => reject(alert(e + ": 로그아웃 에러입니다.")));
  });
};

export const onAuthChange = (firebaseAuth) => {
  return new Promise((resolve) => {
    firebaseAuth.onAuthStateChanged((user) => {
      resolve(user);
    });
  });
};
