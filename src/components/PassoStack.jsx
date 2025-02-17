import React from "react";
import { Button, View } from "react-native";

export default props => (
    <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "row", justifyContent: 'space-around' }}>
            {props.voltar
                ?
                <View style={{ flex: 1 }}>
                    <Button
                        title="Voltar"
                        onPress={() => {
                            props.navigation.goBack()
                        }}
                    />
                </View>
                : false
            }
            {props.avancar
                ?
                <View style={{flex: 1}}>
                    <Button
                        title="Avançar"
                        onPress={() => {
                            props.navigation.push(
                                props.avancar,
                                {
                                    numero: parseInt(Math.random() * 100)
                                }
                            )
                        }}
                    />
                </View>
                : false}
        </View>
        <View style={{ flex: 1 }}>
            {props.children}
        </View>
    </View>
)