import React from 'react';
import { AppRegistry, View, StyleSheet } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import HeaderTitleExample from './src/components/header';
import ButtonRoundedExample from './src/components/button';
import FooterTabsIconExample from './src/components/footer';

const App = () => {

  const { container, footer } = styles;

  return(
    <Container style={styles.container}>
      <HeaderTitleExample />
      <ButtonRoundedExample />
      <FooterTabsIconExample style={styles.footer}/>
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    // position: 'relative',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  header: {
    flex: 1,
    alignSelf: 'stretch',
  },
  footer: {
    flex: 1,
    alignSelf: 'flex-end',
  }
});

AppRegistry.registerComponent('AwesomeNativeBase', () => App);
