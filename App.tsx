import { NetworkProvider } from "react-native-offline";
import { Provider as PaperProvider } from "react-native-paper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navigator from "~/navigation/Navigator";
import { AuthContextProvider } from "~/contexts/AuthContext";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <AuthContextProvider>
      <NetworkProvider>
        <QueryClientProvider client={queryClient}>
          <PaperProvider>
            <Navigator />
          </PaperProvider>
        </QueryClientProvider>
      </NetworkProvider>
    </AuthContextProvider>
  );
}
