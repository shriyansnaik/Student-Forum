import * as React from 'react';
import {View, Image, Button} from 'react-native';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import TabStack from './TabStack';
import auth from '@react-native-firebase/auth';
import {AuthContext} from './AuthProvider';
import {useContext, useState, useEffect} from 'react';
import SplashScreen from '../components/SplashScreen';
import PostDetails from '../components/PostDetails';
import Styles from '../Styles';
import PostComment from '../components/PostComment';
import CreateScreen from '../components/CreateScreen';
import ChatScreen from '../components/ChatScreen';
import PersonalMessage from '../components/PersonalMessage';
import ViewAllUserPostsScreen from '../components/ViewAllUserPostsScreen';
import EditProfile from '../components/EditProfileScreen';
import EditPostScreen from '../components/EditPostOrCommentOrReplyScreen';
import Dashboard from '../components/Dashboard';
import linking from './linking';
import Notifications from '../components/Notifications';
import Settings from '../components/Settings';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';
import Feedback from '../components/Feedback';
const Stack = createNativeStackNavigator();

// const Splash = createNativeStackNavigator();

function MainAppRoutes(props) {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);
  const {modalVisible} = props;

  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
      // initialRouteName="SplashScreen"
      // screenOptions={{headerShown: true}}
      >
        {modalVisible ? (
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{
              headerShown: false,
              // headerStyle: Styles.commonHeaderStyle,
              // headerTitleStyle: Styles.commonHeaderTitleStyle,
              // title:"Main App"
            }}
          />
        ) : (
          <>
            {user ? (
              <>
                <Stack.Screen
                  name="MainApp"
                  component={TabStack}
                  options={{
                    headerShown: false,
                    // headerStyle: Styles.commonHeaderStyle,
                    // headerTitleStyle: Styles.commonHeaderTitleStyle,
                    // title:"Main App"
                  }}
                />
                <Stack.Screen
                  name="PostDetails"
                  component={PostDetails}
                  options={{
                    headerShadowVisible: false,
                    headerStyle: Styles.commonHeaderStyle,
                    headerTitleStyle: Styles.commonHeaderTitleStyle,
                    // headerTitleAlign: 'center',
                  }}
                />
                <Stack.Screen
                  name="Post Comment"
                  component={PostComment}
                  options={{
                    headerShadowVisible: false,
                    headerStyle: Styles.commonHeaderStyle,
                    headerTitleStyle: Styles.commonHeaderTitleStyle,
                    headerTitleAlign: 'center',
                  }}
                />
                <Stack.Screen
                  name="Create Screen"
                  component={CreateScreen}
                  options={{
                    headerShadowVisible: false,
                    headerStyle: Styles.commonHeaderStyle,
                    headerTitleStyle: Styles.commonHeaderTitleStyle,
                    headerTitleAlign: 'center',
                  }}
                />
                <Stack.Screen
                  name="Edit Screen"
                  component={EditPostScreen}
                  options={{
                    headerShadowVisible: false,
                    headerStyle: Styles.commonHeaderStyle,
                    headerTitleStyle: Styles.commonHeaderTitleStyle,
                    headerTitleAlign: 'center',
                  }}
                />
                <Stack.Screen
                  name="Chat Screen"
                  component={ChatScreen}
                  options={{
                    headerShadowVisible: false,
                    headerStyle: Styles.commonHeaderStyle,
                    headerTitleStyle: Styles.commonHeaderTitleStyle,
                    headerTitleAlign: 'center',
                  }}
                />
                <Stack.Screen
                  name="Personal Message"
                  component={PersonalMessage}
                  options={({route}) => ({
                    title: route.params.username,
                    headerShadowVisible: false,
                    headerStyle: Styles.commonHeaderStyle,
                    headerTitleStyle: Styles.commonHeaderTitleStyle,
                    headerTitleAlign: 'center',
                    headerShown: false,
                  })}
                />
                <Stack.Screen
                  name="All Posts"
                  component={ViewAllUserPostsScreen}
                  options={{
                    headerShadowVisible: false,
                    headerStyle: Styles.commonHeaderStyle,
                    headerTitleStyle: Styles.commonHeaderTitleStyle,
                    headerTitleAlign: 'center',
                  }}
                />
                <Stack.Screen
                  name="Edit Profile"
                  component={EditProfile}
                  options={{
                    headerShadowVisible: false,
                    headerStyle: Styles.commonHeaderStyle,
                    headerTitleStyle: Styles.commonHeaderTitleStyle,
                    headerTitleAlign: 'center',
                  }}
                />

                <Stack.Screen
                  name="Dashboard"
                  component={Dashboard}
                  options={{
                    headerShadowVisible: false,
                    headerStyle: Styles.commonHeaderStyle,
                    headerTitleStyle: Styles.commonHeaderTitleStyle,
                    headerTitleAlign: 'center',
                    headerShown: false,
                  }}
                />

                <Stack.Screen
                  name="Settings"
                  component={Settings}
                  options={{
                    // headerShadowVisible: false,
                    headerStyle: Styles.commonHeaderStyle,
                    headerTitleStyle: Styles.commonHeaderTitleStyle,
                    headerTitleAlign: 'center',
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="Notifications"
                  component={Notifications}
                  options={{
                    // headerShadowVisible: false,
                    headerStyle: Styles.commonHeaderStyle,
                    headerTitleStyle: Styles.commonHeaderTitleStyle,
                    headerTitleAlign: 'center',
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="About Us"
                  component={AboutUs}
                  options={{
                    // headerShadowVisible: false,
                    headerStyle: Styles.commonHeaderStyle,
                    headerTitleStyle: Styles.commonHeaderTitleStyle,
                    headerTitleAlign: 'center',
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="Contact Us"
                  component={ContactUs}
                  options={{
                    // headerShadowVisible: false,
                    headerStyle: Styles.commonHeaderStyle,
                    headerTitleStyle: Styles.commonHeaderTitleStyle,
                    headerTitleAlign: 'center',
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="Feedback"
                  component={Feedback}
                  options={{
                    // headerShadowVisible: false,
                    headerStyle: Styles.commonHeaderStyle,
                    headerTitleStyle: Styles.commonHeaderTitleStyle,
                    headerTitleAlign: 'center',
                    headerShown: false,
                  }}
                />
              </>
            ) : (
              <>
                <Stack.Screen
                  name="Auth Stack"
                  component={AuthStack}
                  options={{headerShown: false}}
                />
              </>
            )}
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const SplashStack = () => {
//   return (
//     <Splash.Navigator>
//       <Splash.Screen name="Splash" component={SplashScreen} />
//     </Splash.Navigator>
//   );
// };

const mapStateToProps = state => {
  return {
    modalVisible: state.postListing.modal_visible,
  };
};

export default connect(mapStateToProps, {})(MainAppRoutes);
