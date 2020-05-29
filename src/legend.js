import { MarkerTypes } from './markers'
import { IconType } from "./components/helpers/icon/Icon";

const legend = [
    {
        title: "Офис",
        toggles: MarkerTypes.office,
        icon: IconType.office,
        visible: true,
        toggle: true,
        isSelected: true
    },
    {
        title: "Действующие предприятия",
        toggles: MarkerTypes.running,
        icon: IconType.running,
        visible: true,
        toggle: true,
        isSelected: true
    },
    {
        title: "Проекты развития",
        toggles: MarkerTypes.project,
        icon: IconType.project,
        visible: true,
        toggle: true,
        isSelected: true
    },
    {
        title: "Геологоразведочные проекты",
        toggles: MarkerTypes.geosearch,
        icon: IconType.geosearch,
        visible: true,
        toggle: true,
        isSelected: true
    },
    {
        title: "Карьер",
        icon: IconType.career,
        visible: true,
        toggle: false
    },
    {
        title: "Рудник",
        icon: IconType.mining,
        visible: true,
        toggle: false
    },
    {
        title: "Фабрика",
        icon: IconType.fabric,
        visible: true,
        toggle: false
    },
    {
        title: "Солнечные панели и ветряки",
        icon: IconType.solar,
        visible: true,
        toggle: false
    }
];

export default legend;