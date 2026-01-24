const getTime = (iso) => {
    const time = new Date(iso).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    });
    return time
}

export default getTime
