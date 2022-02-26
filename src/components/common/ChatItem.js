import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {CustomText} from './';

const ChatItem = props => {
  const {id, userName, userImg, messageTime, messageText, navigation} = props;
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Personal Message')}
        style={styles.container}>
        <Image source={{uri: userImg}} style={styles.avatar} />
        <View style={styles.midContainer}>
          <Text style={styles.username}>{userName}</Text>
          <Text style={styles.lastMessage} numberOfLines={1}>
            {messageText}
          </Text>
        </View>

        <Text style={styles.time}>{messageTime}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 10,
    marginHorizontal: 30,
  },
  midContainer: {justifyContent: 'center',},
  avatar: {
    height: 60,
    width: 60,
    marginRight: 15,
    borderRadius: 50,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  lastMessage: {
    fontSize: 16,
    color: 'grey',
  },
  time: {
    fontSize: 14,
    color: 'grey',
    // marginRight:100
  },
});

export default ChatItem;
