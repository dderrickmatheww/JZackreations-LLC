<template>
<div class="col-3 justify-content-center imageContainer">
  <div class="card">
    <img class="card-img-top artImage" :src=image :UID=UID alt="Image could not render.">
    <div class="card-body">
      <h5 class="card-title" :value=title>{{title}}</h5> 
      <p class="card-text" :value=price >Price: {{price}} </p>
      <b-button v-b-modal="UID">View</b-button>
      <b-modal :id="UID" :title="title + ' - ' + price">
          <img class="artModalImage" :src=image alt="Image could not render.">
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
    boolean: false
  }),
  methods: {
    async enableModel(url) {
      if(this.boolean) {
        this.boolean = false;
        await this.$store.commit('toggleModal', this.boolean);
      }
      else {
        this.boolean = true;
        await this.$store.commit('setCurrentImage', url);
        await this.$store.commit('toggleModal', this.boolean);
      }
    }
  },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.imageContainer {
  padding: 5px;
  margin: 5px;
  max-height: "100%";
}
h3 {
  margin: 40px 0 0;
}
.artImage {
  height: 400px;
}
.artModalImage {
  width: 100%;
  height: 500px;
}
</style>
