const useverifyCookie = async (loggedIn, setloggedIn) => {
    const res = await fetch('/api/verifycookie')
    const data = await res.json()

    setloggedIn(data.status)
}

export default useverifyCookie