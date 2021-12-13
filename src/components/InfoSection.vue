<template>
  <div class="container main">
    <div class="upcoming-show row" style="justify-content: center">
      <img
        class="col-lg-6 col-sm-10 show-flyer"
        src="@/assets/cd_release.jpg"
      />
      <div class="col-6 mb-4">
        <div class="text-wrapper border sm-breakpoint">
          <h1 class="col-12 title">CD Release Show - Get Tickets Now</h1>
          <h2 class="col-12 subtitle">White Rabbit Cabaret - December 11</h2>
        </div>
        <div class="col-12 mt-5 row" style="justify-content: center">
          <button class="col-lg-12 col-sm-8 lakewoods-button">
            <a
              href="https://www.eventbrite.com/e/the-lakewoods-album-release-with-the-frog-brothers-and-j-elliott-tickets-209969553587"
              target="_blank"
              style="text-decoration: none; color: #ffffff"
              >Buy tickets</a
            >
          </button>
          <button class="col-lg-12 col-sm-8 lakewoods-button mb-4">
            <a
              href="https://thelakewoods.bandcamp.com/"
              target="_blank"
              style="text-decoration: none; color: #ffffff"
              >Pre-order album</a
            >
          </button>
        </div>
        <div></div>
      </div>
    </div>
    <div class="row" style="justify-content: center">
      <div class="col-6"></div>
      <anderson-player class="col-6" />
    </div>

    <!-- <div class="text-wrapper border mt-5">
      <h1 class="col-12 title">Live in Anderson - Out Now</h1>
    </div>

    <img
      class="col-6 mx-auto d-block album-image my-5"
      src="@/assets/live-in-anderson.jpg"
    /> -->
  </div>
</template>

<script>
import AndersonPlayer from "@/components/AndersonPlayer.vue";

export default {
  components: {
    AndersonPlayer: AndersonPlayer,
  },
};
</script>

<style scoped>
.main {
  text-align: center;
  margin-top: 2rem;
  color: #ffffff;
}

.album-image:hover {
  box-shadow: 0 0 10px;
  opacity: 70%;
}

.title {
  font-size: 2em;
  color: #ffffff;
}

.subtitle {
  margin-top: 2rem;
  font-size: 1.2em;
}

.show-flyer:hover {
  box-shadow: 0 0 10px;
  opacity: 90%;
}

.lakewoods-button {
  border-radius: 20px;
  width: 275px;
  height: 40px;
  background-color: transparent;
  border: 2px solid #ffffff;
  color: #ffffff;
  margin: 10px 0px;
  transition: 300ms;
  font-weight: 600;
}

.lakewoods-button:hover {
  background-color: rgb(231, 112, 0);
}

.text-wrapper {
  background-color: rgba(17, 17, 17, 0.7);
  padding: 20px;
}

@media (max-width: 1024px) {
  .title {
    font-size: 1.7em;
  }
  .subtitle {
    font-size: 1em;
  }
  .text-wrapper {
    padding: 10px;
  }
  .sm-breakpoint {
    display: none;
  }
}
@media (max-width: 768px) {
  .title {
    font-size: 1.2em;
    margin-top: 10px;
  }
  .subtitle {
    font-size: 0.7em;
    margin-bottom: 20px;
    margin-top: 20px;
  }
}

.image-details {
  background-color: rgba(17, 17, 17, 0.7);
  font-weight: 600;
}

.border {
  border: 2px solid #ffffff;
}
</style>
