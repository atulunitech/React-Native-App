import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import LoginScreen from './src/screens/auth/LoginScreen';
import RegisterScreen from './src/screens/auth/RegisterScreen';
import OTPScreen from './src/screens/auth/OTPScreen';
import DashboardScreen from './src/screens/main/DashboardScreen';
import ProductListScreen from './src/screens/main/ProductListScreen';

type Screen = 'login' | 'register' | 'otp' | 'dashboard' | 'products';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const handleLogin = (email: string) => {
    setUserEmail(email);
    setCurrentScreen('otp');
  };

  const handleRegister = (email: string) => {
    setUserEmail(email);
    setCurrentScreen('otp');
  };

  const handleOTPVerified = () => {
    setIsLoggedIn(true);
    setCurrentScreen('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentScreen('login');
  };

  const renderScreen = () => {
    if (!isLoggedIn) {
      switch (currentScreen) {
        case 'login':
          return (
            <LoginScreen
              onLogin={handleLogin}
              onNavigateToRegister={() => setCurrentScreen('register')}
            />
          );
        case 'register':
          return (
            <RegisterScreen
              onRegister={handleRegister}
              onNavigateToLogin={() => setCurrentScreen('login')}
            />
          );
        case 'otp':
          return (
            <OTPScreen
              onOTPVerified={handleOTPVerified}
              onBackToLogin={() => setCurrentScreen('login')}
              email={userEmail}
            />
          );
        default:
          return (
            <LoginScreen
              onLogin={handleLogin}
              onNavigateToRegister={() => setCurrentScreen('register')}
            />
          );
      }
    } else {
      switch (currentScreen) {
        case 'dashboard':
          return (
            <DashboardScreen
              onNavigateToProducts={() => setCurrentScreen('products')}
              onLogout={handleLogout}
            />
          );
        case 'products':
          return (
            <ProductListScreen
              onNavigateToDashboard={() => setCurrentScreen('dashboard')}
              onLogout={handleLogout}
            />
          );
        default:
          return (
            <DashboardScreen
              onNavigateToProducts={() => setCurrentScreen('products')}
              onLogout={handleLogout}
            />
          );
      }
    }
  };

  return <View style={styles.container}>{renderScreen()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});