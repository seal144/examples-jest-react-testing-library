// function is changing number into start rate in form of string up to 5 stars. 3.28 => "full full full half empty"

const starRating = (number: number): string => {
    const emptyArray = new Array(5).fill('empty');

    if (number < 0.25 ) return emptyArray.join(' ');
    if ( number >= 4.75 ) return new Array(5).fill('full').join(' ');

    let numberRoundedToHalf = Math.round(number * 2) / 2;
    
    return emptyArray.map((item)=>{
        numberRoundedToHalf--;
        if (numberRoundedToHalf > -.5) {
            return 'full';
        } else if (numberRoundedToHalf === -.5) {
            return 'half';
        } else {
            return item;
        }
    }).join(' ');
}

export default starRating;