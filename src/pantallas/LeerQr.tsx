import React from 'react';
import { StyleSheet, useColorScheme, View, Text, SafeAreaView } from 'react-native';

export function LeerQr() {
  const isDarkMode = useColorScheme() === 'dark';

  // Estilos dinámicos para soportar modo oscuro
  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#121212' : '#F8F9FA',
  };

  const textColor = isDarkMode ? '#FFFFFF' : '#212529';

  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <View style={styles.content}>
        <Text style={[styles.text, { color: textColor }]}>Leer con camara</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
  },
});