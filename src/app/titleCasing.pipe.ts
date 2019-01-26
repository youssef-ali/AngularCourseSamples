import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : 'titleCasing'
})

export class TitleCasing implements PipeTransform{
    transform(value: string, args?: string[]) {
        if(!value)
         return null;

        let words: string[];
        let convertedWords : string[];
        words = value.split(" ");
        if(words)
            convertedWords = [];
        words.forEach(element => {
            if(args.indexOf(element) >= 0 && value.indexOf(element) !== 0)
            {
                convertedWords.push(element.toLowerCase());
            }else{
                element = element.toLowerCase();
                let elementChars = element.split("");
                elementChars[0] = element.charAt(0).toUpperCase();
                convertedWords.push(elementChars.join(""));
            }
        });
        return convertedWords.join(" ");
        

    }

}
