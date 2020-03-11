
async function LoginAPI(url, username, password) {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username,
            password
        })
    }
    return fetch(url, options).then(res => {
        localStorage.setItem('token', res.token)
        return Promise.resolve(res)
    })
}

function logout() {
    localStorage.removeItem('user');
}

export default LoginAPI