const app = Vue.createApp({
    data: () => ({
        mail: '',
        password: '',
        visible: 'login-form'
    }),
    methods: {
        login: function(event){
            console.log("ログイン")
        },
        register: function(event){
            console.log("アカウント作成")
        },
        changeForm: function(event){
            console.log(event.target.id)
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
app.mount('#app')