function login(input) {
    let user = input.shift()
    let password = ``

    for (let i = user.length - 1; i >= 0; i--) {
        password += user[i];
    }
    let pass = input.shift()
    let wrong = 0
    while (pass !== password) {
        wrong++;
        if (wrong === 4) {
            console.log(`User ${user} blocked!`);
            return;
        }

        console.log(`Incorrect password. Try again.`);
        pass = input.shift()
    }

    console.log(`User ${user} logged in.`)

}
login(["momo", "Deo", `leo`, `gosho`, `tosho`, `omom`])