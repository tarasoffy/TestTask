import React from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';
import styles from './styles'

interface User {
  email: string;
  id: number;
  name: string;
  phone: string;
  photo: string;
  position: string;
  position_id: number;
  registration_timestamp: number;
}

interface UserCardProps {
  user: User;
}

function UserCard({ user }: UserCardProps): React.JSX.Element {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.wrapperImage}>
        <Image source={{ uri: user.photo }} style={styles.photoUser} />
      </View>
      <View style={styles.wrapperInfoUser}>
        <Text style={styles.nameUser}>{user.name}</Text>
        <Text style={styles.positionUser}>{user.position}</Text>
        <Text style={styles.emailUser} numberOfLines={1} ellipsizeMode='tail'>{user.email}</Text>
        <Text style={styles.phoneUser}>{user.phone}</Text>
      </View>
    </View>
  );
}

export default UserCard;
