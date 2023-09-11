import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ForeSee } from 'react-native-foresee-sdk';
import { ForeSeeButton } from './ForeSeeButton'

const config = {
  "clientId": "1UXQ2fkwg+vzmsvNmZ4Dog==",
  "repeatDaysAfterDecline": 3,
  "repeatDaysAfterComplete": 3,
  "repeatDaysAfterAccept": 3,
  "notificationType": "CONTACT",
  "measures": [
    {
      "surveyId": "mobile_app-humana_pharmacy-en",
      "launchCount": 0,
      "surveyStyle": "modern"
    },
  ],
  "invite": {
    "logo": "verint_logo",
    "header": "verint",
    "baseColor": [43, 101, 242]
  },
  "survey": {
    "closeButtonColor": [255, 255, 255],
    "closeButtonBackgroundColor": [12, 12, 12],
    "headerColor": [43, 101, 242]
  }
}

export default function App() {
  ForeSee.setDebugLogEnabled(true);
  ForeSee.setSkipPoolingCheck(true);
  ForeSee.start(config);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app (for real)!</Text>
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

