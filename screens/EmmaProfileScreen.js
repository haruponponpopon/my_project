import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Touchable } from 'react-native';

export default function App({navigation}) {
  return (
    <>
      <View style={styles.home}>
        <View>
          <Image
            style={{width: 50, height: 50, alignItems: 'center', borderRadius: '50%'}}
            source={require("../assets/icon0.jpeg")}
          />
        </View>
        <View>
          <Text style={{alignItems: 'center', fontWeight: 'bold', fontSize: 18, color: "#303030", marginHorizontal: 10}}>Emma</Text>
        </View>
      </View>
      <View style={styles.profile}>
        <Text>ð¯ðµTOKYO.JP{"\n"}ð¤åºç¤åç²§åã®ãã©ã³ãããã£ã¦ã¾ã{"\n"}Cosme Produce @emma_cosme #emma_cosme{"\n"}Youtube ðð¾ð ãemma channelã
        </Text>
      </View>
      <View style={styles.container}>
        <View>
          <Text style={{alignItems: 'center', fontWeight: 'bold', fontSize: 14, color: "#303030"}}>ãã©ã­ã¼ä¸­</Text>
        </View>
      </View>
      <View style={styles.group}>
        <View>
          <Text>åºåæ°{"\n"}184</Text>
        </View>
        <View>
          <Text>ãã©ã­ã¯ã¼{"\n"}123</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("FollowList")}><Text>ãã©ã­ã¼ä¸­{"\n"}102</Text></TouchableOpacity>
        </View>
      </View>
      <View style={styles.container_home}>
            <View>
                <Image
                    style={{width: '100%', height: 300, alignItems: 'center'}}
                    source={require("../assets/postImage0.jpeg")}
                />
            </View>
            <View style={styles.comment_container}>
                <View>
                <Text>éº¦ããå¸½å­ Â¥1000(ç¨è¾¼)</Text>
                <Text>å¥èã«éã³ã«ãã¾ããâª</Text>     
                </View>
                <View style={styles.left_container}>
                <button style={{backgroundColor: 'rgba(0,0,0,0.001)', borderWidth: 0, fontSize: 20}}>â¡</button>
                </View>
            </View>
        </View>
        <View style={styles.container_home}>
            <View>
                <Image
                    style={{width: '100%', height: 300, alignItems: 'center'}}
                    source={require("../assets/postImage5.jpeg")}
                />
            </View>
            <View style={styles.comment_container}>
                <View>
                <Text>Gã¸ã£ã³ Â¥2000(ç¨è¾¼)</Text>
                <Text>ããããªãµã¯ã©ð¸ãå²ãã¦ãã¾ããâ¨</Text>  
                </View>
                <View style={styles.left_container}>
                <button style={{backgroundColor: 'rgba(0,0,0,0.001)', borderWidth: 0, fontSize: 20}}>â¡</button>
                </View>
            </View>
        </View>
        <View style={styles.container_home}>
            <View>
                <Image
                    style={{width: '100%', height: 300, alignItems: 'center'}}
                    source={require("../assets/postImage6.webp")}
                />
            </View>
            <View style={styles.comment_container}>
                <View>
                <Text>ãããããã«ã«ãã¼ Â¥1000(ç¨è¾¼)</Text>
                <Text>ãã¡ãç©ãã«è¡ã£ã¦ãã¾ããð{"\n"}30åé£ã¹ã¡ãã£ãð¶</Text>  
                </View>
                <View style={styles.left_container}>
                <button style={{backgroundColor: 'rgba(0,0,0,0.001)', borderWidth: 0, fontSize: 20}}>â¡</button>
                </View>
            </View>
        </View>
        <View style={styles.container_home}>
            <View>
                <Image
                    style={{width: '100%', height: 300, alignItems: 'center'}}
                    source={require("../assets/postImage7.webp")}
                />
            </View>
            <View style={styles.comment_container}>
                <View>
                <Text>ã¯ã³ãã¼ã¹ Â¥3000(ç¨è¾¼)</Text>
                <Text>ããã´ã¨ãã¼ãð</Text> 
                </View>
                <View style={styles.left_container}>
                <button style={{backgroundColor: 'rgba(0,0,0,0.001)', borderWidth: 0, fontSize: 20}}>â¡</button>
                </View>
            </View>
        </View>
    </>
  );
}
const styles = StyleSheet.create({
  home: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginEnd: 0,
    marginHorizontal: 10,
    marginVertical: 10
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "#d0d0d0",
    borderWidth: 1,
  },
  group: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  profile: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  navBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  //   backgroundColor: 'white',
  //   borderBottomColor: "#d0d0d0",
  //   borderBottomWidth: 1,
    marginEnd: 0,
    marginHorizontal: 10,
    marginVertical: 10
  },
  container_home: {
      marginHorizontal: 10,
      marginVertical: 20
  },
  comment_container: {
    flexDirection: 'row',
    justifyContent: 'space_between',
    alignItems: 'center',
  },
  left_container: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      marginHorizontal: 10,
  }
});
