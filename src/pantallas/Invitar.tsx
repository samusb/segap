import React, { useRef } from 'react';
import { View, Text, StyleSheet, Button, Alert, useColorScheme, SafeAreaView } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import ViewShot from 'react-native-view-shot';
import Share from 'react-native-share';

export function Invitar() {
  const isDarkMode = useColorScheme() === 'dark';

  // Estilos dinámicos según el tema
  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#121212' : '#F8F9FA',
  };

  const textColor = isDarkMode ? '#FFFFFF' : '#212529';

  const viewShotRef = useRef<any>(null);

  // Datos quemados para simular el residente logueado en el MVP
  const dataResidente = {
    url: "www.truetech.hn",
    tipo: "residente",
    casa: "14",
    bloque: "B",
    fechaUltimoPago: "2026-05-01",
    estado: "activo"
  };

  const compartirPorWhatsApp = async () => {
    try {
      // Captura el contenedor del QR como imagen
      const uri = await viewShotRef.current.capture();
      
      const shareOptions = {
        title: 'Compartir Código QR',
        url: uri,
        social: Share.Social.WHATSAPP,
        message: 'Hola, este es tu acceso QR para ingresar a la colonia.',
      };
      
      await Share.shareSingle(shareOptions);
    } catch (error) {
      Alert.alert("Error", "No se pudo compartir en WhatsApp de forma automática.");
    }
  };

  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: textColor }]}>Nueva Invitación</Text>
      </View>
      
      <View style={styles.content}>
        <View style={styles.card}>
          <Text style={[styles.cardTitle, { color: textColor }]}>Detalles del Invitado</Text>
          <Text style={[styles.placeholderText, { color: isDarkMode ? '#adb5bd' : '#6c757d' }]}>
            En esta pantalla podrás configurar los datos de tu invitado (nombre, fecha de visita, etc.) para generar el código QR de acceso.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingVertical: 20,
    paddingHorizontal: 25,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(128, 128, 128, 0.3)',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  card: {
    padding: 20,
    borderRadius: 12,
    backgroundColor: 'rgba(128, 128, 128, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(128, 128, 128, 0.1)',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  placeholderText: {
    fontSize: 15,
    lineHeight: 22,
  },
});