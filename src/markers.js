export const MarkerTypes = {
	"office": "office",
	"geosearch": "geosearch",
	"mining": "mining",
	"project": "project",
	"running": "running",
	"career": "career",
	"fabric": "fabric",
	"solar": "solar",
	"h": "h"
};


export const MarkerColors = {
	"office": "#EB5757",
	"geosearch": "#219653",
	"mining": "#2F80ED",
	"project": "#BB6BD9",
	"running": "#56CCF2",
	"career": "#4F4F4F",
	"fabric": "#F2994A",
	"solar": "#F2C94C",
};


const Markers = {
    // Урал
    0: [
        { 
            title: "Екатеринбург", 
            type: MarkerTypes.office,
            solar: false,
            visible: true,
            items: [
                { type: MarkerTypes.h, text: "Филиал «Полиметалл УК»" },
                { type: MarkerTypes.h, text: "Филиал «ТД Полиметалл»" },
            ],
            x: 36, 
            y: 25.3
        },
        { 
            title: "«Золото Северного Урала» (ЗСУ)", 
            type: MarkerTypes.running,
            solar: false,
            visible: true,
            items: [
                { type: MarkerTypes.career, text: "Карьер Воронцовский" }, 
                { type: MarkerTypes.mining, text: "Рудник — запуск в 2021 году" }, 
                { type: MarkerTypes.fabric, text: "Золотоизвлекательная фабрика — кучное выщелачивание" },
                { type: MarkerTypes.fabric, text: "Золотоизвлекательная фабрика — уголь-в-пульпе" },
            ],
            x: 38.4, 
            y: 29.3
        },
        // { 
        //     title: "«Северо-Калугинское»", 
        //     type: MarkerTypes.project,
        //     solar: false,
        //     visible: true,
        //     items: [
        //         { type: MarkerTypes.mining, text: "Рудник — запуск в 2020 году" }, 
        //     ],
        //     x: 35.3, 
        //     y: 27.8
        // },
        { 
            title: "«Краснотурьинск-Полиметалл»", 
            type: MarkerTypes.project,
            solar: false,
            visible: true,
            items: [
                { type: MarkerTypes.career, text: "Карьер (планируется)" }, 
                { type: MarkerTypes.mining, text: "Рудник (планируется)" }, 
                { type: MarkerTypes.fabric, text: "Золотоизвлекательная фабрика — флотация / гравитация. Запуск в 2023 году" }, 
            ],
            x: 39.5, 
            y: 29.2
        },
        // { 
        //     title: "Саумская горнорудная компания", 
        //     type: MarkerTypes.project,
        //     solar: false,
        //     visible: true,
        //     items: [
        //         { type: MarkerTypes.career, text: "Карьер — запуск в 2020 году" },
        //     ],
        //     x: 41.8, 
        //     y: 32.7
        // },
        { 
            title: "Воскресенский", 
            type: MarkerTypes.geosearch,
            solar: false,
            visible: true,
            x: 40.7, 
            y: 32.3
        },
        { 
            title: "Тамуньерский", 
            type: MarkerTypes.geosearch,
            solar: false,
            visible: true,
            x: 37.7, 
            y: 30.9
        },
        { 
            title: "Саум-Яхтельинский", 
            type: MarkerTypes.geosearch,
            solar: false,
            visible: true,
            x: 37.3, 
            y: 30.1
        },
        { 
            title: "Воронцовское, Южно-Воронцовский", 
            type: MarkerTypes.geosearch,
            solar: false,
            visible: true,
            x: 37.3, 
            y: 29.2
        },
        { 
            title: "Северо-Павдинская площадь", 
            type: MarkerTypes.geosearch,
            solar: false,
            visible: true,
            x: 36.4, 
            y: 28.8
        },
        { 
            title: "Туринская площадь", 
            type: MarkerTypes.geosearch,
            solar: false,
            visible: true,
            x: 35.4, 
            y: 29.0
        },
        { 
            title: "Пещерный", 
            type: MarkerTypes.geosearch,
            solar: false,
            visible: true,
            x: 38, 
            y: 28.5
        },
        { 
            title: "Салдинский", 
            type: MarkerTypes.geosearch,
            solar: false,
            visible: true,
            x: 33.7, 
            y: 27.1
        },
        { 
            title: "Маминское", 
            type: MarkerTypes.geosearch,
            solar: false,
            visible: true,
            x: 35.1, 
            y: 24.9
        },
    ],
    // Магаданская область
    1: [
        { 
            title: "Магадан", 
            type: MarkerTypes.office,
            solar: false,
            visible: true,
            items: [
                { type: MarkerTypes.h, text: "Филиал «ТД Полиметалл»" }, 
                { type: MarkerTypes.h, text: "Филиал «Полиметалл УК»" }, 
            ],
            x: 105.6, 
            y: 33.7
        },
        { 
            title: "Омолонская ЗРК", 
            type: MarkerTypes.running,
            solar: false,
            visible: true,
            items: [
                { type: MarkerTypes.mining, text: "Рудник «Биркачан»" }, 
                { type: MarkerTypes.mining, text: "Рудник «Цоколь»" }, 
                { type: MarkerTypes.mining, text: "Рудник «Ольча»" },
                { type: MarkerTypes.career, text: "Карьер Ольча" }, 
                { type: MarkerTypes.career, text: "Карьер Биркачан" }, 
                { type: MarkerTypes.fabric, text: "Золотоизвлекательная фабрика «Кубака» (уголь-в-пульпе)" },
                { type: MarkerTypes.fabric, text: "Золотоизвлекательная фабрика «Биркачан» (кучное выщелачивание)" },
            ],
            x: 107.2, 
            y: 40.4
        },
        { 
            title: "«Серебро Магадана»", 
            type: MarkerTypes.running,
            solar: false,
            visible: true,
            items: [
                { type: MarkerTypes.mining, text: "Рудник ГОКа «Дукат»" }, 
                { type: MarkerTypes.mining, text: "Рудник ГОКа «Лунное»" }, 
                { type: MarkerTypes.fabric, text: "Омсукчанская золотоизвлекательная фабрика — гравитация / флотация" },
                { type: MarkerTypes.fabric, text: "Золотоизвлекательная фабрика ГОКа «Лунное» (Меррилл-Кроу)" },
            ],
            x: 105.6, 
            y: 36.5
        },
        { 
            title: "«Приморское»", 
            type: MarkerTypes.project,
            solar: false,
            visible: true,
            items: [
                { type: MarkerTypes.mining, text: "Рудник (участок «Теплый») — запуск в 2021 году" },
            ],
            x: 107,
            y: 37.8
        },
        { 
            title: "Бургалийская", 
            type: MarkerTypes.geosearch,
            solar: false,
            visible: true,
            x: 106.2,
            y: 41.8859
        },
        { 
            title: "Туманинская", 
            type: MarkerTypes.geosearch,
            solar: false,
            visible: true,
            x: 105.6,
            y: 41.4
        },
        { 
            title: "Биркачан", 
            type: MarkerTypes.geosearch,
            solar: false,
            visible: true,
            x: 104.8755,
            y: 41.1290
        },
        { 
            title: "Нижний Биркачан", 
            type: MarkerTypes.geosearch,
            solar: false,
            visible: true,
            x: 106.5,
            y: 41.1
        },
        { 
            title: "Кубака (Центральная зона)", 
            type: MarkerTypes.geosearch,
            solar: false,
            visible: true,
            x: 105.7,
            y: 40.75
        },
        { 
            title: "Ёлочка", 
            type: MarkerTypes.geosearch,
            solar: false,
            visible: true,
            x: 105.7,
            y: 40.05
        },
        { 
            title: "Ольча", 
            type: MarkerTypes.geosearch,
            solar: false,
            visible: true,
            x: 102.1289,
            y: 40.6469
        },
        { 
            title: "Арылах", 
            type: MarkerTypes.geosearch,
            solar: false,
            visible: true,
            x: 103.0078,
            y: 38.8739
        },
        { 
            title: "Невенрекан", 
            type: MarkerTypes.geosearch,
            solar: false,
            visible: true,
            x: 108,
            y: 39.3210
        },
        { 
            title: "Ачагинская площадь", 
            type: MarkerTypes.geosearch,
            solar: false,
            visible: true,
            x: 104.6118,
            y: 38.0481
        },
        { 
            title: "Перевальное", 
            type: MarkerTypes.geosearch,
            solar: false,
            visible: true,
            x: 105.4,
            y: 37.3881
        },
        { 
            title: "Лунное", 
            type: MarkerTypes.geosearch,
            solar: false,
            visible: true,
            x: 103.7647,
            y: 37.5
        },
        { 
            title: "Дукат", 
            type: MarkerTypes.geosearch,
            solar: false,
            visible: true,
            x: 104.4,
            y: 36.8
        },
        { 
            title: "Джетская площадь", 
            type: MarkerTypes.geosearch,
            solar: false,
            visible: true,
            x: 103.9,
            y: 35.9
        },
        { 
            title: "Приморское", 
            type: MarkerTypes.geosearch,
            solar: false,
            visible: true,
            x: 107.2,
            y: 36.5
        },
    ],
    // Красноярский край
    2: [
        { 
            title: "Горно-рудная компания «Амикан»", 
            type: MarkerTypes.project,
            solar: false,
            visible: true,
            items: [
                { type: MarkerTypes.career, text: "Карьер" },
                { type: MarkerTypes.fabric, text: "Перерабатывающая фабрика — планируется строительство" },
                { type: MarkerTypes.mining, text: "Рудник (планируется)" },
            ],
            x: 61,
            y: 22
        },
        { 
            title: "Северо-Кристифенская площадь", 
            type: MarkerTypes.geosearch,
            solar: false,
            visible: true,
            x: 68.7305,
            y: 44.4495
        },
        { 
            title: "Ведугинское", 
            type: MarkerTypes.geosearch,
            solar: false,
            visible: true,
            x: 61,
            y: 23.1
        },
    ],
    // Карелия
    3: [{ 
            title: "Кааламо-1", 
            type: MarkerTypes.geosearch,
            solar: false,
            visible: true,
            x: 21, 
            y: 42.5
        },
        { 
            title: "Куолисменская", 
            type: MarkerTypes.geosearch, 
            solar: false,
            visible: true,
            x: 24.2, 
            y: 43
        },
        { 
            title: "Петровский-1", 
            type: MarkerTypes.geosearch,  
            solar: false,
            visible: true,
            x: 27.5, 
            y: 45.3
        },
        { 
            title: "Викша (участки Викшеозеровский, Кенти, Шарги)", 
            type: MarkerTypes.geosearch, 
            solar: false,
            visible: true,
            x: 23.6,
            y: 42
        },
    ],
    // Чукотка
    4: [
        { 
            title: "«Майское»", 
            type: MarkerTypes.running,
            solar: false,
            visible: true,
            items: [
                { type: MarkerTypes.fabric, text: "Золотоизвлекательная фабрика — флотационное обогащение / сорбционное выщелачивание" }, 
                { type: MarkerTypes.career, text: "Карьер" }, 
                { type: MarkerTypes.mining, text: "Рудник" },
            ],
            x: 104.1, 
            y: 48.4
        },
        { 
            title: "Долгожданное", 
            type: MarkerTypes.geosearch,
            solar: false,
            visible: true,
            x: 106.7432,
            y: 50.7643
        },
        { 
            title: "Майское", 
            type: MarkerTypes.geosearch,
            solar: false,
            visible: true,
            x: 104.4580,
            y: 49.2678
        },
    ],
    // Казахстан
    5: [
        { 
            title: "Нур-Султан", 
            type: MarkerTypes.office,
            solar: false,
            visible: true,
            items: [{ type: MarkerTypes.h, text: "«Полиметалл Евразия»" }],
            x: 39, 
            y: 16.8
        },
        { 
            title: "Усть-Каменогорск", 
            type: MarkerTypes.office,
            solar: false,
            visible: true,
            items: [{ type: MarkerTypes.h, text: "«Полиметалл Инжиниринг Казахстан»" }],
            x: 50, 
            y: 13
        },
        { 
            title: "Бакырчикское горнодобывающее предприятие (БГП)", 
            type: MarkerTypes.running,
            solar: false,
            visible: true,
            items: [
                { type: MarkerTypes.fabric, text: "Золотоизвлекательная фабрика — флотация" },
                { type: MarkerTypes.career, text: "Карьер" }, 
            ],
            x: 49.7, 
            y: 11.8
        },
        { 
            title: "«Варваринское»", 
            type: MarkerTypes.running,
            solar: true,
            visible: true,
            items: [
                { type: MarkerTypes.career, text: "Карьер" }, 
                { type: MarkerTypes.fabric, text: "Золотоизвлекательная и обогатительная фабрика — флотация / цианирование" },
            ],
            x: 33, 
            y: 20.6
        },
        { 
            title: "Комаровское горное предприятие", 
            type: MarkerTypes.running,
            solar: false,
            visible: true,
            items: [
                { type: MarkerTypes.career, text: "Карьер" }, 
            ],
            x: 30.3, 
            y: 19
        },
        { 
            title: "Бакырчик", 
            type: MarkerTypes.geosearch,
            solar: false,
            visible: true,
            x: 48.9, 
            y: 12.6
        },
        { 
            title: "Большевик", 
            type: MarkerTypes.geosearch,
            solar: false,
            visible: true,
            x: 47.1, 
            y: 12.7
        },
        { 
            title: "Варваринское", 
            type: MarkerTypes.geosearch,
            solar: false,
            visible: true,
            x: 31.7, 
            y: 20.6
        },
        { 
            title: "Тарутино", 
            type: MarkerTypes.geosearch,
            solar: false,
            visible: true,
            x: 34.4, 
            y: 21.6
        },
        { 
            title: "Комаровская площадь", 
            type: MarkerTypes.geosearch,
            solar: false,
            visible: true,
            x: 31.5, 
            y: 19.4
        },
    ],
    // Якутия
    6: [
        { 
            title: "Якутск", 
            type: MarkerTypes.office,
            solar: false,
            visible: true,
            items: [
                { type: MarkerTypes.h, text: "Филиал «ТД Полиметалл»" },
                { type: MarkerTypes.h, text: "Филиал «Полиметалл УК»" }
            ],
            x: 84.8, 
            y: 31.8
        },
        { 
            title: "Южно-Верхоянская горнодобывающая компания", 
            type: MarkerTypes.project,
            solar: false,
            visible: true,
            items: [
                { type: MarkerTypes.career, text: "Карьер Нежданинский — запуск в 2021 году" },
                { type: MarkerTypes.mining, text: "Рудник — запуск в 2029 году" },
                { type: MarkerTypes.fabric, text: "Обогатительная фабрика — гравитация / флотация. Запуск в 2021 году" },
            ],
            x: 93.1,
            y: 32.5
        },
        { 
            title: "Хотойдохская площадь", 
            type: MarkerTypes.geosearch,
            solar: false,
            visible: true,
            x: 94.7021,
            y: 36.7741
        },
        { 
            title: "Нежданинское", 
            type: MarkerTypes.geosearch,
            solar: false,
            visible: true,
            x: 93.1,
            y: 33.5
        },
        { 
            title: "Прогноз", 
            type: MarkerTypes.geosearch,
            solar: false,
            visible: true,
            x: 91,
            y: 35
        },
    ],
    // Хаб. край
    7: [
        { 
            title: "Владивосток", 
            type: MarkerTypes.office,
            solar: false,
            visible: true,
            items: [{ type: MarkerTypes.h, text: "Филиал «ТД Полиметалл»" }],
            x: 104.1, 
            y: 10.5
        },
        { 
            title: "Хабаровск", 
            type: MarkerTypes.office,
            solar: false,
            visible: true,
            items: [
                { type: MarkerTypes.h, text: "Филиал «ТД Полиметалл»" },
                { type: MarkerTypes.h, text: "Филиал «Полиметалл УК»" }
            ],
            x: 104.9, 
            y: 16.9
        },
        { 
            title: "Амурск", 
            type: MarkerTypes.office,
            solar: false,
            visible: true,
            items: [{ type: MarkerTypes.h, text: "Филиал «Полиметалл УК»" }],
            x: 105.6, 
            y: 21
        },
        { 
            title: "Ресурсы Албазино", 
            type: MarkerTypes.running,
            solar: false,
            visible: true,
            items: [
                { type: MarkerTypes.career, text: "Карьер (Анфиса, Фарида, Екатерина)" }, 
                { type: MarkerTypes.mining, text: "Рудник" },
                { type: MarkerTypes.fabric, text: "Обогатительная фабрика — флотация" },
            ],
            x: 103.5, 
            y: 21.3
        },
        { 
            title: "Светлое", 
            type: MarkerTypes.running,
            solar: true,
            visible: true,
            items: [
                { type: MarkerTypes.career, text: "Карьер — участки Эмми, Елена и Тамара" }, 
                { type: MarkerTypes.fabric, text: "Золотоизвлекательная фабрика — кучное выщелачивание" },
            ],
            x: 100.2,
            y: 27.2
        },
        { 
            title: "Амурский гидрометаллургический комбинат (АГМК)", 
            type: MarkerTypes.running,
            solar: false,
            visible: true,
            items: [
                { type: MarkerTypes.fabric, text: "Автоклавное окисление / цианирование (POX) — запуск второго автоклава в 2023 году" }, 
            ],
            x: 105.2, 
            y: 18.1
        },
        { 
            title: "Кутынская горно-геологическая компания", 
            type: MarkerTypes.project,
            solar: false,
            visible: true,
            items: [
                { type: MarkerTypes.career, text: "Карьер — запуск в 2021 году" }, 
                { type: MarkerTypes.fabric, text: "Золотоизвлекательная фабрика — кучное выщелачивание. Планируется строительство" }, 
            ],
            x: 101.8,
            y: 22.4
        },
        { 
            title: "Тихоокенский ГМК, Советская Гавань", 
            type: MarkerTypes.project,
            solar: false,
            visible: true,
            items: [
                { type: MarkerTypes.fabric, text: "Автоклавное окисление — планируется строительство" }, 
            ],
            x: 108,
            y: 19.9
        },
        { 
            title: "Талгий", 
            type: MarkerTypes.geosearch,
            solar: false,
            visible: true,
            x: 98.8330,
            y: 24.1858
        },
        { 
            title: "Уркачик", 
            type: MarkerTypes.geosearch,
            solar: false,
            visible: true,
            x: 98.8330,
            y: 23.1858
        },
        { 
            title: "Сыранская площадь", 
            type: MarkerTypes.geosearch,
            solar: false,
            visible: true,
            x: 99.6330,
            y: 22.7
        },
        { 
            title: "Кутынское", 
            type: MarkerTypes.geosearch,
            solar: false,
            visible: true,
            x: 100.6,
            y: 22.6
        },
        { 
            title: "Албазинское", 
            type: MarkerTypes.geosearch,
            solar: false,
            visible: true,
            x: 102.8, 
            y: 22.1
        },
    ],
    8: [{ 
            title: "Санкт-Петербург", 
            type: MarkerTypes.office,
            solar: false,
            items: [
                { type: MarkerTypes.h, text: "«Полиметалл УК»" }, 
                { type: MarkerTypes.h, text: "«ТД Полиметалл»" }, 
                { type: MarkerTypes.h, text: "«Полиметалл Инжиниринг»" }
            ],
            visible: true,
            x: 18.5, 
            y: 41.4
        },
    ]
};


export function flatMarkersList(markersList, regionIdKeyName = "regionId") {
    const flatMarkers = [];

    for (const regionId of Object.keys(markersList)) {
        const rMarkers = markersList[regionId];

        for (const marker of rMarkers) {
            flatMarkers.push({ ...marker, [regionIdKeyName]: parseInt(regionId) })
        }
    } 

    return flatMarkers;
}


export default Markers;
