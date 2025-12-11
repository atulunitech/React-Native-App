import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface HeaderProps {
  title: string;
  isLoggedIn?: boolean;
  showBackButton?: boolean;
  onBackPress?: () => void;
}

export default function Header({ title, isLoggedIn = false, showBackButton = false, onBackPress }: HeaderProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.leftSection}>
          {showBackButton && (
            <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
              <Text style={styles.backText}>← Back</Text>
            </TouchableOpacity>
          )}
          <Text style={styles.title}>{title}</Text>
        </View>
        {isLoggedIn && <Text style={styles.user}>User</Text>}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#007bff',
  },
  header: {
    height: 60,
    backgroundColor: '#007bff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 15,
  },
  backText: {
    color: '#fff',
    fontSize: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  user: {
    fontSize: 16,
    color: '#fff',
  },
});