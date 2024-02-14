exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page
        this.username_Field = page.getByLabel('Username')
        this.password_Field = page.getByLabel('Password')
        this.login_Button = page.getByRole('button', { name: ' Login' })
    }

    async login(username, password) {
        await this.username_Field.fill(username)
        await this.password_Field.fill(password)
        await this.password_Field.click()



    }

    async gotoLoginPage() {
         await this.page.goto('https://the-internet.herokuapp.com/login');

    }
}