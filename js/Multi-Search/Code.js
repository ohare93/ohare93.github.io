
var ButtonHit;
var SiteCheckboxes = [];
var SitesJustOpenedCount = 0;
var NumberOfValidLines = 0;
var NumberOfLinesToOpen = 0;
var DeletedText = "";
var entryBox = document.getElementById('multibox1');


String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

function fragmentFromString(strHTML) {
    return document.createRange().createContextualFragment(strHTML);
}

function searchmulti(e){
    ButtonHit = e;
    
    var words = entryBox.value;
    words = words.split("\n"); //Get each individual word

    var groupBySite = document.getElementById('groupbysitecheckbox').checked;
    var deleteOpenedLines = document.getElementById('DeleteOpenedLinesCheckbox').checked;				
    NumberOfLinesToOpen = document.getElementById('NumberOfLinesToOpenSelector').value;
    
    
    if(NumberOfLinesToOpen > 0 && (NumberOfLinesToOpen < words.length)){
        var a = 0, b = 0;
        for(a = 0; b < NumberOfLinesToOpen; a++){
            if(CheckIsWordValid(words[a])){
                b++;
            }
        }

        if(deleteOpenedLines){
            DeletedText = words.slice(0, a).join("\n") + "\n";
            SetEntryBox(words.slice(a, words.length).join("\n"));
        }
        words = words.slice(0, a);
        
    }else if(deleteOpenedLines){
        Clear();
    }
    
    //Open sites
    if(groupBySite){
        for(var lang in SitesEnum){
            for(var key in SitesEnum[lang]){						
                if(ShouldOpenSite(SitesEnum[lang][key].id)){
                    for (var i=words.length-1; i>=0; i--){
                        OpenSite(words[i], key);
                    }
                }
            }
        }
    }else{
        for(var lang in SitesEnum){
            for (var i=words.length-1; i>=0; i--){ 
                for(var key in SitesEnum[lang]){						
                    if(ShouldOpenSite(SitesEnum[lang][key].id)){
                        OpenSite(words[i], lang, key);
                    }
                }
            }
        }
    }

    if(SitesJustOpenedCount == 0){
        let errors = [];
        if(ButtonHit == -1){
            errors.push("No site checkboxes selected");
        }
        if(NumberOfValidLines == 0){
            errors.push("Enter something in the text box");
        }
        let message = errors.length + (errors.length <= 1 ? " Error: " : " Errors: \n") + errors.join("\n");
        alert(message);
    }

    SitesJustOpenedCount = 0;
}

function OpenSite(word, siteLang, siteKey){
    if(CheckIsWordValid(word)){
        window.open(SitesEnum[siteLang][siteKey].pre + word + SitesEnum[siteLang][siteKey].post);
        SitesJustOpenedCount++;
    }
}

function ShouldOpenSite(siteNum){
    return (ButtonHit == siteNum || (ButtonHit == -1 && SiteCheckboxes[siteNum].checked));
}

function CheckIsWordValid(word){
    return (word != "");
}

function RemoveWhiteSpace(){
    SetEntryBox(entryBox.value.replace(/\n{2,}/g, "\n").trim());

    TextBoxChanged();
}

function Sort(direction){
    var newValue = entryBox.value.split("\n");

    newValue = newValue.sort(function (a, b) {
        return b.toLowerCase().localeCompare(a.toLowerCase());
    });

    if(direction == 1){
        newValue = newValue.reverse();
    }

    SetEntryBox(newValue.join("\n"));
    
    RemoveWhiteSpace();
}

function Clear(){
    DeletedText = entryBox.value;
    SetEntryBox("");
}

function UndoDelete(){
    SetEntryBox(DeletedText + entryBox.value);
    DeletedText = "";
}

function RemoveDups() {
    let current = entryBox.value.split("\n");
    let unique = {};
    let a = 1;
    current.forEach(function(i) {
        if(!unique[i]) {
            unique[i] = a++;
        }
    });
    SetEntryBox(Object.keys(unique).sort(function(a,b){return unique[a]-unique[b]}).join("\n"));
}

function EOReplace(){
    let current = entryBox.value;

    current = current.replace(/gx/g, "ĝ");
    current = current.replace(/Gx/g, "Ĝ");
    current = current.replace(/GX/g, "Ĝ");
    current = current.replace(/cx/g, "ĉ");
    current = current.replace(/Cx/g, "Ĉ");
    current = current.replace(/CX/g, "Ĉ");
    current = current.replace(/hx/g, "ĥ");
    current = current.replace(/Hx/g, "Ĥ");
    current = current.replace(/HX/g, "Ĥ");
    current = current.replace(/jx/g, "ĵ");
    current = current.replace(/Jx/g, "Ĵ");
    current = current.replace(/JX/g, "Ĵ");
    current = current.replace(/sx/g, "ŝ");
    current = current.replace(/Sx/g, "Ŝ");
    current = current.replace(/SX/g, "Ŝ");
    current = current.replace(/ux/g, "ŭ");
    current = current.replace(/Ux/g, "Ŭ");
    current = current.replace(/UX/g, "Ŭ");

    SetEntryBox(current);
}

function CaseDropdown(){
    document.getElementById("CaseDropdown").classList.toggle("show");
}

function CaseDropdownSelection(value){
    if(value == 0){
        SetEntryBox(entryBox.value.toUpperCase());
    }else if(value == 1){
        SetEntryBox(entryBox.value.toLowerCase());
    }else if(value == 2){
        SetEntryBox(entryBox.value.toProperCase());
    }
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function SetEntryBox(value){
    entryBox.value = value;

    TextBoxChanged();
}

function TextBoxChanged(){
    numberOfLinesTextbox = document.getElementById('NumberOfLines');
    

    var lines = entryBox.value.split("\n");
    var count = 0;
    for(var a = 0; a < lines.length; a++){
        if(lines[a] != "")
            count++;
    }
    numberOfLinesTextbox.textContent = count;			
    NumberOfValidLines = count;	
}