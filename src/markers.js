import { MarkerTypes } from "./utils";

const Markers = {
    // Урал
    0: [],
    // Магаданская область
    1: [
        { 
            title: "Омолонская ЗРК", 
            type: MarkerTypes.factory,
            visible: true,
            x: 107.2, 
            y: 40.4
        },
        { 
            title: "Серебро Магадана", 
            type: MarkerTypes.factory,
            visible: true,
            x: 105.6, 
            y: 36.5
        }
    ],
    // Красноярский край
    2: [
        { 
            title: "Амикан", 
            type: MarkerTypes.factory,
            visible: true,
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
            visible: true,
            x: 49.7, 
            y: 11.8
        },
        { 
            title: "Варваринское", 
            type: MarkerTypes.factory,
            visible: true,
            x: 33, 
            y: 20.6
        },
        { 
            title: "Комаровское ГП", 
            type: MarkerTypes.factory,
            visible: true,
            x: 30.3, 
            y: 19
        }
    ],
    // Якутия
    6: [
        { 
            title: "ЮВГК", 
            type: MarkerTypes.factory,
            visible: true,
            directInfluenceMarkers: ['fish', 'plant'],
            indirectInfluenceMarkers: ['plant', 'fish'],
            directInfluenceItems: {
                EN: {
                    fish: [ { title: 'Рыба', description: 'Текст описания Текст описания Текст описания Текст описания Текст описания Текст описания м', photo: 'https://i.ytimg.com/vi/TypksrtdDH8/maxresdefault.jpg' } ],
                    plant: [
                        { title: 'Растение', description: 'Текст описания', photo: 'https://www.vniisubtrop.ru/images/news/2018/Pion/09042018-6.jpg' },
                        { title: 'Другое растение', description: 'Текст описания', photo: 'https://n1s1.hsmedia.ru/8a/4f/82/8a4f82777731790d55fcb1f0748be2b2/620x462_1_0dac89479360938d95c6e71ebc89682d@1000x745_0xac120003_11997538751587738886.jpg' },
                    ],
                    animal: [],
                    bird: [],
                },
                CR: {
                    fish: [],
                    plant: [],
                    animal: [],
                    bird: [],
                },
                VU: {
                    fish: [],
                    plant: [],
                    animal: [],
                    bird: [],
                },
                CD: {
                    fish: [],
                    plant: [],
                    animal: [],
                    bird: [],
                },
                NT: {
                    fish: [],
                    plant: [],
                    animal: [],
                    bird: [],
                },
                LC: {
                    fish: [],
                    plant: [],
                    animal: [],
                    bird: [],
                },
            },
            indirectInfluenceItems: {
                EN: {
                    fish: [],
                    plant: [],
                    animal: [],
                    bird: [],
                },
                CR: {
                    fish: [],
                    plant: [],
                    animal: [],
                    bird: [],
                },
                VU: {
                    fish: [],
                    plant: [],
                    animal: [],
                    bird: [],
                },
                CD: {
                    fish: [],
                    plant: [],
                    animal: [],
                    bird: [],
                },
                NT: {
                    fish: [],
                    plant: [],
                    animal: [],
                    bird: [],
                },
                LC: {
                    fish: [],
                    plant: [],
                    animal: [],
                    bird: [],
                },
            },
            x: 93.1,
            y: 32.5
        }
    ],
    // Хаб. край
    7: [
        { 
            title: "Ресурсы Албазино", 
            type: MarkerTypes.factory,
            visible: true,
            x: 103.5, 
            y: 21.3
        },
        { 
            title: "Светлое", 
            type: MarkerTypes.factory,
            visible: true,
            x: 100.2,
            y: 27.2
        },
        { 
            title: "Амурский ГМК", 
            type: MarkerTypes.factory,
            visible: true,
            directInfluenceMarkers: ['animal', 'plant'],
            indirectInfluenceMarkers: ['animal', 'fish'],
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

export default Markers;
