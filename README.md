# ItGeoTestTask - Тестовое задание Angular Front-End

Необходимо реализовать простой редактор заметок на Angular с функционалом создания,
удаления, редактирования, поиска и сортировки заметок.

Приложение представляет из себя двухколоночную раскладку, где слева показан список заметок,
а справа контент выбранной в списке заметки. Схематично приложение должно выглядеть так:

Выбор варианта сортировки:

## Функциональные требования

Список заметок:

- Поиск gо названию заметки. При вводе в поле ввода в списке заметок остаются только
    заметки, подходящие по названию.
- Сортировка по убыванию и по возрастанию даты. По клику на “по возрастанию”
    появляется выпадающее окошко “по месту” с выбором варианта сортировки (см. 2
    скриншот).


- Удаление заметок. Кнопка удаления должна появляться по наведению мышки на заметку
    в списке.
- При выборе заметки в списки, справа отображается ее содержание.
- Скрытие панели. Должна быть кнопка скрыть\показать панель. Когда панель списка
    заметок скрыта – панель заметки должна занимать ее область.

Панель просмотра заметки:

- Редактирование заметки. Должен быть реализован функционал редактирования “по-
    месту”. При клике на кнопку “редактировать” заметка переходит в режим редактирования
    и на месте текста появляются поля ввода. Желательно сделать, чтобы в режиме
    редактирования и режиме просмотра заметка выглядела одинаково.
- В панели заметки должна быть реализована кнопка удаления заметки.
- Создание новой заметки может быть реализовано аналогично редактированию уже
    созданной заметки или любым другим способом (на свое усмотрение).

## Технические требования

Интерфейс должен быть написан на Angular. Не стоит использовать дополнительные сторонние
библиотеки.

Элементы интерфейса должны быть реализованы в виде отдельных компонентов, которые потом
могли бы быть переиспользованы в других интерфейсах. При разработке компонентов стоит
придерживаться принципов SOLID и постараться избежать дублирования кода.

Весь функционал должен быть реализован в рамках одной страницы (все действия должны
осуществляться без перезагрузки страницы).

Серверную часть реализовывать не нужно. Хранение данных можно организовать через Local
Storage или любым другим способом.

Для разработки приложения нельзя использовать Bootstrap или аналогичные библиотеки. CSS
должен быть написан вручную с использованием Flexbox. Плюсом будем если классы будут
названы согласно БЭМ-методологии (https://ru.bem.info/methodology/).

Реализация на TypeScript обязательна.

Обязательно использовать redux.

Важно! Постарайтесь сохранить историю разработки в git.

## Заключение

Следует обратить внимание на ситуации, когда данных слишком много или слишком мало. И не
стоит забывать, что пользователь системы может совершать ошибки и выполнять действия не так
как вы задумывали.

К внешнему виду приложения требований нет, все на усмотрение на разработчика.

Если в задании что-то не было оговорено, вы можете сделать как считаете нужным.

Итоговую работу необходимо выложить на GitHub и в README написать инструкцию по запуску
приложения.


