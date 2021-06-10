import { MarkerTypes } from './utils'
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
        toggles: MarkerTypes.career,
        visible: true,
        toggle: true,
        isSelected: true
    },
    {
        title: "Рудник",
        icon: IconType.mining,
        toggles: MarkerTypes.mining,
        visible: true,
        toggle: true,
        isSelected: true
    },
    {
        title: "Фабрика",
        icon: IconType.fabric,
        toggles: MarkerTypes.fabric,
        visible: true,
        toggle: true,
        isSelected: true
    },
    {
        title: "Солнечные панели и ветряки",
        icon: IconType.solar,
        toggles: MarkerTypes.solar,
        visible: true,
        toggle: true,
        isSelected: true
    }
];

export default legend;