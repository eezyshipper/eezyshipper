import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import ExtraPagesLayout from '../../../Layouts/ExtraPagesLayout/ExtraPagesLayout';
import { restrictedPageData } from '../ExtraPagesData/RestrictedPageData';
import './RestrictedItems.css'

const RestrictedItems = () => {
    const [showState, setShowState] = useState({dataId: 1, show: false})
    return (
            <ExtraPagesLayout title="Restricted & Prohibited Items - In General">
                <div className="faq-content">
                    <Container>
                        <div className="res-general pb-5">
                            <p>Don’t get caught out when shopping the world. eezyshipper commits to full compliance with the carrier restrictions and export rules of all the countries in which we operate. <br/> 
                            Before you buy items online from foreign countries, please ensure they are not: <br/>
                            </p>
                            <p>•	Prohibited for export from the country of origin <br/>
                            •	Prohibited for import into your home country <br/>
                            •	Subject to any export or import restrictions.
                            </p>

                            <p><br/> The lists on this page will serve as a guide to some of the items that, as per export, import, customs, 
                            and shipping rules and regulations, we are unable to ship for you. <b>However, they are not exhaustive lists.</b> 
                            Therefore, if you are in any doubt about the permissibility of an item you are thinking of purchasing, 
                            please contact us for further guidance before you buy. </p>

                            <p><b>Official Compliance Policy</b></p>
                            <p>You can view the current version of our compliance policy here.</p>
                            <p><b>Your Responsibility</b></p>
                            <p>The information on this page is purely exemplary. As the importer of record into your country, you are responsible for ensuring that any item you ask us ship for you satisfies all regulations and laws. Please do not consider the information presented on this website as a substitute for consultation of the export regulations in the country of purchase and the import regulations for your destination country.</p>
                            <p>The following list details items that eezyshipper considers unacceptable for shipping between any of the countries in which we operate. We will not handle any items in this list – except where the text below indicates that we may ship them under specific circumstances. This policy is for your protection and to ensure we comply with the laws of the countries concerned, and with international shipping law and regulation.</p>
                        </div>

                        <div className="general-text">
                        {
                            restrictedPageData.map(data => {
                                return (
                                    <>
                                <button className={`accordion ${(showState.dataId === data.id && showState.show) ? 'active' : ''}`} onClick={() => {setShowState({dataId: data.id, show: !showState.show})}}>{data.title}</button>
                                <div className="panel" style={(showState.dataId === data.id && showState.show) ? {maxHeight: '400px'} : {}}>
                                    <p className="p-3">{data.description}</p>
                                    <div className="panel-border"></div>
                                </div>
                                </>
                                )}
                            )
                        }
                            {/* <button className="accordion"></button>
                            <div className="panel">
                                
                                <div className="panel-border"></div>
                            </div>
                            
                            <button className="accordion"> </button>
                            <div className="panel">
                                <p className="p-3">•	Any collectible painting <br/>
                                •	Sculpture or other work of art <br/>
                                •	Antiques (original engravings, prints, lithographs in any material)
                                </p>
                                <div className="panel-border"></div>
                            </div>
                            
                            <button className="accordion">3. Contraband/ Narcotics/ Drugs</button>
                            <div className="panel">
                                <p className="p-3">eezyshipper maintains a zero-tolerance policy towards illegal drugs. 
                                The following products are prohibited, and we will hand them over to the relevant authorities:</p>
                            <div className="pl-3 pr-3 pb-3 ">
                                <p className="pl-3">•	Controlled or illicit substances <br/>
                                •	Chemicals <br/>
                                •	Synthetic cannabis/herbal incense <br/>
                                •	Narcotics, cannabis/marijuana, and psychotropic drugs <br/>
                                
                                </p>
                                We will terminate your eezyshipper account if you attempt to use it to ship illegal drugs.
                            </div>
                            <div className="panel-border"></div>
                            </div> 

                            <button className="accordion">4. Medicines, Cosmetics, and Dietary Supplements </button>
                            <div className="panel">
                                <div className="p-3">•	Prescription drugs, including, but not limited to:
                            <p className="pl-3">
                                - Human prohormones <br/>
                                -	Growth hormones (HGH) <br/>
                                -	Stem cell-derived medications <br/>
                            </p>
                                •	Products defined as dietary supplements including: <br/>
                                <p className="pl-3">
                                -	Vitamins <br/>
                                -	Minerals<br/>
                                -	Amino acids<br/>
                                -	Herbs &amp; botanicals<br/>
                                -	Metabolites, concentrates, extracts, constituents, or combinations of the above-mentioned ingredients<br/>
                                </p>
                                •	Over-the Counter (non-prescription) medications<br/>
                                •	Medicines<br/>
                                •	Dietary supplement<br/>
                                •	Cosmetics, including:<br/>
                                <p className="pl-3">
                                    -	Liquid or any powder form
                                </p> 
                                
                                </div>
                                <div className="panel-border"></div>
                            </div> 

                            <button className="accordion">5. Electronic Items </button>
                            <div className="panel">
                                <p className="p-3">• Lasers or devices incorporating lasers <br/>
                                •	Walkie-talkies<br/>
                                •	Any product containing a hidden/spy camera(s)<br/>
                                •	Night vision devices and equipment<br/>
                                •	Eavesdropping equipment<br/>
                                •	Surreptitious listening devices
                                </p>
                                <div className="panel-border"></div>
                            </div> 

                            <button className="accordion">6. Liquids</button>
                            <div className="panel">
                                <p className="p-3">•	Liquids of any description</p>
                                <div className="panel-border"></div>
                            </div> 

                            <button className="accordion">7. Real and Dummy/Replica Weapons (and Items That Could be Used as Weapons) </button>
                            <div className="panel">
                                <p className="p-3">• Toy weapons <br/>
                                •	BB guns<br/>
                                •	Paintball guns<br/>
                                •	Knives<br/>
                                •	Swords<br/>
                                •	Grenades<br/>
                                •	Fake grenades<br/>
                                •	Bayonets<br/>
                                •	Scissors<br/>
                                •	Needles <br/>
                                •	Any items that could obviously be used as weapons<br/>
                                •	Guns and other firearms (whether replica or real)<br/>
                                •	Gun parts and accessories, including:
                                </p><p className="pl-5">-	Thermal imaging/night vision scopes<br/>
                                    -	Holographic weapon sights<br/>
                                    -	Ammunition clips and magazines<br/>
                                    -	Gun barrels<br/>
                                    -	Upper or lower receivers<br/>
                                    -	Pistol grips and ammo extenders<br/>
                                    - Trigger housings<br/>
                                    -	Firing pins, hammers<br/>
                                    -	Rifle scopes<br/>
                                    -	Butt-stocks, forends<br/>
                                    -	Reticle sights
                                </p>
                                <p></p>
                                <div className="panel-border"></div>
                            </div> 

                            <button className="accordion">8. Fragile Items  </button>
                            <div className="panel">
                                <p className="p-3">
                                •	Glassware <br/>
                                •	Ceramics<br/>
                                •	Musical instruments<br/>
                                •	Items made from plaster<br/>
                                •	Lighting items such as light bulbs, tubes, neon lights, etc.

                                </p>
                                <div className="panel-border"></div>
                            </div> 

                            <button className="accordion">9. Precious Metals &amp; Stones, Gems, &amp; Currency </button>
                            <div className="panel">
                                <p className="p-3">•	Bank drafts <br/>
                                •	Credit cards<br/>
                                •	Rough diamonds<br/>
                                •	Forged and duplicate currency<br/>
                                •	Currency with historical value<br/>
                                •	Fake, toy, or collectible currency<br/>
                                •	Cash (banknotes &amp; coins)<br/>
                                •	Checks (including traveler’s checks)<br/>
                                •	Bearer bonds and other monetary instruments<br/>
                                •	Gold, silver, or platinum bullion/bars<br/>
                                •	Mother of Pearl items commonly found on watches, guitars, and jewelry items<br/><br/>
                                eezyshipper will not handle currency or monetary instruments or ship them through our facilities. We will return such items to the original sender, when possible. You may not send them to an alternate address in the country of export.
                                </p>
                                <div className="panel-border"></div>
                            </div> 

                            <button className="accordion">10. Pornography </button>
                            <div className="panel">
                                <p className="p-3">•	Foul or disgusting material, pornography and/or obscene material <br/>
                                •	Any unsolicited indecent item or representation of any kind
                                </p>
                                <div className="panel-border"></div>
                            </div> 

                            <button className="accordion">11. Tobacco &amp; Alcohol </button>
                            <div className="panel">
                                <p className="p-3">•	Cigarettes <br/>
                                •	Cigars<br/>
                                •	Electronic shisha<br/>
                                •	Tobacco<br/>
                                •	Snuff<br/>
                                •	Tobacco leaves<br/>
                                •	E-cigarettes, vape juice, liquid or pods<br/>
                                •	E-cigarette accessories<br/>
                                •	Hookah pipes and accessories<br/>
                                •	Alcohol for consumption<br/>
                                </p>
                                <div className="panel-border"></div>
                            </div> 

                            <button className="accordion">12. Dangerous Goods &amp; Hazardous or Flammable Materials </button>
                            <div className="panel">
                            <p className="p-3">
                                •	Explosives <br/>
                                •	Nitrates<br/>
                                •	Nitrites<br/>
                                •	Fertilizers<br/>
                                •	Lighters<br/>
                                •	Fireworks<br/>
                                •	Gasoline<br/>
                                •	Ammunition/cartridges<br/>
                                •	Tear gas<br/>
                                •	Potassium permanganate<br/>
                                •	Cologne, perfume<br/>
                                •	Christmas crackers<br/>
                                •	Potassium permanganate<br/>
                                •	Fire extinguishers<br/>
                                •	Battery fluid<br/>
                                •	Infectious substances<br/>
                                •	Model rocket engines<br/>
                                •	Cap gun caps<br/>
                                •	Poisons or toxic substances<br/>
                                •	Chemical oxygen generators<br/>
                                •	Radiation polluted substances<br/>
                                •	Lighters with fuel and matches<br/>
                                •	Airbags &amp; airbag inflators<br/>
                                •	Carbon or activated carbon<br/>
                                •	Paint, stains, varnishes, paint thinners<br/>
                                •	Adhesives &amp; glues (except for stationery)<br/>
                                •	Lead-acid batteries and alkaline batteries<br/>
                                •	Compressed gases, including CO2 cartridges<br/>
                                •	Nail polish, nail polish removers, and acetone<br/>
                                •	Gunpowder, firearms, fireworks, and flares<br/>
                                •	Laboratory chemicals, including lye, acids, corrosives, or other strong bases<br/>
                                •	Blasting caps, primers, fusers, detonating cords, and igniters<br/>
                                •	Medical and biological specimens/ cultures/samples<br/>
                                •	Radioactive materials, such as irradiating devices and some smoke alarms<br/>
                                •	Non-flammable compressed gases, such as neon, carbon dioxide, nitrogen, helium etc.<br/>
                                •	Toxic compressed gases, such as fluorine, chlorine etc.<br/>
                                •	Aerosols, including insecticides/bug spray, shaving creams &amp; hair creams<br/>
                                •	Agricultural chemicals, including fungicides and pesticides<br/>
                                •	Large or strong magnets except those built into speakers<br/>
                                •	Household chemicals, such as:
                                </p><p className="pl-5">
                                -	Counter/window cleaners <br/>
                                -	Floor cleaners<br/>
                                -	Water/aquarium test kits<br/>
                                -	Bleach<br/>
                                -	Antifreeze<br/>
                                -	Oven/drain cleaners<br/>
                                -	Alcohol-based hand sanitizers<br/>

                                </p> 
                                <p></p>
                                <div className="panel-border"></div>
                            </div> 

                            <button className="accordion">13. Other Unacceptable Items </button>
                            <div className="panel">
                                <p className="p-3">•	Fossils <br/>
                                •	Jewelry<br/>
                                •	Stones<br/>
                                •	Stoneware<br/>
                                •	Marble<br/>
                                •	Dyes<br/>
                                •	Foodstuffs<br/>
                                •	Ashes<br/>
                                •	Lottery Tickets<br/>
                                •	Photocopier toner<br/>
                                •	Dry ice<br/>
                                •	Magnetized materials<br/>
                                •	Oxidizing Substances<br/>
                                •	Wet or leaking parcels<br/>
                                •	Parcels emitting a strong odor<br/>
                                •	Human and animal remains<br/>
                                •	Gambling devices and equipment<br/>
                                </p>
                                <div className="panel-border"></div>
                            </div>  */}

                        </div>
                </Container>
                </div>
               
            </ExtraPagesLayout>
    );
};

export default RestrictedItems;