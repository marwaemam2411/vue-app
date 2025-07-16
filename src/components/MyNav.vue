<template>
    <nav class="mynav">
    
        <div class=" logo">
          <img src="@/assets/nav.png" alt="">
            </div>
        <div class="links">
            
        <ul>
           <li v-for="link in links" :key="link">{{link}}</li>
        </ul>
        </div>
        <div class="btn">
            <button style="margin-right:10px">login</button>
            <button>signup</button>
        </div>
    </nav>
</template>
<script>


export default {
data(){
    return{
        logo:"mylogo",
        links:["link1","link2","link3","link4"],
    }
}




}
</script>


<style scoped >
.mynav{
    justify-content: space-between;
    align-items: center;
    display: flex;
}
img{
    width: 100px;
}
ul{
    justify-content: space-between;
    display: flex;
    list-style: none;
    gap: 20px;
}

</style>




