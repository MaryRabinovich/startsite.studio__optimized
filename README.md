# Где посмотреть код в действии

https://maryrabinovich.github.io/startsite.studio__optimized/dist/

## Старая версия того же самого

https://maryrabinovich.github.io/startsite.studio/

Старая версия ссылается на свой репозиторий: https://github.com/MaryRabinovich/startsite.studio с подробным ридми.

## Что, собственно, оптимизировано

Шарики, бегающие за поинтером, в исходной версии моего кода

а) реагировали на движения курсора,

б) реагировали непрерывно на непрерывный же таймер. Просто чаще всего реакции не было видно - таймер и шарики пересчитывали позиции, но цифры в итоге не изменялись, и шарики по экрану не двигались.

В оптимизированной версии

а) по движению курсора шарики подписываются на таймер,

б) добежавший до курсора шарик отписывается от таймера,

в) опустевший таймер останавливается,

г) таймер перезапускается с новым движением курсора,

д) попытка повторной подписки на таймер уже в процессе движения отслеживается и пресекается (т.е., нет риска двойного-тройного и др. улавливания сигнала таймера).

Аналогично оптимизирована печать:

а) вместо единого и громоздкого непрерывного таймера выделены отдельно два действия (печать / удаление), 

б) эти действия выполнены краткими стримами,

в) каждый стрим запускается и останавливается, задавая таймаутом запуск противоположного стрима.

Наконец, в оптимизированном проекте использован сборщик gulp, позволивший упорядочить javascript код и задать стили через sass.