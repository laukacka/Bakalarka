export const loadFile = {
  methods: {
    loadFile: function (data) {
      if (data) {
        let suffix = '';
        if (typeof data === 'string') {
          let indexOfDot = data.lastIndexOf('.');
          suffix = data.slice(indexOfDot, data.length);
        } else {
          let indexOfDot = data.name.lastIndexOf('.');
          suffix = data.name.slice(indexOfDot, data.name.length);
        }
        if (suffix === '.arff' || suffix === '.csv' || suffix === '.json' || suffix === '.txt' || suffix === '.xls') {
          this.loadData(suffix);
          this.$store.dispatch("loadMembershipFunction", []);
          this.$store.dispatch("loadClusters", []);
          this.$swal({
            type: 'success',
            confirmButtonColor: '#1bd60b',
            allowOutsideClick: false,
            title: 'File was successfully loaded.'
          }).then((result) => {
            if (result.value) {
              this.$router.push("methods");
            }
          })
        } else {
          this.$swal({
            type: 'error',
            title: 'File has incorrect type!'
          });
          this.file = '';
          this.emitToParent();
        }
      } else {
        this.$swal({
          type: 'warning',
          title: 'No file found!'
        })
      }
    }
  }
};
