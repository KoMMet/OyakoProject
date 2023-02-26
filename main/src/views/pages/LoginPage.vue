<template>
  <v-app id="inspire">
    <div class="login-page">
      <div class="form">
        <h2>ログイン</h2>
        <template v-if="visible === 'login-form'"> 
          <form class="login-form">
            <input type="text" placeholder="メールアドレス" id="mail" v-model="mail"/>
            <input type="password" placeholder="パスワード" id="password" v-model="password"/>
            <v-btn @click="login" color="success">ログイン</v-btn>
            <p class="message">アカウントの作成は <a href="#" @click="changeForm" id="visibleRegister">こちら</a></p>
            <p class="message">パスワードを忘れてしまった方は <a href="#" @click="changeForm" id="visibleReset">こちら</a></p>
          </form>
        </template> 
        <template v-else-if="visible === 'register-form'"> 
          <form class="register-form">
            <input type="text" placeholder="なまえ"/>
            <input type="text" placeholder="メールアドレス"/>
            <input type="password" placeholder="パスワード"/>
            <v-btn @click="register" color="success">登録</v-btn>
            <p class="message">登録済みの方は <a href="#" @click="changeForm" id="visibleLogin">こちら</a></p>
          </form>
        </template> 
        <template v-else-if="visible === 'reset-form'"> 
          <form class="reset-form">
            <input type="text" placeholder="メールアドレス"/>
            <input type="password" placeholder="パスワード"/>
            <input type="password" placeholder="確認用パスワード"/>
            <v-btn @click="reset" color="success">リセット</v-btn>
            <p class="message">ログインは <a href="#" @click="changeForm" id="visibleLogin">こちら</a></p>
          </form>
        </template>
      </div>
    </div>
  </v-app>
</template>

<style>
  .login-page {
    width: 360px;
    padding: 8% 0 0;
    margin: auto;
  }
  .form {
    position: relative;
    z-index: 1;
    background: #FFFFFF;
    max-width: 360px;
    margin: 0 auto 100px;
    padding: 25px;
    text-align: center;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  }
  .form input {
    font-family: "Roboto", sans-serif;
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
  }
  .form v-btn {
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    outline: 0;
    width: 100%;
    border: 0;
    padding: 15px;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
  }
  .form v-btn:hover,.form v-btn:active,.form v-btn:focus {
    background: #43A047;
  }
  .form .message {
    margin: 15px 0 0;
    color: #b3b3b3;
    font-size: 12px;
  }
  .form .message a {
    color: #4CAF50;
    text-decoration: none;
  }
  .container {
    position: relative;
    z-index: 1;
    max-width: 300px;
    margin: 0 auto;
  }
  .container:before, .container:after {
    content: "";
    display: block;
    clear: both;
  }
  .container .info {
    margin: 50px auto;
    text-align: center;
  }
  .container .info h1 {
    margin: 0 0 15px;
    padding: 0;
    font-size: 36px;
    font-weight: 300;
    color: #1a1a1a;
  }
  .container .info span {
    color: #4d4d4d;
    font-size: 12px;
  }
  .container .info span a {
    color: #000000;
    text-decoration: none;
  }
  .container .info span .fa {
    color: #EF3B3A;
  }
</style>

<script>
  export default({
    data: () => ({
      mail: '',
      password: '',
      visible: 'login-form'
    }),
    methods: {
      login(){
          this.$router.push('/')
      },
      register(){
          console.log("アカウント作成")
      },
      changeForm(event){
        if (event.target.id === 'visibleLogin') {
            this.visible = 'login-form'
        }
        else if (event.target.id === 'visibleRegister') {
            this.visible = 'register-form'
        }
        else if (event.target.id === 'visibleReset') {
            this.visible = 'reset-form'
        }
      }
    }
  })
</script>

