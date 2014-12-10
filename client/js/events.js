/**
 * Created by Janne on 20.11.2014.
 * Just a stub for holding event information
 */
define(['events'], function() {

    var Events = Class.extend({
        init : function() {
            var self = this;

            this.achievements = {
                A_TRUE_WARRIOR : "ykjbfi8b6jq0k9",
                INTO_THE_WILD : "vrj3bbek44ih33di",
                ANGRY_RATS : "2ev36cmas28uayvi",
                SMALL_TALK : "qtf41u60x2ocg14i",
                FAT_LOOT : "aqz3nhilik9",
                UNDERGROUND : "7zy029pkfrtwewmi",
                AT_WORLDS_END : "x6ae5564o2k2o6r",
                COWARD : "78dabuj467irizfr",
                TOMB_RAIDER : "yxjep7f7ekygy14i",
                SKULL_COLLECTOR : "rw0vb2igx1j1yvi",
                NINJA_LOOT : "sz0k4wmla4soflxr",
                NO_MANS_LAND : "lnqrmjt5ug6tj4i",
                HUNTER : "rowatm7ewixusor",
                STILL_ALIVE : "nb8c3p986n5vzpvi",
                MEATSHIELD : "72remvoyeyu8fr",
                HOT_SPOT : "yv2o2sy2205rvn29",
                HERO : "y5ulbg7r5afqd7vi",
                FOXY : "0pcv1decennah5mi",
                FOR_SCIENCE : "4s7qktk0g3hxgvi",
                RICKROLLD : "qhfj02bca800be29"
            };

            this.kills = {
                warrior: "",

                // Mobs
                rat: "nfd4pzeyx9cz0k9",
                skeleton: "1jsrvajx0ja46lxr",
                goblin: "1dp65tedvveoecdi",
                ogre: "k16o1p7io58w7b9",
                spectre: "4qifarh46makbj4i",
                deathknight: "oc33ux1lyvxnu3di",
                crab: "xv2wbxh0vf1xajor",
                snake: "478cypa7tafywrk9",
                bat: "9kukcv12iuplow29",
                wizard: "0rcyqmhncopnl8fr",
                eye: "p8h3y548xpy9o1or",
                skeleton2: "n998ts2cv9nklnmi",
                boss: "ney9b9x2xyfogvi"
            };


            this.items = {
                // ARMORS
                firefox: "w1drami7f3n89f6r",
                clotharmor: "9qwii05imgqfr",
                leatherarmor: "suiyum8pktke29",
                mailarmor: "m6iqceeh7vhadcxr",
                platearmor: "zk8cjshw9zcwhfr",
                redarmor: "oxwm6hlnd0tchaor",
                goldenarmor: "amhc9502pmd3g14i",

                // Weapons
                sword1: "p7u3k5gx8ncdi",
                sword2: "1pqa99gqj9jjdcxr",
                axe: "bl4dethiwv0u23xr",
                redsword: "4bwdujlqismunmi",
                bluesword: "5asefyise7wlv7vi",
                goldensword: "5iuz8cp41dghw7b9",
                morningstar: "c2zyujsaad9dlsor",

                // Objects
                flask: "5wndtj293wyiudi",
                cake: "x86b1ipua67xpqfr",
                burger: "rk92dbc7gory66r",
                chest: "0c67c6zxhuqmpldi",
                firepotion: "rlbhw8mdm36ry66r"
            };

            console.log("initialized events properly!");
        }

    });


    return Events;

});

