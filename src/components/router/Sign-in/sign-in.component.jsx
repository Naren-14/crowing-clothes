import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils.component";

function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);

    console.log(userDocRef);
  };
  return (
    <div>
      <h1>This is Sign In Page</h1>
      <button onClick={logGoogleUser}> Sign in WIth Google Popup</button>
    </div>
  );
}

export default SignIn;
