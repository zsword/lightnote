var MSG={"noTag":"Sin etiquetas\r","saveSuccess":"Guardado\r","none":"None\r","like":"Me gusta\r","unlike":"No me gusta\r","delete":"Eliminar\r","cancel":"Cancelar\r","confirm":"Confirmar\r","chooseReason":"Seleccione razón de reporte\r","reportSuccess":"Reportado correctamente, será notificado al autor, gracias por su aporte\r","error":"Error\r","reportComment?":"Reportar este comenatario?\r","reportBlog?":"Reportar este blog?\r","confirmDeleteComment":"Está seguro?\r","scanQRCode":"Abrir wechat y escanear el código QR\r","justNow":"Justo ahora\r","minutesAgo":"minustos antes\r","hoursAgo":"horas antes\r","daysAgo":"días antes\r","weeksAgo":"semanas antes\r","monthsAgo":"meses antes\r"};function getMsg(key, data) {var msg = MSG[key];if(msg) {if(data) {if(!isArray(data)) {data = [data];}for(var i = 0; i < data.length; ++i) {msg = msg.replace("%s", data[i]);}}return msg;}return key;}