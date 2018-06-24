<template>
  <div id="login">
    <div class="form-content">
      <h1>Login</h1>
      <div class="subtitle">Sign into your <b>Dev Pro</b> account</div>
      <sui-form :submit="onSubmit">
        <sui-form-field>
          <label>Email <input v-model="login" size="large" type="email" placeholder="Username"></label>
        </sui-form-field>
        <sui-form-field>
          <label>Password <input v-model="password" type="password" size="large" placeholder="Credentials" ></label>
        </sui-form-field>
        <div class="button-row">
          <sui-button size="small" :primary="valid" type="submit"  :disabled="!valid">Login</sui-button>
        </div>
        <app-or-separator></app-or-separator>
        <ul class="or-links">
          <li><router-link to="/lost-password">Lost your password?</router-link></li>
          <li><router-link to="/registration">Registration</router-link></li>
        </ul>
      </sui-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      login: '',
      password: ''
    }
  },
  methods: {
    onSubmit() {
      if (!this.valid) return false;
    }
  },
  computed: {
    valid(){
      return this.login != '' && this.password.length > 4;
    }
  }
}
</script>


<style scoped>
#login{
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