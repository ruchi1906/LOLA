import {Platform} from 'react-native';
import Globals from './Globals';

let url = '';
    const api =(lang)=>{
      
        lang === 'Arabic'
        ? url = 'https://www.baqala.me/ar/mobileservices/' 
        : url = 'https://webservices.baqala.me/mobileservices/';
        return url;
    }

exports.api = api;

