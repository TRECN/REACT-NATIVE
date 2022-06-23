
const InshortsTab = () => {
  const layout = useWindowDimensions();

  const [index,setIndex] = useState(0);
  const [routes]=useState([
      {key:'first',title:'Discover'},
      {key:'second',title:'News'},
  ]);
  
  return (
    <TabView
        navigationState={{index,routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width:layout.width}}
        renderTabBar={()=><TabNavigation
            index={index}
            setIndex={setIndex}
        />}
    />

    // <View>
    //   <Text>InshortsTab</Text>
    // </View>
  )
}

export default InshortsTab

const styles = StyleSheet.create({})