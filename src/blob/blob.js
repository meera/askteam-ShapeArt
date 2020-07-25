import React from 'react';
//import guideline from './guideline';


export function createBlob(props) {

    const { numberOfPoints,  width, height, fillOpacity, backgroundColor, textColor, content, fontSize,  points } = props.attributes;

    function getPosiOrNegativeRandom(min, max) {
        const amount = Math.random() * (max - min) + min;
        const sign = Math.random() < 0.4 ? -1 : 1;
        return sign * amount;


    }
    function getRandomBetween(min, max) {
        const amount = Math.random() * (max - min) + min;
        return amount;
    }
    //  var startAngle = random(Math.PI * 2); Must start at randome point
    // var slice = (Math.PI * 2) / options.numPoints; // Slice is stored.

    //const angles = Array.from({length: 4}, x => x + x) ;
    const angles = Array.from({ length: numberOfPoints }, (v, k) => k * (360 / numberOfPoints));

    const radius = 40;
    const baseX = 50;
    const baseY = 50;
    let angle;
    // const { list } = attributes;
    // const addListItem = ( newListItem ) => setAttributes( { list: [ ...list, newListItem ] } );
 
    for (var i = 0; i < angles.length; i++) {
        angle = angles[i];
        const x = Math.round(baseX + radius * Math.cos(angle * (Math.PI / 180)));
        const y = Math.round(baseY - radius * Math.sin(angle * (Math.PI / 180)));
        const r_angle = (angle - getRandomBetween(10, 50)) * (Math.PI / 180);
        const r_radius = radius + getPosiOrNegativeRandom(0, 10);
        const mx = Math.round(baseX + r_radius * Math.cos(r_angle));
        const my = Math.round(baseY - r_radius * Math.sin(r_angle));
        points.push({ x, y, mx, my })
       // setAttributes( { points: [...points, { x, y, mx, my }]});


    }

    points.push(points[0]);

    //setAttributes( { points: [...points, { x, y, mx, my }]});



    //setAttributes( {points: [...points, points[0]] });

    return points;
}


export  function EditBlob({props}) {

    const {setAttributes} = props;
    
    const { numberOfPoints,
        points,  width, height, fillOpacity, backgroundColor, textColor, content, clientId } = props.attributes;
    const childPositionY = parseInt(props.attributes.childPositionY);
    const childPositionX = parseInt(props.attributes.childPositionX);
    const fontSize = parseInt(props.attributes.fontSize);
    const {shadow, gradientColor1, gradientColor2, gradient} = props.attributes;

    var lines = content.split('\n');

    let cpath = `M ${points[0].x},${points[0].y}`;

    for (let i = 0; i < points.length; i++) {
        cpath += ` S ${points[i].mx},${points[i].my} ${points[i].x},${points[i].y}`;
    }

    cpath += " Z ";

    return (
        <svg viewBox="0 0 100 100" height={height} width={width}  xmlns="http://www.w3.org/2000/svg">
            {/* {guideline()} */}

            <defs>
            <linearGradient id={ `gradient-${ clientId }` } x1="0" x2="0" y1="0" y2="1">
               <stop offset="0%" stop-color={gradientColor1} />
               <stop offset="100%" stop-color={gradientColor2} />
            </linearGradient>
         </defs>
                        <filter id={ `dropshadow-${ clientId }` } height="130%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="2" dy="2" result="offsetblur"/>
            <feComponentTransfer>
                <feFuncA type="linear" slope="0.5"/> 
            </feComponentTransfer>
            <feMerge> 
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/> 
            </feMerge>
            </filter>
            <path 
                 d={cpath} 
                 class="blob" 
                 filter={ `url(#dropshadow-${ clientId })` } 
                 fill-opacity={fillOpacity/100} 
                 fill= { gradient ?  `url(#gradient-${ clientId })` : backgroundColor}
                     
                 />
            <text>
                    {lines.map((line, index) => {

                        const y = childPositionY + fontSize * index;

                        return (<tspan x={childPositionX} y={y} font-family="TimesNewRomanPS-BoldMT" font-size={fontSize} fill={textColor}>{line}</tspan>)
                    })}

                </text>
        </svg>)
}

export  function SaveBlob({props}) {

    const {setAttributes} = props;
    console.log(' Props ', props);
    
    const { numberOfPoints, points,  width, height, fillOpacity, backgroundColor, textColor, content, clientId } = props.attributes;
    const childPositionY = parseInt(props.attributes.childPositionY);
    const childPositionX = parseInt(props.attributes.childPositionX);
    const fontSize = parseInt(props.attributes.fontSize);
    const {shadow, gradientColor1, gradientColor2, gradient} = props.attributes;

    console.log('  cLINET id ', clientId);
    var lines = content.split('\n');

    let cpath = `M ${points[0].x},${points[0].y}`;

    for (let i = 0; i < points.length; i++) {
        cpath += ` S ${points[i].mx},${points[i].my} ${points[i].x},${points[i].y}`;
    }

    cpath += " Z ";

    return (
        <svg viewBox="0 0 100 100"  height={height} width={width}  xmlns="http://www.w3.org/2000/svg">
            {/* {guideline()} */}
            <defs>
            <linearGradient id={ `gradient-${ clientId }` }  x1="0" x2="0" y1="0" y2="1">
               <stop offset="0%" stop-color={gradientColor1} />
               <stop offset="100%" stop-color={gradientColor2} />
            </linearGradient>
         </defs>
            <filter id={ `dropshadow-${ clientId }` }  height="130%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="2" dy="2" result="offsetblur"/>
            <feComponentTransfer>
                <feFuncA type="linear" slope="0.5"/> 
            </feComponentTransfer>
            <feMerge> 
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/> 
            </feMerge>
            </filter>
            <path 
                 d={cpath} 
                 class="blob" 
                 filter={ `url(#dropshadow-${ clientId })` } 
                 fill-opacity={fillOpacity/100} 
                 fill= { gradient ?  `url(#gradient-${ clientId })` : backgroundColor}
                     
                 />
                <text>
                    {lines.map((line, index) => {

                        const y = childPositionY + fontSize * index;

                        return (<tspan x={childPositionX} y={y} font-family="TimesNewRomanPS-BoldMT" font-size={fontSize} fill={textColor}>{line}</tspan>)
                    })}

                </text>
        </svg>)
}