import { View, Text, Image } from 'react-native';
import React from 'react';

export default function SRMsubinfo({ SRM }) {  
  return (
    <View style={{ padding: 20 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image 
          source={require('./../../../campuslink/assets/images/instagram-icon.png')}
          style={{ width: 40, height: 40 }}
        />
        <View style={{ marginLeft: 10 }}>
          {/* All text should be wrapped in Text components */}
          <Text>Insta</Text>
          <Text>{SRM?.category || 'No Category'}</Text>  
        </View>
      </View>
    </View>
  );
}
