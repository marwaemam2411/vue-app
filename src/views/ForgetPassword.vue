<template>
  <div class="ForgetPassword">
    <h2>ForgetPassword</h2>
    <input type="email" v-model="email" name="" id="" />
    <button @click="SendForgetPassword">Send</button>
  </div>
</template>
<script>
import swal from "sweetalert2";
export default {
  name: "ForgetPassword",
  data() {
    return {
      email: "",
    };
  },

  methods: {
    SendForgetPassword() {
      fetch("http://127.0.0.1:8000/api/forgetpassword", {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email: this.email }),
      })
        .then((response) => response.json())
        .then((data) => {
          swal.fire("massage", data.massage, "success");
        });
    },
  },
};
</script>
