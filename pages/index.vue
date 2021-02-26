<template>
  <div class="p-5 columns">
    <div class="column">
      <section>
        <b-field label="Name">
          <b-input v-model="userName" type="text"></b-input>
        </b-field>

        <b-field label="Email">
          <b-input v-model="userEmail" type="email" maxlength="30"> </b-input>
        </b-field>

        <b-field label="Message">
          <b-input v-model="message" maxlength="200" type="textarea"></b-input>
        </b-field>

        <b-field label="Subject" class="mb-5">
          <b-select v-model="selected" placeholder="Select a subject" expanded>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
          </b-select>
        </b-field>
      </section>
    </div>
    <div class="column">
      <section>
        <b-field>
          <b-switch @click.native="switchPersistance" v-model="isSwitch"
            >Start Persistance</b-switch
          >
        </b-field>
        <b-field>
          <p class="subtitle is-5">
            Fill in the form and then click the switch above
          </p>
        </b-field>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { ToastProgrammatic as Toast } from 'buefy'
// Toast.open('Toasty!')

export default {
  name: 'HomePage',

  data: () => ({
    isSwitch: false,
    userName: '',
    userEmail: '',
    message: '',
    selected: '',
    alert: false,
  }),
  computed: {
    ...mapState({
      persistedState: 'persistedState',
      alertState: 'alertState',
    }),
  },
  watch: {
    alertState() {
      if (this.alertState === true) {
        Toast.open({
          message: 'Persitance state started!',
          type: 'is-success',
        })
      }
      if (this.alertState === false) {
        Toast.open({
          message: 'Persitance state ended!',
          type: 'is-danger',
        })
      }
    },
  },
  methods: {
    // persist to vuex store
    ...mapActions({
      switchPersistanceState: 'switchPersistanceState',
    }),

    switchPersistance() {
      // when the switch is turned on do this.
      if (this.isSwitch === false) {
        const userInfo = {
          userName: this.userName,
          userEmail: this.userEmail,
          message: this.message,
          selected: this.selected,
        }

        this.switchPersistanceState(userInfo)
      }

      // When the swith is turned off, do this.
      if (this.isSwitch === true) {
        this.userName = ''
        this.userEmail = ''
        this.message = ''
        this.selected = ''

        this.switchPersistanceState(null)
      }
    },
  },
  // Do this when the page reloads
  mounted() {
    // check if persisted state exists
    if (this.persistedState !== null) {
      this.isSwitch = true
      this.userName = this.persistedState.userName
      this.userEmail = this.persistedState.userEmail
      this.message = this.persistedState.message
      this.selected = this.persistedState.selected
    } else {
      this.isSwitch = false
    }
  },
}
</script>
