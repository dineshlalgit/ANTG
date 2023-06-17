import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,StatusBar,Platform,ScrollView,Image,Dimensions, TouchableOpacity,Linking} from 'react-native';
import {Button,Icon} from 'native-base';
import HomeCate from './components/Home/HomeCategory';
import { Constants, MapView, Polyline,Location, Permissions,WebBrowser } from 'expo';
import AmEvent from './components/Home/AmEvent';
import DialogScroll from './components/Home/ImageScrollDialog';
import { Dialog, ProgressDialog, ConfirmDialog } from "react-native-simple-dialogs";
import {CirclesLoader, PulseLoader, TextLoader, DotsLoader,ColorDotsLoader} from 'react-native-indicator';
import Collapsible from 'react-native-collapsible';





const {height,width}=Dimensions.get('window');
export default  class Guide extends React.Component {
  _didFocusSubscription;
  _willBlurSubscription;
  constructor(props) {
    super(props)
}
  state = {isCollapsed:true};

  toggleExpanded=()=>{
    this.setState({ isCollapsed : !this.state.isCollapsed })
  }

  openDialog = (show) => {
      this.setState({ showDialog: show });
  }
  openDialogNorthBay = (show) => {
      this.setState({ showDialogNorthBay: show });
  }
    openDialogCB = (show) => {
        this.setState({ showDialogCB: show });
    }
    openDialogW = (show) => {
        this.setState({ showDialogW: show });
    }
    openDialogJB = (show) => {
        this.setState({ showDialogJB: show });
    }
    openDialogRB = (show) => {
        this.setState({ showDialogRB: show });
    }
    openDialogEB = (show) => {
        this.setState({ showDialogEB: show });
    }
    openDialogKB = (show) => {
        this.setState({ showDialogKB: show });
    }
    openDialogBB = (show) => {
        this.setState({ showDialogBB: show });
    }
    openDialogLB = (show) => {
        this.setState({ showDialogLB: show });
    }
    openDialogSB = (show) => {
        this.setState({ showDialogSB: show });
    }
    openDialogAM = (show) => {
     this.setState({ showDialogAM: show });
 }
 openDialogRS = (show) => {
     this.setState({ showDialogRS: show });
 }
 openDialogQB = (show) => {
     this.setState({ showDialogQB : show });
 }
 openDialogHist = (show) => {
     this.setState({ showDialogHist: show });
 }
 openDialogP=(show)=>{
   this.setState({ showDialogP: show });
 }
 openDialogT=(show)=>{
   this.setState({ showDialogT: show });
 }
 openDialogBBC=(show)=>{
   this.setState({ showDialogBBC: show });
 }
 openDialogBW=(show)=>{
   this.setState({ showDialogBW: show });
 }
 openDialogBOSE=(show)=>{
   this.setState({ showDialogBOSE: show });
 }
 openDialognrb=(show)=>{
   this.setState({ showDialognrb: show });
 }

 openDialogmount=(show)=>{
   this.setState({ showDialogmount: show });
 }
 openDialogmud=(show)=>{
   this.setState({ showDialogmud: show });
 }
 openDialoglime=(show)=>{
   this.setState({ showDialoglime: show });
 }
 openDialogvp=(show)=>{
   this.setState({ showDialogvp: show });
 }
 openDialogscience=(show)=>{
   this.setState({ showDialogscience: show });
 }
 openDialogkala=(show)=>{
   this.setState({ showDialogkala: show });
 }
 openDialogSam=(show)=>{
   this.setState({ showDialogSam: show });
 }
 openDialogAnth=(show)=>{
   this.setState({ showDialogAnth: show });
 }
 openDialogcell=(show)=>{
   this.setState({ showDialogcell: show });
 }
 openDialogFish=(show)=>{
   this.setState({ showDialogFish: show });
 }
 openDialogCSM=(show)=>{
   this.setState({ showDialogCSM: show });
 }

 opencoll=(show)=>{
   this.setState({ isCollapsed: show });
 }






  componentWillMount(){
    this.startHeaderHeight=80
    if(Platform.OS=='android'){
      this.startHeaderHeight = 100 + StatusBar.currentHeight
    }


  }




  render() {

    return (
    <SafeAreaView style={{flex:1}}>
      <View style={{flex:1}}>
        <View style={{backgroundColor:'white',borderWidth: 1,borderBottomColor: "#dddddd",height: this.startHeaderHeight}}>
          <View style={{flexDirection: 'row',padding: 10,backgroundColor: 'white',marginHorizontal: 20,shadowOffset:{width: 0,height: 0},shadowColor: 'white',shadowOpacity: 0.2,elevation: 1,marginTop: Platform.OS=='android'?30:null}}>
            <Text style={{flex: 1,fontSize: 20,fontWeight: '700',backgroundColor: 'white'}}>Tourist Guide</Text>
          </View>
        </View>
        <ScrollView scrollEventThrottle={16}
        >
          <View style={{flex: 1,backgroundColor: 'white',paddingTop: 10}}>
              {/*HistoryView*/}
              <View style={{marginTop: 10,paddingHorizontal:20}}><Text style={{fontSize: 24,fontWeight: '700',color:"#b63838"}}>History of Andaman & Nicobar</Text>
                  <View style={{width: width-40,height: 250,marginTop: 20}}>
                  <ScrollView
                    vertical={true}
                    scrollEventThrottle={16}
                    showsVerticalScrollIndicator={false}
                  >
                      <Text style={{flex: 1,fontWeight: '500',backgroundColor: 'white'}}>
                        Every individual knows the saying that the sun never sets in the British Empire.
                        This is true as the Britishers conquered the whole of the world, established their rule and supremacy which resulted in a lot of changes all over culturally, traditionally, politically and economically. They explored throughout the world colonized many islands discovered by them. In the year 1789, they first discovered the Andaman and Nicobar Islands. But due to the natural calamities, they left the island by 1796.
                        </Text>
                       <TouchableOpacity onPress={()=>this.openDialogHist(true)}><PulseLoader color={"#d63031"} /><Text style={{flex: 1,fontWeight: '500',color: "#d63031"}}>view more about history</Text></TouchableOpacity>
                    </ScrollView>
                  </View>
              </View>
                {/*HistoryView*/}
                {/*beach*/}

                <Text style={{fontSize:24,fontWeight: '700',paddingHorizontal: 20,color:"#b63838"}}>Beaches in Port Blair</Text>
                  <View style={{height: 130,marginTop: 20}}>
                    <ScrollView
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                    >
                      <TouchableOpacity onPress={()=>this.openDialog(true)}><HomeCate imageUri={require('../assets/ccb.jpg')} texturi="Carbyns Cove Beach" /></TouchableOpacity>
                      <TouchableOpacity onPress={()=>this.openDialogNorthBay(true)}><HomeCate imageUri={require('../assets/nb.jpg')} texturi="North Bay Beach" /></TouchableOpacity>
                      <TouchableOpacity onPress={()=>this.openDialogCB(true)}><HomeCate imageUri={require('../assets/ctb.jpg')}texturi="Chidiyatapu Beach" /></TouchableOpacity>
                      <TouchableOpacity onPress={()=>this.openDialogW(true)}><HomeCate imageUri={require('../assets/wb.jpg') } texturi="Wandoor" /></TouchableOpacity>
                      <TouchableOpacity onPress={()=>this.openDialogJB(true)}><HomeCate imageUri={require('../assets/jbb.jpg') } texturi="Jolly Buoy Beach" /></TouchableOpacity>
                    </ScrollView>
                  </View>

                  <Text style={{fontSize:24,fontWeight: '700',paddingHorizontal: 20,color:"#b63838"}}>Beaches in Swaraj Dweep </Text>
                    <View style={{height: 130,marginTop: 20}}>
                      <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                      >
                        <TouchableOpacity onPress={()=>this.openDialogRB(true)}><HomeCate imageUri={require('../assets/rb.jpg')} texturi="Radhanagar Beach" /></TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.openDialogEB(true)}><HomeCate imageUri={require('../assets/eb.jpg')} texturi="Elephanta Beach" /></TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.openDialogKB(true)}><HomeCate imageUri={require('../assets/kb.jpg')}texturi="Kalapathar Beach" /></TouchableOpacity>
                      </ScrollView>
                    </View>


                    <Text style={{fontSize:24,fontWeight: '700',paddingHorizontal: 20,color:"#b63838"}}>Beaches in Shaheed Dweep </Text>
                      <View style={{height: 130,marginTop: 20}}>
                        <ScrollView
                          horizontal={true}
                          showsHorizontalScrollIndicator={false}
                        >
                          <TouchableOpacity onPress={()=>this.openDialogBB(true)}><HomeCate imageUri={require('../assets/bb.jpg')} texturi="Bharatpur Beach" /></TouchableOpacity>
                          <TouchableOpacity onPress={()=>this.openDialogLB(true)}><HomeCate imageUri={require('../assets/lb.jpg')} texturi="Laxmanpur Beach" /></TouchableOpacity>
                          <TouchableOpacity onPress={()=>this.openDialogSB(true)}><HomeCate imageUri={require('../assets/sb.jpg')}texturi="Sitapur Beach" /></TouchableOpacity>
                        </ScrollView>
                      </View>


                      <Text style={{fontSize:24,fontWeight: '700',paddingHorizontal: 20,color:"#b63838"}}>Beaches in North & Middle Andaman </Text>
                        <View style={{height: 130,marginTop: 20}}>
                          <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                          >
                            <TouchableOpacity onPress={()=>this.openDialogAM(true)}><HomeCate imageUri={require('../assets/ab.jpg')} texturi="Amkunj Beach" /></TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.openDialogRS(true)}><HomeCate imageUri={require('../assets/rsi.jpg')} texturi="Ross & Smith" /></TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.openDialogQB(true)}><HomeCate imageUri={require('../assets/cut.jpg')}texturi="Cuthbert Bay Beach" /></TouchableOpacity>
                          </ScrollView>
                        </View>


                  {/*beach*/}

                  {/*SightSeeing*/}

                  <Text style={{fontSize:24,color:"#b63838",fontWeight: '700',paddingHorizontal: 20}}>SightSeeing</Text>
                    <View style={{height: 130,marginTop: 20}}>
                      <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                      >
                          <TouchableOpacity onPress={()=>this.openDialogBOSE(true)}><HomeCate imageUri={require('../assets/boss.jpg')} texturi="Bose Island" /></TouchableOpacity>
                          <TouchableOpacity onPress={()=>this.openDialogvp(true)}><HomeCate imageUri={require('../assets/viper.jpg')} texturi="Viper Island" /></TouchableOpacity>
                          <TouchableOpacity onPress={()=>this.openDialogmount(true)}><HomeCate imageUri={require('../assets/mount1.jpg')}texturi="Mount Harriet" /></TouchableOpacity>
                          <TouchableOpacity onPress={()=>this.openDialoglime(true)}><HomeCate imageUri={require('../assets/lsc.jpg') } texturi="Lime Stone Cave" /></TouchableOpacity>
                          <TouchableOpacity onPress={()=>this.openDialogmud(true)}><HomeCate imageUri={require('../assets/mv.jpg')} texturi="Mud Volcano" /></TouchableOpacity>
                          <TouchableOpacity onPress={()=>this.openDialognrb(true)}><HomeCate imageUri={require('../assets/nrb.jpg')} texturi="Natural Rock Bridge" /></TouchableOpacity>

                      </ScrollView>
                    </View>
                    {/*SightSeeing*/}


                    {/*Museums*/}

                    <Text style={{fontSize:24,fontWeight: '700',paddingHorizontal: 20,color:"#b63838"}}>Museums</Text>
                      <View style={{height: 130,marginTop: 20}}>
                        <ScrollView
                          horizontal={true}
                          showsHorizontalScrollIndicator={false}
                        >
                            <TouchableOpacity onPress={()=>this.openDialogAnth(true)}><HomeCate imageUri={require('../assets/anth1.jpg')} texturi="Anthropological Museum" /></TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.openDialogcell(true)}><HomeCate imageUri={require('../assets/cell.jpg')} texturi="Cellular Jail" /></TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.openDialogSam(true)}><HomeCate imageUri={require('../assets/sm.jpg')}texturi="Samudrika" /></TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.openDialogFish(true)}><HomeCate imageUri={require('../assets/fm.jpg') } texturi="Fisheries" /></TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.openDialogCSM(true)}><HomeCate imageUri={require('../assets/chm.jpg')} texturi="Chatham Saw Mill" /></TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.openDialogscience(true)}><HomeCate imageUri={require('../assets/scm.jpg')}texturi="Science Center" /></TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.openDialogkala(true)}><HomeCate imageUri={require('../assets/kpm.jpg') } texturi="kalapani Museum" /></TouchableOpacity>
                        </ScrollView>
                      </View>
                      {/*Museums*/}

                      {/*Tribal*/}

                      <Text style={{fontSize:24,fontWeight: '700',paddingHorizontal: 20,color:"#b63838"}}>Activities in Andaman</Text>
                        <View style={{height: 130,marginTop: 20}}>
                          <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                          >
                              <TouchableOpacity onPress={()=>this.openDialogBW(true)}><HomeCate imageUri={require('../assets/bird.jpg')} texturi="Bird Watching" /></TouchableOpacity>
                              <TouchableOpacity onPress={()=>this.openDialogT(true)}><HomeCate imageUri={require('../assets/track.jpg')} texturi="Trekking" /></TouchableOpacity>
                              <TouchableOpacity onPress={()=>this.openDialogP(true)}><HomeCate imageUri={require('../assets/para.jpg') } texturi="Parasailing" /></TouchableOpacity>
                                <TouchableOpacity onPress={()=>this.openDialogBBC(true)}><HomeCate imageUri={require('../assets/cor.jpg') } texturi="Bella Bay-Cruise Dinner" /></TouchableOpacity>
                          </ScrollView>
                        </View>
                        {/*Tribal*/}

                        <View style={{marginTop: 10,paddingHorizontal:20,backgroundColor: 'white'}}>
                          <TouchableOpacity onPress={this.toggleExpanded}>
                            <View style={{alignItems: 'center'}}>
                              <Text style={{fontSize: 20,fontWeight: '700',color:"#4cd137",backgroundColor: "#f5f6fa"}}> <Image source={require('../assets/ic.png')}
                               style={{height: 24,width: 24}}/>Emerency Contact </Text><Image source={require('../assets/da.png')}
                                style={{height: 24,width: 24}}/>
                            </View>
                          </TouchableOpacity>

                          <Collapsible collapsed={this.state.isCollapsed}>
                              <View style={{backgroundColor: '#f6e58d',borderWidth: 2,borderColor: '#badc58'}}>
                                  <Text style={{fontSize: 15,fontWeight: '700',color:"#192a56",textAlign:'justify'}}>Police Control Room:-<Text style={{fontSize: 15,fontWeight: '800',color:"#192a56",textAlign:'justify',alignItems: 'flex-end'}}>100</Text></Text>
                                  <Text style={{fontSize: 15,fontWeight: '700',color:"#192a56",textAlign:'justify'}}>Fire Service:-<Text style={{fontSize: 15,fontWeight: '800',color:"#192a56",textAlign:'justify',alignItems: 'flex-end'}}>101</Text></Text>
                                  <Text style={{fontSize: 15,fontWeight: '700',color:"#192a56",textAlign:'justify'}}>Coastal Security1:-<Text style={{fontSize: 15,fontWeight: '800',color:"#192a56",textAlign:'right'}}>1093</Text></Text>
                                  <Text style={{fontSize: 15,fontWeight: '700',color:"#192a56",textAlign:'justify'}}>PBMC Control Room:-<Text style={{fontSize: 15,fontWeight: '800',color:"#192a56",textAlign:'right',paddingLeft: 30}}>245798</Text></Text>
                                  <Text style={{fontSize: 15,fontWeight: '700',color:"#192a56",textAlign:'justify'}}>State Control Room:-<Text style={{fontSize: 15,fontWeight: '800',color:"#192a56",textAlign:'right',paddingLeft: 30}}>1077/234287</Text></Text>
                                  <Text style={{fontSize: 15,fontWeight: '700',color:"#192a56",textAlign:'justify'}}>Shipping:-<Text style={{fontSize: 15,fontWeight: '800',color:"#192a56",textAlign:'justify',paddingLeft: 30}}>245555</Text></Text>
                                  <Text style={{fontSize: 15,fontWeight: '700',color:"#192a56",textAlign:'justify'}}>Coast Guard (Search & Rescue):-<Text style={{fontSize: 15,fontWeight: '800',color:"#192a56",textAlign:'justify',paddingLeft: 30}}>1554</Text></Text>
                                  <Text style={{fontSize: 15,fontWeight: '700',color:"#192a56",textAlign:'justify'}}>District Control Room:-<Text style={{fontSize: 15,fontWeight: '800',color:"#192a56",textAlign:'justify',paddingLeft: 30}}>1070/238881</Text></Text>
                                  <Text style={{fontSize: 15,fontWeight: '700',color:"#192a56",textAlign:'justify'}}>Ambulance:-<Text style={{fontSize: 15,fontWeight: '800',color:"#192a56",textAlign:'justify',paddingLeft: 30}}>102</Text></Text>
                                  <Text style={{fontSize: 15,fontWeight: '700',color:"#192a56",textAlign:'justify'}}>Helpline for Women:-<Text style={{fontSize: 15,fontWeight: '800',color:"#192a56",textAlign:'justify',paddingLeft: 30}}>1091</Text></Text>
                                  <Text style={{fontSize: 15,fontWeight: '700',color:"#192a56",textAlign:'justify'}}>For Tourist Complaints:-<Text style={{fontSize: 15,fontWeight: '800',color:"#192a56",textAlign:'justify',paddingLeft: 30}}>03192-232694</Text></Text>
                                  <Text style={{fontSize: 15,fontWeight: '700',color:"#192a56",textAlign:'justify'}}>For Tourist Information:-<Text style={{fontSize: 15,fontWeight: '800',color:"#192a56",textAlign:'justify',paddingLeft: 30}}>03192-232747</Text></Text>
                                </View>
                          </Collapsible>

                        </View>


          </View>
        </ScrollView>


        {/*Dialogcarbyn*/}
        <Dialog
            title="Carbyns Cove Beach"
            animationType="fade"
            contentStyle={
                {
                    alignItems: "center",
                    justifyContent: "center",
                }
            }
            onTouchOutside={ () => this.openDialog(false) }
            visible={ this.state.showDialog }
        >
        <View style={{height:150,marginTop: 10}}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
              <DialogScroll imageUriScroll={require('../assets/cb1.jpg')}  />
              <DialogScroll imageUriScroll={require('../assets/cb2.jpg')}  />
              <DialogScroll imageUriScroll={require('../assets/cb3.jpg')} />
          </ScrollView>
        </View>
        <Text style={ { marginVertical: 30 } }>
         Corbyn's Cove beach is just 8 kilometers from the City center, and a prominent sightseeing place in Andaman.
         With pleasant blue sea water and lush green coconut palms, the beach allows visitors to relax alongside and enjoy several water sports available on the shore of the beach.
         Some of the water activities that one can undertake and enjoy over a visit to Corbyn's Cove Beach include scuba diving, and boating.
         Further, the beach is also a perfect location for taking pleasure of sunbathing, swimming and surfing.
        </Text>
        <Button
            onPress={ () => this.openDialog(false) }
            style={ { marginTop: 10 } }
        ><Icon name="arrow-back" /></Button>
        </Dialog>
          {/*Dialogcarbyn*/}

          {/*DialogNorthBay*/}
          <Dialog
              title="North Bay Beach"
              animationType="fade"
              contentStyle={
                  {
                      alignItems: "center",
                      justifyContent: "center",
                  }
              }
              onTouchOutside={ () => this.openDialogNorthBay(false) }
              visible={ this.state.showDialogNorthBay }
          >
          <View style={{height:150,marginTop: 10}}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
            <DialogScroll imageUriScroll={require('../assets/north1.jpg')}  />
            <DialogScroll imageUriScroll={require('../assets/north2.jpg')}  />
            <DialogScroll imageUriScroll={require('../assets/north3.jpg')} />
          </ScrollView>
          </View>
          <Text style={ { marginVertical: 30 } }>
            Located just 15 minutes away from the Rajiv Gandhi Water Sports Complex, the North Bay Beach offers one of the easiest water sports—Sea-walking—in Andaman and Nicobar.
            Walking barefoot on the base of the sea offers you an exquisite view of rich marine-life and the corals.
            If you’re heading to Andaman and Nicobar, don’t miss this. Skilled life guards accompany you underwater, to ensure maximum safety.
            Best time of the day to visit: Morning and afternoon.
          </Text>
          <Button
              onPress={ () => this.openDialogNorthBay(false) }
              style={ { marginTop: 10 } }
          ><Icon name="arrow-back" /></Button>

<TouchableHighlight onPress={() => {
                    var options = {
                      description: 'Credits towards consultation',
                      image: 'https://i.imgur.com/3g7nmJC.png',
                      currency: 'INR',
                      key: 'rzp_test_1DP5mmOlF5G5ag',
                      amount: '5000',
                      name: 'foo',
                      prefill: {
                        email: 'void@razorpay.com',
                        contact: '9191919191',
                        name: 'Razorpay Software'
                      },
                      theme: {color: '#F37254'}
                    }
                    RazorpayCheckout.open(options).then((data) => {
                      // handle success
                      alert(`Success: ${data.razorpay_payment_id}`);
                    }).catch((error) => {
                      // handle failure
                      alert(`Error: ${error.code} | ${error.description}`);
                    });
                  }}>Pay</TouchableHighlight>
          </Dialog>
            {/*DialogNorthBay*/}

            {/*DialogCB*/}
            <Dialog
                title="Chidiyatapu Beach"
                animationType="fade"
                contentStyle={
                    {
                        alignItems: "center",
                        justifyContent: "center",
                    }
                }
                onTouchOutside={ () => this.openDialogCB(false) }
                visible={ this.state.showDialogCB }
            >
            <View style={{height:150,marginTop: 10}}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <DialogScroll imageUriScroll={require('../assets/chi1.jpg')}  />
                <DialogScroll imageUriScroll={require('../assets/chi2.jpg')}  />
                <DialogScroll imageUriScroll={require('../assets/chi3.jpg')} />
              </ScrollView>
            </View>
            <Text style={ { marginVertical: 30 } }>
              As the name suggests, Chidiya Tapu is the perfect haven for unseen migratory birds and common native birds found in the Andaman Islands.
              Recognized as the most enchanting beach in Andaman and tourists arrive here on a large scale as the beach extends the best ever sights for them including the eye catching sunrise and sunset views.
              The beach is filled with 46 varieties of endangered species of birds, and white spotted deer. There are a lot of seasonal orchids and other varieties of plants.
              Distance from Port Blair: It is located about 25 kms from Port Blair.
            </Text>
            <Button
                onPress={ () => this.openDialogCB(false) }
                style={ { marginTop: 10 } }
            ><Icon name="arrow-back" /></Button>
            </Dialog>
              {/*DialogCB*/}

              {/*DialogW*/}
              <Dialog
                  title="Wandoor Beach"
                  animationType="fade"
                  contentStyle={
                      {
                          alignItems: "center",
                          justifyContent: "center",
                      }
                  }
                  onTouchOutside={ () => this.openDialogW(false) }
                  visible={ this.state.showDialogW }
              >
              <View style={{height:150,marginTop: 10}}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <DialogScroll imageUriScroll={require('../assets/wan5.jpg')}  />
                  <DialogScroll imageUriScroll={require('../assets/wan3.jpg')}  />
                  <DialogScroll imageUriScroll={require('../assets/wan1.jpg')} />
                  <DialogScroll imageUriScroll={require('../assets/wan2.jpg') } />
                  <DialogScroll imageUriScroll={require('../assets/wan4.jpg') } />
                </ScrollView>
              </View>
              <Text style={ { marginVertical: 30 } }>
              Wandoor beach is one of the popular beaches of Andaman that lies at a distance of about 25 kms in the east of Port Blair.
              It is a pictorial beach and a major tourist attraction that grab visitor's attention and interest.
              This beautiful beach is ideal for witnessing the colourful corals and enjoying swimming.
               With calm and clean blue water, the beach offer soothing ambience to chill and spend quality time. There are smartly constructed changing rooms and benches built for the convenience of the visitors.
              </Text>
              <Button
                  onPress={ () => this.openDialogW(false) }
                  style={ { marginTop: 10 } }
              ><Icon name="arrow-back" /></Button>
              </Dialog>
                {/*DialogW*/}

                {/*DialogJB*/}
                <Dialog
                    title="Jolly Buoy Beach"
                    animationType="fade"
                    contentStyle={
                        {
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    }
                    onTouchOutside={ () => this.openDialogJB(false) }
                    visible={ this.state.showDialogJB }
                >
                <View style={{height:150,marginTop: 10}}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    <DialogScroll imageUriScroll={require('../assets/jolly1.jpg')}  />
                    <DialogScroll imageUriScroll={require('../assets/jolly2.png')}  />
                    <DialogScroll imageUriScroll={require('../assets/jolly3.jpg')} />
                  </ScrollView>
                </View>
                <Text style={ { marginVertical: 30 } }>
                 To reach Jolly buoy island people have to come to Wandoor beach. This is located in Mahatma Gandhi National Park.
                 Wandoor beach is 30 Kms from Port Blair by road. This route is same for visiting Red Skin island also. Both Jolly buoy and Red skin are located at Mahatma Gandhi National park.
                 The boats to Jolly buoy island leaves by 9.00am. Make sure to reach Wandoor beach before 9.00am. All the boats leave at the same time and come back together.
                 You might have to send your photo if proof to avail the permit. The other way is to stand in a long queue in front of the Tourism office to get permits.
                </Text>
                <Button
                    onPress={ () => this.openDialogJB(false) }
                    style={ { marginTop: 10 } }
                ><Icon name="arrow-back" /></Button>
                </Dialog>
                  {/*DialogJB*/}

                  {/*DialogJB*/}

                  {/*DialogRB*/}
                  <Dialog
                      title="Radhanagar Beach"
                      animationType="fade"
                      contentStyle={
                          {
                              alignItems: "center",
                              justifyContent: "center",
                          }
                      }
                      onTouchOutside={ () => this.openDialogRB(false) }
                      visible={ this.state.showDialogRB }
                  >
                  <View style={{height:150,marginTop: 10}}>
                    <ScrollView
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                    >
                      <DialogScroll imageUriScroll={require('../assets/radha2.jpg')}  />
                      <DialogScroll imageUriScroll={require('../assets/radha1.jpg')}  />
                      <DialogScroll imageUriScroll={require('../assets/radha3.jpg')} />
                      <DialogScroll imageUriScroll={require('../assets/radha4.jpg') } />
                    </ScrollView>
                  </View>
                  <Text style={ { marginVertical: 30 } }>
                  Radhanagar Beach lies on the south coast of Swaraj Dweep. It is about 12 kilometers from the Islands ferry pier.
                  Radhanagar is a Grade A beach of outstanding quality. This beach is also rated as one of the best beaches in Asia by TIME Magazine.
                  It has an overall length of two kilometers and an average width of 30 to 40 meters. The sand is white and very fine in grain.
                  The beach has a gentle gradient of around 1:20 and continues out into the sea as a sandy bottom for over 100 meters.
                  </Text>
                  <Button
                      onPress={ () => this.openDialogRB(false) }
                      style={ { marginTop: 10 } }
                  ><Icon name="arrow-back"/></Button>
                  </Dialog>
                    {/*DialogRB*/}

                    {/*DialogEB*/}
                    <Dialog
                        title="Elephanta Beach"
                        animationType="fade"
                        contentStyle={
                            {
                                alignItems: "center",
                                justifyContent: "center",
                            }
                        }
                        onTouchOutside={ () => this.openDialogEB(false) }
                        visible={ this.state.showDialogEB }
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
                     This beach is another ideal site for snorkeling. It has a rich coral reef formation and amazing underwater marine life.
                     One can reach Elephant beach by small cruise boat from Swaraj Dweep Jetty in about 40 minutes.
                     By road one can go up to the Forest Camp which is 8 Kms from the Jetty towards Radhanagar side and from there by walk to the Elephant beach which will take another 40 minutes.
                     Private ferry operators organize tours to Elephant beach from Swaraj Dweep.
                    </Text>
                    <Button
                        onPress={ () => this.openDialogEB(false) }
                        style={ { marginTop: 10 } }
                    ><Icon name="arrow-back" /></Button>
                    </Dialog>
                      {/*DialogEB*/}


                      {/*DialogKB*/}
                      <Dialog
                          title="Kalapathar Beach"
                          animationType="fade"
                          contentStyle={
                              {
                                  alignItems: "center",
                                  justifyContent: "center",
                              }
                          }
                          onTouchOutside={ () => this.openDialogKB(false) }
                          visible={ this.state.showDialogKB }
                      >
                      <View style={{height:150,marginTop: 10}}>
                        <ScrollView
                          horizontal={true}
                          showsHorizontalScrollIndicator={false}
                        >
                          <DialogScroll imageUriScroll={require('../assets/kala1.jpg')}  />
                          <DialogScroll imageUriScroll={require('../assets/kala2.jpg')}  />
                          <DialogScroll imageUriScroll={require('../assets/kala3.jpg')} />
                        </ScrollView>
                      </View>
                      <Text style={ { marginVertical: 30 } }>
                         This beautiful silver sandy beach located 12 km from Swaraj Dweep jetty is slowly gaining visitors footfall,
                         though proper facilities are yet to be established.
                      </Text>
                      <Button
                          onPress={ () => this.openDialogKB(false) }
                          style={ { marginTop: 10 } }
                      ><Icon name="arrow-back" /></Button>
                      </Dialog>
                        {/*DialogKB*/}

                        {/*DialogBB*/}
                        <Dialog
                            title="Bharatpur Beach"
                            animationType="fade"
                            contentStyle={
                                {
                                    alignItems: "center",
                                    justifyContent: "center",
                                }
                            }
                            onTouchOutside={ () => this.openDialogBB(false) }
                            visible={ this.state.showDialogBB }
                        >
                        <View style={{height:150,marginTop: 10}}>
                          <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                          >
                            <DialogScroll imageUriScroll={require('../assets/bhar1.jpg')}  />
                              <DialogScroll imageUriScroll={require('../assets/bhar2.jpg')}  />
                                <DialogScroll imageUriScroll={require('../assets/bhar3.jpg')} />
                        </ScrollView>
                        </View>
                        <Text style={ { marginVertical: 30 } }>
                          Half a kilometer from the jetty, Bharatpur is one of the best beaches known for swimming and coral-watching with a vast sandy stretch.
                          This beach is ideally recommended for youngsters because of activity options. One can hire glass-bottom boats for coral viewing.
                           The Sea around the Jetty area is full of corals with schools of fish swimming around. The colour and form of vegetation along the beach soothes the senses.
                        </Text>
                        <Button
                            onPress={ () => this.openDialogBB(false) }
                            style={ { marginTop: 10 } }
                        ><Icon name="arrow-back"  /></Button>
                        </Dialog>
                          {/*DialogBB*/}

                          {/*DialogLB*/}
                          <Dialog
                              title="Laxmanpur Beach"
                              animationType="fade"
                              contentStyle={
                                  {
                                      alignItems: "center",
                                      justifyContent: "center",
                                  }
                              }
                              onTouchOutside={ () => this.openDialogLB(false) }
                              visible={ this.state.showDialogLB }
                          >
                          <View style={{height:150,marginTop: 10}}>
                            <ScrollView
                              horizontal={true}
                              showsHorizontalScrollIndicator={false}
                            >
                              <DialogScroll imageUriScroll={require('../assets/lm1.jpg')}  />
                              <DialogScroll imageUriScroll={require('../assets/lm2.jpg')}  />
                              <DialogScroll imageUriScroll={require('../assets/lm3.jpg')} />
                           </ScrollView>
                          </View>
                          <Text style={ { marginVertical: 30 } }>
                             The secluded beach of Lakshmanpur lies 2 km north of the Shaheed Dweep jetty.
                             The beach is a broad spur of white shell sand with shallow water and offers a good snorkeling option.
                             Sunbathing and swimming are other activities. One can view spectacular sun-set from this beach.
                             This rocky beach lies about two kilometers from the jetty with lots of coral formation , ornamental fish, sea urchins, sea cucumbers, star fish etc.
                              which are best suited for people of scientific temperament. The rocky surface can get slippery and one needs to be on ones guard. The main attraction here is the natural rock formations.
                          </Text>
                          <Button
                              onPress={ () => this.openDialogLB(false) }
                              style={ { marginTop: 10 } }
                          ><Icon name="arrow-back" /></Button>
                          </Dialog>
                            {/*DialogLB*/}

                            {/*DialogSB*/}
                            <Dialog
                                title="Sitapur Beach"
                                animationType="fade"
                                contentStyle={
                                    {
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }
                                }
                                onTouchOutside={ () => this.openDialogSB(false) }
                                visible={ this.state.showDialogSB }
                            >
                            <View style={{height:150,marginTop: 10}}>
                              <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                              >
                                <DialogScroll imageUriScroll={require('../assets/sit1.jpg')}  />
                                <DialogScroll imageUriScroll={require('../assets/sit2.jpg')}  />
                                <DialogScroll imageUriScroll={require('../assets/sit3.jpg')} />

                              </ScrollView>
                            </View>
                            <Text style={ { marginVertical: 30 } }>
                            This beach is exposed to the open sea and thus prone to higher tides. It is 5 kilometers to the south and at the tip of the island.
                             This beach is best suited to watch the sunrise with an impressive backdrop of natural vegetation and limestone formations.
                             The journey from the Jetty to Sitapur beach itself is refreshing with green fields and a variety of crops and forest trees.
                            </Text>
                            <Button
                                onPress={ () => this.openDialogSB(false) }
                                style={ { marginTop: 10 } }
                            ><Icon name="arrow-back" /></Button>
                            </Dialog>
                              {/*DialogRB*/}


                      {/*DialogAM*/}
                           <Dialog
                                    title="Amkunj Beach"
                                    animationType="fade"
                                    contentStyle={
                                           {
                                               alignItems: "center",
                                               justifyContent: "center",
                                           }
                                         }
                                       onTouchOutside={ () => this.openDialogAM(false) }
                                       visible={ this.state.showDialogAM }
                             >
                             <View style={{height:150,marginTop: 10}}>
                             <ScrollView
                                   horizontal={true}
                                  showsHorizontalScrollIndicator={false}
                             >
                             <DialogScroll imageUriScroll={require('../assets/amkunj1.jpg')}  />
                             <DialogScroll imageUriScroll={require('../assets/amkunj2.jpg')}  />
                             <DialogScroll imageUriScroll={require('../assets/amkunj3.jpg')} />
                           </ScrollView>
                         </View>
                         <Text style={ { marginVertical: 30 } }>
                           Aamkunj beach is located at a distance of about 08 kms from Rangat towards Mayabunder and about one km. from the Nimbutala helipad.
                           Amkunj Bay beach is another sandy beach on the way to Cutbert Bay.
                           This beach, developed in a unique way with the help of eco-friendly structures, has a couple of eco-huts and groves named after locally found flora (casurina, jamun, pandanus).
                           The eco-friendly beach facilities such as log sofas, log tepoys, indeed novel and innovative ideas, provides a perfect place for recreation to the people of Rangat and the adjoining villages.

                                             </Text>
                                             <Button
                                                 onPress={ () => this.openDialogAM(false) }
                                                 style={ { marginTop: 10 } }
                                             ><Icon name="arrow-back" /></Button>
                                             </Dialog>
                               {/*DialogAM*/}


                               {/*DialogRS*/}
                <Dialog
                    title="Ross & Smith"
                    animationType="fade"
                    contentStyle={
                        {
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    }
                    onTouchOutside={ () => this.openDialogRS(false) }
                    visible={ this.state.showDialogRS }
                >
                <View style={{height:150,marginTop: 10}}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    <DialogScroll imageUriScroll={require('../assets/rs1.jpg')}  />
                    <DialogScroll imageUriScroll={require('../assets/rs2.jpg')}  />
                    <DialogScroll imageUriScroll={require('../assets/rs3.jpg')} />
                  </ScrollView>
                </View>
                <Text style={ { marginVertical: 30 } }>
                At a distance of 20 km from Diglipur and 320 km from Port Blair, Smith & Ross Islands are the twin islands situated in the Andaman Islands of India.
                Ross & Smith Islands are joined by a sandbar that is visible during low tide but gets submerged during high tide.
                The sand bar in the form of a crescent is the main attraction of the place. Water is crystal clear and gem green in color.
                The Smith Island is best suited for island camping and is perfect for enjoying village life.
                There is a Marine Sanctuary on the island which makes it an ideal place for spotting beautiful coral reefs and colorful species from the underwater
                </Text>
                <Button
                    onPress={ () => this.openDialogRS(false) }
                    style={ { marginTop: 10 } }
                ><Icon name="arrow-back" /></Button>
                </Dialog>
  {/*DialogRS*/}
  {/*DialogQB*/}
                <Dialog
                    title="Cuthbert Beach"
                    animationType="fade"
                    contentStyle={
                        {
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    }
                    onTouchOutside={ () => this.openDialogQB(false) }
                    visible={ this.state.showDialogQB }
                >
                <View style={{height:150,marginTop: 10}}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    <DialogScroll imageUriScroll={require('../assets/cut1.jpg')}  />
                    <DialogScroll imageUriScroll={require('../assets/cut2.jpg')}  />
                    <DialogScroll imageUriScroll={require('../assets/cut.jpg')} />
                  </ScrollView>
                </View>
                <Text style={ { marginVertical: 30 } }>
                  Cutbert Bay Beach is located at a distance of 12 km. from Rangat.
                  This lengthy beach with a tropical forest bordering is famous for turtle nesting in season.
                  One can view the turtle nesting during December-February.
                  Hawksbill Nest, a Guest House, run by the Tourism Department, near Cutbert Bay beach offers accommodation.
                  The guest house is enroute to Mayabunder and Diglipur
                </Text>
                <Button
                    onPress={ () => this.openDialogQB(false) }
                    style={ { marginTop: 10 } }
                ><Icon name="arrow-back" /></Button>
                </Dialog>
  {/*DialogQB*/}

  {/*DialogHist*/}
                <Dialog
                    animationType="fade"
                    contentStyle={
                        {
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    }
                    onTouchOutside={ () => this.openDialogHist(false) }
                    visible={ this.state.showDialogHist }
                >
                <View style={{marginTop: 5,paddingHorizontal:5}}><Text style={{fontSize: 20,fontWeight: '700',color:"#b63838"}}>History of Andaman & Nicobar</Text>

                <View style={{height:150,marginTop: 10}}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    <DialogScroll imageUriScroll={require('../assets/histone.jpg')}  />
                      <DialogScroll imageUriScroll={require('../assets/histtwo.jpg')}  />
                        <DialogScroll imageUriScroll={require('../assets/histthree.jpg')} />
                          <DialogScroll imageUriScroll={require('../assets/histfour.jpg') } />
                          <DialogScroll imageUriScroll={require('../assets/histfive.jpg') } />
                  </ScrollView>
                </View>

                    <View style={{width: width-50,height: 200,marginTop: 10}}>
                    <ScrollView
                      vertical={true}
                      scrollEventThrottle={16}
                      showsVerticalScrollIndicator={false}
                    >
                        <Text style={{flex: 1,fontWeight: '500',backgroundColor: 'white'}}>
                          Every individual knows the saying that the sun never sets in the British Empire.
                          This is true as the Britishers conquered the whole of the world, established their rule and supremacy which resulted in a lot of changes all over culturally, traditionally,
                           politically and economically. They explored throughout the world colonized many islands discovered by them.
                            In the year 1789, they first discovered the Andaman and Nicobar Islands. But due to the natural calamities, they left the island by 1796.
                          Nearly 6 tribal groups occupied the islands then. The Nicobar Islands were thickly populated by the Nicobari tribes especially in Car Nicobar,
                           Nancowrie, Camorta and Katchal islands. The other groups of tribes are the Shompan tribes who lived in Campbell Bay at Great Nicobar.
                           These tribes were of Mongolian origin .apart from the Nicobari and Shompan tribes, four other tribes namely Jarawa, Ongi, Sentinel,
                            and Andamanese were the Negroid Tribes who lived in south Andaman, central Andaman and north Andaman Islands.
                            The Andamanese groups of tribes were many in number.
                            The others lived in small groups in and around the dense forests.
                            They hunted animals and birds ate fruits and vegetables to fill their stomachs.
                             They were skilled in fishing and collecting honey. They made boats. The weapons they used were bows, arrows, spears and swords.
                             They were skilled in making pots and other clay goods too. They were primitive, uncultured and roamed around naked.
                             The Britishers established their colony in the Andaman and Nicobar Islands for the second time in 1858.During this colonization the British Officials and soldiers settled in large groups.
                          </Text>

                      </ScrollView>
                    </View>
                </View>
                <Button
                    onPress={ () => this.openDialogHist(false) }
                    style={ { marginTop: 10 } }
                ><Icon name="arrow-back" /></Button>
                </Dialog>
  {/*DialogHist*/}

  {/*DialogBW*/}
                <Dialog
                    title="Bird Watching"
                    animationType="fade"
                    contentStyle={
                        {
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    }
                    onTouchOutside={ () => this.openDialogBW(false) }
                    visible={ this.state.showDialogBW }
                >
                <View style={{height:150,marginTop: 10}}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    <DialogScroll imageUriScroll={require('../assets/bird1.jpg')}  />
                      <DialogScroll imageUriScroll={require('../assets/bird2.jpg')}  />
                        <DialogScroll imageUriScroll={require('../assets/bird3.jpg')} />
                  </ScrollView>
                </View>
                <Text style={ { marginVertical: 30 } }>
                  Andaman Islands Endemic Birding Tour, we will be visiting the Andaman Island in search of these birds especially the endemics - total of 20 in number.
                  But since five occur only on the Nicobars (currently off-limits to foreigners), only 17 would be sighted.
                  The notable areas visited during the Andaman Endemic Birding Tour are Mount Harriet, Sippi Ghat, Chidia Tapu, Farar Ganj & Havelock.
                  The endemics include four owls and other species such as Andaman Woodpecker, Andaman Crake and Andaman Serpent Eagle.
                </Text>
                <Button
                    onPress={ () => this.openDialogBW(false) }
                    style={ { marginTop: 10 } }
                ><Icon name="arrow-back" /></Button>
                </Dialog>
  {/*DialogBW*/}

  {/*DialogT*/}
                <Dialog
                    title="Trekking"
                    animationType="fade"
                    contentStyle={
                        {
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    }
                    onTouchOutside={ () => this.openDialogT(false) }
                    visible={ this.state.showDialogT }
                >
                <View style={{height:150,marginTop: 10}}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    <DialogScroll imageUriScroll={require('../assets/track1.jpg')}  />
                    <DialogScroll imageUriScroll={require('../assets/track2.jpg')}  />
                    <DialogScroll imageUriScroll={require('../assets/track3.jpg')} />
                  </ScrollView>
                </View>
                <Text style={ { marginVertical: 30 } }>
                 The Andaman and Nicobar Islands are blessed with the magnanimous presence of many marvelous hillock which are perfectly good for trekking.
                 The rocky stretch of terrain that extends from the magniloquent hammock known as Mount Harriet to Madhuban.
                 This sprawling plot of land is covered in Captivating woodlands which house a variety of wild creatures and exotic plant species.
                 Start from Mount Harriet to Madhuban by trekking through the jungle approximately covering 16 Kms.
                 Exotic endemic birds, butterflies are interesting sights of this wilderness trek.
                </Text>
                <Button
                    onPress={ () => this.openDialogT(false) }
                    style={ { marginTop: 10 } }
                ><Icon name="arrow-back" /></Button>
                </Dialog>
  {/*DialogT*/}

  {/*DialogP*/}
                <Dialog
                    title="Para gliding"
                    animationType="fade"
                    contentStyle={
                        {
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    }
                    onTouchOutside={ () => this.openDialogP(false) }
                    visible={ this.state.showDialogP }
                >
                <View style={{height:150,marginTop: 10}}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    <DialogScroll imageUriScroll={require('../assets/para1.jpg')}  />
                    <DialogScroll imageUriScroll={require('../assets/para2.jpg')}  />
                    <DialogScroll imageUriScroll={require('../assets/para3.jpg')} />

                  </ScrollView>
                </View>
                <Text style={ { marginVertical: 30 } }>
                  Another one of the incredible water sports activities in Andaman that non-swimmers can enjoy.
                   Parasailing is a sport that is a wonderful mix of water and airborne adventure. You’re tied behind a motorboat while harnessed in a parachute.
                   So, you fly like a kite behind the boat as it speeds off into the sea.
                   Superbly thrilling it is! And you might get to dip into the water too, while parasailing
                </Text>
                <Button
                    onPress={ () => this.openDialogP(false) }
                    style={ { marginTop: 10 } }
                ><Icon name="arrow-back" /></Button>
                </Dialog>
  {/*DialogP*/}


  {/*DialogBCC*/}
                <Dialog
                    title="Cruise Dinner"
                    animationType="fade"
                    contentStyle={
                        {
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    }
                    onTouchOutside={ () => this.openDialogBBC(false) }
                    visible={ this.state.showDialogBBC }
                >
                <View style={{height:150,marginTop: 10}}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    <DialogScroll imageUriScroll={require('../assets/co1.jpg')}  />
                    <DialogScroll imageUriScroll={require('../assets/co2.jpg')}  />
                    <DialogScroll imageUriScroll={require('../assets/co3.jpg')} />
                    </ScrollView>
                </View>
                <Text style={ { marginVertical: 30 } }>
                 TSG Bella Bay is one of the latest travel product that has launched in the islands in 2018.
                 Now, this cruise is fairly different that the others. Bella Bay is basically a luxury diner offering travellers a luxury dining experience with a panaromic view of the South Andamans, mainly the area around Ross and North Bay Island along with Chatham Saw Mill.
                  For travelers on visit to the islands TSG Bella bay experience will surely add a lot of value during your trip in the islands.
                </Text>
                <Button
                    onPress={ () => this.openDialogBBC(false) }
                    style={ { marginTop: 10 } }
                ><Icon name="arrow-back" /></Button>
                </Dialog>
  {/*DialogBCC*/}

  {/*DialogBOSE*/}
                <Dialog
                    title="Bose Island"
                    animationType="fade"
                    contentStyle={
                        {
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    }
                    onTouchOutside={ () => this.openDialogBOSE(false) }
                    visible={ this.state.showDialogBOSE }
                >
                <View style={{height:150,marginTop: 10}}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    <DialogScroll imageUriScroll={require('../assets/boss1.jpg')}  />
                    <DialogScroll imageUriScroll={require('../assets/boss2.jpg')}  />
                    <DialogScroll imageUriScroll={require('../assets/boss4.jpg')} />
                    <DialogScroll imageUriScroll={require('../assets/boss5.jpg') } />
                    <DialogScroll imageUriScroll={require('../assets/boss3.jpg') } />
                  </ScrollView>
                </View>
                <Text style={ { marginVertical: 30 } }>
                    This small island, less than a square kilometer stands right across Port Blair.
                    This island served as the capital to the Britishers from 1858 to 1941 when the Japanese occupied it and converted it to a ‘POW site'.
                     This island homes the ruins of the church, Chief Commissioner's house, the Cathedral and graveyard of the Britishers and few other important
                      landmarks which today is hugged by wild wines and huge roots and trunks of century old trees. To reach Netaji Subhas Chandra Bose Island, private ferries are available from Aberdeen Jetty except on Wednesday.
                </Text>
                <Button
                    onPress={ () => this.openDialogBOSE(false) }
                    style={ { marginTop: 10 } }
                ><Icon name="arrow-back" /></Button>
                </Dialog>
  {/*DialogBOSE*/}

  {/*Dialogviper*/}
                <Dialog
                    title="Viper Island"
                    animationType="fade"
                    contentStyle={
                        {
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    }
                    onTouchOutside={ () => this.openDialogvp(false) }
                    visible={ this.state.showDialogvp }
                >
                <View style={{height:150,marginTop: 10}}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    <DialogScroll imageUriScroll={require('../assets/vip1.jpg')}  />
                      <DialogScroll imageUriScroll={require('../assets/vip2.jpg')}  />
                        <DialogScroll imageUriScroll={require('../assets/vip3.jpg')} />
                  </ScrollView>
                </View>
                <Text style={ { marginVertical: 30 } }>
                    The Andaman Islands pose snorkeling and scuba diving as one of their key attractions.
                    One of the few tourist attractions in India for underwater activities, the corals in Andaman Islands makes it a must visit for everyone.
                </Text>
                <Button
                    onPress={ () => this.openDialogvp(false) }
                    style={ { marginTop: 10 } }
                ><Icon name="arrow-back" /></Button>
                </Dialog>
  {/*Dialogviper*/}

  {/*Dialogmount*/}
                <Dialog
                    title="Mount Harriet"
                    animationType="fade"
                    contentStyle={
                        {
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    }
                    onTouchOutside={ () => this.openDialogmount(false) }
                    visible={ this.state.showDialogmount }
                >
                <View style={{height:150,marginTop: 10}}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    <DialogScroll imageUriScroll={require('../assets/mount1.jpg')}  />
                    <DialogScroll imageUriScroll={require('../assets/mount2.jpg')}  />
                    <DialogScroll imageUriScroll={require('../assets/mount3.jpg')} />
                </ScrollView>
                </View>
                <Text style={ { marginVertical: 30 } }>
                Mount Harriet, 55 Kms by road/ 15 Kms by ferry and trek from Port Blair was the summer headquarters of the Chief
                Commissioner during British Raj. This place is ideal for fascinating overview of the nearby islands and the sea.
                It is the highest peak in the South Andamans (365 mts. high). At Mount Harriet, there is a Forest Guest House where
                tourists can take rest and refresh themselves.
                </Text>
                <Button
                    onPress={ () => this.openDialogmount(false) }
                    style={ { marginTop: 10 } }
                ><Icon name="arrow-back" /></Button>
                </Dialog>
  {/*Dialogmount*/}

  {/*Dialoglime*/}
                <Dialog
                    title="Lime Stone Cave"
                    animationType="fade"
                    contentStyle={
                        {
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    }
                    onTouchOutside={ () => this.openDialoglime(false) }
                    visible={ this.state.showDialoglime }
                >
                <View style={{height:150,marginTop: 10}}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    <DialogScroll imageUriScroll={require('../assets/lime1.jpg')}  />
                    <DialogScroll imageUriScroll={require('../assets/lime2.jpg')}  />
                    <DialogScroll imageUriScroll={require('../assets/lime3.jpg')} />

                  </ScrollView>
                </View>
                <Text style={ { marginVertical: 30 } }>
                  From Baratang island (Nilambur Jetty) Lime Stone Caves are half and hour boat ride through a wide creek which
                  leads to Nayadera Jetty and further one and half km. walk through tropical forest. Limestone is a sedimentary rock formed at the bottom of
                  the sea. It is formed by the compression over millions of years of the gradual deposits of many ingredients such as marine life, shells, skeletons and corals.
                </Text>
                <Button
                    onPress={ () => this.openDialoglime(false) }
                    style={ { marginTop: 10 } }
                ><Icon name="arrow-back" /></Button>
                </Dialog>
  {/*Dialoglime*/}


  {/*Dialogmud*/}
                <Dialog
                    title="Mud Volcano"
                    animationType="fade"
                    contentStyle={
                        {
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    }
                    onTouchOutside={ () => this.openDialogmud(false) }
                    visible={ this.state.showDialogmud }
                >
                <View style={{height:150,marginTop: 10}}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    <DialogScroll imageUriScroll={require('../assets/mud1.jpg')}  />
                    <DialogScroll imageUriScroll={require('../assets/mud2.jpg')}  />
                    <DialogScroll imageUriScroll={require('../assets/mud3.jpg')} />

                  </ScrollView>
                </View>
                <Text style={ { marginVertical: 30 } }>
                 Mud Volcano is approachable by road from Nilambur jetty. One has to reach up to Jarawa creek by vehicle.
                 From Jarawa Crek Mud volcano is at a walkable distance of 250-300 meters. A mud volcano is created by natural gases
                 emitted by decaying organic matter underground. As the mud is pushed upwards by the gas, it deposits and hardens above the ground.
                 As more mud oozes out and spills over the edge it grows in size, gradually forming a miniature volcano with rich, creamy mud crater at the top.
                </Text>
                <Button
                    onPress={ () => this.openDialogmud(false) }
                    style={ { marginTop: 10 } }
                ><Icon name="arrow-back" /></Button>
                </Dialog>
  {/*Dialogmud*/}


  {/*Dialognrb*/}
                <Dialog
                    title="Natural Rock Bridge"
                    animationType="fade"
                    contentStyle={
                        {
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    }
                    onTouchOutside={ () => this.openDialognrb(false) }
                    visible={ this.state.showDialognrb }
                >
                <View style={{height:150,marginTop: 10}}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    <DialogScroll imageUriScroll={require('../assets/nat1.jpg')}  />
                    <DialogScroll imageUriScroll={require('../assets/nat2.jpg')}  />
                    <DialogScroll imageUriScroll={require('../assets/nat3.jpg')} />
                  </ScrollView>
                </View>
                <Text style={ { marginVertical: 30 } }>
                    The Andaman Islands pose snorkeling and scuba diving as one of their key attractions.
                    One of the few tourist attractions in India for underwater activities, the corals in Andaman Islands makes it a must visit for everyone.
                </Text>
                <Button
                    onPress={ () => this.openDialognrb(false) }
                    style={ { marginTop: 10 } }
                ><Icon name="arrow-back" /></Button>
                </Dialog>
  {/*Dialognrb*/}


  {/*Anthropological*/}
                <Dialog
                    title="Anthropological"
                    animationType="fade"
                    contentStyle={
                        {
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    }
                    onTouchOutside={ () => this.openDialogAnth(false) }
                    visible={ this.state.showDialogAnth }
                >
                <View style={{height:150,marginTop: 10}}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    <DialogScroll imageUriScroll={require('../assets/anth1.jpg')}  />
                    <DialogScroll imageUriScroll={require('../assets/anth2.jpg')}  />
                    <DialogScroll imageUriScroll={require('../assets/anth3.jpg')} />
                  </ScrollView>
                </View>
                <Text style={ { marginVertical: 30 } }>
                 The Anthropological museum in Port Blair started in the year 1975-76, is an ethnographic museum.
                 It showcases the four Negrito Tribes of the Andaman viz. the Jarawas, Sentinelese, Great Andamanese and the Onges and two Mongoloid Tribes of the Nicobar viz.
                 the Nicobarese and the Shompens. This museum is closed on Mondays and Govt. Holidays.
                 Timings: 09:00 AM to 01.00 PM and 01.30 PM to 04.30 PM.
                </Text>
                <Button
                    onPress={ () => this.openDialogAnth(false) }
                    style={ { marginTop: 10 } }
                ><Icon name="arrow-back" /></Button>
                </Dialog>
  {/*Anthropological*/}

  {/*Cellular*/}
                <Dialog
                    title="Cellular Jail"
                    animationType="fade"
                    contentStyle={
                        {
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    }
                    onTouchOutside={ () => this.openDialogcell(false) }
                    visible={ this.state.showDialogcell }
                >
                <View style={{height:150,marginTop: 10}}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    <DialogScroll imageUriScroll={require('../assets/cell2.jpg')}  />
                    <DialogScroll imageUriScroll={require('../assets/cell3.jpg')}  />
                    <DialogScroll imageUriScroll={require('../assets/cell1.jpg')} />
                  </ScrollView>
                </View>
                <Text style={ { marginVertical: 30 } }>
                  The CELLULAR jail, a National Memorial, is located at Port Blair which stood as a mute witness
                  to the most brutal and barbaric atrocities meted out to national freedom fighters, who were incarcerated in this jail.
                  Timing: Two Hindi shows on all days at 6:00 pm and at 7:15 pm except on Monday, Wednesday & Friday when second show is in English at 7:15 pm.
                </Text>
                <Button
                    onPress={ () => this.openDialogcell(false) }
                    style={ { marginTop: 10 } }
                ><Icon name="arrow-back" /></Button>
                </Dialog>
  {/*Cellular*/}

  {/*Samudrika*/}
                <Dialog
                    title="Samudrika"
                    animationType="fade"
                    contentStyle={
                        {
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    }
                    onTouchOutside={ () => this.openDialogSam(false) }
                    visible={ this.state.showDialogSam }
                >
                <View style={{height:150,marginTop: 10}}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    <DialogScroll imageUriScroll={require('../assets/sam.jpg')}  />
                    <DialogScroll imageUriScroll={require('../assets/sam1.jpg')}  />
                    <DialogScroll imageUriScroll={require('../assets/sam2.jpg')} />
                  </ScrollView>
                </View>
                <Text style={ { marginVertical: 30 } }>
                 Situated opposite Andaman Teal House, Delanipur, Port Blair, this museum create awareness on various
                 aspects of oceanic environment and houses a vast collection of cells, corals and a few species of colourful fishes of
                 the sea around the islands. Closed on Mondays and Holidays.
                 Timings:09:00 AM to 12.00 Noon and 02.00 PM to 05.00 PM.
                </Text>
                <Button
                    onPress={ () => this.openDialogSam(false) }
                    style={ { marginTop: 10 } }
                ><Icon name="arrow-back" /></Button>
                </Dialog>
  {/*Samudrika*/}


  {/*Fisheries*/}
                <Dialog
                    title="Fisheries"
                    animationType="fade"
                    contentStyle={
                        {
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    }
                    onTouchOutside={ () => this.openDialogFish(false) }
                    visible={ this.state.showDialogFish }
                >
                <View style={{height:150,marginTop: 10}}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    <DialogScroll imageUriScroll={require('../assets/fish1.jpg')}  />
                    <DialogScroll imageUriScroll={require('../assets/fish2.jpg')}  />
                    <DialogScroll imageUriScroll={require('../assets/fish3.jpg')} />
                  </ScrollView>
                </View>
                <Text style={ { marginVertical: 30 } }>
                  This museum is situated adjacent to the Rajiv Gandhi Water Sport Complex, Port Blair,
                   which exhibits species of marine life endemic to the islands and found in the Indo-Pacific and the Bay of Bengal.
                    It is closed on Mondays/Public Holidays/Second Saturdays.
                  Timings: 09:00 AM to 01.00 PM and 02.00 PM to 04.45 PM.
                </Text>
                <Button
                    onPress={ () => this.openDialogFish(false) }
                    style={ { marginTop: 10 } }
                ><Icon name="arrow-back" /></Button>
                </Dialog>
  {/*Fisheries*/}

  {/*Chatham Saw Mill*/}
                <Dialog
                    title="Chatham Saw Mill"
                    animationType="fade"
                    contentStyle={
                        {
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    }
                    onTouchOutside={ () => this.openDialogCSM(false) }
                    visible={ this.state.showDialogCSM }
                >
                <View style={{height:150,marginTop: 10}}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    <DialogScroll imageUriScroll={require('../assets/chm1.jpg')}  />
                      <DialogScroll imageUriScroll={require('../assets/chmtwo.jpg')}  />
                        <DialogScroll imageUriScroll={require('../assets/chmthree.jpg')} />

                  </ScrollView>
                </View>
                <Text style={ { marginVertical: 30 } }>
                  The Chatham saw mill is one of the oldest saw mills in Asia. It is built on a tiny island and connected to Port Blair by a bridge.
                  It is a store house of timber varieties like, Padauk, Gurjan, Marble, Satin wood etc.
                  The Chatham Island has the second largest wharf of these islands where island-mainland ships can berth.
                  Within the saw mill compound is a museum showcasing the various timber wealth of the Andaman and Nicobar Islands.
                  Closed on Sundays and Industrial Holidays. Forest Museum (Chatham) timings: 10.00 AM to 2.00 PM
                </Text>
                <Button
                    onPress={ () => this.openDialogCSM(false) }
                    style={ { marginTop: 10 } }
                ><Icon name="arrow-back" /></Button>
                </Dialog>
  {/*Chatham Saw Mill*/}

  {/*Science center*/}
                <Dialog
                    title="Science Center"
                    animationType="fade"
                    contentStyle={
                        {
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    }
                    onTouchOutside={ () => this.openDialogscience(false) }
                    visible={ this.state.showDialogscience }
                >
                <View style={{height:150,marginTop: 10}}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    <DialogScroll imageUriScroll={require('../assets/scione.jpg')}  />
                      <DialogScroll imageUriScroll={require('../assets/scitwo.jpg')}  />


                  </ScrollView>
                </View>
                <Text style={ { marginVertical: 30 } }>
                  The Science Centre, situated five kms from Port Blair town, has an ‘Andaman and Nicobar Islands Gallery' with interactive exhibits depicting genesis of the islands,
                  volcanic activities, science of oceans, fun science gallery, modern technology gallery, Taramandal (Portable planetarium),
                  and an in-house butterfly corner. It is closed on all Mondays and Public Holidays.
                  Timings: 10.00 AM to 5.30 PM


                </Text>

                
                <Button
                    onPress={ () => this.openDialogscience(false) }
                    style={ { marginTop: 10 } }
                ><Icon name="arrow-back" /></Button>
                </Dialog>
  {/*Science center*/}


  {/*kalapani*/}
                <Dialog
                    title="kalapani Museum"
                    animationType="fade"
                    contentStyle={
                        {
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    }
                    onTouchOutside={ () => this.openDialogkala(false) }
                    visible={ this.state.showDialogkala }
                >
                <View style={{height:150,marginTop: 10}}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    <DialogScroll imageUriScroll={require('../assets/kpmone.jpg')}  />
                      <DialogScroll imageUriScroll={require('../assets/kpmtwo.jpg')}  />
                        <DialogScroll imageUriScroll={require('../assets/kpmthree.jpg')} />

                  </ScrollView>
                </View>
                <Text style={ { marginVertical: 30 } }>
                Kalapani Museum is unique amongst all museums in Port Blair and is the only private history museum in the country, setup in a
                three storied building, where history is brought alive through miniature and life size models and dioramas.
                The museum has a vast collection of rare archival photographs, paintings and artifacts of tribes, history, rare original documents of Colonial and Japanese periods,
                 including many documentaries and films related to the Island and the Indian Freedom Struggle.
                 Timings: 09:00 AM to 07:00 PM
                 The Museum is open 7 days a week (No Holidays)

                </Text>


               

                <Button
                    onPress={ () => this.openDialogkala(false) }
                    style={ { marginTop: 10 } }
                ><Icon name="arrow-back" /></Button>


                </Dialog>
  {/*kalapani*/}

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
});
