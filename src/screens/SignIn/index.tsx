import React from 'react';
import { 
   View, 
   Image, 
   Text,
} from 'react-native';

import { styles } from './style';
import illustrationImg from '../../assets/illustration.png';

import { ButtonIcon } from '../../components/ButtonIcon';

function SignIn() {
   return (
      <View style={styles.container}>
         <Image 
            source={illustrationImg}
            style={styles.image}
            resizeMode='stretch'
         />
         <View style={styles.content}>
            <Text style={styles.title}>
               Conecte-se {`\n`}
               e organize suas {`\n`}
               jogatinas
            </Text>
            <Text style={styles.subtitle}>
               Crie grupos para jogar seus games {`\n`}
               favoritos com seus amigos
            </Text>
            <ButtonIcon 
               title='Entrar com Discord'
               activeOpacity={0.7}
            />
         </View>
      </View>
   )
}

export { SignIn }