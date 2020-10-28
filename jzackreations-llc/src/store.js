import Vue from "vue";
import Vuex from "vuex";
import Convert from "xml-js";

Vue.use(Vuex);

const defaultURL = "https://s3.us-east-1.amazonaws.com/jzackreationsllc/";

export default new Vuex.Store({
  state: {
    currentImage: "",
    allImages: []
  },
  actions: {
    async getAllImages(state) {
      //Node fetch returns XML from AWS S3 Bucket
      await fetch(defaultURL, { Host: "s3.us-east-1.amazonaws.com", Accept: 'application/xml' })
      .then((respone) => respone.text())
      .then(async (data) => {
        //Parsed to JSON to display data
        let jsonData = JSON.parse(Convert.xml2json(data, { compact: true, spaces: 4 }));
        let dataObj = {};
        let imageData = jsonData.ListBucketResult.Contents.map((S3Entry) => {
          if (S3Entry.Key) {
            return {
              URL: defaultURL + S3Entry.Key._text,
              UID: S3Entry.ETag._text
            };
          }
        });
        imageData.splice(0, 1);
        dataObj["imageData"] = imageData;
        console.log(imageData);
        state.commit("setAllImages", imageData);
      })
      .catch((error) => {
        console.log(error.message);
      });
    }
  },
  mutations: {
    setCurrentImage(state, payload) {
      state.currentImage = payload;
    },
    setAllImages(state, payload) {
      state.allImages = payload;
    }
  }
});
