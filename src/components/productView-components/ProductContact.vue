<template>
  <section class="wsp-contact">
    <a
      href="https://api.whatsapp.com/send/?phone=5491122626706&text={{}}&type=phone_number&app_absent=0"
    >
      <img src="../../assets/whatsapp.png" alt="" />
      Consultar sobre este producto</a
    >
  </section>
</template>

<style scoped>
a {
  display: flex;

  background-color: #0dc143;
  color: black;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 100%;
  height: 6vh;
  justify-content: center;
  align-items: center;
}
a img {
  height: 80%;
  margin: 0 2px;
}
.wsp-contact {
  position: fixed;
  bottom: 0px;
  width: 100vw;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  overflow: hidden;
}
</style>
