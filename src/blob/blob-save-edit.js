import { createBlob, EditBlob, SaveBlob } from './blob';

import { BlockControls, InspectorControls, ColorPalette } from '@wordpress/block-editor'
import { PanelBody, RangeControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { TextControl, TextareaControl, ToggleControl } from '@wordpress/components';

import { MediaPlaceholder } from "@wordpress/editor";

import {ColorPaletteControl} from '@wordpress/block-editor';
export function SaveBlock(props) {

    return <SaveBlob props={props} />
}


export function EditBlock(props) {

    const { width, height, backgroundColor, textColor, content, fontSize, childPositionX, childPositionY, fillOpacity, gradient , gradientColor1, gradientColor2, shadow, isImage, clipbottom, clientId} = props.attributes;
    let { points } = props.attributes;
    const { setAttributes } = props;
    const { refresh } = props.attributes;
    
    if (points.length <= 0) {
        createBlob(props);
        points = [...points];
        setAttributes({ points });
    }

    if(clientId.length <= 0  ) {
        setAttributes({ clientId: props.clientId } );
    }
    console.log( ' Client id ', clientId);

    return (<>
        <BlockControls
            controls={
                [
                    {
                        icon: 'update',
                        title: __('Refresh', 'ShapeArt'),
                        onClick: () => {

                            setAttributes({ points: [] });
                        }
                    }


                ]
            }
        />
        <InspectorControls>


            <PanelBody title={__('Dimentions', 'askteammate-shapeart')}>
                <TextControl
                    label="Width"
                    value={width}
                    onChange={(width) => { setAttributes({ width: width }) }}
                />

                <TextControl
                    label="Height"
                    value={height}
                    onChange={(height) => { setAttributes({ height: height }) }}
                />

            </PanelBody>

            <PanelBody title={__('Blob Color', 'askteammate-shapeart')}>

                <ToggleControl
                    checked={shadow}
                    label="Shadow"
                    onChange={() => { console.log('Inside Toggle shadow ', shadow); setAttributes({ shadow: !shadow }) }}
                />
                <ToggleControl
                    checked={gradient}
                    label="Gradient"
                    onChange={() => { setAttributes({ gradient: !gradient }) }}
                />
                {gradient ? (
                    <>
                    <ColorPaletteControl
                        value={gradientColor1}
                        label="Color 1:"
                        onChange={(gradientColor1) => { setAttributes({ gradientColor1 }) }}
                    />

                    <ColorPaletteControl
                        value={gradientColor2}
                        label="Color 2:"
                        onChange={(gradientColor2) => { setAttributes({ gradientColor2 }) }}
                    />
                    </>
                )
                :
                    <ColorPaletteControl
                        value={backgroundColor}
                        label="Background Color"
                        onChange={(backgroundColor) => { setAttributes({ backgroundColor }) }}
                    />
                }

                <RangeControl
                    label="Background Color Opacity"
                    value={fillOpacity}
                    onChange={(fillOpacity) => { setAttributes({ fillOpacity }) }}
                    min={0}
                    max={100}
                />
              

            </PanelBody>






            <PanelBody title={__('Content', 'askteammate-shapeart')}>

                 <ToggleControl
                    checked={isImage}
                    label="Image or Text"
                    onChange={() => { setAttributes({ isImage: !isImage }) }}
                />
                {
                    isImage ?  <>

                    <ToggleControl
                          checked={clipbottom}
                          label="Clip Bottom"
                          onChange={() => { setAttributes({ clipbottom: ! clipbottom }) }}
                     />
                    
                    </>
                    :
                    <>
                    <TextareaControl
                    label="Content"
                    value={content}
                    onChange={(content) => setAttributes({ content })}

                />
                    <ColorPaletteControl
                    value={textColor}
                    label="Text Color"
                    onChange={(textColor) => { setAttributes({ textColor }) }}
                    />
                    
                
                <RangeControl
                    label="Font Size"
                    value={fontSize}
                    onChange={(fontSize) => setAttributes({ fontSize })}
                    min={8}
                    max={100}
                />

               

                <TextControl
                    label="Inner Element X"
                    value={childPositionX}
                    onChange={(childPositionX) => { setAttributes({ childPositionX: childPositionX }) }}
                />

                <TextControl
                    label="Inner Element Y"
                    value={childPositionY}
                    onChange={(childPositionY) => { setAttributes({ childPositionY: childPositionY }) }}
                />
                </>
                }
            </PanelBody>



        </InspectorControls>

        <EditBlob props={props} />





    </>
    )

}




