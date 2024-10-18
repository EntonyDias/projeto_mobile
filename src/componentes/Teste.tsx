import React from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';

const App = () => {
    const scaleValue = new Animated.Value(1);

    const startPulse = () => {
        scaleValue.setValue(1);
        Animated.timing(scaleValue, {
            toValue: 1.8,
            duration: 1800,
            easing: Easing.ease,
            useNativeDriver: true,
        }).start(() => enderPulse()); // reinicia a animação
    };

    const enderPulse = () => {
        scaleValue.setValue(1.8);
        Animated.timing(scaleValue, {
            toValue: 1.0,
            duration: 1800,
            easing: Easing.ease,
            useNativeDriver: true,
        }).start(() => startPulse()); // reinicia a animação
    };

    React.useEffect(() => {
        startPulse();
    }, []);

    return (
        <View style={styles.container}>
            <Animated.Text style={[styles.pulseText, { transform: [{ scale: scaleValue }] }]}>
                Texto Pulsant
            </Animated.Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'CC66CC',
    },
    pulseText: {
        fontSize: 24,
        color: '#4CAF50',
    },
});

export default App;
