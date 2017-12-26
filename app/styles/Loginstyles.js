import { StyleSheet } from 'react-native';



export default StyleSheet.create({
      Imgcontainer: {
          height:'100%',
          width:'100%',
      },
      VWcontainer: {
          height:'100%',
            // borderColor: 'blue',
            // borderWidth: 1,
          backgroundColor: '#F6F9FB',
          flex:1
      },
      SWcontainer: {
          alignItems: 'center',
          // borderColor: 'black',
          // borderWidth: 1,
          justifyContent: 'space-between',
          flex:1
      },

      SWcontainer123: {
          alignItems: 'center',
         // backgroundColor : 'green',
          // borderColor: 'black',
          // borderWidth: 1,
          width:'100%',
          flex :1,
      },
      TxtIP:{
          fontSize: 20,
          fontWeight: 'bold',
          left:5,
         // borderColor :'#d2d2d2',
         // borderWidth : 1,
          // top:10,
          color:'black'
      },
      TxtIPBorder: {
          borderColor: '#818285',
          borderWidth: 1,
          height:45,
          width:'80%',
          margin:10,
          alignItems: 'center',
          flexDirection: 'row',
        },
      BtnContainer: {
          backgroundColor:'#818285',
          borderColor: '#818285',
          borderWidth: 10,
          borderRadius:25,
          alignItems: 'center',
          margin:25,
          height:50,
          width:'80%',
      },
      BtnTxt: {
          color: '#ffffff',
          fontWeight: 'bold',
          fontSize: 25,
      },
      logoBg : {
        height : 100,
        marginTop:10,   
        marginBottom: 20,     
        //backgroundColor : 'green',
        alignItems :'center',
      },
      bigWhite: {
          color: '#818285',
          fontWeight: 'bold',
          fontSize: 45,  
          marginTop : 40,      
      },
      loader: {
          flex: 1,
          top:50,
          alignItems: 'center',     // center horizontally
          justifyContent: 'center', // center vertically
      },
      TxtFont:{
          color: 'honeydew',
          fontSize: 20,
          color :'#818285',
      },
      plusText:{
          left:20,
          alignItems: 'center',
          height:40,
          width:40,
          // borderWidth: 1, 
          // borderColor: 'white', 
          backgroundColor: 'red'
      },
      VWcontainer2:
      {
          alignItems:'flex-end',
          width:'100%',
          padding:20, 
          left:0,
          // height:'auto',
          // borderWidth: 1, 
          // borderColor: 'white', 
          backgroundColor: 'transparent',
          flexDirection: 'row',
          // alignItems: 'center'
      }
});
