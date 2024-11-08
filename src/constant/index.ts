import { DiscordLogoSVG, InstagramLogoSVG, TwitterLogoSVG, YoutubeLogoSVG } from "@/interface"
import ArtistCollectionTab from "@/template/artist-page/ArtistCollectionTab";
import ArtistCreatedTab from "@/template/artist-page/ArtistCreatedTab";
import ArtistOwnedTab from "@/template/artist-page/ArtistOwnedTab";
import MarketplaceCollectionsTab from "@/template/marketplace-page/MarketplaceCollectionsTab";
import MarketplaceNFTsTab from "@/template/marketplace-page/MarketplaceNFTsTab";
import MarketplaceSearchTab from "@/template/marketplace-page/MarketplaceSearchTab";

export const nftMarketplaceThemes = [
    "nftDefault", 
    "light", 
    "dark", 
    "monochrome",
    "cyberpunk",
    "retro",
    "forest",
    "aqua",
    "pastel",
    "midnight",
    "solarized",
    "ocean",
    "sunset",
    "lavender",
    "vintage",
    "candy",
    "neon",
    "earth",
    "autumn",
    "gold",
    "royal",
];

export const customThemes = [
    { 
        value: "nftDefault", 
        nameEn: "Default",
        nameFa: "پیش فرض",
        bgColor: "bg-gradient-to-r from-[#2B2B2B] to-[#3B3B3B]",
        textColor: "text-[#A259FF]" 
    },
    { 
        value: "light", 
        nameEn: "Light",
        nameFa: "روشن",
        bgColor: "bg-gradient-to-r from-[#FFFFFF] to-[#F4F4F4]",
        textColor: "text-[#000000]"
    },
    { 
      value: "dark", 
      nameEn: "Dark",
      nameFa: "تاریک",
      bgColor: "bg-gradient-to-r from-[#121212] to-[#1D1D1D]",
      textColor: "text-[#E0E0E0]"
    },
    { 
      value: "monochrome", 
      nameEn: "Monochrome",
      nameFa: "تک‌رنگ",
      bgColor: "bg-gradient-to-r from-[#333333] to-[#555555]",
      textColor: "text-[#8C8C8C]"
    },
    { 
      value: "cyberpunk", 
      nameEn: "Cyberpunk",
      nameFa: "سایبرپانک",
      bgColor: "bg-gradient-to-r from-[#1A1A40] to-[#710000]",
      textColor: "text-[#CB1DCD]"
    },
    { 
      value: "retro", 
      nameEn: "Retro",
      nameFa: "رترو",
      bgColor: "bg-gradient-to-r from-[#f98f0e] to-[#FFCA3A]",
      textColor: "text-[#1985A1]"
    },
    { 
      value: "forest", 
      nameEn: "Forest",
      nameFa: "جنگلی",
      bgColor: "bg-gradient-to-r from-[#2B5C2E] to-[#446C47]",
      textColor: "text-[#78C850]"
    },
    { 
      value: "aqua", 
      nameEn: "Aqua",
      nameFa: "آبی",
      bgColor: "bg-gradient-to-r from-[#003D5B] to-[#007D7E]",
      textColor: "text-[#00CED1]"
    },
    { 
      value: "pastel", 
      nameEn: "Pastel",
      nameFa: "رنگ مداد",
      bgColor: "bg-gradient-to-r from-[#FFE4E1] to-[#FFDAB9]",
      textColor: "text-[#FFB6C1]"
    },
    { 
      value: "midnight", 
      nameEn: "Midnight",
      nameFa: "نیمه‌شب",
      bgColor: "bg-gradient-to-r from-[#191970] to-[#1C1F3A]",
      textColor: "text-[#4C4CFF]"
    },
    { 
      value: "solarized", 
      nameEn: "Solarized",
      nameFa: "خورشیدی",
      bgColor: "bg-gradient-to-r from-[#073642] to-[#002B36]",
      textColor: "text-[#B58900]"
    },
    { 
      value: "ocean", 
      nameEn: "Ocean",
      nameFa: "اقیانوسی",
      bgColor: "bg-gradient-to-r from-[#013A63] to-[#014F86]",
      textColor: "text-[#00BFFF]"
    },
    { 
      value: "sunset", 
      nameEn: "Sunset",
      nameFa: "غروب",
      bgColor: "bg-gradient-to-r from-[#F97306] to-[#ff4343]",
      textColor: "text-[#FFB74D]"
    },
    { 
      value: "lavender", 
      nameEn: "Lavender",
      nameFa: "اسطوخودوس",
      bgColor: "bg-gradient-to-r from-[#B39DDB] to-[#9575CD]",
      textColor: "text-[#001aff]"
    },
    { 
      value: "vintage", 
      nameEn: "Vintage",
      nameFa: "قدیمی",
      bgColor: "bg-gradient-to-r from-[#D9BF77] to-[#E0C097]",
      textColor: "text-[#FFCA28]"
    },
    { 
      value: "candy", 
      nameEn: "Candy",
      nameFa: "آبنباتی",
      bgColor: "bg-gradient-to-r from-[#F48FB1] to-[#F06292]",
      textColor: "text-[#F50057]"
    },
    { 
      value: "neon", 
      nameEn: "Neon",
      nameFa: "نئونی",
      bgColor: "bg-gradient-to-r from-[#0B132B] to-[#1C2541]",
      textColor: "text-[#3A506B]"
    },
    { 
      value: "earth", 
      nameEn: "Earth",
      nameFa: "زمین",
      bgColor: "bg-gradient-to-r from-[#5C4033] to-[#6E573A]",
      textColor: "text-[#A67B5B]"
    },
    { 
      value: "autumn", 
      nameEn: "Autumn",
      nameFa: "پاییزی",
      bgColor: "bg-gradient-to-r from-[#8B4513] to-[#A0522D]",
      textColor: "text-[#FF8C00]"
    },
    { 
      value: "gold", 
      nameEn: "Gold",
      nameFa: "طلایی",
      bgColor: "bg-gradient-to-r from-[#FFD700] to-[#FFECB3]",
      textColor: "text-[#FFC107]"
    },
    { 
      value: "royal", 
      nameEn: "Royal",
      nameFa: "سلطنتی",
      bgColor: "bg-gradient-to-r from-[#2A1A5E] to-[#3A1F5D]",
      textColor: "text-[#6A0DAD]"
    },
];

export const metadataValues = {
    homeTitleEn: "NFT Marketplace",
    homeTitleFa: "بازار توکن دیجیتال",
    homeDescriptionEn: "Welcome to the NFT Marketplace, where you can discover modern and popular NFTs across a wide range of categories. Browse, bid, and buy unique digital assets, each crafted by talented artists from around the world. Experience the future of digital ownership and become part of a vibrant community of NFT enthusiasts.",
    homeDescriptionFa: "به بازار توکن دیجیتال خوش آمدید، جایی که می‌توانید توکن‌های دیجیتال مدرن و محبوب را در دسته‌بندی‌های مختلف کشف کنید. مرور کنید، پیشنهاد دهید و دارایی‌های دیجیتال منحصر به فرد را خریداری کنید که توسط هنرمندان بااستعداد از سراسر جهان خلق شده‌اند. آینده مالکیت دیجیتال را تجربه کنید و بخشی از جامعه پویای علاقه‌مندان به توکن‌های دیجیتال شوید",
    rankingsTitleEn: "NFT Marketplace | Rankings",
    rankingsTitleFa: "بازار توکن دیجیتال | رتبه‌بندی‌ها",
    notFoundTitleEn: "404 | Page Not Found",
    notFoundTitleFa: "404 | صفحه پیدا نشد",
    dashboardTitleEn: "NFT Marketplace | Dashboard",
    dashboardTitleFa: "بازار توکن دیجیتال | داشبورد",
    nftTitleEn: "NFT Marketplace | NFT - ",
    nftTitleFa: "بازار توکن دیجیتال | توکن - ",
    marketplaceTitleEn: "NFT Marketplace | Marketplace",
    marketplaceTitleFa: "بازار توکن دیجیتال | بازار",
    flashScriptTitleEn: "NFT Marketplace | Technologies",
    flashScriptTitleFa: "بازار توکن دیجیتال | فناوری‌ها",
    artistTitleEn: "NFT Marketplace | Artist - ",
    artistTitleFa: "بازار توکن دیجیتال | هنرمند - ",
    connectWalletTitleEn: "NFT Marketplace | Wallet",
    connectWalletTitleFa: "بازار توکن دیجیتال | کیف پول",
    createAccountTitleEn: "NFT Marketplace | Create Account",
    createAccountTitleFa: "بازار توکن دیجیتال | ایجاد حساب",
    categoryTitleEn: "NFT Marketplace | Category - ",
    categoryTitleFa: "بازار توکن دیجیتال | دسته بندی - ",
}

export const homeInfo = [
    { key: "title", value: "Landing page", className: "text-nftCustom-text" },
    { key: "isEnglish", value: "true", className: "text-nftCustom-text" }
];

export const navbarLinks = [
    { 
        key: 1, 
        value: "Marketplace", 
        href: "marketplace", 
        language: "marketplace" 
    },
    { 
        key: 2, 
        value: "Rankings", 
        href: "rankings", 
        language: "rankings" 
    },
    { 
        key: 3, 
        value: "Connect a wallet", 
        href: "connect-wallet", 
        language: "connect-wallet" 
    },
];

export const footerLinks = [
    { 
        id: 1,
        value: "Marketplace",
        href: "marketplace",
        language: "marketplace",
    },
    { 
        id: 2,
        value: "Rankings",
        href: "rankings",
        language: "rankings",
    },
    {
        id: 3,
        value: "Connect a wallet",
        href: "connect-wallet", 
        language: "connect-wallet",
    }
];

export const footerIcons = [
    {
        id: 1,
        value: DiscordLogoSVG,
    },
    {
        id: 2,
        value: YoutubeLogoSVG,
    },
    {
        id: 3,
        value: TwitterLogoSVG,
    },
    {
        id: 4,
        value: InstagramLogoSVG,
    },
];

export const discoverNumbers = [
    { id: 1, value: 240, text: "Total Sale" },
    { id: 2, value: 100, text: "Auctions" },
    { id: 3, value: 500, text: "Artists" },
];

export const trendingInfo = [
    {
        id: 1,
        bigImage: "animals-dog.jpg",
        smallImageOne: "animals-cat.jpg",
        smallImageTwo: "animals-bear.jpg",
        imageAlt: "Colorfull Animal NFT",
        numberImage: 1025,
        titleEn: "DSGN Animals",
        titleFa: "حیوانات",
        href: "mrfox",
        avatarImage: "mr-fox-avatar.jpg",
        avatarName: "MrFox",
        className: "",
    },
    {
        id: 2,
        bigImage: "mushrooms-one.jpg",
        smallImageOne: "mushrooms-two.jpg",
        smallImageTwo: "mushrooms-three.jpg",
        imageAlt: "Colorfull Animal NFT",
        numberImage: 521,
        titleEn: "Magic Mushrooms",
        titleFa: "قارچ‌های جادویی",
        href: "shroomie",
        avatarImage: "shroomie-avatar.jpg",
        avatarName: "Shroomie",
        className: "md:max-xl:ml-auto xl:mx-auto",
    },
    {
        id: 3,
        bigImage: "machines-one.jpg",
        smallImageOne: "machines-two.jpg",
        smallImageTwo: "machines-three.jpg",
        imageAlt: "Colorfull Animal NFT",
        numberImage: 209,
        titleEn: "Disco Machines",
        titleFa: "ربات های دیسکو",
        href: "bekind2robots",
        avatarImage: "bekind-robot-avatar.jpg",  
        avatarName: "BeKind2Robots",
        className: "md:max-xl:hidden xl:ml-auto",
    },
];

export const topCreatorsInfo = [
    {
        id: 1,
        rank: 1,
        avatarImage: "keepitreal-avatar.jpg",
        avatarName: "Keepitreal",
        className: "",
        href: "keepitreal",
        numberSales: 34.53,
    },
    {
        id: 2,
        rank: 2,
        avatarImage: "digilab-avatar.jpg",
        avatarName: "DigiLab",
        className: "",
        href: "digilab",
        numberSales: 32.13,
    },
    {
        id: 3,
        rank: 3,
        avatarImage: "gravityone-avatar.jpg",
        avatarName: "GravityOne",
        className: "",
        href: "gravityone",
        numberSales: 28.93,
    },
    {
        id: 4,
        rank: 4,
        avatarImage: "juanie-avatar.jpg",
        avatarName: "Juanie",
        className: "",
        href: "juanie",
        numberSales: 25.30,
    },
    {
        id: 5,
        rank: 5,
        avatarImage: "bluewhale-avatar.jpg",
        avatarName: "BlueWhale",
        className: "",
        href: "bluewhale",
        numberSales: 22.22,
    },
    {
        id: 6,
        rank: 6,
        avatarImage: "mr-fox-avatar.jpg",
        avatarName: "Mr Fox",
        className: "max-md:hidden",
        href: "mrfox",
        numberSales: 19.28,
    },
    {
        id: 7,
        rank: 7,
        avatarImage: "shroomie-avatar.jpg",
        avatarName: "Shroomie",
        className: "max-xl:hidden",
        href: "shroomie",
        numberSales: 18.75,
    },
    {
        id: 8,
        rank: 8,
        avatarImage: "robotica-avatar.jpg",
        avatarName: "Robotica",
        className: "max-xl:hidden",
        href: "robotica",
        numberSales: 16.21,
    },
    {
        id: 9,
        rank: 9,
        avatarImage: "rustyrobot-avatar.jpg",
        avatarName: "RustyRobot",
        className: "max-xl:hidden",
        href: "rustyrobot",
        numberSales: 15.88,
    },
    {
        id: 10,
        rank: 10,
        avatarImage: "animakid-avatar.png",
        avatarName: "Animakid",
        className: "max-xl:hidden",
        href: "animakid",
        numberSales: 15.25,
    },
    {
        id: 11,
        rank: 11,
        avatarImage: "dotgu-avatar.jpg",
        avatarName: "Dotgu",
        className: "max-xl:hidden",
        href: "dotgu",
        numberSales: 14.01,
    },
    {
        id: 12,
        rank: 12,
        avatarImage: "ghiblier-avatar.jpg",
        avatarName: "Ghiblier",
        className: "max-xl:hidden",
        href: "ghiblier",
        numberSales: 13.86,
    }
];

export const categories = [
    {
        id: 1,
        href: "art",
        blurImage: "art-category.jpg",
        iconImage: "paint-brush.png",
        titleEn: "Art",
        titleFa: "هنر",
    },
    {
        id: 2,
        href: "collectibles",
        blurImage: "icecream-ape.jpg",
        iconImage: "swatches.png",
        titleEn: "Collectibles",
        titleFa: "کلکسیون ها",
    },
    {
        id: 3,
        href: "music",
        blurImage: "music-category.jpg",
        iconImage: "music-notes.png",
        titleEn: "Music",
        titleFa: "موسیقی",
    },
    {
        id: 4,
        href: "photography",
        blurImage: "photography-category.jpg",
        iconImage: "camera.png",
        titleEn: "Photography",
        titleFa: "عکاسی",
    },
    {
        id: 5,
        href: "video",
        blurImage: "video-category.jpg",
        iconImage: "video-camera.png",
        titleEn: "Video",
        titleFa: "ویدیو",
    },
    {
        id: 6,
        href: "utility",
        blurImage: "utility-category.jpg",
        iconImage: "magicwand.png",
        titleEn: "Utility",
        titleFa: "ابزارها",
    },
    {
        id: 7,
        href: "sport",
        blurImage: "sport-category.jpg",
        iconImage: "basketball.png",
        titleEn: "Sport",
        titleFa: "ورزش",
    },
    {
        id: 8,
        href: "virtual-worlds",
        blurImage: "virtualworlds-category.jpg",
        iconImage: "planet.png",
        titleEn: "Virtual Worlds",
        titleFa: "دنیاهای مجازی",
    },
]

export const discoverMoreInfo = [
    {
        id: 1,
        href: "distant-galaxy",
        image: "distant-galaxy.jpg",
        titleEn: "Distant Galaxy",
        titleFa: "کهکشان دوردست",
        avatarImage: "moondancer-avatar.jpg",
        avatarName: "MoonDancer",
        price: "1.63",
        highestBid: "0.33",
        className: "",
    },
    {
        id: 2,
        href: "life-on-edena",
        image: "life-on-edena.jpg",
        titleEn: "Life on Edena",
        titleFa: "زندگی در ادنا",
        avatarImage: "nebulakid-avatar.jpg",
        avatarName: "NebulaKid",
        price: "0.89",
        highestBid: "0.27",
        className: "",
    },
    {
        id: 3,
        href: "astrofiction",
        image: "astro-fiction.jpg",
        titleEn: "AstroFiction",
        titleFa: "داستان فضایی",
        avatarImage: "dotgu-avatar.jpg",
        avatarName: "Spaceone",
        price: "1.45",
        highestBid: "0.31",
        className: "md:max-xl:hidden",
    },
];

export const howItWorksInfo = [
    {
        id: 1,
        image: "setup-your-wallet.png",
        imageAlt: "Wallet",
        titleEn: "Setup your wallet",
        titleFa: "راه‌اندازی کیف پول",
        textEn: "Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner.",
        textFa: "کیف پول مورد نظر خود را راه‌اندازی کنید و آن را با کلیک روی نماد کیف پول در گوشه بالا سمت راست به ما متصل کنید",
    },
    {
        id: 2,
        image: "create-collection.png",
        imageAlt: "Collection",
        titleEn: "Create Collection",
        titleFa: "ایجاد مجموعه",
        textEn: "Upload your work and setup your collection. Add a description, social links and floor price.",
        textFa: "اثر خود را آپلود کرده و مجموعه خود را راه‌اندازی کنید، توضیحات، لینک‌های اجتماعی و قیمت پایه را اضافه کنید",
    },
    {
        id: 3,
        image: "start-earning.png",
        imageAlt: "Earning",
        titleEn: "Start Earning",
        titleFa: "شروع به کسب درآمد",
        textEn: "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
        textFa: "بین حراج‌ها و لیست‌های با قیمت ثابت انتخاب کنید و با فروش توکن‌های دیجیتال خود یا معامله آنها شروع به کسب درآمد کنید",
    },
];

export const connectWalletProviders = [
    {
        id: 1,
        image: "metamask-logo.png",
        imageAlt: "Metamask",
        title: "Metamask",
    },
    {
        id: 2,
        image: "wallet-connect.png",
        imageAlt: "Wallet Connect",
        title: "Wallet Connect",
    },
    {
        id: 3,
        image: "coinbase-logo.png",
        imageAlt: "Coinbase",
        title: "Coinbase",
    },
];

export const ArtistInfoLinks = [
    {
        id: 1,
        svgIcon: "GlobeSVG",
        imageAlt: "Website",
    },
    {
        id: 2,
        svgIcon: "DiscordLogoSVG",
        imageAlt: "Twitter",
    },
    {
        id: 3,
        svgIcon: "YoutubeLogoSVG",
        imageAlt: "YouTube",
    },
    {
        id: 4,
        svgIcon: "TwitterLogoSVG",
        imageAlt: "Twitter",
    },
    {
        id: 5,
        svgIcon: "InstagramLogoSVG",
        imageAlt: "Instagram",
    },
];

export const artistTabsDetails = [
    {
        id: 1,
        titleEn: "Created",
        titleFa: "ایجاد شده",
        content: ArtistCreatedTab
    },
    {
        id: 2,
        titleEn: "Owned",
        titleFa: "مالک",
        content: ArtistOwnedTab
    },
    {
        id: 3,
        titleEn: "Collection",
        titleFa: "مجموعه",
        content: ArtistCollectionTab
    },
];

export const nftInfoTags = [
    {
        id: 1,
        textEn: "animation",
        textFa: "انیمیشن",
    },
    {
        id: 2,
        textEn: "illustration",
        textFa: "تصویرسازی",
    },
    {
        id: 3,
        textEn: "moon",
        textFa: "ماه",
    },
    {
        id: 4,
        textEn: "spaceship",
        textFa: "سفینه فضایی",
    },
];

export const marketplaceTabsDetails = [
    {
        id: 1,
        titleEn: "NFTs",
        titleFa: "توکن ها",
        content: MarketplaceNFTsTab
    },
    {
        id: 2,
        titleEn: "Collections",
        titleFa: "مجموعه ها",
        content: MarketplaceCollectionsTab
    },
    {
        id: 3,
        titleEn: "Search",
        titleFa: "جستجو",
        content: MarketplaceSearchTab
    },
];

export const topCollectionUsers = [
    {
        id: 1,
        value: "boredapeyachtclub",
        name: "Bored Ape Yacht Club",
        avatar: "boredapeyachtclub.png",
        volume: "2M",
    },
    {
        id: 2,
        value: "cryptopunks",
        name: "CryptoPunks",
        avatar: "cryptopunks.png",
        volume: "1M",
    },
    {
        id: 3,
        value: "mutant-ape-yacht-club",
        name: "Mutant Ape Yacht Club",
        avatar: "mutant-ape-yacht-club.png",
        volume: "1M",
    },
    {
        id: 4,
        value: "azuki",
        name: "Azuki",
        avatar: "azuki.png",
        volume: "768K",
    },
    {
        id: 5,
        value: "otherdeed",
        name: "Otherdeed for Otherside",
        avatar: "otherdeed.png",
        volume: "619K",
    },
    {
        id: 6,
        value: "clonex",
        name: "CLONE X - X TAKASHI MURAKAMI",
        avatar: "clonex.png",
        volume: "426K",
    },
    {
        id: 7,
        value: "pudgypenguins",
        name: "Pudgy Penguins",
        avatar: "pudgypenguins.png",
        volume: "378K",
    },
    {
        id: 8,
        value: "veefriends",
        name: "VeeFriends",
        avatar: "veefriends.png",
        volume: "361K",
    },
    {
        id: 9,
        value: "wrapped-cryptopunks",
        name: "Wrapped Cryptopunks",
        avatar: "wrapped-cryptopunks.png",
        volume: "355K",
    },
    {
        id: 10,
        value: "doodles-official",
        name: "Doodles",
        avatar: "doodles-official.png",
        volume: "315K",
    },
    {
        id: 11,
        value: "topia-worlds",
        name: "HYTOPIA Worlds",
        avatar: "topia-worlds.png",
        volume: "288K",
    },
    {
        id: 12,
        value: "degods-eth",
        name: "DeGods",
        avatar: "degods-eth.png",
        volume: "193K",
    },
    {
        id: 13,
        value: "meebits",
        name: "Meebits",
        avatar: "meebits.png",
        volume: "183K",
    },
    {
        id: 14,
        value: "beanzofficial",
        name: "BEANZ Official",
        avatar: "beanzofficial.png",
        volume: "181K",
    },
    {
        id: 15,
        value: "cool-cats-nft",
        name: "Cool Cats",
        avatar: "cool-cats-nft.png",
        volume: "151K",
    },
    {
        id: 16,
        value: "milady",
        name: "Milady Maker",
        avatar: "milady.png",
        volume: "145K",
    },
    {
        id: 17,
        value: "sandbox",
        name: "The Sandbox LANDs",
        avatar: "sandbox.png",
        volume: "138K",
    },
    {
        id: 18,
        value: "memelandcaptainz",
        name: "Memeland Captainz",
        avatar: "memelandcaptainz.png",
        volume: "102K",
    },
    {
        id: 19,
        value: "ens",
        name: "ENS: Ethereum Name Service",
        avatar: "ens.png",
        volume: "98K",
    },
    {
        id: 20,
        value: "0n1-force",
        name: "0N1 Force",
        avatar: "0n1-force.png",
        volume: "87K",
    },
];

export const rankingsTabsDetails = [
    {
        id: 1,
        titleEn_sm: "1d",
        titleEn_big: "Today",
        titleFa_sm: "روز",
        titleFa_big: "امروز",
    },
    {
        id: 2,
        titleEn_sm: "7d",
        titleEn_big: "This Week",
        titleFa_sm: "هفته",
        titleFa_big: "این هفته",
    },
    {
        id: 3,
        titleEn_sm: "30d",
        titleEn_big: "This Month",
        titleFa_sm: "ماه",
        titleFa_big: "این ماه",
    },
    {
        id: 4,
        titleEn_sm: "All Time",
        titleEn_big: "All Time",
        titleFa_sm: "همه زمان ها",
        titleFa_big: "همه زمان ها",
    }
];

export const rankingsHeaderTitles: RankingsHeaderTitleType[] = [
    {
        id: 1,
        titleEn: "#",
        titleFa: "#",
        handleSort: "id",
        className: ""
    },
    {
        id: 2,
        titleEn: "Artist",
        titleFa: "هنرمند",
        handleSort: "artist",
        className: ""
    },
    {
        id: 3,
        titleEn: "Change",
        titleFa: "تغییرات",
        handleSort: "change",
        className: "max-md:hidden",
    },
    {
        id: 4,
        titleEn: "NFTs Sold",
        titleFa: "توکن های فروخته شده",
        handleSort: "sold_nfts",
        className: "max-xl:hidden",
    },
    {
        id: 5,
        titleEn: "Volume",
        titleFa: "مجموع کاربران",
        handleSort: "volume",
        className: "",
    }
];

export const integratedTechnologiesInfo = [
    {
        id: 1,
        tooltipContent: "FlashScript",
        href: "https://github.com/FlashScript-Main",
        classNames: "max-md:mx-auto",
        imageSrc: "flash-script.jpeg",
    },
    {
        id: 2,
        tooltipContent: "Next JS",
        href: "https://nextjs.org/",
        classNames: "md:-mt-[9.5rem] xl:-mt-[11rem]",
        imageSrc: "nextjs.svg",
    },
    {
        id: 3,
        tooltipContent: "TypeScript",
        href: "https://www.typescriptlang.org/",
        classNames: "md:-mt-[7rem] md:-ml-[7rem] xl:-mt-[8.5rem] xl:-ml-[8.5rem]",
        imageSrc: "typescript.svg",
    },
    {
        id: 4,
        tooltipContent: "Tailwind CSS",
        href: "https://tailwindcss.com/",
        classNames: "md:-mt-[7rem] md:ml-[7rem] xl:-mt-[8.5rem] xl:ml-[8.5rem]",
        imageSrc: "tailwind.svg",
    },
    {
        id: 5,
        tooltipContent: "Figma",
        href: "https://www.figma.com/community/file/1173962104946517060/nft-marketplace-template-create-an-nft-website-in-minutes",
        classNames: "md:mt-[7rem] md:ml-[7rem] xl:mt-[8.5rem] xl:ml-[8.5rem]",
        imageSrc: "figma.svg",
    },
    {
        id: 6,
        tooltipContent: "ShadCN",
        href: "https://ui.shadcn.com/",
        classNames: "md:mt-[9.5rem] xl:mt-[11rem]",
        imageSrc: "shadcn.png",
    },
    {
        id: 7,
        tooltipContent: "Next UI",
        href: "https://nextui.org/",
        classNames: "md:mt-[7rem] md:-ml-[7rem] xl:mt-[8.5rem] xl:-ml-[8.5rem]",
        imageSrc: "nextui.png",
    },
    {
        id: 8,
        tooltipContent: "Next Themes",
        href: "https://github.com/pacocoursey/next-themes",
        classNames: "md:mt-[0rem] md:ml-[9.5rem] xl:ml-[11rem]",
        imageSrc: "next-theme.png",
    },
    {
        id: 9,
        tooltipContent: "Next Intl",
        href: "https://next-intl-docs.vercel.app/",
        classNames: "md:-mt-[14rem] md:ml-[6rem] xl:-mt-[16.5rem] xl:ml-[7rem]",
        imageSrc: "next-intl.png",
    },
    {
        id: 10,
        tooltipContent: "Rapid API",
        href: "https://rapidapi.com/openseatools/api/openblur/playground",
        classNames: "md:mt-[0rem] md:-ml-[9.5rem] xl:-ml-[11rem]",
        imageSrc: "rapid-api.ico",
    },
    {
        id: 11,
        tooltipContent: "Zustand",
        href: "https://zustand-demo.pmnd.rs/",
        classNames: "md:mt-[6rem] md:-ml-[14rem] xl:mt-[7rem] xl:-ml-[16.5rem]",
        imageSrc: "zustand.svg",
    },
    {
        id: 12,
        tooltipContent: "Axios",
        href: "https://axios-http.com/",
        classNames: "md:mt-[0rem] md:-ml-[9.5rem] xl:-ml-[11rem] md:hidden",
        imageSrc: "axios.svg",
    },
    {
        id: 13,
        tooltipContent: "React Query",
        href: "https://tanstack.com/query/latest",
        classNames: "md:-mt-[6rem] md:ml-[14rem] xl:-mt-[7rem] xl:ml-[16.5rem]",
        imageSrc: "react-query.ico",
    },
    {
        id: 14,
        tooltipContent: "Lucide React",
        href: "https://lucide.dev/",
        classNames: "md:-mt-[6rem] md:-ml-[14rem] xl:-mt-[7rem] xl:-ml-[16.5rem]",
        imageSrc: "lucide-react.jpg",
    },
    {
        id: 15,
        tooltipContent: "Framer Motion",
        href: "https://www.framer.com/motion/",
        classNames: "md:-mt-[14rem] md:-ml-[6rem] xl:-mt-[16.5rem] xl:-ml-[7rem]",
        imageSrc: "framer-motion.jpg",
    },
    {
        id: 16,
        tooltipContent: "Zod Schema Validation",
        href: "https://zod.dev/",
        classNames: "md:mt-[14rem] md:-ml-[6rem] xl:mt-[16.5rem] xl:-ml-[7rem]",
        imageSrc: "zod.png",
    },
    {
        id: 17,
        tooltipContent: "Progressive Web Application",
        href: "https://www.npmjs.com/package/next-pwa",
        classNames: "md:mt-[14rem] md:ml-[6rem] xl:mt-[16.5rem] xl:ml-[7rem]",
        imageSrc: "pwa.svg",
    },
    {
        id: 18,
        tooltipContent: "Polypane",
        href: "https://polypane.app/",
        classNames: "md:mt-[6rem] md:ml-[14rem] xl:mt-[7rem] xl:ml-[16.5rem]",
        imageSrc: "polypane.jpg",
    },
];