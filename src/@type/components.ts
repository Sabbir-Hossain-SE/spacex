export type AntButtonProps = {
    title: string;
    handleClick(event: React.MouseEvent<HTMLButtonElement>): void;
};

export type AntSpinProps = {
    children?: React.ReactNode;
};

export type AntModalProps = {
    children?: React.ReactNode;
    title: string;
    isModalOpen: boolean;
    width: number;
    rest: object;
};

export type Rocket = {
    rocket_id: string;
    rocket_name: string;
    rocket_type: string;
};

export type Site = {
    site_id: string;
    site_name: string;
    site_name_long: string;
};

export type Images = [string];
export type Ships = [string];

export type Links = {
    mission_patch: string;
    mission_patch_small: string;
    wikipedia: string;
    video_link: string;
    flickr_images: [Images];
};

export type Launch = {
    _id?: string;
    flight_number?: number;
    launch_date_utc: string;
    rocket?: Rocket;
    launch_site?: Site;
    launch_success?: boolean;
    mission_name?: string;
    links?: Links;
    ships?: Ships;
    details?: string;
};

export type AntCardProps = {
    launch: Launch;
};
