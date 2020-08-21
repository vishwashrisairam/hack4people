import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Auth : {
        screens : {
          Login:{
            screens:{
              Login :'login'
            }
          },
          Register:{
            screens:{
              Register:'register'
            }
          }
        }
      },
      Root: {
        screens: {
          TabOne: {
            screens: {
              Scan: 'one',
            },
          },
          TabTwo: {
            screens: {
              Redeem: 'two',
            },
          },
          TabThree: {
            screens: {
              Profile: 'three',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
