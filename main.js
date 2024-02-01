function click_() {
    //input
    var day = document.getElementById("day")
    var month = document.getElementById("month")
    var year = document.getElementById("year")
    //txt input label
    var daytxt = document.getElementById("daytxt")
    var monthtxt = document.getElementById("monthtxt")
    var yeartxt = document.getElementById("yeartxt")
    //txt label error
    var erroryear = document.getElementById("erroryear")
    var errormonth = document.getElementById("errormonth")
    var errorday = document.getElementById("errorday")
    //innertxt
    var txtdays = document.getElementById("txtdays")
    var txtmonths = document.getElementById("txtmonths")
    var txtyears = document.getElementById("txtyears")
    if(day.value==''){
        day.style.outline='0.1rem solid hsl(0, 100%, 67%)'
        daytxt.style.color='hsl(0, 100%, 67%)'
        errorday.innerHTML='This field is required'        
    }else{
        day.style.outline='0.1rem solid hsl(0, 0%, 86%)'
        daytxt.style.color='hsl(0, 1%, 44%)'
        errorday.innerHTML=' '
    }
    if(month.value==''){
        month.style.outline='0.1rem solid hsl(0, 100%, 67%)'
        monthtxt.style.color='hsl(0, 100%, 67%)'
        errormonth.innerHTML='This field is required'
    }else{
        month.style.outline='0.1rem solid hsl(0, 0%, 86%)'
        monthtxt.style.color='hsl(0, 1%, 44%)'
        errormonth.innerHTML=''
    }
    if(year.value==''){
        year.style.outline='0.1rem solid hsl(0, 100%, 67%)'
        yeartxt.style.color='hsl(0, 100%, 67%)'
        erroryear.innerHTML='This field is required'
    }else{
        year.style.outline='0.1rem solid hsl(0, 0%, 86%)'
        yeartxt.style.color='hsl(0, 1%, 44%)'
        erroryear.innerHTML=''
    }

    var fechaActual = new Date()
    var fechaIngresada = new Date(`${year.value}-${month.value}-${day.value}`)
    var diferenciaMilisegundos = fechaIngresada - fechaActual;
    var diferenciaDias = Math.floor(Math.abs(diferenciaMilisegundos) / (1000 * 60 * 60 * 24));
    var anios = Math.floor(diferenciaDias / 365);
    var meses = Math.floor((diferenciaDias % 365) / 30);
    var dias = diferenciaDias - (anios * 365 + meses * 30);

    if (isNaN(meses) && isNaN(anios) && isNaN(dias)) { 
        txtdays.innerHTML = '--'
        txtmonths.innerHTML = '--'
        txtyears.innerHTML = '--'
    } else {
        txtdays.innerHTML = dias
        txtmonths.innerHTML = meses
        txtyears.innerHTML = anios
    }


}
