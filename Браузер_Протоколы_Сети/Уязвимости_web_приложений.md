# Уязвимости web приложений

**Инструменты поиска уязвимостей:**

- Платные - Acunetix, Nessus Scanner, Nexpose
- Бесплатные: [Wapiti](https://habr.com/ru/post/510998/), [Nikto](https://cirt.net/Nikto2), [Vega](https://subgraph.com/vega/download/), [SQLmap](http://sqlmap.org/).

1. **Различные Инъекции/Injection  + CSS Injection**

Злоумышленник может ввести код (SQL, XXE, OS, LDAP и других типов) в форму на сайте, поэтому важно настроить фильтрацию входящей информации

Если не проверять входные данные и не подготовить операторы должным образом, вместе с запросом на ваш сервер могут проникнуть ненадежные данные, которые приведут к выполнению вредоносного кода вашим интерпретатором. Это называется инъекцией. .

1. **XSS (Cross-Site Scripting или межсайтовый скриптинг)**

Эта уязвимость заключается во внедрении вредоносного кода в веб-страницу и последующим исполнением этого кода в браузере пользователя.

Решение:

- **Санитайзеры** например [DOM Purify](https://www.npmjs.com/package/dompurify)
- **Content Security Policy** (далее CSP) – описание в мета-тег в шапке HTML

```jsx
<meta
  http-equiv="Content-Security-Policy"
  content="
default-src 'none';
    script-src 'self';
    connect-src 'self' https://*.friendly-site.com;
    style-src 'self';
    img-src 'self' too.friendly.com;
  "
/>
```

1. **CSRF (Cross Site Request Forgery или межсайтовая подделка запроса)**

Это вид уязвимости, когда сервер не может понять, откуда пришел запрос – от реального пользователя или от хакера. 

1. **Vulnerable & outdated components - уязвимые или неподдерживаемые компоненты, библиотеки, утилиты.**

Использование более безопасных аналогов…

1. **Проблемы аутентификации и проверки сессий**