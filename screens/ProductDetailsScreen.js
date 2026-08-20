import { StyleSheet, Text, View } from 'react-native';

export default function ProductDetailsScreen({ route }) {
    const { product } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{product.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    text: { fontSize: 18, fontWeight: '600', color: '#1F1F1F' },
});