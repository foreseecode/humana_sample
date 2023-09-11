import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ForeSee } from 'react-native-foresee-sdk';
import { ForeSeeButton } from './ForeSeeButton'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ForeSeeButton title="Reset state" onPress={() => { 
        ForeSee.resetState();
      }} />
      <ForeSeeButton title="Show Invite" onPress={() => { 
        ForeSee.showInvite("mobile_app-humana_pharmacy-en");
      }} />
      <ForeSeeButton title="Show Survey" onPress={() => { 
        ForeSee.showSurvey("mobile_app-humana_pharmacy-en");
      }} />
      <ForeSeeButton title="Check eligibility" onPress={() => { 
        ForeSee.checkEligibility();
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

