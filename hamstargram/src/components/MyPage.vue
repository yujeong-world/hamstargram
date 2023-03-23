<template>
<section>
<div style="padding : 10px">
  <h4>팔로워</h4>
  <input placeholder="?" />
  <div class="post-header" v-for="(a,i) in follower" :key="i">
    <div class="profile" :style="`background-image:url(${a.image})`"></div>
    <span class="profile-name">{{a.name}}</span>
  </div>
</div>
</section>


</template>

<script>
import { onMounted, reactive, ref, toRefs, watch } from 'vue'
import axios from 'axios';

export default {
    name: 'MyPage',
    props:{
      one:Number,
    },
    setup(props){ //create 라이프싸이클과 비슷함., 컴포넌트 실행전에 이것먼저 해주세요.. 데이터 생성,조작
    let follower = ref([]); //ref() 실시간 재랜더링
    let {one} = toRefs(props);
    console.log(one.value);


    watch(one, ()=>{
      
    })
    let test = reactive({name:'kim'}); //원하는 데이터를 만듦,ref와 같은 기능
    //차이점은 보통 안에 오브젝트,어레이 자료형을 집어 넣음, 기능적으로 큰 차이X
    test;


    onMounted(()=>{
      axios.get('/follower.json').then((a)=>{
      follower.value = a.data
      })
    })


    return {follower}
    },
    data(){
      return{

      }
    },

}
</script>

<style scope> /* scope는 CSS가 여기에만 적용됨 */

</style>