import React, {useContext, useState, useEffect} from 'react';
import {
  Text,
  TextInput,
  ScrollView,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import {AuthContext} from '../routes/AuthProvider';
import {CustomText, FormInput, PostComponent} from './common';

const PostDetails = ({route}) => {
  const {user} = useContext(AuthContext);
  const [imageHeight, setImageHeight] = useState();
  const [imageWidth, setImageWidth] = useState();
  const getImageSize = url => {
    Image.getSize(
      url,
      (width, height) => {
        setImageHeight(height);
        setImageWidth(width);
        // console.log(height, width);
      },
      error => {
        console.log(error);
      },
    );
  };
  const aspect = (height, width) => {
    if (height === width) {
      return 3 / 3;
    } else if (height > width) {
      return 3 / 4;
    } else if (width > height) {
      return 3 / 2;
    }
  };
  useEffect(() => {
    {
      route.params.download_url
        ? getImageSize(route.params.download_url)
        : null;
    }
  }, []);

  return (
    <>
      <ScrollView
        contentContainerStyle={{
          justifyContent: 'center',
          backgroundColor: 'white',
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between',padding: 10}}>
          <CustomText
            text={route.params.username}
            textWeight={400}
            textSize={16}
          />
          <CustomText
            text={route.params.post_time.toDate().toLocaleDateString() + ' ' + route.params.post_time.toDate().toLocaleTimeString()}
            textWeight={400}
            textSize={13}
          />
        </View>
        <CustomText
            text={route.params.post_title}
            textWeight={500}
            textSize={20}
          />
        {route.params.download_url ? (
          <Image
            style={{
              resizeMode: 'contain',
              height: undefined,
              width: '100%',
              aspectRatio: aspect(imageHeight, imageWidth),
              backgroundColor: 'black',
            }}
            source={{uri: route.params.download_url}}
          />
        ) : null}

        <CustomText text={route.params.post_content} textSize={20} textWeight={500} />
        {/* <Text>{route.params.post_content}</Text> */}
        {/* <Text>Post made by {route.params.username}</Text>
        <Text>
          Post made on {route.params.post_time.toDate().toDateString()}
        </Text>
        <Text>
          Post made on {route.params.post_time.toDate().toLocaleDateString()}
        </Text>
        <Text>
          Post made at {route.params.post_time.toDate().toTimeString()}
        </Text>
        <Text>
          Post made at {route.params.post_time.toDate().toLocaleTimeString()}
        </Text> */}
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TextInput style={{borderColor: 'black', borderWidth: 1, flex: 4}} />
        <TouchableOpacity onPress={console.log('h')}>
          <CustomText
            text="post"
            textWeight={500}
            textSize={20}
            style={{flex: 1, marginLeft: 20}}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default PostDetails;
