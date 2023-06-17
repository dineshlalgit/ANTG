import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,StatusBar,Platform,ScrollView,Image,Dimensions, TouchableOpacity,WebView,Linking} from 'react-native';
import HomeCate from './components/Home/HomeCategory';
import DialogScroll from './components/Home/ImageScrollDialog';
import {Button,Icon} from 'native-base';
import { Dialog, ProgressDialog, ConfirmDialog } from "react-native-simple-dialogs";
import { Constants, MapView, Polyline,Location, Permissions, } from 'expo';
import TextTicker from 'react-native-text-ticker';
import AmEvent from './components/Home/AmEvent';
import TextTickerPress from './components/Home/TextTicker';
import { Table, TableWrapper, Rows ,Row} from 'react-native-table-component';



const {height,width}=Dimensions.get('window');
const points = [
  { latitude: 11.6883571, longitude: 92.7222562},
  { latitude: 11.7048529, longitude: 92.7155958}

]


const pointsponeix = [
  { latitude: 11.7048529, longitude: 92.7155958},
  { latitude: 11.6733045, longitude: 92.7374535},
  { latitude: 11.6726988, longitude: 92.7345302},
  { latitude: 11.6726988, longitude: 92.7345302},
    { latitude: 11.697882, longitude:  92.730636}

]


const pointspani = [
  { latitude: 11.697882, longitude:  92.730636},
  { latitude: 11.6726988, longitude: 92.7345302}
]

const pointsbam = [

  { latitude: 11.7048529, longitude: 92.7155958},
  { latitude: 11.6883571, longitude: 92.7222562},
  { latitude: 11.7048529, longitude: 92.7155958},
  { latitude: 11.6733045, longitude: 92.7374535},
  { latitude: 11.6726988, longitude: 92.7345302}
]


const pointsdandus = [
  { latitude: 11.6883571, longitude: 92.7222562},
  { latitude: 11.6714389, longitude: 92.7082764}
]



export default  class Ferry extends React.Component {

  constructor(props){
      super(props);
      this.state = {
         mapRegion: null,
         hasLocationPermissions: false,
         locationResult: null,
         dialogflag: false,
         tableHead: ['Trip','Chatham-Bambooflat'],
         tableHeadD: ['Trip','Chatham-Dundas Point','Trip','Dundas Point-Chatham'],
         tableHeadDBF: ['Trip','Phoneix Bay-Bambooflat','Trip','Bambooflat-Phoneix Bay'],
         tableHeadDPH: ['Trip','Phoneix Bay-Panighat','Trip','Panighat-Phoneix Bay'],
      tableData: [
        ['1','05:00 AM'],['2','06:00 AM'], ['3','06:02 AM'],
        ['4','06:50 AM'],
        ['5','07:15 AM'],
        ['6','07:35 AM'],
        ['7','08:00 AM'],
        ['8','08:30 AM'],
        ['9','09:00 AM'],
        ['10','09:30 AM'],
        ['11','10:20 AM'],
        ['12','11:00 AM'],
        ['13','11:30 AM'],
        ['14','12:30 PM'],
        ['15','01:00 PM'],
        ['16','01:40 PM'],
        ['17','02:05 PM'],
        ['18','02:35 PM'],
        ['19','03:05 PM'],
        ['20','03:30 PM'],
        ['21','04:05 PM'],
        ['22','04:30 PM'],
        ['23','05:00 PM'],
        ['24','05:15 PM'],
        ['25','05:50 PM'],
        ['26','06:15 PM'],
        ['27','06:45 PM'],
        ['28','07:15 PM'],
        ['29','07:35 PM'],
        ['30','07:50 PM'],
        ['31','08:00 PM'],
        ['32','08:20 PM'],
        ['33','08:45 PM']
      ],
      tableDataB: [
      ['1','05:30 AM'],
      ['2','06:00 AM'],
      ['3','06:25 AM'],
      ['4','06:50 AM'],
      ['5','07:15 AM'],
      ['6','07:40 AM'],
      ['7','08:00 AM'],
      ['8','08:30 AM'],
      ['9','09:00 AM'],
      ['10','09:30 AM'],
      ['11','10:00 AM'],
      ['12','10:40 AM'],
      ['13','11:25 AM'],
      ['14','12:00 PM'],
      ['15','01:00 PM'],
      ['16','01:40 PM'],
      ['17','02:05 PM'],
      ['18','02:30 PM'],
      ['19','02:50 PM'],
      ['20','03:40 PM'],
      ['21','04:05 PM'],
      ['22','04:30 PM'],
      ['23','04:55 PM'],
      ['24','05:25 PM'],
      ['25','05:45 PM'],
      ['26','06:15 PM'],
      ['27','06:45 PM'],
      ['28','07:10 PM'],
      ['29','07:40 PM']
    ],
tableDataD: [
      ['1','05:05 AM','1','05:30AM'],
      ['2','05:50 AM','2','06:15AM'],
      ['3','06:35 AM','3','07:00AM'],
      ['4','07:20 AM','4','07:40AM'],
      ['5','08:10 AM','5','08:30AM'],
      ['6','09:00 AM','6','09:20AM'],
      ['7','09:45 AM','7','10:15AM'],
      ['8','10:40 AM','8','11:00AM'],
      ['9','11:30 AM','9','11:50AM'],
      ['10','12:35 PM','10','12:55PM'],
      ['11','01:20 PM','11','01:40PM'],
      ['12','02:00 PM','12','02:40PM'],
      ['13','03:15 PM','13','04:00PM'],
      ['14','04:45 PM','14','05:05PM'],
      ['15','05:30 PM','15','05:50PM'],
      ['16','06:30 PM','16','06:50PM'],
      ['17','07:30 PM','17','07:50PM'],
      ['18','08:30 PM','18','08:50PM']
    ],
tableDataDV:[
      ['1','07:20 AM','1','07:50AM'],
      ['2','05:30 PM','2','06:00PM'],
     ]
,  tableDataP: [
        ['1','06:10 AM','1','06:35AM'],
        ['2','07:00 AM','2','07:25AM'],
        ['3','07:50 AM','3','08:15AM'],
        ['4','08:40 AM','4','09:05AM'],
        ['5','09:30 AM','5','09:55AM'],
        ['6','10:20 AM','6','10:45AM'],
        ['7','12:15 PM','7','12:40PM'],
        ['8','01:30 PM','8','01:55PM'],
        ['9','03:30 PM','9','03:55PM'],
        ['10','04:20 PM','10','04:45PM'],
        ['11','05:15 PM','11','05:50PM'],
        ['12','06:15 PM','12','06:45PM'],
        ['13','07:15 PM','13','07:45PM'],
        ['14','08:10 PM','14','08:30PM'],
      ]
,
tableDataBF:[
       ['1','04:45 AM','1','05:15AM'],
       ['2','06:15 AM','2','06:45AM'],
       ['3','07:20 AM','3','08:00AM'],
       ['4','12:15 PM','4','01:15PM'],
       ['5','02:00 PM','5','02:20PM'],
       ['6','03:30 PM','6','04:15PM'],
       ['7','05:15 PM','7','05:45PM'],
       ['8','06:15 PM','8','07:00PM'],
       ['9','07:30 PM','9','08:00PM'],
       ['10','09:00 PM','10','09:40PM']
     ]

    }
  }




  componentWillMount(){
    this.startHeaderHeight=80
    if(Platform.OS=='android'){
      this.startHeaderHeight = 100 + StatusBar.currentHeight
    }
  }

  openDialogM = (show) => {
      this.setState({ showDialogM: show });
  }

  openDialogGreen = (show) => {
      this.setState({ showDialogGreen: show });
  }


  openDialogMAP = (show) => {
      this.setState({ showDialogMAP: show });
  }

  openDialogMAPPhoneix = (show) => {
      this.setState({ showDialogMAPPhoneix: show });
  }

  openDialogMAPPani = (show) => {
      this.setState({ showDialogMAPPani: show });
  }

  openDialogDandus = (show) => {
      this.setState({ showDialogDandus: show });
  }


  openDialogBam = (show) => {
      this.setState({ showDialogBam: show });
  }

  openDialogCHFerry = (show) => {
      this.setState({ showDialogCHFerry: show });
  }

  openDialogBFerry = (show) => {
      this.setState({ showDialogBFerry: show });
  }
  openDialogPFerry = (show) => {
        this.setState({ showDialogPFerry: show });
    }


    openDialogDFerry = (show) => {
        this.setState({ showDialogDFerry: show });
    }

    openDialogPHFerry = (show) => {
        this.setState({ showDialogPHFerry: show });
    }

    openDialogGreenocean = (show) => {
        this.setState({ showDialogGreenocean: show });
    }

    openDialogmarkuzz = (show) => {
        this.setState({ showDialogmarkuzz: show });
    }

    _handleOpenWithLinking = () => {
    Linking.openURL('http://greenoceanseaways.com/tickets/portal');
  }

  _handleOpenWithLinkingMK = () => {
  Linking.openURL('http://www.makruzz.com/');
}



  componentDidMount() {
   this._getLocationAsync();
 }

 _handleMapRegionChange = mapRegion => {
    console.log(mapRegion);
   this.setState({ mapRegion });

   };

 _getLocationAsync = async () => {
  let { status } = await Permissions.askAsync(Permissions.LOCATION);
  if (status !== 'granted') {
    this.setState({
      locationResult: 'Permission to access location was denied',
    });
  } else {
    this.setState({ hasLocationPermissions: true });
  }

  let location = await Location.getCurrentPositionAsync({});
  this.setState({ locationResult: JSON.stringify(location) });

  // Center the map on the location we just fetched.
   this.setState({mapRegion: { latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.0622, longitudeDelta: 0.0421}});
 };

  render() {

    return (
    <SafeAreaView style={{flex:1}}>
      <View style={{flex:1,backgroundColor: 'white'}}>
        <View style={{height: 80,backgroundColor:'white',borderWidth: 1,borderBottomColor: "#dddddd",height: this.startHeaderHeight}}>
          <View style={{flexDirection: 'row',padding: 10,backgroundColor: 'white',marginHorizontal: 20,shadowOffset:{width: 0,height: 0},shadowColor: 'white',shadowOpacity: 0.2,elevation: 1,marginTop: Platform.OS=='android'?30:null}}>
            <Text style={{flex: 1,fontSize: 20,fontWeight: '700',backgroundColor: 'white'}}>Govt Ferry Schedule</Text>
          </View>
        </View>

        <ScrollView scrollEventThrottle={36}
        >
          <View style={{flex: 1,backgroundColor: 'white',paddingTop: 10}}>

          <View style={{marginTop: 10,paddingHorizontal:20}}>
          <Text style={{fontSize: 15,fontWeight: '900',color:"#e84118",paddingTop: 5}}>NOTE : THIS IS AN TENTATIVE SCHEDULE SUJECT TO CHANGE DUE TO WEATHER CONDITIONS AND UNAVOIDABLE CIRCUSTANCES.</Text>
          <Text style={{fontSize: 15,fontWeight: '900',color:"#e84118",paddingTop: 5}}> -ONES THE VESSEL  IS FULL  TO ITS CAPACITY,IT MAY SAIL BEFORE SCHEDULE TIME.</Text>
          </View>


              {/*ChathamFerryView*/}


              <View style={{marginTop: 10,paddingHorizontal:20}}>

                    <TouchableOpacity onPress={()=>this.openDialogCHFerry(true)}>
                      <View style={{alignItems: 'center'}}>
                        <Text style={{fontSize: 20,fontWeight: '700',color:"#4cd137",backgroundColor: "#f5f6fa"}}><Image source={require('../assets/ic.png')}
                         style={{height: 24,width: 24}}/>Chatham Ferry Schedules</Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>this.openDialogMAP(true)}>
                    <TextTickerPress tickertext="Press to Track routes From Chatham To Bambooflat Jetty" />
                    </TouchableOpacity>
              </View>
                {/*ChathamFerryView*/}

                {/*BambooflatFerryView*/}
                <View style={{marginTop: 10,paddingHorizontal:20}}>
                <TouchableOpacity onPress={()=>this.openDialogBFerry(true)}>
                  <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 20,fontWeight: '700',color:"#4cd137",backgroundColor: "#f5f6fa"}}> <Image source={require('../assets/ic.png')}
                     style={{height: 24,width: 24}}/>Bambooflat Ferry Schedules </Text>
                  </View>
                </TouchableOpacity>
                      <TouchableOpacity onPress={()=>this.openDialogBam(true)}><TextTickerPress tickertext="Press to Track routes From Bambooflat To Phoneix Bay Jetty" /></TouchableOpacity>
                </View>
                {/*BambooflatFerryView*/}


                  {/*PanighatFerryView*/}
                  <View style={{marginTop: 10,paddingHorizontal:20}}>
                  <View style={{alignItems: 'center'}}>
                    <TouchableOpacity onPress={()=>this.openDialogPFerry(true)}>
                      <Text style={{fontSize: 20,fontWeight: '700',color:"#4cd137",backgroundColor: "#f5f6fa"}}><Image source={require('../assets/ic.png')}
                       style={{height: 24,width: 24}}/>Panighat Ferry Schedules</Text>
                     </TouchableOpacity>
                   </View>
                        <TouchableOpacity onPress={()=>this.openDialogMAPPani(true)}><TextTickerPress tickertext="Press to Track routes From Panighat To Phoneix Bay Jetty" /></TouchableOpacity>
                  </View>
                    {/*PanighatFerryView*/}

                    {/*PhoneixBayFerryView*/}
                    <View style={{marginTop: 10,paddingHorizontal:20}}>
                    <View style={{alignItems: 'center'}}>
                    <TouchableOpacity onPress={()=>this.openDialogPHFerry(true)}>
                        <Text style={{fontSize: 20,fontWeight: '700',color:"#4cd137",backgroundColor: "#f5f6fa"}}><Image source={require('../assets/ic.png')}
                         style={{height: 24,width: 24}}/>PhoneixBay Ferry Schedules</Text>
                       </TouchableOpacity>

                        </View>
                        <TouchableOpacity onPress={()=>this.openDialogMAPPhoneix(true)}><TextTickerPress tickertext="Press to Track routes From  Phoneix Bay To Panighat  Jetty" /></TouchableOpacity>
                    </View>
                      {/*PhoneixBayFerryView*/}

                      {/*DedasPointFerryView*/}
                      <View style={{marginTop: 10,paddingHorizontal:20}}>
                        <View style={{alignItems: 'center'}}>
                       <TouchableOpacity onPress={()=>this.openDialogDFerry(true)}>
                          <Text style={{fontSize: 20,fontWeight: '700',color:"#4cd137",backgroundColor: "#f5f6fa"}}>
                          <Image source={require('../assets/ic.png')}
                           style={{height: 24,width: 24}}/>
                          DedasPoint Ferry Schedules</Text>
                        </TouchableOpacity>
                        </View>
                          <TouchableOpacity onPress={()=>this.openDialogDandus(true)}><TextTickerPress tickertext="Press to Track routes From Dandus Point To Chatham Jetty" /></TouchableOpacity>
                    </View>
                        {/*DedasPointFerryView*/}
          </View>
          {/*Private Ferry*/}
          <Text style={{fontSize:24,fontWeight: '700',paddingHorizontal: 20,color:"#2C3A47",backgroundColor: 'white'}}>Private Ferries Available</Text>
            <View style={{height: 130,marginTop: 20,backgroundColor: 'white'}}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <TouchableOpacity onPress={()=>this.openDialogmarkuzz(true)}><HomeCate imageUri={require('../assets/makruzz.jpg')} texturi="Makruzz" /></TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.openDialogGreenocean(true)}><HomeCate imageUri={require('../assets/greenocean.jpg')} texturi="Green Ocean Seaways" /></TouchableOpacity>

              </ScrollView>
            </View>
            {/*Private Ferry*/}
        </ScrollView>

        {/*DialogM*/}
        <Dialog
            title="Makruzz"
            animationType="fade"
            contentStyle={
                {
                    alignItems: "center",
                    justifyContent: "center",
                }
            }
            onTouchOutside={ () => this.openDialogM(false) }
            visible={ this.state.showDialogM }
        >
        <View style={{height:150,marginTop: 10}}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <DialogScroll imageUriScroll={require('../assets/eleph1.jpg')}  />
            <DialogScroll imageUriScroll={require('../assets/eleph2.jpg')}  />
            <DialogScroll imageUriScroll={require('../assets/eleph3.jpg')} />

          </ScrollView>
        </View>
        <Text style={ { marginVertical: 30 } }>
           Corbyn's Cove beach is just 8 kilometers from the City center, and a prominent sightseeing place in Andaman. With pleasant blue sea water and lush green coconut palms, the beach allows visitors to relax alongside and enjoy several water sports available on the shore of the beach. Some of the water activities that one can undertake and enjoy over a visit to Corbyn's Cove Beach include scuba diving, surfing, and boating. Further, the beach is also a perfect location for taking pleasure of sunbathing, swimming and surfing
        </Text>
        <Button
            onPress={ () => this.openDialogM(false) }
            style={ { marginTop: 10 } }
        ><Icon name="arrow-back" /></Button>
        </Dialog>
          {/*DialogM*/}

          {/*DialogGreen*/}
          <Dialog
              title="Green Ocean Seaways"
              animationType="fade"
              contentStyle={
                  {
                      alignItems: "center",
                      justifyContent: "center",
                  }
              }
              onTouchOutside={ () => this.openDialogGreen(false) }
              visible={ this.state.showDialogGreen }
          >
          <View style={{height:150,marginTop: 10}}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <DialogScroll imageUriScroll={require('../assets/eleph1.jpg')}  />
              <DialogScroll imageUriScroll={require('../assets/eleph2.jpg')}  />
              <DialogScroll imageUriScroll={require('../assets/eleph3.jpg')} />

            </ScrollView>
          </View>
          <Text style={ { marginVertical: 30 } }>
             Corbyn's Cove beach is just 8 kilometers from the City center, and a prominent sightseeing place in Andaman. With pleasant blue sea water and lush green coconut palms, the beach allows visitors to relax alongside and enjoy several water sports available on the shore of the beach. Some of the water activities that one can undertake and enjoy over a visit to Corbyn's Cove Beach include scuba diving, surfing, and boating. Further, the beach is also a perfect location for taking pleasure of sunbathing, swimming and surfing
          </Text>
          <Button
              onPress={ () => this.openDialogGreen(false) }
              style={ { marginTop: 10 } }
          ><Icon name="arrow-back" /></Button>
          </Dialog>
            {/*DialogGreen*/}



          {/*DialogMAPChatham*/}
                        <Dialog

                            animationType="fade"
                            contentStyle={
                                {
                                    alignItems:'center',
                                    justifyContent: "center",
                                }
                            }
                            onTouchOutside={ () => this.openDialogMAP(false) }
                            visible={ this.state.showDialogMAP }
                        ><Button
                            onPress={ () => this.openDialogMAP(false) }
                            style={ { marginTop: 3 } }
                        ><Icon name="arrow-back" /></Button>
                        <View style={{width: width-50,height: 550,marginTop: 5}}>
                        <MapView
                           style={{flex: 1,height: null,width: null,borderRadius: 5,borderWidth: 1,borderColor: "#dddddd"}}
                           initialRegion={this.state.mapRegion}
                           onRegionChange={this._handleMapRegionChange}
                           showsUserLocation={true}
                         >
                         <MapView.Polyline
                            coordinates={points}
                            strokeWidth={10}
                            strokeColor="#00a8ff"
                            lineCap="round"
                            lineJoin="bevel"
                            />
                         </MapView>
                        </View>

                        </Dialog>
          {/*DialogMAPChatham*/}

          {/*openDialogMAPPhoneix*/}
                        <Dialog

                            animationType="fade"
                            contentStyle={
                                {
                                    alignItems:'center',
                                    justifyContent: "center",
                                }
                            }
                            onTouchOutside={ () => this.openDialogMAPPhoneix(false) }
                            visible={ this.state.showDialogMAPPhoneix }
                        ><Button
                            onPress={ () => this.openDialogMAPPhoneix(false) }
                            style={ { marginTop: 3 } }
                        ><Icon name="arrow-back" /></Button>
                        <View style={{width: width-50,height: 550,marginTop: 5}}>
                        <MapView
                           style={{flex: 1,height: null,width: null,borderRadius: 5,borderWidth: 1,borderColor: "#dddddd"}}
                           initialRegion={this.state.mapRegion}
                           onRegionChange={this._handleMapRegionChange}
                           showsUserLocation={true}
                         >
                         <MapView.Polyline
                            coordinates={pointsponeix}
                            strokeWidth={10}
                            strokeColor="#00a8ff"
                            lineCap="round"
                            lineJoin="bevel"
                            />

                         </MapView>
                        </View>

                        </Dialog>
          {/*openDialogMAPPhoneix*/}


          {/*openDialogMAPPani*/}
                        <Dialog

                            animationType="fade"
                            contentStyle={
                                {
                                    alignItems:'center',
                                    justifyContent: "center",
                                }
                            }
                            onTouchOutside={ () => this.openDialogMAPPani(false) }
                            visible={ this.state.showDialogMAPPani }
                        ><Button
                            onPress={ () => this.openDialogMAPPani(false) }
                            style={ { marginTop: 3 } }
                        ><Icon name="arrow-back" /></Button>
                        <View style={{width: width-50,height: 550,marginTop: 5}}>
                        <MapView
                           style={{flex: 1,height: null,width: null,borderRadius: 5,borderWidth: 1,borderColor: "#dddddd"}}
                           initialRegion={this.state.mapRegion}
                           onRegionChange={this._handleMapRegionChange}
                           showsUserLocation={true}
                         >
                         <MapView.Polyline
                            coordinates={pointspani}
                            strokeWidth={10}
                            strokeColor="#00a8ff"
                            lineCap="round"
                            lineJoin="bevel"
                            />

                         </MapView>
                        </View>

                        </Dialog>
          {/*openDialogMAPPani*/}

          {/*openDialogBam*/}
                        <Dialog

                            animationType="fade"
                            contentStyle={
                                {
                                    alignItems:'center',
                                    justifyContent: "center",
                                }
                            }
                            onTouchOutside={ () => this.openDialogBam(false) }
                            visible={ this.state.showDialogBam }
                        ><Button
                            onPress={ () => this.openDialogBam(false) }
                            style={ { marginTop: 3 } }
                        ><Icon name="arrow-back" /></Button>
                        <View style={{width: width-50,height: 550,marginTop: 5}}>
                        <MapView
                           style={{flex: 1,height: null,width: null,borderRadius: 5,borderWidth: 1,borderColor: "#dddddd"}}
                           initialRegion={this.state.mapRegion}
                           onRegionChange={this._handleMapRegionChange}
                           showsUserLocation={true}
                         >
                         <MapView.Polyline
                            coordinates={pointsbam}
                            strokeWidth={10}
                            strokeColor="#00a8ff"
                            lineCap="round"
                            lineJoin="bevel"
                            />

                         </MapView>
                        </View>

                        </Dialog>
          {/*openDialogBam*/}

          {/*openDialogDandus*/}
                        <Dialog

                            animationType="fade"
                            contentStyle={
                                {
                                    alignItems:'center',
                                    justifyContent: "center",
                                }
                            }
                            onTouchOutside={ () => this.openDialogDandus(false) }
                            visible={ this.state.showDialogDandus }
                        ><Button
                            onPress={ () => this.openDialogDandus(false) }
                            style={ { marginTop: 3 } }
                        ><Icon name="arrow-back" /></Button>
                        <View style={{width: width-50,height: 550,marginTop: 5}}>
                        <MapView
                           style={{flex: 1,height: null,width: null,borderRadius: 5,borderWidth: 1,borderColor: "#dddddd"}}
                           initialRegion={this.state.mapRegion}
                           onRegionChange={this._handleMapRegionChange}
                           showsUserLocation={true}
                         >
                         <MapView.Polyline
                            coordinates={pointsdandus}
                            strokeWidth={10}
                            strokeColor="#00a8ff"
                            lineCap="round"
                            lineJoin="bevel"
                            />

                         </MapView>
                        </View>

                        </Dialog>
          {/*openDialogDandus*/}

          {/*openDialogCHFerry*/}
                        <Dialog

                            animationType="fade"
                            contentStyle={
                                {
                                    alignItems:'center',
                                    justifyContent: "center",
                                }
                            }
                            onTouchOutside={ () => this.openDialogCHFerry(false) }
                            visible={ this.state.showDialogCHFerry }
                        ><Button
                            onPress={ () => this.openDialogCHFerry(false) }
                            style={ { marginTop: 3 } }
                        ><Icon name="arrow-back" /></Button>
                        <View style={{width: width-50,height: 450,marginTop: 5}}>
                        <ScrollView horizontal={true}>
                          <View style={{paddingLeft: 30}}>
                            <Table borderStyle={{borderColor: '#C1C0B9'}}>
                              <Row data={this.state.tableHead} style={styles.header} textStyle={styles.text}/>
                            </Table>
                            <ScrollView   vertical={true}
                              scrollEventThrottle={16}
                              showsVerticalScrollIndicator={true}
                               style={styles.dataWrapper}>
                              <Table borderStyle={{borderColor: '#C1C0B9'}}>
                                     <Rows
                                      data={this.state.tableData}

                                      style={[styles.row,{backgroundColor: '#F7F6E7'}]}
                                      textStyle={styles.text}
                                    />
                              </Table>
                            </ScrollView>
                          </View>
                        </ScrollView>

                        </View>

                        </Dialog>
          {/*openDialogCHFerry*/}

          {/*openDialogBFerry*/}
                        <Dialog
                            animationType="fade"
                            contentStyle={
                                {
                                    alignItems:'center',
                                    justifyContent: "center",
                                }
                            }
                            onTouchOutside={ () => this.openDialogBFerry(false) }
                            visible={ this.state.showDialogBFerry }
                        ><Button
                            onPress={ () => this.openDialogBFerry(false) }
                            style={ { marginTop: 3 } }
                        ><Icon name="arrow-back" /></Button>
                        <View style={{width: width-50,height: 450,marginTop: 5}}>
                        <ScrollView horizontal={true}>
                          <View style={{paddingLeft: 30}}>
                            <Table borderStyle={{borderColor: '#C1C0B9'}}>
                              <Row data={this.state.tableHead} style={styles.header} textStyle={styles.text}/>
                            </Table>
                            <ScrollView   vertical={true}
                              scrollEventThrottle={16}
                              showsVerticalScrollIndicator={true}
                               style={styles.dataWrapper}>
                              <Table borderStyle={{borderColor: '#C1C0B9'}}>
                                     <Rows
                                      data={this.state.tableDataB}

                                      style={[styles.row,{backgroundColor: '#F7F6E7'}]}
                                      textStyle={styles.text}
                                    />
                              </Table>
                            </ScrollView>
                          </View>
                        </ScrollView>

                        </View>

                        </Dialog>
          {/*openDialogBFerry*/}
          {/*openDialogPFerry*/}
                                <Dialog
                                    animationType="fade"
                                    contentStyle={
                                        {
                                            alignItems:'center',
                                            justifyContent: "center",
                                        }
                                    }
                                    onTouchOutside={ () => this.openDialogPFerry(false) }
                                    visible={ this.state.showDialogPFerry }
                                ><Button
                                    onPress={ () => this.openDialogPFerry(false) }
                                    style={ { marginTop: 3 } }
                                ><Icon name="arrow-back" /></Button>
                                <View style={{width: width-50,height: 450,marginTop: 5}}>
                                <ScrollView horizontal={true}>
                                  <View style={{paddingLeft: 30}}>
                                    <Table borderStyle={{borderColor: '#C1C0B9'}}>
                                      <Row data={this.state.tableHeadDPH} style={styles.header} textStyle={styles.text}/>
                                    </Table>
                                    <ScrollView   vertical={true}
                                      scrollEventThrottle={16}
                                      showsVerticalScrollIndicator={true}
                                       style={styles.dataWrapper}>
                                      <Table borderStyle={{borderColor: '#C1C0B9'}}>
                                             <Rows
                                              data={this.state.tableDataP}

                                              style={[styles.row,{backgroundColor: '#F7F6E7'}]}
                                              textStyle={styles.text}
                                            />
                                      </Table>
                                    </ScrollView>
                                  </View>
                                </ScrollView>

                                </View>

                                </Dialog>
         {/*openDialogPFerry*/}




           {/*openDialogPHFerry*/}
                                <Dialog
                                    animationType="fade"
                                    contentStyle={
                                        {
                                            alignItems:'center',
                                            justifyContent: "center",
                                        }
                                    }
                                    onTouchOutside={ () => this.openDialogPHFerry(false) }
                                    visible={ this.state.showDialogPHFerry }
                                ><Button
                                    onPress={ () => this.openDialogPHFerry(false) }
                                    style={ { marginTop: 3 } }
                                ><Icon name="arrow-back" /></Button>
                                <View style={{width: width-50,height: 450,marginTop: 5}}>
                                <ScrollView horizontal={true}>
                                  <View style={{paddingLeft: 30}}>
                                    <Table borderStyle={{borderColor: '#C1C0B9'}}>
                                      <Row data={this.state.tableHeadDBF} style={styles.headerDP} textStyle={styles.text}/>
                                    </Table>
                                    <ScrollView   vertical={true}
                                      scrollEventThrottle={16}
                                      showsVerticalScrollIndicator={true}
                                       style={styles.dataWrapper}>
                                      <Table borderStyle={{borderColor: '#C1C0B9'}}>
                                             <Rows
                                              data={this.state.tableDataBF}
                                              style={[styles.rowDP,{backgroundColor: '#F7F6E7'}]}
                                              textStyle={styles.text}
                                            />
                                      </Table>
                                    </ScrollView>
                                  </View>
                                </ScrollView>

                                </View>

                                </Dialog>
         {/*openDialogPHFerry*/}



          {/*openDialogDFerry*/}
                                <Dialog
                                    animationType="fade"
                                    contentStyle={
                                        {
                                            alignItems:'center',
                                            justifyContent: "center",
                                        }
                                    }
                                    onTouchOutside={ () => this.openDialogDFerry(false) }
                                    visible={ this.state.showDialogDFerry }
                                ><Button
                                    onPress={ () => this.openDialogDFerry(false) }
                                    style={ { marginTop: 3 } }
                                ><Icon name="arrow-back" /></Button>
                                <View style={{width: width-50,height: 450,marginTop: 5}}>
                                <ScrollView horizontal={true}>
                                  <View style={{paddingLeft: 30}}>
                                    <Table borderStyle={{borderColor: '#C1C0B9'}}>
                                      <Row data={this.state.tableHeadD} style={styles.headerD} textStyle={styles.text}/>
                                    </Table>
                                    <ScrollView   vertical={true}
                                      scrollEventThrottle={16}
                                      showsVerticalScrollIndicator={true}
                                       style={styles.dataWrapper}>
                                      <Table borderStyle={{borderColor: '#C1C0B9'}}>
                                             <Rows
                                              data={this.state.tableDataD}

                                              style={[styles.rowD,{backgroundColor: '#F7F6E7'}]}
                                              textStyle={styles.text}
                                            />
                                      </Table>
                                    </ScrollView>
                                  </View>
                                </ScrollView>

                                </View>

                                </Dialog>
         {/*openDialogDFerry*/}

         {/*Dialogmarkuzz*/}
         <Dialog
             title="Makruzz"
             animationType="fade"
             contentStyle={
                 {
                     alignItems: "center",
                     justifyContent: "center",
                 }
             }
             onTouchOutside={ () => this.openDialogmarkuzz(false) }
             visible={ this.state.showDialogmarkuzz }
         >
         <View style={{height:150,marginTop: 10}}>
           <ScrollView
             horizontal={true}
             showsHorizontalScrollIndicator={false}
           >
               <DialogScroll imageUriScroll={require('../assets/markone.jpg')}  />
               <DialogScroll imageUriScroll={require('../assets/marktwo.jpg')}  />
               <DialogScroll imageUriScroll={require('../assets/mark3.jpg')} />
           </ScrollView>
         </View>
         <Text style={ { marginVertical: 30 } }>
            Makruzz is a luxury catamaran service, operating between Port Blair, Havelock in Neil in the emerald isles of Andaman & Nicobar Islands.
             It is the first and the largest privately owned fleet in the Andamans.
         </Text>
         <Text style={{fontSize: 13,fontWeight: '400',color:"#eb4d4b",backgroundColor: "#f5f6fa"}}>Address: Airport Authority Colony, Delanipur, Port Blair, Andaman and Nicobar Islands 744102</Text>
         <Text style={{fontSize: 13,fontWeight: '400',color:"#eb4d4b",backgroundColor: "#f5f6fa"}}>Phone: 03192 212 355</Text>

         <TouchableOpacity onPress={this._handleOpenWithLinkingMK}><Text style={{backgroundColor: "#F8EFBA",color: "#0c2461",fontSize: 17,fontWeight: '500'}}>
         <Image source={require('../assets/ic.png')}
          style={{height: 19,width: 19}}/>browser for more details</Text></TouchableOpacity>
         <Button
             onPress={ () => this.openDialogmarkuzz(false) }
             style={ { marginTop: 10 } }
         ><Icon name="arrow-back" /></Button>
         </Dialog>
         {/*Dialogmarkuzz*/}


         {/*DialogGreenocean*/}
                       <Dialog
                           title="Green Ocean"
                           animationType="fade"
                           contentStyle={
                               {
                                   alignItems: "center",
                                   justifyContent: "center",
                               }
                           }
                           onTouchOutside={ () => this.openDialogGreenocean(false) }
                           visible={ this.state.showDialogGreenocean }
                       >
                       <View style={{height:150,marginTop: 10}}>
                         <ScrollView
                           horizontal={true}
                           showsHorizontalScrollIndicator={false}
                         >
                             <DialogScroll imageUriScroll={require('../assets/greenoceanone.jpg')}  />
                             <DialogScroll imageUriScroll={require('../assets/greenoceantwo.jpg')}  />
                             <DialogScroll imageUriScroll={require('../assets/green5.jpg')} />
                         </ScrollView>
                       </View>
                       <Text style={ { marginVertical: 30 } }>
                          The newest in the fleet of Green Ocean Cruise in the Andaman Islands just arrived recently to serve in the sector of Port Blair , Havelock Island and Neil Island. Launched in 2017, Green Ocean 2 will provide many more options for travelers visiting the exotic isles of the Andaman.
                         </Text>
                       <Text style={{fontSize: 13,fontWeight: '400',color:"#eb4d4b",backgroundColor: "#f5f6fa"}}>Address: Near Samudrika Marine Museum, Delanipur, Port Blair, Andaman and Nicobar Islands 744103</Text>
                       <Text style={{fontSize: 13,fontWeight: '400',color:"#eb4d4b",backgroundColor: "#f5f6fa"}}>Phone: +91 3192 230 777</Text>
                       <TouchableOpacity onPress={this._handleOpenWithLinking}>
                       <Text style={{backgroundColor: "#F8EFBA",color: "#0c2461",fontSize: 17,fontWeight: '500'}}>
                       <Image source={require('../assets/ic.png')}
                        style={{height: 19,width: 19}}/>browser for more details</Text>
                       </TouchableOpacity>
                       <Button
                           onPress={ () => this.openDialogGreenocean(false) }
                           style={ { marginTop: 10 } }
                       ><Icon name="arrow-back" /></Button>
                       </Dialog>
         {/*DialogGreenocean*/}



      </View>
    </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
      position : 'absolute',
      top : 0,
      left:0,
      bottom:0,
      right:0
  },header: { height: 50,width: 250,backgroundColor: '#079992' },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: -1 },
  row: { height: 50,width: 250, backgroundColor: '#E7E6E1' },
  headerD: { height: 50,width: 300, backgroundColor: '#079992' },
  rowD: { height: 50,width: 300, backgroundColor: '#E7E6E1' },
  headerDP: { height: 65,width: 320, backgroundColor: '#079992' },
  rowDP: { height: 65,width: 320, backgroundColor: '#E7E6E1' }
});
