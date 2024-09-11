import {globalcolor} from 'public/globalcolor';
import {StyleSheet} from 'react-native';

const compstyle = StyleSheet.create({
  normaltxt: {
    fontSize: 16,
    color: globalcolor.comptext,
    fontWeight: 'normal',
    paddingTop: 0,
  },
  custominputview: {
    flexDirection: 'column',
  },
  inputinfotxt: {
    fontSize: 15,
    color: globalcolor.textcolor,
    fontWeight: '400',
    marginTop: 10,
    marginLeft: 20,
  },
  inputview: {
    flexDirection: 'row',
    borderWidth: 0.6,
    height: 45,
    // flex:1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 5,
    borderColor: globalcolor.inputbordercolor,
    backgroundColor: globalcolor.inputbackgroundcolor,
  },
  inputleftimg: {
    height: 22,
    width: 22,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 0,
    alignSelf: 'center',
    resizeMode: 'contain',
    //backgroundColor:'blue'
  },
  inputleftImage: {
    height: 17,
    position: 'absolute',
    width: 17,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 8,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  input: {
    flex: 1,
    color: globalcolor.inputtextcolor,
    //marginTop:0,
    marginLeft: 5,
    marginRight: 5,
    height: 45,
    fontSize: 14,
    fontWeight: '400',
    width: '100%',
  },
  errorinfotxt: {
    fontSize: 12,
    color: globalcolor.errorcolor,
    fontWeight: 'normal',
    marginTop: 2,
  },
});

export default compstyle;
