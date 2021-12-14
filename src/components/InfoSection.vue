<template>
  <div class="container main">
    <div class="upcoming-show row" style="justify-content: center">
      <img
        class="col-lg-6 col-sm-8 album-cover"
        src="@/assets/debut_cover.jpg"
        @click="navigate()"
      />
      <div class="col-lg-6 col-sm-10">
        <div class="text-wrapper border">
          <h1 class="col-12 title">The Lakewoods - Out Now</h1>
          <h2 class="col-12 subtitle" @click="navigate">
            Get a CD, cassette, or digital copy today!
          </h2>
          <ul class="col-12 track-list" style="padding-left: 0">
            <li>World Full of Lovers 3:13</li>
            <li>The Means to Break Your Heart 5:56</li>
            <li>Once You Leave 6:57</li>
            <li>I'm Not the One 2:41</li>
            <li>All I Need is You 5:16</li>
            <li>Hard For Me to Say 4:20</li>
            <li>Don't Turn Out the Lights 3:59</li>
            <li>Save My Love 5:22</li>
            <li>Down and Lonely 4:14</li>
            <li>Road to Nowhere 5:23</li>
            <li>The Last Lonely Man 5:03</li>
            <li>Into the Fire 5:24</li>
          </ul>
          <button
            class="col-lg-12 col-sm-8 lakewoods-button"
            style="margin-top: 30px"
          >
            <a
              href="https://thelakewoods.bandcamp.com/"
              target="_blank"
              style="text-decoration: none; color: #ffffff"
              >Get a Copy</a
            >
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import AndersonPlayer from "@/components/AndersonPlayer.vue";

export default {
  methods: {
    navigate() {
      window.open("https://thelakewoods.bandcamp.com/");
    },
  },
};
</script>

<style scoped>
.main {
  text-align: center;
  color: #ffffff;
  margin-top: 20px;
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
  font-size: 1.2em;
}

.subtitle:hover {
  text-decoration: underline;
  cursor: pointer;
}

.album-cover {
  max-height: 550px;
}
.album-cover:hover {
  box-shadow: 0 0 10px;
  cursor: pointer;
}

.lakewoods-button {
  border-radius: 20px;
  width: 275px;
  height: 40px;
  background-color: rgb(216, 104, 0);
  border: 2px solid #ffffff;
  color: #ffffff;
  margin: 10px 0px;
  transition: 300ms;
  font-weight: 600;
}

.lakewoods-button:hover {
  background-color: transparent;
}

.text-wrapper {
  background-color: rgba(17, 17, 17, 0.7);
  padding: 20px;
  min-height: 550px;
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
    margin-top: 30px;
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
  .track-list {
    font-size: 12px;
  }
  .text-wrapper {
    min-height: unset;
  }
}

.image-details {
  background-color: rgba(17, 17, 17, 0.7);
  font-weight: 600;
}

.border {
  border: 2px solid #ffffff;
}

.track-list {
  list-style: none;
  margin-top: 20px;
}
</style>
