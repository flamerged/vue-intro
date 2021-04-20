Vue.createApp({
  data() {
    return {
      output: "",
      secondOutput: "",
    };
  },
  methods: {
    alertUser() {
      alert("hello world");
    },
    changeOutput(event) {
      this.output = event.target.value;
    },
    changeOutput2(event) {
      this.secondOutput = event.target.value;
    },
  },
}).mount("#assignment");
