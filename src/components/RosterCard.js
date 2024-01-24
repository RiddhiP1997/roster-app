import React, { memo, useCallback, useRef, useState } from "react";
import { Alert, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import _ from "lodash";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";

const RosterCard = memo(({ item }) => {
    const navigation = useNavigation()
    const {
        Date: day,
        Departure,
        Destination,
        Time_Depart,
        Time_Arrive,
        DutyID,
        DutyCode
    } = item;


    if (DutyID == "OFD") {
        var departTime = moment(Time_Depart, "HH:mm");
        var arriveTime = moment(Time_Arrive, "HH:mm");
        var diff = moment.duration(moment(arriveTime).diff(moment(departTime)));
        var days = parseInt(diff.asDays()); 
        var hours = parseInt(diff.asHours()); 
        hours = hours - days * 24;  
        var minutes = parseInt(diff.asMinutes()); 
        minutes = minutes - (days * 24 * 60 + hours * 60); 
    }

    const onItemPress = useCallback(
        _.debounce(
            () => {
                navigation.push("EventDetails", { item })
            },
            500,
            { leading: true, trailing: false }
        ),
        []
    );


    return (
        <TouchableOpacity
            style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 8
            }}
            onPress={onItemPress}
        >
            <View style={{ flex: .7, flexDirection: "row" }}>
                <View style={{ flex:.3, justifyContent: "center",alignItems:"center" }}>
                    <Icon
                        color={"black"}
                        name={
                            DutyID === "FLT" ? "plane" :
                                DutyID === "SBY" ? "files-o" :
                                    DutyID === "DO" ? "stop-circle" :
                                        DutyID === "POS" ? "location-arrow" :
                                            "suitcase"}
                        size={30}
                        // style={{alignSelf:"center"}}
                    />
                </View>
                <View style={{flex:.8}} >
                    <Text style={styles.title}>
                        {
                            DutyID === "SBY" ? DutyCode :
                                DutyID === "DO" ? "Off" :
                                    DutyID == "OFD" ? "Layover" :
                                        Departure + " - " + Destination
                        }
                    </Text>
                    <Text>
                        {
                            DutyID === "SBY" ? `${DutyID} (${Destination})` :
                                DutyID === "OFD" ? `${Destination}` :
                                    DutyID === "POS" ? `${DutyID}` :
                                        DutyID === "DO" ? `${Destination}` :
                                            null
                        }
                    </Text>
                </View>
            </View>
            <View style={{ flex: .3, justifyContent: "space-between", alignItems: "flex-end",paddingRight:15 }}>

                <Text style={{ color: "grey", fontSize: 15 }}>
                    {
                        DutyID === "SBY" ? "Match Crew" : null
                    }
                </Text>

                <Text style={{ color: "red" }}>
                    {DutyID === "OFD" ?
                        hours+":"+minutes + " hours" :
                        DutyID === "SBY" ? moment(Time_Depart, "HH:mm:ss").format("HH:mm") + " - " + moment(Time_Arrive, "HH:mm:ss").format("HH:mm") :
                            `${Time_Depart} - ${Time_Arrive}`}
                </Text>
            </View>
        </TouchableOpacity>
    );
},
    (incomingPrevProps, incomingNextProps) => {
        const prevProps = { ...incomingPrevProps };
        const nextProps = { ...incomingNextProps };
        const isEqual = _.isEqual(prevProps, nextProps);
        return isEqual;
    }
);


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        paddingVertical: 5,
        color: "black"
    },
});

export default RosterCard;

