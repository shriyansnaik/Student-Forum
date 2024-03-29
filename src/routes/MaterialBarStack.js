import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HelpDesk from '../components/HelpDesk';
import React,{useContext} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import PostScreen from '../components/PostScreen';
import {CustomText} from '../components/common';
import {connect} from 'react-redux';
import {filterModalVisibleSet} from '../actions';
import {AuthContext} from '../routes/AuthProvider';
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';

const MaterialTab = createMaterialTopTabNavigator();

const MaterialBarStack = props => {
  const {avatar, navigation, filterModalVisibleSet, username} = props;
  const {user} = useContext(AuthContext);
  return (
    <>
      <View style={{backgroundColor: '#ffffff'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
            alignItems: 'center',
            // backgroundColor: '#ffffff',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <Image
              style={{width: 25, height: 25}}
              source={require('../assets/icons/setting.png')}
            />
          </TouchableOpacity>
          <CustomText
            text="Community"
            textSize={18}
            textWeight={700}
            textColor={'black'}
          />
          {/* <Image
            style={{width: 100, height: 35}}
            source={require('../assets/images/splash.png')}
          /> */}
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Dashboard', {userId: user.uid, username: username, avatar: avatar})
            }>
            <Image
              style={{
                height: 35,
                width: 35,
                // marginRight: 15,
                // borderRadius: 150 / 2,
                // borderWidth: 0.5,
                // backgroundColor: '#E4EFF0',
                // borderColor: 'black',
              }}
              source={{uri: avatar}}
            />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', backgroundColor: '#ffffff'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Create Screen')}
            style={{
              flexDirection: 'row',
              width: '60%',
              padding: 10,
              alignItems: 'center',
              backgroundColor: '#E4EFF0',
              borderRadius: 20,
              paddingLeft: 20,
              marginLeft: 15,
              marginBottom: 5,
            }}>
            <Image
              style={{width: 17, height: 17, marginRight: 10}}
              source={require('../assets/icons/edit.png')}
            />
            <CustomText
              text={'share something ...'}
              textSize={16}
              textWeight={400}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => filterModalVisibleSet(true)}
            style={{
              flexDirection: 'row',
              width: '10%',
              padding: 10,
              alignItems: 'center',
              backgroundColor: '#E4EFF0',
              borderRadius: 10,
              marginLeft: 15,
              marginBottom: 5,
            }}>
            <Image
              style={{width: 17, height: 17}}
              source={require('../assets/icons/filter.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              width: '10%',
              padding: 10,
              alignItems: 'center',
              backgroundColor: '#E4EFF0',
              borderRadius: 10,

              marginLeft: 15,
              marginBottom: 5,
            }}>
            <Image
              style={{width: 17, height: 17}}
              source={require('../assets/icons/edit.png')}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderWidth: 0.2,
            color: '#F0F0F0',
            marginTop: 10,
          }}></View>
      </View>
      <MaterialTab.Navigator
        // options={{
        //   tabBarVisible: false
        // }}
        // tabBarPosition='bottom'
        screenOptions={{
          tabBarLabelStyle: {fontSize: 14, fontWeight: '700'},
          // tabBarItemStyle: {width: 100},
          // tabBarContentContainerStyle: {paddingHorizontal: '25%'},
          // tabBarIndicatorContainerStyle: {marginHorizontal: '30%',width: 100},
          tabBarStyle: {backgroundColor: '#eaecef'},
          // tabBarIndicatorStyle: {backgroundColor: 'red'}

          // tabBarLabelStyle: {
          //   fontSize: 14,
          //   fontWeight: 'bold',
          // },
          // tabBarActiveTintColor: 'yellow',
          // tabBarInactiveTintColor: 'red',
          // tabBarPressOpacity: 1,
          // tabBarIndicatorStyle: {
          //   backgroundColor: 'black',
          //   height: 30,
          //   borderRadius: 30,
          //   top: 9,
          // },
          // tabBarStyle: {
          //   width: 'auto',
          // },
          tabBarIndicatorStyle: {
            width: '50%',
            // left: (Dimensions.get('window').width / 2 - 100) / 2,
            backgroundColor: '#0063c6',
            height: '100%',
            // borderRadius: 30,
            // top: 9,
          },
          tabBarShowLabel: false,
        }}>
        <MaterialTab.Screen
          name="Feed"
          component={PostScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={require('../assets/icons/feed.png')}
                style={{
                  height: 20,
                  width: 20,
                  tintColor: focused ? '#ffffff' : '#949494',
                }}
              />
            ),
          }}
        />
        <MaterialTab.Screen
          name="Help Desk"
          component={HelpDesk}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={require('../assets/icons/help.png')}
                style={{
                  height: 20,
                  width: 20,
                  tintColor: focused ? '#ffffff' : '#949494',
                }}
              />
            ),
          }}
        />
      </MaterialTab.Navigator>
    </>
  );
};
const mapStateToProps = state => {
  // console.log(state);
  return {
    avatar: state.postListing.avatar,
    filter_modal_visible: state.postListing.filter_modal_visible,
    username: state.postListing.username,
  };
};
export default connect(mapStateToProps, {filterModalVisibleSet})(
  MaterialBarStack,
);
