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
      <img
        src="@/assets/insta_rgb.png"
        class="insta-icon"
        @click="goToInsta()"
      />
      <img
        src="@/assets/hamburger.svg"
        class="hamburger-menu"
        @click="showMenu()"
      />

      <nav class="navbar-expand-lg" style="margin-bottom: 10px">
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
      <div
        v-if="menu_open"
        class="col-12-lg menu-mobile"
        style="text-align: center"
      >
        <ul class="mobile-links" style="list-style: none">
          <li class="mobile-link" @click="navigate('home')">Home</li>
          <hr />
          <li class="mobile-link" @click="navigate('bio')">Bio</li>
          <hr />
          <li class="mobile-link" @click="navigate('shows')">Shows</li>
          <hr />
          <li class="mobile-link" @click="navigate('news')">News</li>
          <hr />
          <li class="mobile-link" @click="navigate('music')">Music</li>
          <hr />
          <li class="mobile-link" @click="navigate('merch')">Merch</li>
          <hr />
          <li class="mobile-link" @click="navigate('contact')">Contact</li>
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
      console.log("this", this.menu_open);
    },
    navigate(route) {
      this.$router.push(`/${route}`);
      console.log("route", `${route}`);
      this.menu_open = false;
    },
    goToInsta() {
      window.open("http://www.instagram.com/the.lakewoods");
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
  .insta-icon {
    width: 60px;
    height: 60px;
  }
}

.hamburger-menu {
  position: absolute;
  right: 10px;
  top: 30px;

  width: 40px;
  height: 40px;
  cursor: pointer;
}
.insta-icon {
  position: absolute;
  left: 30px;
  top: 35px;
  width: 40px;
  height: 40px;
  cursor: pointer;
}
#logo {
  height: 150px;
  margin-bottom: 30px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .insta-icon {
    left: 10px;
    width: 30px;
    height: 30px;
  }
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

.mobile-link {
  color: #ffffff;
  border-bottom: 1px solid #ffffff;
  padding: 5px 0;
  font-weight: bold;
  cursor: pointer;
}

.mobile-links {
  padding-left: 0;
}

hr {
  display: none;
}
</style>
