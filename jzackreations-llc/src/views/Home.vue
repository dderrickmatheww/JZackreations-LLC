<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div v-if="this.images.length > 0" class="row justify-content-center">
      <ImageCard v-for="(image, index) in images" :key="index" :image="image.URL" :UID="image.UID" />
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
        images: state => state.allImages
      }),
  }
};
</script>

<style scoped>
  .image-rows {
    width: 100%;
    align-content: 'center';
    justify-content: center;
  }
</style>
