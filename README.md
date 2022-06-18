# project 13 & pwa

1. HTTPS
2. Изображения/иконки
3. Манифест
4. Sevice Worker

## 1. HTTPS

1.1. Важно! Должен быть настроен доступ к сайту по HTTPS.

## 2. Изображения

2.1. Загрузить директорию с иконками `/ico` на сервер.

## 3. Манифест

3.1. Загрузить файл с манифестом `manifest.json` на сервер в корень сайта.

3.2. В индексный файл в секцию `<head>` добавить строку с линком на манифест:
```
<link rel="manifest" href="/manifest.json">
```

## 4. Service Worker

4.1. Загрузить файл `pwabuilder-sw.js` на сервер в корень сайта.

4.2. В индексном файле подключить `pwabuilder-sw.js` в секции `<head>` добавив cкрипт:
```
<script src="pwabuilder-sw.js"></script>
```

4.2. В индексном файле в секции `<head>` добавить скрипт:
```
<script type="module">
   import 'https://cdn.jsdelivr.net/npm/@pwabuilder/pwaupdate';
   const el = document.createElement('pwa-update');
   document.body.appendChild(el);
</script>
``` 
