import { Provider as PaperProvider } from "react-native-paper";
import Login from "./src/screens/Login";
import Terms from "./src/screens/Terms";
import StarshipFeed from "./src/screens/StarshipFeed";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NetworkProvider } from 'react-native-offline';

export default function App() {
  const queryClient = new QueryClient()

  return (
    <NetworkProvider>
      <QueryClientProvider client={queryClient}>
        <PaperProvider>
          {/* <Login /> */}
          {/* <Terms /> */}
          <StarshipFeed />
        </PaperProvider>
      </QueryClientProvider>
    </NetworkProvider >
  );
}