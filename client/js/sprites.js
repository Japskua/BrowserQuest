
define(['text!../sprites/agent.json',
        'text!../sprites/arrow.json',
        'text!../sprites/axe.json',
        'text!../sprites/bat.json',
        'text!../sprites/beachnpc.json',
        'text!../sprites/bluesword.json',
        'text!../sprites/bluearmor.json',
        'text!../sprites/boss.json',
        'text!../sprites/chest.json',
        'text!../sprites/clotharmor.json',
        'text!../sprites/coder.json',
        'text!../sprites/crab.json',
        'text!../sprites/death.json',
        'text!../sprites/deathknight.json',
        'text!../sprites/desertnpc.json',
        'text!../sprites/eye.json',
        'text!../sprites/firefox.json',
        'text!../sprites/forestnpc.json',
        'text!../sprites/goblin.json',
        'text!../sprites/goldenarmor.json',
        'text!../sprites/goldensword.json',
        'text!../sprites/guard.json',
        'text!../sprites/hand.json',
        'text!../sprites/impact.json',
        'text!../sprites/item-axe.json',
        'text!../sprites/item-bluesword.json',
        'text!../sprites/item-bluearmor.json',
        'text!../sprites/item-burger.json',
        'text!../sprites/item-cake.json',
        'text!../sprites/item-firepotion.json',
        'text!../sprites/item-flask.json',
        'text!../sprites/item-goldenarmor.json',
        'text!../sprites/item-goldensword.json',
        'text!../sprites/item-leatherarmor.json',
        'text!../sprites/item-mailarmor.json',
        'text!../sprites/item-morningstar.json',
        'text!../sprites/item-platearmor.json',
        'text!../sprites/item-redarmor.json',
        'text!../sprites/item-redsword.json',
        'text!../sprites/item-sword1.json',
        'text!../sprites/item-sword2.json',
        'text!../sprites/king.json',
        'text!../sprites/lavanpc.json',
        'text!../sprites/leatherarmor.json',
        'text!../sprites/loot.json',
        'text!../sprites/mailarmor.json',
        'text!../sprites/morningstar.json',
        'text!../sprites/nyan.json',
        'text!../sprites/octocat.json',
        'text!../sprites/ogre.json',
        'text!../sprites/platearmor.json',
        'text!../sprites/priest.json',
        'text!../sprites/rat.json',
        'text!../sprites/redarmor.json',
        'text!../sprites/redsword.json',
        'text!../sprites/rick.json',
        'text!../sprites/scientist.json',
        'text!../sprites/shadow16.json',
        'text!../sprites/skeleton.json',
        'text!../sprites/skeleton2.json',
        'text!../sprites/snake.json',
        'text!../sprites/sorcerer.json',
        'text!../sprites/sparks.json',
        'text!../sprites/spectre.json',
        'text!../sprites/sword.json',
        'text!../sprites/sword1.json',
        'text!../sprites/sword2.json',
        'text!../sprites/talk.json',
        'text!../sprites/target.json',
        'text!../sprites/villagegirl.json',
        'text!../sprites/villager.json',
        'text!../sprites/wizard.json'], function() {

    var sprites = {};

    _.each(arguments, function(spriteJson) {
        var sprite = JSON.parse(spriteJson);

        sprites[sprite.id] = sprite;
    });

    return sprites;
});
