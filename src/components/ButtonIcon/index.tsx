import React from 'react';
import {
   View,
   Image,
   Text,
   TouchableOpacity,
   TouchableOpacityProps
} from 'react-native';

import { styles } from './style';
import discordImg from '../../assets/discord.png';

type Props = TouchableOpacityProps & {
   title: string
}

function ButtonIcon({ title, ...rest } : Props) {
   return (
      <TouchableOpacity 
         style={styles.container} 
         {...rest}
      >
         <View style={styles.iconWrapper}>
            <Image source={discordImg} style={styles.icon}/>
         </View>
         <Text style={styles.title}>
            {title}
         </Text>
      </TouchableOpacity>
   )
};

export { ButtonIcon };