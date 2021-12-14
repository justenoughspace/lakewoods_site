<template>
  <div class="row g-0 footer">
    <div class="col-5">
      <div class="row g-0 mt-1" style="justify-content: center">
        <div class="col-11 line"></div>
        <div class="col-11 line"></div>
        <div class="col-11 line"></div>
        <div class="col-11 line"></div>
      </div>
    </div>
    <img class="fixed-bottom-logo col-2" src="@/assets/bottom_logo.png" />
    <div class="col-5">
      <div class="row g-0 mt-1" style="justify-content: center">
        <div class="col-11 line"></div>
        <div class="col-11 line"></div>
        <div class="col-11 line"></div>
        <div class="col-11 line"></div>
      </div>
    </div>
  </div>
</template>

<script></script>
<style scoped>
.footer {
  margin-top: 100px;
}

@media (max-width: 768px) {
  .footer {
    display: none;
  }
}

.line {
  border-top: 3px solid #ffffff;
  padding-bottom: 13px;
}

.fixed-bottom-logo {
  margin-bottom: 10px;
  height: 60px;
}

/* @media (max-width: 768px) {
  .fixed-bottom-logo {
    height: 40px;
  }
  .line {
    border-top: 2px solid #ffffff;
    padding-bottom: 8px;
  }
}
@media (max-width: 768px) {
  .fixed-bottom-logo {
    height: 30px;
  }
  .line {
    border-top: 2px solid #ffffff;
    padding-bottom: 6px;
  }
} */
</style>
