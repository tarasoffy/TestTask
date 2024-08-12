import React, { useCallback, useEffect, useState } from 'react';
import styles from './styles';
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import UserCard from '../../../components/UserCard';
import NoUser from '../../../assets/images/app/no-user.png';
import NoWifi from '../../../assets/images/app/wifi-image.png'
import { addEventListener } from "@react-native-community/netinfo";
import ModalInfo from '../../../components/ModalInfo';
import { tintColor, yellowColor } from '../../../constants/colors';
import { isAndroid } from '../../../constants/common';


const url = 'https://frontend-test-assignment-api.abz.agency/api/v1/users';

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

function Users(): React.JSX.Element {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [isWifiModalVisible, setIsWifiModalVisible] = useState<boolean | null | string>(false);

  useEffect(() => {
    const unsubscribe = addEventListener(state => {
      if(!state.isConnected) setIsWifiModalVisible(true)
    });
    return () => unsubscribe();
  },[])

  const sortedUsersByCreated = (users:User[]): User[] => {
    return users.sort((a, b) => b.registration_timestamp - a.registration_timestamp);
  }

  const getUsers = async (pageNumber: number) => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const response = await fetch(`${url}?page=${pageNumber}&count=6`);
      const data = await response.json();
      if (data.users.length > 0) {
        const allUsers: User[] = [...users, ...data.users]
        const resultSorted =  sortedUsersByCreated(allUsers)
        setUsers(resultSorted)
        setPage(prevPage => prevPage + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error('error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(useCallback(() => {
    getUsers(page);
  },[]))

  const handleLoadMore = () => {
    if (!loading && hasMore) {
      getUsers(page);
    }
  };
  
  const renderFooter = () => {    
    if (!loading) return null;
    if(isAndroid) {
      <ActivityIndicator color={tintColor} size='large'/>;
    } else return <ActivityIndicator/>;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        {users.length > 0 ? (
          <FlatList
            data={users}
            renderItem={({ item }) => <UserCard user={item} />}
            keyExtractor={item => item.id.toString()}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0}
            ListFooterComponent={renderFooter}
          />
        ) : (
          <View>
            <Image source={NoUser} style={styles.noUserImage} />
            <Text style={styles.noUserText}>There are no users yet</Text>
          </View>
        )}
      </View>
      <ModalInfo 
        isVisible={isWifiModalVisible} 
        setModalVisible={setIsWifiModalVisible} 
        textInfo='There is no internet connection'
        textButton='Try again'
        colorButton={yellowColor}
        image={NoWifi}
      />
    </SafeAreaView>
  );
}

export default Users;
