import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function Footer() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.footer}>
        <Text style={styles.text}>© 2024 My App</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#f8f9fa',
  },
  footer: {
    height: 50,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#dee2e6',
  },
  text: {
    fontSize: 14,
    color: '#6c757d',
  },
});