import { useAuthContext } from "~/contexts/AuthContext";
import AuthNavigator from "~/navigation/AuthNavigator";
import RootNavigator from "./RootNavigator";

export default function Navigator() {
  const { isSignedIn } = useAuthContext();

  if (isSignedIn) {
    return <RootNavigator />;
  }

  return <AuthNavigator />;
}
