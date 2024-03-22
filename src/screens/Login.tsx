import { useState } from "react";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  View
} from "react-native";
import { Button, TextInput } from "react-native-paper";

import Header from "~/components/Header";
import { useAuthContext } from "~/contexts/AuthContext";

export default function Login() {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const { toggleIsSignedIn } = useAuthContext();

  return (
    <>
      <SafeAreaView style={styles.notch} />
      <View style={styles.container}>
        <Header title="Smash Bros" />
        <KeyboardAvoidingView style={styles.form}>
          <TextInput
            mode="outlined"
            label="Email"
            keyboardType="email-address"
          />
          <TextInput
            mode="outlined"
            label="Mot de passe"
            secureTextEntry={!visiblePassword}
            right={
              <TextInput.Icon
                onPress={() => setVisiblePassword((old) => !old)}
                icon={visiblePassword ? "eye" : "eye-off"}
              />
            }
          />
          <Button onPress={() => toggleIsSignedIn()} mode="contained">Connexion</Button>
        </KeyboardAvoidingView>
      </View>
      <SafeAreaView />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1
  },
  form: {
    display: "flex",
    flex: 1,
    gap: 24,
    padding: 32
  },
  notch: {
    backgroundColor: "#6B4FAA"
  }
});
