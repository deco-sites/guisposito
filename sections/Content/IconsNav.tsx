import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
    /**
     * @title Icones navegacionais
     */
    icons: Icons[];
}

export type Icons = {
    iconImage:ImageWidget,
    iconText: string;
    iconUrl: string;
}


export default function IconsNav({
    icons,
}: Props) {


    return(
        <div>
            <h1>${icons}</h1>
            <Slider></Slider>
            <SliderJS></SliderJS>
        </div>
    )
}