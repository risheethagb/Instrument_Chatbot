import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';


const config ={
  width: "600px",
  height: "650px", 
  floating: true,
};

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#EF6C00',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#EF6C00',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const styles = {
  wrappingheader: {
    textAlign: "center", 
    marginTop: "50px",
    backgroundColor: "lightblue"
  },
  wrappingp: {
    textAlign: "center", 
    marginTop: "10px",
    color: "#F28C28"
  }
}


class SimpleForm extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
      <div>
      <h1 style ={styles.wrappingheader}>History of Popular Instruments</h1>
      <p style ={styles.wrappingp}>Use the ChatBot at the bottom right of the screen to learn some history through an interactive experience! </p>
      </div>
      <ChatBot 
       steps={[
         {
          id:'intro', 
          message:'Welcome! How are you doing?', 
          trigger:'status',
         },
         {
            id:'status', 
            user:true, 
            validator: (value) => 
            {
                if (/^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/.test(value))
                  {
                    return true;
                  }
                else
                  {
                    return'Please input alphabet characters only.';
                  }
            },
            trigger: 'intro-q'
        },
         {
          id:'instrument', 
          options:[
            {value:'y', label:'Yes', trigger:'yes-response'},
            {value:'n', label:'No', trigger:'no-response'},
          ] 
         },
         {
          id:'intro-q', 
          message:'Do you play an instrument?', 
          trigger:'instrument',
         },
         {
          id:'yes-response', 
          message:'Great! Although we do not have information on every instrument. You can select a classical instrument to learn which country it originated from!',
          trigger: 'wos',
         },
         {
          id:'no-response', 
          message:'That is okay! Do you enjoy listening to any instruments?',
          trigger: 'listening-q',
         },
         {
         id: 'listening-q', 
         options:[
            {value:'y', label:'Yes', trigger:'yes-response'},
            {value:'n', label:'No', trigger:'no-2response'},
          ]
         },
         {
          id:'no-2response', 
          message:'Sorry to hear! Goodbye', 
          end: true,
         },
         {
          id:'wos', 
          message:'Wind or String Instruments?',
          trigger: 'wosoptions',
         },
         {
           id: 'wosoptions',
           options:[
            {value:'w', label:'Wind Instruments', trigger:'wind'},
            {value:'s', label:'String Instruments', trigger:'string'},
            ]
         },
         {
           id: 'wind',
            options:[
            {value:'f', label:'Flute', trigger:'f_info'},
            {value:'c', label:'Clarinet', trigger:'c_info'},
            {value:'b', label:'Bassoon', trigger:'b_info'},
            {value:'t', label:'Trumpet', trigger:'t_info'},
          ]
         },
         {
           id: 'string',
            options:[
            {value:'violin', label:'Violin', trigger:'violin_info'},
            {value:'viola', label:'Viola', trigger:'viola_info'},
            {value:'cello', label:'Cello', trigger:'cello_info'},
            {value:'bass', label:'Bass', trigger:'bass_info'},
          ]
         },
         {
           id: 'f_info',
           message: 'The flute originated from China.',
           trigger: 'repeat', 
         },
         {
           id: 'c_info',
           message: 'The clarinet originated from Germany. ',
           trigger: 'repeat', 
         },
         {
           id: 'b_info',
           message: 'The bassoon originated from Italy.',
           trigger: 'repeat', 
         },
         {
           id: 't_info',
           message: 'The trumpet originated from Peru.',
           trigger: 'repeat', 
         },
         {
           id: 'violin_info',
           message: 'The violin originated from Italy',
           trigger: 'repeat', 
         },
         {
           id: 'viola_info',
           message: 'The viola originated from Northern Italy.',
           trigger: 'repeat', 
         },
         {
           id: 'cello_info',
           message: 'The cello originated from Northern Italy',
           trigger: 'repeat', 
         },
         {
           id: 'bass_info',
           message: 'The bass originated from Western Europe',
           trigger: 'repeat', 
         },
         {
           id: 'repeat',
           message: 'Do you want to find out the origin of any more instruments?',
           trigger: 'again',
         },
         {
           id: 'again',
           options:[
            {value:'y', label:'Yes', trigger:'wos'},
            {value:'n', label:'No. I am good for now', trigger:'no-2response'},
            ]
         },
        ]}
        {...config}
      />
      </ThemeProvider>
    );
  }
       
}

export default SimpleForm;