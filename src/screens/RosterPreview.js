import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  RefreshControl,
  ActivityIndicator,
  SectionList,
} from 'react-native';
import {GetRosterData} from '../utils/apis';
import _ from 'lodash';
import moment from 'moment';
import RosterCard from '../components/RosterCard';
import {getWeekday} from '../utils/helper';
import DUMMY_ROSTER_DATA from '../utils/roster';

export default function RosterPreview() {
  const [rosterData, setRosterData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [isOffline, setOfflineStatus] = useState(false);

  useEffect(() => {
    getRosterData();
  }, []);

  function getRosterData() {
    setRefreshing(true);
    axios
      .get(GetRosterData)
      .then(response => {
        const {data} = response;
        const formattedData = _.groupBy(
          _.isArray(data) || DUMMY_ROSTER_DATA,
          'Date',
        );
        const mapped = Object.entries(formattedData).map(([key, value]) => ({
          title: key,
          data: value,
        }));
        setRosterData(mapped);
        setRefreshing(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={rosterData}
        keyExtractor={(item, index) => item + index}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 1,
              width: '100%',
              backgroundColor: 'lightgrey',
            }}
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={getRosterData} />
        }
        renderItem={({item}) => <RosterCard item={item} />}
        renderSectionHeader={({section}) => {
          var weekday = moment(section.title, 'DD/MM/YYYY').day();
          return (
            <View style={{backgroundColor: 'lightgrey', padding: 8}}>
              <Text style={{fontSize: 14, fontWeight: 'bold', color: 'black'}}>
                {getWeekday(moment().day(weekday).format('dddd'))}{' '}
                {moment(section.title, 'DD/MM/YYYY').format('Do MMM. YYYY')}
              </Text>
            </View>
          );
        }}
      />
      <ActivityIndicator
        animating={refreshing}
        size="small"
        style={styles.activityIndicator}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // height: 80,
  },
});
