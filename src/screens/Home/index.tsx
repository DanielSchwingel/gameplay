import React from 'react';
import { View } from 'react-native';

import { styles } from './style';

import { Profile } from '../../components/Profile';

function Home(){
   return (
      <View style={styles.container}>
         <View style={styles.header}>
            <Profile />
         </View>
         
      </View>
   )
}

export { Home }