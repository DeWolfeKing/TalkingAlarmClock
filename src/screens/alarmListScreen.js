import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const alarmListScreen = () => {
    return (
        <View style={styles.alarmList}>
            <Text style={styles.text}>Its your Alarm List</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    alarmList: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    }
});

export default alarmListScreen;
