<template>
  <MyContent
    :students="students"
    @updateactive="changeactive"
    :isactive="isactive"
  ></MyContent>
  <div class="mymain">
    <h2>this my main page</h2>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti officia,
      similique, dolore illum nisi nulla natus pariatur facere assumenda
      voluptatum commodi quod harum accusamus. Error atque ipsam maxime unde
      velit.
    </p>
  </div>
</template>

<script>
import MyContent from "@/components/MyContent.vue";
export default {
  name: "myname",
  components: {
    MyContent,
  },
  methods: {
    changeactive() {
      this.isactive = !this.isactive;
    },
  },
  data() {
    return {
      students: ["marwa", "menna", "doaa"],
      isactive: true,
    };
  },
};
</script>
<style scoped lang="scss">
.mymain {
  h2 {
    color: red;
  }
  p {
    color: green;
  }
}
</style>
