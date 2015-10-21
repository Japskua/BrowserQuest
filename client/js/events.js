/**
 * Created by Janne on 20.11.2014.
 * Just a stub for holding event information
 */
define(['events'], function() {

    var Events = Class.extend({
        init : function() {
            var self = this;

            this.achievements = {
                A_TRUE_WARRIOR : "cioa34cgip7ousor",
                INTO_THE_WILD : "y7bknfmh1s7l23xr",
                ANGRY_RATS : "t8cazwhp9sbgldi",
                SMALL_TALK : "56ofzfgkkr8dunmi",
                FAT_LOOT : "m1nkuern94e1m7vi",
                UNDERGROUND : "g2gr3zlximuz0k9",
                AT_WORLDS_END : "qffplofbgxas8aor",
                COWARD : "qpnwdl0gsy5vcxr",
                TOMB_RAIDER : "yc38aw03eg66r",
                SKULL_COLLECTOR : "fyc79p27bz5v1jor",
                NINJA_LOOT : "lfismrh71xos9k9",
                NO_MANS_LAND : "76rf57497rykfbt9",
                HUNTER : "36rs0xjhfewb3xr",
                STILL_ALIVE : "5mel5yb7v5jhsemi",
                MEATSHIELD : "a3mq6f0tzr1i3sor",
                HOT_SPOT : "ksa9pdr2r9mp9zfr",
                HERO : "t8u91oz84to11yvi",
                FOXY : "prrs1z30az41jor",
                FOR_SCIENCE : "tshcecjm5c73c8fr",
                RICKROLLD : "1fqsob496nwxw29"
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

