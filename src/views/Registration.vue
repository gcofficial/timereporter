<template>
   <div id="registration">
    <div class="form-content">
      <h1>Registration</h1>
      <div class="subtitle">Create a <b>Coding Ninjas</b> account.
        Registration confirmation will be emailed to you.</div>
      <sui-form :submit.prevent="onSubmit">
        <sui-form-field>
          <label>Your name <input v-model="name" size="large" placeholder="Name"></label>
        </sui-form-field>
        <sui-form-field>
          <label>Email <input v-model="login" type="email" size="large" placeholder="We will use it for authorization"></label>
        </sui-form-field>
        <sui-form-field>
          <label>Password <input v-model="password" type="password" size="large" placeholder="Credentials" ></label>
        </sui-form-field>
        <div class="button-row">
          <sui-checkbox v-model="i_agree" label="I agree to terms of use and privacy policy"/>
          <sui-button size="small" :primary="valid" type="submit"  :disabled="!valid">Registration</sui-button>
        </div>
        <app-or-separator></app-or-separator>
        <ul class="or-links">
          <li><router-link to="/lost-password">Lost your password?</router-link></li>
          <li><router-link to="/login">Login</router-link></li>
        </ul>
      </sui-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Registration',
  data() {
    return {
      login: '',
      name: '',
      password: '',
      i_agree: true
    }
  },
  methods: {
    onSubmit(event) {
      if (!this.valid) return false;
      console.log(event)
    }
  },
  computed: {
    valid(){
      return this.login != '' && this.name != '' && this.password.length > 4 && this.i_agree != false;
    }
  }
}
</script>
<style scoped>
#registration{
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}

.form-content{
  width: 450px;
  margin-top: -100px;
}

h1{
  font-size: 44px;
  font-weight: 100;
  margin-bottom: 0;
}

form{
  margin-top: 20px;
}

.button-row{
  display: flex;
  justify-content: space-between;
}

.button-row button{
  margin-right: 0;
}
</style>
