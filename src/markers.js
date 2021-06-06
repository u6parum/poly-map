export const MarkerTypes = {
	"office": "office",
	"geosearch": "geosearch",
	"mining": "mining",
	"project": "project",
	"running": "running",
	"career": "career",
	"fabric": "fabric",
	"solar": "solar",
	"h": "h",
    "factory": "factory"
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
    0: [],
    // Магаданская область
    1: [
        { 
            title: "Омолонская ЗРК", 
            type: MarkerTypes.factory,
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
            title: "Серебро Магадана", 
            type: MarkerTypes.factory,
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
        }
    ],
    // Красноярский край
    2: [
        { 
            title: "Амикан", 
            type: MarkerTypes.factory,
            solar: false,
            visible: true,
            items: [
                { type: MarkerTypes.career, text: "Карьер" },
                { type: MarkerTypes.fabric, text: "Перерабатывающая фабрика — планируется строительство" },
                { type: MarkerTypes.mining, text: "Рудник (планируется)" },
            ],
            x: 61,
            y: 22
        }
    ],
    // Карелия
    3: [],
    // Чукотка
    4: [],
    // Казахстан
    5: [
        { 
            title: "Бакырчикское ГП", 
            type: MarkerTypes.factory,
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
            title: "Варваринское", 
            type: MarkerTypes.factory,
            solar: false,
            visible: true,
            items: [
                { type: MarkerTypes.career, text: "Карьер" }, 
                { type: MarkerTypes.fabric, text: "Золотоизвлекательная и обогатительная фабрика — флотация / цианирование" },
            ],
            x: 33, 
            y: 20.6
        },
        { 
            title: "Комаровское ГП", 
            type: MarkerTypes.factory,
            solar: false,
            visible: true,
            items: [
                { type: MarkerTypes.career, text: "Карьер" }, 
            ],
            x: 30.3, 
            y: 19
        }
    ],
    // Якутия
    6: [
        { 
            title: "ЮВГК", 
            type: MarkerTypes.factory,
            solar: false,
            visible: true,
            items: [
                { type: MarkerTypes.career, text: "Карьер Нежданинский — запуск в 2021 году" },
                { type: MarkerTypes.mining, text: "Рудник — запуск в 2029 году" },
                { type: MarkerTypes.fabric, text: "Обогатительная фабрика — гравитация / флотация. Запуск в 2021 году" },
            ],
            x: 93.1,
            y: 32.5
        }
    ],
    // Хаб. край
    7: [
        { 
            title: "Ресурсы Албазино", 
            type: MarkerTypes.factory,
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
            type: MarkerTypes.factory,
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
            title: "Амурский ГМК", 
            type: MarkerTypes.factory,
            solar: false,
            visible: true,
            items: [
                { type: MarkerTypes.fabric, text: "Автоклавное окисление / цианирование (POX) — запуск второго автоклава в 2023 году" }, 
            ],
            x: 105.2, 
            y: 18.1
        }
    ],
    8: []
};


for (const k in Markers) {
    for (const v of Markers[k]) {
        v["id"] = '_' + Math.random().toString(36).substr(2, 9);
    }
}


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
