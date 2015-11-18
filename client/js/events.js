/**
 * Created by Janne on 20.11.2014.
 * Just a stub for holding event information
 */
define(['events'], function() {

    var Events = Class.extend({
        init : function() {
            var self = this;

            this.events = {
                Player_Clicked_Asteroids_Link : {
                    give : "ynh30rmql8k0rudi",
                    ask : "m7su02y27fkwqaor"
                }
            },

            this.achievements = {
                A_TRUE_WARRIOR : "2nv664yi6ixjemi",
                INTO_THE_WILD : "sns7i3bz66979zfr",
                ANGRY_RATS : "m0igyzu8fz0bpgb9",
                SMALL_TALK : "uba6rrtayfnr8uxr",
                FAT_LOOT : "xxgvm0k1lp6qolxr",
                UNDERGROUND : "yv7auvp9em3rf6r",
                AT_WORLDS_END : "rzft3m504lp4lsor",
                COWARD : "t70el3ep1qxb6gvi",
                TOMB_RAIDER : "z858gwrdcbi3haor",
                SKULL_COLLECTOR : "i3ptewy0rn2sxlxr",
                NINJA_LOOT : "21yk6dfhgq281tt9",
                NO_MANS_LAND : "bxh5lcwb0otg9zfr",
                HUNTER : "9rfis9lrnti0ms4i",
                STILL_ALIVE : "bclvr0t42yet57b9",
                MEATSHIELD : "ivzr2t9jbl1k0529",
                HOT_SPOT : "d3cont65unhilik9",
                HERO : "f8pj3scep5r35wmi",
                FOXY : "2xh40lwdlzt1emi",
                FOR_SCIENCE : "lpimf8snag9l766r",
                RICKROLLD : "vw0pcgt04r1cerk9"
            };

            this.checkAchievements = {
                A_TRUE_WARRIOR : "qddo4ywz0yb65hfr",
                INTO_THE_WILD : "u70xgv8ft8392j4i",
                ANGRY_RATS : "3l9wmiyii1ss8aor",
                SMALL_TALK : "d4c50kzyp0hpvi",
                FAT_LOOT : "7q0j08zdxi529",
                UNDERGROUND : "kfb8msd35cow29",
                AT_WORLDS_END : "k6gt0l6bupuy2e29",
                COWARD : "t2mohpjf3xwp14i",
                TOMB_RAIDER : "d1lyvikitzz1tt9",
                SKULL_COLLECTOR : "qogdnzatesev1jor",
                NINJA_LOOT : "0a6f5tfl4ttq33di",
                NO_MANS_LAND : "7wuw9tn2iysyvi",
                HUNTER : "1ft32a9t25oecdi",
                STILL_ALIVE : "2i6pbekbqf72e29",
                MEATSHIELD : "dlbxby5zziwwmi",
                HOT_SPOT : "vdv24ajztg6fajor",
                HERO : "rnzzsze9nu18m2t9",
                FOXY : "6jqjmr55nxsi3sor",
                FOR_SCIENCE : "w253tdod1asdzpvi",
                RICKROLLD : "j3mosz2cz87rdx6r"
            };

            this.kills = {
                warrior: "",

                // Mobs
                rat: "9vzvnysf5wdygb9",
                skeleton: "eu7i1q82r6ls1yvi",
                goblin: "wo9wpes5k9jxlxr",
                ogre: "9mklsrh6opy9o1or",
                spectre: "x4dtq7xirr6647vi",
                deathknight: "7oizhyn9bjxos9k9",
                crab: "tsminp3l7796yldi",
                snake: "omsgkd4x8vvx6r",
                bat: "orja0b2bkmym0a4i",
                wizard: "qniqp739biou5wmi",
                eye: "ddieluqtwop0t3xr",
                skeleton2: "9wbgdl9zw2v2huxr",
                boss: "1feby9qc6hzd7vi"
            };


            this.items = {
                // ARMORS
                firefox: "x3yyvp7sjqvvx6r",
                clotharmor: "8fw2cx0bpt4kj4i",
                leatherarmor: "6qcum3of9kg4aemi",
                mailarmor: "jiviqa1aci5asjor",
                platearmor: "1fk8o1s7fup4lsor",
                redarmor: "oiq0dgp6hynl8fr",
                goldenarmor: "f3u5ro06dzql4n29",
                bluearmor : "tzxb0xr0j7zaor",

                // Weapons
                sword1: "tyf1lnbw2hpycik9",
                sword2: "gbmwfw1go1sb57b9",
                axe: "6j7zcap2svnghkt9",
                redsword: "7kvj4b0v7b7kqpvi",
                bluesword: "zqozx6blh318m2t9",
                goldensword: "f0avkil5iiq6ko6r",
                morningstar: "yer6qm3mvswz5mi",

                // Objects
                flask: "bqouvs9h79y0hpvi",
                cake: "jrk02n0a6bo9lik9",
                burger: "35cvguhe0hgmbo6r",
                chest: "dfcc6jmnq564j9k9",
                firepotion: "tvdzteoyq035wmi"
            };

            console.log("initialized events properly!");
        }

    });


    return Events;

});

