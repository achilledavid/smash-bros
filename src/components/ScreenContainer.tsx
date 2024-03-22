import type { ReactNode } from "react";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useIsConnected } from "react-native-offline";
import { Text } from "react-native-paper";

import { Offline } from "~/components/Offline";

interface ScreenContainerProps {
  title?: string;
  children?: ReactNode;
  withSeparatorFooter?: boolean;
}

export const ScreenContainer = ({ title, children }: ScreenContainerProps) => {
  const isConnected = useIsConnected();

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flex: 1,
      gap: 32,
      marginTop: !isConnected || isConnected === null ? 69 : 0,
    }
  });

  return (
    <>
      <Offline />
      <ScrollView nestedScrollEnabled={true}>
        <View style={styles.container}>
          {title && <Text variant="headlineMedium" style={{ fontWeight: "bold" }}>{title}</Text>}
          {children}
        </View>
      </ScrollView>
    </>
  );
};
