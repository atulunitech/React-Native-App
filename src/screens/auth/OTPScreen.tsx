import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

interface OTPScreenProps {
  onOTPVerified: () => void;
  onBackToLogin: () => void;
  email: string;
}

export default function OTPScreen({ onOTPVerified, onBackToLogin, email }: OTPScreenProps) {
  const [otp, setOtp] = useState('');
  const DEFAULT_OTP = '123456';

  const handleOTPChange = (text: string) => {
    // Only allow numeric characters
    const numericText = text.replace(/[^0-9]/g, '');
    setOtp(numericText);
  };

  const handleVerifyOTP = () => {
    if (otp === DEFAULT_OTP) {
      onOTPVerified();
    } else {
      Alert.alert('Invalid OTP', 'Please enter the correct OTP: 123456');
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Header title="Verify OTP" showBackButton={true} onBackPress={onBackToLogin} />
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.content}>
          <Text style={styles.heading}>Enter OTP</Text>
          <Text style={styles.subtitle}>
            We've sent a 6-digit code to {email}
          </Text>
          <Text style={styles.hint}>
            Default OTP: 123456
          </Text>
          <TextInput
            style={styles.otpInput}
            placeholder="Enter 6-digit OTP"
            value={otp}
            onChangeText={handleOTPChange}
            keyboardType="numeric"
            maxLength={6}
            textAlign="center"
            contextMenuHidden={true}
            selectTextOnFocus={false}
          />
          <TouchableOpacity 
            style={[styles.button, otp.length === 6 ? styles.buttonActive : styles.buttonDisabled]} 
            onPress={handleVerifyOTP}
            disabled={otp.length !== 6}
          >
            <Text style={styles.buttonText}>Verify OTP</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onBackToLogin}>
            <Text style={styles.link}>Back to Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Footer />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    minHeight: 400,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#6c757d',
    marginBottom: 10,
  },
  hint: {
    fontSize: 14,
    textAlign: 'center',
    color: '#28a745',
    marginBottom: 30,
    fontWeight: '500',
  },
  otpInput: {
    borderWidth: 2,
    borderColor: '#007bff',
    padding: 20,
    marginBottom: 20,
    borderRadius: 8,
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 8,
  },
  button: {
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonActive: {
    backgroundColor: '#007bff',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    textAlign: 'center',
    color: '#007bff',
    marginTop: 20,
    fontSize: 16,
  },
});