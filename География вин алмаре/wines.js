const WINES = [
  // ═══════════ РОССИЯ — ИГРИСТЫЕ ═══════════
  { name: "Реноме Брют Розе. Скалистый Берег", type: "игристое", color: "розовое", region: "anapa", regionLabel: "Кубань, Анапа", country: "russia", bottlePrice: 13000, glassPrice: null },
  { name: "Блан де Блан Экстра Брют. Скалистый Берег", type: "игристое", color: "белое", region: "anapa", regionLabel: "Кубань, Анапа", country: "russia", bottlePrice: 9600, glassPrice: null },
  { name: "Темелион Блан де Блан Винтаж 2020. Лефкадия", type: "игристое", color: "белое", region: "krymsk", regionLabel: "Кубань, Крымск", country: "russia", bottlePrice: 12000, glassPrice: null },
  { name: "Блан де Нуар Экстра Брют. Гунько Вайнери", type: "игристое", color: "белое", region: "krymsk", regionLabel: "Кубань, Крымск", country: "russia", bottlePrice: 9600, glassPrice: null },
  { name: "Блан де Нуар «Брют д'Ор». Абрау-Дюрсо", type: "игристое", color: "белое", region: "novorossiysk", regionLabel: "Кубань, Новороссийск", country: "russia", bottlePrice: 6800, glassPrice: 1360 },
  { name: "Империал Кюве Розе. Абрау-Дюрсо", type: "игристое", color: "розовое", region: "novorossiysk", regionLabel: "Кубань, Новороссийск", country: "russia", bottlePrice: 8400, glassPrice: null },
  { name: "Блан де Блан Экстра-Брют. Шато Пино", type: "игристое", color: "белое", region: "novorossiysk", regionLabel: "Кубань, Новороссийск", country: "russia", bottlePrice: 6800, glassPrice: null },
  { name: "\"Primum Alveus VII\" Экстра Брют 2017. Фанагория", type: "игристое", color: "белое", region: "taman", regionLabel: "Кубань, Тамань", country: "russia", bottlePrice: 11500, glassPrice: null },
  { name: "Розе Брют. Винодельня Узунов", type: "игристое", color: "розовое", region: "taman", regionLabel: "Кубань, Тамань", country: "russia", bottlePrice: 6200, glassPrice: null },
  { name: "Кюве де Витмер Розе Брют. Золотая Балка", type: "игристое", color: "розовое", region: "crimea", regionLabel: "Крым, Севастополь", country: "russia", bottlePrice: 5800, glassPrice: 1160 },

  // ═══════════ РОССИЯ — БЕЛЫЕ ═══════════
  { name: "Мускат. Шато де Талю", type: "тихое", color: "белое", region: "gelendzhik", regionLabel: "Кубань, Геленджик", country: "russia", bottlePrice: 4000, glassPrice: 800 },
  { name: "Рислинг «Два дубка». Сенетх", type: "тихое", color: "белое", region: "anapa", regionLabel: "Кубань, Анапа", country: "russia", bottlePrice: 7000, glassPrice: null },
  { name: "Совиньон Блан. Скалистый берег", type: "тихое", color: "белое", region: "anapa", regionLabel: "Кубань, Анапа", country: "russia", bottlePrice: 8900, glassPrice: null },
  { name: "Семильон/Мускат. Шато де Талю", type: "тихое", color: "белое", region: "gelendzhik", regionLabel: "Кубань, Геленджик", country: "russia", bottlePrice: 4100, glassPrice: null, note: "полусухое" },
  { name: "Вионье. Криница", type: "тихое", color: "белое", region: "gelendzhik", regionLabel: "Кубань, Геленджик", country: "russia", bottlePrice: 8000, glassPrice: null },
  { name: "Шардоне. Николаев и Сыновья", type: "тихое", color: "белое", region: "krymsk", regionLabel: "Кубань, Крымск", country: "russia", bottlePrice: 10000, glassPrice: 2000 },
  { name: "Рислинг Семейный Резерв. Имение Сикоры", type: "тихое", color: "белое", region: "novorossiysk", regionLabel: "Кубань, Новороссийск", country: "russia", bottlePrice: 9000, glassPrice: null },
  { name: "Генезис. Раевское", type: "тихое", color: "белое", region: "novorossiysk", regionLabel: "Кубань, Новороссийск", country: "russia", bottlePrice: 7000, glassPrice: null },
  { name: "Рислинг-Алиготе-Шардоне «РАШ». Узунов", type: "тихое", color: "белое", region: "taman", regionLabel: "Кубань, Тамань", country: "russia", bottlePrice: 4800, glassPrice: null },
  { name: "Рислинг. Андрюс Юцис", type: "тихое", color: "белое", region: "crimea", regionLabel: "Крым, Севастополь", country: "russia", bottlePrice: 6500, glassPrice: null },
  { name: "«Эритаж» Эльвиадо. Инкерман", type: "тихое", color: "белое", region: "crimea", regionLabel: "Крым, Севастополь", country: "russia", bottlePrice: 7500, glassPrice: null },
  { name: "Рислинг. Домен Липко", type: "тихое", color: "белое", region: "crimea", regionLabel: "Крым, Севастополь", country: "russia", bottlePrice: 7000, glassPrice: 1400 },
  { name: "ИИ. Вайнпарк", type: "тихое", color: "белое", region: "crimea", regionLabel: "Крым", country: "russia", bottlePrice: 10000, glassPrice: 2000 },
  { name: "Алиготе. Узунов", type: "тихое", color: "белое", region: "taman", regionLabel: "Кубань, Тамань", country: "russia", bottlePrice: 5800, glassPrice: null },

  // ═══════════ РОССИЯ — ЯНТАРНЫЕ ═══════════
  { name: "Ркацители Квеври. Усадьба Перовских", type: "тихое", color: "янтарное", region: "crimea", regionLabel: "Крым, Севастополь", country: "russia", bottlePrice: 5600, glassPrice: null },
  { name: "Ркацители Оранж. Константин Дзитоев", type: "тихое", color: "янтарное", region: "alania", regionLabel: "Алания", country: "russia", bottlePrice: 7500, glassPrice: null },

  // ═══════════ РОССИЯ — РОЗОВЫЕ ═══════════
  { name: "Сиракюз. Криница", type: "тихое", color: "розовое", region: "gelendzhik", regionLabel: "Кубань, Геленджик", country: "russia", bottlePrice: 4600, glassPrice: 920 },
  { name: "Фламинго. Николаев и Сыновья", type: "тихое", color: "розовое", region: "krymsk", regionLabel: "Кубань, Крымск", country: "russia", bottlePrice: 5000, glassPrice: null },
  { name: "Клере. Шато де Талю", type: "тихое", color: "розовое", region: "gelendzhik", regionLabel: "Кубань, Геленджик", country: "russia", bottlePrice: 4000, glassPrice: 800 },

  // ═══════════ РОССИЯ — КРАСНЫЕ ═══════════
  { name: "Шираз. Шато де Талю", type: "тихое", color: "красное", region: "gelendzhik", regionLabel: "Кубань, Геленджик", country: "russia", bottlePrice: 3900, glassPrice: 780 },
  { name: "Красная Книга Глава 2. Скалистый берег", type: "тихое", color: "красное", region: "anapa", regionLabel: "Кубань, Анапа", country: "russia", bottlePrice: 9500, glassPrice: null },
  { name: "Пино Нуар. LeGato", type: "тихое", color: "красное", region: "krymsk", regionLabel: "Кубань, Крымск", country: "russia", bottlePrice: 13600, glassPrice: 2720 },
  { name: "Пино Нуар Гранд Резерв. Шато Пино", type: "тихое", color: "красное", region: "novorossiysk", regionLabel: "Кубань, Новороссийск", country: "russia", bottlePrice: 10000, glassPrice: null },
  { name: "Каберне Фран Резерв. Шато де Талю", type: "тихое", color: "красное", region: "gelendzhik", regionLabel: "Кубань, Геленджик", country: "russia", bottlePrice: 6300, glassPrice: null },
  { name: "Саперави «Финт». Узунов", type: "тихое", color: "красное", region: "taman", regionLabel: "Кубань, Тамань", country: "russia", bottlePrice: 6000, glassPrice: 1200 },

  // ═══════════ МИР — ИГРИСТЫЕ ═══════════
  { name: "Просекко Супериоре Вальдоббьядене Джалльоро. Руджери", type: "игристое", color: "белое", region: "veneto", regionLabel: "Италия, Венето", country: "italy", bottlePrice: 4600, glassPrice: null, note: "0.375" },
  { name: "Вальдоббьядене Просекко Супериоре Брют. Виньето Дирупо", type: "игристое", color: "белое", region: "veneto", regionLabel: "Италия, Венето", country: "italy", bottlePrice: 8000, glassPrice: 1600 },
  { name: "Москато д'Асти. Вьетти", type: "игристое", color: "белое", region: "piedmont", regionLabel: "Италия, Пьемонт", country: "italy", bottlePrice: 10000, glassPrice: null },
  { name: "Франчакорта Брют Кюве Рояль. Маркезе Антинори", type: "игристое", color: "белое", region: "lombardy", regionLabel: "Италия, Ломбардия", country: "italy", bottlePrice: 17000, glassPrice: 3400 },
  { name: "Одберд Блан де Блан. Безалкогольное", type: "игристое", color: "белое", region: "france", regionLabel: "Франция", country: "france", bottlePrice: 5800, glassPrice: null, note: "безалкогольное, п/сух" },

  // ═══════════ ШАМПАНСКОЕ ═══════════
  { name: "Билькар-Сальмон Брют Резерв", type: "шампанское", color: "белое", region: "champagne", regionLabel: "Шампань", country: "france", bottlePrice: 15000, glassPrice: null, note: "0.375" },
  { name: "Николя Майяр Платин Премье Крю Брют", type: "шампанское", color: "белое", region: "champagne", regionLabel: "Шампань", country: "france", bottlePrice: 19000, glassPrice: null },
  { name: "Ален Байи Петрониль Брют", type: "шампанское", color: "белое", region: "champagne", regionLabel: "Шампань", country: "france", bottlePrice: 17500, glassPrice: 3500 },
  { name: "Поль Бара Резерв Бузи Гран Крю Брют", type: "шампанское", color: "белое", region: "champagne", regionLabel: "Шампань", country: "france", bottlePrice: 30000, glassPrice: null },
  { name: "Демьер Дивен Блан де Нуар Брют", type: "шампанское", color: "белое", region: "champagne", regionLabel: "Шампань", country: "france", bottlePrice: 20000, glassPrice: null },
  { name: "Билькар-Сальмон Брют Розе", type: "шампанское", color: "розовое", region: "champagne", regionLabel: "Шампань", country: "france", bottlePrice: 40000, glassPrice: null },
  { name: "Лансон ле Розе Брют", type: "шампанское", color: "розовое", region: "champagne", regionLabel: "Шампань", country: "france", bottlePrice: 29000, glassPrice: null },
  { name: "Рюинар Блан де Блан", type: "шампанское", color: "белое", region: "champagne", regionLabel: "Шампань", country: "france", bottlePrice: 48000, glassPrice: null },
  { name: "Дом Периньон Винтаж Экстра Брют", type: "шампанское", color: "белое", region: "champagne", regionLabel: "Шампань", country: "france", bottlePrice: 105000, glassPrice: null },

  // ═══════════ КРЕМАН ═══════════
  { name: "Креман де Бордо Брют. Кальве", type: "игристое", color: "белое", region: "bordeaux", regionLabel: "Франция, Бордо", country: "france", bottlePrice: 6800, glassPrice: null },
  { name: "Креман д'Альзас Розе Брют. Артур Мец", type: "игристое", color: "розовое", region: "alsace", regionLabel: "Франция, Эльзас", country: "france", bottlePrice: 7600, glassPrice: 1520 },

  // ═══════════ ИТАЛИЯ — БЕЛЫЕ ═══════════
  { name: "Ланге Арнеис «Бланже». Черетто", type: "тихое", color: "белое", region: "piedmont", regionLabel: "Пьемонт", country: "italy", bottlePrice: 14000, glassPrice: 2800 },
  { name: "Гави ди Гави. Кристина Аскьери", type: "тихое", color: "белое", region: "piedmont", regionLabel: "Пьемонт", country: "italy", bottlePrice: 15500, glassPrice: null },
  { name: "Горрина Гави. Тенута Сан Пьетро", type: "тихое", color: "белое", region: "piedmont", regionLabel: "Пьемонт", country: "italy", bottlePrice: 34000, glassPrice: null },
  { name: "Гевюрцтраминер. Кальтерн Кальдаро", type: "тихое", color: "белое", region: "trentino", regionLabel: "Трентино-Альто Адидже", country: "italy", bottlePrice: 10500, glassPrice: null },
  { name: "Совиньон Лафоа. Кольтеренцио", type: "тихое", color: "белое", region: "trentino", regionLabel: "Трентино-Альто Адидже", country: "italy", bottlePrice: 19500, glassPrice: null },
  { name: "Пино Гриджо «Фолвинд». Сан Микеле-Аппиано", type: "тихое", color: "белое", region: "trentino", regionLabel: "Трентино-Альто Адидже", country: "italy", bottlePrice: 11000, glassPrice: null },
  { name: "«Манна» Виньети делле Доломити. Франц Хаас", type: "тихое", color: "белое", region: "trentino", regionLabel: "Трентино-Альто Адидже", country: "italy", bottlePrice: 13000, glassPrice: null },
  { name: "Турбиана. Кантина Филиппо Филиппи", type: "тихое", color: "белое", region: "veneto", regionLabel: "Венето", country: "italy", bottlePrice: 13500, glassPrice: null },
  { name: "«Кастельчерино» Соаве Колли Скалиджери. Филиппи", type: "тихое", color: "белое", region: "veneto", regionLabel: "Венето", country: "italy", bottlePrice: 9800, glassPrice: null },
  { name: "Санта Катерина Лугана. Монте Чиконья", type: "тихое", color: "белое", region: "lombardy", regionLabel: "Ломбардия", country: "italy", bottlePrice: 13000, glassPrice: null, note: "п/сух" },
  { name: "Пино Гриджо. Дзорцеттиг", type: "тихое", color: "белое", region: "friuli", regionLabel: "Фриули", country: "italy", bottlePrice: 7000, glassPrice: 1400 },
  { name: "Верначча ди Сан Джиминьяно Ризерва. Паницци", type: "тихое", color: "белое", region: "tuscany", regionLabel: "Тоскана", country: "italy", bottlePrice: 13000, glassPrice: null },
  { name: "Вистамаре. Гая", type: "тихое", color: "белое", region: "piedmont", regionLabel: "Пьемонт", country: "italy", bottlePrice: 28000, glassPrice: null },
  { name: "Верментино Больгери. Тенута Гуадо аль Тассо", type: "тихое", color: "белое", region: "tuscany", regionLabel: "Тоскана", country: "italy", bottlePrice: 10000, glassPrice: 2000 },
  { name: "Прио. Доннафугата", type: "тихое", color: "белое", region: "sicily", regionLabel: "Сицилия", country: "italy", bottlePrice: 14000, glassPrice: null },
  { name: "«Брамито» Шардоне. Кастелло делла Сала", type: "тихое", color: "белое", region: "umbria", regionLabel: "Умбрия", country: "italy", bottlePrice: 13500, glassPrice: 2700 },
  { name: "«Черваро делла Сала» Шардоне. Кастелло делла Сала", type: "тихое", color: "белое", region: "umbria", regionLabel: "Умбрия", country: "italy", bottlePrice: 34000, glassPrice: null },
  { name: "Тенута Регалеали Леоне. Таска д'Альмерита", type: "тихое", color: "белое", region: "sicily", regionLabel: "Сицилия", country: "italy", bottlePrice: 12500, glassPrice: 2500 },
  { name: "«Альта Мора» Этна Бьянко. Кузумано", type: "тихое", color: "белое", region: "sicily", regionLabel: "Сицилия", country: "italy", bottlePrice: 14000, glassPrice: null },
  { name: "Фаюс. И Капитани", type: "тихое", color: "белое", region: "campania", regionLabel: "Кампания", country: "italy", bottlePrice: 12000, glassPrice: null },
  { name: "Греко ди Туфо. Феуди ди Сан Грегорио", type: "тихое", color: "белое", region: "campania", regionLabel: "Кампания", country: "italy", bottlePrice: 12500, glassPrice: null },
  { name: "Лакрима Кристи Бьянко. Феуди ди Сан Грегорио", type: "тихое", color: "белое", region: "campania", regionLabel: "Кампания", country: "italy", bottlePrice: 13000, glassPrice: null },
  { name: "«Сарагат» Верментино. Атцей Вини", type: "тихое", color: "белое", region: "sardinia", regionLabel: "Сардиния", country: "italy", bottlePrice: 11000, glassPrice: null },
  { name: "Фоссо Канчелли Треббьяно д'Абруццо. Чаволич", type: "тихое", color: "белое", region: "abruzzo", regionLabel: "Абруццо", country: "italy", bottlePrice: 18000, glassPrice: null },
  { name: "Шардоне. Ле Крет", type: "тихое", color: "белое", region: "valdaosta", regionLabel: "Валь д'Аоста", country: "italy", bottlePrice: 11000, glassPrice: null },

  // ═══════════ ФРАНЦИЯ — БЕЛЫЕ ═══════════
  { name: "Бургонь Алиготе Ле Крезотт. Домен Жерар Жульен э Фис", type: "тихое", color: "белое", region: "burgundy", regionLabel: "Бургундия", country: "france", bottlePrice: 19000, glassPrice: null },
  { name: "Шабли Ле Шануан. Ларош", type: "тихое", color: "белое", region: "chablis", regionLabel: "Шабли", country: "france", bottlePrice: 13000, glassPrice: null },
  { name: "Шабли Премье Крю Фуршом «Селин э Ромен». Домен де Шом", type: "тихое", color: "белое", region: "chablis", regionLabel: "Шабли / Бургундия", country: "france", bottlePrice: 20000, glassPrice: 4000 },
  { name: "Макон-Виляж Шардоне. Вюймез Пер э Фис", type: "тихое", color: "белое", region: "burgundy", regionLabel: "Бургундия", country: "france", bottlePrice: 14000, glassPrice: null },
  { name: "Пуйи-Фюиссе «Эритаж». Домен Тибер Пер э Фис", type: "тихое", color: "белое", region: "burgundy", regionLabel: "Бургундия", country: "france", bottlePrice: 19500, glassPrice: null },
  { name: "Пюлиньи-Монраше. Жозеф Друэн", type: "тихое", color: "белое", region: "burgundy", regionLabel: "Бургундия", country: "france", bottlePrice: 21000, glassPrice: null, note: "0.375" },
  { name: "Мерсо Ле Клу. Бушар Пер э Фис", type: "тихое", color: "белое", region: "burgundy", regionLabel: "Бургундия", country: "france", bottlePrice: 39000, glassPrice: null },
  { name: "Мюскаде Севр-э-Мен. Домен Ля От Феври", type: "тихое", color: "белое", region: "loire", regionLabel: "Долина Луары", country: "france", bottlePrice: 11000, glassPrice: null },
  { name: "Сомюр Блан. Домен де Нерлё", type: "тихое", color: "белое", region: "loire", regionLabel: "Долина Луары", country: "france", bottlePrice: 7200, glassPrice: null },
  { name: "Сансер «Терр де Силекс». Шато де Сансер", type: "тихое", color: "белое", region: "loire", regionLabel: "Долина Луары", country: "france", bottlePrice: 23000, glassPrice: 4600 },
  { name: "Пино Гри Гран Крю Шпигель. Домэн Шлюмберже", type: "тихое", color: "белое", region: "alsace", regionLabel: "Эльзас", country: "france", bottlePrice: 14500, glassPrice: null, note: "п/сл" },
  { name: "Кот дю Рон Блан. Гигаль", type: "тихое", color: "белое", region: "rhone", regionLabel: "Долина Роны", country: "france", bottlePrice: 9000, glassPrice: 1800 },
  { name: "Кларандель от О-Брион Блан. Домен Кларенс Диллон", type: "тихое", color: "белое", region: "bordeaux", regionLabel: "Бордо", country: "france", bottlePrice: 9500, glassPrice: null },

  // ═══════════ ГЕРМАНИЯ — БЕЛЫЕ ═══════════
  { name: "«Доктор Эль» Драй Рислинг Квалитетсвайн. Доктор Лозен", type: "тихое", color: "белое", region: "mosel", regionLabel: "Германия, Мозель", country: "germany", bottlePrice: 6500, glassPrice: 1300, note: "п/сух" },
  { name: "Рислинг. Шлосс Райнхартсхаузен", type: "тихое", color: "белое", region: "rheingau", regionLabel: "Германия, Рейнгау", country: "germany", bottlePrice: 10800, glassPrice: null },
  { name: "Нирштайн Рислинг. Вайнгут Гундерлох", type: "тихое", color: "белое", region: "rheinhessen", regionLabel: "Германия, Рейнгессен", country: "germany", bottlePrice: 14000, glassPrice: null },

  // ═══════════ АВСТРИЯ — БЕЛЫЕ ═══════════
  { name: "Грюнер Вельтлинер Федершпиль Террассен. Домане Вахау", type: "тихое", color: "белое", region: "wachau", regionLabel: "Австрия, Вахау", country: "austria", bottlePrice: 9000, glassPrice: 1800 },
  { name: "Рислинг Лангенлойс. Настль", type: "тихое", color: "белое", region: "loweraustria", regionLabel: "Австрия, Нижняя Австрия", country: "austria", bottlePrice: 9500, glassPrice: null, note: "п/сух" },
  { name: "Гельбер Мускателлер Федершпиль. Вахау Шмельц", type: "тихое", color: "белое", region: "wachau", regionLabel: "Австрия, Вахау", country: "austria", bottlePrice: 12000, glassPrice: null },

  // ═══════════ РОЗОВЫЕ МИРА ═══════════
  { name: "Пфефферер Пинк. Кольтеренцио", type: "тихое", color: "розовое", region: "trentino", regionLabel: "Италия, Трентино-Альто Адидже", country: "italy", bottlePrice: 9000, glassPrice: 1800 },
  { name: "Эм Минитю. Шато Минюти", type: "тихое", color: "розовое", region: "provence", regionLabel: "Франция, Прованс", country: "france", bottlePrice: 12000, glassPrice: null },
  { name: "Роза Дольче&Габбана. Доннафугата", type: "тихое", color: "розовое", region: "sicily", regionLabel: "Италия, Сицилия", country: "italy", bottlePrice: 18700, glassPrice: null },

  // ═══════════ ИТАЛИЯ — КРАСНЫЕ ═══════════
  { name: "Вино Нобиле де Монтепульчано Резерва. Фаттория дель Черро", type: "тихое", color: "красное", region: "tuscany", regionLabel: "Тоскана", country: "italy", bottlePrice: 10000, glassPrice: null, note: "0.375" },
  { name: "Вальмаджоре Неббиоло д'Альба. Сандроне Лучано", type: "тихое", color: "красное", region: "piedmont", regionLabel: "Пьемонт", country: "italy", bottlePrice: 17000, glassPrice: null },
  { name: "«Фонтанелле» Барбера. Аскьери", type: "тихое", color: "красное", region: "piedmont", regionLabel: "Пьемонт", country: "italy", bottlePrice: 13000, glassPrice: null },
  { name: "Рабая Барбареско. Джузеппе Кортезе", type: "тихое", color: "красное", region: "piedmont", regionLabel: "Пьемонт", country: "italy", bottlePrice: 28000, glassPrice: null },
  { name: "Бернардо Барбареско. Черетто", type: "тихое", color: "красное", region: "piedmont", regionLabel: "Пьемонт", country: "italy", bottlePrice: 46000, glassPrice: null },
  { name: "Кастильоне Бароло. Вьетти", type: "тихое", color: "красное", region: "piedmont", regionLabel: "Пьемонт", country: "italy", bottlePrice: 55000, glassPrice: null },
  { name: "Ла Серра Бароло. Мауро Молино", type: "тихое", color: "красное", region: "piedmont", regionLabel: "Пьемонт", country: "italy", bottlePrice: 32000, glassPrice: 6400 },
  { name: "Кьянти Классико Ризерва. Вилла а Сеста", type: "тихое", color: "красное", region: "tuscany", regionLabel: "Тоскана", country: "italy", bottlePrice: 10600, glassPrice: 2120 },
  { name: "Виньето Гауджоле Россо ди Монтальчино. Кастильон дель Боско", type: "тихое", color: "красное", region: "tuscany", regionLabel: "Тоскана", country: "italy", bottlePrice: 15200, glassPrice: null },
  { name: "Брунелло ди Монтальчино. Мастроянни", type: "тихое", color: "красное", region: "tuscany", regionLabel: "Тоскана", country: "italy", bottlePrice: 23000, glassPrice: 4600 },
  { name: "Тиньянелло. Антинори", type: "тихое", color: "красное", region: "tuscany", regionLabel: "Тоскана", country: "italy", bottlePrice: 48000, glassPrice: null },
  { name: "Варвара Болгери. Кастело ди Болгери", type: "тихое", color: "красное", region: "tuscany", regionLabel: "Тоскана", country: "italy", bottlePrice: 17000, glassPrice: null },
  { name: "Вальполичелла Супериоре. Рокколо Грасси", type: "тихое", color: "красное", region: "veneto", regionLabel: "Венето", country: "italy", bottlePrice: 14800, glassPrice: null },
  { name: "Амароне Классико Виньето Монте Сант'Урбано. Спери Витикольтори", type: "тихое", color: "красное", region: "veneto", regionLabel: "Венето", country: "italy", bottlePrice: 22000, glassPrice: null },
  { name: "Альянико дель Табурно. Фаттория Ла Риволта", type: "тихое", color: "красное", region: "campania", regionLabel: "Кампания", country: "italy", bottlePrice: 11600, glassPrice: null },
  { name: "Монтепульчано д'Абруццо. Джулиана Вичини", type: "тихое", color: "красное", region: "abruzzo", regionLabel: "Абруццо", country: "italy", bottlePrice: 7500, glassPrice: 1500 },
  { name: "Рефоско дель Педунколо Россо. Дзорцеттиг", type: "тихое", color: "красное", region: "friuli", regionLabel: "Фриули", country: "italy", bottlePrice: 8000, glassPrice: null },
  { name: "«Луккарелли» Примитиво. Фарнезе", type: "тихое", color: "красное", region: "apulia", regionLabel: "Апулия", country: "italy", bottlePrice: 9000, glassPrice: null, note: "п/сух" },
  { name: "Монтефалько Сагрантино. Ацьенда Фонголи", type: "тихое", color: "красное", region: "umbria", regionLabel: "Умбрия", country: "italy", bottlePrice: 18000, glassPrice: null },
  { name: "Чинюс. Таска д'Альмерита", type: "тихое", color: "красное", region: "sicily", regionLabel: "Сицилия", country: "italy", bottlePrice: 11000, glassPrice: 2200 },
  { name: "Буйо Кариньяно дель Сульчис Ризерва. Кантина Меза", type: "тихое", color: "красное", region: "sardinia", regionLabel: "Сардиния", country: "italy", bottlePrice: 16000, glassPrice: null },

  // ═══════════ ФРАНЦИЯ — КРАСНЫЕ ═══════════
  { name: "Бургонь Пино Нуар «Резерв Сен-Пьер». Паскаль Бушар", type: "тихое", color: "красное", region: "burgundy", regionLabel: "Бургундия", country: "france", bottlePrice: 12500, glassPrice: null },
  { name: "Жевре-Шамбертен «Кюве дОльн». Лорен Понсо", type: "тихое", color: "красное", region: "burgundy", regionLabel: "Бургундия", country: "france", bottlePrice: 35000, glassPrice: 7000 },
  { name: "Шамболь-Мюзиньи «Ле Фремьер». Домен Мишель Маньен", type: "тихое", color: "красное", region: "burgundy", regionLabel: "Бургундия", country: "france", bottlePrice: 39000, glassPrice: null },
  { name: "Шато Шас-Сплен", type: "тихое", color: "красное", region: "bordeaux", regionLabel: "Бордо", country: "france", bottlePrice: 18000, glassPrice: 3600 },
  { name: "Шато Понте-Кане 5-ем Гран Крю Классе", type: "тихое", color: "красное", region: "bordeaux", regionLabel: "Бордо, Пойяк", country: "france", bottlePrice: 53000, glassPrice: null },
  { name: "Кинтессанс. Шато Пески", type: "тихое", color: "красное", region: "rhone", regionLabel: "Долина Роны, Кот де Ванту", country: "france", bottlePrice: 11000, glassPrice: null },
  { name: "Шатонеф-дю-Пап «Шато де Бокастель». Перрен э Фис", type: "тихое", color: "красное", region: "rhone", regionLabel: "Долина Роны", country: "france", bottlePrice: 46000, glassPrice: null },
  { name: "Шавиньоль Руж. Домен Поль Тома", type: "тихое", color: "красное", region: "loire", regionLabel: "Долина Луары, Сансер", country: "france", bottlePrice: 14000, glassPrice: null },
  { name: "Флёри Орижин. Домен Грегуар Оппено", type: "тихое", color: "красное", region: "beaujolais", regionLabel: "Божоле", country: "france", bottlePrice: 10400, glassPrice: 2080 },
  { name: "Мулен-а-Ван. Шато Де Башляр", type: "тихое", color: "красное", region: "beaujolais", regionLabel: "Божоле", country: "france", bottlePrice: 15000, glassPrice: null },

  // ═══════════ ДЕСЕРТНЫЕ И КРЕПЛЕНЫЕ ═══════════
  { name: "«Кюве Кристин» Гевюрцтраминер Вендаж Тардив. Шлюмберже", type: "десертное", color: "белое", region: "alsace", regionLabel: "Эльзас", country: "france", bottlePrice: 14000, glassPrice: null, note: "сл, 0.375" },
  { name: "Речото делла Вальполичелла Вальпантена. Бертани", type: "десертное", color: "красное", region: "veneto", regionLabel: "Италия, Венето", country: "italy", bottlePrice: 11000, glassPrice: 2200, note: "сл, /100мл/" },
  { name: "Айсвайн Экскизи. Гебрюдер Ниттнаус", type: "десертное", color: "белое", region: "burgenland", regionLabel: "Австрия, Бургенланд", country: "austria", bottlePrice: 11000, glassPrice: 3600, note: "сл, /125мл/" },
  { name: "Файн Тауни Порт. Доус", type: "крепленое", color: "красное", region: "portugal", regionLabel: "Португалия", country: "portugal", bottlePrice: 6800, glassPrice: 680, note: "/75мл/" },
];
