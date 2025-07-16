<template>
    <MyContent :students="students"></MyContent>
    

    <div class="about">
        <h2>This is sbout page</h2>
    </div>

    

</template>
<script>
import MyContent from "@/components/MyContent.vue"


export default{

    components:{
        MyContent
    },

    data() {
        return{
            students:["ahmed","mohamed","mahmoud"]
        }
    }
}
</script>


