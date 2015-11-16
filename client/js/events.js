/**
 * Created by Janne on 20.11.2014.
 * Just a stub for holding event information
 */
define(['events'], function() {

    var Events = Class.extend({
        init : function() {
            var self = this;

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
                rat: "mgvvv3yb9mfb6gvi",
                skeleton: "l152wqypq4cxr",
                goblin: "wk4gtjry5h4cxr",
                ogre: "gefo21id92kjra4i",
                spectre: "ymwt5z9onxnipb9",
                deathknight: "abyiosncequmcxr",
                crab: "sdehro66byl7syvi",
                snake: "g4cs9eb30ig7rpb9",
                bat: "ayqo4n1ps0pb9",
                wizard: "rlwti9lkj4oenrk9",
                eye: "agxo79wrn3ik9",
                skeleton2: "qhk5ehykv4gc766r",
                boss: "j1ddqd55hmc2fbt9"
            };


            this.items = {
                // ARMORS
                firefox: "f0nhr1om276i529",
                clotharmor: "bapl5pepg9442t9",
                leatherarmor: "2heii8141eixusor",
                mailarmor: "x4an2jvsiak5u3di",
                platearmor: "fwfk6wd7cetp4x6r",
                redarmor: "zyvnpvvecdutbj4i",
                goldenarmor: "40t3dxkb1teasjor",

                // Weapons
                sword1: "4iz4ts8vj72jra4i",
                sword2: "li533kzh8pdp9zfr",
                axe: "0o13cvc3rs6h6w29",
                redsword: "3boee8xc5pi7ldi",
                bluesword: "ez9zt7l91f2vgqfr",
                goldensword: "rano5659lfjbrzfr",
                morningstar: "w4nt6cl0xef80k9",

                // Objects
                flask: "810obkbig2lw61or",
                cake: "3dn5nzpfi5f2bj4i",
                burger: "cwfgev49apogk3xr",
                chest: "r9meoe1c5gs98uxr",
                firepotion: "smdussmenrx2bj4i"
            };

            console.log("initialized events properly!");
        }

    });


    return Events;

});

