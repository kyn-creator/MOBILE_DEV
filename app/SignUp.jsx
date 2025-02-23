import { View, Text, StyleSheet, ImageBackground, TextInput, Pressable } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

import logo from '@/assets/images/logo.png';

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={logo} resizeMode='contain' style={styles.image}>
        <View style={styles.overlay}>
          <Text style={styles.title}>Register Now!</Text>
          
          {/* Input Fields Container */}
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Email address" keyboardType="email-address" />
            <TextInput style={styles.input} placeholder="Username" keyboardType="default" />
            <TextInput style={styles.input} placeholder="Password" secureTextEntry />
            <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry />
          </View>

          {/* Buttons Container */}
          <View style={styles.buttonContainer}>
            <Pressable style={styles.signInButton}>
              <Text style={styles.buttonText}>Sign in</Text>
            </Pressable>

            <Link href='/' asChild>
              <Pressable style={styles.signUpButton}>
                <Text style={styles.signUpText}>Go Back</Text>
              </Pressable>
            </Link>
          </View>

        </View>
      </ImageBackground>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87D3E8',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    width: '90%',
    padding: 30,
    borderRadius: 15,
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  
  // Input Fields Container
  inputContainer: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },

  // Buttons Container
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  signInButton: {
    height: 50,
    width: '90%',
    borderRadius: 8,
    backgroundColor: '#87D3E8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signUpButton: {
    height: 50,
    width: '90%',
    borderRadius: 8,
    backgroundColor: '#C6EBF5',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  signUpText: {
    fontSize: 16,
    color: '#555',
  },
});
