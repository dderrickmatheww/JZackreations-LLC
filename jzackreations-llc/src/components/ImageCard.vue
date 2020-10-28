<template>
<div class="col-3 justify-content-center imageContainer">
  <div class="card">
    <img class="card-img-top" :src=image :UID=UID alt="Image could not render.">
    <div class="card-body">
      <h5 class="card-title">Card title</h5> 
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "ImageCard",
  props: {
    image: String,
    UID: String
  },
  computed: {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.imageContainer {
  padding: 5px,
}
h3 {
  margin: 40px 0 0;
}
</style>
