import { createRouter, createWebHistory } from "vue-router";
// createWebHistory는 해쉬태그없이 바꾸게해주는거 
const router = createRouter ({
  history: createWebHistory(),
  // 웹브라우저 주소에서 #id 이동하는 흔적을 남기지않음
  // routes : [{path:'/' 주소, name: '메뉴이동글자' component 바꿀 컴포넌트}]
  routes: [
    {
        path: '/',
        name: 'Home', 
        component: ''
    }
  ]
});
// router 라는 변수를 다른 파일에서 사용하기 위해
// router 변수 내보냄
// 여기서는 한개
export default router;