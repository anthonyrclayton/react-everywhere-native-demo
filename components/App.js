import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Session from './Session'

import styles from './styles/AppStyles'

const session = {
    "Id": 5366,
    "SessionTime": "0001-01-01T00:00:00",
    "SessionStartTime": "2017-01-10T08:00:00",
    "SessionEndTime": "2017-01-10T12:00:00",
    "Room": null,
    "Rooms": [
      "Aloeswood",
      "Leopardwood"
    ],
    "Title": "Hacking & Hardening Java Web Applications Workshop",
    "Abstract": "It seems like everyday there is a new headline about a security breach in a major company’s web application. These breaches cause companies to lose their credibility, cost them large sums of money, and those accountable undoubtedly lose their jobs. Security requires you to be proactive. Keep your employer out of the headlines by learning some key security best practices.\r\n\r\nThis hands-on workshop is designed to teach you how to identify and fix vulnerabilities in Java web applications. Using an existing web application, you will learn ways to scan and test for common vulnerabilities such as hijacking, injection, cross-site scripting, cross-site forgery and more. You will learn best practices around logging, error handling, intrusion detection, authentication and authorization. You will also learn how to improve security in your applications using existing libraries, frameworks and techniques to patch and prevent vulnerabilities.",
    "SessionType": "Pre-Compiler",
    "Tags": [
      "Security",
      "Java"
    ],
    "Category": "Security",
    "Speakers": [
      {
        "Id": "23377367-10d6-499e-ab99-9ee4edc32beb",
        "FirstName": "Christopher",
        "LastName": "Judd",
        "GravatarUrl": "//www.gravatar.com/avatar/46237da22a99f4aab52e802ea2c0728e"
      }
    ]
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>

        <Session {...session} />
      </View>
    );
  }
}
