<template>
  <div class="wrapper-form" @click="$emit('close')">
    <div @click.stop class="form">
      <input type="text" placeholder="USERNAME" v-model="username" />
      <input type="password" placeholder="PASSWORD" v-model="password" />
      <button @click="sendForm()">SEND</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    sendForm() {
      if (!this.username || !this.password) {
        return alert("Не все поля заполнены!");
      }
      this.$store.dispatch("signIn", {
        username: this.username,
        password: this.password,
      });
    },
  },
};
</script>

<style scoped>
.wrapper-form {
  position: absolute;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form {
  width: 300px;
  background: #1a1d24;
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
.form input {
  border: none;
  margin-bottom: 20px;
  font-size: 20px;
  padding: 10px 5px;
  background: #393e48;
  color: #c4c4c4;
  outline: none;
}
.form button {
  margin: 0 auto;
  cursor: pointer;
  width: 30%;
  border: none;
  font-size: 15px;
  font-weight: 600;
  padding: 10px 5px;
  background: #f4cc3e;
  color: #000;
  word-break: break-all;
}

@media (max-width: 425px) {
  .form {
    width: 90%;
  }
}
</style>