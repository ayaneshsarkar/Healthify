import { FC } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';
import { PlanItemImageProps } from '../../../interfaces/plans/plan';
import colors from '../../../config/colors';

interface PlanItemProps {
  name: string;
  Image: FC<PlanItemImageProps>;
}

const PlanItem: FC<PlanItemProps> = ({ name, Image }) => {
  return (
    <View style={styles.planViewItem}>
      <View style={styles.checkboxContainer}>
        <Checkbox color={colors.lightBlack} />
      </View>
      <View style={styles.imageContainer}>
        <Image width={35} height={35} />
      </View>
      <Text style={styles.planName}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  planViewItem: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 115,
    width: '45%',
    margin: 5,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: colors.white,
    borderRadius: 10,
    elevation: 3,
  },
  checkboxContainer: {
    alignSelf: 'flex-end'
  },
  imageContainer: {
    marginBottom: 10
  },
  image: {
    width: 10,
    height: 20,
    resizeMode: 'stretch',
  },
  planName: {
    fontWeight: '500',
    textTransform: 'uppercase',
    color: colors.lightBlack,
  },
});

export default PlanItem;
