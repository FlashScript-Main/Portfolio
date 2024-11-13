import { MotionH1, MotionP, MotionSpan } from "@/animations/motion-provider"
import { charVariants } from "@/animations/motion-variants"
import { GlobalMotionMain } from "@/animations/MotionAnimations"
import { SectionToScroll } from "@/animations/ScrollAnimations"
import { IntegratedTechnologies } from "@/components"
import Navbar from "@/components/Navbar"
import { skillsInfo } from "@/constant"
import useLanguage from "@/hooks/useLanguage"
import { iranSans } from "@/utils/fonts"

const SkillsPage = () => {

    const { isEnglish, isFarsi } = useLanguage();

    return (
        <GlobalMotionMain className={`overflow-x-hidden |  |  | ${isFarsi && `${iranSans}`} border-2 border-rose-600`}>
            <Navbar place="skills" />

            <SectionToScroll className={`max-w-[380px] mt-28 mb-20 md:mt-32 md:max-w-[730px] lg:max-w-[900px] xl:w-[1200px] 2xl:w-[1500px] max-sm:px-4 mx-auto |  |  | ${isFarsi && "text-end"} border-2 border-yellow-500`}>
                <MotionH1 
                    initial="hidden"
                    whileInView="reveal"
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{ staggerChildren: 0.02, delay: 1.5 }} 
                    className={`mb-[0.625rem] md:mb-5 | text-portfolio-card_background text-[1.75rem] md:text-[2.375rem] lg:text-5xl xl:text-[3.1875rem] leading-[140%] md:leading-[120%] xl:leading-[110%] font-semibold |  | `}
                >
                    {(isEnglish ? skillsInfo.titleEn : skillsInfo.titleFa).split("").map(char => (
                        <MotionSpan
                            key={char}
                            transition={{ duration: 1.75 }}
                            variants={charVariants}
                        >
                            {char}
                        </MotionSpan>
                    ))}
                </MotionH1>

                <MotionP 
                    initial="hidden"
                    whileInView="reveal"
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ staggerChildren: 0.02, delay: 1.5 }}
                    className={` | text-portfolio-text_primary text-[1rem] lg:text-lg xl:text-[1.375rem] leading-[140%] xl:leading-[160%] font-normal capitalize |  | `}
                >
                    {(isEnglish ? skillsInfo.descriptionEn : skillsInfo.descriptionFa).split("").map(char => (
                        <MotionSpan
                            key={char}
                            transition={{ duration: 0.25 }}
                            variants={charVariants}
                        >
                            {char}
                        </MotionSpan>
                    ))}
                </MotionP>
            </SectionToScroll>

            <IntegratedTechnologies />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, ipsa repudiandae facilis architecto cum ipsum quod molestiae error quidem corrupti consequuntur deleniti porro dolorem quas doloribus vero possimus veritatis officia, esse non ducimus odio quaerat earum incidunt. Sit, iste quaerat dicta nihil reiciendis error nostrum ut repudiandae quibusdam excepturi saepe facere aliquam nam vel sunt quis illum corporis odit ipsa quia accusamus alias iure magnam molestias. Atque quam ullam voluptas omnis. Aut dicta pariatur possimus ex a inventore iste deserunt, adipisci consectetur fugiat soluta voluptas expedita mollitia cupiditate nisi officiis fuga. Libero, sed beatae? Quisquam eveniet perferendis unde eaque facere magni velit, maxime nulla laudantium sit assumenda in quasi, magnam officiis eum saepe tempora deleniti odit blanditiis est! Quaerat corrupti ipsam vitae neque nemo! Laudantium, fugit ut, aspernatur quae ad deleniti quaerat, temporibus quia velit necessitatibus inventore optio modi. Assumenda, consequatur. Fugiat nobis dolore soluta rerum magnam laudantium facilis tempore, tenetur itaque atque ipsa at illo quos iure totam. Excepturi explicabo similique error a quos pariatur cumque sint suscipit dolores atque placeat ut ex tenetur, consequuntur quo, sunt quas aut totam possimus? Nesciunt eaque iusto repellendus praesentium deleniti ut nisi eligendi officiis culpa consequuntur non laborum aspernatur minus et est, corrupti, sequi obcaecati sed id facere, nobis at temporibus. Asperiores impedit sint officia soluta, maiores facere aperiam tempore labore expedita perspiciatis, dolore nobis corporis itaque voluptatem vero veritatis doloribus nulla eos tempora voluptatum. Minus quisquam dolore fugiat? Voluptatibus nemo cum sunt minus optio accusamus molestiae, veniam exercitationem suscipit ullam, ex dignissimos quis! Enim quis vitae temporibus culpa harum dicta commodi aspernatur, dignissimos qui doloremque, pariatur maxime. Quisquam accusamus repellendus tempore quidem optio quaerat cumque nulla ratione at vitae dolores voluptate blanditiis fuga itaque iusto eveniet qui autem quis explicabo, cupiditate est ad in assumenda aspernatur. Corporis eligendi quae sunt quas amet officia, accusantium ex veniam corrupti dignissimos dolorem deleniti velit deserunt! Modi, laborum nemo corrupti non odio omnis assumenda odit quasi dolore iure quidem repellendus, voluptates culpa repudiandae nobis sequi. Dignissimos deserunt veritatis fugiat. Asperiores vero, dolorum deserunt consequatur mollitia nisi eum alias autem rem cumque optio? Quia beatae ratione molestiae consequuntur, et soluta debitis ducimus tempore libero ipsa nisi, est dolores fugiat. Sunt dicta ducimus expedita voluptates nulla nemo alias, quis, at reiciendis dolore totam, aliquam saepe culpa maxime. Neque quaerat quia sit. Enim velit deleniti sit suscipit a aut maxime quos similique, ducimus nobis? Explicabo blanditiis illum rem amet quos quaerat soluta, ea, ullam ex, impedit dicta ipsa expedita magni fuga ut delectus sint! Et nemo enim, distinctio, omnis ratione illum unde architecto voluptas, dicta maiores harum adipisci. Aliquid dolor voluptas deserunt eius. Laborum minus quibusdam culpa tempora facere cumque quidem mollitia unde repudiandae accusantium est corporis nam dolores iste deleniti, aliquam rerum asperiores a dignissimos fuga tenetur! Explicabo praesentium officia error velit placeat esse laboriosam repellendus, adipisci nemo non nostrum autem ratione repellat quod necessitatibus optio? Libero perferendis asperiores blanditiis excepturi officiis ipsa dolore, eligendi saepe aut deleniti accusamus dolor debitis voluptatum maiores esse quidem facilis est quibusdam! Perferendis, facere. Distinctio dignissimos accusantium sapiente esse ratione nemo dolor illum in. Consequuntur provident nisi vero sed atque corporis autem mollitia cum voluptatum a aperiam deleniti inventore repellat similique fugit, ea neque quidem. Eos, minus! Accusantium, rem reprehenderit assumenda aperiam et tempora iure accusamus quam blanditiis eaque, voluptatum ducimus quo placeat non repellendus maxime, deserunt soluta ad esse odio? Dicta, laudantium magni? Iure, incidunt accusamus natus ullam magni consequuntur exercitationem vel, iusto nobis eligendi adipisci necessitatibus eos debitis minima? Cum, magni suscipit ipsum fuga nulla eius ipsa rem deserunt esse eveniet assumenda eos illum itaque. Consectetur, magni accusantium qui ipsum nobis autem sed quod animi doloribus reiciendis! Sequi fugit similique minus eum nulla quia eligendi? Vitae illo, magnam odio nihil quod possimus optio earum soluta numquam aliquam fugiat expedita perspiciatis esse cum! Voluptatem accusantium ipsum facere, quam error necessitatibus vero? Fugit quo vitae est dolore quis? Qui nobis quia laudantium provident, quaerat explicabo eaque labore accusantium earum ea consectetur sed dolor tempora suscipit, animi sequi voluptates nulla adipisci recusandae asperiores neque beatae est cumque! Sunt, deleniti. Voluptatum id, voluptate eum molestiae maxime totam eius pariatur omnis quae, numquam nemo veniam aut! Hic quos autem quaerat exercitationem quae in sapiente praesentium dicta quisquam unde incidunt, esse minus omnis, tenetur deleniti corrupti porro non alias consequatur sequi laboriosam aspernatur quidem? Sed, fugit quasi et aliquid molestias doloribus repellat delectus animi excepturi odio reiciendis reprehenderit repudiandae, iusto consectetur enim ipsam. Ut quod et quaerat officiis officia, cupiditate possimus laudantium similique rem provident voluptas blanditiis quo qui perspiciatis vero dolorum deserunt dignissimos iste quibusdam eveniet placeat. Quia, officiis natus. Doloribus, quidem hic quos nihil modi cumque nesciunt commodi natus unde exercitationem neque ad vero aliquam repellat laboriosam tempore quo alias similique, nobis odio soluta, amet eum pariatur dolores. Nesciunt, eos, ex facilis ut asperiores ipsa alias eligendi eaque repellat corrupti qui sequi tenetur dolore praesentium suscipit unde? Facere magni at repudiandae ab quos, fugit ut commodi consequuntur autem inventore eaque id voluptatibus enim neque soluta possimus corporis maiores aliquam dolore doloribus velit eligendi totam, voluptas quis. Ducimus sint voluptas impedit quasi cum omnis nihil ut a consequatur. Inventore veritatis repellat, ut rem nobis aliquid debitis saepe at. Nobis modi asperiores accusamus culpa sint id recusandae quidem perferendis blanditiis placeat fuga officia accusantium dolorum impedit earum, iusto quam. Nam repellat incidunt sunt eaque nisi maiores soluta enim consectetur. Voluptas, qui illo temporibus omnis nulla dolores enim, officia perferendis cum, maiores provident rerum recusandae repudiandae ea aliquam repellendus quae nisi velit! Harum aut vel id necessitatibus minus laboriosam error impedit perferendis consectetur tempora facere, dolor hic perspiciatis inventore placeat incidunt, voluptatibus nobis eum iure maiores iusto asperiores! Praesentium amet optio, eius obcaecati, accusamus consectetur ipsam eligendi quasi excepturi magni nihil molestias dolorum aut distinctio quis eos, necessitatibus voluptate pariatur ratione ducimus velit repellat maiores. Minima impedit excepturi eum ipsum, obcaecati vero aut laborum ea corporis aliquam tempora suscipit modi perferendis deleniti porro repudiandae quaerat labore, perspiciatis necessitatibus illum maiores id. Facilis quo unde eveniet saepe eaque natus omnis blanditiis obcaecati quas, placeat neque dolorem ex error nemo maiores dignissimos a aut quis sint sequi similique alias accusamus repudiandae odio! Nobis dignissimos aliquid officiis voluptatibus voluptatum ullam facere, saepe rerum eum illum, obcaecati, quas dicta totam? Veniam tempora tenetur fuga libero cum quibusdam quos aliquid pariatur, iste quia, culpa sit doloremque qui atque dolorum nemo error animi iusto doloribus ea et est aperiam hic illo. Ipsum ea consectetur tempora, rem esse ad eveniet ratione nemo est consequuntur velit dolores laudantium, sint sunt iste obcaecati perferendis earum non veniam sit similique consequatur provident iusto aperiam. Quam dolorum praesentium reiciendis sed! Voluptas cum soluta ullam suscipit sit! Labore quia aperiam iure voluptatem cumque nihil quibusdam, animi dolorum beatae iusto suscipit minus necessitatibus repellat commodi ad similique culpa architecto earum, minima facilis, nostrum corrupti excepturi. Animi dicta reiciendis delectus deserunt perspiciatis, quia debitis repellat provident assumenda corrupti odio ad unde ab perferendis ex, consequuntur sed alias necessitatibus ut minima doloremque dolorem facere distinctio. Expedita molestias voluptas repellat ducimus debitis in magni voluptatum veniam? Quaerat architecto culpa earum rerum veritatis fuga dolores distinctio animi provident blanditiis itaque expedita, sunt sequi repudiandae? Est architecto culpa sed nam, omnis in eaque expedita quaerat provident tempore commodi inventore. Harum obcaecati sunt est praesentium ratione minima impedit atque alias expedita adipisci nobis sit veniam in facilis maiores voluptates perspiciatis hic recusandae rerum, sapiente id commodi. Dolores debitis aut rerum, accusantium excepturi sed modi facere dolorem inventore necessitatibus alias esse vitae blanditiis. Mollitia, hic? Atque ducimus impedit voluptas, id reprehenderit placeat ullam est ratione obcaecati ipsam, excepturi necessitatibus sequi! Aut ex placeat qui pariatur inventore, porro recusandae iste totam impedit sint tempora nobis obcaecati error, aspernatur ut illum doloribus dolorum repellendus. Quia alias sed minus. Enim necessitatibus debitis nam ut facilis alias. A aperiam magni sapiente suscipit sequi, magnam tempora repudiandae dolores quidem excepturi! Optio assumenda expedita, iure, deserunt nulla aliquid accusamus eveniet eius repudiandae architecto corporis nobis nemo ab! Enim, eveniet quis, mollitia veritatis minima nobis, doloremque laborum voluptatibus nulla accusantium expedita. Architecto beatae vitae eveniet tenetur dolor, in minima rem quibusdam quod sequi illo voluptas ullam! Ullam illum, delectus quis rem facere ratione cupiditate sed saepe rerum non dignissimos assumenda deserunt velit quae veniam blanditiis voluptate odit dolores porro deleniti fugiat inventore. Blanditiis eum eius provident dicta unde quis obcaecati sequi dolor assumenda praesentium, quam accusantium voluptatum libero soluta placeat eos perspiciatis dolorem qui error perferendis hic illum animi ea incidunt. Earum, similique facilis architecto quaerat quisquam perferendis sequi odit temporibus ducimus cum expedita. Quibusdam laudantium unde voluptas autem adipisci temporibus officiis recusandae accusantium velit saepe nihil praesentium dignissimos magnam debitis tempore culpa aut molestias impedit corporis quo suscipit harum, ad in at. Cupiditate, doloribus ad cumque placeat quidem fugiat dicta ut iste eligendi eveniet dignissimos provident facere voluptates quisquam? Soluta molestias nesciunt ipsam aspernatur eaque dolorem ducimus quo aliquam accusantium provident quibusdam incidunt praesentium commodi rerum quas doloribus laborum, eveniet repellat ex veniam eum! Praesentium quam maxime temporibus repellat est, deleniti consequuntur eligendi? Laudantium perferendis explicabo quisquam, voluptatum dolore, tempore quia quasi ipsum unde hic asperiores ex mollitia, eligendi dolorem nemo libero iste! Minus, adipisci quos esse animi mollitia consequatur id, nisi at iste numquam reprehenderit placeat rem, similique saepe amet aliquid quo fuga blanditiis officia. Quam nulla modi eveniet minima rerum a obcaecati alias odio. Temporibus quos itaque accusantium modi nisi voluptatem! Possimus, libero sequi! Natus perspiciatis eos iusto obcaecati, eaque totam nobis sunt labore nisi aut, quaerat quisquam repellat. Perspiciatis quidem quia numquam eligendi molestias ex neque veniam perferendis, doloremque quam sapiente voluptatibus maxime dolorem praesentium excepturi et dolor aperiam sit cumque similique eos error explicabo reiciendis magnam! Nisi magnam ipsum quia earum delectus rem suscipit, atque, debitis officia cum aspernatur. Numquam voluptates in recusandae nemo qui quibusdam expedita. Nesciunt error a suscipit quibusdam minus corporis impedit corrupti voluptatem odio eius nostrum reprehenderit dolorum, molestiae deleniti exercitationem distinctio quis, quas quaerat veritatis non explicabo eveniet sequi fuga? Cum expedita fuga esse, eaque blanditiis corrupti aut distinctio quae cupiditate, perferendis, veniam quod. Amet aspernatur numquam dignissimos, quasi soluta alias eos aliquam odio inventore quibusdam! Praesentium explicabo at minima velit obcaecati ut, culpa maiores? Laboriosam id est dolorem, nulla tempora sed, maiores alias quae eius praesentium velit, ab reprehenderit fugit voluptatem qui libero dolore! Harum sapiente debitis quam laborum odio sed fugiat suscipit dignissimos veniam, error itaque reiciendis. Reiciendis dolorem ratione veniam porro voluptatem iure ipsam quasi ad eveniet quisquam temporibus unde laboriosam eos corrupti odit velit dolore nobis quis aliquid molestiae praesentium, impedit quidem. Architecto earum obcaecati pariatur aut necessitatibus. Fuga blanditiis, modi, animi incidunt enim at quas odit aspernatur sunt velit officia molestias nesciunt dolore non facere voluptatibus ea voluptas reiciendis aliquid, accusantium rem temporibus tempore pariatur. Ex suscipit corrupti quasi eum doloribus eveniet accusamus earum? Itaque soluta perferendis delectus corrupti eaque? Ex minus quis excepturi dicta illum veritatis iure deserunt doloremque! Voluptas non atque aliquid consectetur, eum sint ab quia illum minus libero vel, veritatis ducimus nostrum neque velit nisi ipsum quaerat sed rem quis, dolorum natus illo nihil. Ex quod, fuga impedit ratione atque in? Maiores dolor ipsa, alias dolore temporibus itaque officia voluptate a obcaecati sint, ipsum deserunt sit. Maxime corporis laborum explicabo dolore. Assumenda, voluptate quia voluptas saepe dolorem quod error nesciunt earum inventore a iusto quo tempore neque cumque facere laudantium molestias repudiandae distinctio amet recusandae veritatis quas. Perspiciatis reprehenderit nihil provident placeat nulla cum ipsam, culpa quasi enim quia. Ut doloremque a voluptatum? Quae, voluptate nemo suscipit error iure minima fuga nobis labore. Dolores voluptatem ea consequuntur ducimus inventore. Saepe repellendus nostrum quibusdam rerum reiciendis sit dolor mollitia dolorum consectetur. Velit iste recusandae perspiciatis, veritatis harum atque impedit eligendi voluptate beatae est rem autem reiciendis, minima explicabo deserunt debitis at hic excepturi neque qui, libero eveniet dignissimos. Fugit et temporibus magnam minima ratione aut laboriosam voluptatibus nesciunt maxime, odio deserunt possimus. Soluta sed eum ipsa pariatur quidem aperiam sint reprehenderit atque minus, totam adipisci itaque accusamus vero quibusdam hic voluptate. Non laboriosam architecto modi?
        </GlobalMotionMain>
    )

}

export default SkillsPage
