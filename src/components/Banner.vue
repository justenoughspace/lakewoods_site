<template>
  <div class="banner row">
    <div class="banner-section">
      <h1 class="section-title">{{ section }}</h1>
    </div>
    <div class="row" style="justify-content: center">
      <div class="col-10">
        <p class="bio-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus nisi
          neque nobis nam ex voluptate iste necessitatibus illo, optio
          laboriosam. Tempora nesciunt quia sequi non veritatis laudantium illo
          nobis qui, odio quis provident error, reiciendis ducimus autem
          possimus facere iure molestiae dicta aliquam neque eum! Minima placeat
          explicabo, aperiam aliquid cumque possimus in reiciendis autem debitis
          suscipit magnam molestiae illo ullam nam vitae iste ut officia ducimus
          et vero eaque odio repudiandae rem! Delectus, corporis iste
          repellendus iusto, omnis tenetur blanditiis ullam placeat laboriosam
          molestiae minima voluptates. Qui, obcaecati? Dolor, tempora
          reprehenderit delectus assumenda perferendis libero at, et accusantium
          beatae saepe corporis, maiores facilis earum quibusdam neque sint vel
          nihil alias voluptate sapiente ducimus natus. Animi provident
          distinctio non dolore dolores id pariatur ipsum accusamus?
          Consequuntur pariatur earum quaerat sint odio laborum rerum reiciendis
          at nostrum distinctio sequi, repudiandae nam neque voluptate suscipit
          iusto inventore eum enim optio ex. Incidunt?
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    section: {
      type: String,
    },
  },
  data() {
    return {
      image: "@/assets/lakewoods-live-banner.png",
    };
  },
};
</script>

<style scoped>
.banner {
  display: flex;
  justify-content: center;
}

.banner-section {
  margin-top: 50px;
  background-image: url("../assets/lakewoods-live-banner.png");
  height: 300px;
  width: 90%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  /* background-attachment: fixed; */
  display: flex;
  justify-content: center;
  opacity: 40%;
}

@media (max-width: 768px) {
  .banner-section {
    height: 150px;
    margin-top: 10px;
  }
  .section-title {
    font-size: 70px !important;
    margin-top: 25px !important;
    margin-left: 10px;
  }
  .bio-text {
    margin-top: 20px !important;
  }
}

.section-title {
  margin-top: 50px;
  font-size: 150px;
  color: #ffffff;
  letter-spacing: 20px;
}

.bio-text {
  color: #ffffff;
  margin-top: 60px;
}
</style>
