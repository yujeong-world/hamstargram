<template>
<!-- <div>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li>Next</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container :게시물="게시물"></Container>

  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
 </div> 
 </div> -->
 <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li @click="step++" v-if="step==1">Next</li>
      <li @click="publish" v-if="step==2">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>


  <!--<h4>안녕 {{$store.state.name}}</h4>
  <h4>나이증가 {{$store.state.age}}</h4>
  <button @click="$store.commit('이름변경')">이름바꾸기</button>
  <button @click="$store.commit('나이더하기')">나이 1씩증가</button>
  <p>{{$store.state.more}}</p>
  <button @click="$store.dispatch('getData')">더보기버튼</button>

  <p>{{now()}} {{카운터}}</p>
  <p>{{now2}} {{카운터}}</p> computed는 ()소괄호 안씀 
  <button @click="카운터++">버튼</button>-->


  <Container @write="작성한글=$event" :게시물="게시물" :step="step" :이미지="이미지" :filterSelect="filterSelect"/>
  <!-- <button @click="more">더보기</button>
  <button @click="moreHamzzi">햄스터사진더보기</button> -->

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
 </div>
<!-- <p>{{age}}{{name}}</p> -->
<!-- <div v-if="step==0">내용0</div>
<div v-if="step==1">내용1</div>
<div v-if="step==2">내용2</div>
<button @click="step=0">버튼0</button>
<button @click="step=1">버튼1</button>
<button @click="step=2">버튼2</button> -->
</template>

<script>
import Container from './components/Container.vue';
import InstaDate from './assets/instaData';
import axios from 'axios'; //axios라이브러리를 aiax로 요청하기 위해 설치
import {mapMutations, mapState} from 'vuex'


export default {
  name: 'App',
  data() {
    return {
      작성한글:'',
      step:3, //현재 상태를 보이게
      게시물 :InstaDate,
      더보기 : 0,
      햄찌더보기: 0,
      이미지:'',
      filterSelect:'',
      카운터:0
    }
  },
  components: {
    Container:Container,
    
  },
  methods: {
    ...mapMutations(['setMore', '좋아요']),
    now(){ //methods 함수는 사용할 때마다 실행됨
      return new Date;
    },
    more(){
      axios.get(`https://codingapple1.github.io/vue/more${this.더보기}.json`)
      .then((결과)=>{
        //요청성공시 실행할 코드
        console.log(결과.data);
        this.게시물.push(결과.data);
        this.더보기++;
      })
    },
    moreHamzzi(){
      axios.get(`https://raw.githubusercontent.com/yujeong-world/myVue/main/moreData${this.햄찌더보기}.json`)
      .then((햄스)=>{
        /* console.log(햄스.data); */
        this.게시물.push(햄스.data);
        this.햄찌더보기++;
      })
    },
    upload(e){
      let uploadFaile =e.target.files;
      console.log(uploadFaile[0].type);
      let url = URL.createObjectURL(uploadFaile[0]);
      /* console.log(url); */
      this.이미지=url;
      this.step = 1;

    },
    publish(){
      var 내게시물 = {
        name : "Yujeong-World",
        userImage: "https://placeimg.com/100/100/arch",
        postImage:this.이미지,
        likes: 80,
        date:new Date().toLocaleDateString(),
        liked:false,
        content:this.작성한글,
        filter: this.filterSelect
      }; 
      this.게시물.unshift(내게시물);
      this.step=0; //메인페이지로 돌아오게
    },
    changeName(){
      this.$store.commit('이름변경');
    }
    
  },
  mounted() {
    this.emitter.on('userFilter', (a)=>{
      console.log(a);
      this.filterSelect=a;
      /* console.log(this.filterSelect); */
      console.log(this.$store.state);
    })
    // 'userFilter'이라는 이벤트를 발사하면 함수를 실행해주세요.a는 이벤트 발사할 때 들어있던 데이터를 의미함
  },
  computed:{
/*     now2(){ //computed는 뷰 파일이 처음 로드되었을 때 한번 실행하고 값을 간직함. 간직했던 값을 뱉어줌, 계산결과저장용 함수
    //자원절약용으로...바뀌지 않는 것들을 저장.
      return new Date;
    } */
    name(){ // 그냥 state 하나 꺼내 쓸 때도 computed 안에 사용하면 편할 수도
      return this.$store.state.name //computed함수는 꼭 retrun을 사용해야 함..!!!
    },
    //mapState함수는 vuex state를 한번에 꺼내 쓰기위한 함수
    ...mapState(['name', 'age', 'likes']),

  },
}
</script>

<style>
@import './assets/main.css';

body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
/* .block{
  display: block;
} */
</style>
