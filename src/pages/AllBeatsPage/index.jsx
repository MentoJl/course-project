import React, { useState } from 'react';
import Footer from '../../components/footer/index';
import Header from '../../components/header/index';
import BeatsTable from '../../components/beatsTable/index';
import styles from './style.module.css';
import { Select } from 'antd';

const AllBeats = () => {
    const [category, setCategory] = useState('all');

    const handleChange = (value) => {
        setCategory(value);
    };

    return (
        <div className={styles.allbeatsContainer}>
            <Header />
            <div className={styles.beatsNavigator}>
                <span className={styles.allBeatsBoard}>All Beats</span>
                <div className={styles.beatsSortContainer}>
                  <Select
                    defaultValue="All Bpm"
                    className={styles.selectBpm}
                    onChange={handleChange}
                    options={[
                          {
                              "value": "85",
                              "label": "85"
                            },
                            {
                              "value": "86",
                              "label": "86"
                            },
                            {
                              "value": "87",
                              "label": "87"
                            },
                            {
                              "value": "88",
                              "label": "88"
                            },
                            {
                              "value": "89",
                              "label": "89"
                            },
                            {
                              "value": "90",
                              "label": "90"
                            },
                            {
                              "value": "91",
                              "label": "91"
                            },
                            {
                              "value": "92",
                              "label": "92"
                            },
                            {
                              "value": "93",
                              "label": "93"
                            },
                            {
                              "value": "94",
                              "label": "94"
                            },
                            {
                              "value": "95",
                              "label": "95"
                            },
                            {
                              "value": "96",
                              "label": "96"
                            },
                            {
                              "value": "97",
                              "label": "97"
                            },
                            {
                              "value": "98",
                              "label": "98"
                            },
                            {
                              "value": "99",
                              "label": "99"
                            },
                            {
                              "value": "100",
                              "label": "100"
                            },
                            {
                              "value": "101",
                              "label": "101"
                            },
                            {
                              "value": "102",
                              "label": "102"
                            },
                            {
                              "value": "103",
                              "label": "103"
                            },
                            {
                              "value": "104",
                              "label": "104"
                            },
                            {
                              "value": "105",
                              "label": "105"
                            },
                            {
                              "value": "106",
                              "label": "106"
                            },
                            {
                              "value": "107",
                              "label": "107"
                            },
                            {
                              "value": "108",
                              "label": "108"
                            },
                            {
                              "value": "109",
                              "label": "109"
                            },
                            {
                              "value": "110",
                              "label": "110"
                            },
                            {
                              "value": "111",
                              "label": "111"
                            },
                            {
                              "value": "112",
                              "label": "112"
                            },
                            {
                              "value": "113",
                              "label": "113"
                            },
                            {
                              "value": "114",
                              "label": "114"
                            },
                            {
                              "value": "115",
                              "label": "115"
                            },
                            {
                              "value": "116",
                              "label": "116"
                            },
                            {
                              "value": "117",
                              "label": "117"
                            },
                            {
                              "value": "118",
                              "label": "118"
                            },
                            {
                              "value": "119",
                              "label": "119"
                            },
                            {
                              "value": "120",
                              "label": "120"
                            },
                            {
                              "value": "121",
                              "label": "121"
                            },
                            {
                              "value": "122",
                              "label": "122"
                            },
                            {
                              "value": "123",
                              "label": "123"
                            },
                            {
                              "value": "124",
                              "label": "124"
                            },
                            {
                              "value": "125",
                              "label": "125"
                            },
                            {
                              "value": "126",
                              "label": "126"
                            },
                            {
                              "value": "127",
                              "label": "127"
                            },
                            {
                              "value": "128",
                              "label": "128"
                            },
                            {
                              "value": "129",
                              "label": "129"
                            },
                            {
                              "value": "130",
                              "label": "130"
                            },
                            {
                              "value": "131",
                              "label": "131"
                            },
                            {
                              "value": "132",
                              "label": "132"
                            },
                            {
                              "value": "133",
                              "label": "133"
                            },
                            {
                              "value": "134",
                              "label": "134"
                            },
                            {
                              "value": "135",
                              "label": "135"
                            },
                            {
                              "value": "136",
                              "label": "136"
                            },
                            {
                              "value": "137",
                              "label": "137"
                            },
                            {
                              "value": "138",
                              "label": "138"
                            },
                            {
                              "value": "139",
                              "label": "139"
                            },
                            {
                              "value": "140",
                              "label": "140"
                            },
                            {
                              "value": "141",
                              "label": "141"
                            },
                            {
                              "value": "142",
                              "label": "142"
                            },
                            {
                              "value": "143",
                              "label": "143"
                            },
                            {
                              "value": "144",
                              "label": "144"
                            },
                            {
                              "value": "145",
                              "label": "145"
                            },
                            {
                              "value": "146",
                              "label": "146"
                            },
                            {
                              "value": "147",
                              "label": "147"
                            },
                            {
                              "value": "148",
                              "label": "148"
                            },
                            {
                              "value": "149",
                              "label": "149"
                            },
                            {
                              "value": "150",
                              "label": "150"
                            },
                            {
                              "value": "151",
                              "label": "151"
                            },
                            {
                              "value": "152",
                              "label": "152"
                            },
                            {
                              "value": "153",
                              "label": "153"
                            },
                            {
                              "value": "154",
                              "label": "154"
                            },
                            {
                              "value": "155",
                              "label": "155"
                            },
                            {
                              "value": "156",
                              "label": "156"
                            },
                            {
                              "value": "157",
                              "label": "157"
                            },
                            {
                              "value": "158",
                              "label": "158"
                            },
                            {
                              "value": "159",
                              "label": "159"
                            },
                            {
                              "value": "160",
                              "label": "160"
                            },
                            {
                              "value": "161",
                              "label": "161"
                            },
                            {
                              "value": "162",
                              "label": "162"
                            },
                            {
                              "value": "163",
                              "label": "163"
                            },
                            {
                              "value": "164",
                              "label": "164"
                            },
                            {
                              "value": "165",
                              "label": "165"
                            },
                            {
                              "value": "166",
                              "label": "166"
                            },
                            {
                              "value": "167",
                              "label": "167"
                            },
                            {
                              "value": "168",
                              "label": "168"
                            },
                            {
                              "value": "169",
                              "label": "169"
                            },
                            {
                              "value": "170",
                              "label": "170"
                            },
                            {
                              "value": "171",
                              "label": "171"
                            },
                            {
                              "value": "172",
                              "label": "172"
                            },
                            {
                              "value": "173",
                              "label": "173"
                            },
                            {
                              "value": "174",
                              "label": "174"
                            },
                            {
                              "value": "175",
                              "label": "175"
                            },
                            {
                              "value": "176",
                              "label": "176"
                            },
                            {
                              "value": "177",
                              "label": "177"
                            },
                            {
                              "value": "178",
                              "label": "178"
                            },
                            {
                              "value": "179",
                              "label": "179"
                            },
                            {
                              "value": "180",
                              "label": "180"
                            },
                            {
                              "value": "181",
                              "label": "181"
                            },
                            {
                              "value": "182",
                              "label": "182"
                            },
                            {
                              "value": "183",
                              "label": "183"
                            },
                            {
                              "value": "184",
                              "label": "184"
                            },
                            {
                              "value": "185",
                              "label": "185"
                            },
                            {
                              "value": "186",
                              "label": "186"
                            },
                            {
                              "value": "187",
                              "label": "187"
                            },
                            {
                              "value": "188",
                              "label": "188"
                            },
                            {
                              "value": "189",
                              "label": "189"
                            },
                            {
                              "value": "190",
                              "label": "190"
                            },
                            {
                              "value": "191",
                              "label": "191"
                            },
                            {
                              "value": "192",
                              "label": "192"
                            },
                            {
                              "value": "193",
                              "label": "193"
                            },
                            {
                              "value": "194",
                              "label": "194"
                            },
                            {
                              "value": "195",
                              "label": "195"
                            },
                            {
                              "value": "196",
                              "label": "196"
                            },
                            {
                              "value": "197",
                              "label": "197"
                            },
                            {
                              "value": "198",
                              "label": "198"
                            },
                            {
                              "value": "199",
                              "label": "199"
                            },
                            {
                              "value": "200",
                              "label": "200"
                            }
                    ]}
                  />
                  <Select
                    defaultValue="All moods"
                    className={styles.selectMood}
                    onChange={handleChange}
                    options={[
                      {
                        'value': 'test',
                        'label': 'test',
                      },
                      {
                        'value': 'test2',
                        'label': 'test2',
                      },
                    ]}
                  />
                  <Select
                    defaultValue="All genres"
                    className={styles.selectGener}
                    onChange={handleChange}
                    options={[
                      {
                        'value': 'Hip Hop',
                        'label': 'Hip Hop',
                      },
                      {
                        'value': 'West Coast',
                        'label': 'West Coast',
                      },
                      {
                        'value': 'Trap',
                        'label': 'Trap',
                      },
                      {
                        'value': 'Electronic',
                        'label': 'Electronic',
                      },
                      {
                        'value': 'Rnb',
                        'label': 'Rnb',
                      },
                      {
                        'value': 'Alternative Rnb',
                        'label': 'Alternative Rnb',
                      },
                    ]}
                  />
                </div>
                <div className={styles.beatsSearcher}></div>
            </div>
            <BeatsTable category={category} />
            <Footer />
        </div>
    );
}

export default AllBeats;