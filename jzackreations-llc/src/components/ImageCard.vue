<template>
<div class="col-md-3 justify-content-center imageContainer">
  <div class="card custom-card">
    <img class="card-img-top artImage" :src=image :UID=UID alt="Image could not render.">
    <div class="card-body">
      <h5 class="card-title custom-title" :value=title>{{title}}</h5> 
      <p class="card-text custom-text" :value=price >Price: {{price}} </p>
      <b-button v-b-modal="UID">View</b-button>
      <b-modal 
        :id="UID" 
        :title="title + ' - ' + price"
        centered
        header-bg-variant='dark'
        header-text-variant='light'
        header-border-variant='danger'
        body-bg-variant='secondary'
        footer-bg-variant='dark'
        footer-border-variant='danger'
        ok-only
        ok-variant='secondary'
      >
        <div class="modalImageContainer"> 
          <img class="artModalImage" :src=image alt="Image could not render." />
        </div>
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
p {
  color: black;
}
.modalImageContainer {
  width: 100%;
  background-color: #686868;
  border: 2px solid#cc1e1e;
  border-radius: 60px;
}
.modal {
  border: 2px solid#cc1e1e;
  border-radius: 60px;
}
h3 {
  margin: 40px 0 0;
}
h5 {
  align-content: center;
}
.artImage {
  min-height: 400px;
  border-radius: 60px;
  border-bottom: 2px solid#cc1e1e;
}
.artModalImage {
  width: 100%;
  border-radius: 60px;
  background-color: #686868;
}
.custom-card {
  background-color: #686868;
  border: 2px solid#cc1e1e;
  border-radius: 60px;
}
</style>
