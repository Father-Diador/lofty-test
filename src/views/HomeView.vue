<template>
  <pageHeader />
  <div class="wrapper">
    <div class="block">
      <div class="box">A</div>
      <div class="box">B</div>
      <div class="box">C</div>
      <div class="box">A</div>
      <div class="box">B</div>
      <div class="box">C</div>
    </div>
  </div>
</template>

<script>
import pageHeader from "@/components/Header";

export default {
  components: {
    pageHeader,
  },
};
</script>

<style scoped>
.wrapper {
  background: #1a1d24;
  display: flex;
  justify-content: center;
}
.block {
  height: calc(100vh - 57px);
  display: grid;
  max-width: 1440px;
  width: 100%;
  grid-template-columns: repeat(3, auto);

  gap: 20px;
  padding: 20px;
  box-sizing: border-box;
}

.box {
  display: grid;
  place-items: center;
  background: #c4c4c4;
}
@media (max-width: 768px) {
  .block {
    grid-template-columns: repeat(2, auto);
  }
}

@media (max-width: 425px) {
  .block {
    grid-template-columns: repeat(1, auto);
  }
}
</style>
