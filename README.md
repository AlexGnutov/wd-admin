# Дипломный проект - часть администратора

В целом подход аналогичен реализации клиентской части, поэтому описываем проект кратко.

## Структура (src)
* Страницы (pages) - две страницы - входа и основная страница администратора
* Компоненты (components) - включает различные компоненты страниц и форм
* Состояние (store) - описывает состояние для данных, конфигурации, авторизации и работы всплывающих элементов. Подход: react-@reduxjs/toolkit + thunks
* Утилиты (utils) - вспомогательные утилиты
* Стили (css) - в целом без изменений - как были переданы с вёрсткой в виде общего файла, добавлены файлы стилей для новых компонентов.

Логика работы страниц реализована в соответствии с предоставленой вёрсткой. Добавлена возможность выхода из системы.

## Запуск
Этот репозиторий подготовлен к запуску отдельно. В таком случае сервер должен быть на стандартном порту Laravel localhost:8000. При необходимости эти настройки можно поменять в .env. При этом нужно заново выполнить сборку "build".
