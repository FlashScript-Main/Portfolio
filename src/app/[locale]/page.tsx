import { GlobalMotionMain } from '@/animations/MotionAnimations';
import { DivToScroll } from '@/animations/ScrollAnimations';
import Navbar from '@/components/Navbar';
// import { metadataValues } from '@/constant';
import useLanguage from '@/hooks/useLanguage';
import AvailableToWork from '@/template/home-page/Home-AvailableToWork';
import Clients from '@/template/home-page/Home-Clients';
import ContactMe from '@/template/home-page/Home-ContactMe';
import FlashScript from '@/template/home-page/Home-FlashScript';
import Location from '@/template/home-page/Home-Location';
import MainProjects from '@/template/home-page/Home-MainProjects';
import Projects from '@/template/home-page/Home-Projects';
import Skills from '@/template/home-page/Home-Skills';
import TimeZone from '@/template/home-page/Home-TimeZone';
import { iranSans } from '@/utils/fonts';
// import { useTranslations } from 'next-intl';
import { redirect } from 'next/navigation';

// export const generateMetadata = async ({ params: { locale } }: MainPagePropsType) => {

//     return {
//         title: locale === "en" ? metadataValues.homeTitleEn : metadataValues.homeTitleFa,
//         description: locale === "en" ? metadataValues.homeDescriptionEn : metadataValues.homeDescriptionFa,
//     }
  
// }

const Home = ({ params: { locale } }: MainPagePropsType) => {

    // const language = useTranslations("language");

    const { isFarsi, isEnglish } = useLanguage();

    const validLocales = ['en', 'fa'];
    
    // Redirect to Home if the locale is invalid
    if (!validLocales.includes(locale)) {
        if (isEnglish) {
            redirect('/en/');
        }
        else {
            redirect('/fa/');
        }
    }

    // 🔥 Basic 🔥
    // ${language("isEnglish") === "true" ? "flex-row" : "flex-row-reverse"}
    // ${language("isEnglish") === "false" && "flex-row-reverse"}
    // ${language("isEnglish") === "true" ? "" : ""}
    // ${language("isEnglish") === "false" && ""}

    // ⭐ Basic ⭐
    // initial={{ y: "10%", opacity: 0 }}
    // whileInView={{ y: "0%", opacity: 1 }}
    // viewport={{ once: true, margin: "-200px" }}
    // transition={{ staggerChildren: 0.02, delay: 0.25 * index, duration: 0.5 }}

    // initial={{ y: "20%", opacity: 0 }}
    // whileInView={{ y: "0%", opacity: 1 }}
    // viewport={{ once: true, margin: "-200px" }}
    // transition={{ staggerChildren: 0.02, delay: 0.5 * (index + 1), duration: 0.25 }}

    // initial={{ y: "20%", opacity: 0 }}
    // whileInView={{ y: "0%", opacity: 1 }}
    // viewport={{ once: true, margin: "-100px" }}
    // transition={{ staggerChildren: 0.02, delay: 0.5 * (index + 0.5), duration: 0.25 }}

    // initial={{ y: "20%", opacity: 0 }}
    // whileInView={{ y: "0%", opacity: 1 }}
    // viewport={{ once: true, margin: "-50px" }}
    // transition={{ staggerChildren: 0.02, delay: 0.2 * (index + 0.25), duration: 0.25, ease: "easeInOut" }}
    
    // initial={{ x: language("isEnglish") === "true" ? "-10%" : "10%", opacity: 0 }}
    // whileInView={{ x: "0%", opacity: 1 }}
    // viewport={{ once: true, margin: "-50px" }}
    // transition={{ delay: 0.5, duration: 0.5 }}

    return (
        <GlobalMotionMain className={`overflow-x-hidden | selection:text-nftCustom-cta selection:bg-nftCustom-text |  | ${isFarsi && `${iranSans}`}`}>
            <Navbar />
            <section className={`w-full lg:h-screen |  | grid place-content-center | `}>
                <DivToScroll className={`w-full mt-28 mb-20 md:max-lg:mt-32 md:w-[730px] lg:w-[950px] xl:w-[1200px] 2xl:w-[1500px] max-sm:px-4 mx-auto overflow-hidden |  | grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 | `}>
                    <Skills />
                    <Location />
                    <TimeZone />
                    <Clients />
                    <Projects />
                    <FlashScript />
                    <MainProjects />
                    <ContactMe />
                    <AvailableToWork />
                </DivToScroll>
            </section>

            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate reiciendis officiis accusantium aspernatur. Quasi ea incidunt quam ad iste optio rem doloribus soluta harum, laudantium suscipit, itaque consectetur officiis sunt. Ratione ipsam ea esse rerum dolorem modi, error eveniet exercitationem inventore repellendus veniam, ab laudantium repudiandae placeat sint illo. Omnis nihil dolores voluptatibus perspiciatis, voluptate ipsum nulla accusamus illum est explicabo dignissimos vero voluptatem ducimus perferendis nemo inventore adipisci. Odio dolorum excepturi consequuntur debitis quidem nisi animi sint perspiciatis eum facere beatae esse, explicabo possimus, consequatur quos quisquam nesciunt quae voluptatibus mollitia tenetur maxime velit! Aliquam omnis tempora doloribus minima voluptatum voluptate assumenda iusto impedit quo. Beatae, facilis dolore. Nisi earum illum non ipsam molestiae nulla praesentium inventore dolorem voluptas porro. Voluptate nostrum numquam debitis est nemo cupiditate enim. Ipsa modi facere, ipsam provident quis ex dolore officia minus laboriosam odit nam harum perspiciatis alias, labore iure magnam vero? Velit ipsa magnam odio obcaecati repudiandae ipsam explicabo similique quis neque error! Excepturi dolore dolor suscipit adipisci ipsam. Nesciunt quaerat eos ipsa harum ut, dolores necessitatibus eum dolor rerum animi saepe! Expedita a, maiores incidunt consectetur voluptas nihil ab qui quia quod, enim maxime laborum possimus voluptates ullam impedit quae, odio alias accusantium delectus non et labore? Sit quaerat id, nisi repellat omnis sunt ducimus perferendis, fugiat ab qui excepturi distinctio odio eveniet reiciendis repudiandae doloremque impedit asperiores molestias cum ullam fugit explicabo quam. Ipsum officiis, id cupiditate fugiat tempore quam nesciunt? Adipisci culpa excepturi quia necessitatibus et, repudiandae delectus? Nam distinctio aspernatur voluptatum, obcaecati ratione ullam quaerat quasi alias dolorem natus ab fugit aperiam eveniet maiores nisi minima! Delectus cumque aliquid, magnam quis, asperiores libero dicta nihil odio vitae itaque odit ratione maiores quia! Quo quibusdam provident asperiores ut optio ipsam placeat natus odit assumenda esse ratione recusandae perferendis quam labore distinctio, laudantium, dolorem, est consequuntur animi at! Quod eos, sed sequi optio, quaerat accusamus cupiditate, itaque hic tempore consectetur iste unde aliquam aut! Aliquam illum possimus vero iusto nobis velit incidunt asperiores sed, praesentium obcaecati, temporibus expedita adipisci vitae repellat. Distinctio sint voluptas debitis qui et, modi fugit veniam cumque perferendis eum perspiciatis labore animi dolore ad praesentium dolorum voluptates laborum corrupti nobis iste ducimus. Officia, libero. Nobis quis officia magni quos mollitia distinctio quo impedit illum hic tenetur, animi delectus. Inventore autem consectetur, est ex fuga, excepturi corporis debitis natus veritatis omnis hic eius quo tempore repudiandae fugit sint voluptatibus perspiciatis modi eveniet cum asperiores. Maxime repellat iure harum laboriosam! Aut ex debitis, accusamus fuga omnis asperiores, tempore provident consequuntur odio alias modi facilis tenetur? Officiis vel assumenda quisquam ad aut dolorem, beatae ratione culpa omnis consequatur inventore ipsam necessitatibus perspiciatis? Mollitia incidunt saepe cumque rerum deleniti sed autem odio, totam aliquam doloremque quidem at fuga eum expedita. Minus provident, tempora doloribus beatae ratione earum odit quo reprehenderit quae, harum aliquam ducimus repellendus! Libero ipsa aliquid laboriosam officiis, dolores voluptatibus architecto qui facilis! Culpa nihil et voluptates inventore accusantium molestiae, deleniti distinctio laborum ipsam. Eos dolores quas minus cupiditate, ut assumenda nesciunt libero. Sint perspiciatis atque nam quas iusto! Ipsum optio itaque omnis, ea, unde aut adipisci vitae quidem minus quos fugit nostrum soluta laborum officiis reiciendis obcaecati blanditiis dolore dolorem magnam veritatis est autem, in eos voluptatum! Harum, porro quia. Dolore omnis consectetur maiores perferendis harum totam, rerum earum eius voluptatem reiciendis nam dignissimos pariatur! Consequuntur dicta eum nobis quisquam natus facere illo corporis commodi sed illum, dolores nulla debitis suscipit, modi doloribus quos numquam aliquam accusamus neque aperiam mollitia adipisci odio ab corrupti. Laboriosam, dicta deleniti facere quas illum velit laudantium ullam soluta voluptate, laborum commodi consequatur tenetur, porro atque inventore fuga est ipsum tempora dolor odit debitis nam ex beatae perspiciatis! Deserunt architecto debitis expedita dicta fugiat quisquam incidunt nostrum adipisci, vero nam explicabo iste necessitatibus tenetur molestiae, reprehenderit a quasi. Autem tempore sint omnis eos! Qui, veritatis omnis ex officia, consequuntur quaerat esse repudiandae suscipit assumenda consectetur molestias enim illo! Nisi hic odit, mollitia temporibus dignissimos reprehenderit ut velit corporis, ipsam veniam eligendi labore dolorum atque. Dolores molestias incidunt magni ratione autem vel ad molestiae sed quae omnis dicta suscipit, mollitia eius temporibus dolorem adipisci in! Ab quos vero aspernatur! Neque consequatur dolores placeat perspiciatis perferendis delectus itaque non libero sequi eaque! Earum ullam iste nihil, saepe obcaecati quisquam officiis repellat aliquid optio ipsam esse. Voluptates itaque temporibus laborum, labore incidunt pariatur, quis facere error eum veritatis non! Quo maiores, eligendi porro delectus similique veritatis omnis corporis qui, autem pariatur amet optio aspernatur ipsum iste architecto unde eveniet nihil quibusdam quae in! Consequatur soluta quasi perspiciatis esse inventore ducimus odio dignissimos nihil dolores! Dolores eos, sed iure suscipit similique non in saepe placeat et? Ad molestiae a tempora repellendus. Itaque veniam maiores iusto libero aliquid dolores tempora, vero ullam ratione in repellendus minus. Labore quibusdam nihil illum modi amet ab commodi dicta accusamus placeat voluptatem non saepe, hic inventore explicabo veritatis dolores iusto quos tempora nulla quasi autem assumenda? Maiores sed omnis labore odio itaque asperiores inventore, sit reiciendis. Quidem recusandae odio obcaecati, quisquam repudiandae quas expedita ad repellat possimus animi sint? Minima deleniti, expedita voluptate dicta non neque error consectetur pariatur obcaecati. Aperiam eligendi impedit ea beatae voluptate, doloribus voluptatibus nisi aliquid, culpa illo excepturi eaque repellat labore. Necessitatibus sequi aliquam voluptates rem dolorem voluptate fuga reiciendis saepe id, quae vero neque debitis dignissimos assumenda nulla perferendis! Alias ut quas totam error. Ullam nisi, molestiae quaerat ducimus recusandae nemo consequatur. Incidunt, temporibus facere minima doloribus quod maxime dignissimos quam laboriosam consectetur suscipit id. Error itaque culpa nostrum mollitia, odit impedit voluptatum architecto possimus enim facilis natus sequi, nemo quis perspiciatis, dolor tempora repellat. Saepe molestiae ipsum qui consectetur ipsam, optio quas quidem! Quod beatae deserunt perferendis repudiandae omnis minima eaque harum enim ipsa quae excepturi suscipit eius vel voluptas cumque iste, sit illo facilis dignissimos officia? Nostrum earum voluptatem eius nemo assumenda itaque illum commodi magnam reprehenderit, ipsam libero velit? Amet eligendi nisi fugiat harum molestias esse, exercitationem aut porro nihil aliquid nobis magni ipsum veritatis. Ducimus iusto excepturi sunt, eos rem quas fugiat porro deleniti unde aliquid asperiores quod temporibus, voluptatum error illum doloremque, impedit facilis cupiditate quae necessitatibus totam ex. Eius perferendis adipisci rerum enim nulla? Similique mollitia voluptate officiis impedit. Ratione quis voluptas nobis doloremque atque. Nesciunt nostrum reiciendis eaque, deleniti sunt reprehenderit laborum magnam distinctio officiis, voluptatum aut voluptates laudantium sequi vero animi id, ullam odit fuga nemo impedit tenetur maxime ut. Facere dicta, nesciunt sed a ipsum dolorem vel distinctio at doloremque molestias eveniet repellendus cupiditate consequuntur obcaecati neque pariatur, perferendis officiis quas eos? Architecto sit saepe atque doloribus excepturi recusandae provident sed corporis repudiandae, esse, reiciendis adipisci corrupti quasi quidem! Commodi ipsa beatae a architecto asperiores consectetur similique mollitia iste non, assumenda sint tempore aspernatur, voluptates eum aliquid facere facilis ipsum repudiandae culpa itaque cum! Dolor nostrum facere autem ipsa cumque officia molestias voluptate, fugit quibusdam nobis? Consectetur expedita cum ex, eaque dicta enim ipsa praesentium voluptatum a, autem voluptate quisquam, deserunt numquam dolore possimus quaerat repudiandae. Neque quia explicabo quos, fugiat magnam libero quisquam beatae sit consequuntur id eaque numquam, aspernatur delectus laudantium! Odit voluptate quae quo nihil veniam laboriosam natus voluptatibus repellat aut, itaque pariatur nemo. Sint sapiente sit voluptas, ullam dignissimos tempora officia nisi est fuga nihil? Esse ipsa ea dolores expedita rem veritatis deserunt et vero? Nostrum pariatur animi numquam repellat autem provident dignissimos ad iure nesciunt cum laboriosam illo modi explicabo at, beatae rem cupiditate possimus debitis incidunt qui repellendus praesentium ullam id. Itaque vero eum quaerat numquam corporis? Iure eum nam itaque tempore consequuntur, similique corporis vitae deleniti ratione rem eveniet voluptas dolore nulla magnam eligendi natus asperiores inventore facere maiores expedita optio. Minima enim quas recusandae debitis cupiditate. Blanditiis veniam eligendi, libero cumque eos quisquam molestias quo debitis natus mollitia deserunt, magni illo eius. Tempora explicabo vel dolorum, ullam quis ratione voluptatem maiores obcaecati exercitationem facilis numquam quia maxime magnam in! Qui accusamus doloremque illo vitae esse debitis beatae voluptatum labore, assumenda eius natus animi explicabo nam vel corporis fuga saepe inventore reprehenderit ad soluta quas iusto? Tenetur voluptatibus officia aperiam, corporis quis velit incidunt possimus veniam cupiditate exercitationem fuga iste harum? Suscipit repellendus harum laudantium doloribus esse? Voluptate voluptates adipisci nam pariatur nostrum molestias sapiente vel corrupti libero necessitatibus quibusdam aspernatur ex dignissimos odit illo at aut, illum expedita exercitationem suscipit asperiores natus rem sequi laborum! Commodi quibusdam ipsam, ea laborum provident minus, natus, debitis facilis odio animi iure reiciendis eligendi libero quidem? Natus, excepturi? Veritatis saepe veniam distinctio consectetur aliquam, ut omnis amet nesciunt magnam id quod dignissimos beatae corporis voluptate itaque nobis, accusantium laboriosam? Rem vitae sint laboriosam? Ex tenetur voluptate sunt at nobis optio sapiente molestiae asperiores laborum, consectetur veniam earum dolore ipsum inventore excepturi animi debitis! Nam quos voluptas culpa, recusandae dolorum laudantium numquam aut consequuntur dolor error rerum esse libero beatae eos nulla excepturi voluptates doloremque, blanditiis animi. Dolor atque, dolores consequuntur debitis autem consectetur quod possimus impedit. Eveniet culpa corrupti quaerat sit! Libero, adipisci incidunt quo pariatur quidem quos consectetur numquam accusantium officiis. Ipsa voluptates eveniet cumque accusantium, obcaecati mollitia repellat enim voluptatum fugit sequi laboriosam deleniti in, tenetur ipsum, voluptatem alias minima inventore porro minus. Alias in adipisci consequatur pariatur officia aut corporis temporibus natus error atque eveniet culpa ratione incidunt nobis delectus reiciendis tempore aliquid, eligendi quam! Nemo ipsam ducimus quibusdam quo officia ipsum maxime deserunt eaque accusantium ad, illo aliquid provident, suscipit tempora sed enim eos tenetur, culpa sunt maiores quos ratione nesciunt distinctio perferendis. Itaque quae totam nisi quos nam, fuga tenetur vitae id exercitationem non eius sed unde dignissimos quibusdam eaque, voluptates, obcaecati porro tempore libero repellendus pariatur facilis deserunt aperiam. Aliquid modi harum assumenda. In reiciendis sed distinctio modi nisi et, minus laboriosam repudiandae facere totam accusantium aut, recusandae fuga quae cum alias, molestias neque quam aspernatur corporis sunt ducimus a? Suscipit iste laudantium, fugit dignissimos quibusdam nobis vitae neque dolorem ex inventore. Enim, consequatur culpa dicta similique, minus dolorem perferendis dolore provident nesciunt fugit inventore assumenda maiores ex. Inventore molestias unde reiciendis maxime totam, magni voluptates aliquid minima eaque, libero velit minus placeat magnam numquam illum, quidem ipsam quae officiis quasi! Saepe earum necessitatibus quasi hic dignissimos consectetur veritatis praesentium optio soluta, atque incidunt rem beatae quisquam quos inventore quas assumenda in at enim. Sint dignissimos quo consequuntur voluptate quisquam. Officiis quasi quidem inventore maiores! Deleniti numquam nemo saepe reprehenderit, omnis, molestias rem non eum fugit tenetur libero quo cumque repellendus minus, soluta perferendis aspernatur quis dolores rerum? Facere harum vitae sequi ut laboriosam voluptas quia doloribus commodi, quidem laudantium, velit veritatis illum sed id nisi eveniet iusto adipisci exercitationem pariatur impedit dolorum voluptatem neque illo. Quis iste ab nam, illo rerum enim voluptates labore odit? Et cupiditate veniam reiciendis. Quas dolorum molestiae illo, perferendis aspernatur quae quam omnis iste, excepturi veritatis repudiandae? Maxime qui quisquam, temporibus eos adipisci reprehenderit enim amet possimus, nulla illum distinctio dolore velit esse, aspernatur suscipit. Natus quis, modi molestiae excepturi, incidunt in a, porro veritatis deleniti nisi quo. Deserunt assumenda atque facere neque, explicabo illo maxime nemo voluptatibus quos vero reprehenderit quo voluptate veritatis vel nihil nesciunt minus earum dolorum consequatur voluptatum. Repellendus suscipit ullam aliquid, fugit voluptas voluptatum, qui sed incidunt saepe excepturi quasi, culpa iste nulla quae earum id. Esse, tempore nam error numquam harum et neque in vel iure vitae. Libero possimus quod sit itaque eum ipsa consectetur, dolorem debitis aliquam, ipsam commodi vero sapiente earum. Perspiciatis accusantium laudantium repellat ducimus officia voluptate veritatis nulla, quo facilis omnis ratione, eos obcaecati, quam possimus odio aspernatur? Dolore, impedit! Odio vitae deserunt minima saepe reprehenderit nam dolorem enim. Omnis molestias ullam temporibus veniam ex iste illum, distinctio tenetur laborum dolor autem. Consectetur, repudiandae. Rerum sequi dolore esse quidem distinctio nulla recusandae debitis voluptatum voluptas odit? Repudiandae suscipit autem voluptatibus voluptatem. Facilis sequi sed quod quibusdam, ea corporis dignissimos aut error aliquid minima nihil cumque a laboriosam, laudantium, natus in aperiam molestias odio reprehenderit porro explicabo quas expedita. Repellat, animi?
        </GlobalMotionMain>
    )

}

export default Home