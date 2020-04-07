import React from "react";
import { useAuthState, useAuthDispatch } from "../AuthContext";
import { Layout, Text } from "@ui-kitten/components";

export default function SplashScreen() {
  const state = useAuthState();
  const dispatch = useAuthDispatch();

  console.log(state);

  // Loading > SignIn > DefaultAppScreen

    return (
        <Layout
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text>Loading Application...</Text>
        </Layout>
    );
}
