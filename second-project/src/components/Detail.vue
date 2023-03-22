<template>
<div>
<!--  {{$route.params.파라미터이름}} -->
<!-- 라우터 정보를 꺼내서 쓰는 경우 -->
{{$route.params.id}}
<section class="container mt-4">
    <h5>디테일 페이지입니다</h5>
    <p>{{블로그글[$route.params.id].title}}</p>
    <p>{{블로그글[$route.params.id].content}}</p>
</section>
<!-- 라우터를 통해 세부 페이지를 보여주려면? -->
<router-view to="/"></router-view>
</div>
</template>

<script>
export default {
    name : "Detail",
    data(){
        return{

        }
    },
    props: {
        블로그글:Array,
    }
}
</script>

<style>

</style>