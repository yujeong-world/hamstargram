/* import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      name:"유정",
      age:20,
      likes:50,
      좋아요눌렀니:false,
    }
  },
  mutations:{
    나이더하기(state, data){
      state.age += parseInt(data);
      console.log(state.age);
    },
    이름변경(state){
      state.name="Kim";
     // alert("함수동작");
     console.log(state.name);
    },
    likeIt(state){
      if(state.좋아요눌렀니==false){
        state.likes++;
        state.좋아요눌렀니=true;
      }else{
        state.likes--;
        state.좋아요눌렀니=false;
      }

    }
  }

})


export default store; */

import { createStore } from 'vuex'
import axios from 'axios'; //ajax라이브러리 활용

const store = createStore({
  state () {
    return {
      name:"MINSOO",         //스테이트에 데이터 보관
      age:100,
      likes:[40, 50, 60],
      좋아요눌렀니:false,
      more:{}
      
    }
  },
  mutations:{    //함수를 미리 정의, state의 상태처리하기 위해 사용
    나이더하기 (state, data) {
      state.age += parseInt(data);
    },
    이름변경 (state) {
      state.name ="KIM"
    },

    likeIt(state){

      if(state.좋아요눌렀니==false){
        state.likes ++;
        state.좋아요눌렀니=true;
      }else{
        state.likes --;
        state.좋아요눌렀니=false;

      }

    },
    setMore(state, data){
      state.more = data
    }
  },
  actions:{   //ajax 비동기적 자바스크립트 처리 방법, 
    //데이터 가지고 오기 get
/*     데이터가지고오기(){
      axios.get('https://codingapple1.github.io/vue/more0.json').then(()=>{
        //성공 할 경우 실행하는 코드
      })
    } */
    getData(context){ //context = $store
      axios.get('https://codingapple1.github.io/vue/more0.json').then((a)=>{
        console.log(a.data);
        context.commit('setMore', a.data)
      })
    }

  }

})

export default store