# project 13 & pwa

1. HTTPS
2. Изображения/иконки
3. Манифест
4. Sevice Worker
5. Дополнительно
6. Кнопка "Установить приложение" на сайте

## 1. HTTPS

* Важно! Должен быть настроен доступ к сайту по HTTPS.

## 2. Изображения

* Загрузить директорию с иконками `/ico` на сервер.

## 3. Манифест

* Загрузить файл с манифестом `manifest.json` на сервер в корень сайта.

* В индексный файл в секцию `<head>` добавить строку с линком на манифест:
```
<link rel="manifest" href="/manifest.json">
```

## 4. Service Worker

* Загрузить файл `pwabuilder-sw.js` на сервер в корень сайта.

* В индексном файле подключить `pwabuilder-sw.js` в секции `<head>` добавив cкрипт:
```
<script src="pwabuilder-sw.js"></script>
```

* В индексном файле в секции `<head>` добавить скрипт:
```
<script type="module">
   import 'https://cdn.jsdelivr.net/npm/@pwabuilder/pwaupdate';
   const el = document.createElement('pwa-update');
   document.body.appendChild(el);
</script>
```

## 5. Дополнительно

* В индексный файл добавить мета-тег:
```
<meta name="theme-color" content="#ffffff">
```

* В индексный файл добавить линк на `apple-touch-icon`:
```
<link rel="apple-touch-icon" href="ico/388x388.png">
```

## 6. Кнопка "Установить приложение" на сайте

* Добавить подходящую html-конструкцию (кнопка, ссылка), например:
```
<button onclick="pwainstall()">
  Установить приложение
</button>
```

* В индексный файл добавить скрипт:
```
<script>
let deferredPrompt = null;

window.addEventListener('beforeinstallprompt, (e) => {
  e.preventDefault();
  deferredPrompt = e;
});

async function pwainstall() {
  if (defereedPrompt) {
    deferredPrompt.prompt();
    console.log(deferredPrompt);
    
    deferredPrompt.userChoise.then(function(choiseResult){
      if(choiseResult.outcome === 'accepted') {
        console.log('Your PWA has been installed');
      }
      deferredPrompt = null;
    });
  }
}
</script>
```
## 7. Проверка ...
