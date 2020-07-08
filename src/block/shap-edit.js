import { RichText, BlockControls, InspectorControls, PanelColorSettings } from '@wordpress/block-editor'
import { PanelBody, RangeControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { InnerBlocks } from "@wordpress/block-editor";
import { IconButton, ButtonGroup, Button, TextControl, TextareaControl } from '@wordpress/components';
import  {presets, ForSale} from './presets';
import { G, Path, SVG } from '@wordpress/components';
import  { DiscountLabel, NumberTag, SalesTag, Buy1Get1FreeRight, Buy1Get1FreeLeft, ShoutOut, PictureFrame} from  './presets';

const drawShape = (attributes) => {
    const { shapeType} = attributes;
   
    
    switch (shapeType) {
    
        case "Number Tag": return NumberTag(attributes);
        case "Discount Label": return DiscountLabel(attributes);
    
        case "Sales Tag": return  SalesTag(attributes);
        case "Buy1Get1FreeLeft": return Buy1Get1FreeLeft(attributes);
        case "Buy1Get1FreeRight": return Buy1Get1FreeRight(attributes);
        case "ShoutOut": return  ShoutOut(attributes);
        case "PictureFrame": return PictureFrame(attributes);
        case "ForSale": return  ForSale(attributes);
        // case "Ellipse": return (
        //     <ellipse cx={centerX} cy={centerY} rx={centerX} ry={centerY}
        //         stroke="black" stroke-width={strokeWidth} fill={backgroundColor} />
        // )
        // case "Rectangle": return (
        //     <rect width={width} height={height} stroke="black" stroke-width={strokeWidth} fill={backgroundColor} />)
        //     ;
        // case "Triangle": return (
        //     <polygon points={trianglePoints} stroke="black" stroke-width={strokeWidth} fill={backgroundColor} />
        // );
       

    }
}

export function ShapeSave(props) {

    const { className, attributes, setAttributes } = props;
    const { content, height, width } = attributes;



    return (         <div>   <svg viewBox="0 0 100 100"  height={height} width={width}>

        {drawShape(attributes)}


    </svg>
    </div>);


}


export function ShapeEdit(props) {

    const { className, attributes, setAttributes } = props;
    const { content, backgroundColor, textColor, shapeType, height, width , childPositionX, childPositionY, fontSize} = attributes;


    const onChangeShapeType = (e) => {  
                                        setAttributes(presets[e.target.id ])

                        }

     
    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Reset to  Presets', 'askteammate-shapeart')}>
                    <ButtonGroup>
                        {
                        Object.keys(presets).map( (shape) => {

                                if (shapeType === shape)
                                    return (<Button
                                        isPrimary
                                        id={shape}
                                        onClick={onChangeShapeType}>
                                        {shape}
                                    </Button>)
                                else
                                    return (<Button
                                        isSecondary
                                        id={shape}
                                        onClick={onChangeShapeType}>
                                        {shape}
                                    </Button>)
                            })}


                    </ButtonGroup>
                </PanelBody>

                <PanelBody title={__('Dimentions/Position', 'askteammate-shapeart')}>
                    <TextControl
                        label="Width"
                        value={width}
                        onChange={(width) => {  setAttributes({ width: width }) }}
                    />

                    <TextControl
                        label="Height"
                        value={height}
                        onChange={(height) => {  setAttributes({ height: height }) }}
                    />
                    
                </PanelBody>

                <PanelColorSettings
                    title={__("Colors", 'askteammate-shapeart')}

                    colorSettings={[
                        {
                            value: backgroundColor,
                            label: __("Background Color", 'askteammate-shapeart'),
                            onChange: (backgroundColor) => { setAttributes({ backgroundColor }) },

                        },
                        {
                            value: textColor,
                            label: __("Text Color", 'askteammate-shapeart'),
                            onChange: (textColor) => setAttributes( {textColor}),

                        },


                    ]} />

                <PanelBody title={__('Content', 'askteammate-shapeart')}>
                      <TextareaControl
                        label="Content"
                        value={content}
                        onChange= {(content) =>  setAttributes({ content } )}
                        
                    />
                    <RangeControl
                        label="Font Size"
                        value={ fontSize }
                        onChange={ ( fontSize ) => setAttributes( { fontSize } ) }
                        min={ 8 }
                        max={ 100 }
                    />
                     <TextControl
                        label="Text Position X"
                        value={childPositionX}
                        onChange={(childPositionX) => {  setAttributes({ childPositionX: childPositionX }) }}
                    />

                    <TextControl
                        label="Text Position Y"
                        value={childPositionY}
                        onChange={(childPositionY) => {  setAttributes({ childPositionY: childPositionY }) }}
                    />
                </PanelBody>

                

            </InspectorControls>
            <div>
          
            <svg viewBox="0 0 100 100"  height={height} width={width}>
                {drawShape(attributes)}

                    {/* <foreignObject width={width} height={height} x={childPositionX} y={childPositionX} color={textColor}>
                    <InnerBlocks
                        template={[
                            ['askteammate/shapeart-text', attributes] 
                            
                        ]}
                        templateLock="all"

                    /></foreignObject> */}
            </svg>
            </div>



        </>
    );
}