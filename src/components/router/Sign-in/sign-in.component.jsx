// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import {
  // auth,
  signInWithGooglePopup,
  // signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils.component";
import SignUpForm from "../../sign-up/sign-up.component";

function SignIn() {
  //   useEffect(async () => {
  //     const response = await getRedirectResult(auth);

  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>This is Sign In Page</h1>
      <button onClick={logGoogleUser}> Sign in WIth Google Popup</button>
      <SignUpForm />
    </div>
  );
}

export default SignIn;
