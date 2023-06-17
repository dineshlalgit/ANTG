import React, { Component } from 'react';
import { StyleSheet, Text, View,SafeAreaView,StatusBar,Platform,ScrollView,Image,Dimensions, TouchableOpacity,ImageBackground} from 'react-native';
import {Button,Icon} from 'native-base';
import { Table, TableWrapper, Rows ,Row} from 'react-native-table-component';
import { Dropdown } from 'react-native-material-dropdown';
import { Pages } from 'react-native-pages';
import { Dialog, ProgressDialog, ConfirmDialog } from "react-native-simple-dialogs";
const {height,width}=Dimensions.get('window');

export default class ExampleThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Trip', 'Departure', 'Time', 'Arrival', 'Time', 'Remark'],
      widthArr: [40, 60, 80, 100, 120, 140],
      tableData: [
        ['1.', 'Bus Terminus', '06:30','Chatham','06:50','Via Goalghar, Delanipur'],
        ['2',  'Chatham', '06:55', 'G B Pant Hospital','07:15' ,'Via Goalghar, Delanipur'],
        ['3', 'G B Pant Hospital','07:15','Chatham','07:35','Via Goalghar, Delanipur'],
        ['4',' Chatham','08:00','Bus Terminus','08:30','Via G B Pant Hospital & Collage'],
        ['5', 'Bus Terminus','09:10' ,'Chatham', '09:30' ,'Via Goalghar, Delanipur'],
        ['6','Chatham' ,'09:40','G B Pant Hospital','10:00','Via Goalghar, Delanipur'],
        ['7' ,'G B Pant Hospital','10:00', 'Chatham', '10:25','Via Goalghar, Delanipur'],
        ['8', 'Chatham','10:30','Bus Terminus','11:00', 'Via G B Pant Hospital']
    ],
    tableChathamtwo: [
      ['1.', 'Bus Terminus', '12:30','Chatham','12:55','Via Goalghar'],
      ['2',  'Chatham', '13:00', 'JNRM College','13:30' ,'Via G B Pant Hospital'],
      ['3', 'JNRM College','13:30','Chatham','13:55','Via Goalghar'],
      ['4',' Chatham','14:00','JNRM College','14:25','Via Goalghar, Delanipur'],
      ['5', 'JNRM College','14:35' ,'Chatham', '15:05' ,'Via Goalghar, Delanipur'],
      ['6','Chatham' ,'15:20','Bus Terminus','15:45','Via Goalghar, Delanipur'],
      ['7' ,'Bus Terminus','16:50', 'Chatham', '17:15','Via Goalghar, Delanipur'],
      ['8', 'Chatham','17:20','Bus Terminus','17:45', 'Via Goalghar, Delanipur']
  ],
  tableChathamthree: [
    ['1.', 'Bus Terminus', '07:25','Buniyadabad','07:40','Via Goalghar, Delanipur'],
    ['2',  'Buniyadabad', '07:45', 'Mazar Pahar','08:05' ,'Via Goalghar, Delanipur'],
    ['3', 'Mazar Pahar','08:10','Bus Terminus','08:30','Via Goalghar, Delanipur'],
    ['4',' Bus Terminus','08:40','Chatham','09:00','Via Goalghar, Delanipur'],
    ['5', 'Chatham','09:05' ,'Bus Terminus', '09:25' ,'Via Goalghar, Delanipur'],
    ['6','Bus Terminus' ,'09:40','Chatham','10:00','Via Goalghar, Delanipur'],
    ['7' ,'Chatham','10:00', 'Bus Terminus', '10:30','Via G B Pant'],
    ['8', 'Bus Terminus','10:40','Chatham','11:00', 'Via Goalghar, Delanipur'],
    ['9', 'Chatham','11:05','Bus Terminus','11:35', 'Via G B Pant']
],
tableChathamfour: [
  ['1.', 'Bus Terminus', '05:15','Carbine beach','05:45','Via Shadipur'],
  ['2',  'Carbine beach', '05:50', 'Bus Terminus','06:30' ,'Via Shadipur'],
  ['3', 'Bus Terminus','06:45','Brookshabad Tsunami Shelter - 1','07:20','Via Shadipur'],
  ['4',' Brookshabad','07:25','Bus Terminus','08:00','Via Shadipur,Fisheries Colony'],
  ['5', 'Bus Terminus','08:25' ,'Carbine Jn.', '08:50' ,'Via Shadipur'],
  ['6','Carbine Jn.' ,'09:00','Bus Terminus','09:25','Via Shadipur, Fisheries Colony'],
  ['7' ,'Bus Terminus','10:00', 'Brookshabad Tsunami Shelter - 1', '10:25','Via Shadipur'],
  ['8', 'Brookshabad.','10:30','Bus Terminus','10:55', 'Via Shadipur']
],
tableChathamfive: [
  ['1.', 'Bus Terminus', '12:00','Carbine beach','12:25','Via Shadipur'],
  ['2',  'Carbine beach', '12:30', 'Bus Terminus','12:55' ,'Via Shadipur'],
  ['3', 'Bus Terminus','13:30','Carbine Jn.','13:55','Via Shadipur'],
  ['4','Carbine Jn.','14:00','Bus Terminus','14:25','Via Shadipur'],
  ['5', 'Bus Terminus','14:50' ,'Brookshabad Tsunami Shelter - 1', '15:25' ,'Via Shadipur Fisheries Colony'],
  ['6','Brookshabad' ,'15:30','Bus Terminus','16:05','Via Shadipur'],
  ['7' ,'Bus Terminus','17:00', 'Carbine Jn.', '17:35','Via Shadipur Fisheries Colony'],
  ['8', 'Brookshabad.','17:40','Bus Terminus','18:15', 'Via Shadipur']
],
tableChathamseven: [
  ['1.', 'Bus Terminus', '06:30','Jawahar colony','06:50','Via School line'],
  ['2',  'Jawahar colony', '06:55', 'Bus Terminus','07:15' ,'Via School line'],
  ['3', 'Bus Terminus','07:30','Jawahar colony','07:50','Via Dairy Farm (Bada Bijan)'],
  ['4','Jawahar colony','07:55','Bus Terminus','08:15','Via G B Pant Hospital, School line'],
  ['5', 'Bus Terminus','09:00' ,'Jawahar colony', '09:20' ,'Via School line'],
  ['6','Jawahar colony' ,'09:25','Bus Terminus','09:45','Via G B Pant Hospital, School line'],
  ['7' ,'Bus Terminus','10:00', 'Jawahar colony', '10:20','Via School line'],
  ['8', 'Jawahar colony','10:25','Bus Terminus','10:45', 'Via School line']
],
tableChathamsix: [
  ['1.', 'Bus Terminus', '05:30','Carbine beach','05:55','Via Shadipur'],
  ['2',  'Carbine beach', '06:00', 'Bus Terminus','06:30' ,'Via Shadipur'],
  ['3', 'Bus Terminus','07:00','Brookshabad Tsunami Shelter - 1','07:35','Via Shadipur'],
  ['4','Brookshabad','07:40','Bus Terminus','08:25','Via Shadipur'],
  ['5', 'Bus Terminus','08:45' ,'Carbines beach', '09:15' ,'Via Shadipur'],
  ['6','Carbines beach' ,'09:20','Bus Terminus','09:50','Via Shadipur'],
  ['7' ,'Bus Terminus','10:30', 'Brookshabad Tsunami Shelter - 1', '11:05','Via Shadipur'],
  ['8', 'Brookshabad.','11:10','Bus Terminus','11:45', 'Via Shadipur']
],
tableChathameight: [
  ['1.', 'Bus Terminus', '06:15','Minnie Bay','06:40','Via School line'],
  ['2',  'Minnie Bay', '06:45', 'Haddo','07:15' ,'Via School line'],
  ['3', 'Haddo','07:20','Minnie Bay','07:50','Via School line'],
  ['4','Minnie Bay','07:55','Bus Terminus','08:25','Via School line'],
  ['5', 'Bus Terminus','09:00' ,'Minnie Bay', '09:25' ,'Via G B Pant Hospital, School line'],
  ['6','Minnie Bay' ,'09:30','Bus Terminus','09:55','Via School line'],
  ['7' ,'Bus Terminus','10:30', 'Minnie Bay', '10:55','Via School line'],
  ['8', 'Minnie Bay','11:00','Bus Terminus','11:25', 'Via School line']
],
tableChathamnine: [
  ['1.', 'Bus Terminus', '05:45','Dollygunj','06:05','Via School line'],
  ['2',  'Dollygunj', '06:10', 'Bus Terminus','06:30' ,'Via School line'],
  ['3', 'Bus Terminus','06:55','Attam Pahar','07:20','Via School line'],
  ['4','Attam Pahar','07:25','Chatham','08:00','Via School line'],
  ['5', 'Chatham','08:05' ,'Dollygunj School', '08:35' ,'Via School line'],
  ['6','Dollygunj School' ,'08:40','Bus Terminus','09:10','Via School line'],
  ['7' ,'Bus Terminus','10:00', 'Attam Pahar', '10:25','Via School line'],
  ['8', 'Attam Pahar','10:30','Bus Terminus','10:55', 'Via School line']
],
tableChathamTEN: [
  ['1.', 'Bus Terminus', '01:35','New Bimblitan(Japan Road)','02:25','Via Bathubasti, Calicut'],
  ['2',  'Japan Road', '02:30', 'Bus Terminus','03:15' ,'Via Bathubasti, Calicut'],
  ['3', 'Bus Terminus','03:50','Pema/ Calicut','04:30','Via Bathubasti'],
  ['4','Pema/ Calicut','04:40 ','Bus Terminus','05:20' ,'Via Bathubasti'],
  ['5', 'Chatham','08:05' ,'Dollygunj School', '08:35' ,'Via School line'],
  ['6','Bus Terminus','05:35','Kodiyaghat','06:15','Via Bathubasti,Beodnabad'],
  ['7' ,'Kodiyaghat', '06:20','Bus Terminus','07:00','Via Bathubasti,Beodnabad']

],
tableChathamELE: [
  ['1.', 'Bus Terminus','04:00','Kodiyaghat','04:50','Via Beodnabad'],
  ['2',  'Kodiyaghat','04:55','Bus Terminus','05:45','Via Beodnabad'],
  ['3', 'Bus Terminus','06:15','Chidiyatapu','07:15','Via Beodnabad'],
  ['4','Chidiyatapu','07:20','Bus Terminus','08:30' ,'Via Beodnabad, JNRM']
],
tableChathamTW: [
  ['1.', 'Bus Terminus','05:15','Wandoor','06:10','Via Dhanikhari'],
  ['2',  'Wandoor','06:20','Bus Terminus','07:20','Via Dhanikhari'],
  ['3', 'Bus Terminus','07:30','Wandoor','08:30','Via Dhanikhari'],
  ['4','Wandoor','08:35','Bus Terminus','09:40','Via Dhanikhari'],
  ['5','Bus Terminus','12:00','Wandoor','01:10','Via Dhanikhari'],
  ['6','Wandoor','01:15','Bus Terminus','02:15','Via Dhanikhari'],
  ['7','Bus Terminus','03:00' ,'Wandoor' ,'04:00' ,'Via Dhanikhari'],
  ['8','Wandoor','04:20','Bus Terminus','05:20','Via Dhanikhari'],
],

    }
  }
  componentWillMount(){
    this.startHeaderHeight=80
    if(Platform.OS=='android'){
      this.startHeaderHeight = 100 + StatusBar.currentHeight
    }
  }

  openDialogChathamOne = (show) => {
      this.setState({ showDialogChatham: show });
  }

  openDialogChathamTwo = (show) => {
      this.setState({ showDialogChathamTwo: show });
  }

  openDialogChathamThree = (show) => {
      this.setState({ showDialogChathamThree: show });
}

openDialogChathamFour = (show) => {
    this.setState({ showDialogChathamFour: show });
}

openDialogChathamFix = (show) => {
    this.setState({ showDialogChathamFix: show });
}

openDialogChathamSix = (show) => {
    this.setState({ showDialogChathamSix: show });
}

openDialogChathamSeven = (show) => {
    this.setState({ showDialogChathamSeven: show });
}

openDialogChathamEight = (show) => {
    this.setState({ showDialogChathamEight: show });
}

openDialogChathamNine = (show) => {
    this.setState({ showDialogChathamNine: show });
}

openDialogChathamTen = (show) => {
    this.setState({ showDialogChathamTen: show });
}
openDialogChathamTw = (show) => {
    this.setState({ showDialogChathamTw: show });
}
openDialogChathamEle = (show) => {
    this.setState({ showDialogChathamEle: show });
}


  render() {

        const state = this.state;


    return (
      <SafeAreaView style={{flex:1}}>
        <View style={{flex:1,backgroundColor: '#f5f6fa'}}>
          <View style={{height: 80,backgroundColor:'white',borderWidth: 1,borderBottomColor: "#dddddd",height: this.startHeaderHeight}}>
            <View style={{flexDirection: 'row',padding: 10,backgroundColor: 'white',marginHorizontal: 20,shadowOffset:{width: 0,height: 0},shadowColor: 'white',shadowOpacity: 0.2,elevation: 1,marginTop: Platform.OS=='android'?30:null}}>
              <Text style={{flex: 1,fontSize: 20,fontWeight: '700',backgroundColor: 'white'}}>Govt. Bus Schedules</Text>
            </View>
          </View>

            <Pages indicatorColor={"rgb(194, 54, 22)"}>
             <View style={{ flex: 1,color: "#f5f6fa"}} >
                <TouchableOpacity onPress={()=>this.openDialogChathamOne(true)}>
                 <Text style={{fontSize:15,fontWeight: '500',paddingHorizontal: 20,color:"#e84118",paddingVertical: 20}}><Image source={require('../assets/ic.png')}
                  style={{height: 24,width: 24}}/>Bus Terminus to Chatham (Ladies only)
                  Timing: 06.30 am to 11.30 am. Duty Hr: 05.00 hrs
                 </Text>
               </TouchableOpacity>

               <TouchableOpacity onPress={()=>this.openDialogChathamTwo(true)}>
                <Text style={{fontSize:15,fontWeight: '500',paddingHorizontal: 20,color:"#e84118",paddingVertical: 20}}><Image source={require('../assets/ic.png')}
                 style={{height: 24,width: 24}}/>
                 Bus Terminus to Chatham Timing: 12.15 pm to 06.15pm. Duty Hr: 0600 hrs
                </Text>
              </TouchableOpacity>


              <TouchableOpacity onPress={()=>this.openDialogChathamThree(true)}>
               <Text style={{fontSize:15,fontWeight: '500',paddingHorizontal: 20,color:"#e84118",paddingVertical: 20}}><Image source={require('../assets/ic.png')}
                style={{height: 24,width: 24}}/>
               Bus Terminus to Chatham, Buniyadabad Timing: 07.30 am to 11.00 am. Duty Hr: 05 hrs
               </Text>

             </TouchableOpacity>
             <View style={{paddingLeft: 30}}>
               <Image source={require('../assets/stsfour.jpg')}
                style={{height: 180,width: 300,resizeMode: 'cover'}}/>
             </View>
             </View>


             <View style={{ flex: 1 ,color: "#f5f6fa"}}>
             <TouchableOpacity onPress={()=>this.openDialogChathamFour(true)}>
              <Text style={{fontSize:15,fontWeight: '500',paddingHorizontal: 20,color:"#e84118",paddingVertical: 20}}><Image source={require('../assets/ic.png')}
               style={{height: 24,width: 24}}/>Bus Terminus to Brookshabad/Carbine Jn./Carbines cove beach via Shadipur Timing: 05.00 am to 11.00 am. Duty Hr: 06 hrs
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>this.openDialogChathamFix(true)}>
             <Text style={{fontSize:15,fontWeight: '500',paddingHorizontal: 20,color:"#e84118",paddingVertical: 20}}><Image source={require('../assets/ic.png')}
              style={{height: 24,width: 24}}/>
             Bus Terminus to Brookshabad/Carbine Jn./Carbines cove beach via Shadipur Timing: 12.00 pm to 06.00 pm. Duty Hr: 06 hrs
             </Text>
           </TouchableOpacity>


           <TouchableOpacity onPress={()=>this.openDialogChathamSix(true)}>
            <Text style={{fontSize:15,fontWeight: '500',paddingHorizontal: 20,color:"#e84118",paddingVertical: 20}}><Image source={require('../assets/ic.png')}
             style={{height: 24,width: 24}}/>
            Bus Terminus to Brookshabad/Carbine Jn. /Carbines cove beach via Shadipur Timing: 05.30am to 11.30 am. Duty Hr: 06 hrs
            </Text>

          </TouchableOpacity>
          <View style={{paddingLeft: 30}}>
            <Image source={require('../assets/ststwo.jpg')}
             style={{height: 200,width: 300,resizeMode: 'cover'}}/>
          </View>
             </View>


             <View style={{ flex: 1 ,color: "#f5f6fa"}}>
             <TouchableOpacity onPress={()=>this.openDialogChathamSeven(true)}>
              <Text style={{fontSize:15,fontWeight: '500',paddingHorizontal: 20,color:"#e84118",paddingVertical: 20}}><Image source={require('../assets/ic.png')}
               style={{height: 24,width: 24}}/>Bus Terminus to Jawahar Colony via School line Timing: 06.30am to 11.00 am. Duty Hr: 4.30 hrs </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>this.openDialogChathamEight(true)}>
             <Text style={{fontSize:15,fontWeight: '500',paddingHorizontal: 20,color:"#e84118",paddingVertical: 20}}><Image source={require('../assets/ic.png')}
              style={{height: 24,width: 24}}/>
             Bus Terminus to Minnie Bay via School line Timing: 06.00am to 11.30 am. Duty Hr: 5.30 hrs
             </Text>
           </TouchableOpacity>


           <TouchableOpacity onPress={()=>this.openDialogChathamNine(true)}>
            <Text style={{fontSize:15,fontWeight: '500',paddingHorizontal: 20,color:"#e84118",paddingVertical: 20}}><Image source={require('../assets/ic.png')}
             style={{height: 24,width: 24}}/>
              Bus Terminus to Attam Pahar via Dollygunj Timing: 05.30 am to 11.00 am. Duty Hr: 5.30 hrs

            </Text>

          </TouchableOpacity>
          <View style={{paddingLeft: 30}}>
            <Image source={require('../assets/ststhree.jpg')}
             style={{height: 200,width: 300,resizeMode: 'cover'}}/>
          </View>
             </View>

             <View style={{ flex: 1 ,color: "#f5f6fa"}}>
             <TouchableOpacity onPress={()=>this.openDialogChathamTen(true)}>
              <Text style={{fontSize:15,fontWeight: '500',paddingHorizontal: 20,color:"#e84118",paddingVertical: 20}}><Image source={require('../assets/ic.png')}
               style={{height: 24,width: 24}}/>Bus Terminus to Calicut, New Bimblitan, Kodiyaghat
               Timing: 01.30 pm to 07.00 pm. Duty Hr: 05.30 hrs </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>this.openDialogChathamEle(true)}>
             <Text style={{fontSize:15,fontWeight: '500',paddingHorizontal: 20,color:"#e84118",paddingVertical: 20}}><Image source={require('../assets/ic.png')}
              style={{height: 24,width: 24}}/>
               Bus Terminus to Chidiyatapu/Kodiyaghat
               Timing: 04.00 am to 08.30 am. Duty Hr: 04.30 hrs
             </Text>
           </TouchableOpacity>


           <TouchableOpacity onPress={()=>this.openDialogChathamTw(true)}>
            <Text style={{fontSize:15,fontWeight: '500',paddingHorizontal: 20,color:"#e84118",paddingVertical: 20}}><Image source={require('../assets/ic.png')}
             style={{height: 24,width: 24}}/>
             Bus Terminus to Wandoor
             Timing: 05.00 am to 05.00 pm.. Duty Hr: 10.00 hrs
            </Text>
          </TouchableOpacity>
          <View style={{paddingLeft: 30}}>
            <Image source={require('../assets/sts.jpg')}
             style={{height: 200,width: 300,resizeMode: 'cover'}}/>
          </View>

           </View>
           </Pages>


           {/*openDialogChathamOne*/}
                         <Dialog

                             animationType="fade"
                             contentStyle={
                                 {
                                     alignItems:'center',
                                     justifyContent: "center",
                                 }
                             }
                             onTouchOutside={ () => this.openDialogChathamOne(false) }
                             visible={ this.state.showDialogChatham }
                         ><Button
                             onPress={ () => this.openDialogChathamOne(false) }
                             style={ { marginTop: 3 } }
                         ><Icon name="arrow-back" /></Button>
                 {/*Table*/}
                 <View style={{width: width-70,height: 450,marginTop: 5}}>
                 <ScrollView horizontal={true}>
                   <View>
                     <Table borderStyle={{borderColor: '#C1C0B9'}}>
                       <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
                     </Table>
                     <ScrollView style={styles.dataWrapper}
                      showsVerticalScrollIndicator={true}
                     >
                       <Table borderStyle={{borderColor: '#C1C0B9'}}>
                              <Rows
                               data={state.tableData}
                               widthArr={state.widthArr}
                               style={[styles.row,{backgroundColor: '#F7F6E7'}]}
                               textStyle={styles.text}
                             />
                       </Table>
                     </ScrollView>
                   </View>
                 </ScrollView>
             {/*Table*/}
            </View>
             </Dialog>
           {/*openDialogChathamOne*/}

           {/*openDialogChathamTwo*/}
                         <Dialog

                             animationType="fade"
                             contentStyle={
                                 {
                                     alignItems:'center',
                                     justifyContent: "center",
                                 }
                             }
                             onTouchOutside={ () => this.openDialogChathamTwo(false) }
                             visible={ this.state.showDialogChathamTwo }
                         ><Button
                             onPress={ () => this.openDialogChathamTwo(false) }
                             style={ { marginTop: 3 } }
                         ><Icon name="arrow-back" /></Button>
                 {/*Table*/}
                 <View style={{width: width-70,height: 450,marginTop: 5}}>
                 <ScrollView horizontal={true}>
                   <View>
                     <Table borderStyle={{borderColor: '#C1C0B9'}}>
                       <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
                     </Table>
                     <ScrollView style={styles.dataWrapper}
                      showsVerticalScrollIndicator={true}
                     >
                       <Table borderStyle={{borderColor: '#C1C0B9'}}>
                              <Rows
                               data={state.tableChathamtwo}
                               widthArr={state.widthArr}
                               style={[styles.row,{backgroundColor: '#F7F6E7'}]}
                               textStyle={styles.text}
                             />
                       </Table>
                     </ScrollView>
                   </View>
                 </ScrollView>
             {/*Table*/}
            </View>
             </Dialog>
           {/*openDialogChathamTwo*/}

           {/*openDialogChathamThree*/}
                         <Dialog

                             animationType="fade"
                             contentStyle={
                                 {
                                     alignItems:'center',
                                     justifyContent: "center",
                                 }
                             }
                             onTouchOutside={ () => this.openDialogChathamThrre(false) }
                             visible={ this.state.showDialogChathamThree }
                         ><Button
                             onPress={ () => this.openDialogChathamThree(false) }
                             style={ { marginTop: 3 } }
                         ><Icon name="arrow-back" /></Button>
                 {/*Table*/}
                 <View style={{width: width-70,height: 450,marginTop: 5}}>
                 <ScrollView horizontal={true}>
                   <View>
                     <Table borderStyle={{borderColor: '#C1C0B9'}}>
                       <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
                     </Table>
                     <ScrollView style={styles.dataWrapper}
                        showsVerticalScrollIndicator={true}
                     >
                       <Table borderStyle={{borderColor: '#C1C0B9'}}>
                              <Rows
                               data={state.tableChathamthree}
                               widthArr={state.widthArr}
                               style={[styles.row,{backgroundColor: '#F7F6E7'}]}
                               textStyle={styles.text}
                             />
                       </Table>
                     </ScrollView>
                   </View>
                 </ScrollView>
             {/*Table*/}
            </View>
             </Dialog>
           {/*openDialogChathamThree*/}

           {/*openDialogChathamFour*/}
                         <Dialog

                             animationType="fade"
                             contentStyle={
                                 {
                                     alignItems:'center',
                                     justifyContent: "center",
                                 }
                             }
                             onTouchOutside={ () => this.openDialogChathamFour(false) }
                             visible={ this.state.showDialogChathamFour }
                         ><Button
                             onPress={ () => this.openDialogChathamFour(false) }
                             style={ { marginTop: 3 } }
                         ><Icon name="arrow-back" /></Button>
                 {/*Table*/}
                 <View style={{width: width-70,height: 450,marginTop: 5}}>
                 <ScrollView horizontal={true}>
                   <View>
                     <Table borderStyle={{borderColor: '#C1C0B9'}}>
                       <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
                     </Table>
                     <ScrollView style={styles.dataWrapper}
                      showsVerticalScrollIndicator={true}
                     >
                       <Table borderStyle={{borderColor: '#C1C0B9'}}>
                              <Rows
                               data={state.tableChathamfour}
                               widthArr={state.widthArr}
                               style={[styles.row,{backgroundColor: '#F7F6E7'}]}
                               textStyle={styles.text}
                             />
                       </Table>
                     </ScrollView>
                   </View>
                 </ScrollView>
             {/*Table*/}
            </View>
             </Dialog>
           {/*openDialogChathamFour*/}

           {/*openDialogChathamFix*/}
                         <Dialog

                             animationType="fade"
                             contentStyle={
                                 {
                                     alignItems:'center',
                                     justifyContent: "center",
                                 }
                             }
                             onTouchOutside={ () => this.openDialogChathamFix(false) }
                             visible={ this.state.showDialogChathamFix }
                         ><Button
                             onPress={ () => this.openDialogChathamFix(false) }
                             style={ { marginTop: 3 } }
                         ><Icon name="arrow-back" /></Button>
                 {/*Table*/}
                 <View style={{width: width-70,height: 450,marginTop: 5}}>
                 <ScrollView horizontal={true}>
                   <View>
                     <Table borderStyle={{borderColor: '#C1C0B9'}}>
                       <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
                     </Table>
                     <ScrollView style={styles.dataWrapper}
                      showsVerticalScrollIndicator={true}
                     >
                       <Table borderStyle={{borderColor: '#C1C0B9'}}>
                              <Rows
                               data={state.tableChathamfive}
                               widthArr={state.widthArr}
                               style={[styles.row,{backgroundColor: '#F7F6E7'}]}
                               textStyle={styles.text}
                             />
                       </Table>
                     </ScrollView>
                   </View>
                 </ScrollView>
             {/*Table*/}
            </View>
             </Dialog>
           {/*openDialogChathamFix*/}

           {/*openDialogChathamSix*/}
                         <Dialog

                             animationType="fade"
                             contentStyle={
                                 {
                                     alignItems:'center',
                                     justifyContent: "center",
                                 }
                             }
                             onTouchOutside={ () => this.openDialogChathamSix(false) }
                             visible={ this.state.showDialogChathamSix }
                         ><Button
                             onPress={ () => this.openDialogChathamSix(false) }
                             style={ { marginTop: 3 } }
                         ><Icon name="arrow-back" /></Button>
                 {/*Table*/}
                 <View style={{width: width-70,height: 450,marginTop: 5}}>
                 <ScrollView horizontal={true}>
                   <View>
                     <Table borderStyle={{borderColor: '#C1C0B9'}}>
                       <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
                     </Table>
                     <ScrollView style={styles.dataWrapper}
                        showsVerticalScrollIndicator={true}
                     >
                       <Table borderStyle={{borderColor: '#C1C0B9'}}>
                              <Rows
                               data={state.tableChathamsix}
                               widthArr={state.widthArr}
                               style={[styles.row,{backgroundColor: '#F7F6E7'}]}
                               textStyle={styles.text}
                             />
                       </Table>
                     </ScrollView>
                   </View>
                 </ScrollView>
             {/*Table*/}
            </View>
             </Dialog>
           {/*openDialogChathamSix*/}


           {/*openDialogChathamSeven*/}
                         <Dialog

                             animationType="fade"
                             contentStyle={
                                 {
                                     alignItems:'center',
                                     justifyContent: "center",
                                 }
                             }
                             onTouchOutside={ () => this.openDialogChathamSeven(false) }
                             visible={ this.state.showDialogChathamSeven }
                         ><Button
                             onPress={ () => this.openDialogChathamSeven(false) }
                             style={ { marginTop: 3 } }
                         ><Icon name="arrow-back" /></Button>
                 {/*Table*/}
                 <View style={{width: width-70,height: 450,marginTop: 5}}>
                 <ScrollView horizontal={true}>
                   <View>
                     <Table borderStyle={{borderColor: '#C1C0B9'}}>
                       <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
                     </Table>
                     <ScrollView style={styles.dataWrapper}
                        showsVerticalScrollIndicator={true}
                     >
                       <Table borderStyle={{borderColor: '#C1C0B9'}}>
                              <Rows
                               data={state.tableChathamsix}
                               widthArr={state.widthArr}
                               style={[styles.row,{backgroundColor: '#F7F6E7'}]}
                               textStyle={styles.text}
                             />
                       </Table>
                     </ScrollView>
                   </View>
                 </ScrollView>
             {/*Table*/}
            </View>
             </Dialog>
           {/*openDialogChathamSeven*/}

           {/*openDialogChathamEight*/}
                         <Dialog

                             animationType="fade"
                             contentStyle={
                                 {
                                     alignItems:'center',
                                     justifyContent: "center",
                                 }
                             }
                             onTouchOutside={ () => this.openDialogChathamEight(false) }
                             visible={ this.state.showDialogChathamEight }
                         ><Button
                             onPress={ () => this.openDialogChathamEight(false) }
                             style={ { marginTop: 3 } }
                         ><Icon name="arrow-back" /></Button>
                 {/*Table*/}
                 <View style={{width: width-70,height: 450,marginTop: 5}}>
                 <ScrollView horizontal={true}>
                   <View>
                     <Table borderStyle={{borderColor: '#C1C0B9'}}>
                       <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
                     </Table>
                     <ScrollView style={styles.dataWrapper}
                      showsVerticalScrollIndicator={true}
                     >
                       <Table borderStyle={{borderColor: '#C1C0B9'}}>
                              <Rows
                               data={state.tableChathameight}
                               widthArr={state.widthArr}
                               style={[styles.row,{backgroundColor: '#F7F6E7'}]}
                               textStyle={styles.text}
                             />
                       </Table>
                     </ScrollView>
                   </View>
                 </ScrollView>
             {/*Table*/}
            </View>
             </Dialog>
           {/*openDialogChathamEight*/}

           {/*openDialogChathamNine*/}
                         <Dialog

                             animationType="fade"
                             contentStyle={
                                 {
                                     alignItems:'center',
                                     justifyContent: "center",
                                 }
                             }
                             onTouchOutside={ () => this.openDialogChathamNine(false) }
                             visible={ this.state.showDialogChathamNine }
                         ><Button
                             onPress={ () => this.openDialogChathamNine(false) }
                             style={ { marginTop: 3 } }
                         ><Icon name="arrow-back" /></Button>
                 {/*Table*/}
                 <View style={{width: width-70,height: 450,marginTop: 5}}>
                 <ScrollView horizontal={true}>
                   <View>
                     <Table borderStyle={{borderColor: '#C1C0B9'}}>
                       <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
                     </Table>
                     <ScrollView style={styles.dataWrapper}
                      showsVerticalScrollIndicator={true}
                     >
                       <Table borderStyle={{borderColor: '#C1C0B9'}}>
                              <Rows
                               data={state.tableChathamnine}
                               widthArr={state.widthArr}
                               style={[styles.row,{backgroundColor: '#F7F6E7'}]}
                               textStyle={styles.text}
                             />
                       </Table>
                     </ScrollView>
                   </View>
                 </ScrollView>
             {/*Table*/}
            </View>
             </Dialog>
           {/*openDialogChathamNine*/}

           {/*openDialogChathamTen*/}
                         <Dialog

                             animationType="fade"
                             contentStyle={
                                 {
                                     alignItems:'center',
                                     justifyContent: "center",
                                 }
                             }
                             onTouchOutside={ () => this.openDialogChathamTen(false) }
                             visible={ this.state.showDialogChathamTen }
                         ><Button
                             onPress={ () => this.openDialogChathamTen(false) }
                             style={ { marginTop: 3 } }
                         ><Icon name="arrow-back" /></Button>
                 {/*Table*/}
                 <View style={{width: width-70,height: 450,marginTop: 5}}>
                 <ScrollView horizontal={true}>
                   <View>
                     <Table borderStyle={{borderColor: '#C1C0B9'}}>
                       <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
                     </Table>
                     <ScrollView style={styles.dataWrapper}
                      showsVerticalScrollIndicator={true}
                     >
                       <Table borderStyle={{borderColor: '#C1C0B9'}}>
                              <Rows
                               data={state.tableChathamTEN}
                               widthArr={state.widthArr}
                               style={[styles.row,{backgroundColor: '#F7F6E7'}]}
                               textStyle={styles.text}
                             />
                       </Table>
                     </ScrollView>
                   </View>
                 </ScrollView>
             {/*Table*/}
            </View>
             </Dialog>
           {/*openDialogChathamTen*/}



           {/*openDialogChatham11*/}
                         <Dialog

                             animationType="fade"
                             contentStyle={
                                 {
                                     alignItems:'center',
                                     justifyContent: "center",
                                 }
                             }
                             onTouchOutside={ () => this.openDialogChathamEle(false) }
                             visible={ this.state.showDialogChathamEle }
                         ><Button
                             onPress={ () => this.openDialogChathamEle(false) }
                             style={ { marginTop: 3 } }
                         ><Icon name="arrow-back" /></Button>
                 {/*Table*/}
                 <View style={{width: width-70,height: 450,marginTop: 5}}>
                 <ScrollView horizontal={true}>
                   <View>
                     <Table borderStyle={{borderColor: '#C1C0B9'}}>
                       <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
                     </Table>
                     <ScrollView style={styles.dataWrapper}
                      showsVerticalScrollIndicator={true}
                     >
                       <Table borderStyle={{borderColor: '#C1C0B9'}}>
                              <Rows
                               data={state.tableChathamELE}
                               widthArr={state.widthArr}
                               style={[styles.row,{backgroundColor: '#F7F6E7'}]}
                               textStyle={styles.text}
                             />
                       </Table>
                     </ScrollView>
                   </View>
                 </ScrollView>
             {/*Table*/}
            </View>
             </Dialog>
           {/*openDialogChatham11*/}



           {/*openDialogChathamTw*/}
                         <Dialog

                             animationType="fade"
                             contentStyle={
                                 {
                                     alignItems:'center',
                                     justifyContent: "center",
                                 }
                             }
                             onTouchOutside={ () => this.openDialogChathamTw(false) }
                             visible={ this.state.showDialogChathamTw }
                         ><Button
                             onPress={ () => this.openDialogChathamTw(false) }
                             style={ { marginTop: 3 } }
                         ><Icon name="arrow-back" /></Button>
                 {/*Table*/}
                 <View style={{width: width-70,height: 450,marginTop: 5}}>
                 <ScrollView horizontal={true}>
                   <View>
                     <Table borderStyle={{borderColor: '#C1C0B9'}}>
                       <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
                     </Table>
                     <ScrollView style={styles.dataWrapper}
                      showsVerticalScrollIndicator={true}
                     >
                       <Table borderStyle={{borderColor: '#C1C0B9'}}>
                              <Rows
                               data={state.tableChathamTW}
                               widthArr={state.widthArr}
                               style={[styles.row,{backgroundColor: '#F7F6E7'}]}
                               textStyle={styles.text}
                             />
                       </Table>
                     </ScrollView>
                   </View>
                 </ScrollView>
             {/*Table*/}
            </View>
             </Dialog>
           {/*openDialogChathamTw*/}







        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  header: { height: 50, backgroundColor: '#537791' },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#E7E6E1' }
});
