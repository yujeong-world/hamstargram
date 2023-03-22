<template>
  <div @click="fire" :class="필터 + ' filter-item'" :style="{backgroundImage : `url(${이미지})`}">
    <slot></slot>
    </div> 
  <!-- filter-item에 스페이스바를 넣는 이유는 클래스명 여러개 쓸때의 규칙이기 때문 -->
</template>

<script>
export default {
  name:"FiterBox",
  methods: {
    fire(){
      this.emitter.emit('userFilter', this.필터)
      //다른 컴포넌트에 데이터를 전송하는 코드
    }
  },
  props:{
    이미지:String,
    필터:String,
  }
}
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
</style>