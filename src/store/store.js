// import { createStore } from 'vuex';


// export default createStore({
//     state:{
//         mbMenuData : [{
//             menuType: 'S',
//             mainText: 'SHOP',
//             mainLink: '',
//             subArr: [{
//                 link: '#',
//                 title: 'ALL PRODUCTS'
//               },
//               {
//                 link: '#',
//                 title: 'NEWBORN'
//               },
//               {
//                 link: '#',
//                 title: 'BABY'
//               },
//               {
//                 link: '#',
//                 title: 'FAMILY'
//               },
//               {
//                 link: '#',
//                 title: 'BATH GOODS'
//               },
//               {
//                 link: '#',
//                 title: 'PRESENTS'
//               }
//             ]
//           },
//           {
//             menuType: 'S',
//             mainText: 'ABOUT',
//             mainLink: '',
//             subArr: [{
//                 link: '#',
//                 title: 'BRAND STORY'
//               },
//               {
//                 link: '#',
//                 title: 'WHO WE ARE'
//               },
//               {
//                 link: '#',
//                 title: 'MAKE A WISH'
//               },
//               {
//                 link: '#',
//                 title: 'PRESS'
//               },
//             ]
//           },
//           {
//             menuType: 'S',
//             mainText: 'TRUST',
//             mainLink: '',
//             subArr: [{
//                 link: '#',
//                 title: 'FOOD GRADE'
//               },
//               {
//                 link: '#',
//                 title: 'PENTACERA™'
//               },
//               {
//                 link: '#',
//                 title: 'BABY SKINCARE'
//               },
//               {
//                 link: '#',
//                 title: 'CERTIFICATIONS'
//               },
//               {
//                 link: '#',
//                 title: 'INGREDIENT'
//               },
//             ]
//           },
//           {
//             menuType: 'A',
//             mainText: 'STOCKISTS',
//             mainLink: 'a.html',
//             subArr: []
//           },
//           {
//             menuType: 'A',
//             mainText: 'REVIEW',
//             mainLink: 'b.html',
//             subArr: []
//           },
//           {
//             menuType: 'S',
//             mainText: 'BENEFITS',
//             mainLink: '',
//             subArr: [{
//                 link: '#',
//                 title: 'EVENTS'
//               },
//               {
//                 link: '#',
//                 title: 'MEMBERS'
//               },
//             ]
//           }
//         ]
//     },
//     actions:{},
//     mutations:{},
//     getters:{
//         getmbMenuData(state){
//             // console.log('?', state) // 데이터넘어옴
//             return state.mbMenuData;
//           },
//     }
// })


import { createStore } from 'vuex';
import mbDivStore from './modules/mbDivstore';

export default createStore({
  modules: {
    mbDivStore
  }
})








