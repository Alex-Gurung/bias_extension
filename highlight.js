var puffery = "legendary, great, acclaimed, visionary, outstanding, leading, celebrated, award-winning, landmark, cutting-edge, innovative, extraordinary, brilliant, hit, famous, renowned, remarkable, prestigious, world-class, respected, notable, virtuoso, honorable, awesome, unique".split(", ")
var contentious = "cult, racist, perverted, sect, fundamentalist, heretic, extremist, denialist, terrorist, freedom fighter, bigot, myth, -gate, pseudo-, controversial".split(", ")
var unsupported_attributions = "some people say, many scholars state, it is believed/regarded, many are of the opinion, most feel, experts declare, it is often reported, it is widely thought, research has shown, science says, scientists claim, it is often said".split(", ")
var expressions_of_doubt = "supposed, apparent, purported, alleged, accused, so-called".split(", ")
var editorializing = "notably, it should be noted, interestingly, essentially, actually, clearly, of course, without a doubt, happily, tragically, aptly, fortunately, untimely, unfortunately".split(", ")
var synonyms_of_said = "reveal, point out, expose, explain, find, note, observe, insist, speculate, surmise, claim, assert, admit, confess, deny, clarify".split(", ")
var list_of_phrases = [puffery, contentious, unsupported_attributions, expressions_of_doubt, editorializing, synonyms_of_said]
for (var i = 0; i < list_of_phrases.length; i++){
    var cur_list = list_of_phrases[i];
    for (var j = 0; j < cur_list.length; j++){
        var searching_for = cur_list[j];
        var regEx = new RegExp(searching_for, "ig");
        document.body.innerHTML = document.body.innerHTML.replace(regEx, '<span class="highlighted-by-extension" style="color:red">' + searching_for + '</span>');        
    }
}