import React, { useEffect } from "react";
import { DataTable } from "react-native-paper";
import { Image } from "react-native";
import { Switch } from 'react-native-paper';


type Props = {
    route: any;
    navigation: any;
};

const CharacterDetails = ({ route, navigation }: Props) => {
    const { name, alsoAppearsIn, order, image, isChecked } = route.params;
    const [isSwitchOn, setIsSwitchOn] = React.useState(isChecked);
    useEffect(() => {
        navigation.setOptions({ title: name });
    }, []);
    return (
        <>
            <DataTable>
                <DataTable.Row>
                    <DataTable.Cell>Personnage numéro</DataTable.Cell>
                    <DataTable.Cell>{order}</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>Apparaît dans</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    {alsoAppearsIn.map((item: string) => (
                        <DataTable.Cell key={item}>{item}</DataTable.Cell>
                    ))}
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>Image</DataTable.Cell>
                </DataTable.Row>
            </DataTable>
            <Image
                source={{ uri: image }}
                style={{ width: 200, height: 200, objectFit: "contain" }}
            />
            <DataTable>
                <DataTable.Row>
                    <DataTable.Cell>Favoris</DataTable.Cell>
                    <DataTable.Cell>
                        <Switch value={isSwitchOn} onValueChange={() => setIsSwitchOn((old) => !old)} style={{ marginLeft: "auto" }} />
                    </DataTable.Cell>
                </DataTable.Row>
            </DataTable>
        </>
    );
};

export default CharacterDetails;
