//recursive function
replaceText(document.body)

function replaceText(element){
    if(element.hasChildNodes()){
        //going thru all child nodes
        element.childNodes.forEach(replaceText)
    }
    else if(element.nodeType === Text.TEXT_NODE){
        if(element.textContent.match(/coronavirus/gi)){
            const newE =document.createElement('span')
            newE.innerHTML=element.textContent.replace(/(coronavirus)/gi, '<span class="rainbow">$1</span>')
            element.replaceWith(newE)

            //wrting only this line with if will remove word from whole page
            //element.parentElement.remove()
       
       
        }
        //modifying text
        //using regex
        //text to be matched is=/coronavirus
        // for gi= global ignore
        // to replace with
        // element.textContent= element.textContent.replace(/coronavirus/gi, '    ')
        // element.textContent= element.textContent.replace(/corona/gi, '    ')
        // element.textContent= element.textContent.replace(/covid-19/gi, '    ')
        // element.textContent= element.textContent.replace(/covid/gi, '    ')
    }
}
