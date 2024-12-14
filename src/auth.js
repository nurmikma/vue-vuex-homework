export default {
    user: { authenticated: false},
    authenticated: async function(){
        await fetch("http://localhost:3000/auth/authenticate", {
            credentials: 'include',
        })
        .then((response) => response.json())
        .then((data) => {
            this.user.authenticated = data.authenticated;
            console.log("auth data: ", data)
        })
        .catch((e) => {
            console.log(e)
        })
        return this.user.authenticated;
    }
}