
const time = () =>{
    const clock = document.querySelector("#saat")

    let bugun = new Date()
    let hour = bugun.getHours() 
    let min = bugun.getMinutes()
    let sec = bugun.getSeconds()
    let pm = hour < 12 ? `<span> AM </span>` : `<span> PM </span>`

    hour = hour > 12 ? hour - 12 : hour

// ----------- zaman in sayisi 10 dan kücük olursa ------

    hour = ondanKucuk(hour)
    min = ondanKucuk(min)
    sec = ondanKucuk(sec)


    clock.innerHTML = `${hour}:${min}:${sec} ${pm}`
    setTimeout(function(){time()},500)
}

const ondanKucuk = (i) => { 
    i < 10 ? i = "0" + i : null ; 
    return i;
}

time();