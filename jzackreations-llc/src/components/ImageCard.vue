<template>
<div class="col-md-3 justify-content-center imageContainer">
  <div class="card custom-card">
    <img class="card-img-top artImage" :src=image :UID=UID alt="Image could not render.">
    <div class="card-body">
      <h5 class="card-title custom-title" :value=title>{{title}}</h5> 
      <p class="card-text custom-text" :value=price >Price: {{price}} </p>
      <b-button v-b-modal="UID">View</b-button>
      <b-modal 
        content-class="custom-card"
        :id="UID" 
        :title="title + ' - ' + price"
      >
          <img class="artModalImage" :src=image alt="Image could not render." />
      </b-modal>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "ImageCard",
  props: {
    image: String,
    UID: String,
    title: String,
    price: String
  },
  computed: {
  },
  data: () => ({
  }),
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.imageContainer {
  padding: 5px;
  margin: 5px;
  max-height: 100%;
  width: 100%;
}
h3 {
  margin: 40px 0 0;
}
.artImage {
  height: 400px;
  border-radius: 60px;
  border-bottom: 2px solid#cc1e1e;
}
.artModalImage {
  width: 100%;
  height: 400px;
}
.custom-card {
  background-color: #686868;
  border: 2px solid#cc1e1e;
  border-radius: 60px;
}
</style>
