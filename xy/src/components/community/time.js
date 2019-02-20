export default {
    getMyDate(str) {
            var oDate = new Date(str),
            oYear = oDate.getFullYear(),
            oMonth = oDate.getMonth()+1,
            oDay = oDate.getDate(),
            oHour = oDate.getHours(),
            oMin = oDate.getMinutes(),
            oSen = oDate.getSeconds(),
            oTime = oYear +'-'+ oMonth +'-'+ oDay +' '+ oHour +':'+
        oMin +':'+oSen;
            return oTime;
        },
        addZero(num){
            if(parseInt(num) < 10){
                num = '0'+num;
            }
            return num;
        },
        getMyDay(str) {
                var oDate = new Date(str),
                oYear = oDate.getFullYear(),
                oMonth = oDate.getMonth()+1,
                oDay = oDate.getDate(),
               
                oTime = oYear +'-'+ oMonth +'-'+ oDay;
                return oTime;
            },
}