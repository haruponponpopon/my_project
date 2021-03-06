import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
//
export default function App({navigation}) {
  return (
    <>
      <View style={styles.container}>
        <Text style={{alignItems: 'center', fontWeight: 'bold', fontSize: 18, color: "#303030"}}>フォロー中</Text>
      </View>
      <View style={styles.followContainer}>
        <View style={styles.followLeftContainer}>
          <Image
            style={{width: 50, height: 50, alignItems: 'center', borderRadius: '50%'}}
            source={require("../assets/icon0.jpeg")}
          />
        </View>
        <View style={styles.followTextContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("EmmaProfile")}><Text style={{fontWeight: 600, fontSize: 18, color: "#303030"}}>Emma</Text></TouchableOpacity>
        </View>
        <View style={styles.followRightContainer}>
          <Text>✔️ フォロー中</Text>
        </View>  
      </View>
      <View style={styles.followContainer}>
        <View style={styles.followLeftContainer}>
          <Image
            style={{width: 50, height: 50, alignItems: 'center', borderRadius: '50%'}}
            source={require("../assets/icon1.jpeg")}
          />
        </View>
        <View style={styles.followTextContainer}>
          <Text style={{fontWeight: 600, fontSize: 18, color: "#303030"}}>Olivia</Text>
        </View>
        <View style={styles.followRightContainer}>
          <Text>✔️ フォロー中</Text>
        </View>  
      </View>
      <View style={styles.followContainer}>
        <View style={styles.followLeftContainer}>
          <Image
            style={{width: 50, height: 50, alignItems: 'center', borderRadius: '50%'}}
            source={require("../assets/icon2.jpeg")}
          />
        </View>
        <View style={styles.followTextContainer}>
          <Text style={{fontWeight: 600, fontSize: 18, color: "#303030"}}>Ava</Text>
        </View>
        <View style={styles.followRightContainer}>
          <Text>✔️ フォロー中</Text>
        </View>  
      </View>
      <View style={styles.followContainer}>
        <View style={styles.followLeftContainer}>
          <Image
            style={{width: 50, height: 50, alignItems: 'center', borderRadius: '50%'}}
            source={require("../assets/icon3.jpeg")}
          />
        </View>
        <View style={styles.followTextContainer}>
          <Text style={{fontWeight: 600, fontSize: 18, color: "#303030"}}>Isabella</Text>
        </View>
        <View style={styles.followRightContainer}>
          <Text>✔️ フォロー中</Text>
        </View>  
      </View>
      <View style={styles.followContainer}>
        <View style={styles.followLeftContainer}>
          <Image
            style={{width: 50, height: 50, alignItems: 'center', borderRadius: '50%'}}
            source={require("../assets/icon5.png")}
          />
        </View>
        <View style={styles.followTextContainer}>
          <Text style={{fontWeight: 600, fontSize: 18, color: "#303030"}}>Sophia</Text>
        </View>
        <View style={styles.followRightContainer}>
          <Text>✔️ フォロー中</Text>
        </View>  
      </View>
      <View style={styles.followContainer}>
        <View style={styles.followLeftContainer}>
          <Image
            style={{width: 50, height: 50, alignItems: 'center', borderRadius: '50%'}}
            source={require("../assets/icon6.jpeg")}
          />
        </View>
        <View style={styles.followTextContainer}>
          <Text style={{fontWeight: 600, fontSize: 18, color: "#303030"}}>Charlotte</Text>
        </View>
        <View style={styles.followRightContainer}>
          <Text>✔️ フォロー中</Text>
        </View>  
      </View>
      <View style={styles.followContainer}>
        <View style={styles.followLeftContainer}>
          <Image
            style={{width: 50, height: 50, alignItems: 'center', borderRadius: '50%'}}
            source={require("../assets/icon7.jpeg")}
          />
        </View>
        <View style={styles.followTextContainer}>
          <Text style={{fontWeight: 600, fontSize: 18, color: "#303030"}}>Mia</Text>
        </View>
        <View style={styles.followRightContainer}>
          <Text>✔️ フォロー中</Text>
        </View>  
      </View>
      <View style={styles.followContainer}>
        <View style={styles.followLeftContainer}>
          <Image
            style={{width: 50, height: 50, alignItems: 'center', borderRadius: '50%'}}
            source={require("../assets/icon8.jpeg")}
          />
        </View>
        <View style={styles.followTextContainer}>
          <Text style={{fontWeight: 600, fontSize: 18, color: "#303030"}}>Amelia</Text>
        </View>
        <View style={styles.followRightContainer}>
          <Text>✔️ フォロー中</Text>
        </View>  
      </View>
      <View style={styles.followContainer}>
        <View style={styles.followLeftContainer}>
          <Image
            style={{width: 50, height: 50, alignItems: 'center', borderRadius: '50%'}}
            source={require("../assets/icon9.jpeg")}
          />
        </View>
        <View style={styles.followTextContainer}>
          <Text style={{fontWeight: 600, fontSize: 18, color: "#303030"}}>Harper</Text>
        </View>
        <View style={styles.followRightContainer}>
          <Text>✔️ フォロー中</Text>
        </View>  
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  navBar: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomColor: "#d0d0d0",
    borderBottomWidth: 1,
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  container: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: "#d0d0d0",
    borderBottomWidth: 1,
  },
  followContainer: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: "#d0d0d0",
    borderBottomWidth: 1,
  },
  followLeftContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  followTextContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // backgroundColor: 'red',
  },
  followRightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderColor: "#101010",
    borderWidth: 1,
    justifyContent: 'center',
    borderRadius: 10,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopColor: "#d0d0d0",
    borderTopWidth: 1,
  },
  footerComponent: {
    width: 70,
    height: 50,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
