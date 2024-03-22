import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import Routes from "~/navigation/Route";

export type Character = {
  alsoAppearsIn: string[];
  availability: string;
  name: string;
  order: string;
};

interface CharacterCardProps {
  item: Character;
  navigation: any;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ item, navigation }) => {
  const imageName = `${item.name.toLowerCase().replace("min min", "minmin").replaceAll(" ", "_").replaceAll(".", "").replaceAll("&", "and").replaceAll("é", "e").replaceAll("-", "_").replace("hero", "dq_hero")}`;
  const source = "https://www.smashbros.com/assets_v2/img/fighter/" + imageName + "/main.png";

  const handleOnPress = () => {
    navigation?.navigate(Routes.CHARACTER_DETAILS_SCREEN, {
      name: item.name,
      alsoAppearsIn: item.alsoAppearsIn,
      order: item.order,
      image: source,
    });
  };

  return (
    <TouchableOpacity onPress={handleOnPress} style={styles.container}>
      <Card>
        <Card.Cover resizeMode="contain" source={{ uri: source }} />
        <Card.Title title={item.name} subtitle={item.availability} />
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 8,
  }
});

export default CharacterCard;
