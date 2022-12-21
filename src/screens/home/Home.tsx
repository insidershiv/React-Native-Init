import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import PaperChips from '../../components/PaperChips';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {Chip} from 'react-native-paper';

const Home = () => {
  return (
    <SafeAreaView>
      <View>
        <Chip icon={() => <IonIcon name="ios-basketball-outline" />}>
          Football
        </Chip>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
