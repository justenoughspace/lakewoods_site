<template>
  <div>
    <div class="header-section">
      <div class="row g-0" style="justify-content: center">
        <img
          id="logo"
          src="@/assets/TopLogo.png"
          class="mt-3 col-5"
          style="height: 100%"
          @click="navigate('home')"
        />
      </div>
      <button class="hamburger-menu">
        <span class="navbar-toggler-icon" @click="showMenu"></span>
      </button>
      <nav class="navbar navbar-light navbar-expand-lg">
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav mx-auto">
            <li class="navbar-item">
              <a class="nav-link" id="external-link" @click="navigate('home')"
                >HOME</a
              >
            </li>
            <li class="navbar-item">
              <a class="nav-link" id="external-link" @click="navigate('bio')"
                >BIO</a
              >
            </li>
            <li class="navbar-item">
              <a class="nav-link" id="external-link" @click="navigate('shows')"
                >SHOWS</a
              >
            </li>
            <li class="navbar-item">
              <a class="nav-link" id="external-link" @click="navigate('news')"
                >NEWS</a
              >
            </li>
            <li class="navbar-item">
              <a class="nav-link" id="external-link" @click="navigate('music')"
                >MUSIC</a
              >
            </li>
            <li class="navbar-item">
              <a class="nav-link" id="external-link" @click="navigate('merch')"
                >MERCH</a
              >
            </li>
            <li class="navbar-item">
              <a
                class="nav-link"
                id="external-link"
                @click="navigate('contact')"
                >CONTACT</a
              >
            </li>
          </ul>
        </div>
      </nav>
      <div v-if="menu_open" class="col-12-lg menu-mobile">
        <ul class="mobile-links" style="list-style: none">
          <li class="mobile-link">Home</li>
          <hr />
          <li class="mobile-link">Bio</li>
          <hr />
          <li class="mobile-link">Shows</li>
          <hr />
          <li class="mobile-link">News</li>
          <hr />
          <li class="mobile-link">Music</li>
          <hr />
          <li class="mobile-link">Merch</li>
          <hr />
          <li class="mobile-link">Contact</li>
          <hr />
        </ul>
      </div>
      <img id="rainbow" src="@/assets/Rainbow-band.png" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["blok"],
  data() {
    return {
      menu_open: false,
      smallNav: false,
    };
  },
  methods: {
    showMenu() {
      this.menu_open = !this.menu_open;
    },
    navigate(route) {
      this.$router.push(`/${route}`);
      console.log("route", `${route}`);
    },
  },
};
</script>

<style>
.header-section {
  text-align: center;
  background-color: rgb(23, 19, 19);
  position: relative;
}

@media (min-width: 992px) {
  .hamburger-menu {
    display: none;
  }
}
.hamburger-menu {
  position: absolute;
  right: 10px;
  top: 30px;
}
#logo {
  height: 150px;
  margin-bottom: 30px;
  cursor: pointer;
}

@media (max-width: 1024px) {
  #logo {
    margin-bottom: 0px;
  }
}
#external-link {
  font-size: 24px;
  color: #ffffff;
  padding: 0px 30px;
  cursor: pointer;
}
#rainbow {
  width: 100%;
}

.navbar {
  background-color: rgb(23, 19, 19);
}
</style>
