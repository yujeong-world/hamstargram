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


export default store;
 */
import axios from 'axios';
import { createStore } from 'vuex'


const store = createStore({
  state () {
    return {
      name:"Yujeong",         //스테이트에 데이터 보관
      age:20,
      likes:30,
      likesClicked:false,
      more:{}
    }
  },
  mutations:{    //함수를 미리 정의, state의 상태처리하기 위해 사용
    setMore(state, data){
      state.more= data
    },
    이름변경 (state) {
      state.name ="KIM"
    },
    나이더하기(state){
      state.age++;
    },
    좋아요(state){
      if(state.likesClicked==false){
        state.likes++;
        state.likesClicked=true;
      }else{
        state.likes--;
        state.likesClicked=false;
      }
    }
  },
  actions:{ //ajax 요청 하는 곳, 서버에서 데이터를 가져오고 싶을 때 \
    getData(context){
      axios.get('https://codingapple1.github.io/vue/more0.json').then((a)=>{
        console.log(a.data);
        context.commit('setMore', a.data); //state를 변경하려면 무조건 mutations를 거쳐야함! 뮤테이션에서
        //함수를 만들어 주고 axios에서 함수를 부르고 파라미터로 데이터를 보내줌!!

      })
    }

  },

})

export default store