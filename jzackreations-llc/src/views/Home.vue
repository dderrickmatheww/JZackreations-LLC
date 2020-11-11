<template>
  <div class="home container-fluid">
    <img alt="JZackreation's logo" src="../assets/logo.jpg" />
    <div v-if="this.images.length > 0" class="row justify-content-center">
      <ImageCard v-for="(image, index) in images" :key="index" :image="image.URL" :price="image.Price" :title="image.Title" :UID="image.UID" />
    </div>
    <div v-else class="row justify-content-center">
      Loading...
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ImageCard from "@/components/ImageCard.vue";
import { mapState } from 'vuex'; 

export default {
  name: "Home",
  components: {
    ImageCard
  },
   computed: {
    ...mapState({
        images: state => state.allImages,
        currentImage: state => state.currentImage
      }),
  }
};
</script>

<style scoped>
  .image-rows {
    width: 100%;
  }
</style>
