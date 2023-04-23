import { FC } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import { StatusBar } from 'expo-status-bar'
import Constants from 'expo-constants';
import colors from './config/colors';
import HealthifyLogoFull from './components/Svg/HealthifyLogoFull';

const App: FC = () => {
  return (
    <SafeAreaView style={[styles.screen, styles.container]}>
      <StatusBar style="light" />
      <TouchableWithoutFeedback onPress={() => console.log('pressed on Already an User?')}>
        <View style={styles.promptView}>
          <Text style={styles.smallText}>Already an User?</Text>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.logo}>
        <HealthifyLogoFull width={200} height={50} />
      </View>
      <View style={styles.secondaryView}>
        <Text style={styles.secondaryText}>
          What brings you to HealthifyMe?
        </Text>
      </View>
      <ScrollView>
        <View style={styles.planView}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.black,
  },
  planView: {
    width: '100%',
    backgroundColor: colors.white,
    minHeight: 500,
  },
  promptView: {
    alignItems: 'flex-end',
    padding: 20,
  },
  secondaryView: {
    alignItems: 'center',
    width: '100%',
    marginBottom: 35,
  },
  secondaryText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  smallText: {
    color: colors.white,
    fontSize: 16,
  },
  logo: {
    alignItems: 'center',
    width: '100%',
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 25,
  },
});
