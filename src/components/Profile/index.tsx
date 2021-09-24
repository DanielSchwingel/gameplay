import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './style';

import { Avatar } from '../Avatar';

function Profile(){
   return (
      <View style={styles.container}>
         <Avatar urlImage='https://github.com/DanielSchwingel.png'/>
         <View>
            <View style={styles.user}>
               <Text style={styles.greeting}>
                  Olá, 
               </Text>
               <Text style={styles.username}>
                  Daniel
               </Text>
            </View>
            <Text style={styles.message}>
               Hoje é dia de vitória
            </Text>
         </View>
      </View>
   )
}

export { Profile }