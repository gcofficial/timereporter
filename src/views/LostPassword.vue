<template>
  <div id="lost_password">
    <div class="form-content">
      <h1>Lost password?</h1>
      <div class="subtitle">Please enter your email address. You will receive a link to create a new password via email.</div>
      <sui-form :submit.prevent="onSubmit">
        <sui-form-field>
          <label>Email <input v-model="login" size="large" type="email" placeholder="Username"></label>
        </sui-form-field>
        <div class="button-row">
          <sui-button size="small" :primary="valid" type="submit"  :disabled="!valid">Get new password</sui-button>
        </div>
        <app-or-separator></app-or-separator>
        <ul class="or-links">
            <li><router-link to="/login">Login</router-link></li>
            <li><router-link to="/registration">Registration</router-link></li>
        </ul>
      </sui-form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LostPassword',
  data() {
    return {
      login: ''
    }
  },
  methods: {
    onSubmit(event) {
      if (!this.valid) return false;
      console.log(event);
    }
  },
  computed: {
    valid(){
      return this.login != '';
    }
  }
}
</script>
<style scoped>
#lost_password{
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
  justify-content: flex-end;
}

.button-row button{
  margin-right: 0;
}
</style>