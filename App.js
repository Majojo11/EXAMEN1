import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Octicons from '@expo/vector-icons/Octicons';

export default function App() {
  const [followers, setFollowers] = useState(947);
    const [isFollowing, setIsFollowing] = useState(false);

      const handleFollowToggle = () => {
        if (!isFollowing) {
          setFollowers(followers + 1);
          setIsFollowing(true);
        } else {
          if (followers > 0) {
            setFollowers(followers - 1);
          }
          setIsFollowing(false);
        }
      };

  const [isStoryVisible, setIsStoryVisible] = useState(false);
  const [views, setViews] = useState(0);

  const handleStoryToggle = () => {
    if (!isStoryVisible) {
      setViews(views + 1);
      setIsStoryVisible(true);
    }
  };

  const handleCloseStory = () => {
    setIsStoryVisible(false);
  };

  return (

    <ScrollView>
      <View style={styles.Container}>

        <View style={styles.userContainer}>
          <Ionicons name="chevron-back" size={28} style={styles.backIcon} color="white" />
          <Text style={styles.UserName}>hudsonwilliamsoffi...</Text>
            <MaterialIcons name="verified" size={12} style={styles.verifiedIcon} color="#4EA1FF" />
          <Feather name="bell" size={24} style={styles.bellIcon} color="white" />
          <SimpleLineIcons name="options" size={24} style={styles.optionsIcon} color="white" />
        </View>

  <View style={styles.profileRow}>
    <Image source={require('./assets/Images/UserPicture.jpeg')} style={styles.UserPic}/>

    <View style={styles.rightSection}>
      <Text style={styles.Name}>Hudson Williams</Text>
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>35</Text>
            <Text style={styles.statLabel}>posts</Text>
          </View>

          <View style={styles.statItem}>
            <Text style={styles.statNumber}>
              {followers}
            </Text>

            <Text style={styles.statLabel}>followers</Text>
          </View>

          <View style={styles.statItem}>
            <Text style={styles.statNumber}>125</Text>
            <Text style={styles.statLabel}>following</Text>
          </View>
        </View>
      </View>
    </View>
    
    <View style={styles.bioContainer}>
      <Text style={styles.artistText}>Artist</Text>
      <Text style={styles.bioText}>이거 뭐야?</Text>
      <Text style={styles.bioTranslate}>See Translation</Text>

      <View style= {styles.linkContainer}>
        <Fontisto name="link2" size={15} style={styles.linkIcon} color="#4EA1FF" />
        <Text style={styles.youtubeLink}>youtube.com/@hudsonwilliams9010?</Text>
      </View>

      <Text style={styles.handle}>@hudsonwilliamsofficial</Text>

      <View style={styles.followedInfo}>
        <Image source={require('./assets/Images/Follows.jpeg')} style={styles.followsImage}/>
        <Text style={styles.FollowedBy}>Followed by melisaresendiz12, mari_ezji and 12 others</Text>
      </View>

      <View style={styles.followUnfollowContainer}>
        <TouchableOpacity onPress={handleFollowToggle}>
          <Text style={styles.followUnfollowButton}>
            {isFollowing ? "Unfollow" : "Follow"}
          </Text>
        </TouchableOpacity>

        <Text style={styles.message}>Message</Text>
        <View style={styles.followIconContainer}>
          <SimpleLineIcons name="user-follow" style={styles.followIcon} size={15} color="white" />
        </View>
      </View>

      <View style={styles.highlightsContainer}>
        <View style={styles.highlightItems}>
          <TouchableOpacity onPress={handleStoryToggle}>
            <LinearGradient colors={views > 0 ? ['#5A5A5A', '#2E2E2E'] : ['#b70053', '#ff6f00', '#ffcb3d']} style={styles.highlightGradient}>
              <Image source={require('./assets/Images/Highlights1.jpeg')} style={styles.highlightInner}/>
            </LinearGradient>
          </TouchableOpacity>
          <Text style={styles.highlightsText}>SHORT FIL...</Text>
        </View>

        <View style={styles.highlightItems}>
          <Image source={require('./assets/Images/Highlights2.jpeg')} style={styles.highlights} />
          <Text style={styles.highlightsText}>CHILL</Text>
        </View>
        <View style={styles.highlightItems}>
          <Image source={require('./assets/Images/Highlights3.jpeg')} style={styles.highlights} />
          <Text style={styles.highlightsText}>HOMMIES</Text>
        </View>
      </View>
    </View>

    <Modal visible={isStoryVisible} animationType="slide" transparent={false}>
      <View style={styles.storyContainer}>
        <Image source={require('./assets/Images/Highlights1.jpeg')} style={styles.storyImage} />

          <View style={styles.divider} />

          <Image source={require('./assets/Images/Highlights1.jpeg')} style={styles.storyImageInfo}/>
          <Text style ={styles.storyTitle}>SHORT FI...</Text>
          <SimpleLineIcons name="options" size={16} style={styles.optionsIconStory} color="white" />
          <Text style={styles.storyDate}>October 30, 2025</Text>
          <TouchableOpacity style={styles.closeButton} onPress={handleCloseStory}>
            <Feather name="x" size={30} color="white" />
          </TouchableOpacity>

        <View style={styles.storyInfo}>
          <Text style={styles.storyInfoText}>
            Hudson Williams
          </Text>

          <Text style={styles.storyViews}>
            Visualizaciones: {views}
          </Text>

          <Text style={styles.storyStatus}>
            {views === 0 ? "Historia no vista" : "Vista"}
          </Text>
        </View> 
      </View>
    </Modal>

    <View style={styles.barra}>
      <FontAwesome6 name="table-cells" size={24} color="#ffffff" />
      <Octicons name="video" size={24} color="#888c91" />
      <SimpleLineIcons name="share-alt" size={24} color="#888c91" />
      <FontAwesome5 name="user-tag" size={24} color="#888c91" />
    </View>
    
    <View style={styles.dividerFeed}/>
    
    <View style={styles.containerPosts}>
      <Image source={require('./assets/Images/Posts.jpeg')} style={styles.postImage}/>
    </View>
  </View>
</ScrollView>
  );
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingTop: 45,
    paddingBottom: 50,
    backgroundColor: '#0F1419',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#0F1419',
    marginTop: 10,
  },
  UserName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  backIcon: {
    marginRight: 10,
  },
  verifiedIcon: {
    marginLeft: 8,
  },
  bellIcon: {
    marginLeft: 'auto',
    marginRight: 15,
  },
  optionsIcon: {
    marginRight: 15,
  },
  UserPic: {
    width: 85,
    height: 85,
    borderRadius: 50,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 16,
  },
  rightSection: {
    flex: 1,
    marginLeft: 20,
  },
  Name: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 15,
    color: '#fff',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
  statLabel: {
    fontSize: 14,
    color: '#fff',
  },
  artistText: {
    fontSize: 15,
    color: '#85889d',
  },
  bioContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#0F1419',
  },
  bioText: {
    fontSize: 14,
    color: '#fff',
    },
  bioTranslate: {
    fontSize: 13,
    color: '#ffffff',
    marginTop: 5,
    fontWeight: 'bold',
  },
  youtubeLink: {
    fontSize: 13,
    color: '#4EA1FF',
    marginTop: 5,
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'auto',
  },
  linkIcon: {
    marginRight: 6,
  },
  followedInfo: {
    marginTop: 15,
    flexDirection: 'row',
  },
  handle: {
    fontSize: 13,
    color: '#fff',
    marginTop: 10,
    fontWeight: 'bold',
  },
  followsImage: {
    width: 80,
    height: 30,
  },
  FollowedBy: {
    fontSize: 14,
    color: '#fff',
    marginLeft: 10,
    marginRight: 100,
  },
  followUnfollowContainer: {
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  followUnfollowButton: {
    fontSize: 14,
    color: '#fff',
    backgroundColor: '#343c45',
    paddingVertical: 6,
    width: 150,
    textAlign: 'center',
    borderRadius: 7,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 14,
    color: '#fff',
    backgroundColor: '#343c45',
    paddingVertical: 6,
    paddingHorizontal: 45,
    borderRadius: 7,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  followIcon: {
    color: '#fff',
  },
  followIconContainer: {
    backgroundColor: '#343c45',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 7,
    marginLeft: 10,
  },
  highlights: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#5A5A5A'
  },
  highlightGradient: {
    width: 60,
    height: 60,
    borderRadius: 50,
    padding: 3,
  },
  highlightInner: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  highlightsContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'flex-start',
  },
  highlightItems: {
    alignItems: 'center',
    marginRight: 20,
  },
  highlightsText:{
    color: '#fff',
    fontSize: 10,
    marginTop: 5,
    fontWeight: '400',
  },
  storyContainer: { 
    flex: 1, 
    backgroundColor: 'black'
  },
  divider: {
    width: 360,
    height: 2,
    backgroundColor: '#ffffff',
    position: 'absolute',
    top: 60,
    left: 16,
  },
  storyImage: { 
    width: '100%', 
    height: '82%', 
    marginTop: 50,
  },
  storyImageInfo: {
    width: 35,
    height: 35,
    borderRadius: 25,
    position: 'absolute',
    top: 70,
    left: 20,
  },
  optionsIconStory: {
    position: 'absolute',
    top: 77,
    left: 305,
  },
  storyTitle: {
    color: 'white', 
    fontWeight: '600', 
    fontSize: 14,
    position: 'absolute',
    top: 78,
    left: 65,
  },
  storyDate: {
    color: 'white',
    fontSize: 12,
    position: 'absolute',
    top: 78,
    left: 170,
  },
  storyInfo: {
    position: 'absolute',
    bottom: 25,
    left: 20,
  },
  closeButton: {
    position: 'absolute', 
    top: 70, 
    right: 20 
  },
  closeButtonText: {
    color: 'white', 
    fontSize: 22,
  },
  storyInfoText: {
     color: 'white', 
     fontWeight: 'bold', 
     fontSize: 18 
  },
  storyViews: {
    color: 'white',
    marginTop: 5
  },
  storyStatus: {
    color: 'white',
    marginTop: 5,
    fontWeight: 'bold'
  },
  barra: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#0F1419',
    marginTop: 10,
  },
  dividerFeed: {
    width: 50,
    height: 3,
    backgroundColor: '#ffffff',
    marginHorizontal: 23,
  },
  containerPosts: {
    marginTop: 3,
    width: '100%',
  },
  postImage: {
    width: '100%',
    height: 600,
  },
});