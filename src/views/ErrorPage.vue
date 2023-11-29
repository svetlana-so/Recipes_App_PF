<template>
  <h1>Page is not found</h1>
  <section class="error-container">
    <span class="four"><span class="screen-reader-text">4</span></span>
    <span class="zero"><span class="screen-reader-text">0</span></span>
    <span class="four"><span class="screen-reader-text">4</span></span>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,600,700');
@import url('https://fonts.googleapis.com/css?family=Catamaran:400,800');

.error-container {
  text-align: center;
  font-size: 106px;
  font-family: Catamaran, sans-serif;
  font-weight: 800;
  margin: 100px 15px;
}

.error-container > span {
  display: inline-block;
  position: relative;
}

.error-container > span.four {
  width: 136px;
  height: 43px;
  border-radius: 999px;
  background: linear-gradient(
      140deg,
      rgb(0 0 0 / 10%) 0%,
      rgb(0 0 0 / 7%) 43%,
      transparent 44%,
      transparent 100%
    ),
    linear-gradient(
      105deg,
      transparent 0%,
      transparent 40%,
      rgb(0 0 0 / 6%) 41%,
      rgb(0 0 0 / 7%) 76%,
      transparent 77%,
      transparent 100%
    ),
    linear-gradient(to right, #d89ca4, #e27b7e);
}

.error-container > span.four::before,
.error-container > span.four::after {
  content: '';
  display: block;
  position: absolute;
  border-radius: 999px;
}

.error-container > span.four::before {
  width: 43px;
  height: 156px;
  left: 60px;
  bottom: -43px;
  background: linear-gradient(
      128deg,
      rgb(0 0 0 / 10%) 0%,
      rgb(0 0 0 / 7%) 40%,
      transparent 41%,
      transparent 100%
    ),
    linear-gradient(
      116deg,
      rgb(0 0 0 / 10%) 0%,
      rgb(0 0 0 / 7%) 50%,
      transparent 51%,
      transparent 100%
    ),
    linear-gradient(to top, #99749d, #b895ab, #cc9aa6, #d7969e, #e0787f);
}

.error-container > span.four::after {
  width: 137px;
  height: 43px;
  transform: rotate(-49.5deg);
  left: -18px;
  bottom: 36px;
  background: linear-gradient(
    to right,
    #99749d,
    #b895ab,
    #cc9aa6,
    #d7969e,
    #e0787f
  );
}

.error-container > span.zero {
  vertical-align: text-top;
  width: 156px;
  height: 156px;
  border-radius: 999px;
  background: linear-gradient(
      -45deg,
      transparent 0%,
      rgb(0 0 0 / 6%) 50%,
      transparent 51%,
      transparent 100%
    ),
    linear-gradient(
      to top right,
      #99749d,
      #99749d,
      #b895ab,
      #cc9aa6,
      #d7969e,
      #ed8687,
      #ed8687
    );
  overflow: hidden;
  animation: bgshadow 5s infinite;
}

.error-container > span.zero::before {
  content: '';
  display: block;
  position: absolute;
  transform: rotate(45deg);
  width: 90px;
  height: 90px;
  background: linear-gradient(
      95deg,
      transparent 0%,
      transparent 8%,
      rgb(0 0 0 / 7%) 9%,
      transparent 50%,
      transparent 100%
    ),
    linear-gradient(
      85deg,
      transparent 0%,
      transparent 19%,
      rgb(0 0 0 / 5%) 20%,
      rgb(0 0 0 / 7%) 91%,
      transparent 92%,
      transparent 100%
    );
  background-color: transparent;
  left: 0;
  bottom: 0;
}

.error-container > span.zero::after {
  content: '';
  display: block;
  position: absolute;
  border-radius: 999px;
  width: 70px;
  height: 70px;
  left: 43px;
  bottom: 43px;
  background: #fdfaf5;
  box-shadow: -2px 2px 2px 0 rgb(0 0 0 / 10%);
}

.screen-reader-text {
  position: absolute;
  top: -9999em;
  left: -9999em;
}

@keyframes bgshadow {
  0% {
    box-shadow: inset -160px 160px 0 5px rgb(0 0 0 / 40%);
  }

  45% {
    box-shadow: inset 0 0 0 0 rgb(0 0 0 / 10%);
  }

  55% {
    box-shadow: inset 0 0 0 0 rgb(0 0 0 / 10%);
  }

  100% {
    box-shadow: inset 160px -160px 0 5px rgb(0 0 0 / 40%);
  }
}

html,
button,
input,
select,
textarea {
  font-family: Montserrat, Helvetica, sans-serif;
  color: #bbb;
}

h1 {
  font-size: 30px;
  text-align: center;
  margin: 30px 15px;
}
</style>
