<template>
    <section>
        <div>
            <img :src="블로그글[0].Image" alt="">
            <h5 @click="$router.push('./detali/0')">{{블로그글[0].title}}</h5>
            <p>{{블로그글[0].date}}</p>
            <p>{{블로그글[0].content}}</p>
        </div>
        <div>
            <img :src="블로그글[1].Image" alt="">
            <h5>{{블로그글[1].title}}</h5>
            <p>{{블로그글[1].date}}</p>
            <p>{{블로그글[1].content}}</p>
        </div>
        <div>
            <img :src="블로그글[2].Image" alt="">
            <h5>{{블로그글[2].title}}</h5>
            <p>{{블로그글[2].date}}</p>
            <p>{{블로그글[2].content}}</p>
        </div>
    </section>
<!--     <section>
        <div v-for="(a,i) in 블로그글" :key="i">
            <img :src="블로그글[i].Image" alt="">
            <h5>{{블로그글[i].title}}</h5>
            <p>{{블로그글[i].date}}</p>
            <p>{{블로그글[i].content}}</p>
        </div>
    </section> -->
</template>

<script>

export default {
    name:'BlogList',
    props:{
        블로그글: Array
    },
}
</script>

<style>

</style>