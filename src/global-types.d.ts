// type TodoType = any;

type MainPagePropsType = {
    params: { 
        locale: string;
    };
}

type CustomButtonType = {
    locale: string;
    translateButton: string;
    type: "button" | "link";
    href?: string;
    className: string;
    textClass: string;
    icon?: string;
    // onClick: () => void;
}

interface MotionSectionProps extends ForwardRefComponent<HTMLElement, HTMLMotionProps<"section">> {
    children: React.ReactNode;
    className?: string;
}

interface MotionDivProps extends ForwardRefComponent<HTMLElement, HTMLMotionProps<"div">> {
    children: React.ReactNode;
    className?: string;
}

interface MotionFooterProps extends ForwardRefComponent<HTMLElement, HTMLMotionProps<"footer">> {
    children: React.ReactNode;
    className?: string;
}

interface MotionMainProps extends ForwardRefComponent<HTMLElement, HTMLMotionProps<"Main">> {
    children: React.ReactNode;
    className?: string;
}

type WantMotionAnimationType = {
    wantAnimations: boolean;
    setWantAnimations: (value: boolean) => void;
}

type CreateAccountModalType = {
    isModalActive: boolean;
    setIsModalActive: (value: boolean) => void;
}

type UserState = {
    username: string;
    email: string;
    password: string;
    setUser: (user: { username: string; email: string; password: string }) => void;
}

type ArtistPagePropsType = {
    params: { 
        name: string;
        locale: string;
    };
}

type ArtistParamsType = {
    paramsName: string;
    artistNameEn: string;
    artistNameFa: string;
    bioEn: string;
    bioFa: string;
    topImage: string;
    avatar: string;
    achievements: {
        volume: number;
        soldNFTs: number;
        followers: number;
    }
    createdCount: number;
    ownedCount: number;
    collectionCount: number;
    createdTabInfo: ArtistCreatedTabType[];
    ownedTabInfo: ArtistOwnedTabType[];
    collectionTabInfo: ArtistCollectionTabType[];
}

type ArtistCreatedTabType = {
    id: number;
    href: string;
    image: string;
    titleEn: string;
    titleFa: string;
    price: string;
    highestBid: string;
}

type ArtistOwnedTabType = {
    id: number;
    href: string;
    image: string;
    titleEn: string;
    titleFa: string;
    price: string;
    highestBid: string;
}

type ArtistCollectionTabType = { 
    id: number;
    href: string;
    imageMain: string;
    topLayerImage: string;
    titleEn: string;
    titleFa: string;
}

type NFTPagePropsType = {
    params: { 
        name: string;
        locale: string;
    };
}

type NFTParamsType = {
    paramsName: string;
    artistNameEn: string;
    artistNameFa: string;
    releaseDate: string;
    createdArtistEn: string;
    createdArtistFa: string;
    artistHref: string;
    descriptionEn: string;    
    descriptionFa: string;    
    topImage: string;
    artistImage: string;
    MoreNFTsFromArtist: MoreNFTsFromArtistType[];
}

type MoreNFTsFromArtistType = {
    id: number;
    href: string;
    image: string;
    titleEn: string;
    titleFa: string;
    price: string;
    highestBid: string;
}

type MarketplacePagePropsType = {
    params: { 
        locale: string;
    };
}

type FetchedNFTsDataType = {
    collection: string;
    image_url: string;
    display_image_url: string;
    metadata_url: string;
    opensea_url: string;
}

type CategoryParamsType = {
    paramsName: string;
    categoryNameEn: string;
    categoryNameFa: string;
    descriptionEn: string;
    descriptionFa: string;
    topImage: string;
    achievements: {
        tage: number;
        usage: number;
        account: number;
    }
    nfts: CategoryNFTsType[];
}

type CategoryNFTsType = {
    id: number;
    href: string;
    image: string;
    titleEn: string;
    titleFa: string;
    artistName: string;
    artistAvatar: string;
    price: string;
    highestBid: string;
}

type NFTRankingsUser = {
    id: number;
    href: string;
    avatar: string;
    artist: string, 
    change: number;
    sold_nfts: number;
    volume: number;
};
  
type SortConfig = {
    key: keyof NFTRankingsUser;
    direction: "ascending" | "descending";
};

type RankingsHeaderTitleType = {
    id: number;
    titleEn: string;
    titleFa: string;
    handleSort: keyof NFTRankingsUser;
    className: string;
}