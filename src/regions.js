import ural from './assets/pictures/ural.png';
import chukotka from './assets/pictures/chukotka.png';
import karelia from './assets/pictures/karelia.png';
import kazakhstan from './assets/pictures/kazakhstan.png';
import khabarovsk from './assets/pictures/khabarovsk.png';
import krasnoyarsk from './assets/pictures/krasnoyarsk.png';
import magadan from './assets/pictures/magadan.png';
import yakutia from './assets/pictures/yakutia.png';

const regions = [
    {
        id: 0,
        name: 'Урал',
        geos: [ 'geo-21', 'geo-30' ],
        highlighted: true,
        info: {
            climate: 'Изменчивый',
            specific: 'Большое количество осадков летом на Северном Урале и в горной его части (400–550 мм).',
            winter: 'Средняя температура января: от –19˚С до –22˚С (–50˚С).',
            summer: 'Прохладное. Средняя температура июля: от +19˚С до +23˚С.',
            picture: ural,
            icon: 'rainy'
        }
    },
    {
        id: 1,
        name: 'Магаданская область',
        geos: [ 'geo-24' ],
        highlighted: true,
        info: {
            climate: 'Экзотический',
            specific: 'Над Магаданской областью постоянно идет борьба морских и континентальных воздушных масс, сопровождающаяся обильными осадками.',
            winter: 'Средняя температура: от –20˚С до –50˚С.',
            summer: 'Короткое, в Центральных районах Колымы жаркое, а в Магадане сырое. Средняя температура июля: от +16˚С до +50˚С.',
            picture: magadan,
            icon: 'rainy'
        }
    },
    {
        id: 2,
        name: 'Красноярский край',
        geos: [ 'geo-40' ],
        highlighted: true,
        info: {
            climate: 'Противоречивый',
            specific: 'На большой территории края три климатических зоны — от суровой арктической до умеренной континентальной, поэтому когда на юге края уже загорают, на крайнем Севере еще катаются на лыжах.',
            winter: 'Средняя температура января составляет от –36˚С на севере до –18˚С на юге.',
            summer: 'Средняя температура июля от +13˚С на севере до +22˚С на юге.',
            picture: krasnoyarsk,
            icon: 'conflict'
        }
    },
    {
        id: 3,
        name: 'Карелия',
        geos: [ 'geo-29' ],
        highlighted: true,
        info: {
            climate: 'Неустойчивый',
            specific: 'Высокая влажность, когда холод и тепло ощущаются сильнее — первый враг модных укладок. Ни один лак для волос не способен удержать прическу в здешнем климате: не только из-за влажности, но и ветра.',
            winter: 'Средняя температура января: от –9˚С до –14˚С.',
            summer: 'Прохладное, дождливое. Средняя температура июля: +17˚С.',
            picture: karelia,
            icon: 'zontik'
        }
    },
    {
        id: 4,
        name: 'Чукотка',
        geos: [ 'geo-23' ],
        highlighted: true,
        info: {
            climate: 'Суровый',
            specific: 'Южак – порывистый южный ветер дует до 5 месяцев в году. В течение часа южак может дуть со скоростью 40 м/с, а порывы могут достигать 80 м/с. Южак уносит почти весь снег, оголяя берега, и разрушает постройки.',
            winter: 'Средняя температура января: от –18˚С до –42˚С (–60˚С).',
            summer: 'Короткое, дождливое, холодное. Средняя температура июля: от +4˚С до +14˚С.',
            picture: chukotka,
            icon: 'surov'
        }
    },
    {
        id: 5,
        name: 'Казахстан',
        geos: [ 'geo-20' ],
        highlighted: true,
        info: {
            climate: 'Солнечный',
            specific: 'Солнце здесь сияет 2–3 тысячи часов в год: так, в Костанае — 2132 ч. Это на 400 ч. больше, чем в Москве, находящейся на той же широте. Зато погода здесь может меняться в течение суток от +10˚С до –5˚С. На юге бывают песчаные бури.',
            winter: 'Средняя температура января от: –4˚С до –19˚С (–45˚С).',
            summer: 'Жаркое, засушливое. В июле средние показатели от +19˚С до +26˚С.',
            picture: kazakhstan,
            icon: 'sunny'
        }
    },
    {
        id: 6,
        name: 'Якутия',
        geos: [ 'geo-22' ],
        highlighted: true,
        info: {
            climate: 'Экстремальный',
            specific: 'Здесь находятся две самых холодных точки мира: Оймякон –71˚С и Верхоянск –68˚С. Зима — время ледяных туманов, они такие плотные, что не видны светофоры.',
            winter: 'Средняя температура воздуха в январе: –45˚С.',
            summer: 'Короткое, солнечное. Средняя температура июля: от +7˚С до +19˚С.',
            picture: yakutia,
            icon: 'extreme'
        }
    },
    {
        id: 7,
        name: 'Хабаровский край',
        geos: [ 'geo-26', 'geo-25' ],
        highlighted: true,
        info: {
            climate: 'Ветреный',
            specific: 'Муссоны — устойчивые сезонные ветры. Летом дуют с моря на сушу и приносят дожди, а зимой — с суши, неся сухую погоду.',
            winter: 'Средняя температура января: от –22˚С до –40˚С.',
            summer: 'Влажное и жаркое. Средняя температура июля: от +20˚С до +28˚С.',
            picture: khabarovsk,
            icon: 'windy'
        }
    }
];

export default regions;