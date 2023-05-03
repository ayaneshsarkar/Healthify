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
import PlanItem from './components/pageComponents/home/PlanItem';

// Plan Images
import LifeCoach from './components/Svg/Plans/LifeCoach';
import DietPlan from './components/Svg/Plans/DietPlan';
import WeightLoss from './components/Svg/Plans/WeightLoss';
import WeightGain from './components/Svg/Plans/WeightGain';
import CountCalories from './components/Svg/Plans/CountCalories';
import MuscleGain from './components/Svg/Plans/MuscleGain';
import HomeWorkout from './components/Svg/Plans/HomeWorkout';
import CGM from './components/Svg/Plans/CGM';

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
        <View style={styles.planView}>
          <PlanItem name='Coach Guidance' Image={LifeCoach} />
          <PlanItem name='Diet Plan' Image={DietPlan} />
          <PlanItem name='Weight Loss' Image={WeightLoss} />
          <PlanItem name='Weight Gain' Image={WeightGain} />
          <PlanItem name='Count Calories' Image={CountCalories} />
          <PlanItem name='Muscle Gain' Image={MuscleGain} />
          <PlanItem name='Home Workout' Image={HomeWorkout} />
          <PlanItem name='CGM' Image={CGM} />
        </View>
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
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    paddingBottom: 30
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
