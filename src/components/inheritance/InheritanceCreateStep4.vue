<template>
  <div>
    <div class="q">
      <!-- main page q -->
      <div class="q__lbl1">
        Contract address calculated:
      </div>
      <div class="q__backup">
        <a
          ref="backup"
          class="q__backup__link"
        >
          backup file
        </a>
        <div class="q__backup__note1">
          Important! Keep private. Lose it, lose access.
        </div>
      </div>
      <div class="q__contract">
        <div class="q__contract__lbl2">
          Fund this address to initialize contract
        </div>
        <img
          class="q__contract__qr"
          ref="q__contract__qr"
        >
        <div class="q__contract__addy">
          {{ address }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'; // state
import qrimage from 'qr-image';
import { inhertianceContract } from './../../bitcoin';

export default {
  name: 'InheritanceCreateStep4',
  data: () => ({
    address: 'Test'
  }),
  mounted () {
    this.redoPageContent();
  },
  updated () {
    this.redoPageContent();
  },
  computed: {
    ...mapGetters([
      'getContractValuesIC' // get all contract values
    ])
  },
  methods: {
    ...mapActions([]),
    redoPageContent () {
      try {
        // calculate contract
        const contract = this.calculateContract();
        // create backup link
        this.updateBackup(contract);
        // update local state
        this.address = contract.contractAddress;
        // updateQR
        this.updateQR(this.address);
      } catch (e) {
        console.log('Error trying to calculate contract info:');
        console.error(e);
        this.address = 'Keys provided are invalid';
      }
    },
    calculateContract () {
      const stored = this.getContractValuesIC;
      const contractParams = {
        days: stored.daysDelay,
        ownerWIF: stored.ownerKey,
        heirWIF: stored.heirKey,
        networkChoice: stored.networkChoice
      };
      const res = inhertianceContract(contractParams);
      return res;
    },
    updateBackup (contract) {
      // assemble all the data to back up
      const backupObject = contract;

      // back it up
      const data = 'text/json;charset=utf-8,' +
        encodeURIComponent(JSON.stringify(backupObject, null, 2));
      const a = this.$refs.backup;
      a.href = 'data:' + data;
      a.download = 'backup_inheritance.json';
    },
    updateQR (text) {
      // generate qr png image buffer
      const qr = qrimage.imageSync(text).toString('base64');
      // add the qr image at source for img element
      this.$refs.q__contract__qr.src = 'data:image/png;base64,' + qr;
    }
  }
};
</script>

<style scoped>
  .q {
    text-align: left;
    margin: 0vmin 2vmin;
  }
  .q__lbl1 {
    display: block;
    font-size: 3vmin;
    color: white;
    margin-right: 3vmin;
    margin-left: 5%;
    font-weight: bold;
  }
  .q__backup {
    margin-top: 6vmin;
    margin-bottom: 6vmin;
    text-align: center;
  }
  .q__backup__link {
    display: inline-block;
    /* margin: 0 auto; */
    /* width: auto; */
    text-decoration: none;
    font-size: 3vmin;
    line-height: 3vmin;
    color: white;
    background-color: orange;
    border: 0.3vmin solid white;
    border-radius: 3vmin;
    padding: 0.5vmin 2vmin;
  }
  .q__backup__note1 {
    display: block;
    font-size: 2vmin;
    color: white;
    margin-top: 1vmin;
    line-height: 2vmin;
  }
  .q__contract {
    text-align: center;
  }
  .q__contract__lbl2 {
    margin: 0 auto;
    display: block;
    font-size: 3vmin;
    color: white;
  }
  .q__contract__addy {
    /* background-color: white; */
    display: block;
    margin: 0 auto;
    color: white;
    display: block;
    width: 70%;
    word-wrap: break-word;
    margin-top: 1vmin;

  }
  .q__contract__qr {
    display: block;
    margin: 0 auto;
    margin-top: 1vmin;
  }
</style>