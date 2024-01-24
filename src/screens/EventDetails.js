import axios from 'axios';
import React from 'react';
import {SafeAreaView, View, StyleSheet, Text, ScrollView} from 'react-native';

export default EventDetails = props => {
  const {item: propData} = props?.route?.params;
  const {
    Flightnr,
    Date,
    ['Aircraft Type']: Aircraft_Type,
    Tail,
    Departure,
    Destination,
    Time_Depart,
    Time_Arrive,
    DutyID,
    DutyCode,
    Captain,
    ['First Officer']: First_Officer,
    ['Flight Attendant']: Flight_Attendant,
  } = propData;

  const CardView = ({title, value, index}) => {
    return (
      <View
        style={[
          styles.cardContainer,
          {backgroundColor: index % 2 == 0 ? 'white' : 'lightgrey'},
        ]}>
        <Text style={styles.title}>{title}</Text>
        <Text style={[styles.title, {fontWeight: 'bold'}]}>{value || '-'}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <CardView index={1} title={'Flight No'} value={Flightnr} />
        <CardView index={2} title={'Date'} value={Date} />
        <CardView index={3} title={'Aircraft Type'} value={Aircraft_Type} />
        <CardView index={4} title={'Tail'} value={Tail} />
        <CardView index={5} title={'Departure'} value={Departure} />
        <CardView index={6} title={'Destination'} value={Destination} />
        <CardView index={7} title={'Departure Time'} value={Time_Depart} />
        <CardView index={8} title={'Arrival Time'} value={Time_Arrive} />
        <CardView index={9} title={'Duty ID'} value={DutyID} />
        <CardView index={10} title={'Duty Code'} value={DutyCode} />
        <CardView index={11} title={'Captain'} value={Captain} />
        <CardView index={12} title={'First Officer'} value={First_Officer} />
        <CardView
          index={13}
          title={'Flight Attendant'}
          value={Flight_Attendant}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: 'black',
  },
});
