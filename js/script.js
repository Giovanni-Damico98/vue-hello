const { createApp } = Vue;
createApp({
  data() {
    return {
      welcome: "Hello Vue!",
      imageUrl: "https://vuejs.org/images/logo.png",
      message: "Nice to meet you!",
    };
  },
  methods: {},
}).mount("#app");
