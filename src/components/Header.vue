<template>
  <myForm v-if="activeForm" @close="openForm" />
  <div class="header">
    <button class="header__sign-up" @click="openForm()">SIGN UP</button>
  </div>
</template>

<script>
import myForm from "@/components/Form";

export default {
  data() {
    return {
      activeForm: false,
    };
  },
  components: {
    myForm,
  },
  methods: {
    openForm() {
      this.activeForm = !this.activeForm;
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  box-sizing: border-box;
  background: #393e48;
  padding: 10px 5%;
}
.header__sign-up {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  right: 5%;
  background: #7a7a7a;
  color: #fff;
  font-weight: 600;
}
</style>