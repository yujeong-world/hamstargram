<template>
  <section>
    <div v-if="step==0">
      <Post :게시물="게시물[i]" v-for="(a,i) in 게시물" :key="i" :filterSelect='filterSelect'></Post>
    </div>


<div v-if="step==1">
    <!-- 필터선택페이지 -->
  <div class="upload-image" :style="`background-image : url(${이미지})`" :class="filterSelect"></div>
  <div class="filters">
    <FilterBox :필터="필터" :이미지="이미지" v-for="필터 in instaFilter" :key="필터">
      
      {{필터}}
    </FilterBox>
  </div>
</div>
<div v-if="step==2">
    <!-- 글작성페이지 -->
  <div class="upload-image" :style="`background-image : url(${이미지})`" :class="filterSelect"></div>
  <div class="write" v-if="step==2">
    <textarea @input="$emit('write', $event.target.value)" class="write-box">write!</textarea>
  </div>
</div>
<div v-if="step==3">
<MyPage :one='1'></MyPage>
</div>

  </section>
</template>

<script>
import FilterBox from './FilterBox.vue'
import Post from './Post.vue'
import MyPage from './MyPage.vue'

export default {
    name:'Container',
    data() {
        return {
            instaFilter : [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
"inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
"reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
        }
    },
    components:{
        Post:Post,
        FilterBox,
        MyPage
        
        
    },
    props:{
      게시물 : Array,
      step:Number,
      이미지:String,
      filterSelect:String,
    },
}
</script>

<style>
.upload-image{
  width: 400px;
  height: 400px;
  background-size: cover;
  background-position : center;
}
</style>