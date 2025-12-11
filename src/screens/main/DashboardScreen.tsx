import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

interface DashboardScreenProps {
  onNavigateToProducts: () => void;
  onLogout: () => void;
}

export default function DashboardScreen({ onNavigateToProducts, onLogout }: DashboardScreenProps) {
  return (
    <View style={styles.container}>
      <Header title="Dashboard" isLoggedIn={true} />
      <View style={styles.content}>
        <Text style={styles.heading}>Welcome to Dashboard</Text>
        <View style={styles.stats}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>25</Text>
            <Text style={styles.statLabel}>Total Products</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>150</Text>
            <Text style={styles.statLabel}>Total Orders</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={onNavigateToProducts}>
          <Text style={styles.buttonText}>View Products</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  statCard: {
    backgroundColor: '#f8f9fa',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
    flex: 0.45,
  },
  statNumber: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#007bff',
  },
  statLabel: {
    fontSize: 14,
    color: '#6c757d',
    marginTop: 5,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#dc3545',
    padding: 15,
    borderRadius: 8,
  },
  logoutText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});