import React, {Component} from 'react';
import {
    StyleSheet,
    ScrollView,
    Text,
    Alert,
    TextInput,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import CheckBox from 'react-native-checkbox';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../common/header';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {Picker} from 'react-native-picker-dropdown';
import styles from '../../styles/Registerstyles';

class MyProfile extends Component {
    constructor(props) {
        super(props);
        console.log(JSON.stringify(props));
        this.state = {
            isDateTimePickerVisible: false,
            firstname: '',
            lastname: '',
            email: '',
            mobile_No: '',
            password: '',
            gender: '',
            terms_condition: true,
            loading: false,
            Language: '',
            Birthdate: 'Birth Date',
            login1: {},
            genderList: [],
            LanguageList: []
          }
    }

    componentDidMount() {
        this.getGender();
        this.getLanguage();
      }
    
      _showDateTimePicker = () => this.setState({isDateTimePickerVisible: true});
    
      _hideDateTimePicker = () => this.setState({isDateTimePickerVisible: false});
    
      getAge(birthDateString) {
        var today = new Date();
        var birthDate = new Date(birthDateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        return age;
      }
    
      _handleDatePicked = (date) => {
    
        this._hideDateTimePicker();
        //  let formattedDate = new Date(date).toLocaleDateString();
        let birthdate = (date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate());
    
        if (this.getAge(date) < 13) {
          Alert.alert("Age limit is 13");
        } else {
          this.setState({Birthdate: birthdate});
        }
    
      };
    
      getGender() {
    
        const url = 'http://lets-dev-api-002.azurewebsites.net/api/MasterData/GetGenders';
        this.setState({loading: true});
        fetch(url, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
            body: JSON.stringify({"searchFilter": ""})
          })
          .then(response => response.json())
          .then(res => {
            console.log(JSON.stringify(res));
            this.setState({genderList: res});
          })
          .catch(error => {
            // this.setState({loading: false});
            console.log('error:' + (error));
    
          });
    
      }
    
      getLanguage() {
    
        const url = 'http://lets-dev-api-002.azurewebsites.net/api/MasterData/GetLanguages';
    
        fetch(url, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
            body: JSON.stringify({"searchFilter": ""})
          })
          .then(response => response.json())
          .then(res => {
            console.log(JSON.stringify(res));
            this.setState({
              LanguageList: res,
              loading: false
            });
          })
          .catch(error => {
             this.setState({loading: false});
            console.log('error:' + (error));
    
          });
    
      }
    
      updateGender = (gender) => {
        this.setState({gender: gender})
      }

    render() {
        return (

            <View style={{
                flex: 1
            }}>

                <Header
                    title={'MY PROFILE'}
                    barIcon={() => {
                    this
                        .props
                        .navigation
                        .navigate("DrawerOpen")
                }}
                    back={() => {
                    this
                        .props
                        .navigation
                        .goBack(null)
                }}/>

<ScrollView contentContainerStyle={{
          width: window.width
        }}>
          <View style={styles.logoBg}>
                            <Icon style={{
                        color: '#818285',
                        fontWeight: 'bold',
                        fontSize: 80,
                        marginTop: 20
                    }} name = "user-circle"></Icon>
          </View>

          <View style={styles.ContainerBg}>
            <View style={{
              alignItems: 'center',
             
            }}>

            <View style = {{flexDirection : 'row'}}>

                <Icon name = "user" size = {20} style = {{marginTop : 15,marginLeft : 10}}/>
              <TextInput
                ref="firstname"
                onChangeText={(text) => this.setState({firstname: text})}
                style={styles.TxtIP}
                height={50}
                left={25}
                width={'80%'}
                returnKeyType = "next"
                onSubmitEditing=
                {() => this.refs['lastname'].focus()}
                underlineColorAndroid={'transparent'}
                placeholderTextColor='#818285'
                placeholder="First Name"/>

                </View>

              <View style ={styles.borderBg}></View>
            </View>

            <View style={{
              alignItems: 'center'
            }}>
              <View style = {{flexDirection : 'row'}}>

                <Icon name = "user" size = {20} style = {{marginTop : 15,marginLeft : 10}}/>
           
              <TextInput
                ref="lastname"
                onChangeText={(text) => this.setState({lastname: text})}
                style={styles.TxtIP}
                height={50}
                left={25}
                width={'80%'}
                returnKeyType = "next"
                onSubmitEditing=
                {() => this.refs['mobile_No'].focus()}
                underlineColorAndroid={'transparent'}
                placeholderTextColor='#818285'
                placeholder="Last Name"/>
                 </View>
              <View style ={styles.borderBg}></View>
              </View>
           

            <View style={{
              alignItems: 'center'
            }}>
             <View style = {{flexDirection : 'row'}}>

                <Icon name = "phone" size = {20} style = {{marginTop : 15,marginLeft : 10}}/>
           
              <TextInput
                ref="mobile_No"
                onChangeText={(text) => this.setState({mobile_No: text})}
                style={styles.TxtIP}
                height={50}
                left={25}
                width={'80%'}
                underlineColorAndroid={'transparent'}
                placeholderTextColor='#818285'
                returnKeyType = "next"
                onSubmitEditing=
                {() => this.refs['email'].focus()}
                keyboardType='phone-pad'
                placeholder="Phone Number"/>
                 </View>
              <View style ={styles.borderBg}></View>
            </View>

            <View style={{
              alignItems: 'center'
            }}>
             <View style = {{flexDirection : 'row'}}>

                <Icon name = "envelope" size = {20} style = {{marginTop : 15,marginLeft : 10}}/>
           
              <TextInput
                ref="email"
                onChangeText={(text) => this.setState({email: text})}
                style={styles.TxtIP}
                height={50}
                left={25}
                width={'80%'}
                returnKeyType = "next"
                onSubmitEditing=
                {() => this.refs['Password'].focus()}
                underlineColorAndroid={'transparent'}
                placeholderTextColor='#818285'
                keyboardType='email-address'
                placeholder="Email"/>
                </View>
              <View style ={styles.borderBg}></View>
            </View>

            <View style={{
              alignItems: 'center'
            }}>
             <View style = {{flexDirection : 'row'}}>

                <Icon name = "key" size = {20} style = {{marginTop : 15,marginLeft : 10}}/>
           
              <TextInput
                ref="Password"
                onChangeText={(text) => this.setState({password: text})}
                style={styles.TxtIP}
                height={50}
                left={25}
                width={'80%'}
                secureTextEntry={true}
                returnKeyType = "next"
                underlineColorAndroid={'transparent'}
                placeholderTextColor='#818285'
                placeholder="Password"/>
                </View>
              <View style ={styles.borderBg}></View>
            </View>

            <TouchableOpacity
              style={{
              height: 50,
              marginTop: 15,
              
            }}
              onPress={this._showDateTimePicker}>

                <View style = {{flexDirection : 'row'}}>
                <Icon name = "birthday-cake" size = {20} style = {{marginTop : 5,marginLeft : 30}}/>
              <Text
                style={{
                marginLeft: 25,
                color: '#818285',
                fontSize: 20,
                marginBottom: 10
              }}>{this.state.Birthdate}</Text>
              </View>
              <View style ={styles.borderBg}></View>
            </TouchableOpacity>
            <DateTimePicker
              isVisible={this.state.isDateTimePickerVisible}
              onConfirm={this._handleDatePicked}
              onCancel={this._hideDateTimePicker}/>

            <View
              style={{
              alignItems: 'center',
              flex: 1,
              width: '100%',
              
            }}>
             <View style = {{flexDirection : 'row'}}>

            <Icon name = "genderless" size = {20} style = {{marginTop : 13,marginLeft : 10}}/>
            
            <View style = {{marginLeft : 5,width : '80%',height : 50}}>
              {this.state.genderList.length !== 0
                ? <View
                    style={{
                    backgroundColor: 'white',
                    marginTop : 0
                   // alignSelf: 'stretch',
                   // margin: 20
                  }}>
                    <Picker
                      selectedValue={this.state.gender}
                      onValueChange={(gender) => {
                      console.log(gender);
                      this.setState({gender})
                    }}
                      mode="dropdown"
                      style={{
                      alignSelf: 'stretch',
                      color: 'black',
                      height : 50
                      //fontSize: 15
                    }}>
                      {this
                        .state
                        .genderList
                        .map(function (item, i) {
                          return (<Picker.Item
                            key={i}
                            style={styles.TxtIP}
                            label={item.description}
                            value={item.genderID}/>);
                        })
}

                    </Picker>
                  </View>

                : null
}
</View>
</View>
              <View style ={styles.borderBg}></View>
            </View>

            <View style={{
              alignItems: 'center'
            }}>
             <View style = {{flexDirection : 'row'}}>

            <Icon name = "language" size = {20} style = {{marginTop : 13,marginLeft : 10}}/>
            
            <View style = {{marginLeft : 5,width : '80%',height : 50}}>
              {this.state.LanguageList.length !== 0
                ? <View
                    style={{
                    backgroundColor: 'white',
                    //alignSelf: 'stretch',
                    //margin: 20
                  }}>
                    <Picker
                      selectedValue={this.state.Language}
                      onValueChange={(Language) => {
                      console.log(Language);
                      this.setState({Language})
                    }}
                      mode="dropdown"
                      style={{
                      alignSelf: 'stretch',
                      color: 'black',
                      height : 50
                    }}>
                      {this
                        .state
                        .LanguageList
                        .map(function (item, i) {
                          return (<Picker.Item
                            key={i}
                            style={styles.TxtIP}
                            label={item.description}
                            value={item.languageID}/>);
                        })
}

                    </Picker>
                  </View>

                : null
}
</View>
</View>
              <View style ={styles.borderBg}></View>
            </View>

          </View>

          <View
            style={{
            flexDirection: 'row',
            marginTop: 10,
            width: '80%',
            marginLeft: 40
          }}>

            <CheckBox
              label=''
              checked={this.state.terms_condition}
              onChange={(checked) => {
              if (this.state.terms_condition === false) {
                this.setState({terms_condition: true})
              } else {
                this.setState({terms_condition: false})
              }
            }}/>

            <Text
              style={{
              fontWeight: 'bold',
              color: 'black',
              marginLeft: 10,
              marginTop: 4
            }}>I Accept the</Text>
            <Text
              style={{
              marginTop: 4,
              marginLeft: 2
            }}>Terms and Conditions</Text>

          </View>

          <TouchableOpacity
            onPress={() => this.registerCall()}
            style={styles.BtnContainer}>
            <Text style={styles.BtnTxt}>EDIT</Text>
          </TouchableOpacity>

        </ScrollView>

            </View>

        );
    }
}

export default MyProfile;
