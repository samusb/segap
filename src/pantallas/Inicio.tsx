import React from 'react';
import { StyleSheet, useColorScheme, View, Text, TouchableOpacity } from 'react-native';

export function Inicio({ navigation }: any) {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#121212' : '#F5F5F5',
  };

  return (
    <View style={[styles.container, backgroundStyle]}>
      <View style={styles.centerContent}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => {
            console.log('Presionado: Invitar');
            console.log('Navigation object:', !!navigation);
            navigation.navigate('Invitar');
          }}>
          <Text style={styles.buttonText}>Invitar mediante QR</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => {
            console.log('Presionado: LeerQr');
            navigation.navigate('LeerQr');
          }}>
          <Text style={styles.buttonText}>leer QR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  button: {
    backgroundColor: '#007AFF',
    width: '100%',
    paddingVertical: 16,
    borderRadius: 12,
    marginVertical: 10,
    alignItems: 'center',
    // Sombras para Android e iOS
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});