<template>
  <button class="button-container">
    <img src="./wsp.png" alt="" />
    <a
      href="https://api.whatsapp.com/send/?phone=5491122626706&text&type=phone_number&app_absent=0"
      >Click para contactarnos!</a
    >
  </button>
</template>

<style scoped>
.button-container {
  border-radius: 15px;
  margin: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: #0dc143;
  color: white;
  font-size: 20px;
}
.button-container img {
  width: 60px;
  margin: 0 10px 0 4px;
  border-radius: 15px;
}
</style>
