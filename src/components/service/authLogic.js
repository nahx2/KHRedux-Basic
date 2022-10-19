import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

class AuthLogic {
  constructor() {
    this.firebaseAuth = getAuth();
    this.googleProvider = new GoogleAuthProvider();
    //this.githubProvider = new GithubAuthProvider();
  }
  getUserAuth = () => {
    return this.firebaseAuth;
  };
  getGoogleAuthProvider = () => {
    return this.googleProvider;
  };

  logout() {
    this.firebaseAuth.signOut();
  }

  getProvider(providerName) {
    switch (providerName) {
      case "Google":
        return this.googleProvider;
      case "Github":
        return this.githubProvider;
      default:
        throw new Error(`not supported provider: ${providerName}`);
    }
  }
}

export default AuthLogic;

export const loginGoogle = (firebaseAuth, googleProvider) => {
  return new Promise((resolve, reject) => {
    return signInWithPopup(firebaseAuth, googleProvider)
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
    firebaseAuth.signOut.catch((e) =>
      reject(alert(e + ":로그아웃 에러입니다"))
    );
  });
};

export const onAuthChange = (firebaseAuth) => {
  return new Promise((resolve) => {
    firebaseAuth.onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  });
};
