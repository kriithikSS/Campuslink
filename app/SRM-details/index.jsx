import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import SRMinfo from '../../components/SRMdetails/SRMinfo';
import SRMsubinfo from '../../components/SRMdetails/SRMsubinfo';

export default function SRMdetails() {
  const SRM=useLocalSearchParams();
  const navigation=useNavigation();

  useEffect(()=>{
      navigation.setOptions({
        headerTransparent:true,
        headerTitle:''
      })
  },[])
  return (
    <View>
      {/* SRM Info*/}
          <SRMinfo SRM={SRM}/>
      {/* SRM subinfo*/}
        <SRMsubinfo SRM={SRM}/>

      {/*organizer details*/}

      {/*contact/join us button*/}
    </View>
  )
}