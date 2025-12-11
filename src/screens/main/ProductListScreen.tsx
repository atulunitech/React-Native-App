import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

interface ProductListScreenProps {
  onNavigateToDashboard: () => void;
  onLogout: () => void;
}

const products = [
  { id: '1', name: 'iPhone 15', price: '$999' },
  { id: '2', name: 'Samsung Galaxy S24', price: '$899' },
  { id: '3', name: 'MacBook Pro', price: '$1999' },
  { id: '4', name: 'iPad Air', price: '$599' },
  { id: '5', name: 'AirPods Pro', price: '$249' },
];

export default function ProductListScreen({ onNavigateToDashboard, onLogout }: ProductListScreenProps) {
  const renderProduct = ({ item }: { item: typeof products[0] }) => (
    <View style={styles.productCard}>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header title="Products" isLoggedIn={true} showBackButton={true} onBackPress={onNavigateToDashboard} />
      <View style={styles.content}>
        <Text style={styles.heading}>Product List</Text>
        <FlatList
          data={products}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id}
          style={styles.list}
        />
        <TouchableOpacity style={styles.button} onPress={onNavigateToDashboard}>
          <Text style={styles.buttonText}>Back to Dashboard</Text>
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
    marginBottom: 20,
  },
  list: {
    flex: 1,
    marginBottom: 20,
  },
  productCard: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productName: {
    fontSize: 16,
    fontWeight: '500',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#28a745',
  },
  button: {
    backgroundColor: '#6c757d',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
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