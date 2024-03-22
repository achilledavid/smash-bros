import React, { useEffect } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { Button, Text } from "react-native-paper";

import { ScreenContainer } from "~/components/ScreenContainer";
import CharacterCard, { Character } from "~/components/CharacterCard";
import { useCharacters } from "~/hooks/useCharacters";
import Routes from "~/navigation/Route";

export default function Characters({ navigation, route }: any) {
  const [characters, setCharaters] = React.useState<Character[]>([]);
  const { data, isError, isLoading } = useCharacters();

  useEffect(() => {
    if (data) setCharaters(data);
  }, [data]);

  const handleRandomCharacter = () => {
    const randomIndex = Math.floor(Math.random() * characters.length);
    const character = characters[randomIndex];
    const imageName = `${character.name.toLowerCase().replace("min min", "minmin").replaceAll(" ", "_").replaceAll(".", "").replaceAll("&", "and").replaceAll("é", "e").replaceAll("-", "_").replace("hero", "dq_hero")}`;
    const source = "https://www.smashbros.com/assets_v2/img/fighter/" + imageName + "/main.png";
    // console.log("Random character: ", source);
    navigation?.navigate(Routes.CHARACTER_DETAILS_SCREEN, {
      name: character.name,
      alsoAppearsIn: character.alsoAppearsIn,
      order: character.order,
      image: source
    });
  }

  return (
    <SafeAreaView>
      <ScreenContainer>
        {isLoading || characters.length <= 0 ? (
          <LoadingLayout />
        ) : isError ? (
          <ErrorLayout />
        ) : (
          <>
            <Button mode="contained" onPress={handleRandomCharacter}>Personnage aléatoire</Button>
            <FlatList
              data={characters}
              renderItem={({ item }) => <CharacterCard item={item} navigation={navigation} />}
              keyExtractor={(item) => item.name}
            />
          </>
        )}
      </ScreenContainer>
    </SafeAreaView>
  );
}

function ErrorLayout() {
  return (
    <Text
      variant="bodyMedium"
      style={{ fontWeight: "500" }}
    >
      Une erreur est survenue.
    </Text>
  );
}

function LoadingLayout() {
  return (
    <Text
      variant="bodyMedium"
      style={{ fontWeight: "500" }}
    >
      Chargement...
    </Text>
  );
}
