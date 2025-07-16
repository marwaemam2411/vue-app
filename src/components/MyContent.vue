<template>
    

    <div class="mycontent">
        <ul>
            <li v-for="(student ,i) in students " :key="i">{{student }}

            </li>
        </ul>
    <p>{{isactive}}</p>
    <button @click="$emit('updateactive')">change prem</button>

    </div>
</template>
<script>


export default {
    emits:['updateactive'],
    props:["students","isactive"]
,
   


    
}
</script>
<style scoped>
ul{
    list-style: none;
    display: flex;
    gap: 20px;
}
</style>
